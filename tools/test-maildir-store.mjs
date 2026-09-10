import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {Maildir} from './maildir-store.mjs';
await test('disk Maildir delivery flags folders and Python interoperability',t=>{
 const parent=fs.mkdtempSync(path.join(os.tmpdir(),'moonbit-maildir-'));t.after(()=>fs.rmSync(parent,{recursive:true,force:true}));const root=path.join(parent,'mail');const box=new Maildir(root,{create:true,separator:'!'});
 const data=Buffer.from('Subject: local fixture\r\n\r\nBody\x00raw\r\n');const key=box.deliver(data,{key:'unique-fixture'});assert.deepEqual(box.read(key),data);assert.equal(box.list()[0].location,'new');
 assert.throws(()=>box.deliver('replacement',{key}),/already exists/);assert.deepEqual(box.read(key),data);box.setFlags(key,'SF');assert.equal(box.list()[0].flags,'FS');assert.equal(box.list()[0].location,'cur');
 const py=spawnSync(process.env.PYTHON??'python',['-c',`import mailbox,sys\nm=mailbox.Maildir(sys.argv[1],create=False);m.colon='!'\nassert m.get_flags('unique-fixture')=='FS'\nassert b'Body\\x00raw' in m.get_bytes('unique-fixture')\nk=m.add(b'Subject: Python\\n\\nFrom Python\\n');m.set_flags(k,'R');print(k)`,root],{encoding:'utf8'});assert.equal(py.status,0,py.stderr);const fromPython=py.stdout.trim();assert.match(box.read(fromPython).toString(),/From Python/);assert.equal(box.list().find(x=>x.key===fromPython).flags,'R');
 const archive=box.folder('Archive.2026',{create:true});archive.deliver(box.read(key));assert.equal(archive.list().length,1);box.remove(key);assert.throws(()=>box.read(key),/not found/);
 assert.throws(()=>box.deliver('bad',{key:'../escape'}),/Invalid/);assert.throws(()=>box.folder('../escape',{create:true}),/Invalid/);assert.deepEqual(fs.readdirSync(path.join(root,'tmp')),[]);
});
