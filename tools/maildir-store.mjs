import fs from 'node:fs';
import path from 'node:path';
import {randomUUID} from 'node:crypto';
import {maildir_name,maildir_flags} from '../web/engine.mjs';

/** Synchronous local Maildir host. Message bytes are preserved; name/flag rules use MoonBit. */
export class Maildir {
  constructor(root,{create=false,separator=process.platform==='win32'?'!':':',maxMessageBytes=32*1024*1024}={}){
    if(!['!',':'].includes(separator)||!Number.isSafeInteger(maxMessageBytes)||maxMessageBytes<1)throw new Error('Invalid Maildir options');
    if(process.platform==='win32'&&separator===':')throw new Error('Windows Maildir needs ! separator');
    this.root=path.resolve(root);this.separator=separator;this.maxMessageBytes=maxMessageBytes;
    if(create){fs.mkdirSync(this.root,{recursive:true,mode:0o700});for(const sub of ['tmp','new','cur'])fs.mkdirSync(path.join(this.root,sub),{recursive:true,mode:0o700})}
    this.check();
  }
  check(){for(const dir of [this.root,...['tmp','new','cur'].map(x=>path.join(this.root,x))]){const stat=fs.lstatSync(dir);if(!stat.isDirectory()||stat.isSymbolicLink())throw new Error('Maildir requires real directories')}}
  key(key){if(typeof key!=='string'||!key||key.length>180||key.startsWith('.')||/[<>:"/\\|?*\x00-\x1f]/.test(key)||key.includes('!2,')||key.endsWith('.')||key.endsWith(' ')||/^(con|prn|aux|nul|com[1-9]|lpt[1-9])(\.|$)/i.test(key))throw new Error('Invalid Maildir key');return key}
  decode(name){const input=this.separator==='!'?name.replace('!2,',':2,'):name;const canonical=maildir_name(input);if(canonical.startsWith('ERROR:'))throw new Error(canonical);const at=canonical.indexOf(':2,');return {key:this.key(at<0?canonical:canonical.slice(0,at)),flags:at<0?'':canonical.slice(at+3)}}
  list(){this.check();const result=[],keys=new Set();for(const location of ['new','cur'])for(const name of fs.readdirSync(path.join(this.root,location))){if(name.startsWith('.'))continue;const filename=path.join(this.root,location,name);const stat=fs.lstatSync(filename);if(!stat.isFile()||stat.isSymbolicLink())throw new Error('Non-regular Maildir message');const parsed=this.decode(name);if(keys.has(parsed.key))throw new Error('Ambiguous duplicate Maildir key');keys.add(parsed.key);result.push({...parsed,location,name,size:stat.size})}return result.sort((a,b)=>a.key.localeCompare(b.key))}
  locate(key){this.key(key);const entry=this.list().find(x=>x.key===key);if(!entry){const error=new Error('Maildir message not found');error.code='ENOENT';throw error}return entry}
  read(key){const entry=this.locate(key);if(entry.size>this.maxMessageBytes)throw new Error('Message exceeds size limit');const fd=fs.openSync(path.join(this.root,entry.location,entry.name),fs.constants.O_RDONLY|(fs.constants.O_NOFOLLOW??0));try{const stat=fs.fstatSync(fd);if(!stat.isFile()||stat.size>this.maxMessageBytes)throw new Error('Invalid message file');return fs.readFileSync(fd)}finally{fs.closeSync(fd)}}
  locked(key,fn){this.check();this.key(key);const lock=path.join(this.root,'tmp','.lock-'+key);fs.mkdirSync(lock);try{return fn()}finally{fs.rmdirSync(lock)}}
  deliver(content,{key=Date.now()+'.'+randomUUID()}={}){
    if(typeof content!=='string'&&!Buffer.isBuffer(content)&&!(content instanceof Uint8Array))throw new Error('Message must be text or bytes');const data=Buffer.from(content);if(data.length>this.maxMessageBytes)throw new Error('Message exceeds size limit');
    return this.locked(key,()=>{
      if(this.list().some(x=>x.key===key)){const error=new Error('Message key already exists');error.code='EEXIST';throw error}
      const temporary=path.join(this.root,'tmp',key+'.'+randomUUID()),destination=path.join(this.root,'new',key);
      let fd;
      try{fd=fs.openSync(temporary,'wx',0o600);fs.writeFileSync(fd,data);fs.fsyncSync(fd);fs.closeSync(fd);fd=undefined;fs.linkSync(temporary,destination);return key}
      finally{if(fd!==undefined)fs.closeSync(fd);try{fs.unlinkSync(temporary)}catch(error){if(error.code!=='ENOENT')this.cleanupPending=true}}
    });
  }
  setFlags(key,flags){return this.locked(key,()=>{const entry=this.locate(key);const canonical=maildir_flags(key,flags);if(canonical.startsWith('ERROR:'))throw new Error(canonical);const name=this.separator==='!'?canonical.replace(':2,','!2,'):canonical;const old=path.join(this.root,entry.location,entry.name),next=path.join(this.root,'cur',name);if(old===next)return;fs.linkSync(old,next);try{fs.unlinkSync(old)}catch(error){try{fs.unlinkSync(next)}catch{}throw error}})}
  remove(key){return this.locked(key,()=>{const entry=this.locate(key);fs.unlinkSync(path.join(this.root,entry.location,entry.name))})}
  folder(name,{create=false}={}){if(typeof name!=='string'||!name||name.startsWith('.')||name.endsWith('.')||name.includes('..')||/[<>:"/\\|?*\x00-\x1f]/.test(name))throw new Error('Invalid folder name');return new Maildir(path.join(this.root,'.'+name),{create,separator:this.separator,maxMessageBytes:this.maxMessageBytes})}
}
