class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $oob() {
  throw new Error("Index out of bounds");
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function _M0TPB4IterGcE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGRPC16string10StringViewE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function _M0TPB9ArrayViewGkE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function $makebytes(a, b) {
  const arr = new Uint8Array(a);
  if (b !== 0) {
    arr.fill(b);
  }
  return arr;
}
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB4IterGsE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB8MutLocalGORPC16string10StringViewE(param0) {
  this.val = param0;
}
function _M0TPB9ArrayViewGcE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB3MapGssE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGssE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPC15bytes9BytesView(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const $bytes_literal$0 = new Uint8Array();
const _M0MPB7JSArray12append__view = (dst, src, src_offset, len) => {
   for (let i = 0; i < len; i++) {
     dst.push(src[src_offset + i]);
   }
 };
function _M0TPB12MutArrayViewGcE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGRPC16string10StringViewE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC15debug4Repr7UnitLit() {}
_M0DTPC15debug4Repr7UnitLit.prototype.$tag = 0;
function _M0DTPC15debug4Repr7Integer(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7Integer.prototype.$tag = 1;
function _M0DTPC15debug4Repr9DoubleLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr9DoubleLit.prototype.$tag = 2;
function _M0DTPC15debug4Repr8FloatLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr8FloatLit.prototype.$tag = 3;
function _M0DTPC15debug4Repr7BoolLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7BoolLit.prototype.$tag = 4;
function _M0DTPC15debug4Repr7CharLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7CharLit.prototype.$tag = 5;
function _M0DTPC15debug4Repr9StringLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr9StringLit.prototype.$tag = 6;
function _M0DTPC15debug4Repr5Tuple(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr5Tuple.prototype.$tag = 7;
function _M0DTPC15debug4Repr5Array(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr5Array.prototype.$tag = 8;
function _M0DTPC15debug4Repr6Record(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr6Record.prototype.$tag = 9;
function _M0DTPC15debug4Repr4Enum(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr4Enum.prototype.$tag = 10;
function _M0DTPC15debug4Repr3Map(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr3Map.prototype.$tag = 11;
function _M0DTPC15debug4Repr11RecordField(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr11RecordField.prototype.$tag = 12;
function _M0DTPC15debug4Repr14EnumLabeledArg(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr14EnumLabeledArg.prototype.$tag = 13;
function _M0DTPC15debug4Repr6Opaque(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr6Opaque.prototype.$tag = 14;
function _M0DTPC15debug4Repr7Literal(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7Literal.prototype.$tag = 15;
function _M0DTPC15debug4Repr8MapEntry(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr8MapEntry.prototype.$tag = 16;
function _M0DTPC15debug4Repr7Omitted() {}
_M0DTPC15debug4Repr7Omitted.prototype.$tag = 17;
const _M0DTPC15debug4Repr7Omitted__ = new _M0DTPC15debug4Repr7Omitted();
function _M0TPC15debug13ContentParens(param0, param1) {
  this.size = param0;
  this.lines = param1;
}
function _M0TPC15debug7Content(param0, param1, param2) {
  this.size = param0;
  this.lines = param1;
  this.needs_parens = param2;
}
const _M0FPC28encoding4utf816encode__utf8__js = (() => {
   const encoder = new TextEncoder();
   return function(src, start, len, bom) {
     const end = start + len;
     const encoded = encoder.encode(src.slice(start, end));
     if (!bom) {
       return encoded;
     }
     const result = new Uint8Array(encoded.length + 3);
     result[0] = 0xEF;
     result[1] = 0xBB;
     result[2] = 0xBF;
     result.set(encoded, 3);
     return result;
   };
 })();
const _M0FPC28encoding4utf816decode__utf8__js = ((preserveBOMDecoder, dropBOMDecoder) => function(bytes, start, len, preserveBOM) {
   try {
     const end = start + len;
     const slice = bytes.subarray(start, end);
     const decoder = preserveBOM ? preserveBOMDecoder : dropBOMDecoder;
     return [decoder.decode(slice)];
   } catch (_) {
     return [];
   }
 })(
   new TextDecoder("utf-8", { fatal: true, ignoreBOM: true }),
   new TextDecoder("utf-8", { fatal: true, ignoreBOM: false }),
 );
function _M0DTPC16result6ResultGsRPC28encoding4utf89MalformedE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC28encoding4utf89MalformedE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRPC28encoding4utf89MalformedE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC28encoding4utf89MalformedE2Ok.prototype.$tag = 1;
function _M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed.prototype.$tag = 2;
function _M0DTPC15error5Error60moonbitlang_2fcore_2fencoding_2futf8_2eMalformed_2eMalformed(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error60moonbitlang_2fcore_2fencoding_2futf8_2eMalformed_2eMalformed.prototype.$tag = 1;
function _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid.prototype.$tag = 0;
function _M0TPB9ArrayViewGyE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPC16buffer6Buffer(param0, param1) {
  this.data = param0;
  this.len = param1;
}
const $bytes_literal$1 = new Uint8Array([65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,48,49,50,51,52,53,54,55,56,57,43,47]);
function _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGzRPC28encoding6base649MalformedE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP211localreview7mailbox11MaildirNameRP211localreview7mailbox12MailboxErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview7mailbox11MaildirNameRP211localreview7mailbox12MailboxErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview7mailbox11MaildirNameRP211localreview7mailbox12MailboxErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview7mailbox11MaildirNameRP211localreview7mailbox12MailboxErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGsE(param0) {
  this.val = param0;
}
function _M0TP211localreview7mailbox11MaildirName(param0, param1, param2) {
  this.unique = param0;
  this.flags = param1;
  this.has_info = param2;
}
function _M0DTPC16result6ResultGsRP211localreview7mailbox12MailboxErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP211localreview7mailbox12MailboxErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRP211localreview7mailbox12MailboxErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP211localreview7mailbox12MailboxErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRP211localreview7mailbox12MailboxErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP211localreview7mailbox12MailboxErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRP211localreview7mailbox12MailboxErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP211localreview7mailbox12MailboxErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGzRP211localreview7mailbox12MailboxErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGzRP211localreview7mailbox12MailboxErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGzRP211localreview7mailbox12MailboxErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGzRP211localreview7mailbox12MailboxErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGbE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGUsRPB3MapGssEERP211localreview7mailbox12MailboxErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUsRPB3MapGssEERP211localreview7mailbox12MailboxErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUsRPB3MapGssEERP211localreview7mailbox12MailboxErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUsRPB3MapGssEERP211localreview7mailbox12MailboxErrorE2Ok.prototype.$tag = 1;
function _M0TPB9ArrayViewGUssEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGRPB5ArrayGRP211localreview7mailbox6HeaderERP211localreview7mailbox12MailboxErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP211localreview7mailbox6HeaderERP211localreview7mailbox12MailboxErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP211localreview7mailbox6HeaderERP211localreview7mailbox12MailboxErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP211localreview7mailbox6HeaderERP211localreview7mailbox12MailboxErrorE2Ok.prototype.$tag = 1;
function _M0TP211localreview7mailbox6Header(param0, param1) {
  this.name = param0;
  this.value = param1;
}
function _M0DTPC16result6ResultGRP211localreview7mailbox8MimePartRP211localreview7mailbox12MailboxErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview7mailbox8MimePartRP211localreview7mailbox12MailboxErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview7mailbox8MimePartRP211localreview7mailbox12MailboxErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview7mailbox8MimePartRP211localreview7mailbox12MailboxErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGOiE(param0) {
  this.val = param0;
}
function $bytes_equal(a, b) {
    if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
function _M0TP211localreview7mailbox8MimePart(param0, param1, param2, param3, param4) {
  this.fields = param0;
  this.media_type = param1;
  this.parameters = param2;
  this.body = param3;
  this.children = param4;
}
function _M0TP211localreview7mailbox10MimeBudget(param0) {
  this.remaining = param0;
}
function _M0DTPC16result6ResultGRPB5ArrayGRP211localreview7mailbox7MessageERP211localreview7mailbox12MailboxErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP211localreview7mailbox7MessageERP211localreview7mailbox12MailboxErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP211localreview7mailbox7MessageERP211localreview7mailbox12MailboxErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP211localreview7mailbox7MessageERP211localreview7mailbox12MailboxErrorE2Ok.prototype.$tag = 1;
function _M0TP211localreview7mailbox7Message(param0, param1) {
  this.envelope = param0;
  this.content = param1;
}
function _M0DTPC16result6ResultGRPB5ArrayGsERP211localreview7mailbox12MailboxErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGsERP211localreview7mailbox12MailboxErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGsERP211localreview7mailbox12MailboxErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGsERP211localreview7mailbox12MailboxErrorE2Ok.prototype.$tag = 1;
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
function _M0FP15Error8to__repr(_e) {
  switch (_e.$tag) {
    case 1: {
      return _M0IPC28encoding4utf89MalformedPC15debug5Debug8to__reprGRPC28encoding4utf89MalformedE(_e);
    }
    case 2: {
      return _M0IPC28encoding6base649MalformedPC15debug5Debug8to__reprGRPC28encoding6base649MalformedE(_e);
    }
    default: {
      return _M0IP211localreview7mailbox12MailboxErrorPC15debug5Debug8to__reprGRP211localreview7mailbox12MailboxErrorE(_e);
    }
  }
}
const _M0MPC16string10StringView4trimN7_2abindS6760 = "\t\n\r ";
const _M0MPC16string6String4trimN7_2abindS6861 = "\t\n\r ";
const _M0MPB4Iter4nextN6constrS9855GcE = 0;
const _M0MPB4Iter4nextN6constrS9856GcE = 0;
const _M0MPB4Iter4nextN6constrS9855GRPC16string10StringViewE = 0;
const _M0MPB4Iter4nextN6constrS9856GRPC16string10StringViewE = 0;
const _M0MPB4Iter3newN6constrS9863GcE = 0;
const _M0MPB4Iter3newN6constrS9863GRPC16string10StringViewE = 0;
const _M0FPC15debug14compact__linesN7_2abindS1134 = "";
const _M0FPC15debug14compact__linesN7_2abindS1147 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1141 = ",";
const _M0FPC15debug14compact__linesN7_2abindS1139 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1138 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1136 = "";
const _M0FPC15debug14compact__linesN7_2abindS1148 = "(";
const _M0FPC15debug14compact__linesN7_2abindS1152 = "";
const _M0FPC15debug14compact__linesN7_2abindS1161 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1155 = ",";
const _M0FPC15debug14compact__linesN7_2abindS1166 = " ";
const _M0FPC15debug19bracket__seq__linesN7_2abindS1175 = "";
const _M0FPC15debug14print__contentN7_2abindS1244 = "\n";
const _M0MPC16string10StringView4findN6constrS9865 = 0;
const _M0FPC15debug6renderN6constrS1705 = 16;
const _M0FPB4seed = _M0FPB12random__seed();
function _M0FPC15abort5abortGRPB9ArrayViewGcEE(msg) {
  return $panic();
}
function _M0FPC15abort5abortGuE(msg) {
  $panic();
}
function _M0FPC15abort5abortGOiE(msg) {
  return $panic();
}
function _M0FPB4rotl(x, r) {
  return x << r | (x >>> (32 - r | 0) | 0);
}
function _M0FPB13consume4__acc(acc, input) {
  return Math.imul(_M0FPB4rotl((acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0, 17), 668265263) | 0;
}
function _M0MPC15array10FixedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGyEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGsEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPB18UninitializedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGyEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGsEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB18UninitializedArray23unsafe__make__and__blitGyE(src, allocate_len, src_offset, dst_offset, blit_len) {
  const dst = new Uint8Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, blit_len);
  return dst;
}
function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(self, obj) {
  _M0IPC16string10StringViewPB4Show6output(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC13int3Int16unsafe__to__char(self) {
  return self;
}
function _M0MPC14byte4Byte8to__char(self) {
  return self;
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0MPB13StringBuilder10to__string(self) {
  return self.val;
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0MPC16uint166UInt1622is__leading__surrogate(self) {
  return self >= 55296 && self <= 56319;
}
function _M0MPC16uint166UInt1623is__trailing__surrogate(self) {
  return self >= 56320 && self <= 57343;
}
function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MPC16uint166UInt1616unsafe__to__char(self) {
  return self;
}
function _M0MPC16string6String16unsafe__char__at(self, index) {
  const c1 = self.charCodeAt(index);
  if (_M0MPC16uint166UInt1622is__leading__surrogate(c1)) {
    const c2 = self.charCodeAt(index + 1 | 0);
    return _M0FPB32code__point__of__surrogate__pair(c1, c2);
  } else {
    return _M0MPC16uint166UInt1616unsafe__to__char(c1);
  }
}
function _M0IPC14byte4BytePB3Add3add(self, that) {
  return (self + that | 0) & 255;
}
function _M0IPC14byte4BytePB3Div3div(self, that) {
  if (that === 0) {
    $panic();
  }
  return (self / that | 0) & 255;
}
function _M0IPC14byte4BytePB3Mod3mod(self, that) {
  if (that === 0) {
    $panic();
  }
  return (self % that | 0) & 255;
}
function _M0IPC14byte4BytePB3Sub3sub(self, that) {
  return (self - that | 0) & 255;
}
function _M0MPC14byte4Byte7to__hexN14to__hex__digitS3978(i) {
  return i < 10 ? _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Add3add(i, 48)) : _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Sub3sub(_M0IPC14byte4BytePB3Add3add(i, 97), 10));
}
function _M0MPC14byte4Byte7to__hex(b) {
  const _self = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS3978(_M0IPC14byte4BytePB3Div3div(b, 16)));
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS3978(_M0IPC14byte4BytePB3Mod3mod(b, 16)));
  return _M0MPB13StringBuilder10to__string(_self);
}
function _M0MPC16string10StringView11sub_2einner(self, start, end) {
  const str_len = self.str.length;
  let abs_end;
  if (end === undefined) {
    abs_end = self.end;
  } else {
    const _Some = end;
    const _end = _Some;
    abs_end = self.start + _end | 0;
  }
  const abs_start = self.start + start | 0;
  if (abs_start >= self.start && (abs_start <= abs_end && abs_end <= self.end)) {
    if (abs_start < str_len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.str.charCodeAt(abs_start))) {
      } else {
        $panic();
      }
    }
    if (abs_end < str_len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.str.charCodeAt(abs_end))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self.str, abs_start, abs_end);
  } else {
    return $panic();
  }
}
function _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i) {
  const logger = _env._1;
  const self = _env._0;
  if (i > seg) {
    logger.method_table.method_2(logger.self, _M0MPC16string10StringView11sub_2einner(self, seg, i));
    return;
  } else {
    return;
  }
}
function _M0MPC16string10StringView18escape__to_2einner(self, logger, quote) {
  if (quote) {
    logger.method_table.method_3(logger.self, 34);
  }
  const len = self.end - self.start | 0;
  const _env = { _0: self, _1: logger };
  let _tmp = 0;
  let _tmp$2 = 0;
  _L: while (true) {
    const i = _tmp;
    const seg = _tmp$2;
    if (i >= len) {
      _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
      break;
    }
    const code = self.str.charCodeAt(self.start + i | 0);
    let c;
    _L$2: {
      switch (code) {
        case 34: {
          c = code;
          break _L$2;
        }
        case 92: {
          c = code;
          break _L$2;
        }
        case 10: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\n");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 13: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\r");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 8: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\b");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 9: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\t");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        default: {
          if (code < 32) {
            _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
            logger.method_table.method_0(logger.self, "\\u{");
            logger.method_table.method_0(logger.self, _M0MPC14byte4Byte7to__hex(code & 255));
            logger.method_table.method_3(logger.self, 125);
            _tmp = i + 1 | 0;
            _tmp$2 = i + 1 | 0;
            continue _L;
          } else {
            _tmp = i + 1 | 0;
            continue _L;
          }
        }
      }
    }
    _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, _M0MPC16uint166UInt1616unsafe__to__char(c));
    _tmp = i + 1 | 0;
    _tmp$2 = i + 1 | 0;
    continue;
  }
  if (quote) {
    logger.method_table.method_3(logger.self, 34);
    return;
  } else {
    return;
  }
}
function _M0MPC16string6String14escape_2einner(self, quote) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0MPC16string10StringView18escape__to_2einner(new _M0TPC16string10StringView(self, 0, self.length), { self: buf, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger }, quote);
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0)) ? new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0) : _M0FPC15abort5abortGRPB9ArrayViewGcEE("Invalid index for View");
}
function _M0IPC16uint166UInt16PB2Eq5equal(self, that) {
  return self === that;
}
function _M0IPC16uint166UInt16PB2Eq10not__equal(self, that) {
  return self !== that;
}
function _M0MPC16uint166UInt168to__uint(self) {
  return self;
}
function _M0IP016_24default__implPB2Eq10not__equalGsE(x, y) {
  return !(x === y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(x, y) {
  return !_M0IPC16string10StringViewPB2Eq5equal(x, y);
}
function _M0FPB14avalanche__acc(acc) {
  let acc$2 = acc;
  acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
  acc$2 = Math.imul(acc$2, -2048144777) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
  acc$2 = Math.imul(acc$2, -1028477379) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
  return acc$2;
}
function _M0FPB13finalize__acc(acc) {
  return _M0FPB14avalanche__acc(acc);
}
function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String11sub_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    if (start < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(start))) {
      } else {
        $panic();
      }
    }
    if (end$2 < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(end$2))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self, start, end$2);
  } else {
    return $panic();
  }
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String11sub_2einner(value, start, start + len | 0));
}
function _M0MPC16string10StringView4data(self) {
  return self.str;
}
function _M0MPC16string10StringView13start__offset(self) {
  return self.start;
}
function _M0IP016_24default__implPB4Show6outputGiE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC13int3IntPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16string6StringPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(self) {
  const logger = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPC15debug4ReprPB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MPB13StringBuilder10to__string(logger);
}
function _M0MPB4Iter4nextGcE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === -1) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9856GcE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9855GcE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGRPC16string10StringViewE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9856GRPC16string10StringViewE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9855GRPC16string10StringViewE;
    }
  }
  return result;
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPB4Iter3newGcE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9863GcE;
  }
  return new _M0TPB4IterGcE(f, size_hint$2);
}
function _M0MPB4Iter3newGRPC16string10StringViewE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9863GRPC16string10StringViewE;
  }
  return new _M0TPB4IterGRPC16string10StringViewE(f, size_hint$2);
}
function _M0MPC15array10FixedArray5makeiGkE(length, value) {
  if (length <= 0) {
    return [];
  } else {
    const array = $make_array_len_and_init(length, value(0));
    let _tmp = 1;
    while (true) {
      const i = _tmp;
      if (i < length) {
        if (i >>> 0 < array.length) {
          array[i] = value(i);
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return array;
  }
}
function _M0MPC16string10StringView11code__units(self) {
  const _bind = _M0MPC15array10FixedArray5makeiGkE(self.str.length, (i) => self.str.charCodeAt(i));
  const _bind$2 = self.start;
  const _bind$3 = self.end;
  const _bind$4 = _bind.length;
  if (_bind$2 < 0 || (_bind$2 > _bind$3 || _bind$3 > _bind$4)) {
    $panic();
  }
  return new _M0TPB9ArrayViewGkE(_bind, _bind$2, _bind$3);
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0IPC16string10StringViewPB4Show6output(self, logger) {
  logger.method_table.method_2(logger.self, self);
}
function _M0MPC16string10StringView4iter(self) {
  const start = self.start;
  const end = self.end;
  const index = new _M0TPB8MutLocalGiE(start);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < end) {
      const c1 = self.str.charCodeAt(index.val);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index.val + 1 | 0) < self.end) {
        const c2 = self.str.charCodeAt(index.val + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          index.val = index.val + 2 | 0;
          return _M0FPB32code__point__of__surrogate__pair(c1, c2);
        }
      }
      index.val = index.val + 1 | 0;
      return _M0MPC16uint166UInt1616unsafe__to__char(c1);
    } else {
      return -1;
    }
  }, undefined);
}
function _M0MPC16string10StringView3all(self, f) {
  const _bind = self.str;
  const _bind$2 = self.start;
  const _bind$3 = self.end;
  let _tmp = _bind$2;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$3) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$4 = _bind.charCodeAt(_string_index);
        if (_bind$4 >= 55296 && _bind$4 <= 56319 && (_string_index + 1 | 0) < _bind$3) {
          const _bind$5 = _bind.charCodeAt(_string_index + 1 | 0);
          if (_bind$5 >= 56320 && _bind$5 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$4 - 55296 | 0, 1024) | 0) + _bind$5 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
          break _L;
        }
      }
      if (!f(_decoded_char)) {
        return false;
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC16string6String20unsafe__range__equal(self, self_off, other, other_off, len) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(self.charCodeAt(self_off + i | 0), other.charCodeAt(other_off + i | 0))) {
      } else {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0IPC16string10StringViewPB2Eq5equal(self, other) {
  const len = self.end - self.start | 0;
  if (len === (other.end - other.start | 0)) {
    if (self.str === other.str && self.start === other.start) {
      return true;
    }
    return _M0MPC16string6String20unsafe__range__equal(self.str, self.start, other.str, other.start, len);
  } else {
    return false;
  }
}
function _M0MPC16string6String12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length) ? new _M0TPC16string10StringView(self, start_offset, end_offset$2) : _M0FPC15abort5abortGRPB9ArrayViewGcEE("Invalid index for View");
}
function _M0MPC16string6String11from__array(chars) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(Math.imul(chars.end - chars.start | 0, 4) | 0);
  const _bind = chars.end - chars.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const c = chars.buf[chars.start + _ | 0];
      _M0IPB13StringBuilderPB6Logger11write__char(buf, c);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPC16string6String31offset__of__nth__char__backward(self, n, start_offset, end_offset) {
  let _tmp = end_offset;
  let _tmp$2 = 0;
  while (true) {
    const utf16_offset = _tmp;
    const char_count = _tmp$2;
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const c = self.charCodeAt(utf16_offset - 1 | 0);
      if (_M0MPC16uint166UInt1623is__trailing__surrogate(c)) {
        _tmp = utf16_offset - 2 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      } else {
        _tmp = utf16_offset - 1 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      }
    } else {
      return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
    }
  }
}
function _M0MPC16string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let _tmp = start_offset;
    let _tmp$2 = 0;
    while (true) {
      const utf16_offset = _tmp;
      const char_count = _tmp$2;
      if (utf16_offset < end_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset);
        if (_M0MPC16uint166UInt1622is__leading__surrogate(c)) {
          _tmp = utf16_offset + 2 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        } else {
          _tmp = utf16_offset + 1 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        }
      } else {
        return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
      }
    }
  } else {
    return _M0FPC15abort5abortGOiE("Invalid start index");
  }
}
function _M0MPC16string6String29offset__of__nth__char_2einner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? _M0MPC16string6String30offset__of__nth__char__forward(self, i, start_offset, end_offset$2) : _M0MPC16string6String31offset__of__nth__char__backward(self, -i | 0, start_offset, end_offset$2);
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0MPB13StringBuilder5reset(self) {
  self.val = "";
}
function _M0FPB19kmp__failure__table(pattern) {
  const m = pattern.end - pattern.start | 0;
  const table = $make_array_len_and_init(m, 0);
  let k = 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < m) {
      const c = pattern.str.charCodeAt(pattern.start + i | 0);
      while (true) {
        if (k > 0 && _M0IPC16uint166UInt16PB2Eq10not__equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
          const _tmp$2 = k - 1 | 0;
          k = _tmp$2 >>> 0 < table.length ? table[_tmp$2] : $oob();
          continue;
        } else {
          break;
        }
      }
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
        k = k + 1 | 0;
      }
      if (i >>> 0 < table.length) {
        table[i] = k;
      } else {
        $oob();
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return table;
}
function _M0FPB24find__pattern__kmp__from(target, pattern, start) {
  const n = target.end - target.start | 0;
  const m = pattern.end - pattern.start | 0;
  const table = _M0FPB19kmp__failure__table(pattern);
  let k = 0;
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < n) {
      const c = target.str.charCodeAt(target.start + i | 0);
      while (true) {
        if (k > 0 && _M0IPC16uint166UInt16PB2Eq10not__equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
          const _tmp$2 = k - 1 | 0;
          k = _tmp$2 >>> 0 < table.length ? table[_tmp$2] : $oob();
          continue;
        } else {
          break;
        }
      }
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
        k = k + 1 | 0;
      }
      if (k === m) {
        return (i - m | 0) + 1 | 0;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < candidate_end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(data.charCodeAt(pos), first) && _M0IPC16uint166UInt16PB2Eq5equal(data.charCodeAt(pos + last_offset | 0), last)) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB42find__two__anchor__candidate__from__string(data, start, candidate_end, first, last_offset, last) {
  return _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last);
}
function _M0FPB21string__ranges__equal(left, left_start, right, right_start, length) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < length) {
      if (_M0IPC16uint166UInt16PB2Eq10not__equal(left.charCodeAt(left_start + i | 0), right.charCodeAt(right_start + i | 0))) {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FPB29two__anchor__should__fallback(failures, scanned) {
  if (failures > 64) {
    return true;
  } else {
    if (8 === 0) {
      $panic();
    }
    return failures > (4 + (scanned / 8 | 0) | 0);
  }
}
function _M0FPB22find__by__two__anchors(target, pattern) {
  const target_len = target.end - target.start | 0;
  const pattern_len = pattern.end - pattern.start | 0;
  const target_start = _M0MPC16string10StringView13start__offset(target);
  const pattern_start = _M0MPC16string10StringView13start__offset(pattern);
  const last_offset = pattern_len - 1 | 0;
  const candidate_end = ((target_start + target_len | 0) - pattern_len | 0) + 1 | 0;
  const first = pattern.str.charCodeAt(pattern.start);
  const last = pattern.str.charCodeAt(pattern.start + last_offset | 0);
  const middle_len = last_offset - 1 | 0;
  let _tmp = target_start;
  let _tmp$2 = 0;
  while (true) {
    const pos = _tmp;
    const failures = _tmp$2;
    if (pos < candidate_end) {
      const found = _M0FPB42find__two__anchor__candidate__from__string(_M0MPC16string10StringView4data(target), pos, candidate_end, first, last_offset, last);
      if (found < 0) {
        return undefined;
      }
      if (_M0FPB21string__ranges__equal(_M0MPC16string10StringView4data(target), found + 1 | 0, _M0MPC16string10StringView4data(pattern), pattern_start + 1 | 0, middle_len)) {
        return found - target_start | 0;
      }
      const failures$2 = failures + 1 | 0;
      const scanned = found - target_start | 0;
      if (_M0FPB29two__anchor__should__fallback(failures$2, scanned)) {
        return _M0FPB24find__pattern__kmp__from(target, pattern, scanned + 1 | 0);
      }
      _tmp = found + 1 | 0;
      _tmp$2 = failures$2;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0FPB24find__code__unit__scalar(data, start, end, code) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(data.charCodeAt(pos), code)) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB30find__code__unit__from__string(data, start, end, code) {
  return _M0FPB24find__code__unit__scalar(data, start, end, code);
}
function _M0FPB28find__code__unit__from__view(target, start, end, code) {
  const target_start = _M0MPC16string10StringView13start__offset(target);
  const found = _M0FPB30find__code__unit__from__string(_M0MPC16string10StringView4data(target), target_start + start | 0, target_start + end | 0, code);
  return found < 0 ? -1 : found - target_start | 0;
}
function _M0MPC16string10StringView4find(self, str) {
  const pattern_len = str.end - str.start | 0;
  switch (pattern_len) {
    case 0: {
      return _M0MPC16string10StringView4findN6constrS9865;
    }
    case 1: {
      const found = _M0FPB28find__code__unit__from__view(self, 0, self.end - self.start | 0, str.str.charCodeAt(str.start));
      return found < 0 ? undefined : found;
    }
    default: {
      return pattern_len > (self.end - self.start | 0) ? undefined : _M0FPB22find__by__two__anchors(self, str);
    }
  }
}
function _M0MPC16string6String4find(self, str) {
  return _M0MPC16string10StringView4find(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0IPC16string6StringPB4Show10to__string(self) {
  return self;
}
function _M0MPC16string6String6repeat(self, n) {
  if (n < 0) {
    return _M0FPC15abort5abortGRPB9ArrayViewGcEE("negative repeat count");
  } else {
    if (n === 0) {
      return "";
    } else {
      if (n === 1) {
        return self;
      } else {
        const len = self.length;
        const total = Math.imul(len, n) | 0;
        let _tmp;
        if (len === 0) {
          _tmp = true;
        } else {
          if (n === 0) {
            $panic();
          }
          _tmp = (total / n | 0) === len;
        }
        if (_tmp) {
          const buf = _M0MPB13StringBuilder21StringBuilder_2einner(total);
          const str = _M0IPC16string6StringPB4Show10to__string(self);
          let _tmp$2 = 0;
          while (true) {
            const _ = _tmp$2;
            if (_ < n) {
              _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
              _tmp$2 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          return _M0MPB13StringBuilder10to__string(buf);
        } else {
          return _M0FPC15abort5abortGRPB9ArrayViewGcEE("repeat result too large");
        }
      }
    }
  }
}
function _M0MPC14char4Char10utf16__len(self) {
  const code = self;
  return code <= 65535 ? 1 : 2;
}
function _M0MPC16string10StringView8find__by(self, pred) {
  const _bind = self.str;
  const _bind$2 = self.start;
  const _bind$3 = self.end;
  let _tmp = _bind$2;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp;
    const offset = _tmp$2;
    if (_string_index < _bind$3) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$4 = _bind.charCodeAt(_string_index);
        if (_bind$4 >= 55296 && _bind$4 <= 56319 && (_string_index + 1 | 0) < _bind$3) {
          const _bind$5 = _bind.charCodeAt(_string_index + 1 | 0);
          if (_bind$5 >= 56320 && _bind$5 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$4 - 55296 | 0, 1024) | 0) + _bind$5 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
          break _L;
        }
      }
      if (pred(_decoded_char)) {
        return offset;
      }
      _tmp = _decoded_next_string_index;
      _tmp$2 = offset + _M0MPC14char4Char10utf16__len(_decoded_char) | 0;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0MPC16string6String8find__by(self, pred) {
  return _M0MPC16string10StringView8find__by(new _M0TPC16string10StringView(self, 0, self.length), pred);
}
function _M0MPC16string10StringView11has__suffix(self, str) {
  const self_len = self.end - self.start | 0;
  const str_len = str.end - str.start | 0;
  if (str_len <= self_len) {
    const start = self_len - str_len | 0;
    return str_len === 0 || _M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + start | 0), str.str.charCodeAt(str.start)) ? _M0MPC16string6String20unsafe__range__equal(self.str, self.start + start | 0, str.str, str.start, str_len) : false;
  } else {
    return false;
  }
}
function _M0MPC16string6String11has__suffix(self, str) {
  return _M0MPC16string10StringView11has__suffix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC16string10StringView11has__prefix(self, str) {
  const str_len = str.end - str.start | 0;
  return str_len <= (self.end - self.start | 0) ? (str_len === 0 || _M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start), str.str.charCodeAt(str.start)) ? _M0MPC16string6String20unsafe__range__equal(self.str, self.start, str.str, str.start, str_len) : false) : false;
}
function _M0MPC16string6String11has__prefix(self, str) {
  return _M0MPC16string10StringView11has__prefix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC16string10StringView13strip__suffix(self, suffix) {
  const self_len = self.end - self.start | 0;
  const suffix_len = suffix.end - suffix.start | 0;
  return self_len >= suffix_len && _M0IPC16string10StringViewPB2Eq5equal(_M0MPC16string10StringView12view_2einner(self, self_len - suffix_len | 0, undefined), suffix) ? _M0MPC16string10StringView12view_2einner(self, 0, self_len - suffix_len | 0) : undefined;
}
function _M0MPC16string6String13strip__suffix(self, suffix) {
  return _M0MPC16string10StringView13strip__suffix(new _M0TPC16string10StringView(self, 0, self.length), suffix);
}
function _M0MPC16string10StringView13strip__prefix(self, prefix) {
  const prefix_len = prefix.end - prefix.start | 0;
  return (self.end - self.start | 0) >= prefix_len && _M0IPC16string10StringViewPB2Eq5equal(_M0MPC16string10StringView12view_2einner(self, 0, prefix_len), prefix) ? _M0MPC16string10StringView12view_2einner(self, prefix_len, undefined) : undefined;
}
function _M0MPC15array5Array13Array_2einnerGRPC16string10StringViewE(capacity) {
  return [];
}
function _M0MPC15array5Array13Array_2einnerGcE(capacity) {
  return [];
}
function _M0MPC15array5Array4pushGsE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGcE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGyE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPB4Iter4foldGcRPB5ArrayGcEE(self, init, f) {
  let acc = init;
  while (true) {
    const _bind = _M0MPB4Iter4nextGcE(self);
    if (_bind === -1) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      acc = f(acc, _x);
      continue;
    }
  }
  return acc;
}
function _M0FPB36string__contains__code__unit__scalar(str, start, end, code) {
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(str.charCodeAt(i), code)) {
        return true;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPB28string__contains__code__unit(str, start, end, code) {
  return _M0FPB36string__contains__code__unit__scalar(str, start, end, code);
}
function _M0MPC16string10StringView20contains__code__unit(self, code) {
  return _M0FPB28string__contains__code__unit(self.str, self.start, self.end, code);
}
function _M0MPC16string10StringView8contains(self, str) {
  const _bind = str.end - str.start | 0;
  switch (_bind) {
    case 0: {
      return true;
    }
    case 1: {
      return _M0MPC16string10StringView20contains__code__unit(self, str.str.charCodeAt(str.start));
    }
    default: {
      const _bind$2 = _M0MPC16string10StringView4find(self, str);
      return !(_bind$2 === undefined);
    }
  }
}
function _M0MPC16string6String8contains(self, str) {
  return _M0MPC16string10StringView8contains(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC14char4Char8to__uint(self) {
  return self;
}
function _M0FPB23build__ascii__char__set(chars) {
  let bits0 = 0;
  let bits1 = 0;
  let bits2 = 0;
  let bits3 = 0;
  const _bind = chars.str;
  const _bind$2 = chars.start;
  const _bind$3 = chars.end;
  let _tmp = _bind$2;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$3) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$4 = _bind.charCodeAt(_string_index);
        if (_bind$4 >= 55296 && _bind$4 <= 56319 && (_string_index + 1 | 0) < _bind$3) {
          const _bind$5 = _bind.charCodeAt(_string_index + 1 | 0);
          if (_bind$5 >= 56320 && _bind$5 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$4 - 55296 | 0, 1024) | 0) + _bind$5 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
          break _L;
        }
      }
      const code = _M0MPC14char4Char8to__uint(_decoded_char);
      if (code >>> 0 < 128 >>> 0) {
        const bit = 1 << (code & 31);
        const _bind$4 = code >>> 5 | 0;
        switch (_bind$4) {
          case 0: {
            bits0 = bits0 | bit;
            break;
          }
          case 1: {
            bits1 = bits1 | bit;
            break;
          }
          case 2: {
            bits2 = bits2 | bit;
            break;
          }
          default: {
            bits3 = bits3 | bit;
          }
        }
      } else {
        return undefined;
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return { _0: bits0, _1: bits1, _2: bits2, _3: bits3 };
}
function _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, code) {
  if (code >>> 0 < 128 >>> 0) {
    const bit = 1 << (code & 31);
    const _bind = code >>> 5 | 0;
    switch (_bind) {
      case 0: {
        return (bits0 & bit) !== 0;
      }
      case 1: {
        return (bits1 & bit) !== 0;
      }
      case 2: {
        return (bits2 & bit) !== 0;
      }
      default: {
        return (bits3 & bit) !== 0;
      }
    }
  } else {
    return false;
  }
}
function _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < end && _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _M0MPC16uint166UInt168to__uint(str.charCodeAt(pos)))) {
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = end;
  while (true) {
    const pos = _tmp;
    if (pos > start && _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _M0MPC16uint166UInt168to__uint(str.charCodeAt(pos - 1 | 0)))) {
      _tmp = pos - 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB26string__trim__start__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0FPB24string__trim__end__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0MPC16string10StringView14contains__char(self, c) {
  const len = self.end - self.start | 0;
  if (len > 0) {
    const c$2 = c;
    if (c$2 >= 0 && c$2 <= 65535) {
      return _M0MPC16string10StringView20contains__code__unit(self, c$2 & 65535);
    } else {
      if (c$2 < 0) {
        return false;
      } else {
        if (len >= 2) {
          const adj = c$2 - 65536 | 0;
          const high = 55296 + (adj >> 10) | 0;
          if (high <= 65535) {
            const high$2 = high & 65535;
            const low = (56320 + (adj & 1023) | 0) & 65535;
            let _tmp = 0;
            while (true) {
              const i = _tmp;
              if (i < (len - 1 | 0)) {
                if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + i | 0), high$2)) {
                  if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + (i + 1 | 0) | 0), low)) {
                    return true;
                  }
                  _tmp = i + 2 | 0;
                  continue;
                }
                _tmp = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    return false;
  } else {
    return false;
  }
}
function _M0MPC16string10StringView24trim__start__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 0, x.start, x.end));
      const _tmp$2 = x.str;
      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 1, x.start, x.end);
      let _tmp$3;
      if (_bind === undefined) {
        _tmp$3 = x.end;
      } else {
        const _Some = _bind;
        _tmp$3 = _Some;
      }
      const _x = new _M0TPC16string10StringView(_tmp$2, _tmp$3, x.end);
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView22trim__end__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      const _x = new _M0TPC16string10StringView(x.str, x.start, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView12trim_2einner(self, chars) {
  const _bind = _M0FPB23build__ascii__char__set(chars);
  if (_bind === undefined) {
    return _M0MPC16string10StringView22trim__end__with__chars(_M0MPC16string10StringView24trim__start__with__chars(self, chars), chars);
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _bits0 = _x._0;
    const _bits1 = _x._1;
    const _bits2 = _x._2;
    const _bits3 = _x._3;
    const start = _M0FPB26string__trim__start__ascii(self.str, self.start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    const end = _M0FPB24string__trim__end__ascii(self.str, start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    return new _M0TPC16string10StringView(self.str, start, end);
  }
}
function _M0MPC16string10StringView4trim(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = new _M0TPC16string10StringView(_M0MPC16string10StringView4trimN7_2abindS6760, 0, _M0MPC16string10StringView4trimN7_2abindS6760.length);
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string10StringView12trim_2einner(self, chars);
}
function _M0MPC16string6String12trim_2einner(self, chars) {
  return _M0MPC16string10StringView12trim_2einner(new _M0TPC16string10StringView(self, 0, self.length), chars);
}
function _M0MPC16string6String4trim(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = new _M0TPC16string10StringView(_M0MPC16string6String4trimN7_2abindS6861, 0, _M0MPC16string6String4trimN7_2abindS6861.length);
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string6String12trim_2einner(self, chars);
}
function _M0MPC16string6String9is__empty(self) {
  return self === "";
}
function _M0MPC16string6String4iter(self) {
  const len = self.length;
  const index = new _M0TPB8MutLocalGiE(0);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < len) {
      const c1 = self.charCodeAt(index.val);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index.val + 1 | 0) < len) {
        const c2 = self.charCodeAt(index.val + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          const c = _M0FPB32code__point__of__surrogate__pair(c1, c2);
          index.val = index.val + 2 | 0;
          return c;
        }
      }
      index.val = index.val + 1 | 0;
      return _M0MPC16uint166UInt1616unsafe__to__char(c1);
    } else {
      return -1;
    }
  }, undefined);
}
function _M0MPB4Iter3mapGRPC16string10StringViewsE(self, f) {
  return new _M0TPB4IterGsE(() => {
    const _bind = _M0MPB4Iter4nextGRPC16string10StringViewE(self);
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0MPB4Iter3mapGcRPC16string10StringViewE(self, f) {
  return new _M0TPB4IterGRPC16string10StringViewE(() => {
    const _bind = _M0MPB4Iter4nextGcE(self);
    if (_bind === -1) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0IPC14char4CharPB4Show10to__string(self) {
  return String.fromCodePoint(self);
}
function _M0MPC16string10StringView5split(self, sep) {
  const sep_len = sep.end - sep.start | 0;
  if (sep_len === 0) {
    return _M0MPB4Iter3mapGcRPC16string10StringViewE(_M0MPC16string10StringView4iter(self), (c) => _M0MPC16string6String12view_2einner(_M0IPC14char4CharPB4Show10to__string(c), 0, undefined));
  }
  const remaining = new _M0TPB8MutLocalGORPC16string10StringViewE(self);
  return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
    const _bind = remaining.val;
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _view = _Some;
      const _bind$2 = _M0MPC16string10StringView4find(_view, sep);
      if (_bind$2 === undefined) {
        remaining.val = undefined;
        return _view;
      } else {
        const _Some$2 = _bind$2;
        const _end = _Some$2;
        remaining.val = _M0MPC16string10StringView12view_2einner(_view, _end + sep_len | 0, undefined);
        return _M0MPC16string10StringView12view_2einner(_view, 0, _end);
      }
    }
  }, undefined);
}
function _M0MPC16string6String5split(self, sep) {
  return _M0MPC16string10StringView5split(new _M0TPC16string10StringView(self, 0, self.length), sep);
}
function _M0MPB4Iter9to__arrayGRPC16string10StringViewE(self) {
  const _bind = self.size_hint;
  let result;
  if (_bind === undefined) {
    result = [];
  } else {
    const _Some = _bind;
    const _n = _Some;
    result = _M0MPC15array5Array13Array_2einnerGRPC16string10StringViewE(_n);
  }
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGRPC16string10StringViewE(self);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      _M0MPC15array5Array4pushGsE(result, _x);
      continue;
    }
  }
  return result;
}
function _M0MPC16string6String12replace__all(self, old, new_) {
  const len = self.length;
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(len);
  const old_len = old.end - old.start | 0;
  const new$2 = _M0MPC16string10StringView9to__owned(new_);
  if (old_len === 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
    const _bind = self.length;
    let _tmp = 0;
    while (true) {
      const _string_index = _tmp;
      if (_string_index < _bind) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$2 = self.charCodeAt(_string_index);
          if (_bind$2 >= 55296 && _bind$2 <= 56319 && (_string_index + 1 | 0) < _bind) {
            const _bind$3 = self.charCodeAt(_string_index + 1 | 0);
            if (_bind$3 >= 56320 && _bind$3 <= 57343) {
              _decoded_next_string_index = _string_index + 2 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$2 - 55296 | 0, 1024) | 0) + _bind$3 | 0) - 56320 | 0) + 65536 | 0);
              break _L;
            } else {
              _decoded_next_string_index = _string_index + 1 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$2);
              break _L;
            }
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$2);
            break _L;
          }
        }
        _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
        _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
        _tmp = _decoded_next_string_index;
        continue;
      } else {
        break;
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  } else {
    const first_end = _M0MPC16string6String4find(self, old);
    if (first_end === undefined) {
      return self;
    } else {
      const _Some = first_end;
      const _end = _Some;
      let _tmp = new _M0TPC16string10StringView(self, 0, self.length);
      let _tmp$2 = _end;
      while (true) {
        const view = _tmp;
        const end = _tmp$2;
        const seg = _M0MPC16string10StringView12view_2einner(view, 0, end);
        _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, _M0MPC16string10StringView4data(seg), _M0MPC16string10StringView13start__offset(seg), seg.end - seg.start | 0);
        _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
        if ((end + old_len | 0) <= len) {
          const next_view = _M0MPC16string10StringView12view_2einner(view, end + old_len | 0, undefined);
          const _bind = _M0MPC16string10StringView4find(next_view, old);
          if (_bind === undefined) {
            _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, _M0MPC16string10StringView4data(next_view), _M0MPC16string10StringView13start__offset(next_view), next_view.end - next_view.start | 0);
            break;
          } else {
            const _Some$2 = _bind;
            const _next_end = _Some$2;
            _tmp = next_view;
            _tmp$2 = _next_end;
            continue;
          }
        } else {
          break;
        }
      }
      return _M0MPB13StringBuilder10to__string(buf);
    }
  }
}
function _M0MPC14char4Char20is__ascii__uppercase(self) {
  return self >= 65 && self <= 90;
}
function _M0MPC16string6String9to__lower(self) {
  const _bind = _M0MPC16string6String8find__by(self, (c) => _M0MPC14char4Char20is__ascii__uppercase(c));
  if (_bind === undefined) {
    return self;
  } else {
    const _Some = _bind;
    const _idx = _Some;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(self.length);
    const head = _M0MPC16string6String12view_2einner(self, 0, _idx);
    _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, _M0MPC16string10StringView4data(head), _M0MPC16string10StringView13start__offset(head), head.end - head.start | 0);
    const _bind$2 = _M0MPC16string6String12view_2einner(self, _idx, undefined);
    const _bind$3 = _bind$2.str;
    const _bind$4 = _bind$2.start;
    const _bind$5 = _bind$2.end;
    let _tmp = _bind$4;
    while (true) {
      const _string_index = _tmp;
      if (_string_index < _bind$5) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$6 = _bind$3.charCodeAt(_string_index);
          if (_bind$6 >= 55296 && _bind$6 <= 56319 && (_string_index + 1 | 0) < _bind$5) {
            const _bind$7 = _bind$3.charCodeAt(_string_index + 1 | 0);
            if (_bind$7 >= 56320 && _bind$7 <= 57343) {
              _decoded_next_string_index = _string_index + 2 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$6 - 55296 | 0, 1024) | 0) + _bind$7 | 0) - 56320 | 0) + 65536 | 0);
              break _L;
            } else {
              _decoded_next_string_index = _string_index + 1 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$6);
              break _L;
            }
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$6);
            break _L;
          }
        }
        if (_M0MPC14char4Char20is__ascii__uppercase(_decoded_char)) {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char + 32 | 0);
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
        }
        _tmp = _decoded_next_string_index;
        continue;
      } else {
        break;
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0IPC16string6StringPB12ToStringView16to__string__view(self) {
  return new _M0TPC16string10StringView(self, 0, self.length);
}
function _M0IPC16string10StringViewPB12ToStringView16to__string__view(self) {
  return self;
}
function _M0MPC16string6String9to__array(self) {
  return _M0MPB4Iter4foldGcRPB5ArrayGcEE(_M0MPC16string6String4iter(self), _M0MPC15array5Array13Array_2einnerGcE(self.length), (rv, c) => {
    _M0MPC15array5Array4pushGcE(rv, c);
    return rv;
  });
}
function _M0IPC14bool4BoolPB4Show10to__string(self) {
  return self ? "true" : "false";
}
function _M0IPC13int3IntPB4Show10to__string(self) {
  return _M0MPC13int3Int18to__string_2einner(self, 10);
}
function _M0MPC15array9ArrayView4iterGcE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGcE(() => {
    if (i.val < len) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return -1;
    }
  }, len);
}
function _M0MPC15array9ArrayView4iterGsE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
    if (i.val < len) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return undefined;
    }
  }, len);
}
function _M0MPC15array5Array4iterGcE(self) {
  return _M0MPC15array9ArrayView4iterGcE(new _M0TPB9ArrayViewGcE(self, 0, self.length));
}
function _M0MPC15array5Array4iterGsE(self) {
  return _M0MPC15array9ArrayView4iterGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length));
}
function _M0MPC15array9ArrayView4joinGsE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string6StringPB12ToStringView16to__string__view(_hd);
    const _bind = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        const _bind$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
        _tmp$2 = (size_hint$2 + (_bind$2.end - _bind$2.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC15array9ArrayView4joinGRPC16string10StringViewE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string10StringViewPB12ToStringView16to__string__view(_hd);
    const _bind = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        const _bind$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
        _tmp$2 = (size_hint$2 + (_bind$2.end - _bind$2.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC16option6Option6unwrapGRPB5EntryGssEE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MPC16option6Option10unwrap__orGRPC16string10StringViewE(self, default_) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(src, allocate_len, len, src_offset, dst_offset) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, src, src_offset, len);
  return dst;
}
function _M0FPB21calc__grow__threshold(capacity) {
  if (16 === 0) {
    $panic();
  }
  return (Math.imul(capacity, 13) | 0) / 16 | 0;
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0FPB8new__mapGssE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGssE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPC13int3Int3max(self, other) {
  return self > other ? self : other;
}
function _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGssEE(_bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGssE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10push__awayGssE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGssE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGssE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGssE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGssE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGssE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGssE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGssE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGssE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGssE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGssE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGssE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGssE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGssE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGssE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGssE(self, key, value) {
  _M0MPB3Map15set__with__hashGssE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3MapGssE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGssE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGssE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGssE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGssE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0IPC14byte4BytePB2Eq5equal(self, that) {
  return self === that;
}
function _M0MPC15bytes5Bytes20unsafe__range__equal(self, self_off, other, other_off, len) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      if (_M0IPC14byte4BytePB2Eq5equal(self[self_off + i | 0], other[other_off + i | 0])) {
      } else {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC15array5Array3mapGRP211localreview7mailbox6HeadersE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGUOsRPC15debug4ReprERPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug7ContentE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug13ContentParensRPB5ArrayGsEE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGssE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGyRPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPB4Iter10size__hintGsE(self) {
  return self.size_hint;
}
function _M0MPB4Iter3anyGcE(self, f) {
  while (true) {
    const _bind = _M0MPB4Iter4nextGcE(self);
    if (_bind === -1) {
      return false;
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (f(_x)) {
        return true;
      }
      continue;
    }
  }
}
function _M0MPB4Iter5countGRPC16string10StringViewE(self) {
  let _tmp = 0;
  while (true) {
    const count = _tmp;
    const _bind = _M0MPB4Iter4nextGRPC16string10StringViewE(self);
    if (_bind === undefined) {
      return count;
    } else {
      _tmp = count + 1 | 0;
      continue;
    }
  }
}
function _M0MPB4Iter4iterGsE(self) {
  return self;
}
function _M0MPC13int3Int13is__surrogate(self) {
  return 55296 <= self && self <= 57343;
}
function _M0MPC15bytes5Bytes12view_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    const _bind = end$2 - start | 0;
    return new _M0TPC15bytes9BytesView(self, start, start + _bind | 0);
  } else {
    return _M0FPC15abort5abortGRPB9ArrayViewGcEE("Invalid index for View");
  }
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB13finalize__acc(acc);
}
function _M0MPB18UninitializedArray19unsafe__blit__fixedGyE(dst, dst_offset, src, src_offset, len) {
  let _tmp = len - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      const _tmp$2 = dst_offset + i | 0;
      const _tmp$3 = src_offset + i | 0;
      if (_tmp$2 >>> 0 < dst.length) {
        dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
      } else {
        $oob();
      }
      _tmp = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MPC15array10FixedArray23unsafe__make__and__blitGyE(src, allocate_len, init, src_offset, dst_offset, blit_len) {
  const dst = $makebytes(allocate_len, init);
  _M0MPC15array10FixedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, blit_len);
  return dst;
}
function _M0MPC15array10FixedArray23make__and__blit_2einnerGyE(src, allocate_len, init, len, src_offset, dst_offset) {
  if (allocate_len >= 0 && (len >= 0 && (src_offset >= 0 && (dst_offset >= 0 && ((src_offset + len | 0) <= src.length && (dst_offset + len | 0) <= allocate_len))))) {
    return _M0MPC15array10FixedArray23unsafe__make__and__blitGyE(src, allocate_len, init, src_offset, dst_offset, len);
  } else {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(89);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "bounds check failed: allocate_len = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, allocate_len);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", src_offset = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, src_offset);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", dst_offset = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, dst_offset);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", len = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, len);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", src.length = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, src.length);
    return _M0FPC15abort5abortGRPB9ArrayViewGcEE(_M0MPB13StringBuilder10to__string(_string_builder));
  }
}
function _M0MPC14char4Char7to__hex(char) {
  const code = char;
  return code >= 0 && code <= 255 ? _M0MPC14byte4Byte7to__hex(code & 255) : code <= 65535 ? `${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}` : `${_M0MPC14byte4Byte7to__hex(code >> 16 & 255)}${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}`;
}
function _M0MPC14char4Char11is__control(self) {
  return self >= 0 && self <= 31 ? true : self >= 127 && self <= 159;
}
function _M0MPC14char4Char13is__printable(self) {
  if (_M0MPC14char4Char11is__control(self)) {
    return false;
  }
  const self$2 = self;
  _L: {
    _L$2: {
      if (self$2 >= 57344 && self$2 <= 63743) {
        break _L$2;
      } else {
        if (self$2 >= 983040 && self$2 <= 1048573) {
          break _L$2;
        } else {
          if (self$2 >= 1048576 && self$2 <= 1114109) {
            break _L$2;
          }
        }
      }
      break _L;
    }
    return false;
  }
  _L$2: {
    _L$3: {
      if (self$2 === 173) {
        break _L$3;
      } else {
        if (self$2 >= 1536 && self$2 <= 1541) {
          break _L$3;
        } else {
          if (self$2 === 1564) {
            break _L$3;
          } else {
            if (self$2 === 1757) {
              break _L$3;
            } else {
              if (self$2 === 1807) {
                break _L$3;
              } else {
                if (self$2 >= 2192 && self$2 <= 2193) {
                  break _L$3;
                } else {
                  if (self$2 === 2274) {
                    break _L$3;
                  } else {
                    if (self$2 === 6158) {
                      break _L$3;
                    } else {
                      if (self$2 >= 8203 && self$2 <= 8207) {
                        break _L$3;
                      } else {
                        if (self$2 >= 8234 && self$2 <= 8238) {
                          break _L$3;
                        } else {
                          if (self$2 >= 8288 && self$2 <= 8292) {
                            break _L$3;
                          } else {
                            if (self$2 >= 8294 && self$2 <= 8303) {
                              break _L$3;
                            } else {
                              if (self$2 === 65279) {
                                break _L$3;
                              } else {
                                if (self$2 >= 65529 && self$2 <= 65531) {
                                  break _L$3;
                                } else {
                                  if (self$2 === 69821) {
                                    break _L$3;
                                  } else {
                                    if (self$2 === 69837) {
                                      break _L$3;
                                    } else {
                                      if (self$2 >= 78896 && self$2 <= 78911) {
                                        break _L$3;
                                      } else {
                                        if (self$2 >= 113824 && self$2 <= 113827) {
                                          break _L$3;
                                        } else {
                                          if (self$2 >= 119155 && self$2 <= 119162) {
                                            break _L$3;
                                          } else {
                                            if (self$2 === 917505) {
                                              break _L$3;
                                            } else {
                                              if (self$2 >= 917536 && self$2 <= 917631) {
                                                break _L$3;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$2;
    }
    return false;
  }
  if (_M0MPC13int3Int13is__surrogate(self$2)) {
    return false;
  }
  if (self$2 === 8232 || self$2 === 8233) {
    return false;
  }
  _L$3: {
    _L$4: {
      if (self$2 >= 64976 && self$2 <= 65007) {
        break _L$4;
      } else {
        if (self$2 >= 65534 && self$2 <= 65535) {
          break _L$4;
        } else {
          if (self$2 >= 131070 && self$2 <= 131071) {
            break _L$4;
          } else {
            if (self$2 >= 196606 && self$2 <= 196607) {
              break _L$4;
            } else {
              if (self$2 >= 262142 && self$2 <= 262143) {
                break _L$4;
              } else {
                if (self$2 >= 327678 && self$2 <= 327679) {
                  break _L$4;
                } else {
                  if (self$2 >= 393214 && self$2 <= 393215) {
                    break _L$4;
                  } else {
                    if (self$2 >= 458750 && self$2 <= 458751) {
                      break _L$4;
                    } else {
                      if (self$2 >= 524286 && self$2 <= 524287) {
                        break _L$4;
                      } else {
                        if (self$2 >= 589822 && self$2 <= 589823) {
                          break _L$4;
                        } else {
                          if (self$2 >= 655358 && self$2 <= 655359) {
                            break _L$4;
                          } else {
                            if (self$2 >= 720894 && self$2 <= 720895) {
                              break _L$4;
                            } else {
                              if (self$2 >= 786430 && self$2 <= 786431) {
                                break _L$4;
                              } else {
                                if (self$2 >= 851966 && self$2 <= 851967) {
                                  break _L$4;
                                } else {
                                  if (self$2 >= 917502 && self$2 <= 917503) {
                                    break _L$4;
                                  } else {
                                    if (self$2 >= 983038 && self$2 <= 983039) {
                                      break _L$4;
                                    } else {
                                      if (self$2 >= 1048574 && self$2 <= 1048575) {
                                        break _L$4;
                                      } else {
                                        if (self$2 >= 1114110 && self$2 <= 1114111) {
                                          break _L$4;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$3;
    }
    return false;
  }
  return true;
}
function _M0MPC14char4Char18escape__to_2einner(self, logger, quote) {
  if (quote) {
    logger.method_table.method_3(logger.self, 39);
  }
  _L: {
    _L$2: {
      if (self === 39) {
        break _L$2;
      } else {
        if (self === 92) {
          break _L$2;
        } else {
          if (self === 10) {
            logger.method_table.method_0(logger.self, "\\n");
          } else {
            if (self === 13) {
              logger.method_table.method_0(logger.self, "\\r");
            } else {
              if (self === 8) {
                logger.method_table.method_0(logger.self, "\\b");
              } else {
                if (self === 9) {
                  logger.method_table.method_0(logger.self, "\\t");
                } else {
                  if (self >= 32 && self <= 126) {
                    logger.method_table.method_3(logger.self, self);
                  } else {
                    if (!_M0MPC14char4Char13is__printable(self)) {
                      logger.method_table.method_0(logger.self, "\\u{");
                      logger.method_table.method_0(logger.self, _M0MPC14char4Char7to__hex(self));
                      logger.method_table.method_3(logger.self, 125);
                    } else {
                      logger.method_table.method_3(logger.self, self);
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L;
    }
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, self);
  }
  if (quote) {
    logger.method_table.method_3(logger.self, 39);
    return;
  } else {
    return;
  }
}
function _M0MPC14char4Char14escape_2einner(self, quote) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0MPC14char4Char18escape__to_2einner(self, { self: buf, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger }, quote);
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0IPC15bytes9BytesViewPB2Eq5equal(self, other) {
  const len = self.end - self.start | 0;
  return len === (other.end - other.start | 0) ? _M0MPC15bytes5Bytes20unsafe__range__equal(self.buf, self.start, other.buf, other.start, len) : false;
}
function _M0MPC15bytes9BytesView4data(self) {
  return self.buf;
}
function _M0MPC15bytes9BytesView13start__offset(self) {
  return self.start;
}
function _M0MPC15array10FixedArray17blit__from__bytes(self, bytes_offset, src, src_offset, length) {
  const e1 = (bytes_offset + length | 0) - 1 | 0;
  const e2 = (src_offset + length | 0) - 1 | 0;
  const len1 = self.length;
  const len2 = src.length;
  if (length >= 0 && (bytes_offset >= 0 && (e1 < len1 && (src_offset >= 0 && e2 < len2)))) {
    _M0MPC15array10FixedArray12unsafe__blitGyE(self, bytes_offset, src, src_offset, length);
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15bytes9BytesView9to__owned(self) {
  if ((self.end - self.start | 0) === self.buf.length) {
    return self.buf;
  }
  const bytes = $makebytes(self.end - self.start | 0, 0);
  _M0MPC15array10FixedArray17blit__from__bytes(bytes, 0, self.buf, _M0MPC15bytes9BytesView13start__offset(self), self.end - self.start | 0);
  return bytes;
}
function _M0MPC15bytes5Bytes11from__array(arr) {
  const len = arr.end - arr.start | 0;
  if (len === 0) {
    return $bytes_literal$0;
  }
  const result = _M0MPB18UninitializedArray23unsafe__make__and__blitGyE(arr.buf, len, arr.start, 0, len);
  return result;
}
function _M0MPC15array5Array44unsafe__make__and__blit__from__fixed_2einnerGyE(src, allocate_len, len, src_offset, dst_offset) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray19unsafe__blit__fixedGyE(dst, dst_offset, src, src_offset, len);
  return dst;
}
function _M0MPC15bytes9BytesView9to__array(self) {
  const len = self.end - self.start | 0;
  return _M0MPC15array5Array44unsafe__make__and__blit__from__fixed_2einnerGyE(_M0MPC15bytes9BytesView4data(self), len, len, _M0MPC15bytes9BytesView13start__offset(self), 0);
}
function _M0MPC15array5Array12view_2einnerGcE(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    const _bind = self;
    const _bind$2 = end$2 - start | 0;
    return new _M0TPB9ArrayViewGcE(_bind, start, start + _bind$2 | 0);
  } else {
    return _M0FPC15abort5abortGRPB9ArrayViewGcEE("View index out of bounds");
  }
}
function _M0MPC15array5Array17reserve__capacityGsE(self, capacity) {}
function _M0MPC15array5Array6appendGsE(self, other) {
  const old_len = self.length;
  const append_len = other.end - other.start | 0;
  if ((old_len + append_len | 0) >= old_len) {
    _M0MPB7JSArray12append__view(self, other.buf, other.start, append_len);
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array9is__emptyGRP211localreview7mailbox6HeaderE(self) {
  return self.length === 0;
}
function _M0MPC15array5Array2atGRP211localreview7mailbox7MessageE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGcE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0FPB7minimum(x, y) {
  return x > y ? y : x;
}
function _M0MPC15array12MutArrayView4swapGcE(arr, i, j) {
  const temp = arr.buf[arr.start + i | 0];
  arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
  arr.buf[arr.start + j | 0] = temp;
}
function _M0MPC15array12MutArrayView5sliceGcE(arr, start, end) {
  const _bind = arr.end - arr.start | 0;
  if (start < 0 || (start > end || end > _bind)) {
    $panic();
  }
  return new _M0TPB12MutArrayViewGcE(arr.buf, start + arr.start | 0, end + arr.start | 0);
}
function _M0MPC15array5Array3setGRP211localreview7mailbox6HeaderE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array12MutArrayView14rev__in__placeGcE(arr) {
  const len = arr.end - arr.start | 0;
  if (2 === 0) {
    $panic();
  }
  const mid_len = len / 2 | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < mid_len) {
      const j = (len - i | 0) - 1 | 0;
      const temp = arr.buf[arr.start + i | 0];
      arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
      arr.buf[arr.start + j | 0] = temp;
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__get__limit(len) {
  let _tmp = len;
  let _tmp$2 = 0;
  while (true) {
    const len$2 = _tmp;
    const limit = _tmp$2;
    if (len$2 > 0) {
      if (2 === 0) {
        $panic();
      }
      _tmp = len$2 / 2 | 0;
      _tmp$2 = limit + 1 | 0;
      continue;
    } else {
      return limit;
    }
  }
}
function _M0FPB19fixed__bubble__sortGcE(arr) {
  const _bind = arr.end - arr.start | 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && arr.buf[arr.start + (j - 1 | 0) | 0] > arr.buf[arr.start + j | 0]) {
          _M0MPC15array12MutArrayView4swapGcE(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB20fixed__choose__pivotN7sort__2S568GcE(_env, a, b) {
  const swaps = _env._1;
  const arr = _env._0;
  if (arr.buf[arr.start + a | 0] > arr.buf[arr.start + b | 0]) {
    _M0MPC15array12MutArrayView4swapGcE(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FPB20fixed__choose__pivotN7sort__3S572GcE(_env, a, b, c) {
  _M0FPB20fixed__choose__pivotN7sort__2S568GcE(_env, a, b);
  _M0FPB20fixed__choose__pivotN7sort__2S568GcE(_env, b, c);
  _M0FPB20fixed__choose__pivotN7sort__2S568GcE(_env, a, b);
}
function _M0FPB20fixed__choose__pivotGcE(arr) {
  const len = arr.end - arr.start | 0;
  const swaps = new _M0TPB8MutLocalGiE(0);
  if (4 === 0) {
    $panic();
  }
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    if (4 === 0) {
      $panic();
    }
    const a = Math.imul(len / 4 | 0, 1) | 0;
    if (4 === 0) {
      $panic();
    }
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: arr, _1: swaps };
    if (len > 50) {
      _M0FPB20fixed__choose__pivotN7sort__3S572GcE(_env, a - 1 | 0, a, a + 1 | 0);
      _M0FPB20fixed__choose__pivotN7sort__3S572GcE(_env, b - 1 | 0, b, b + 1 | 0);
      _M0FPB20fixed__choose__pivotN7sort__3S572GcE(_env, c - 1 | 0, c, c + 1 | 0);
    }
    _M0FPB20fixed__choose__pivotN7sort__3S572GcE(_env, a, b, c);
  }
  if (swaps.val === 12) {
    _M0MPC15array12MutArrayView14rev__in__placeGcE(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function _M0FPB17fixed__sift__downGcE(arr, index) {
  const len = arr.end - arr.start | 0;
  let _tmp = index;
  let _tmp$2 = (Math.imul(index, 2) | 0) + 1 | 0;
  while (true) {
    const index$2 = _tmp;
    const child = _tmp$2;
    if (child < len) {
      const child$2 = (child + 1 | 0) < len && arr.buf[arr.start + child | 0] < arr.buf[arr.start + (child + 1 | 0) | 0] ? child + 1 | 0 : child;
      if (arr.buf[arr.start + index$2 | 0] >= arr.buf[arr.start + child$2 | 0]) {
        return undefined;
      }
      _M0MPC15array12MutArrayView4swapGcE(arr, index$2, child$2);
      _tmp = child$2;
      _tmp$2 = (Math.imul(child$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__heap__sortGcE(arr) {
  const len = arr.end - arr.start | 0;
  if (2 === 0) {
    $panic();
  }
  const _bind = len / 2 | 0;
  let _tmp = _bind - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      _M0FPB17fixed__sift__downGcE(arr, i);
      _tmp = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = len - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i >= 1) {
      _M0MPC15array12MutArrayView4swapGcE(arr, 0, i);
      _M0FPB17fixed__sift__downGcE(_M0MPC15array12MutArrayView5sliceGcE(arr, 0, i), 0);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB16fixed__partitionGcE(arr, pivot_index) {
  _M0MPC15array12MutArrayView4swapGcE(arr, pivot_index, (arr.end - arr.start | 0) - 1 | 0);
  const pivot = arr.buf[arr.start + ((arr.end - arr.start | 0) - 1 | 0) | 0];
  const _bind = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp = 0;
  let _tmp$2 = 0;
  let _tmp$3 = true;
  while (true) {
    const j = _tmp;
    const i = _tmp$2;
    const partitioned = _tmp$3;
    if (j < _bind) {
      if (arr.buf[arr.start + j | 0] < pivot) {
        if (i !== j) {
          _M0MPC15array12MutArrayView4swapGcE(arr, i, j);
          _tmp = j + 1 | 0;
          _tmp$2 = i + 1 | 0;
          _tmp$3 = false;
          continue;
        } else {
          _tmp = j + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue;
        }
      } else {
        _tmp = j + 1 | 0;
        continue;
      }
    } else {
      _M0MPC15array12MutArrayView4swapGcE(arr, i, (arr.end - arr.start | 0) - 1 | 0);
      return { _0: i, _1: partitioned };
    }
  }
}
function _M0FPB24fixed__try__bubble__sortGcE(arr) {
  const _bind = arr.end - arr.start | 0;
  let _tmp = 1;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp;
    const tries = _tmp$2;
    if (i < _bind) {
      let sorted;
      let _tmp$3 = i;
      let _tmp$4 = true;
      while (true) {
        const j = _tmp$3;
        const sorted$2 = _tmp$4;
        if (j > 0 && arr.buf[arr.start + (j - 1 | 0) | 0] > arr.buf[arr.start + j | 0]) {
          _M0MPC15array12MutArrayView4swapGcE(arr, j, j - 1 | 0);
          _tmp$3 = j - 1 | 0;
          _tmp$4 = false;
          continue;
        } else {
          sorted = sorted$2;
          break;
        }
      }
      if (!sorted) {
        const tries$2 = tries + 1 | 0;
        if (tries$2 > 8) {
          return false;
        }
        _tmp = i + 1 | 0;
        _tmp$2 = tries$2;
        continue;
      } else {
        _tmp = i + 1 | 0;
        continue;
      }
    } else {
      return true;
    }
  }
}
function _M0FPB18fixed__quick__sortGcE(arr, pred, limit) {
  let _tmp = limit;
  let _tmp$2 = arr;
  let _tmp$3 = pred;
  let _tmp$4 = true;
  let _tmp$5 = true;
  while (true) {
    const limit$2 = _tmp;
    const arr$2 = _tmp$2;
    const pred$2 = _tmp$3;
    const was_partitioned = _tmp$4;
    const balanced = _tmp$5;
    const len = arr$2.end - arr$2.start | 0;
    if (len <= 16) {
      if (len >= 2) {
        _M0FPB19fixed__bubble__sortGcE(arr$2);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      _M0FPB17fixed__heap__sortGcE(arr$2);
      return undefined;
    }
    const _bind = _M0FPB20fixed__choose__pivotGcE(arr$2);
    const _pivot_index = _bind._0;
    const _likely_sorted = _bind._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB24fixed__try__bubble__sortGcE(arr$2)) {
        return undefined;
      }
    }
    const _bind$2 = _M0FPB16fixed__partitionGcE(arr$2, _pivot_index);
    const _pivot = _bind$2._0;
    const _partitioned = _bind$2._1;
    const _tmp$6 = _M0FPB7minimum(_pivot, len - _pivot | 0);
    if (8 === 0) {
      $panic();
    }
    const balanced$2 = _tmp$6 >= (len / 8 | 0);
    const limit$3 = !balanced$2 ? limit$2 - 1 | 0 : limit$2;
    if (pred$2 === -1) {
    } else {
      const _Some = pred$2;
      const _p = _Some;
      if (_p === arr$2.buf[arr$2.start + _pivot | 0]) {
        let i;
        let _tmp$7 = _pivot;
        while (true) {
          const i$2 = _tmp$7;
          if (i$2 < len && _p === arr$2.buf[arr$2.start + i$2 | 0]) {
            _tmp$7 = i$2 + 1 | 0;
            continue;
          } else {
            i = i$2;
            break;
          }
        }
        _tmp = limit$3;
        _tmp$2 = _M0MPC15array12MutArrayView5sliceGcE(arr$2, i, len);
        _tmp$4 = _partitioned;
        _tmp$5 = balanced$2;
        continue;
      }
    }
    const left = _M0MPC15array12MutArrayView5sliceGcE(arr$2, 0, _pivot);
    const right = _M0MPC15array12MutArrayView5sliceGcE(arr$2, _pivot + 1 | 0, len);
    if ((left.end - left.start | 0) < (right.end - right.start | 0)) {
      _M0FPB18fixed__quick__sortGcE(left, pred$2, limit$3);
      _tmp = limit$3;
      _tmp$2 = right;
      _tmp$3 = arr$2.buf[arr$2.start + _pivot | 0];
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    } else {
      _M0FPB18fixed__quick__sortGcE(right, arr$2.buf[arr$2.start + _pivot | 0], limit$3);
      _tmp = limit$3;
      _tmp$2 = left;
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    }
  }
}
function _M0MPC15array12MutArrayView4sortGcE(self) {
  _M0FPB18fixed__quick__sortGcE(self, -1, _M0FPB17fixed__get__limit(self.end - self.start | 0));
}
function _M0MPC15array5Array4sortGcE(self) {
  const _bind = self.length;
  _M0MPC15array12MutArrayView4sortGcE(new _M0TPB12MutArrayViewGcE(self, 0, _bind));
}
function _M0IPC15array5ArrayPB3Add3addGsE(self, other) {
  const len_self = self.length;
  const len_other = other.length;
  if (len_self === 0) {
    return _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(other, len_other, len_other, 0, 0);
  } else {
    const result = _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(self, len_self + len_other | 0, len_self, 0, 0);
    _M0MPB18UninitializedArray12unsafe__blitGsE(result, len_self, other, 0, len_other);
    return result;
  }
}
function _M0MPC15array5Array3allGsE(self, f) {
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (!f(v)) {
        return false;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC15array5Array6filterGRP211localreview7mailbox6HeaderE(self, f) {
  const arr = [];
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGsE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array6filterGsE(self, f) {
  const arr = [];
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGsE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array8containsGcE(self, value) {
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (v === value) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0MPC15array5Array8containsGsE(self, value) {
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (v === value) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0MPC15array5Array10push__iterGsE(self, iter) {
  const _bind = _M0MPB4Iter10size__hintGsE(iter);
  if (_bind === undefined) {
  } else {
    const _Some = _bind;
    const _n = _Some;
    _M0MPC15array5Array17reserve__capacityGsE(self, self.length + _n | 0);
  }
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGRPC16string10StringViewE(iter);
    if (_bind$2 === undefined) {
      return;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      _M0MPC15array5Array4pushGsE(self, _x);
      continue;
    }
  }
}
function _M0MPC15array5Array4joinGsE(self, separator) {
  return _M0MPC15array9ArrayView4joinGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length), separator);
}
function _M0MPC15array5Array4joinGRPC16string10StringViewE(self, separator) {
  return _M0MPC15array9ArrayView4joinGRPC16string10StringViewE(new _M0TPB9ArrayViewGRPC16string10StringViewE(self, 0, self.length), separator);
}
function _M0IPC15float5FloatPB4Show10to__string(self) {
  return String(self);
}
function _M0MPC15debug4Repr4ReprGRP211localreview7mailbox12MailboxErrorE(value) {
  return _M0IP211localreview7mailbox12MailboxErrorPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGRPC15error5ErrorE(value) {
  return _M0IPC15error5ErrorPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGyE(value) {
  return _M0IPC14byte4BytePC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr8children(self) {
  let value;
  _L: {
    _L$2: {
      switch (self.$tag) {
        case 0: {
          break _L$2;
        }
        case 1: {
          break _L$2;
        }
        case 2: {
          break _L$2;
        }
        case 3: {
          break _L$2;
        }
        case 4: {
          break _L$2;
        }
        case 5: {
          break _L$2;
        }
        case 6: {
          break _L$2;
        }
        case 15: {
          break _L$2;
        }
        case 17: {
          break _L$2;
        }
        case 7: {
          const _Tuple = self;
          const _xs = _Tuple._0;
          return _xs;
        }
        case 8: {
          const _Array = self;
          const _xs$2 = _Array._0;
          return _xs$2;
        }
        case 9: {
          const _Record = self;
          const _xs$3 = _Record._0;
          return _xs$3;
        }
        case 10: {
          const _Enum = self;
          const _xs$4 = _Enum._1;
          return _xs$4;
        }
        case 11: {
          const _Map = self;
          const _xs$5 = _Map._0;
          return _xs$5;
        }
        case 14: {
          const _Opaque = self;
          const _value = _Opaque._1;
          value = _value;
          break _L;
        }
        case 12: {
          const _RecordField = self;
          const _value$2 = _RecordField._1;
          value = _value$2;
          break _L;
        }
        case 13: {
          const _EnumLabeledArg = self;
          const _value$3 = _EnumLabeledArg._1;
          value = _value$3;
          break _L;
        }
        default: {
          const _MapEntry = self;
          const _key = _MapEntry._0;
          const _value$4 = _MapEntry._1;
          return [_key, _value$4];
        }
      }
    }
    return [];
  }
  return [value];
}
function _M0MPC15debug4Repr14with__children(self, children) {
  _L: {
    switch (self.$tag) {
      case 0: {
        break _L;
      }
      case 1: {
        break _L;
      }
      case 2: {
        break _L;
      }
      case 3: {
        break _L;
      }
      case 4: {
        break _L;
      }
      case 5: {
        break _L;
      }
      case 6: {
        break _L;
      }
      case 15: {
        break _L;
      }
      case 17: {
        break _L;
      }
      case 7: {
        return new _M0DTPC15debug4Repr5Tuple(children);
      }
      case 8: {
        return new _M0DTPC15debug4Repr5Array(children);
      }
      case 9: {
        return new _M0DTPC15debug4Repr6Record(children);
      }
      case 10: {
        const _Enum = self;
        const _name = _Enum._0;
        return new _M0DTPC15debug4Repr4Enum(_name, children);
      }
      case 11: {
        return new _M0DTPC15debug4Repr3Map(children);
      }
      case 12: {
        const _RecordField = self;
        const _name$2 = _RecordField._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr11RecordField(_name$2, _value);
        } else {
          return new _M0DTPC15debug4Repr11RecordField(_name$2, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      case 13: {
        const _EnumLabeledArg = self;
        const _label = _EnumLabeledArg._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr14EnumLabeledArg(_label, _value);
        } else {
          return new _M0DTPC15debug4Repr14EnumLabeledArg(_label, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      case 16: {
        if (children.length === 2) {
          const _key = children[0];
          const _value = children[1];
          return new _M0DTPC15debug4Repr8MapEntry(_key, _value);
        } else {
          return new _M0DTPC15debug4Repr8MapEntry(_M0DTPC15debug4Repr7Omitted__, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      default: {
        const _Opaque = self;
        const _name$3 = _Opaque._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr6Opaque(_name$3, _value);
        } else {
          return new _M0DTPC15debug4Repr6Opaque(_name$3, _M0DTPC15debug4Repr7Omitted__);
        }
      }
    }
  }
  return self;
}
function _M0MPC15debug4Repr6string(x) {
  return new _M0DTPC15debug4Repr9StringLit(x);
}
function _M0MPC15debug4Repr5array(children) {
  return new _M0DTPC15debug4Repr5Array(children);
}
function _M0MPC15debug4Repr8opaque__(name, children) {
  return new _M0DTPC15debug4Repr6Opaque(name, children);
}
function _M0MPC15debug4Repr7literal(value) {
  return new _M0DTPC15debug4Repr7Literal(value);
}
function _M0MPC15debug4Repr7omitted() {
  return _M0DTPC15debug4Repr7Omitted__;
}
function _M0MPC15debug4Repr4ctor(name, args) {
  return new _M0DTPC15debug4Repr4Enum(name, _M0MPC15array5Array3mapGUOsRPC15debug4ReprERPC15debug4ReprE(args, (arg) => {
    const _label = arg._0;
    const _value = arg._1;
    if (_label === undefined) {
      return _value;
    } else {
      const _Some = _label;
      const _label$2 = _Some;
      return new _M0DTPC15debug4Repr14EnumLabeledArg(_label$2, _value);
    }
  }));
}
function _M0MPC15debug4Repr7shallow(self) {
  return _M0MPC15debug4Repr14with__children(self, []);
}
function _M0IPC15debug13ContentParensPB3Add3add(self, other) {
  return new _M0TPC15debug13ContentParens(self.size + other.size | 0, _M0IPC15array5ArrayPB3Add3addGsE(self.lines, other.lines));
}
function _M0FPC15debug14empty__content() {
  return new _M0TPC15debug7Content(0, [], false);
}
function _M0FPC15debug8verbatim(x) {
  return new _M0TPC15debug13ContentParens(1, [x]);
}
function _M0FPC15debug15content__parens(size, lines) {
  return new _M0TPC15debug13ContentParens(size, lines);
}
function _M0FPC15debug12leaf_2einner(x, needs_parens) {
  return new _M0TPC15debug7Content(1, [x], needs_parens);
}
function _M0FPC15debug11with__lines(r, f) {
  return new _M0TPC15debug13ContentParens(r.size, f(r.lines));
}
function _M0MPC15debug7Content20with__lines__content(r, f) {
  return new _M0TPC15debug7Content(r.size, f(r.lines), r.needs_parens);
}
function _M0FPC15debug15surround__lines(start, finish, lines) {
  if (lines.length === 0) {
    return [`${start}${finish}`];
  } else {
    if (lines.length === 1) {
      const _item = lines[0];
      return [`${start}${_item}${finish}`];
    } else {
      const _first = lines[0];
      const _last = lines[lines.length - 1 | 0];
      const _x = new _M0TPB9ArrayViewGsE(lines, 1, lines.length - 1 | 0);
      const _self = [];
      _M0MPC15array5Array4pushGsE(_self, `${start}${_first}`);
      _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x));
      _M0MPC15array5Array4pushGsE(_self, `${_last}${finish}`);
      return _self;
    }
  }
}
function _M0FPC15debug8surround(start, finish, r) {
  return _M0FPC15debug11with__lines(r, (lines) => _M0FPC15debug15surround__lines(start, finish, lines));
}
function _M0MPC15debug7Content8no__wrap(c) {
  return new _M0TPC15debug13ContentParens(c.size, c.lines);
}
function _M0FPC15debug6parens(r) {
  return new _M0TPC15debug7Content(r.size, r.lines, true);
}
function _M0FPC15debug10no__parens(r) {
  return new _M0TPC15debug7Content(r.size, r.lines, false);
}
function _M0FPC15debug14compact__lines(lines) {
  if (lines.length === 0) {
    return [];
  } else {
    if (lines.length === 1) {
      const _x = lines[0];
      return [_x];
    } else {
      const _first = lines[0];
      const _last = lines[lines.length - 1 | 0];
      const _x_end = lines.length - 1 | 0;
      if (_first === "[" && _last === "]" || _first === "{" && _last === "}") {
        const parts = [];
        const _bind = _x_end - 1 | 0;
        let _tmp = 0;
        while (true) {
          const _ = _tmp;
          if (_ < _bind) {
            const m = lines[1 + _ | 0];
            const t = _M0MPC16string6String4trim(m, undefined);
            if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(t, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1134, 0, _M0FPC15debug14compact__linesN7_2abindS1134.length))) {
              _M0MPC15array5Array4pushGsE(parts, t);
            }
            _tmp = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const joined0 = _M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1147, 0, _M0FPC15debug14compact__linesN7_2abindS1147.length));
        const _bind$2 = _M0MPC16string6String13strip__suffix(joined0, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1141, 0, _M0FPC15debug14compact__linesN7_2abindS1141.length));
        let joined;
        if (_bind$2 === undefined) {
          joined = new _M0TPC16string10StringView(joined0, 0, joined0.length);
        } else {
          const _Some = _bind$2;
          joined = _Some;
        }
        if (_first === "{") {
          const s1 = _M0MPC16option6Option10unwrap__orGRPC16string10StringViewE(_M0MPC16string10StringView13strip__prefix(joined, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1139, 0, _M0FPC15debug14compact__linesN7_2abindS1139.length)), joined);
          const inner = _M0MPC16option6Option10unwrap__orGRPC16string10StringViewE(_M0MPC16string10StringView13strip__suffix(s1, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1138, 0, _M0FPC15debug14compact__linesN7_2abindS1138.length)), s1);
          if (_M0IPC16string10StringViewPB2Eq5equal(inner, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1136, 0, _M0FPC15debug14compact__linesN7_2abindS1136.length))) {
            return ["{}"];
          } else {
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(4);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{ ");
            _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, inner);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " }");
            return [_M0MPB13StringBuilder10to__string(_string_builder)];
          }
        } else {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(2);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "[");
          _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, joined);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "]");
          return [_M0MPB13StringBuilder10to__string(_string_builder)];
        }
      } else {
        if (_M0MPC16string6String11has__suffix(_first, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1148, 0, _M0FPC15debug14compact__linesN7_2abindS1148.length)) && _last === ")") {
          const parts = [];
          const _bind = _x_end - 1 | 0;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < _bind) {
              const m = lines[1 + _ | 0];
              const t = _M0MPC16string6String4trim(m, undefined);
              if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(t, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1152, 0, _M0FPC15debug14compact__linesN7_2abindS1152.length))) {
                _M0MPC15array5Array4pushGsE(parts, t);
              }
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          const joined0 = _M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1161, 0, _M0FPC15debug14compact__linesN7_2abindS1161.length));
          const _bind$2 = _M0MPC16string6String13strip__suffix(joined0, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1155, 0, _M0FPC15debug14compact__linesN7_2abindS1155.length));
          let joined;
          if (_bind$2 === undefined) {
            joined = new _M0TPC16string10StringView(joined0, 0, joined0.length);
          } else {
            const _Some = _bind$2;
            joined = _Some;
          }
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(0);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, _first);
          _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, joined);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, _last);
          return [_M0MPB13StringBuilder10to__string(_string_builder)];
        } else {
          const parts = [new _M0TPC16string10StringView(_first, 0, _first.length)];
          const _bind = _x_end - 1 | 0;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < _bind) {
              const m = lines[1 + _ | 0];
              _M0MPC15array5Array4pushGsE(parts, _M0MPC16string6String4trim(m, undefined));
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MPC15array5Array4pushGsE(parts, _M0MPC16string6String4trim(_last, undefined));
          return [_M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1166, 0, _M0FPC15debug14compact__linesN7_2abindS1166.length))];
        }
      }
    }
  }
}
function _M0MPC15debug7Content7compact(r) {
  return _M0MPC15debug7Content20with__lines__content(r, _M0FPC15debug14compact__lines);
}
function _M0FPC15debug6indent(prefix, r) {
  return _M0FPC15debug11with__lines(r, (lines) => _M0MPC15array5Array3mapGssE(lines, (line) => `${prefix}${line}`));
}
function _M0FPC15debug14indent__spaces(n, r) {
  return _M0FPC15debug6indent(_M0MPC16string6String6repeat(" ", n), r);
}
function _M0FPC15debug19bracket__seq__lines(open, close, indent_by, contents) {
  if (contents.length === 0) {
    return [`${open}${close}`];
  } else {
    if (contents.length === 1) {
      const _item = contents[0];
      if (_item.length > 1) {
        const lines = _M0FPC15debug14indent__spaces(indent_by, new _M0TPC15debug13ContentParens(0, _item)).lines;
        if (!_M0MPC15array5Array9is__emptyGRP211localreview7mailbox6HeaderE(lines)) {
          const last_i = lines.length - 1 | 0;
          _M0MPC15array5Array3setGRP211localreview7mailbox6HeaderE(lines, last_i, `${_M0MPC15array5Array2atGRP211localreview7mailbox7MessageE(lines, last_i)},`);
        }
        const _self = [];
        _M0MPC15array5Array4pushGsE(_self, open);
        _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(lines));
        _M0MPC15array5Array4pushGsE(_self, close);
        return _self;
      } else {
        const inner = _M0FPC15debug14compact__lines(_item);
        if (inner.length === 0) {
          return [`${open}${close}`];
        } else {
          if (inner.length === 1) {
            const _x = inner[0];
            if (open === "{" && close === "}") {
              const inner$2 = _M0MPC16string6String4trim(_x, undefined);
              if (_M0IPC16string10StringViewPB2Eq5equal(inner$2, new _M0TPC16string10StringView(_M0FPC15debug19bracket__seq__linesN7_2abindS1175, 0, _M0FPC15debug19bracket__seq__linesN7_2abindS1175.length))) {
                return ["{}"];
              } else {
                const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(4);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{ ");
                _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, inner$2);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " }");
                return [_M0MPB13StringBuilder10to__string(_string_builder)];
              }
            } else {
              return [`${open}${_x}${close}`];
            }
          } else {
            const _self = [];
            _M0MPC15array5Array4pushGsE(_self, open);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug14indent__spaces(indent_by, new _M0TPC15debug13ContentParens(0, _item)).lines));
            _M0MPC15array5Array4pushGsE(_self, close);
            return _self;
          }
        }
      }
    } else {
      const out = [open];
      const _bind = contents.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind) {
          const item = contents[_];
          const item_lines = _M0MPC15array5Array6filterGsE(item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
          if (item_lines.length === 0) {
          } else {
            if (item_lines.length === 1) {
              const _x = item_lines[0];
              _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_x},`);
            } else {
              const _first = item_lines[0];
              const _last = item_lines[item_lines.length - 1 | 0];
              const _x_end = item_lines.length - 1 | 0;
              _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_first}`);
              const _bind$2 = _x_end - 1 | 0;
              let _tmp$2 = 0;
              while (true) {
                const _$2 = _tmp$2;
                if (_$2 < _bind$2) {
                  const mid = item_lines[1 + _$2 | 0];
                  _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${mid}`);
                  _tmp$2 = _$2 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_last},`);
            }
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGsE(out, close);
      return out;
    }
  }
}
function _M0FPC15debug17comma__seq__lines(begin, end, contents) {
  if (begin === "[" && end === "]") {
    return _M0FPC15debug19bracket__seq__lines("[", "]", 2, contents);
  } else {
    if (begin === "{" && end === "}") {
      return _M0FPC15debug19bracket__seq__lines("{", "}", 2, contents);
    } else {
      if (begin === "" && end === "") {
        let lines;
        if (contents.length === 0) {
          lines = [`${begin}${end}`];
        } else {
          if (contents.length === 1) {
            const _item = contents[0];
            lines = _M0FPC15debug15surround__lines(begin, end, _item);
          } else {
            const _first = contents[0];
            const _last = contents[contents.length - 1 | 0];
            const _x_end = contents.length - 1 | 0;
            const space = _M0MPC16string6String6repeat(" ", begin.length);
            const middle_lines = [];
            const _bind = _x_end - 1 | 0;
            let _tmp = 0;
            while (true) {
              const _ = _tmp;
              if (_ < _bind) {
                const item = contents[1 + _ | 0];
                const _bind$2 = _M0FPC15debug15surround__lines(space, ",", item);
                _M0MPC15array5Array6appendGsE(middle_lines, new _M0TPB9ArrayViewGsE(_bind$2, 0, _bind$2.length));
                _tmp = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const _self = [];
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug15surround__lines(begin, ",", _first)));
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(middle_lines));
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug15surround__lines(space, end, _last)));
            lines = _self;
          }
        }
        return _M0MPC15array5Array6filterGsE(lines, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
      } else {
        if (contents.length === 0) {
          return [`${begin}${end}`];
        } else {
          if (contents.length === 1) {
            const _item = contents[0];
            const item_lines = _M0MPC15array5Array6filterGsE(_item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
            if (item_lines.length === 0) {
              return [`${begin}${end}`];
            } else {
              if (item_lines.length === 1) {
                const _x = item_lines[0];
                return [`${begin}${_x}${end}`];
              } else {
                const _last_line = item_lines[item_lines.length - 1 | 0];
                const _x = new _M0TPB9ArrayViewGsE(item_lines, 0, item_lines.length - 1 | 0);
                const _self = [];
                _M0MPC15array5Array4pushGsE(_self, begin);
                _M0MPC15array5Array10push__iterGsE(_self, _M0MPB4Iter4iterGsE(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPC15array9ArrayView4iterGsE(_x), (line) => `${_M0MPC16string6String6repeat(" ", 2)}${line}`)));
                _M0MPC15array5Array4pushGsE(_self, `${_M0MPC16string6String6repeat(" ", 2)}${_last_line},`);
                _M0MPC15array5Array4pushGsE(_self, end);
                return _self;
              }
            }
          } else {
            const out = [begin];
            const _bind = contents.length;
            let _tmp = 0;
            while (true) {
              const _ = _tmp;
              if (_ < _bind) {
                const item = contents[_];
                const item_lines = _M0MPC15array5Array6filterGsE(item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
                if (item_lines.length === 0) {
                } else {
                  if (item_lines.length === 1) {
                    const _x = item_lines[0];
                    _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_x},`);
                  } else {
                    const _first = item_lines[0];
                    const _last = item_lines[item_lines.length - 1 | 0];
                    const _x_end = item_lines.length - 1 | 0;
                    _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_first}`);
                    const _bind$2 = _x_end - 1 | 0;
                    let _tmp$2 = 0;
                    while (true) {
                      const _$2 = _tmp$2;
                      if (_$2 < _bind$2) {
                        const mid = item_lines[1 + _$2 | 0];
                        _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", 2)}${mid}`);
                        _tmp$2 = _$2 + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_last},`);
                  }
                }
                _tmp = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _M0MPC15array5Array4pushGsE(out, end);
            return out;
          }
        }
      }
    }
  }
}
function _M0FPC15debug10comma__seq(begin, end, contents) {
  const _bind = contents.length;
  let _tmp = 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp;
    const size = _tmp$2;
    if (_ < _bind) {
      const c = contents[_];
      _tmp = _ + 1 | 0;
      _tmp$2 = size + c.size | 0;
      continue;
    } else {
      return new _M0TPC15debug7Content(size, _M0FPC15debug17comma__seq__lines(begin, end, _M0MPC15array5Array3mapGRPC15debug13ContentParensRPB5ArrayGsEE(contents, (c) => c.lines)), false);
    }
  }
}
function _M0FPC15debug14print__content(r) {
  return _M0MPC15array5Array4joinGsE(r.lines, new _M0TPC16string10StringView(_M0FPC15debug14print__contentN7_2abindS1244, 0, _M0FPC15debug14print__contentN7_2abindS1244.length));
}
function _M0FPC15debug14with__resizing(_root_size, threshold, rendered_children) {
  if (threshold <= 0) {
    return rendered_children;
  } else {
    const compacted = _M0MPC15debug7Content7compact(rendered_children);
    return _M0MPC15array5Array3allGsE(compacted.lines, (line) => line.length <= threshold) ? compacted : rendered_children;
  }
}
function _M0MPC15debug4Repr17info__adds__depth(info) {
  let _tmp;
  switch (info.$tag) {
    case 12: {
      _tmp = true;
      break;
    }
    case 13: {
      _tmp = true;
      break;
    }
    case 16: {
      _tmp = true;
      break;
    }
    default: {
      _tmp = false;
    }
  }
  return !_tmp;
}
function _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, d, node) {
  const children = _M0MPC15debug4Repr8children(node);
  if (d <= 0) {
    return _M0MPC15array5Array9is__emptyGRP211localreview7mailbox6HeaderE(children) ? node : !_M0MPC15debug4Repr17info__adds__depth(node) ? _M0MPC15debug4Repr14with__children(node, _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(children, (child) => _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, d, child))) : replacement;
  } else {
    if (_M0MPC15array5Array9is__emptyGRP211localreview7mailbox6HeaderE(children)) {
      return node;
    } else {
      const next_depth = _M0MPC15debug4Repr17info__adds__depth(node) ? d - 1 | 0 : d;
      return _M0MPC15debug4Repr14with__children(node, _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(children, (child) => _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, next_depth, child)));
    }
  }
}
function _M0MPC15debug4Repr19prune__info_2einner(self, replacement, max_depth) {
  if (max_depth === undefined) {
    return self;
  } else {
    const _Some = max_depth;
    const _depth = _Some;
    return _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, _M0MPC13int3Int3max(1, _depth), self);
  }
}
function _M0MPC15debug4Repr11prune__info(self, replacement$46$opt, max_depth) {
  let replacement;
  if (replacement$46$opt === undefined) {
    replacement = _M0MPC15debug4Repr7omitted();
  } else {
    const _Some = replacement$46$opt;
    replacement = _Some;
  }
  return _M0MPC15debug4Repr19prune__info_2einner(self, replacement, max_depth);
}
function _M0FPC15debug10info__size(info) {
  switch (info.$tag) {
    case 0: {
      return 1;
    }
    case 1: {
      return 1;
    }
    case 2: {
      return 1;
    }
    case 3: {
      return 1;
    }
    case 4: {
      return 1;
    }
    case 5: {
      return 1;
    }
    case 6: {
      const _StringLit = info;
      const _s = _StringLit._0;
      return _s.length <= 15 ? 1 : 2;
    }
    case 7: {
      return 1;
    }
    case 8: {
      return 1;
    }
    case 9: {
      return 2;
    }
    case 12: {
      const _RecordField = info;
      const _name = _RecordField._0;
      return _name.length <= 15 ? 0 : 1;
    }
    case 13: {
      const _EnumLabeledArg = info;
      const _name$2 = _EnumLabeledArg._0;
      return _name$2.length <= 15 ? 0 : 1;
    }
    case 10: {
      const _Enum = info;
      const _name$3 = _Enum._0;
      return _name$3.length <= 15 ? 1 : 2;
    }
    case 14: {
      const _Opaque = info;
      const _name$4 = _Opaque._0;
      return _name$4.length <= 15 ? 1 : 2;
    }
    case 15: {
      const _Literal = info;
      const _s$2 = _Literal._0;
      return _s$2.length <= 15 ? 1 : 2;
    }
    case 11: {
      return 2;
    }
    case 16: {
      return 0;
    }
    default: {
      return 0;
    }
  }
}
function _M0FPC15debug17is__unquoted__key(key) {
  let rest;
  _L: {
    if (key.length >= 1) {
      const _x = key.charCodeAt(0);
      if (_x >= 97 && _x <= 122) {
        const _x$2 = new _M0TPC16string10StringView(key, 1, key.length);
        rest = _x$2;
        break _L;
      } else {
        if (_x === 95) {
          const _x$2 = new _M0TPC16string10StringView(key, 1, key.length);
          rest = _x$2;
          break _L;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  }
  return _M0MPC16string10StringView3all(rest, (c) => c >= 97 && c <= 122 ? true : c >= 65 && c <= 90 ? true : c >= 48 && c <= 57 ? true : c === 95);
}
function _M0FPC15debug20pretty__print__label(name) {
  return _M0FPC15debug17is__unquoted__key(name) ? name : _M0MPC16string6String14escape_2einner(name, true);
}
function _M0MPC15debug4Repr13pretty__print(self, children) {
  switch (self.$tag) {
    case 0: {
      return _M0FPC15debug10comma__seq("(", ")", []);
    }
    case 1: {
      const _Integer = self;
      const _s = _Integer._0;
      let _tmp;
      if (_s.length >= 1) {
        const _x = _s.charCodeAt(0);
        if (_x === 45) {
          _tmp = 1;
        } else {
          _tmp = 0;
        }
      } else {
        _tmp = 0;
      }
      return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp, [_s]));
    }
    case 2: {
      const _DoubleLit = self;
      const _x = _DoubleLit._0;
      const needs_parens = 1 / _x < 0;
      return _M0FPC15debug12leaf_2einner(String(_x), needs_parens);
    }
    case 3: {
      const _FloatLit = self;
      const _x$2 = _FloatLit._0;
      const needs_parens$2 = Math.fround(Math.fround(1) / _x$2) < Math.fround(0);
      return _M0FPC15debug12leaf_2einner(_M0IPC15float5FloatPB4Show10to__string(_x$2), needs_parens$2);
    }
    case 4: {
      const _BoolLit = self;
      const _x$3 = _BoolLit._0;
      return _M0FPC15debug12leaf_2einner(_M0IPC14bool4BoolPB4Show10to__string(_x$3), false);
    }
    case 5: {
      const _CharLit = self;
      const _x$4 = _CharLit._0;
      return _M0FPC15debug12leaf_2einner(_M0MPC14char4Char14escape_2einner(_x$4, true), false);
    }
    case 6: {
      const _StringLit = self;
      const _x$5 = _StringLit._0;
      return _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_M0MPC16string6String14escape_2einner(_x$5, true)));
    }
    case 7: {
      return _M0FPC15debug10comma__seq("(", ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 10: {
      const _Enum = self;
      const _name = _Enum._0;
      return children.length === 0 ? _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_name)) : _name === "Tuple" ? _M0FPC15debug10comma__seq("(", ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x))) : _M0FPC15debug10comma__seq(`${_name}(`, ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 8: {
      return _M0FPC15debug10comma__seq("[", "]", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 9: {
      return _M0FPC15debug10comma__seq("{", "}", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 14: {
      const _Opaque = self;
      const _name$2 = _Opaque._0;
      if (_M0MPC15array5Array9is__emptyGRP211localreview7mailbox6HeaderE(children)) {
        return _M0FPC15debug10no__parens(_M0FPC15debug8surround("<", ">", _M0FPC15debug8verbatim(_name$2)));
      } else {
        const body = _M0IPC15debug13ContentParensPB3Add3add(_M0FPC15debug8verbatim(`${_name$2}:`), _M0FPC15debug6indent("  ", _M0MPC15debug7Content8no__wrap(_M0FPC15debug10comma__seq("", "", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x))))));
        return _M0FPC15debug10no__parens(_M0FPC15debug8surround("<", ">", body));
      }
    }
    case 15: {
      const _Literal = self;
      const _str = _Literal._0;
      return _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_str));
    }
    case 11: {
      return _M0FPC15debug10comma__seq("{", "}", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 16: {
      if (children.length === 2) {
        const _key = children[0];
        const _val = children[1];
        const k = _M0MPC15debug7Content8no__wrap(_key);
        const v = _M0MPC15debug7Content8no__wrap(_val);
        const _bind = v.lines;
        if (_bind.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind.length === 1) {
            const _one = _bind[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens((1 + k.size | 0) + v.size | 0, [`${_M0FPC15debug14print__content(_M0FPC15debug8surround("", ": ", k))}${_one}`]));
          } else {
            const _first = _bind[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind, 1, _bind.length);
            const head = `${_M0FPC15debug14print__content(_M0FPC15debug8surround("", ": ", k))}${_first}`;
            const _tmp$2 = (1 + k.size | 0) + v.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGsE(_self, head);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$2, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    case 13: {
      const _EnumLabeledArg = self;
      const _name$3 = _EnumLabeledArg._0;
      if (children.length === 1) {
        const _val = children[0];
        const _bind = _val.lines;
        if (_bind.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind.length === 1) {
            const _first = _bind[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(1 + _val.size | 0, [`${_name$3}=${_first}`]));
          } else {
            const _first = _bind[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind, 1, _bind.length);
            const _tmp$2 = 1 + _val.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGsE(_self, `${_name$3}=${_first}`);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$2, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    case 12: {
      const _RecordField = self;
      const _name$4 = _RecordField._0;
      if (children.length === 1) {
        const _val = children[0];
        const label = _M0FPC15debug20pretty__print__label(_name$4);
        const v = _M0MPC15debug7Content8no__wrap(_val);
        const _bind = v.lines;
        if (_bind.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind.length === 1) {
            const _one = _bind[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(1 + v.size | 0, [`${label}: ${_one}`]));
          } else {
            const _first = _bind[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind, 1, _bind.length);
            const _tmp$2 = 1 + v.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGsE(_self, `${label}: ${_first}`);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$2, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    default: {
      return _M0FPC15debug6parens(_M0FPC15debug8verbatim("..."));
    }
  }
}
function _M0MPC15debug4Repr12render__repr(self, threshold) {
  const label = _M0MPC15debug4Repr7shallow(self);
  const children = _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug7ContentE(_M0MPC15debug4Repr8children(self), (child) => _M0MPC15debug4Repr12render__repr(child, threshold));
  return _M0FPC15debug14with__resizing(_M0FPC15debug10info__size(label), threshold, _M0MPC15debug4Repr13pretty__print(label, children));
}
function _M0FPC15debug6render(r, max_depth) {
  const max_depth$2 = max_depth === undefined ? _M0FPC15debug6renderN6constrS1705 : max_depth;
  const info = _M0MPC15debug4Repr11prune__info(r, undefined, max_depth$2);
  return _M0FPC15debug14print__content(_M0MPC15debug7Content8no__wrap(_M0MPC15debug4Repr12render__repr(info, 70)));
}
function _M0IPC15debug4ReprPB4Show6output(self, logger) {
  logger.method_table.method_0(logger.self, _M0FPC15debug6render(self, undefined));
}
function _M0IPC14byte4BytePC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr7literal(`0x${_M0MPC14byte4Byte7to__hex(self)}`);
}
function _M0IPC16string6StringPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr6string(self);
}
function _M0IPC16string10StringViewPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr8opaque__("StringView", _M0MPC15debug4Repr6string(_M0MPC16string10StringView9to__owned(self)));
}
function _M0IPC15bytes9BytesViewPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr8opaque__("BytesView", _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGyRPC15debug4ReprE(_M0MPC15bytes9BytesView9to__array(self), (x) => _M0MPC15debug4Repr4ReprGyE(x))));
}
function _M0IPC28encoding4utf89MalformedPC15debug5Debug8to__reprGRPC28encoding4utf89MalformedE(_x_46) {
  const _Malformed = _x_46;
  const _$42$arg_47 = _Malformed._0;
  return _M0MPC15debug4Repr4ctor("Malformed", [{ _0: undefined, _1: _M0IPC15bytes9BytesViewPC15debug5Debug8to__repr(_$42$arg_47) }]);
}
function _M0FPC28encoding4utf814encode_2einner(str, bom) {
  return _M0FPC28encoding4utf816encode__utf8__js(_M0MPC16string10StringView4data(str), _M0MPC16string10StringView13start__offset(str), str.end - str.start | 0, bom);
}
function _M0FPC28encoding4utf821utf8__find__malformed(src, src_offset, src_length) {
  const _bind = src_offset + src_length | 0;
  const _bind$2 = src.length;
  if (src_offset < 0 || (src_offset > _bind || _bind > _bind$2)) {
    $panic();
  }
  const view = new _M0TPC15bytes9BytesView(src, src_offset, _bind);
  let _tmp = view;
  while (true) {
    const bytes = _tmp;
    let malformed;
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            let rest$4;
            _L$5: {
              if ((bytes.end - bytes.start | 0) === 0) {
                return -1;
              } else {
                if ((bytes.end - bytes.start | 0) >= 8) {
                  const _x = bytes.buf[bytes.start];
                  if (_x <= 127) {
                    const _x$2 = bytes.buf[bytes.start + 1 | 0];
                    if (_x$2 <= 127) {
                      const _x$3 = bytes.buf[bytes.start + 2 | 0];
                      if (_x$3 <= 127) {
                        const _x$4 = bytes.buf[bytes.start + 3 | 0];
                        if (_x$4 <= 127) {
                          const _x$5 = bytes.buf[bytes.start + 4 | 0];
                          if (_x$5 <= 127) {
                            const _x$6 = bytes.buf[bytes.start + 5 | 0];
                            if (_x$6 <= 127) {
                              const _x$7 = bytes.buf[bytes.start + 6 | 0];
                              if (_x$7 <= 127) {
                                const _x$8 = bytes.buf[bytes.start + 7 | 0];
                                if (_x$8 <= 127) {
                                  const _x$9 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 8 | 0, bytes.end);
                                  _tmp = _x$9;
                                  continue;
                                } else {
                                  const _x$9 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                                  rest$4 = _x$9;
                                  break _L$5;
                                }
                              } else {
                                const _x$8 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                                rest$4 = _x$8;
                                break _L$5;
                              }
                            } else {
                              const _x$7 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                              rest$4 = _x$7;
                              break _L$5;
                            }
                          } else {
                            const _x$6 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                            rest$4 = _x$6;
                            break _L$5;
                          }
                        } else {
                          const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                          rest$4 = _x$5;
                          break _L$5;
                        }
                      } else {
                        const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                        rest$4 = _x$4;
                        break _L$5;
                      }
                    } else {
                      const _x$3 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                      rest$4 = _x$3;
                      break _L$5;
                    }
                  } else {
                    if (_x >= 194 && _x <= 223) {
                      const _x$2 = bytes.buf[bytes.start + 1 | 0];
                      if (_x$2 >= 128 && _x$2 <= 191) {
                        const _x$3 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 2 | 0, bytes.end);
                        rest$3 = _x$3;
                        break _L$4;
                      } else {
                        malformed = bytes;
                        break _L;
                      }
                    } else {
                      if (_x === 224) {
                        const _x$2 = bytes.buf[bytes.start + 1 | 0];
                        if (_x$2 >= 160 && _x$2 <= 191) {
                          const _x$3 = bytes.buf[bytes.start + 2 | 0];
                          if (_x$3 >= 128 && _x$3 <= 191) {
                            const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                            rest$2 = _x$4;
                            break _L$3;
                          } else {
                            malformed = bytes;
                            break _L;
                          }
                        } else {
                          malformed = bytes;
                          break _L;
                        }
                      } else {
                        if (_x >= 225 && _x <= 236) {
                          const _x$2 = bytes.buf[bytes.start + 1 | 0];
                          if (_x$2 >= 128 && _x$2 <= 191) {
                            const _x$3 = bytes.buf[bytes.start + 2 | 0];
                            if (_x$3 >= 128 && _x$3 <= 191) {
                              const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                              rest$2 = _x$4;
                              break _L$3;
                            } else {
                              malformed = bytes;
                              break _L;
                            }
                          } else {
                            malformed = bytes;
                            break _L;
                          }
                        } else {
                          if (_x === 237) {
                            const _x$2 = bytes.buf[bytes.start + 1 | 0];
                            if (_x$2 >= 128 && _x$2 <= 159) {
                              const _x$3 = bytes.buf[bytes.start + 2 | 0];
                              if (_x$3 >= 128 && _x$3 <= 191) {
                                const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                                rest$2 = _x$4;
                                break _L$3;
                              } else {
                                malformed = bytes;
                                break _L;
                              }
                            } else {
                              malformed = bytes;
                              break _L;
                            }
                          } else {
                            if (_x >= 238 && _x <= 239) {
                              const _x$2 = bytes.buf[bytes.start + 1 | 0];
                              if (_x$2 >= 128 && _x$2 <= 191) {
                                const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                if (_x$3 >= 128 && _x$3 <= 191) {
                                  const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                                  rest$2 = _x$4;
                                  break _L$3;
                                } else {
                                  malformed = bytes;
                                  break _L;
                                }
                              } else {
                                malformed = bytes;
                                break _L;
                              }
                            } else {
                              if (_x === 240) {
                                const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                if (_x$2 >= 144 && _x$2 <= 191) {
                                  const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                  if (_x$3 >= 128 && _x$3 <= 191) {
                                    const _x$4 = bytes.buf[bytes.start + 3 | 0];
                                    if (_x$4 >= 128 && _x$4 <= 191) {
                                      const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 4 | 0, bytes.end);
                                      rest = _x$5;
                                      break _L$2;
                                    } else {
                                      malformed = bytes;
                                      break _L;
                                    }
                                  } else {
                                    malformed = bytes;
                                    break _L;
                                  }
                                } else {
                                  malformed = bytes;
                                  break _L;
                                }
                              } else {
                                if (_x >= 241 && _x <= 243) {
                                  const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                  if (_x$2 >= 128 && _x$2 <= 191) {
                                    const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                    if (_x$3 >= 128 && _x$3 <= 191) {
                                      const _x$4 = bytes.buf[bytes.start + 3 | 0];
                                      if (_x$4 >= 128 && _x$4 <= 191) {
                                        const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 4 | 0, bytes.end);
                                        rest = _x$5;
                                        break _L$2;
                                      } else {
                                        malformed = bytes;
                                        break _L;
                                      }
                                    } else {
                                      malformed = bytes;
                                      break _L;
                                    }
                                  } else {
                                    malformed = bytes;
                                    break _L;
                                  }
                                } else {
                                  if (_x === 244) {
                                    const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                    if (_x$2 >= 128 && _x$2 <= 143) {
                                      const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                      if (_x$3 >= 128 && _x$3 <= 191) {
                                        const _x$4 = bytes.buf[bytes.start + 3 | 0];
                                        if (_x$4 >= 128 && _x$4 <= 191) {
                                          const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 4 | 0, bytes.end);
                                          rest = _x$5;
                                          break _L$2;
                                        } else {
                                          malformed = bytes;
                                          break _L;
                                        }
                                      } else {
                                        malformed = bytes;
                                        break _L;
                                      }
                                    } else {
                                      malformed = bytes;
                                      break _L;
                                    }
                                  } else {
                                    malformed = bytes;
                                    break _L;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                } else {
                  const _x = bytes.buf[bytes.start];
                  if (_x >= 0 && _x <= 127) {
                    const _x$2 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                    rest$4 = _x$2;
                    break _L$5;
                  } else {
                    if ((bytes.end - bytes.start | 0) >= 2) {
                      if (_x >= 194 && _x <= 223) {
                        const _x$2 = bytes.buf[bytes.start + 1 | 0];
                        if (_x$2 >= 128 && _x$2 <= 191) {
                          const _x$3 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 2 | 0, bytes.end);
                          rest$3 = _x$3;
                          break _L$4;
                        } else {
                          (bytes.end - bytes.start | 0) >= 3;
                          malformed = bytes;
                          break _L;
                        }
                      } else {
                        if ((bytes.end - bytes.start | 0) >= 3) {
                          if (_x === 224) {
                            const _x$2 = bytes.buf[bytes.start + 1 | 0];
                            if (_x$2 >= 160 && _x$2 <= 191) {
                              const _x$3 = bytes.buf[bytes.start + 2 | 0];
                              if (_x$3 >= 128 && _x$3 <= 191) {
                                const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                                rest$2 = _x$4;
                                break _L$3;
                              } else {
                                malformed = bytes;
                                break _L;
                              }
                            } else {
                              malformed = bytes;
                              break _L;
                            }
                          } else {
                            if (_x >= 225 && _x <= 236) {
                              const _x$2 = bytes.buf[bytes.start + 1 | 0];
                              if (_x$2 >= 128 && _x$2 <= 191) {
                                const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                if (_x$3 >= 128 && _x$3 <= 191) {
                                  const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                                  rest$2 = _x$4;
                                  break _L$3;
                                } else {
                                  malformed = bytes;
                                  break _L;
                                }
                              } else {
                                malformed = bytes;
                                break _L;
                              }
                            } else {
                              if (_x === 237) {
                                const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                if (_x$2 >= 128 && _x$2 <= 159) {
                                  const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                  if (_x$3 >= 128 && _x$3 <= 191) {
                                    const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                                    rest$2 = _x$4;
                                    break _L$3;
                                  } else {
                                    malformed = bytes;
                                    break _L;
                                  }
                                } else {
                                  malformed = bytes;
                                  break _L;
                                }
                              } else {
                                if (_x >= 238 && _x <= 239) {
                                  const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                  if (_x$2 >= 128 && _x$2 <= 191) {
                                    const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                    if (_x$3 >= 128 && _x$3 <= 191) {
                                      const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                                      rest$2 = _x$4;
                                      break _L$3;
                                    } else {
                                      malformed = bytes;
                                      break _L;
                                    }
                                  } else {
                                    malformed = bytes;
                                    break _L;
                                  }
                                } else {
                                  if ((bytes.end - bytes.start | 0) >= 4) {
                                    if (_x === 240) {
                                      const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                      if (_x$2 >= 144 && _x$2 <= 191) {
                                        const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                        if (_x$3 >= 128 && _x$3 <= 191) {
                                          const _x$4 = bytes.buf[bytes.start + 3 | 0];
                                          if (_x$4 >= 128 && _x$4 <= 191) {
                                            const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 4 | 0, bytes.end);
                                            rest = _x$5;
                                            break _L$2;
                                          } else {
                                            malformed = bytes;
                                            break _L;
                                          }
                                        } else {
                                          malformed = bytes;
                                          break _L;
                                        }
                                      } else {
                                        malformed = bytes;
                                        break _L;
                                      }
                                    } else {
                                      if (_x >= 241 && _x <= 243) {
                                        const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                        if (_x$2 >= 128 && _x$2 <= 191) {
                                          const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                          if (_x$3 >= 128 && _x$3 <= 191) {
                                            const _x$4 = bytes.buf[bytes.start + 3 | 0];
                                            if (_x$4 >= 128 && _x$4 <= 191) {
                                              const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 4 | 0, bytes.end);
                                              rest = _x$5;
                                              break _L$2;
                                            } else {
                                              malformed = bytes;
                                              break _L;
                                            }
                                          } else {
                                            malformed = bytes;
                                            break _L;
                                          }
                                        } else {
                                          malformed = bytes;
                                          break _L;
                                        }
                                      } else {
                                        if (_x === 244) {
                                          const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                          if (_x$2 >= 128 && _x$2 <= 143) {
                                            const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                            if (_x$3 >= 128 && _x$3 <= 191) {
                                              const _x$4 = bytes.buf[bytes.start + 3 | 0];
                                              if (_x$4 >= 128 && _x$4 <= 191) {
                                                const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 4 | 0, bytes.end);
                                                rest = _x$5;
                                                break _L$2;
                                              } else {
                                                malformed = bytes;
                                                break _L;
                                              }
                                            } else {
                                              malformed = bytes;
                                              break _L;
                                            }
                                          } else {
                                            malformed = bytes;
                                            break _L;
                                          }
                                        } else {
                                          malformed = bytes;
                                          break _L;
                                        }
                                      }
                                    }
                                  } else {
                                    malformed = bytes;
                                    break _L;
                                  }
                                }
                              }
                            }
                          }
                        } else {
                          malformed = bytes;
                          break _L;
                        }
                      }
                    } else {
                      malformed = bytes;
                      break _L;
                    }
                  }
                }
              }
            }
            _tmp = rest$4;
            continue;
          }
          _tmp = rest$3;
          continue;
        }
        _tmp = rest$2;
        continue;
      }
      _tmp = rest;
      continue;
    }
    return _M0MPC15bytes9BytesView13start__offset(malformed) - src_offset | 0;
  }
}
function _M0FPC28encoding4utf825strict__malformed__suffix(bytes) {
  const input = _M0MPC15bytes9BytesView4data(bytes);
  const src_offset = _M0MPC15bytes9BytesView13start__offset(bytes);
  const src_length = bytes.end - bytes.start | 0;
  const malformed_offset = _M0FPC28encoding4utf821utf8__find__malformed(input, src_offset, src_length);
  const _bind = bytes.end - bytes.start | 0;
  if (malformed_offset < 0 || malformed_offset > _bind) {
    $panic();
  }
  return new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + malformed_offset | 0, bytes.start + _bind | 0);
}
function _M0FPC28encoding4utf815drop__utf8__bom(bytes, ignore_bom) {
  _L: {
    if (ignore_bom) {
      _L$2: {
        if ((bytes.end - bytes.start | 0) >= 3) {
          const _x = bytes.buf[bytes.start];
          if (_x === 239) {
            const _x$2 = bytes.buf[bytes.start + 1 | 0];
            if (_x$2 === 187) {
              const _x$3 = bytes.buf[bytes.start + 2 | 0];
              if (_x$3 === 191) {
                return new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
              } else {
                break _L$2;
              }
            } else {
              break _L$2;
            }
          } else {
            break _L$2;
          }
        } else {
          break _L$2;
        }
      }
      break _L;
    } else {
      break _L;
    }
  }
  return bytes;
}
function _M0FPC28encoding4utf814decode_2einner(bytes, ignore_bom) {
  const result = _M0FPC28encoding4utf816decode__utf8__js(_M0MPC15bytes9BytesView4data(bytes), _M0MPC15bytes9BytesView13start__offset(bytes), bytes.end - bytes.start | 0, !ignore_bom);
  if (result.length === 1) {
    return new _M0DTPC16result6ResultGsRPC28encoding4utf89MalformedE2Ok(0 >>> 0 < result.length ? result[0] : $oob());
  } else {
    const bytes$2 = _M0FPC28encoding4utf815drop__utf8__bom(bytes, ignore_bom);
    return new _M0DTPC16result6ResultGsRPC28encoding4utf89MalformedE3Err(new _M0DTPC15error5Error60moonbitlang_2fcore_2fencoding_2futf8_2eMalformed_2eMalformed(_M0FPC28encoding4utf825strict__malformed__suffix(bytes$2)));
  }
}
function _M0IPC15error5ErrorPC15debug5Debug8to__repr(self) {
  return _M0FP15Error8to__repr(self);
}
function _M0FPC16buffer24buffer__growth__capacity(current, len, required) {
  if (required < len) {
    _M0FPC15abort5abortGuE("Buffer capacity overflow");
  }
  const start = current <= 0 ? 1 : current;
  let _tmp = start;
  while (true) {
    const space = _tmp;
    if (space >= required) {
      return space;
    }
    const next = Math.imul(space, 2) | 0;
    if (next <= space) {
      return required;
    }
    _tmp = next;
    continue;
  }
}
function _M0MPC16buffer6Buffer4grow(self, required) {
  const new_capacity = _M0FPC16buffer24buffer__growth__capacity(self.data.length, self.len, required);
  const new_data = _M0MPC15array10FixedArray23make__and__blit_2einnerGyE(self.data, new_capacity, 0, self.len, 0, 0);
  self.data = new_data;
}
function _M0MPC16buffer6Buffer9to__bytes(self) {
  const _bind = self.data;
  const _bind$2 = self.len;
  const _bind$3 = _bind.length;
  if (0 > _bind$2 || _bind$2 > _bind$3) {
    $panic();
  }
  return _M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(_bind, 0, _bind$2));
}
function _M0MPC16buffer6Buffer14Buffer_2einner(size_hint) {
  const initial = size_hint < 1 ? 1 : size_hint;
  const data = $makebytes(initial, 0);
  return new _M0TPC16buffer6Buffer(data, 0);
}
function _M0MPC16buffer6Buffer11write__byte(self, value) {
  if (self.len >= self.data.length) {
    _M0MPC16buffer6Buffer4grow(self, self.len + 1 | 0);
  }
  self.data[self.len] = value;
  self.len = self.len + 1 | 0;
}
function _M0IPC28encoding6base649MalformedPC15debug5Debug8to__reprGRPC28encoding6base649MalformedE(_x_54) {
  const _Malformed = _x_54;
  const _$42$arg_55 = _Malformed._0;
  return _M0MPC15debug4Repr4ctor("Malformed", [{ _0: undefined, _1: _M0IPC16string10StringViewPC15debug5Debug8to__repr(_$42$arg_55) }]);
}
function _M0FPC28encoding6base6422encode__scalar_2einner(bytes, padding) {
  if (3 === 0) {
    $panic();
  }
  const full_groups = (bytes.end - bytes.start | 0) / 3 | 0;
  if (3 === 0) {
    $panic();
  }
  const remainder = (bytes.end - bytes.start | 0) % 3 | 0;
  let size_hint = Math.imul(full_groups, 4) | 0;
  if (remainder !== 0) {
    const _tmp = size_hint;
    let _tmp$2;
    if (padding === true) {
      _tmp$2 = 4;
    } else {
      _tmp$2 = remainder + 1 | 0;
    }
    size_hint = _tmp + _tmp$2 | 0;
  }
  const builder = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint);
  const _bind = bytes.buf;
  const _bind$2 = bytes.start;
  const _bind$3 = bytes.end;
  let _tmp = _bind$2;
  while (true) {
    const remaining_start = _tmp;
    if ((_bind$3 - remaining_start | 0) >= 3) {
      const _b0 = _bind[remaining_start];
      const _b1 = _bind[remaining_start + 1 | 0];
      const _b2 = _bind[remaining_start + 2 | 0];
      const _bind$4 = remaining_start + 3 | 0;
      const n = _b0 << 16 | _b1 << 8 | _b2;
      const _tmp$2 = $bytes_literal$1;
      const _tmp$3 = n >> 18 & 63;
      _M0IPB13StringBuilderPB6Logger11write__char(builder, _M0MPC14byte4Byte8to__char(_tmp$3 >>> 0 < _tmp$2.length ? _tmp$2[_tmp$3] : $oob()));
      const _tmp$4 = $bytes_literal$1;
      const _tmp$5 = n >> 12 & 63;
      _M0IPB13StringBuilderPB6Logger11write__char(builder, _M0MPC14byte4Byte8to__char(_tmp$5 >>> 0 < _tmp$4.length ? _tmp$4[_tmp$5] : $oob()));
      const _tmp$6 = $bytes_literal$1;
      const _tmp$7 = n >> 6 & 63;
      _M0IPB13StringBuilderPB6Logger11write__char(builder, _M0MPC14byte4Byte8to__char(_tmp$7 >>> 0 < _tmp$6.length ? _tmp$6[_tmp$7] : $oob()));
      const _tmp$8 = $bytes_literal$1;
      const _tmp$9 = n & 63;
      _M0IPB13StringBuilderPB6Logger11write__char(builder, _M0MPC14byte4Byte8to__char(_tmp$9 >>> 0 < _tmp$8.length ? _tmp$8[_tmp$9] : $oob()));
      _tmp = _bind$4;
      continue;
    } else {
      if ((_bind$3 - remaining_start | 0) === 2) {
        const _b0 = _bind[remaining_start];
        const _b1 = _bind[remaining_start + 1 | 0];
        const n = _b0 << 16 | _b1 << 8;
        const _tmp$2 = $bytes_literal$1;
        const _tmp$3 = n >> 18 & 63;
        _M0IPB13StringBuilderPB6Logger11write__char(builder, _M0MPC14byte4Byte8to__char(_tmp$3 >>> 0 < _tmp$2.length ? _tmp$2[_tmp$3] : $oob()));
        const _tmp$4 = $bytes_literal$1;
        const _tmp$5 = n >> 12 & 63;
        _M0IPB13StringBuilderPB6Logger11write__char(builder, _M0MPC14byte4Byte8to__char(_tmp$5 >>> 0 < _tmp$4.length ? _tmp$4[_tmp$5] : $oob()));
        const _tmp$6 = $bytes_literal$1;
        const _tmp$7 = n >> 6 & 63;
        _M0IPB13StringBuilderPB6Logger11write__char(builder, _M0MPC14byte4Byte8to__char(_tmp$7 >>> 0 < _tmp$6.length ? _tmp$6[_tmp$7] : $oob()));
        if (padding === true) {
          _M0IPB13StringBuilderPB6Logger11write__char(builder, 61);
        }
        break;
      } else {
        if ((_bind$3 - remaining_start | 0) === 1) {
          const _b0 = _bind[remaining_start];
          const n = _b0 << 16;
          const _tmp$2 = $bytes_literal$1;
          const _tmp$3 = n >> 18 & 63;
          _M0IPB13StringBuilderPB6Logger11write__char(builder, _M0MPC14byte4Byte8to__char(_tmp$3 >>> 0 < _tmp$2.length ? _tmp$2[_tmp$3] : $oob()));
          const _tmp$4 = $bytes_literal$1;
          const _tmp$5 = n >> 12 & 63;
          _M0IPB13StringBuilderPB6Logger11write__char(builder, _M0MPC14byte4Byte8to__char(_tmp$5 >>> 0 < _tmp$4.length ? _tmp$4[_tmp$5] : $oob()));
          if (padding === true) {
            _M0IPB13StringBuilderPB6Logger13write__string(builder, "==");
          }
          break;
        } else {
          break;
        }
      }
    }
  }
  return _M0MPB13StringBuilder10to__string(builder);
}
function _M0FPC28encoding6base6414encode_2einner(bytes, padding) {
  return _M0FPC28encoding6base6422encode__scalar_2einner(bytes, padding);
}
function _M0FPC28encoding6base6413base64__value(code_unit) {
  return code_unit >= 65 && code_unit <= 90 ? code_unit - 65 | 0 : code_unit >= 97 && code_unit <= 122 ? (code_unit - 97 | 0) + 26 | 0 : code_unit >= 48 && code_unit <= 57 ? (code_unit - 48 | 0) + 52 | 0 : code_unit === 43 ? 62 : code_unit === 47 ? 63 : code_unit === 32 ? -3 : code_unit === 10 ? -3 : code_unit === 13 ? -3 : code_unit === 9 ? -3 : code_unit === 61 ? -2 : -1;
}
function _M0FPC28encoding6base6414decode__scalar(text, ignore_whitespace) {
  if (4 === 0) {
    $panic();
  }
  const buffer = _M0MPC16buffer6Buffer14Buffer_2einner(Math.imul((text.end - text.start | 0) / 4 | 0, 3) | 0);
  const quartet = $make_array_len_and_init(4, 0);
  let count = 0;
  const _bind = text.end - text.start | 0;
  let _tmp = 0;
  _L: while (true) {
    const i = _tmp;
    if (i < _bind) {
      const code_unit = text.str.charCodeAt(text.start + i | 0);
      _L$2: {
        const _bind$2 = _M0FPC28encoding6base6413base64__value(code_unit);
        switch (_bind$2) {
          case -3: {
            if (ignore_whitespace) {
              break _L$2;
            } else {
              return new _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err(new _M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed(text));
            }
          }
          case -2: {
            if (count < 2) {
              return new _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err(new _M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed(text));
            } else {
              const _tmp$2 = count;
              if (_tmp$2 >>> 0 < quartet.length) {
                quartet[_tmp$2] = -2;
              } else {
                $oob();
              }
              count = count + 1 | 0;
              if (count === 4) {
                count = 0;
                if ((2 >>> 0 < quartet.length ? quartet[2] : $oob()) === -2) {
                  const b0 = ((0 >>> 0 < quartet.length ? quartet[0] : $oob()) << 2 | (1 >>> 0 < quartet.length ? quartet[1] : $oob()) >> 4) & 255;
                  _M0MPC16buffer6Buffer11write__byte(buffer, b0);
                  if (((1 >>> 0 < quartet.length ? quartet[1] : $oob()) & 15) === 0) {
                  } else {
                    return new _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err(new _M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed(text));
                  }
                } else {
                  const b0 = ((0 >>> 0 < quartet.length ? quartet[0] : $oob()) << 2 | (1 >>> 0 < quartet.length ? quartet[1] : $oob()) >> 4) & 255;
                  const b1 = (((1 >>> 0 < quartet.length ? quartet[1] : $oob()) & 15) << 4 | (2 >>> 0 < quartet.length ? quartet[2] : $oob()) >> 2) & 255;
                  if (((2 >>> 0 < quartet.length ? quartet[2] : $oob()) & 3) === 0) {
                    _M0MPC16buffer6Buffer11write__byte(buffer, b0);
                    _M0MPC16buffer6Buffer11write__byte(buffer, b1);
                  } else {
                    return new _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err(new _M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed(text));
                  }
                }
                if (ignore_whitespace) {
                  const _bind$3 = _M0MPC16string10StringView11code__units(text);
                  const _bind$4 = i + 1 | 0;
                  const _bind$5 = _bind$3.end - _bind$3.start | 0;
                  if (_bind$4 < 0 || _bind$4 > _bind$5) {
                    $panic();
                  }
                  const _bind$6 = new _M0TPB9ArrayViewGkE(_bind$3.buf, _bind$4 + _bind$3.start | 0, _bind$5 + _bind$3.start | 0);
                  const _bind$7 = _bind$6.end - _bind$6.start | 0;
                  let _tmp$3 = 0;
                  while (true) {
                    const _ = _tmp$3;
                    if (_ < _bind$7) {
                      const code_unit$2 = _bind$6.buf[_bind$6.start + _ | 0];
                      switch (code_unit$2) {
                        case 32: {
                          break;
                        }
                        case 10: {
                          break;
                        }
                        case 13: {
                          break;
                        }
                        case 9: {
                          break;
                        }
                        default: {
                          return new _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err(new _M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed(text));
                        }
                      }
                      _tmp$3 = _ + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                } else {
                  if ((i + 1 | 0) === (text.end - text.start | 0)) {
                  } else {
                    return new _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err(new _M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed(text));
                  }
                }
                break _L;
              }
            }
            break;
          }
          case -1: {
            return new _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err(new _M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed(text));
          }
          default: {
            const _tmp$2 = count;
            if (_tmp$2 >>> 0 < quartet.length) {
              quartet[_tmp$2] = _bind$2;
            } else {
              $oob();
            }
            count = count + 1 | 0;
            if (count === 4) {
              count = 0;
              if ((2 >>> 0 < quartet.length ? quartet[2] : $oob()) !== -2) {
                const b0 = ((0 >>> 0 < quartet.length ? quartet[0] : $oob()) << 2 | (1 >>> 0 < quartet.length ? quartet[1] : $oob()) >> 4) & 255;
                const b1 = (((1 >>> 0 < quartet.length ? quartet[1] : $oob()) & 15) << 4 | (2 >>> 0 < quartet.length ? quartet[2] : $oob()) >> 2) & 255;
                const b2 = (((2 >>> 0 < quartet.length ? quartet[2] : $oob()) & 3) << 6 | (3 >>> 0 < quartet.length ? quartet[3] : $oob())) & 255;
                _M0MPC16buffer6Buffer11write__byte(buffer, b0);
                _M0MPC16buffer6Buffer11write__byte(buffer, b1);
                _M0MPC16buffer6Buffer11write__byte(buffer, b2);
              } else {
                return new _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err(new _M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed(text));
              }
            }
          }
        }
        break _L$2;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$2 = count;
  switch (_bind$2) {
    case 1: {
      return new _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err(new _M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed(text));
    }
    case 2: {
      const b0 = ((0 >>> 0 < quartet.length ? quartet[0] : $oob()) << 2 | (1 >>> 0 < quartet.length ? quartet[1] : $oob()) >> 4) & 255;
      if (((1 >>> 0 < quartet.length ? quartet[1] : $oob()) & 15) === 0) {
        _M0MPC16buffer6Buffer11write__byte(buffer, b0);
      } else {
        return new _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err(new _M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed(text));
      }
      break;
    }
    case 3: {
      if ((2 >>> 0 < quartet.length ? quartet[2] : $oob()) !== -2) {
        const b0$2 = ((0 >>> 0 < quartet.length ? quartet[0] : $oob()) << 2 | (1 >>> 0 < quartet.length ? quartet[1] : $oob()) >> 4) & 255;
        const b1 = (((1 >>> 0 < quartet.length ? quartet[1] : $oob()) & 15) << 4 | (2 >>> 0 < quartet.length ? quartet[2] : $oob()) >> 2) & 255;
        if (((2 >>> 0 < quartet.length ? quartet[2] : $oob()) & 3) === 0) {
          _M0MPC16buffer6Buffer11write__byte(buffer, b0$2);
          _M0MPC16buffer6Buffer11write__byte(buffer, b1);
        } else {
          return new _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err(new _M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed(text));
        }
      } else {
        return new _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE3Err(new _M0DTPC15error5Error62moonbitlang_2fcore_2fencoding_2fbase64_2eMalformed_2eMalformed(text));
      }
      break;
    }
  }
  return new _M0DTPC16result6ResultGzRPC28encoding6base649MalformedE2Ok(_M0MPC16buffer6Buffer9to__bytes(buffer));
}
function _M0FPC28encoding6base6414decode_2einner(text, ignore_whitespace) {
  return _M0FPC28encoding6base6414decode__scalar(text, ignore_whitespace);
}
function _M0IP211localreview7mailbox12MailboxErrorPC15debug5Debug8to__repr(_x_137) {
  let _arg_138;
  _L: {
    const _Invalid = _x_137;
    const _$42$arg_138 = _Invalid._0;
    _arg_138 = _$42$arg_138;
    break _L;
  }
  return _M0MPC15debug4Repr4ctor("Invalid", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_138) }]);
}
function _M0IP211localreview7mailbox12MailboxErrorPC15debug5Debug8to__reprGRP211localreview7mailbox12MailboxErrorE(_x_137) {
  let _arg_138;
  _L: {
    const _Invalid = _x_137;
    const _$42$arg_138 = _Invalid._0;
    _arg_138 = _$42$arg_138;
    break _L;
  }
  return _M0MPC15debug4Repr4ctor("Invalid", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_138) }]);
}
function _M0FP211localreview7mailbox20parse__maildir__name(name) {
  let _tmp;
  if (name === "") {
    _tmp = true;
  } else {
    let _tmp$2;
    if (name === ".") {
      _tmp$2 = true;
    } else {
      let _tmp$3;
      if (name === "..") {
        _tmp$3 = true;
      } else {
        let _tmp$4;
        const _bind = "/";
        if (_M0MPC16string6String8contains(name, new _M0TPC16string10StringView(_bind, 0, _bind.length))) {
          _tmp$4 = true;
        } else {
          let _tmp$5;
          const _bind$2 = "\\";
          if (_M0MPC16string6String8contains(name, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
            _tmp$5 = true;
          } else {
            let _tmp$6;
            const _bind$3 = "\u0000";
            if (_M0MPC16string6String8contains(name, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
              _tmp$6 = true;
            } else {
              let _tmp$7;
              const _bind$4 = "\r";
              if (_M0MPC16string6String8contains(name, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
                _tmp$7 = true;
              } else {
                const _bind$5 = "\n";
                _tmp$7 = _M0MPC16string6String8contains(name, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length));
              }
              _tmp$6 = _tmp$7;
            }
            _tmp$5 = _tmp$6;
          }
          _tmp$4 = _tmp$5;
        }
        _tmp$3 = _tmp$4;
      }
      _tmp$2 = _tmp$3;
    }
    _tmp = _tmp$2;
  }
  if (_tmp) {
    return new _M0DTPC16result6ResultGRP211localreview7mailbox11MaildirNameRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("expected safe basename"));
  }
  const _bind = ":2,";
  const pos = _M0MPC16string6String4find(name, new _M0TPC16string10StringView(_bind, 0, _bind.length));
  let unique;
  let i;
  _L: {
    _L$2: {
      if (pos === undefined) {
        unique = name;
      } else {
        const _Some = pos;
        const _i = _Some;
        i = _i;
        break _L$2;
      }
      break _L;
    }
    unique = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(name, 0, i));
  }
  let flags;
  let i$2;
  _L$2: {
    _L$3: {
      if (pos === undefined) {
        flags = "";
      } else {
        const _Some = pos;
        const _i = _Some;
        i$2 = _i;
        break _L$3;
      }
      break _L$2;
    }
    flags = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(name, i$2 + 3 | 0, undefined));
  }
  let _tmp$2;
  if (unique === "") {
    _tmp$2 = true;
  } else {
    const _bind$2 = ":";
    _tmp$2 = _M0MPC16string6String8contains(unique, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
  }
  if (_tmp$2) {
    return new _M0DTPC16result6ResultGRP211localreview7mailbox11MaildirNameRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("invalid Maildir unique name or info version"));
  }
  const seen = [];
  const _it = _M0MPC16string6String4iter(flags);
  while (true) {
    let c;
    _L$3: {
      const _bind$2 = _M0MPB4Iter4nextGcE(_it);
      if (_bind$2 === -1) {
        break;
      } else {
        const _Some = _bind$2;
        const _c = _Some;
        c = _c;
        break _L$3;
      }
    }
    if (!(c >= 65 && c <= 90) && !(c >= 97 && c <= 122)) {
      return new _M0DTPC16result6ResultGRP211localreview7mailbox11MaildirNameRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("invalid Maildir flag"));
    }
    if (_M0MPC15array5Array8containsGcE(seen, c)) {
      return new _M0DTPC16result6ResultGRP211localreview7mailbox11MaildirNameRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("duplicate Maildir flag"));
    }
    _M0MPC15array5Array4pushGcE(seen, c);
    continue;
  }
  _M0MPC15array5Array4sortGcE(seen);
  const sorted = new _M0TPB8MutLocalGsE("");
  const _bind$2 = seen.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$2) {
      const c = seen[_];
      sorted.val = `${sorted.val}${_M0IPC14char4CharPB4Show10to__string(c)}`;
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP211localreview7mailbox11MaildirNameRP211localreview7mailbox12MailboxErrorE2Ok(new _M0TP211localreview7mailbox11MaildirName(unique, sorted.val, !(pos === undefined)));
}
function _M0MP211localreview7mailbox11MaildirName6encode(self) {
  if (!self.has_info && _M0IP016_24default__implPB2Eq10not__equalGsE(self.flags, "")) {
    return new _M0DTPC16result6ResultGsRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("flags require info suffix"));
  }
  const candidate = `${self.unique}${self.has_info ? `:2,${self.flags}` : ""}`;
  const _bind = _M0FP211localreview7mailbox20parse__maildir__name(candidate);
  let parsed;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    parsed = _ok._0;
  } else {
    return _bind;
  }
  if (_M0IP016_24default__implPB2Eq10not__equalGsE(parsed.unique, self.unique)) {
    return new _M0DTPC16result6ResultGsRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("unique name contains an info suffix"));
  }
  return new _M0DTPC16result6ResultGsRP211localreview7mailbox12MailboxErrorE2Ok(`${parsed.unique}${parsed.has_info ? `:2,${parsed.flags}` : ""}`);
}
function _M0MP211localreview7mailbox11MaildirName11with__flags(self, flags) {
  const candidate = new _M0TP211localreview7mailbox11MaildirName(self.unique, flags, true);
  const _bind = _M0MP211localreview7mailbox11MaildirName6encode(candidate);
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  return _M0FP211localreview7mailbox20parse__maildir__name(_tmp);
}
function _M0FP211localreview7mailbox15decode__charset(data, charset) {
  if (data.length > 1048576) {
    return new _M0DTPC16result6ResultGsRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("charset input limit"));
  }
  _L: {
    _L$2: {
      _L$3: {
        const _bind = _M0MPC16string6String9to__lower(_M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(charset, undefined)));
        switch (_bind) {
          case "utf-8": {
            break _L$3;
          }
          case "utf8": {
            break _L$3;
          }
          case "us-ascii": {
            break _L$2;
          }
          case "ascii": {
            break _L$2;
          }
          case "iso-8859-1": {
            break _L;
          }
          case "latin1": {
            break _L;
          }
          case "latin-1": {
            break _L;
          }
          default: {
            return new _M0DTPC16result6ResultGsRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("unsupported MIME charset"));
          }
        }
      }
      let _try_err;
      _L$4: {
        const _bind = _M0FPC28encoding4utf814decode_2einner(new _M0TPC15bytes9BytesView(data, 0, data.length), false);
        let _tmp;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          _tmp = _ok._0;
        } else {
          const _err = _bind;
          _try_err = _err._0;
          break _L$4;
        }
        return new _M0DTPC16result6ResultGsRP211localreview7mailbox12MailboxErrorE2Ok(_tmp);
      }
      return new _M0DTPC16result6ResultGsRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("invalid UTF-8 MIME text"));
    }
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    const _bind = data.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const b = data[_];
        if (b > 127) {
          return new _M0DTPC16result6ResultGsRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("non-ASCII MIME text"));
        }
        _M0IPB13StringBuilderPB6Logger11write__char(out, b);
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGsRP211localreview7mailbox12MailboxErrorE2Ok(_M0MPB13StringBuilder10to__string(out));
  }
  const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _bind = data.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const b = data[_];
      _M0IPB13StringBuilderPB6Logger11write__char(out, b);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGsRP211localreview7mailbox12MailboxErrorE2Ok(_M0MPB13StringBuilder10to__string(out));
}
function _M0MP211localreview7mailbox8MimePart4text(self) {
  const _tmp = self.media_type;
  const _bind = "text/";
  if (!_M0MPC16string6String11has__prefix(_tmp, new _M0TPC16string10StringView(_bind, 0, _bind.length))) {
    return new _M0DTPC16result6ResultGsRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("MIME part is not text"));
  }
  const _tmp$2 = self.body;
  let _tmp$3;
  const _bind$2 = _M0MPB3Map3getGssE(self.parameters, "charset");
  if (_bind$2 === undefined) {
    _tmp$3 = "us-ascii";
  } else {
    const _Some = _bind$2;
    const _c = _Some;
    _tmp$3 = _c;
  }
  return _M0FP211localreview7mailbox15decode__charset(_tmp$2, _tmp$3);
}
function _M0FP211localreview7mailbox9mime__hex(b) {
  const n = b;
  if (n >= 48 && n <= 57) {
    return new _M0DTPC16result6ResultGiRP211localreview7mailbox12MailboxErrorE2Ok(n - 48 | 0);
  } else {
    if (n >= 65 && n <= 70) {
      return new _M0DTPC16result6ResultGiRP211localreview7mailbox12MailboxErrorE2Ok(n - 55 | 0);
    } else {
      if (n >= 97 && n <= 102) {
        return new _M0DTPC16result6ResultGiRP211localreview7mailbox12MailboxErrorE2Ok(n - 87 | 0);
      } else {
        return new _M0DTPC16result6ResultGiRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("invalid quoted-printable escape"));
      }
    }
  }
}
function _M0FP211localreview7mailbox16decode__transfer(data, encoding) {
  if (data.length > 1048576) {
    return new _M0DTPC16result6ResultGzRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("MIME body limit"));
  }
  _L: {
    const _bind = _M0MPC16string6String9to__lower(_M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(encoding, undefined)));
    switch (_bind) {
      case "": {
        break _L;
      }
      case "7bit": {
        break _L;
      }
      case "8bit": {
        break _L;
      }
      case "binary": {
        break _L;
      }
      case "base64": {
        let text;
        let _try_err;
        _L$2: {
          _L$3: {
            const _bind$2 = _M0FPC28encoding4utf814decode_2einner(new _M0TPC15bytes9BytesView(data, 0, data.length), false);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              text = _ok._0;
            } else {
              const _err = _bind$2;
              _try_err = _err._0;
              break _L$3;
            }
            break _L$2;
          }
          return new _M0DTPC16result6ResultGzRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("invalid base64 text"));
        }
        let _try_err$2;
        _L$3: {
          const _bind$2 = _M0FPC28encoding6base6414decode_2einner(new _M0TPC16string10StringView(text, 0, text.length), true);
          let _tmp;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _tmp = _ok._0;
          } else {
            const _err = _bind$2;
            _try_err$2 = _err._0;
            break _L$3;
          }
          return new _M0DTPC16result6ResultGzRP211localreview7mailbox12MailboxErrorE2Ok(_tmp);
        }
        return new _M0DTPC16result6ResultGzRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("invalid MIME base64"));
      }
      case "quoted-printable": {
        const out = [];
        const i = new _M0TPB8MutLocalGiE(0);
        while (true) {
          if (i.val < data.length) {
            const _tmp = i.val;
            if ((_tmp >>> 0 < data.length ? data[_tmp] : $oob()) !== 61) {
              const _tmp$2 = i.val;
              _M0MPC15array5Array4pushGyE(out, _tmp$2 >>> 0 < data.length ? data[_tmp$2] : $oob());
              i.val = i.val + 1 | 0;
              continue;
            }
            let _tmp$2;
            if ((i.val + 1 | 0) < data.length) {
              const _tmp$3 = i.val + 1 | 0;
              _tmp$2 = _M0IPC14byte4BytePB2Eq5equal(_tmp$3 >>> 0 < data.length ? data[_tmp$3] : $oob(), 10);
            } else {
              _tmp$2 = false;
            }
            if (_tmp$2) {
              i.val = i.val + 2 | 0;
              continue;
            }
            let _tmp$3;
            if ((i.val + 2 | 0) < data.length) {
              let _tmp$4;
              const _tmp$5 = i.val + 1 | 0;
              if (_M0IPC14byte4BytePB2Eq5equal(_tmp$5 >>> 0 < data.length ? data[_tmp$5] : $oob(), 13)) {
                const _tmp$6 = i.val + 2 | 0;
                _tmp$4 = _M0IPC14byte4BytePB2Eq5equal(_tmp$6 >>> 0 < data.length ? data[_tmp$6] : $oob(), 10);
              } else {
                _tmp$4 = false;
              }
              _tmp$3 = _tmp$4;
            } else {
              _tmp$3 = false;
            }
            if (_tmp$3) {
              i.val = i.val + 3 | 0;
              continue;
            }
            if ((i.val + 2 | 0) >= data.length) {
              return new _M0DTPC16result6ResultGzRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("truncated quoted-printable escape"));
            }
            const _tmp$4 = i.val + 1 | 0;
            const _bind$2 = _M0FP211localreview7mailbox9mime__hex(_tmp$4 >>> 0 < data.length ? data[_tmp$4] : $oob());
            let _tmp$5;
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _tmp$5 = _ok._0;
            } else {
              return _bind$2;
            }
            const _tmp$6 = Math.imul(_tmp$5, 16) | 0;
            const _tmp$7 = i.val + 2 | 0;
            const _bind$3 = _M0FP211localreview7mailbox9mime__hex(_tmp$7 >>> 0 < data.length ? data[_tmp$7] : $oob());
            let _tmp$8;
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _tmp$8 = _ok._0;
            } else {
              return _bind$3;
            }
            _M0MPC15array5Array4pushGyE(out, (_tmp$6 + _tmp$8 | 0) & 255);
            i.val = i.val + 3 | 0;
            continue;
          } else {
            break;
          }
        }
        return new _M0DTPC16result6ResultGzRP211localreview7mailbox12MailboxErrorE2Ok(_M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(out, 0, out.length)));
      }
      default: {
        return new _M0DTPC16result6ResultGzRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("unsupported content transfer encoding"));
      }
    }
  }
  return new _M0DTPC16result6ResultGzRP211localreview7mailbox12MailboxErrorE2Ok(data);
}
function _M0FP211localreview7mailbox14decode__header(value) {
  if (value.length > 65536) {
    return new _M0DTPC16result6ResultGsRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("header decoding limit"));
  }
  const chars = _M0MPC16string6String9to__array(value);
  const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const whitespace = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const at = new _M0TPB8MutLocalGiE(0);
  const previous_encoded = new _M0TPB8MutLocalGbE(false);
  while (true) {
    if (at.val < chars.length) {
      if (_M0MPC15array5Array2atGcE(chars, at.val) === 32 || (_M0MPC15array5Array2atGcE(chars, at.val) === 9 || (_M0MPC15array5Array2atGcE(chars, at.val) === 13 || _M0MPC15array5Array2atGcE(chars, at.val) === 10))) {
        _M0IPB13StringBuilderPB6Logger11write__char(whitespace, _M0MPC15array5Array2atGcE(chars, at.val));
        at.val = at.val + 1 | 0;
        continue;
      }
      if ((at.val + 1 | 0) < chars.length && (_M0MPC15array5Array2atGcE(chars, at.val) === 61 && _M0MPC15array5Array2atGcE(chars, at.val + 1 | 0) === 63)) {
        const start = at.val;
        const end = new _M0TPB8MutLocalGiE(at.val + 2 | 0);
        const separators = new _M0TPB8MutLocalGiE(0);
        while (true) {
          if (end.val < chars.length && (separators.val < 2 && (end.val - start | 0) < 75)) {
            if (_M0MPC15array5Array2atGcE(chars, end.val) === 63) {
              separators.val = separators.val + 1 | 0;
            }
            end.val = end.val + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        while (true) {
          if ((end.val + 1 | 0) < chars.length && (!(_M0MPC15array5Array2atGcE(chars, end.val) === 63 && _M0MPC15array5Array2atGcE(chars, end.val + 1 | 0) === 61) && (end.val - start | 0) < 75)) {
            end.val = end.val + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if ((end.val + 1 | 0) >= chars.length || (((end.val - start | 0) + 2 | 0) > 75 || (_M0MPC15array5Array2atGcE(chars, end.val) !== 63 || _M0MPC15array5Array2atGcE(chars, end.val + 1 | 0) !== 61))) {
          return new _M0DTPC16result6ResultGsRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("unterminated or oversized encoded word"));
        }
        const inner = _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(chars, at.val + 2 | 0, end.val));
        const _bind = "?";
        const pieces = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPC16string6String5split(inner, new _M0TPC16string10StringView(_bind, 0, _bind.length)), (x) => _M0MPC16string10StringView9to__owned(x)));
        if (pieces.length !== 3 || (_M0MPC16string6String9is__empty(_M0MPC15array5Array2atGRP211localreview7mailbox7MessageE(pieces, 0)) || (_M0MPC16string6String9is__empty(_M0MPC15array5Array2atGRP211localreview7mailbox7MessageE(pieces, 2)) || _M0MPB4Iter3anyGcE(_M0MPC15array5Array4iterGcE(_M0MPC16string6String9to__array(inner)), (c) => c <= 32 || c > 126)))) {
          return new _M0DTPC16result6ResultGsRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("invalid encoded word"));
        }
        const _bind$2 = _M0MPC16string6String9to__lower(_M0MPC15array5Array2atGRP211localreview7mailbox7MessageE(pieces, 1));
        let bytes;
        switch (_bind$2) {
          case "b": {
            let _try_err;
            _L: {
              _L$2: {
                const _bind$3 = _M0MPC15array5Array2atGRP211localreview7mailbox7MessageE(pieces, 2);
                const _bind$4 = _M0FPC28encoding6base6414decode_2einner(new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length), false);
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  bytes = _ok._0;
                } else {
                  const _err = _bind$4;
                  _try_err = _err._0;
                  break _L$2;
                }
                break _L;
              }
              return new _M0DTPC16result6ResultGsRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("invalid header base64"));
            }
            break;
          }
          case "q": {
            const _tmp = _M0MPC15array5Array2atGRP211localreview7mailbox7MessageE(pieces, 2);
            const _bind$3 = "_";
            const _tmp$2 = new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length);
            const _bind$4 = " ";
            const _bind$5 = _M0MPC16string6String12replace__all(_tmp, _tmp$2, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length));
            const _bind$6 = _M0FP211localreview7mailbox16decode__transfer(_M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), false), "quoted-printable");
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              bytes = _ok._0;
            } else {
              return _bind$6;
            }
            break;
          }
          default: {
            return new _M0DTPC16result6ResultGsRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("unsupported encoded word method"));
          }
        }
        if (!previous_encoded.val) {
          _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(whitespace));
        }
        _M0MPB13StringBuilder5reset(whitespace);
        const _bind$7 = _M0FP211localreview7mailbox15decode__charset(bytes, _M0MPC15array5Array2atGRP211localreview7mailbox7MessageE(pieces, 0));
        let _tmp$3;
        if (_bind$7.$tag === 1) {
          const _ok = _bind$7;
          _tmp$3 = _ok._0;
        } else {
          return _bind$7;
        }
        _M0IPB13StringBuilderPB6Logger13write__string(out, _tmp$3);
        previous_encoded.val = true;
        at.val = end.val + 2 | 0;
      } else {
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(whitespace));
        _M0MPB13StringBuilder5reset(whitespace);
        _M0IPB13StringBuilderPB6Logger11write__char(out, _M0MPC15array5Array2atGcE(chars, at.val));
        at.val = at.val + 1 | 0;
        previous_encoded.val = false;
      }
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(whitespace));
  return new _M0DTPC16result6ResultGsRP211localreview7mailbox12MailboxErrorE2Ok(_M0MPB13StringBuilder10to__string(out));
}
function _M0FP211localreview7mailbox10mime__type(text) {
  const pieces = [];
  const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const quoted = new _M0TPB8MutLocalGbE(false);
  const escaped = new _M0TPB8MutLocalGbE(false);
  const _it = _M0MPC16string6String4iter(text);
  while (true) {
    let c;
    _L: {
      const _bind = _M0MPB4Iter4nextGcE(_it);
      if (_bind === -1) {
        break;
      } else {
        const _Some = _bind;
        const _c = _Some;
        c = _c;
        break _L;
      }
    }
    if (escaped.val) {
      _M0IPB13StringBuilderPB6Logger11write__char(out, c);
      escaped.val = false;
      continue;
    }
    if (quoted.val && c === 92) {
      _M0IPB13StringBuilderPB6Logger11write__char(out, c);
      escaped.val = true;
      continue;
    }
    if (c === 34) {
      quoted.val = !quoted.val;
      _M0IPB13StringBuilderPB6Logger11write__char(out, c);
      continue;
    }
    if (c === 59 && !quoted.val) {
      _M0MPC15array5Array4pushGsE(pieces, _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(_M0MPB13StringBuilder10to__string(out), undefined)));
      _M0MPB13StringBuilder5reset(out);
    } else {
      _M0IPB13StringBuilderPB6Logger11write__char(out, c);
    }
    continue;
  }
  if (quoted.val || escaped.val) {
    return new _M0DTPC16result6ResultGUsRPB3MapGssEERP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("unterminated MIME parameter"));
  }
  _M0MPC15array5Array4pushGsE(pieces, _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(_M0MPB13StringBuilder10to__string(out), undefined)));
  const kind = _M0MPC16string6String9to__lower(_M0MPC15array5Array2atGRP211localreview7mailbox7MessageE(pieces, 0));
  let _tmp;
  const _bind = "/";
  if (_M0MPB4Iter5countGRPC16string10StringViewE(_M0MPC16string6String5split(kind, new _M0TPC16string10StringView(_bind, 0, _bind.length))) !== 2) {
    _tmp = true;
  } else {
    let _tmp$2;
    const _bind$2 = "/";
    if (_M0MPC16string6String11has__prefix(kind, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
      _tmp$2 = true;
    } else {
      let _tmp$3;
      const _bind$3 = "/";
      if (_M0MPC16string6String11has__suffix(kind, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
        _tmp$3 = true;
      } else {
        const _bind$4 = " ";
        _tmp$3 = _M0MPC16string6String8contains(kind, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length));
      }
      _tmp$2 = _tmp$3;
    }
    _tmp = _tmp$2;
  }
  if (_tmp) {
    return new _M0DTPC16result6ResultGUsRPB3MapGssEERP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("invalid MIME media type"));
  }
  const _bind$2 = [];
  const params = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$2, 0, 0), undefined);
  const _bind$3 = 1;
  const _bind$4 = pieces.length;
  let _tmp$2 = _bind$3;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      let pos;
      const _tmp$3 = _M0MPC15array5Array2atGRP211localreview7mailbox7MessageE(pieces, i);
      const _bind$5 = "=";
      const _bind$6 = _M0MPC16string6String4find(_tmp$3, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length));
      if (_bind$6 === undefined) {
        return new _M0DTPC16result6ResultGUsRPB3MapGssEERP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("MIME parameter requires equals"));
      } else {
        const _Some = _bind$6;
        const _p = _Some;
        pos = _p;
      }
      const name = _M0MPC16string6String9to__lower(_M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(_M0MPC16string6String11sub_2einner(_M0MPC15array5Array2atGRP211localreview7mailbox7MessageE(pieces, i), 0, pos), undefined)));
      if (_M0MPC16string6String9is__empty(name) || _M0MPB3Map8containsGssE(params, name)) {
        return new _M0DTPC16result6ResultGUsRPB3MapGssEERP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("empty or duplicate MIME parameter"));
      }
      const raw = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(_M0MPC16string6String11sub_2einner(_M0MPC15array5Array2atGRP211localreview7mailbox7MessageE(pieces, i), pos + 1 | 0, undefined), undefined));
      let value;
      const _bind$7 = "\"";
      if (_M0MPC16string6String11has__prefix(raw, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length))) {
        let _tmp$4;
        if (raw.length < 2) {
          _tmp$4 = true;
        } else {
          const _bind$8 = "\"";
          _tmp$4 = !_M0MPC16string6String11has__suffix(raw, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length));
        }
        if (_tmp$4) {
          return new _M0DTPC16result6ResultGUsRPB3MapGssEERP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("invalid quoted MIME parameter"));
        }
        const result = _M0MPB13StringBuilder21StringBuilder_2einner(0);
        const escape = new _M0TPB8MutLocalGbE(false);
        const _it$2 = _M0MPC16string10StringView4iter(_M0MPC16string6String11sub_2einner(raw, 1, raw.length - 1 | 0));
        while (true) {
          let c;
          _L: {
            const _bind$8 = _M0MPB4Iter4nextGcE(_it$2);
            if (_bind$8 === -1) {
              break;
            } else {
              const _Some = _bind$8;
              const _c = _Some;
              c = _c;
              break _L;
            }
          }
          if (escape.val) {
            _M0IPB13StringBuilderPB6Logger11write__char(result, c);
            escape.val = false;
          } else {
            if (c === 92) {
              escape.val = true;
            } else {
              if (c === 34) {
                return new _M0DTPC16result6ResultGUsRPB3MapGssEERP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("invalid quote in MIME parameter"));
              } else {
                _M0IPB13StringBuilderPB6Logger11write__char(result, c);
              }
            }
          }
          continue;
        }
        if (escape.val) {
          return new _M0DTPC16result6ResultGUsRPB3MapGssEERP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("trailing MIME parameter escape"));
        }
        value = _M0MPB13StringBuilder10to__string(result);
      } else {
        value = raw;
      }
      _M0MPB3Map3setGssE(params, name, value);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGUsRPB3MapGssEERP211localreview7mailbox12MailboxErrorE2Ok({ _0: kind, _1: params });
}
function _M0FP211localreview7mailbox12mime__header(fields, key, fallback) {
  const values = _M0MPC15array5Array6filterGRP211localreview7mailbox6HeaderE(fields, (h) => _M0MPC16string6String9to__lower(h.name) === key);
  if (values.length > 1) {
    return new _M0DTPC16result6ResultGsRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("duplicate MIME control header"));
  }
  return new _M0DTPC16result6ResultGsRP211localreview7mailbox12MailboxErrorE2Ok(_M0MPC15array5Array9is__emptyGRP211localreview7mailbox6HeaderE(values) ? fallback : _M0MPC15array5Array2atGRP211localreview7mailbox7MessageE(values, 0).value);
}
function _M0FP211localreview7mailbox19normalize__newlines(s) {
  const _bind = "\r\n";
  const _tmp = new _M0TPC16string10StringView(_bind, 0, _bind.length);
  const _bind$2 = "\n";
  const out = _M0MPC16string6String12replace__all(s, _tmp, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
  let _tmp$2;
  const _bind$3 = "\r";
  if (_M0MPC16string6String8contains(out, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
    _tmp$2 = true;
  } else {
    const _bind$4 = "\u0000";
    _tmp$2 = _M0MPC16string6String8contains(out, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length));
  }
  if (_tmp$2) {
    return new _M0DTPC16result6ResultGsRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("bare CR or NUL unsupported in text mailbox"));
  }
  return new _M0DTPC16result6ResultGsRP211localreview7mailbox12MailboxErrorE2Ok(out);
}
function _M0FP211localreview7mailbox7headers(content) {
  const out = [];
  const _bind = _M0FP211localreview7mailbox19normalize__newlines(content);
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  const _tmp$2 = _tmp;
  const _bind$2 = "\n";
  const _it = _M0MPC16string6String5split(_tmp$2, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
  while (true) {
    let view;
    _L: {
      const _bind$3 = _M0MPB4Iter4nextGRPC16string10StringViewE(_it);
      if (_bind$3 === undefined) {
        break;
      } else {
        const _Some = _bind$3;
        const _view = _Some;
        view = _view;
        break _L;
      }
    }
    const line = _M0MPC16string10StringView9to__owned(view);
    if (line === "") {
      break;
    }
    let _tmp$3;
    const _bind$3 = " ";
    if (_M0MPC16string6String11has__prefix(line, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
      _tmp$3 = true;
    } else {
      const _bind$4 = "\t";
      _tmp$3 = _M0MPC16string6String11has__prefix(line, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length));
    }
    if (_tmp$3) {
      if (_M0MPC15array5Array9is__emptyGRP211localreview7mailbox6HeaderE(out)) {
        return new _M0DTPC16result6ResultGRPB5ArrayGRP211localreview7mailbox6HeaderERP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("fold without header"));
      }
      const old = _M0MPC15array5Array2atGRP211localreview7mailbox7MessageE(out, out.length - 1 | 0);
      _M0MPC15array5Array3setGRP211localreview7mailbox6HeaderE(out, out.length - 1 | 0, new _M0TP211localreview7mailbox6Header(old.name, `${old.value} ${_M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(line, undefined))}`));
      continue;
    }
    let pos;
    const _bind$4 = ":";
    const _bind$5 = _M0MPC16string6String4find(line, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length));
    if (_bind$5 === undefined) {
      return new _M0DTPC16result6ResultGRPB5ArrayGRP211localreview7mailbox6HeaderERP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("header missing colon"));
    } else {
      const _Some = _bind$5;
      const _p = _Some;
      pos = _p;
    }
    const name = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(line, 0, pos));
    if (name === "") {
      return new _M0DTPC16result6ResultGRPB5ArrayGRP211localreview7mailbox6HeaderERP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("empty header name"));
    }
    const _it$2 = _M0MPC16string6String4iter(name);
    while (true) {
      let c;
      _L$2: {
        const _bind$6 = _M0MPB4Iter4nextGcE(_it$2);
        if (_bind$6 === -1) {
          break;
        } else {
          const _Some = _bind$6;
          const _c = _Some;
          c = _c;
          break _L$2;
        }
      }
      if (c <= 32 || (c >= 127 || c === 58)) {
        return new _M0DTPC16result6ResultGRPB5ArrayGRP211localreview7mailbox6HeaderERP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("invalid header name"));
      }
      continue;
    }
    _M0MPC15array5Array4pushGsE(out, new _M0TP211localreview7mailbox6Header(name, _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(_M0MPC16string6String11sub_2einner(line, pos + 1 | 0, undefined), undefined))));
    continue;
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP211localreview7mailbox6HeaderERP211localreview7mailbox12MailboxErrorE2Ok(out);
}
function _M0FP211localreview7mailbox10mime__part(data, fallback, depth, budget) {
  if (depth > 32 || budget.remaining <= 0) {
    return new _M0DTPC16result6ResultGRP211localreview7mailbox8MimePartRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("MIME structure limit"));
  }
  budget.remaining = budget.remaining - 1 | 0;
  const head_end = new _M0TPB8MutLocalGiE(data.length);
  const body_start = new _M0TPB8MutLocalGiE(data.length);
  if (data.length > 0 && _M0IPC14byte4BytePB2Eq5equal(0 >>> 0 < data.length ? data[0] : $oob(), 10)) {
    head_end.val = 0;
    body_start.val = 1;
  } else {
    if (data.length > 1 && (_M0IPC14byte4BytePB2Eq5equal(0 >>> 0 < data.length ? data[0] : $oob(), 13) && _M0IPC14byte4BytePB2Eq5equal(1 >>> 0 < data.length ? data[1] : $oob(), 10))) {
      head_end.val = 0;
      body_start.val = 2;
    } else {
      const _bind = 0;
      const _bind$2 = data.length;
      let _tmp = _bind;
      while (true) {
        const i = _tmp;
        if (i < _bind$2) {
          let _tmp$2;
          if ((i + 3 | 0) < data.length) {
            let _tmp$3;
            if (_M0IPC14byte4BytePB2Eq5equal(i >>> 0 < data.length ? data[i] : $oob(), 13)) {
              let _tmp$4;
              const _tmp$5 = i + 1 | 0;
              if (_M0IPC14byte4BytePB2Eq5equal(_tmp$5 >>> 0 < data.length ? data[_tmp$5] : $oob(), 10)) {
                let _tmp$6;
                const _tmp$7 = i + 2 | 0;
                if (_M0IPC14byte4BytePB2Eq5equal(_tmp$7 >>> 0 < data.length ? data[_tmp$7] : $oob(), 13)) {
                  const _tmp$8 = i + 3 | 0;
                  _tmp$6 = _M0IPC14byte4BytePB2Eq5equal(_tmp$8 >>> 0 < data.length ? data[_tmp$8] : $oob(), 10);
                } else {
                  _tmp$6 = false;
                }
                _tmp$4 = _tmp$6;
              } else {
                _tmp$4 = false;
              }
              _tmp$3 = _tmp$4;
            } else {
              _tmp$3 = false;
            }
            _tmp$2 = _tmp$3;
          } else {
            _tmp$2 = false;
          }
          if (_tmp$2) {
            head_end.val = i;
            body_start.val = i + 4 | 0;
            break;
          }
          let _tmp$3;
          if ((i + 1 | 0) < data.length) {
            let _tmp$4;
            if (_M0IPC14byte4BytePB2Eq5equal(i >>> 0 < data.length ? data[i] : $oob(), 10)) {
              const _tmp$5 = i + 1 | 0;
              _tmp$4 = _M0IPC14byte4BytePB2Eq5equal(_tmp$5 >>> 0 < data.length ? data[_tmp$5] : $oob(), 10);
            } else {
              _tmp$4 = false;
            }
            _tmp$3 = _tmp$4;
          } else {
            _tmp$3 = false;
          }
          if (_tmp$3) {
            head_end.val = i;
            body_start.val = i + 2 | 0;
            break;
          }
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
  }
  let header_text;
  let _try_err;
  _L: {
    _L$2: {
      const _bind = _M0FPC28encoding4utf814decode_2einner(_M0MPC15bytes5Bytes12view_2einner(data, 0, head_end.val), false);
      if (_bind.$tag === 1) {
        const _ok = _bind;
        header_text = _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L$2;
      }
      break _L;
    }
    return new _M0DTPC16result6ResultGRP211localreview7mailbox8MimePartRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("MIME headers must be UTF-8 or ASCII"));
  }
  const _bind = _M0FP211localreview7mailbox7headers(header_text);
  let fields;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    fields = _ok._0;
  } else {
    return _bind;
  }
  let kind;
  let params;
  _L$2: {
    const _bind$2 = _M0FP211localreview7mailbox12mime__header(fields, "content-type", fallback);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    const _bind$3 = _M0FP211localreview7mailbox10mime__type(_tmp);
    let _bind$4;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _bind$4 = _ok._0;
    } else {
      return _bind$3;
    }
    const _kind = _bind$4._0;
    const _params = _bind$4._1;
    kind = _kind;
    params = _params;
    break _L$2;
  }
  const _bind$2 = _M0FP211localreview7mailbox12mime__header(fields, "content-transfer-encoding", "7bit");
  let _tmp;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp = _ok._0;
  } else {
    return _bind$2;
  }
  const encoding = _M0MPC16string6String9to__lower(_tmp);
  const raw = _M0MPC15bytes9BytesView9to__owned(_M0MPC15bytes5Bytes12view_2einner(data, body_start.val, undefined));
  const children = [];
  let body;
  const _bind$3 = "multipart/";
  if (_M0MPC16string6String11has__prefix(kind, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
    if (!_M0MPC15array5Array8containsGsE(["7bit", "8bit", "binary"], encoding)) {
      return new _M0DTPC16result6ResultGRP211localreview7mailbox8MimePartRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("encoded multipart container"));
    }
    let boundary;
    const _bind$4 = _M0MPB3Map3getGssE(params, "boundary");
    if (_bind$4 === undefined) {
      return new _M0DTPC16result6ResultGRP211localreview7mailbox8MimePartRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("missing multipart boundary"));
    } else {
      const _Some = _bind$4;
      const _b = _Some;
      boundary = _b;
    }
    let _tmp$2;
    if (_M0MPC16string6String9is__empty(boundary)) {
      _tmp$2 = true;
    } else {
      let _tmp$3;
      const _bind$5 = " ";
      if (_M0MPC16string6String11has__suffix(boundary, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length))) {
        _tmp$3 = true;
      } else {
        _tmp$3 = boundary.length > 70 || _M0MPB4Iter3anyGcE(_M0MPC15array5Array4iterGcE(_M0MPC16string6String9to__array(boundary)), (c) => c < 32 || c > 126);
      }
      _tmp$2 = _tmp$3;
    }
    if (_tmp$2) {
      return new _M0DTPC16result6ResultGRP211localreview7mailbox8MimePartRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("invalid multipart boundary"));
    }
    const _bind$5 = `--${boundary}`;
    const marker = _M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length), false);
    const at = new _M0TPB8MutLocalGiE(0);
    const start = new _M0TPB8MutLocalGOiE(undefined);
    const closed = new _M0TPB8MutLocalGbE(false);
    while (true) {
      if (at.val < raw.length) {
        const line_start = at.val;
        while (true) {
          let _tmp$3;
          if (at.val < raw.length) {
            const _tmp$4 = at.val;
            _tmp$3 = (_tmp$4 >>> 0 < raw.length ? raw[_tmp$4] : $oob()) !== 10;
          } else {
            _tmp$3 = false;
          }
          if (_tmp$3) {
            at.val = at.val + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const end = new _M0TPB8MutLocalGiE(at.val);
        let _tmp$3;
        if (end.val > line_start) {
          const _tmp$4 = end.val - 1 | 0;
          _tmp$3 = _M0IPC14byte4BytePB2Eq5equal(_tmp$4 >>> 0 < raw.length ? raw[_tmp$4] : $oob(), 13);
        } else {
          _tmp$3 = false;
        }
        if (_tmp$3) {
          end.val = end.val - 1 | 0;
        }
        while (true) {
          let _tmp$4;
          if (end.val > line_start) {
            let _tmp$5;
            const _tmp$6 = end.val - 1 | 0;
            if (_M0IPC14byte4BytePB2Eq5equal(_tmp$6 >>> 0 < raw.length ? raw[_tmp$6] : $oob(), 32)) {
              _tmp$5 = true;
            } else {
              const _tmp$7 = end.val - 1 | 0;
              _tmp$5 = _M0IPC14byte4BytePB2Eq5equal(_tmp$7 >>> 0 < raw.length ? raw[_tmp$7] : $oob(), 9);
            }
            _tmp$4 = _tmp$5;
          } else {
            _tmp$4 = false;
          }
          if (_tmp$4) {
            end.val = end.val - 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (at.val < raw.length) {
          at.val = at.val + 1 | 0;
        }
        const line = _M0MPC15bytes9BytesView9to__owned(_M0MPC15bytes5Bytes12view_2einner(raw, line_start, end.val));
        let closing;
        if (line.length === (marker.length + 2 | 0)) {
          let _tmp$4;
          if (_M0IPC15bytes9BytesViewPB2Eq5equal(_M0MPC15bytes5Bytes12view_2einner(line, 0, marker.length), new _M0TPC15bytes9BytesView(marker, 0, marker.length))) {
            let _tmp$5;
            const _tmp$6 = line.length - 2 | 0;
            if (_M0IPC14byte4BytePB2Eq5equal(_tmp$6 >>> 0 < line.length ? line[_tmp$6] : $oob(), 45)) {
              const _tmp$7 = line.length - 1 | 0;
              _tmp$5 = _M0IPC14byte4BytePB2Eq5equal(_tmp$7 >>> 0 < line.length ? line[_tmp$7] : $oob(), 45);
            } else {
              _tmp$5 = false;
            }
            _tmp$4 = _tmp$5;
          } else {
            _tmp$4 = false;
          }
          closing = _tmp$4;
        } else {
          closing = false;
        }
        if ($bytes_equal(line, marker) || closing) {
          let begin;
          _L$3: {
            _L$4: {
              const _bind$6 = start.val;
              if (_bind$6 === undefined) {
              } else {
                const _Some = _bind$6;
                const _begin = _Some;
                begin = _begin;
                break _L$4;
              }
              break _L$3;
            }
            const part_end = new _M0TPB8MutLocalGiE(line_start);
            let _tmp$4;
            if (part_end.val > begin) {
              const _tmp$5 = part_end.val - 1 | 0;
              _tmp$4 = _M0IPC14byte4BytePB2Eq5equal(_tmp$5 >>> 0 < raw.length ? raw[_tmp$5] : $oob(), 10);
            } else {
              _tmp$4 = false;
            }
            if (_tmp$4) {
              part_end.val = part_end.val - 1 | 0;
              let _tmp$5;
              if (part_end.val > begin) {
                const _tmp$6 = part_end.val - 1 | 0;
                _tmp$5 = _M0IPC14byte4BytePB2Eq5equal(_tmp$6 >>> 0 < raw.length ? raw[_tmp$6] : $oob(), 13);
              } else {
                _tmp$5 = false;
              }
              if (_tmp$5) {
                part_end.val = part_end.val - 1 | 0;
              }
            }
            const _bind$6 = _M0FP211localreview7mailbox10mime__part(_M0MPC15bytes9BytesView9to__owned(_M0MPC15bytes5Bytes12view_2einner(raw, begin, part_end.val)), kind === "multipart/digest" ? "message/rfc822" : "text/plain", depth + 1 | 0, budget);
            let _tmp$5;
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              _tmp$5 = _ok._0;
            } else {
              return _bind$6;
            }
            _M0MPC15array5Array4pushGsE(children, _tmp$5);
          }
          if (closing) {
            closed.val = true;
            break;
          }
          start.val = at.val;
        }
        continue;
      } else {
        break;
      }
    }
    if (!closed.val || _M0MPC15array5Array9is__emptyGRP211localreview7mailbox6HeaderE(children)) {
      return new _M0DTPC16result6ResultGRP211localreview7mailbox8MimePartRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("unterminated or empty multipart"));
    }
    body = $bytes_literal$0;
  } else {
    const _bind$4 = _M0FP211localreview7mailbox16decode__transfer(raw, encoding);
    let decoded;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      decoded = _ok._0;
    } else {
      return _bind$4;
    }
    if (kind === "message/rfc822") {
      const _bind$5 = _M0FP211localreview7mailbox10mime__part(decoded, "text/plain", depth + 1 | 0, budget);
      let _tmp$2;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _tmp$2 = _ok._0;
      } else {
        return _bind$5;
      }
      _M0MPC15array5Array4pushGsE(children, _tmp$2);
    }
    body = decoded;
  }
  return new _M0DTPC16result6ResultGRP211localreview7mailbox8MimePartRP211localreview7mailbox12MailboxErrorE2Ok(new _M0TP211localreview7mailbox8MimePart(fields, kind, params, body, children));
}
function _M0FP211localreview7mailbox11parse__mime(data) {
  if (data.length > 1048576) {
    return new _M0DTPC16result6ResultGRP211localreview7mailbox8MimePartRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("MIME message limit"));
  }
  return _M0FP211localreview7mailbox10mime__part(data, "text/plain", 0, new _M0TP211localreview7mailbox10MimeBudget(512));
}
function _M0FP211localreview7mailbox10from__line(s) {
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    let _tmp;
    if (i.val < s.length) {
      const _tmp$2 = i.val;
      _tmp = (_tmp$2 >>> 0 < s.length ? s.charCodeAt(_tmp$2) : $oob()) === 62;
    } else {
      _tmp = false;
    }
    if (_tmp) {
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp = _M0MPC16string6String11sub_2einner(s, i.val, undefined);
  const _bind = "From ";
  return _M0MPC16string10StringView11has__prefix(_tmp, new _M0TPC16string10StringView(_bind, 0, _bind.length));
}
function _M0FP211localreview7mailbox13parse__mboxrd(source) {
  if (source.length > 16777216) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP211localreview7mailbox7MessageERP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("mailbox exceeds 16 Mi UTF-16 units"));
  }
  const _bind = _M0FP211localreview7mailbox19normalize__newlines(source);
  let text;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    text = _ok._0;
  } else {
    return _bind;
  }
  if (text === "") {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP211localreview7mailbox7MessageERP211localreview7mailbox12MailboxErrorE2Ok([]);
  }
  const _bind$2 = "From ";
  if (!_M0MPC16string6String11has__prefix(text, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP211localreview7mailbox7MessageERP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("mbox must start with envelope line"));
  }
  const out = [];
  const envelope = new _M0TPB8MutLocalGsE("");
  const content = new _M0TPB8MutLocalGsE("");
  const _bind$3 = "\n";
  const lines = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(text, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length)));
  const _bind$4 = 0;
  const _bind$5 = lines.length;
  let _tmp = _bind$4;
  while (true) {
    const i = _tmp;
    if (i < _bind$5) {
      const line = _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRP211localreview7mailbox7MessageE(lines, i));
      if (i === (lines.length - 1 | 0) && line === "") {
        break;
      }
      const _bind$6 = "From ";
      if (_M0MPC16string6String11has__prefix(line, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))) {
        if (_M0IP016_24default__implPB2Eq10not__equalGsE(envelope.val, "")) {
          const _tmp$2 = content.val;
          const _bind$7 = "\n\n";
          if (_M0MPC16string6String11has__suffix(_tmp$2, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length))) {
            content.val = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(content.val, 0, content.val.length - 1 | 0));
          }
          _M0MPC15array5Array4pushGsE(out, new _M0TP211localreview7mailbox7Message(envelope.val, content.val));
        }
        envelope.val = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(line, 5, undefined));
        const _tmp$2 = _M0MPC16string6String4trim(envelope.val, undefined);
        const _bind$7 = "";
        if (_M0IPC16string10StringViewPB2Eq5equal(_tmp$2, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length))) {
          return new _M0DTPC16result6ResultGRPB5ArrayGRP211localreview7mailbox7MessageERP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("empty envelope"));
        }
        content.val = "";
      } else {
        let unquoted;
        let _tmp$2;
        const _bind$7 = ">";
        if (_M0MPC16string6String11has__prefix(line, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length))) {
          _tmp$2 = _M0FP211localreview7mailbox10from__line(line);
        } else {
          _tmp$2 = false;
        }
        if (_tmp$2) {
          unquoted = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(line, 1, undefined));
        } else {
          unquoted = line;
        }
        content.val = `${content.val}${unquoted}\n`;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$2 = content.val;
  const _bind$6 = "\n\n";
  if (_M0MPC16string6String11has__suffix(_tmp$2, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))) {
    content.val = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(content.val, 0, content.val.length - 1 | 0));
  }
  _M0MPC15array5Array4pushGsE(out, new _M0TP211localreview7mailbox7Message(envelope.val, content.val));
  return new _M0DTPC16result6ResultGRPB5ArrayGRP211localreview7mailbox7MessageERP211localreview7mailbox12MailboxErrorE2Ok(out);
}
function _M0FP211localreview7mailbox14encode__mboxrd(messages) {
  const out = new _M0TPB8MutLocalGsE("");
  const _bind = messages.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const message = messages[_];
      let _tmp$2;
      const _tmp$3 = _M0MPC16string6String4trim(message.envelope, undefined);
      const _bind$2 = "";
      if (_M0IPC16string10StringViewPB2Eq5equal(_tmp$3, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
        _tmp$2 = true;
      } else {
        let _tmp$4;
        const _tmp$5 = message.envelope;
        const _bind$3 = "\n";
        if (_M0MPC16string6String8contains(_tmp$5, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
          _tmp$4 = true;
        } else {
          let _tmp$6;
          const _tmp$7 = message.envelope;
          const _bind$4 = "\r";
          if (_M0MPC16string6String8contains(_tmp$7, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
            _tmp$6 = true;
          } else {
            const _tmp$8 = message.envelope;
            const _bind$5 = "\u0000";
            _tmp$6 = _M0MPC16string6String8contains(_tmp$8, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length));
          }
          _tmp$4 = _tmp$6;
        }
        _tmp$2 = _tmp$4;
      }
      if (_tmp$2) {
        return new _M0DTPC16result6ResultGsRP211localreview7mailbox12MailboxErrorE3Err(new _M0DTPC15error5Error46localreview_2fmailbox_2eMailboxError_2eInvalid("invalid envelope"));
      }
      out.val = `${out.val}From ${message.envelope}\n`;
      const _bind$3 = _M0FP211localreview7mailbox19normalize__newlines(message.content);
      let body;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        body = _ok._0;
      } else {
        return _bind$3;
      }
      const _bind$4 = "\n";
      const lines = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(body, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length)));
      const _bind$5 = 0;
      const _bind$6 = lines.length;
      let _tmp$4 = _bind$5;
      while (true) {
        const i = _tmp$4;
        if (i < _bind$6) {
          const line = _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRP211localreview7mailbox7MessageE(lines, i));
          if (i === (lines.length - 1 | 0) && line === "") {
            break;
          }
          out.val = `${out.val}${_M0FP211localreview7mailbox10from__line(line) ? ">" : ""}${line}\n`;
          _tmp$4 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      out.val = `${out.val}\n`;
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGsRP211localreview7mailbox12MailboxErrorE2Ok(out.val);
}
function _M0FP211localreview7mailbox14header__values(content, name) {
  const _bind = _M0FP211localreview7mailbox7headers(content);
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGsERP211localreview7mailbox12MailboxErrorE2Ok(_M0MPC15array5Array3mapGRP211localreview7mailbox6HeadersE(_M0MPC15array5Array6filterGRP211localreview7mailbox6HeaderE(_tmp, (h) => _M0MPC16string6String9to__lower(h.name) === _M0MPC16string6String9to__lower(name)), (h) => h.value));
}
function _M0FP411localreview7mailbox3cmd3web3run(input) {
  let _try_err;
  _L: {
    const _bind = _M0FP211localreview7mailbox13parse__mboxrd(input);
    let messages;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      messages = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    const lines = [];
    const _bind$2 = 0;
    const _bind$3 = messages.length;
    let _tmp = _bind$2;
    while (true) {
      const i = _tmp;
      if (i < _bind$3) {
        const m = _M0MPC15array5Array2atGRP211localreview7mailbox7MessageE(messages, i);
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(10);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Message ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, i + 1 | 0);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": ");
        const _tmp$2 = _M0MPB13StringBuilder10to__string(_string_builder);
        const _tmp$3 = m.envelope;
        const _bind$4 = _M0FP211localreview7mailbox14header__values(m.content, "subject");
        let _tmp$4;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _tmp$4 = _ok._0;
        } else {
          const _err = _bind$4;
          _try_err = _err._0;
          break _L;
        }
        const _tmp$5 = _tmp$4;
        const _bind$5 = " | ";
        _M0MPC15array5Array4pushGsE(lines, `${_tmp$2}${_tmp$3}\nSubject: ${_M0MPC15array5Array4joinGsE(_tmp$5, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length))}`);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$4 = "\n\n";
    const _tmp$2 = _M0MPC15array5Array4joinGsE(lines, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length));
    const _bind$5 = _M0FP211localreview7mailbox14encode__mboxrd(messages);
    let _tmp$3;
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      _tmp$3 = _ok._0;
    } else {
      const _err = _bind$5;
      _try_err = _err._0;
      break _L;
    }
    return `${_tmp$2}\n\nCanonical mboxrd:\n${_tmp$3}`;
  }
  const e = _try_err;
  return `ERROR: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP211localreview7mailbox12MailboxErrorE(e))}`;
}
function _M0FP411localreview7mailbox3cmd3web13maildir__name(input) {
  let _try_err;
  _L: {
    const _bind = _M0FP211localreview7mailbox20parse__maildir__name(input);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    const _bind$2 = _M0MP211localreview7mailbox11MaildirName6encode(_tmp);
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      return _ok._0;
    } else {
      const _err = _bind$2;
      _try_err = _err._0;
      break _L;
    }
  }
  const e = _try_err;
  return `ERROR: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP211localreview7mailbox12MailboxErrorE(e))}`;
}
function _M0FP411localreview7mailbox3cmd3web14maildir__flags(input, flags) {
  let _try_err;
  _L: {
    const _bind = _M0FP211localreview7mailbox20parse__maildir__name(input);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    const _bind$2 = _M0MP211localreview7mailbox11MaildirName11with__flags(_tmp, flags);
    let _tmp$2;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp$2 = _ok._0;
    } else {
      const _err = _bind$2;
      _try_err = _err._0;
      break _L;
    }
    const _bind$3 = _M0MP211localreview7mailbox11MaildirName6encode(_tmp$2);
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      return _ok._0;
    } else {
      const _err = _bind$3;
      _try_err = _err._0;
      break _L;
    }
  }
  const e = _try_err;
  return `ERROR: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP211localreview7mailbox12MailboxErrorE(e))}`;
}
function _M0FP411localreview7mailbox3cmd3web11mime__lines(part, out) {
  const _tmp = part.media_type;
  const _bind = part.body;
  _M0MPC15array5Array4pushGsE(out, `${_tmp} ${_M0FPC28encoding6base6414encode_2einner(new _M0TPC15bytes9BytesView(_bind, 0, _bind.length), true)}`);
  const _bind$2 = part.children;
  const _bind$3 = _bind$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const child = _bind$2[_];
      _M0FP411localreview7mailbox3cmd3web11mime__lines(child, out);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP411localreview7mailbox3cmd3web13mime__summary(data_base64) {
  let _try_err;
  _L: {
    const _bind = _M0FPC28encoding6base6414decode_2einner(new _M0TPC16string10StringView(data_base64, 0, data_base64.length), false);
    let data;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      data = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    const lines = [];
    const _bind$2 = _M0FP211localreview7mailbox11parse__mime(data);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      const _err = _bind$2;
      _try_err = _err._0;
      break _L;
    }
    _M0FP411localreview7mailbox3cmd3web11mime__lines(_tmp, lines);
    const _bind$3 = "\n";
    return _M0MPC15array5Array4joinGsE(lines, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length));
  }
  const e = _try_err;
  return `ERROR: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRPC15error5ErrorE(e))}`;
}
function _M0FP411localreview7mailbox3cmd3web15header__display(value) {
  let _try_err;
  _L: {
    const _bind = _M0FP211localreview7mailbox14decode__header(value);
    if (_bind.$tag === 1) {
      const _ok = _bind;
      return _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
  }
  const e = _try_err;
  return `ERROR: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP211localreview7mailbox12MailboxErrorE(e))}`;
}
function _M0FP411localreview7mailbox3cmd3web13body__display(base64_message) {
  let _try_err;
  _L: {
    const _bind = _M0FPC28encoding6base6414decode_2einner(new _M0TPC16string10StringView(base64_message, 0, base64_message.length), false);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    const _bind$2 = _M0FP211localreview7mailbox11parse__mime(_tmp);
    let _tmp$2;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp$2 = _ok._0;
    } else {
      const _err = _bind$2;
      _try_err = _err._0;
      break _L;
    }
    const _bind$3 = _M0MP211localreview7mailbox8MimePart4text(_tmp$2);
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      return _ok._0;
    } else {
      const _err = _bind$3;
      _try_err = _err._0;
      break _L;
    }
  }
  const e = _try_err;
  return `ERROR: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRPC15error5ErrorE(e))}`;
}
(() => {
})();
export { _M0FP411localreview7mailbox3cmd3web3run as run, _M0FP411localreview7mailbox3cmd3web13maildir__name as maildir_name, _M0FP411localreview7mailbox3cmd3web14maildir__flags as maildir_flags, _M0FP411localreview7mailbox3cmd3web13mime__summary as mime_summary, _M0FP411localreview7mailbox3cmd3web15header__display as header_display, _M0FP411localreview7mailbox3cmd3web13body__display as body_display }
//# sourceMappingURL=web.js.map
