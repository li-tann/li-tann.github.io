"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8150],{12099:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"code/cpp/eigen","title":"Eigen","description":"only-header\u7684\u77e9\u9635\u8fd0\u7b97\u5e93","source":"@site/docs/code/cpp/eigen.md","sourceDirName":"code/cpp","slug":"/code/cpp/eigen","permalink":"/docs/code/cpp/eigen","draft":false,"unlisted":false,"editUrl":null,"tags":[{"inline":true,"label":"Cpp","permalink":"/docs/tags/cpp"},{"inline":true,"label":"Eigen","permalink":"/docs/tags/eigen"}],"version":"current","lastUpdatedBy":"li-tann","lastUpdatedAt":1735780614000,"frontMatter":{"custom_edit_url":null,"last_update":{"author":"li-tann"},"tags":["Cpp","Eigen"]},"sidebar":"code","previous":{"title":"Std","permalink":"/docs/code/cpp/std"},"next":{"title":"fmt","permalink":"/docs/code/cpp/fmt"}}');var a=n(74848),l=n(28453);const i={custom_edit_url:null,last_update:{author:"li-tann"},tags:["Cpp","Eigen"]},t="Eigen",c={},o=[{value:"\u7ebf\u6027\u65b9\u7a0b\u6c42\u89e3",id:"\u7ebf\u6027\u65b9\u7a0b\u6c42\u89e3",level:2},{value:"SVD\u5206\u89e3 (SVD decomposition)",id:"svd\u5206\u89e3-svd-decomposition",level:3},{value:"QR\u5206\u89e3 (QR decomposition)",id:"qr\u5206\u89e3-qr-decomposition",level:3},{value:"\u6b63\u89c4\u65b9\u7a0b (normal equations)",id:"\u6b63\u89c4\u65b9\u7a0b-normal-equations",level:3},{value:"\u4e0eMatlab\u547d\u4ee4\u5bf9\u6bd4",id:"\u4e0ematlab\u547d\u4ee4\u5bf9\u6bd4",level:2},{value:"\u77e9\u9635/\u5411\u91cf\u7684\u5c3a\u5bf8\u3001\u503c",id:"\u77e9\u9635\u5411\u91cf\u7684\u5c3a\u5bf8\u503c",level:3},{value:"\u77e9\u9635\u91cd\u5b9a\u4e49\u5927\u5c0f",id:"\u77e9\u9635\u91cd\u5b9a\u4e49\u5927\u5c0f",level:3},{value:"\u77e9\u9635\u586b\u5145",id:"\u77e9\u9635\u586b\u5145",level:3},{value:"\u7279\u6b8a\u77e9\u9635\u6784\u5efa",id:"\u7279\u6b8a\u77e9\u9635\u6784\u5efa",level:3},{value:"\u5411\u91cf\u7684\u7b49\u8ddd\u5206\u5e03",id:"\u5411\u91cf\u7684\u7b49\u8ddd\u5206\u5e03",level:3},{value:"\u77e9\u9635/\u5411\u91cf\u7684\u533a\u57df\u9009\u53d6\uff08\u5757\uff09",id:"\u77e9\u9635\u5411\u91cf\u7684\u533a\u57df\u9009\u53d6\u5757",level:3},{value:"\u77e9\u9635\u7684\u8f6c\u7f6e\u3001\u5171\u8f6d\u7b49",id:"\u77e9\u9635\u7684\u8f6c\u7f6e\u5171\u8f6d\u7b49",level:3},{value:"\u77e9\u9635\u8fd0\u7b97",id:"\u77e9\u9635\u8fd0\u7b97",level:3},{value:"\u77e9\u9635\u7684\u6570\u503c\u64cd\u4f5c",id:"\u77e9\u9635\u7684\u6570\u503c\u64cd\u4f5c",level:3},{value:"\u70b9\u79ef\u3001\u8303\u6570\u7b49",id:"\u70b9\u79ef\u8303\u6570\u7b49",level:3},{value:"\u683c\u5f0f\u8f6c\u6362",id:"\u683c\u5f0f\u8f6c\u6362",level:3},{value:"\u6570\u7ec4\u4e0eEigen\u77e9\u9635\u7684\u5173\u8054",id:"\u6570\u7ec4\u4e0eeigen\u77e9\u9635\u7684\u5173\u8054",level:3},{value:"\u7279\u5f81\u503c\u95ee\u9898",id:"\u7279\u5f81\u503c\u95ee\u9898",level:3}];function d(s){const e={annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",mstyle:"mstyle",msup:"msup",mtable:"mtable",mtd:"mtd",mtr:"mtr",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",...(0,l.R)(),...s.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"eigen",children:"Eigen"})}),"\n",(0,a.jsx)(e.p,{children:"only-header\u7684\u77e9\u9635\u8fd0\u7b97\u5e93"}),"\n",(0,a.jsx)(e.h2,{id:"\u7ebf\u6027\u65b9\u7a0b\u6c42\u89e3",children:"\u7ebf\u6027\u65b9\u7a0b\u6c42\u89e3"}),"\n",(0,a.jsx)(e.p,{children:"Eigen\u7ebf\u6027\u65b9\u7a0b\u6c42\u89e3"}),"\n",(0,a.jsx)(e.p,{children:"\u89e3\u51b3\u5bc6\u96c6\u77e9\u9635\u7684\u7ebf\u6027\u6700\u5c0f\u4e8c\u4e58\u95ee\u9898"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"A"}),(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mi,{children:"b"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"Ax=b"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"A"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"b"})]})]})]})}),"\n",(0,a.jsx)(e.p,{children:"Eigen\u6587\u6863\u4e2d\u63d0\u4f9b\u4e86\u4e09\u79cd\u65b9\u6cd5\uff0c\u5206\u522b\u662fSVD\u5206\u89e3\uff0cQR\u5206\u89e3\u548c\u6b63\u89c4\u65b9\u7a0b\u4e09\u79cd\u65b9\u5f0f\u3002\u5176\u4e2d\uff0cSVD\u5206\u89e3\u901a\u5e38\u662f\u6700\u51c6\u786e\u4f46\u4e5f\u662f\u6700\u6162\u7684\uff0c\u6b63\u89c4\u65b9\u7a0b\u6700\u5feb\u4f46\u6700\u4e0d\u51c6\u786e\uff0cQR\u4ecb\u4e8e\u4e24\u8005\u4e4b\u95f4\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"svd\u5206\u89e3-svd-decomposition",children:"SVD\u5206\u89e3 (SVD decomposition)"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-C++",children:'#include <iostream>\r\n#include <Eigen/Dense>\r\n \r\nusing namespace std;\r\nusing namespace Eigen;\r\n \r\nint main()\r\n{\r\n   MatrixXf A = MatrixXf::Random(3, 2);\r\n   cout << "Here is the matrix A:\\n" << A << endl;\r\n   VectorXf b = VectorXf::Random(3);\r\n   cout << "Here is the right hand side b:\\n" << b << endl;\r\n   cout << "The least-squares solution is:\\n"\r\n        << A.bdcSvd(ComputeThinU | ComputeThinV).solve(b) << endl;\r\n}\r\n\r\n//output:\r\nHere is the matrix A:\r\n  0.68  0.597\r\n-0.211  0.823\r\n 0.566 -0.605\r\nHere is the right hand side b:\r\n -0.33\r\n 0.536\r\n-0.444\r\nThe least-squares solution is:\r\n-0.67\r\n0.314\n'})}),"\n",(0,a.jsx)(e.h3,{id:"qr\u5206\u89e3-qr-decomposition",children:"QR\u5206\u89e3 (QR decomposition)"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"HouseholderQR"})," (no pivoting, fast but unstable if your matrix is not rull rank), ",(0,a.jsx)(e.strong,{children:"ColPivHouseholderQR"})," (column pivoting, thus a bit slower but more stable) and ",(0,a.jsx)(e.strong,{children:"FullPivHouseholderQR"})," (full pivoting, so slowest and slightly more stable than ColPivHouseholderQR)."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-Cpp",children:'MatrixXf A = MatrixXf::Random(3, 2);\r\nVectorXf b = VectorXf::Random(3);\r\ncout << "The solution using the QR decomposition is:\\n"\r\n     << A.colPivHouseholderQr().solve(b) << endl;\n'})}),"\n",(0,a.jsx)(e.h3,{id:"\u6b63\u89c4\u65b9\u7a0b-normal-equations",children:"\u6b63\u89c4\u65b9\u7a0b (normal equations)"}),"\n",(0,a.jsx)(e.span,{className:"katex-display",children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mtable,{rowspacing:"0.25em",columnalign:"right left",columnspacing:"0em",children:[(0,a.jsxs)(e.mtr,{children:[(0,a.jsx)(e.mtd,{children:(0,a.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:(0,a.jsx)(e.mrow,{})})}),(0,a.jsx)(e.mtd,{children:(0,a.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mrow,{}),(0,a.jsx)(e.mi,{children:"A"}),(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mi,{children:"b"})]})})})]}),(0,a.jsxs)(e.mtr,{children:[(0,a.jsx)(e.mtd,{children:(0,a.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:(0,a.jsx)(e.mo,{lspace:"0em",rspace:"0em",children:"\u21d2"})})}),(0,a.jsx)(e.mtd,{children:(0,a.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mrow,{}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mi,{children:"A"}),(0,a.jsx)(e.mi,{children:"T"})]}),(0,a.jsx)(e.mi,{children:"A"}),(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mi,{children:"A"}),(0,a.jsx)(e.mi,{children:"T"})]}),(0,a.jsx)(e.mi,{children:"b"})]})})})]}),(0,a.jsxs)(e.mtr,{children:[(0,a.jsx)(e.mtd,{children:(0,a.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:(0,a.jsx)(e.mo,{lspace:"0em",rspace:"0em",children:"\u21d2"})})}),(0,a.jsx)(e.mtd,{children:(0,a.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mrow,{}),(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mi,{children:"A"}),(0,a.jsx)(e.mi,{children:"T"})]}),(0,a.jsx)(e.mi,{children:"A"}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mo,{stretchy:"false",children:")"}),(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mo,{children:"\u2212"}),(0,a.jsx)(e.mn,{children:"1"})]})]}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mi,{children:"A"}),(0,a.jsx)(e.mi,{children:"T"})]}),(0,a.jsx)(e.mi,{children:"b"})]})})})]})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\begin{aligned}\n   & Ax = b \\\\\n\\Rightarrow & A^TAx=A^Tb \\\\\n\\Rightarrow & x=(A^TA)^{-1}A^Tb \\\\\n\\end{aligned}"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"4.6027em",verticalAlign:"-2.0513em"}}),(0,a.jsx)(e.span,{className:"mord",children:(0,a.jsxs)(e.span,{className:"mtable",children:[(0,a.jsx)(e.span,{className:"col-align-r",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsxs)(e.span,{className:"vlist",style:{height:"2.5513em"},children:[(0,a.jsxs)(e.span,{style:{top:"-4.7113em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"mord"})]}),(0,a.jsxs)(e.span,{style:{top:"-3.16em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"mord",children:(0,a.jsx)(e.span,{className:"mrel",children:"\u21d2"})})]}),(0,a.jsxs)(e.span,{style:{top:"-1.6087em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"mord",children:(0,a.jsx)(e.span,{className:"mrel",children:"\u21d2"})})]})]}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"2.0513em"},children:(0,a.jsx)(e.span,{})})})]})}),(0,a.jsx)(e.span,{className:"col-align-l",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsxs)(e.span,{className:"vlist",style:{height:"2.5513em"},children:[(0,a.jsxs)(e.span,{style:{top:"-4.7113em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"A"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"b"})]})]}),(0,a.jsxs)(e.span,{style:{top:"-3.16em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord"}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"A"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8913em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"T"})})]})})})})})]}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"A"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"A"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8913em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"T"})})]})})})})})]}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"b"})]})]}),(0,a.jsxs)(e.span,{style:{top:"-1.6087em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"A"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8913em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"T"})})]})})})})})]}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"A"}),(0,a.jsxs)(e.span,{className:"mclose",children:[(0,a.jsx)(e.span,{className:"mclose",children:")"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsxs)(e.span,{className:"mord mtight",children:[(0,a.jsx)(e.span,{className:"mord mtight",children:"\u2212"}),(0,a.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]})})})})})]}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"A"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8913em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"T"})})]})})})})})]}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"b"})]})]})]}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"2.0513em"},children:(0,a.jsx)(e.span,{})})})]})})]})})]})})]})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-Cpp",children:'MatrixXf A = MatrixXf::Random(3, 2);\r\nVectorXf b = VectorXf::Random(3);\r\ncout << "The solution using normal equations is:\\n"\r\n     << (A.transpose() * A).ldlt().solve(A.transpose() * b) << endl;\n'})}),"\n",(0,a.jsx)(e.h2,{id:"\u4e0ematlab\u547d\u4ee4\u5bf9\u6bd4",children:"\u4e0eMatlab\u547d\u4ee4\u5bf9\u6bd4"}),"\n",(0,a.jsx)(e.p,{children:"Eigen\u4e0eMatlab\u547d\u4ee4\u5bf9\u6bd4"}),"\n",(0,a.jsx)(e.p,{children:"// A simple quickref for Eigen. Add anything that's missing."}),"\n",(0,a.jsx)(e.p,{children:"// Main author: Keir Mierle"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-Cpp",children:"#include <Eigen/Dense>\r\n\r\nMatrix<double, 3, 3> A;               // Fixed rows and cols. Same as Matrix3d.\r\nMatrix<double, 3, Dynamic> B;         // Fixed rows, dynamic cols.\r\nMatrix<double, Dynamic, Dynamic> C;   // Full dynamic. Same as MatrixXd.\r\nMatrix<double, 3, 3, RowMajor> E;     // Row major; default is column-major.\r\nMatrix3f P, Q, R;                     // 3x3 float matrix.\r\nVector3f x, y, z;                     // 3x1 float matrix.\r\nRowVector3f a, b, c;                  // 1x3 float matrix.\r\nVectorXd v;                           // Dynamic column vector of doubles\r\ndouble s;                            \n"})}),"\n",(0,a.jsx)(e.p,{children:"// Basic usage"}),"\n",(0,a.jsx)(e.h3,{id:"\u77e9\u9635\u5411\u91cf\u7684\u5c3a\u5bf8\u503c",children:"\u77e9\u9635/\u5411\u91cf\u7684\u5c3a\u5bf8\u3001\u503c"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-Cpp",children:"// Eigen          // Matlab           // comments\r\nx.size()          // length(x)        // vector size\r\nC.rows()          // size(C,1)        // number of rows\r\nC.cols()          // size(C,2)        // number of columns\r\nx(i)              // x(i+1)           // Matlab is 1-based\r\nC(i,j)            // C(i+1,j+1)       //\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u77e9\u9635\u91cd\u5b9a\u4e49\u5927\u5c0f",children:"\u77e9\u9635\u91cd\u5b9a\u4e49\u5927\u5c0f"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-Cpp",children:"A.resize(4, 4);   // Runtime error if assertions are on.\r\nB.resize(4, 9);   // Runtime error if assertions are on.\r\nA.resize(3, 3);   // Ok; size didn't change.\r\nB.resize(3, 9);   // Ok; only dynamic cols changed.\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u77e9\u9635\u586b\u5145",children:"\u77e9\u9635\u586b\u5145"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-Cpp",children:"A << 1, 2, 3,     // Initialize A. The elements can also be\r\n     4, 5, 6,     // matrices, which are stacked along cols\r\n     7, 8, 9;     // and then the rows are stacked.\r\nB << A, A, A;     // B is three horizontally stacked A's.\r\nA.fill(10);       // Fill A with all 10's.\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u7279\u6b8a\u77e9\u9635\u6784\u5efa",children:"\u7279\u6b8a\u77e9\u9635\u6784\u5efa"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-Cpp",children:"// Eigen                                    // Matlab\r\n//\u5355\u4f4d\u77e9\u9635\r\nMatrixXd::Identity(rows,cols)               // eye(rows,cols)\r\nC.setIdentity(rows,cols)                    // C = eye(rows,cols)\r\n//\u51680\u77e9\u9635\r\nMatrixXd::Zero(rows,cols)                   // zeros(rows,cols)\r\nC.setZero(rows,cols)                        // C = zeros(rows,cols)\r\n//\u51681\u77e9\u9635\r\nMatrixXd::Ones(rows,cols)                   // ones(rows,cols)\r\nC.setOnes(rows,cols)                        // C = ones(rows,cols)\r\n//\u968f\u673a\u77e9\u9635\r\nMatrixXd::Random(rows,cols)                 // rand(rows,cols)*2-1            // MatrixXd::Random returns uniform random numbers in (-1, 1).\r\nC.setRandom(rows,cols)                      // C = rand(rows,cols)*2-1\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u5411\u91cf\u7684\u7b49\u8ddd\u5206\u5e03",children:"\u5411\u91cf\u7684\u7b49\u8ddd\u5206\u5e03"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-Cpp",children:"VectorXd::LinSpaced(size,low,high)          // linspace(low,high,size)'\r\nv.setLinSpaced(size,low,high)               // v = linspace(low,high,size)'\r\nVectorXi::LinSpaced(((hi-low)/step)+1,      // low:step:hi\r\n                    low,low+step*(size-1))  //\r\n\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"// Matrix slicing and blocks. All expressions listed here are read/write.\\\r\n// Templated size versions are faster. Note that Matlab is 1-based (a size N\\\r\n// vector is x(1)...x(N)).\\\r\n/*                  PLEASE HELP US IMPROVING THIS SECTION                     */\r\n\r\n/* Eigen 3.4 supports a much improved API for sub-matrices, including,        */\r\n\r\n/* slicing and indexing from arrays:                                          */\r\n\r\n/* http://eigen.tuxfamily.org/dox-devel/group__TutorialSlicingIndexing.html   */\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u77e9\u9635\u5411\u91cf\u7684\u533a\u57df\u9009\u53d6\u5757",children:"\u77e9\u9635/\u5411\u91cf\u7684\u533a\u57df\u9009\u53d6\uff08\u5757\uff09"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-Cpp",children:"Matrix3f P;    \r\nVector3f x;\r\n// Eigen                           // Matlab\r\nx.head(n)                          // x(1:n)\r\nx.head<n>()                        // x(1:n)\r\nx.tail(n)                          // x(end - n + 1: end)\r\nx.tail<n>()                        // x(end - n + 1: end)\r\nx.segment(i, n)                    // x(i+1 : i+n)\r\nx.segment<n>(i)                    // x(i+1 : i+n)\r\nP.block(i, j, rows, cols)          // P(i+1 : i+rows, j+1 : j+cols)\r\nP.block<rows, cols>(i, j)          // P(i+1 : i+rows, j+1 : j+cols)\r\nP.row(i)                           // P(i+1, :)\r\nP.col(j)                           // P(:, j+1)\r\nP.leftCols<cols>()                 // P(:, 1:cols)\r\nP.leftCols(cols)                   // P(:, 1:cols)\r\nP.middleCols<cols>(j)              // P(:, j+1:j+cols)\r\nP.middleCols(j, cols)              // P(:, j+1:j+cols)\r\nP.rightCols<cols>()                // P(:, end-cols+1:end)\r\nP.rightCols(cols)                  // P(:, end-cols+1:end)\r\nP.topRows<rows>()                  // P(1:rows, :)\r\nP.topRows(rows)                    // P(1:rows, :)\r\nP.middleRows<rows>(i)              // P(i+1:i+rows, :)\r\nP.middleRows(i, rows)              // P(i+1:i+rows, :)\r\nP.bottomRows<rows>()               // P(end-rows+1:end, :)\r\nP.bottomRows(rows)                 // P(end-rows+1:end, :)\r\nP.topLeftCorner(rows, cols)        // P(1:rows, 1:cols)\r\nP.topRightCorner(rows, cols)       // P(1:rows, end-cols+1:end)\r\nP.bottomLeftCorner(rows, cols)     // P(end-rows+1:end, 1:cols)\r\nP.bottomRightCorner(rows, cols)    // P(end-rows+1:end, end-cols+1:end)\r\nP.topLeftCorner<rows,cols>()       // P(1:rows, 1:cols)\r\nP.topRightCorner<rows,cols>()      // P(1:rows, end-cols+1:end)\r\nP.bottomLeftCorner<rows,cols>()    // P(end-rows+1:end, 1:cols)\r\nP.bottomRightCorner<rows,cols>()   // P(end-rows+1:end, end-cols+1:end)\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"\r\n// Of particular note is Eigen's swap function which is highly optimized.\r\n// Eigen                           // Matlab\r\nR.row(i) = P.col(j);               // R(i, :) = P(:, j)\r\nR.col(j1).swap(mat1.col(j2));      // R(:, [j1 j2]) = R(:, [j2, j1])\r\n\r\n// Views, transpose, etc;\r\n\r\n/*                  PLEASE HELP US IMPROVING THIS SECTION                     */\r\n\r\n/* Eigen 3.4 supports a new API for reshaping:                                */\r\n\r\n/* http://eigen.tuxfamily.org/dox-devel/group__TutorialReshape.html           */\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u77e9\u9635\u7684\u8f6c\u7f6e\u5171\u8f6d\u7b49",children:"\u77e9\u9635\u7684\u8f6c\u7f6e\u3001\u5171\u8f6d\u7b49"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-Cpp",children:"// Eigen                           // Matlab\r\nR.adjoint()                        // R'\r\nR.transpose()                      // R.' or conj(R')       // Read-write\r\nR.diagonal()                       // diag(R)               // Read-write\r\nx.asDiagonal()                     // diag(x)\r\nR.transpose().colwise().reverse()  // rot90(R)              // Read-write\r\nR.rowwise().reverse()              // fliplr(R)\r\nR.colwise().reverse()              // flipud(R)\r\nR.replicate(i,j)                   // repmat(P,i,j)\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u77e9\u9635\u8fd0\u7b97",children:"\u77e9\u9635\u8fd0\u7b97"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-Cpp",children:"// All the same as Matlab, but matlab doesn't have *= style operators.\r\n// Matrix-vector.  Matrix-matrix.   Matrix-scalar.\r\ny  = M*x;          R  = P*Q;        R  = P*s;\r\na  = b*M;          R  = P - Q;      R  = s*P;\r\na *= M;            R  = P + Q;      R  = P/s;\r\n                   R *= Q;          R  = s*P;\r\n                   R += Q;          R *= s;\r\n                   R -= Q;          R /= s;\r\n\r\n// Vectorized operations on each element independently\r\n// Eigen                       // Matlab\r\nR = P.cwiseProduct(Q);         // R = P .* Q\r\nR = P.array() * s.array();     // R = P .* s\r\nR = P.cwiseQuotient(Q);        // R = P ./ Q\r\nR = P.array() / Q.array();     // R = P ./ Q\r\nR = P.array() + s.array();     // R = P + s\r\nR = P.array() - s.array();     // R = P - s\r\nR.array() += s;                // R = R + s\r\nR.array() -= s;                // R = R - s\r\nR.array() < Q.array();         // R < Q\r\nR.array() <= Q.array();        // R <= Q\r\nR.cwiseInverse();              // 1 ./ P\r\nR.array().inverse();           // 1 ./ P\r\nR.array().sin()                // sin(P)\r\nR.array().cos()                // cos(P)\r\nR.array().pow(s)               // P .^ s\r\nR.array().square()             // P .^ 2\r\nR.array().cube()               // P .^ 3\r\nR.cwiseSqrt()                  // sqrt(P)\r\nR.array().sqrt()               // sqrt(P)\r\nR.array().exp()                // exp(P)\r\nR.array().log()                // log(P)\r\nR.cwiseMax(P)                  // max(R, P)\r\nR.array().max(P.array())       // max(R, P)\r\nR.cwiseMin(P)                  // min(R, P)\r\nR.array().min(P.array())       // min(R, P)\r\nR.cwiseAbs()                   // abs(P)\r\nR.array().abs()                // abs(P)\r\nR.cwiseAbs2()                  // abs(P.^2)\r\nR.array().abs2()               // abs(P.^2)\r\n(R.array() < s).select(P,Q );  // (R < s ? P : Q)\r\nR = (Q.array()==0).select(P,R) // R(Q==0) = P(Q==0)\r\nR = P.unaryExpr(ptr_fun(func)) // R = arrayfun(func, P)   // with: scalar func(const scalar &x);\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u77e9\u9635\u7684\u6570\u503c\u64cd\u4f5c",children:"\u77e9\u9635\u7684\u6570\u503c\u64cd\u4f5c"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-Cpp",children:"// Reductions.\r\nint r, c;\r\n// Eigen                  // Matlab\r\nR.minCoeff()              // min(R(:))\r\nR.maxCoeff()              // max(R(:))\r\ns = R.minCoeff(&r, &c)    // [s, i] = min(R(:)); [r, c] = ind2sub(size(R), i);\r\ns = R.maxCoeff(&r, &c)    // [s, i] = max(R(:)); [r, c] = ind2sub(size(R), i);\r\nR.sum()                   // sum(R(:))\r\nR.colwise().sum()         // sum(R)\r\nR.rowwise().sum()         // sum(R, 2) or sum(R')'\r\nR.prod()                  // prod(R(:))\r\nR.colwise().prod()        // prod(R)\r\nR.rowwise().prod()        // prod(R, 2) or prod(R')'\r\nR.trace()                 // trace(R)\r\nR.all()                   // all(R(:))\r\nR.colwise().all()         // all(R)\r\nR.rowwise().all()         // all(R, 2)\r\nR.any()                   // any(R(:))\r\nR.colwise().any()         // any(R)\r\nR.rowwise().any()         // any(R, 2)\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u70b9\u79ef\u8303\u6570\u7b49",children:"\u70b9\u79ef\u3001\u8303\u6570\u7b49"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-Cpp",children:"// Dot products, norms, etc.\r\n// Eigen                  // Matlab\r\nx.norm()                  // norm(x).    Note that norm(R) doesn't work in Eigen.\r\nx.squaredNorm()           // dot(x, x)   Note the equivalence is not true for complex\r\nx.dot(y)                  // dot(x, y)\r\nx.cross(y)                // cross(x, y) Requires #include <Eigen/Geometry>\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u683c\u5f0f\u8f6c\u6362",children:"\u683c\u5f0f\u8f6c\u6362"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-Cpp",children:"//// Type conversion\r\n// Eigen                  // Matlab\r\nA.cast<double>();         // double(A)\r\nA.cast<float>();          // single(A)\r\nA.cast<int>();            // int32(A)\r\nA.real();                 // real(A)\r\nA.imag();                 // imag(A)\r\n// if the original type equals destination type, no work is done\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-Cpp",children:"// Note that for most operations Eigen requires all operands to have the same type:\r\nMatrixXf F = MatrixXf::Zero(3,3);\r\nA += F;                // illegal in Eigen. In Matlab A = A+F is allowed\r\nA += F.cast<double>(); // F converted to double and then added (generally, conversion happens on-the-fly)\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u6570\u7ec4\u4e0eeigen\u77e9\u9635\u7684\u5173\u8054",children:"\u6570\u7ec4\u4e0eEigen\u77e9\u9635\u7684\u5173\u8054"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-Cpp",children:"// Eigen can map existing memory into Eigen matrices.\r\nfloat array[3];\r\nVector3f::Map(array).fill(10);            // create a temporary Map over array and sets entries to 10\r\nint data[4] = {1, 2, 3, 4};\r\nMatrix2i mat2x2(data);                    // copies data into mat2x2\r\nMatrix2i::Map(data) = 2*mat2x2;           // overwrite elements of data with 2*mat2x2\r\nMatrixXi::Map(data, 2, 2) += mat2x2;      // adds mat2x2 to elements of data (alternative syntax if size is not know at compile time)\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-Cpp",children:"// Solve Ax = b. Result stored in x. Matlab: x = A \\ b.\r\nx = A.ldlt().solve(b));  // A sym. p.s.d.    #include <Eigen/Cholesky>\r\nx = A.llt() .solve(b));  // A sym. p.d.      #include <Eigen/Cholesky>\r\nx = A.lu()  .solve(b));  // Stable and fast. #include <Eigen/LU>\r\nx = A.qr()  .solve(b));  // No pivoting.     #include <Eigen/QR>\r\nx = A.svd() .solve(b));  // Stable, slowest. #include <Eigen/SVD>\r\n// .ldlt() -> .matrixL() and .matrixD()\r\n// .llt()  -> .matrixL()\r\n// .lu()   -> .matrixL() and .matrixU()\r\n// .qr()   -> .matrixQ() and .matrixR()\r\n// .svd()  -> .matrixU(), .singularValues(), and .matrixV()\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u7279\u5f81\u503c\u95ee\u9898",children:"\u7279\u5f81\u503c\u95ee\u9898"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-Cpp",children:"// Eigenvalue problems\r\n// Eigen                          // Matlab\r\nA.eigenvalues();                  // eig(A);\r\nEigenSolver<Matrix3d> eig(A);     // [vec val] = eig(A)\r\neig.eigenvalues();                // diag(val)\r\neig.eigenvectors();               // vec\r\n// For self-adjoint matrices use SelfAdjointEigenSolver<>\n"})})]})}function m(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(d,{...s})}):d(s)}},28453:(s,e,n)=>{n.d(e,{R:()=>i,x:()=>t});var r=n(96540);const a={},l=r.createContext(a);function i(s){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(a):s.components||a:i(s.components),r.createElement(l.Provider,{value:e},s.children)}}}]);