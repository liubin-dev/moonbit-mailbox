import {attachment_name} from '../web/engine.mjs';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
const values=[`attachment; filename="plain.txt"`,`attachment; filename*=UTF-8''%E4%B8%AD%E6%96%87.txt`,`attachment; filename*0*=utf-8'zh'%E4%B8%AD; filename*1*=%E6%96%87; filename*2=.txt`,`attachment; filename*1="name.txt"; filename*0="long "`,`attachment; filename*=iso-8859-1'en'caf%E9.txt`,`attachment; filename="semi;colon.txt"`,`attachment; filename*0*=utf-8''%E4; filename*1*=%B8%AD.txt`];
const r=spawnSync(process.env.PYTHON??'python',['-c',`import sys,json\nfrom email.message import Message\nresults=[]\nfor h in json.load(sys.stdin):\n m=Message();m['Content-Disposition']=h;results.append(m.get_filename())\nprint(json.dumps(results))`],{input:JSON.stringify(values),encoding:'utf8',env:{...process.env,PYTHONUTF8:'1'}});assert.equal(r.status,0,r.stderr);JSON.parse(r.stdout).forEach((v,i)=>assert.equal(attachment_name(values[i]),v));
for(const bad of [`attachment; filename*1=x`,`attachment; filename*0=x; filename*2=y`,`attachment; filename*=utf-8''%ZZ`,`attachment; filename*00=x`,`attachment; filename*0=x; filename*0*=utf-8''y`,`attachment; filename=x; filename*=utf-8''y`])assert.match(attachment_name(bad),/^ERROR:/);
console.log('MIME parameters: 7 Python filename comparisons and 6 malformed/ambiguous cases passed');
