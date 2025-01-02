"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9441],{40675:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"code/cpp/matlab","title":"matlab","description":"matlab\u4e0ec++\u6df7\u5408\u7f16\u7a0b","source":"@site/docs/code/cpp/matlab.md","sourceDirName":"code/cpp","slug":"/code/cpp/matlab","permalink":"/docs/code/cpp/matlab","draft":false,"unlisted":false,"editUrl":null,"tags":[{"inline":true,"label":"Cpp","permalink":"/docs/tags/cpp"},{"inline":true,"label":"Matlab","permalink":"/docs/tags/matlab"}],"version":"current","lastUpdatedBy":"li-tann","lastUpdatedAt":1735780614000,"frontMatter":{"custom_edit_url":null,"last_update":{"author":"li-tann"},"tags":["Cpp","Matlab"]},"sidebar":"code","previous":{"title":"GDAL","permalink":"/docs/code/cpp/gdal"},"next":{"title":"nlohmann::json","permalink":"/docs/code/cpp/nlohmann_json"}}');var a=t(74848),l=t(28453);const i={custom_edit_url:null,last_update:{author:"li-tann"},tags:["Cpp","Matlab"]},s="matlab",c={},d=[{value:".mat\u8bfb\u53d6",id:"mat\u8bfb\u53d6",level:2},{value:"\u73af\u5883\u8bbe\u7f6e",id:"\u73af\u5883\u8bbe\u7f6e",level:3},{value:"mat\u8bfb\u53d6\u4ee3\u7801",id:"mat\u8bfb\u53d6\u4ee3\u7801",level:3}];function o(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"matlab",children:"matlab"})}),"\n",(0,a.jsx)(n.p,{children:"matlab\u4e0ec++\u6df7\u5408\u7f16\u7a0b"}),"\n",(0,a.jsx)(n.h2,{id:"mat\u8bfb\u53d6",children:".mat\u8bfb\u53d6"}),"\n",(0,a.jsx)(n.h3,{id:"\u73af\u5883\u8bbe\u7f6e",children:"\u73af\u5883\u8bbe\u7f6e"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["VC++\u76ee\u5f55->\u5305\u542b\u76ee\u5f55 \u6dfb\u52a0: ",(0,a.jsx)(n.br,{}),"\n","MATLAB\\R2010b\\extern\\include ",(0,a.jsx)(n.br,{}),"\n","MATLAB\\R2010b\\extern\\include\\win64 ",(0,a.jsx)(n.br,{}),"\n","->\u5e93\u76ee\u5f55 \u6dfb\u52a0\uff1a ",(0,a.jsx)(n.br,{}),"\n","MATLAB\\R2010b\\extern\\lib\\win64\\microsoft ",(0,a.jsx)(n.br,{}),"\n","MATLAB\\R2010b\\extern\\lib\\win32\\microsoft\r\n\xa0"]}),"\n",(0,a.jsxs)(n.li,{children:["C/C++->\u5e38\u89c4->\u9644\u52a0\u5305\u542b\u76ee\u5f55 \u6dfb\u52a0: ",(0,a.jsx)(n.br,{}),"\n","MATLAB\\R2010b\\extern\\include ",(0,a.jsx)(n.br,{}),"\n","MATLAB\\R2010b\\extern\\include\\win64\r\n\xa0"]}),"\n",(0,a.jsxs)(n.li,{children:["\u94fe\u63a5\u5668->\u8f93\u5165->\u9644\u52a0\u4f9d\u8d56\u5e93 \u6dfb\u52a0: ",(0,a.jsx)(n.br,{}),"\n","libmat.lib ",(0,a.jsx)(n.br,{}),"\n","libmx.lib ",(0,a.jsx)(n.br,{}),"\n","libmex.lib ",(0,a.jsx)(n.br,{}),"\n","libeng.lib ",(0,a.jsx)(n.br,{}),"\n","\u7531\u4e8e\u6240\u5b89\u88c5\u7684matlab\u4e3a64\u4f4d\uff0c\u8981\u8c03\u7528\u5176\u51fd\u6570\uff0c\u9700\u8981\u5c06\u5de5\u7a0b\u8f6c\u6362\u4e3aX64\r\n\xa0"]}),"\n",(0,a.jsx)(n.li,{children:"\u9876\u83dc\u5355->\u751f\u6210->\u914d\u7f6e\u7ba1\u7406\u5668->\u5e73\u53f0\uff1aX64\r\n\xa0"}),"\n",(0,a.jsxs)(n.li,{children:["\u8ba1\u7b97\u673a\u73af\u5883\u53d8\u91cf->path \u6dfb\u52a0\uff1a ",(0,a.jsx)(n.br,{}),"\n","E:\\DevTools\\MATLAB\\R2010b\\extern\\lib\\win64\\microsoft; ",(0,a.jsx)(n.br,{}),"\n","E:\\DevTools\\MATLAB\\R2010b\\bin\\win64;"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"mat\u8bfb\u53d6\u4ee3\u7801",children:"mat\u8bfb\u53d6\u4ee3\u7801"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:'MATFile *pmatFile = NULL;\r\nmxArray *pMxArray = NULL;\r\nconst char **dir;//\u5143\u7d20\u540d\u5217\u8868\r\nint  ndir;//mat\u6587\u4ef6\u4e2d\u7684\u5143\u7d20(\u77e9\u9635\u3001\u5143\u80de)\u4e2a\u6570\r\npmatFile = matOpen("D:\\\\ICESat-2\\\\ZY303\\\\ATL03_20200906005252_ph_rmOutlier.mat", "r");\r\npMxArray = matGetVariable(pmatFile, "initA");\r\n\r\ndouble *dst_rmOutlier;\r\n\r\ndir = (const char **)matGetDir(pmatFile, &ndir);\r\npMxArray = matGetVariable(pmatFile, "dst_rmOutlier");\r\n\r\ndst_rmOutlier = (double*)mxGetData(pMxArray);//\u9ed8\u8ba4\u4e3a\u9010\u5217\u8868\u793a dst_rmOutlier(i,j)=dst_rmOutlier[i+j*M]\r\nint M = mxGetM(pMxArray);//\u884c\r\nint N = mxGetN(pMxArray);//\u5217\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u6ce8\uff1a\u8bfb\u53d6\u7684\u77e9\u9635\u662f\u4ee5\u5217\u5f62\u5f0f\u5b58\u50a8\uff0c\u77e9\u9635\u7684\u7b2ci\u884c\u7b2cj\u5217\u5143\u7d20\u8868\u793a\u4e3a\r\n",(0,a.jsx)(n.code,{children:"array(i,j)=array[i+M*j]"})]})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(96540);const a={},l=r.createContext(a);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);