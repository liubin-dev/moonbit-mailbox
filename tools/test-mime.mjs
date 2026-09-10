import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {mime_summary} from '../web/engine.mjs';
const cases=[
 Buffer.from('Subject: plain\r\n\r\nhello\r\n'),
 Buffer.from('Content-Type: text/plain; charset=utf-8\r\nContent-Transfer-Encoding: base64\r\n\r\n5L2g5aW9'),
 Buffer.from('Content-Transfer-Encoding: quoted-printable\n\nhello=20world=0Aline=\njoined'),
 Buffer.from('Content-Type: multipart/mixed; boundary="semi;colon"\r\n\r\npreamble\r\n--semi;colon\r\nContent-Type: text/plain\r\n\r\nhello\r\n--semi;colon\r\nContent-Type: application/octet-stream\r\nContent-Transfer-Encoding: base64\r\n\r\nAP9BQkM=\r\n--semi;colon--\r\nepilogue'),
 Buffer.from('Content-Type: multipart/alternative; boundary=x\n\n--x\n\ntext\n--x\nContent-Type: text/html\n\n<b>html</b>\n--x--'),
 Buffer.from('Content-Type: message/rfc822\r\n\r\nSubject: inner\r\n\r\nforwarded'),
 Buffer.from('Content-Type: multipart/mixed; boundary=outer\r\n\r\n--outer\r\nContent-Type: multipart/mixed; boundary=inner\r\n\r\n--inner\r\n\r\nbody\r\n--inner--\r\n\r\n--outer--'),
 Buffer.from('Content-Type: application/octet-stream\r\nContent-Transfer-Encoding: binary\r\n\r\n\x00\xff','latin1'),
];
const python=`import json,base64,sys,email.policy\nfrom email.parser import BytesParser\nresults=[]\nfor item in json.load(sys.stdin):\n m=BytesParser(policy=email.policy.default).parsebytes(base64.b64decode(item))\n out=[]\n def visit(p):\n  body=b'' if p.is_multipart() else p.get_payload(decode=True)\n  if p.get_content_type()=='message/rfc822':\n   return False\n  out.append(p.get_content_type()+' '+base64.b64encode(body).decode())\n  if p.is_multipart():\n   for child in p.iter_parts(): visit(child)\n visit(m);results.append('\\n'.join(out))\nprint(json.dumps(results))`;
// message/rfc822 keeps the raw nested bytes in our API; verify its explicit expected tree separately.
const compared=cases.filter((_,i)=>i!==5);const r=spawnSync(process.env.PYTHON??'python',['-c',python],{input:JSON.stringify(compared.map(b=>b.toString('base64'))),encoding:'utf8'});assert.equal(r.status,0,r.stderr);const expected=JSON.parse(r.stdout);
for(let i=0;i<compared.length;i++)assert.equal(mime_summary(compared[i].toString('base64')),expected[i],`Python case ${i}`);
const inner=Buffer.from('Subject: inner\r\n\r\nforwarded');assert.equal(mime_summary(cases[5].toString('base64')),'message/rfc822 '+inner.toString('base64')+'\ntext/plain '+Buffer.from('forwarded').toString('base64'));
for(const bad of ['Content-Type: multipart/mixed\n\nbody','Content-Type: multipart/mixed; boundary=x\n\n--x\n\nmissing close','Content-Transfer-Encoding: base64\n\n@@@','Content-Transfer-Encoding: quoted-printable\n\n=Z0'])assert.match(mime_summary(Buffer.from(bad).toString('base64')),/^ERROR:/);
console.log('MIME: 7 Python comparisons, nested message and 4 malformed scenarios passed');
