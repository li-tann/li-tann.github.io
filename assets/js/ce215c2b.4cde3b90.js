"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3038],{594:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var a=n(5893),l=n(1151);const r={sidebar_position:1,custom_edit_url:null},t="Std based Funs",i={id:"code/cpp/std_based_funs",title:"Std based Funs",description:"\u8bfb\u53d6\u4e8c\u8fdb\u5236float\u6570\u636e",source:"@site/docs/code/cpp/std_based_funs.md",sourceDirName:"code/cpp",slug:"/code/cpp/std_based_funs",permalink:"/docs/code/cpp/std_based_funs",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,custom_edit_url:null},sidebar:"code",previous:{title:"Cpp",permalink:"/docs/category/cpp"},next:{title:"Std",permalink:"/docs/code/cpp/std"}},c={},m=[{value:"\u8bfb\u53d6\u4e8c\u8fdb\u5236float\u6570\u636e",id:"\u8bfb\u53d6\u4e8c\u8fdb\u5236float\u6570\u636e",level:2},{value:"\u6839\u636e\u6307\u5b9a\u6807\u8bc6\u7b26\u5206\u5272\u5b57\u7b26\u4e32",id:"\u6839\u636e\u6307\u5b9a\u6807\u8bc6\u7b26\u5206\u5272\u5b57\u7b26\u4e32",level:2},{value:"2^n\u68c0\u6d4b\u65b9\u6cd5",id:"2n\u68c0\u6d4b\u65b9\u6cd5",level:2},{value:"\u8ba1\u7b97\u6570\u7ec4\u957f\u5ea6",id:"\u8ba1\u7b97\u6570\u7ec4\u957f\u5ea6",level:2}];function d(s){const e={annotation:"annotation",code:"code",h1:"h1",h2:"h2",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",mstyle:"mstyle",msup:"msup",mtable:"mtable",mtd:"mtd",mtr:"mtr",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,l.a)(),...s.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"std-based-funs",children:"Std based Funs"}),"\n",(0,a.jsx)(e.h2,{id:"\u8bfb\u53d6\u4e8c\u8fdb\u5236float\u6570\u636e",children:"\u8bfb\u53d6\u4e8c\u8fdb\u5236float\u6570\u636e"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-C++",children:'bool slcRead(const char *src,float *fReal, float *fImag)\r\n{\r\n    ifstream inFile(src, ifstream::binary); //\u4e8c\u8fdb\u5236\u8bfb\u65b9\u5f0f\u6253\u5f00\r\n    if (!inFile) {\r\n        printf("ERROR: File open failed...\\nFilepath is %s",string(src));\r\n        return false;\r\n    }\r\n    bool bReal = true;\r\n    int num = 0;\r\n    unsigned int value2;\r\n    while (inFile.read((char*)&value2, 4)) { //\u4e00\u76f4\u8bfb\u5230\u6587\u4ef6\u7ed3\u675f\r\n        //\u9ad8\u4f4e\u4f4d\u5b57\u8282\u53d8\u6362\r\n        unsigned int idata1, idata2, idata3, idata4;\r\n        idata1 = 255 & (value2 >> 24);\r\n        idata2 = 255 & (value2 >> 16);\r\n        idata3 = 255 & (value2 >> 8);\r\n        idata4 = 255 & value2;\r\n        char str[9];\r\n        sprintf(str, "%02x%02x%02x%02x", idata4, idata3, idata2, idata1);\r\n        str[8] = 0;\r\n        float a;\r\n        sscanf(str, "%x", &a);\r\n        //\u5206\u522b\u5b58\u50a8\u5230fReal\u548cfImag\u4e2d\r\n        if (bReal) {\r\n            fReal[num] = a;\r\n            bReal = false;\r\n            //printf("%d:real %f,\\t", num2, a);\r\n        }\r\n        else {\r\n            fImag[num] = a;\r\n            bReal = true;\r\n            num++;\r\n            //printf("imag %f\\n", a);\r\n        }\r\n    }\r\n    return true;\r\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"\u6839\u636e\u6307\u5b9a\u6807\u8bc6\u7b26\u5206\u5272\u5b57\u7b26\u4e32",children:"\u6839\u636e\u6307\u5b9a\u6807\u8bc6\u7b26\u5206\u5272\u5b57\u7b26\u4e32"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"void strSplit_ver2(std::string input, std::vector<std::string>& output, std::string split, bool clearVector = true)\r\n{\r\n    if(clearVector)\r\n        output.clear();\r\n    std::string::size_type pos1, pos2;\r\n    pos1 = input.find_first_not_of(split);\r\n    pos2 = input.find(split,pos1);\r\n\r\n    if (pos1 == std::string::npos) {\r\n        return;\r\n    }\r\n    if (pos2 == std::string::npos) {\r\n        output.push_back(input.substr(pos1));\r\n        return;\r\n    }\r\n    output.push_back(input.substr(pos1, pos2 - pos1));\r\n    strSplit_ver2(input.substr(pos2 + 1), output, split,false);\r\n    \r\n}\n"})}),"\n",(0,a.jsxs)(e.h2,{id:"2n\u68c0\u6d4b\u65b9\u6cd5",children:[(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mn,{children:"2"}),(0,a.jsx)(e.mi,{children:"n"})]})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"2^n"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6644em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord",children:"2"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.6644em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]})]})})]}),"\u68c0\u6d4b\u65b9\u6cd5"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"bool check_2n(uint x)\r\n{\r\n    if(x == 0)\r\n        return false;\r\n    int y = x&(x-1);\r\n    if(y==0)\r\n        return true;\r\n    return false;\r\n}\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u539f\u7406:"}),"\n",(0,a.jsx)(e.span,{className:"katex-display",children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsxs)(e.mtable,{rowspacing:"0.16em",columnalign:"center center",columnspacing:"1em",children:[(0,a.jsxs)(e.mtr,{children:[(0,a.jsx)(e.mtd,{children:(0,a.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mn,{children:"2"}),(0,a.jsx)(e.mn,{children:"4"})]})})}),(0,a.jsx)(e.mtd,{children:(0,a.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mn,{children:"001000"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]})})})]}),(0,a.jsxs)(e.mtr,{children:[(0,a.jsx)(e.mtd,{children:(0,a.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,a.jsx)(e.mrow,{})})}),(0,a.jsx)(e.mtd,{children:(0,a.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,a.jsx)(e.mi,{mathvariant:"normal",children:"&"})})})]}),(0,a.jsxs)(e.mtr,{children:[(0,a.jsx)(e.mtd,{children:(0,a.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,a.jsxs)(e.mrow,{children:[(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mn,{children:"2"}),(0,a.jsx)(e.mn,{children:"4"})]}),(0,a.jsx)(e.mo,{children:"\u2212"}),(0,a.jsx)(e.mn,{children:"1"})]})})}),(0,a.jsx)(e.mtd,{children:(0,a.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mn,{children:"000111"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]})})})]})]}),(0,a.jsx)(e.mo,{children:"\u21d2"}),(0,a.jsx)(e.mn,{children:"0"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mn,{children:"000000"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\begin{matrix}\n    2^4&(001000) \\\\ &\\& \\\\ 2^4-1&(000111)\n\\end{matrix}\n\\rArr\n0(000000)"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"3.6em",verticalAlign:"-1.55em"}}),(0,a.jsx)(e.span,{className:"mord",children:(0,a.jsxs)(e.span,{className:"mtable",children:[(0,a.jsx)(e.span,{className:"col-align-c",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsxs)(e.span,{className:"vlist",style:{height:"2.05em"},children:[(0,a.jsxs)(e.span,{style:{top:"-4.21em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"mord",children:(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord",children:"2"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"4"})})]})})})})})]})})]}),(0,a.jsxs)(e.span,{style:{top:"-3.01em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"mord"})]}),(0,a.jsxs)(e.span,{style:{top:"-1.81em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord",children:"2"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"4"})})]})})})})})]}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mord",children:"1"})]})]})]}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"1.55em"},children:(0,a.jsx)(e.span,{})})})]})}),(0,a.jsx)(e.span,{className:"arraycolsep",style:{width:"0.5em"}}),(0,a.jsx)(e.span,{className:"arraycolsep",style:{width:"0.5em"}}),(0,a.jsx)(e.span,{className:"col-align-c",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsxs)(e.span,{className:"vlist",style:{height:"2.05em"},children:[(0,a.jsxs)(e.span,{style:{top:"-4.21em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord",children:"001000"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})]}),(0,a.jsxs)(e.span,{style:{top:"-3.01em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"mord",children:(0,a.jsx)(e.span,{className:"mord",children:"&"})})]}),(0,a.jsxs)(e.span,{style:{top:"-1.81em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord",children:"000111"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})]})]}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"1.55em"},children:(0,a.jsx)(e.span,{})})})]})})]})}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"\u21d2"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord",children:"0"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord",children:"000000"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})]})]})}),"\n",(0,a.jsx)(e.h2,{id:"\u8ba1\u7b97\u6570\u7ec4\u957f\u5ea6",children:"\u8ba1\u7b97\u6570\u7ec4\u957f\u5ea6"}),"\n",(0,a.jsx)(e.p,{children:"\u52a8\u6001\u6570\u7ec4:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"size_t x = 20;\r\ndouble * arr = new double [x];\r\nstd::cout<<_msize(arr)/sizeof(*arr)<<std::endl;\r\n// cmd: 20\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u9759\u6001\u6570\u7ec4:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"double arr[15];\r\nstd::cout<<sizeof(arr)/sizeof(*arr)<<std::endl;\r\n// cmd: 15\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u68c0\u6d4b\u6570\u7ec4\u4e3a\u52a8\u6001\u6216\u9759\u6001\u7684\u65b9\u6cd5:"}),"\n",(0,a.jsx)(e.p,{children:"\u5982\u679c\u4f7f\u7528\u8ba1\u7b97\u52a8\u6001\u6570\u7ec4\u957f\u5ea6\u7684\u65b9\u5f0f\u8ba1\u7b97\u9759\u6001\u6570\u7ec4\u4f1a\u5bfc\u81f4\u5f02\u5e38\u62a5\u9519\uff08_msize\u95ee\u9898\uff09\uff0c\u800c\u7528\u8ba1\u7b97\u9759\u6001\u6570\u7ec4\u957f\u5ea6\u7684\u65b9\u5f0f\u8ba1\u7b97\u52a8\u6001\u6570\u7ec4\u5219\u4f1a\u8fd4\u56de0\uff08sizeof(arr_a) < sizeof(*arr_a), \u8fd4\u56de\u6574\u65700\uff09."})]})}function p(s={}){const{wrapper:e}={...(0,l.a)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(d,{...s})}):d(s)}},1151:(s,e,n)=>{n.d(e,{Z:()=>i,a:()=>t});var a=n(7294);const l={},r=a.createContext(l);function t(s){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function i(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:t(s.components),a.createElement(r.Provider,{value:e},s.children)}}}]);