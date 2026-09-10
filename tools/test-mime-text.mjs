import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {header_display,body_display} from '../web/engine.mjs';
const cases=['Plain subject','=?utf-8?Q?=E4=BD=A0=E5=A5=BD?=','=?UTF-8?B?5L2g5aW9?=','=?iso-8859-1?Q?Andr=E9?=','=?utf-8?q?Hello_world?=','=?utf-8?b?5L2g?= \r\n\t=?UTF-8?B?5aW9?=','Re: =?UTF-8?B?5L2g5aW9?= <local@example.test>','=?utf-8?q?one?= =?iso-8859-1?q?caf=E9?=','literal 😀 text'];
const r=spawnSync(process.env.PYTHON??'python',['-c',`import sys,json\nfrom email.header import decode_header,make_header\nprint(json.dumps([str(make_header(decode_header(s))) for s in json.load(sys.stdin)]))`],{input:JSON.stringify(cases),encoding:'utf8',env:{...process.env,PYTHONUTF8:'1'}});assert.equal(r.status,0,r.stderr);JSON.parse(r.stdout).forEach((expected,i)=>assert.equal(header_display(cases[i]),expected,`header ${i}`));
for(const [charset,body,expected] of [['utf-8','5L2g5aW9','你好'],['iso-8859-1','Q2Fm6Q==','Café'],['us-ascii','SGVsbG8=','Hello']]){
 const mail=`Content-Type: text/plain; charset=${charset}\r\nContent-Transfer-Encoding: base64\r\n\r\n${body}`;assert.equal(body_display(Buffer.from(mail).toString('base64')),expected);
}
for(const bad of ['=?utf-8?b?@@@?=','=?unknown?q?abc?=','=?utf-8?x?abc?=','=?utf-8?q?=ZZ?=','=?utf-8?q?unfinished'])assert.match(header_display(bad),/^ERROR:/);
assert.match(body_display(Buffer.from('Content-Type: application/octet-stream\n\nabc').toString('base64')),/^ERROR:/);
console.log('MIME text: 9 Python header comparisons, 3 charset bodies and 6 rejection cases passed');
