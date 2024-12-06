"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3901],{80501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"document/data_structure/atomic_operation","title":"Atomic Operation \u539f\u5b50\u6027\u64cd\u4f5c","description":"\u591a\u7ebf\u7a0b\u8bbf\u95ee\u8d44\u6e90\u65f6\uff0c\u9700\u8981\u786e\u4fdd\u6240\u6709\u7684\u7ebf\u7a0b\u4e0d\u5728\u540c\u4e00\u65f6\u95f4\u5185\u8bbf\u95ee\u76f8\u540c\u7684\u8d44\u6e90\u3002","source":"@site/docs/document/data_structure/atomic_operation.md","sourceDirName":"document/data_structure","slug":"/document/data_structure/atomic_operation","permalink":"/docs/document/data_structure/atomic_operation","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"custom_edit_url":null},"sidebar":"docs","previous":{"title":"Data Structrue \u6570\u636e\u7ed3\u6784","permalink":"/docs/category/data-structrue-\u6570\u636e\u7ed3\u6784"},"next":{"title":"\u6d6e\u70b9\u578b\u6570\u636e\u7ed3\u6784","permalink":"/docs/document/data_structure/float_struct"}}');var c=n(74848),a=n(28453);const i={custom_edit_url:null},o="Atomic Operation \u539f\u5b50\u6027\u64cd\u4f5c",s={},d=[];function u(e){const t={a:"a",h1:"h1",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.header,{children:(0,c.jsx)(t.h1,{id:"atomic-operation-\u539f\u5b50\u6027\u64cd\u4f5c",children:"Atomic Operation \u539f\u5b50\u6027\u64cd\u4f5c"})}),"\n",(0,c.jsx)(t.p,{children:"\u591a\u7ebf\u7a0b\u8bbf\u95ee\u8d44\u6e90\u65f6\uff0c\u9700\u8981\u786e\u4fdd\u6240\u6709\u7684\u7ebf\u7a0b\u4e0d\u5728\u540c\u4e00\u65f6\u95f4\u5185\u8bbf\u95ee\u76f8\u540c\u7684\u8d44\u6e90\u3002"}),"\n",(0,c.jsx)(t.p,{children:"\u539f\u5b50\u6027\u64cd\u4f5c\u662f\u6307\u4e0d\u80fd\u518d\u88ab\u62c6\u5206\u3001\u4e0d\u4f1a\u88ab\u7ebf\u7a0b\u8c03\u5ea6\u673a\u5236\u4e2d\u65ad\u7684\u64cd\u4f5c\u3002\u539f\u5b50\u6027\u64cd\u4f5c\u4e00\u65e6\u5f00\u59cb\uff0c\u5728\u7ed3\u675f\u524d\u4e2d\u95f4\u4e0d\u4f1a\u6709\u4efb\u4f55context switch\u3002"}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://blog.csdn.net/rain_qingtian/article/details/11020827",children:"\u53c2\u8003\u6587\u6863"})}),"\n",(0,c.jsx)(t.p,{children:"\u53c2\u8003\u6587\u6863\u4e2d\uff0c\u9898\u5230\u4e86intel\u53c2\u8003\u624b\u518c\u91cc\u8bf4\u660e\u7684\uff0cCPU\u662f\u57fa\u4e8e\u4ee5\u4e0b\u4e09\u79cd\u673a\u5236\u5728\u591a\u6838\u4e2d\u52a0\u9501\u7684\u539f\u5b50\u64cd\u4f5c\uff1a"}),"\n",(0,c.jsx)(t.p,{children:"\uff081\uff09Guaranteed atomic operations\r\n\uff082\uff09Bus locking, using the LOCK# signal and the LOCK instruction prefix\r\n\uff083\uff09Cache coherency protocols that ensure that atomic operations can be carried out on cached data structures (cache lock); this mechanism is present in the Pentium 4, Intel Xeon, and P6 family processors"}),"\n",(0,c.jsx)(t.p,{children:"\u8fd9\u4e09\u4e2a\u673a\u5236\u76f8\u4e92\u72ec\u7acb\uff0c\u76f8\u8f85\u76f8\u627f\u3002\u7b80\u5355\u7684\u7406\u89e3\u8d77\u6765\u5c31\u662f\r\n\uff081\uff09\u4e00\u4e9b\u57fa\u672c\u7684\u5185\u5b58\u8bfb\u5199\u64cd\u4f5c\u662f\u672c\u8eab\u5df2\u7ecf\u88ab\u786c\u4ef6\u63d0\u4f9b\u4e86\u539f\u5b50\u6027\u4fdd\u8bc1\uff08\u4f8b\u5982\u8bfb\u5199\u5355\u4e2a\u5b57\u8282\u7684\u64cd\u4f5c\uff09\uff1b\r\n\uff082\uff09\u4e00\u4e9b\u9700\u8981\u4fdd\u8bc1\u539f\u5b50\u6027\u4f46\u662f\u6ca1\u6709\u88ab\u7b2c\uff081\uff09\u6761\u673a\u5236\u63d0\u4f9b\u652f\u6301\u7684\u64cd\u4f5c\uff08\u4f8b\u5982read-modify-write\uff09\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u201dLOCK#\u201d\u6765\u9501\u5b9a\u603b\u7ebf\uff0c\u4ece\u800c\u4fdd\u8bc1\u64cd\u4f5c\u7684\u539f\u5b50\u6027\r\n\uff083\uff09\u56e0\u4e3a\u5f88\u591a\u5185\u5b58\u6570\u636e\u662f\u5df2\u7ecf\u5b58\u653e\u5728L1/L2 cache\u4e2d\u4e86\uff0c\u5bf9\u8fd9\u4e9b\u6570\u636e\u7684\u539f\u5b50\u64cd\u4f5c\u53ea\u9700\u8981\u4e0e\u672c\u5730\u7684cache\u6253\u4ea4\u9053\uff0c\u800c\u4e0d\u9700\u8981\u4e0e\u603b\u7ebf\u6253\u4ea4\u9053\uff0c\u6240\u4ee5CPU\u5c31\u63d0\u4f9b\u4e86cache coherency\u673a\u5236\u6765\u4fdd\u8bc1\u5176\u5b83\u7684\u90a3\u4e9b\u4e5fcache\u4e86\u8fd9\u4e9b\u6570\u636e\u7684processor\u80fd\u8bfb\u5230\u6700\u65b0\u7684\u503c\uff08\u5173\u4e8ecache coherency\u53ef\u4ee5\u53c2\u52a0\u6211\u7684\u4e00\u7bc7\u535a\u6587\uff09\u3002"}),"\n",(0,c.jsx)(t.p,{children:"\u5bf9\u4e8eCPU\u6765\u8bf4\uff0c\u4ee5\u4e0b\u57fa\u672c\u7684\u64cd\u4f5c\u63d0\u4f9b\u4e86\u539f\u5b50\u6027\u652f\u6301\uff1a"}),"\n",(0,c.jsx)(t.p,{children:"\u4eceIntel486 processor\u5f00\u59cb\uff0c\u4ee5\u4e0b\u7684\u57fa\u672c\u5185\u5b58\u64cd\u4f5c\u662f\u539f\u5b50\u7684\uff1a\r\n\u2022 Reading or writing a byte\uff08\u4e00\u4e2a\u5b57\u8282\u7684\u8bfb\u5199\uff09\r\n\u2022 Reading or writing a word aligned on a 16-bit boundary\uff08\u5bf9\u9f50\u523016\u4f4d\u8fb9\u754c\u7684\u5b57\u7684\u8bfb\u5199\uff09\r\n\u2022 Reading or writing a doubleword aligned on a 32-bit boundary\uff08\u5bf9\u9f50\u523032\u4f4d\u8fb9\u754c\u7684\u53cc\u5b57\u7684\u8bfb\u5199\uff09"}),"\n",(0,c.jsx)(t.p,{children:"\u4ecePentium processor\u5f00\u59cb\uff0c\u9664\u4e86\u4e4b\u524d\u652f\u6301\u7684\u539f\u5b50\u64cd\u4f5c\u5916\u53c8\u65b0\u589e\u4e86\u4ee5\u4e0b\u539f\u5b50\u64cd\u4f5c\uff1a\r\n\u2022 Reading or writing a quadword aligned on a 64-bit boundary\uff08\u5bf9\u9f50\u523064\u4f4d\u8fb9\u754c\u7684\u56db\u5b57\u7684\u8bfb\u5199\uff09\r\n\u2022 16-bit accesses to uncached memory locations that fit within a 32-bit data bus\uff08\u672a\u7f13\u5b58\u4e14\u572832\u4f4d\u6570\u636e\u603b\u7ebf\u8303\u56f4\u4e4b\u5185\u7684\u5185\u5b58\u5730\u5740\u7684\u8bbf\u95ee\uff09"}),"\n",(0,c.jsx)(t.p,{children:"\u4eceP6 family processors\u5f00\u59cb\uff0c\u9664\u4e86\u4e4b\u524d\u652f\u6301\u7684\u539f\u5b50\u64cd\u4f5c\u53c8\u65b0\u589e\u4e86\u4ee5\u4e0b\u539f\u5b50\u64cd\u4f5c\uff1a\r\n\u2022 Unaligned 16-, 32-, and 64-bit accesses to cached memory that fit within a cache line\uff08\u5bf9\u5355\u4e2acache line\u4e2d\u7f13\u5b58\u5730\u5740\u7684\u672a\u5bf9\u9f50\u768416/32/64\u4f4d\u8bbf\u95ee\uff09"}),"\n",(0,c.jsx)(t.p,{children:"\u4e3e\u4f8b\uff1a"}),"\n",(0,c.jsx)(t.p,{children:"\uff081\uff09x=1\u662f\u539f\u5b50\u64cd\u4f5c\u3002\u56e0\u4e3ax\u662fint\u7c7b\u578b\uff0c32\u4f4dCPU\u4e0aint\u536032\u4f4d\uff0c\u5728X86\u4e0a\u7531\u786c\u4ef6\u76f4\u63a5\u63d0\u4f9b\u4e86\u539f\u5b50\u6027\u652f\u6301\u3002\u5b9e\u9645\u4e0a\u4e0d\u7ba1\u6709\u591a\u5c11\u4e2a\u7ebf\u7a0b\u540c\u65f6\u6267\u884c\u7c7b\u4f3cx=1\u8fd9\u6837\u7684\u8d4b\u503c\u8bed\u53e5\uff0cx\u7684\u503c\u6700\u7ec8\u8fd8\u662f\u88ab\u8d4b\u7684\u503c\uff08\u800c\u4e0d\u4f1a\u51fa\u73b0\u4f8b\u5982\u67d0\u4e2a\u7ebf\u7a0b\u53ea\u66f4\u65b0\u4e86x\u7684\u4f4e16\u4f4d\u7136\u540e\u88ab\u963b\u585e\uff0c\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u7d27\u63a5\u7740\u53c8\u66f4\u65b0\u4e86x\u7684\u4f4e24\u4f4d\u7136\u540e\u53c8\u88ab\u963b\u585e\uff0c\u4ece\u800c\u51fa\u73b0x\u7684\u503c\u88ab\u635f\u574f\u4e86\u7684\u60c5\u51b5\uff09\u3002\r\n\uff082\uff09x++\u548c++x\u4e0d\u5c5e\u4e8e\u539f\u5b50\u64cd\u4f5c\u3002\u5176\u5b9e\u7c7b\u4f3cx++, x+=2, ++x\u8fd9\u6837\u7684\u64cd\u4f5c\u5728\u591a\u7ebf\u7a0b\u73af\u5883\u4e0b\u662f\u9700\u8981\u540c\u6b65\u7684\u3002\u56e0\u4e3aX86\u4f1a\u6309\u4e09\u6761\u6307\u4ee4\u7684\u5f62\u5f0f\u6765\u5904\u7406\u8fd9\u79cd\u8bed\u53e5\uff1a\u4ece\u5185\u5b58\u4e2d\u8bfbx\u7684\u503c\u5230\u5bc4\u5b58\u5668\u4e2d\uff0c\u5bf9\u5bc4\u5b58\u5668\u52a01\uff0c\u518d\u628a\u65b0\u503c\u5199\u56dex\u6240\u5904\u7684\u5185\u5b58\u5730\u5740\uff08\u89c1\u4e0a\u9762\u7684\u53cd\u6c47\u7f16\u4ee3\u7801\uff09\u3002"}),"\n",(0,c.jsx)(t.p,{children:"\uff083\uff09x=y\u4e0d\u662f\u539f\u5b50\u64cd\u4f5c\u3002\u5728X86\u4e0a\u5b83\u5305\u542b\u4e24\u4e2a\u64cd\u4f5c\uff1a\u8bfb\u53d6y\u81f3\u5bc4\u5b58\u5668\uff0c\u518d\u628a\u8be5\u503c\u5199\u5165x\u3002\u8bfby\u7684\u503c\u8fd9\u4e2a\u64cd\u4f5c\u672c\u8eab\u662f\u539f\u5b50\u7684\uff0c\u628a\u503c\u5199\u5165x\u4e5f\u662f\u539f\u5b50\u7684\uff0c\u4f46\u662f\u4e24\u8005\u5408\u8d77\u6765\u662f\u4e0d\u662f\u539f\u5b50\u64cd\u4f5c\u5462\uff1f\u6211\u4e2a\u4eba\u8ba4\u4e3ax=y\u4e0d\u662f\u539f\u5b50\u64cd\u4f5c\uff0c\u56e0\u4e3a\u5b83\u4e0d\u662f\u4e0d\u53ef\u518d\u5206\u7684\u64cd\u4f5c\u3002"})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(96540);const c={},a=r.createContext(c);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);