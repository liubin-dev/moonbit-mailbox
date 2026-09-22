#!/usr/bin/env node
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {Maildir} from './maildir-store.mjs';
const limit=32*1024*1024;
function readInput(file) {
  const fd=fs.openSync(file,'r');
  try {
    const stat=fs.fstatSync(fd);if(!stat.isFile()||stat.size>limit)throw Error('Message must be a regular file <=32 MiB');
    const data=Buffer.alloc(stat.size);let at=0;
    while(at<data.length){const n=fs.readSync(fd,data,at,data.length-at,null);if(!n)throw Error('Message changed while reading');at+=n;}
    if(fs.readSync(fd,Buffer.alloc(1),0,1,null))throw Error('Message grew while reading');
    return data;
  }finally{fs.closeSync(fd);}
}
try {
  const args=process.argv.slice(2);
  if(args.length===1&&args[0]==='--help')console.log('Usage:\n  import ROOT INPUT.eml [--create] [--key KEY]\n  list ROOT\n  export ROOT KEY OUTPUT.eml\n  flags ROOT KEY FLAGS\nRaw bytes preserved. New output paths only. --create explicitly creates a Maildir.\nExit 0 completed, 1 rejected/IO error. An interrupted import/export may leave a file: inspect before retrying.');
  else {
    const command=args.shift(),root=args.shift();if(!root)throw Error('Expected command and Maildir root; use --help');
    if(command==='import'){
      const file=args.shift();if(!file)throw Error('Expected input message');let create=false,key;
      while(args.length){const arg=args.shift();if(arg==='--create'&&!create)create=true;else if(arg==='--key'&&key===undefined&&args.length)key=args.shift();else throw Error('Unknown/duplicate import option');}
      const data=readInput(file),store=new Maildir(root,{create});
      const delivered=store.deliver(data,key===undefined?{}:{key});
      console.log(JSON.stringify({key:delivered,bytes:data.length,sha256:createHash('sha256').update(data).digest('hex')}));
    }else if(command==='list'){
      if(args.length)throw Error('Unexpected list argument');console.log(JSON.stringify(new Maildir(root).list()));
    }else if(command==='export'){
      if(args.length!==2)throw Error('Expected message key and new output file');
      const [key,out]=args,data=new Maildir(root).read(key);
      fs.writeFileSync(out,data,{flag:'wx',mode:0o600});
      console.log(JSON.stringify({key,bytes:data.length,output:out,sha256:createHash('sha256').update(data).digest('hex')}));
    }else if(command==='flags'){
      if(args.length!==2)throw Error('Expected message key and flags');const store=new Maildir(root);store.setFlags(args[0],args[1]);console.log(JSON.stringify(store.locate(args[0])));
    }else throw Error('Unknown command');
  }
}catch(error){console.error(JSON.stringify({error:error.message,code:error.code}));process.exitCode=1;}
