import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const dir=fs.mkdtempSync(path.join(os.tmpdir(),'maildir-cli-')),root=path.join(dir,'archive');
const cli=fileURLToPath(new URL('./maildir-cli.mjs',import.meta.url));
const run=(...args)=>spawnSync(process.execPath,[cli,...args],{encoding:'utf8',timeout:10000,windowsHide:true});
try{
  const source=path.join(dir,'input.eml'),output=path.join(dir,'output.eml');
  const bytes=Buffer.concat([Buffer.from('Subject: archive\r\n\r\nFrom a body\r\n'),Buffer.from([0,0xff,0x80,13,10])]);fs.writeFileSync(source,bytes);
  let result=run('import',root,source,'--create','--key','stable');assert.equal(result.status,0,result.stderr);
  assert.equal(run('import',root,source,'--key','stable').status,1);
  result=run('flags',root,'stable','S');assert.equal(result.status,0,result.stderr);
  result=run('export',root,'stable',output);assert.equal(result.status,0,result.stderr);assert.deepEqual(fs.readFileSync(output),bytes);
  fs.writeFileSync(output,'keep');assert.equal(run('export',root,'stable',output).status,1);assert.equal(fs.readFileSync(output,'utf8'),'keep');
  const entries=JSON.parse(run('list',root).stdout);assert.equal(entries.length,1);assert.equal(entries[0].flags,'S');assert.equal(entries[0].location,'cur');
  assert.equal(run('import',root,source,'--key','../escape').status,1);
  console.log('Maildir CLI: binary byte preservation, flags, duplicate/no-overwrite/path rejection passed');
}finally{
  if(path.dirname(dir)!==path.resolve(os.tmpdir())||!path.basename(dir).startsWith('maildir-cli-'))throw Error('Unexpected temporary path');
  fs.rmSync(dir,{recursive:true,force:true});
}
