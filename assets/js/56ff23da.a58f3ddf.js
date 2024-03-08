"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6007],{9370:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var t=s(5893),l=s(1151);const i={title:"packages",custom_edit_url:null},r=void 0,o={id:"code/python/packages",title:"packages",description:"elevation",source:"@site/docs/code/python/packages.md",sourceDirName:"code/python",slug:"/code/python/packages",permalink:"/docs/code/python/packages",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"packages",custom_edit_url:null},sidebar:"code",previous:{title:"Python",permalink:"/docs/category/python"},next:{title:"ftp",permalink:"/docs/code/python/sftp"}},c={},a=[{value:"elevation",id:"elevation",level:2},{value:"sentineleof",id:"sentineleof",level:2}];function d(e){const n={blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"elevation",children:"elevation"}),"\n",(0,t.jsx)(n.p,{children:"DEM\u4e0b\u8f7d\u5de5\u5177 (\u9700\u8981\u6709GNU make)"}),"\n",(0,t.jsx)(n.p,{children:"\u5b89\u88c5: pip install elevation"}),"\n",(0,t.jsx)(n.p,{children:"\u4e0b\u8f7d\u6570\u636e:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"eio clip -o name.tif --bounds left down right top\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u53ef\u9009\u7684\u4e0b\u8f7d\u6570\u636e\u7c7b\u578b:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"eio --product [SRTM1|SRTM3|SRTM1_ELLIP] clip -o name.tif --bounds left down right top\n"})}),"\n",(0,t.jsx)(n.p,{children:"clip\u6307\u4ee4\u7684\u81ea\u9009\u9879:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"-o, --output PATH     DEM\u7684\u5730\u5740, \u9ed8\u8ba4\u503c\u4e3a\u201cout.tif\u201d, \u5df2\u5b58\u5728\u6587\u4ef6\u4f1a\u88ab\u8986\u76d6"}),"\n",(0,t.jsx)(n.li,{children:"--bounds FLOAT...     DEM\u7684\u8303\u56f4, \u987a\u5e8f\u4e3a\u5de6, \u4e0b, \u53f3, \u4e0a"}),"\n",(0,t.jsx)(n.li,{children:"-m, --margin TEXT     Decimal degree margin added to the bounds. Use '%' for percent margin.  [default: 0]"}),"\n",(0,t.jsx)(n.li,{children:"-r, --reference TEXT  \u4f7f\u7528GDAL/OGR\u7684\u6570\u636e\u7684\u8303\u56f4\u4ee3\u66ffbounds\u7684\u8fb9\u754c"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"sentineleof",children:"sentineleof"}),"\n",(0,t.jsx)(n.p,{children:"Tool to download Sentinel 1 precise/restituted orbit files (.EOF files) for processing SLCs"}),"\n",(0,t.jsx)(n.p,{children:"\u4e0b\u8f7dSentinel-1\u7684EOF\u7cbe\u8f68\u6570\u636e"}),"\n",(0,t.jsx)(n.p,{children:"\u524d\u7f6e\u8bbe\u7f6e"}),"\n",(0,t.jsx)(n.p,{children:"\u5728~/.netrc\u6587\u4ef6\u4e2d\u6dfb\u52a0CDSE\u6216Earthdata\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u4e0b\u8f7d\u6570\u636e\u65f6\u4f7f\u7528"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"machine dataspace.copernicus.eu\r\n  login MYUSERNAME\r\n  password MYPASSWORD\r\n\r\nmachine urs.earthdata.nasa.gov\r\n  login MYUSERNAME\r\n  password MYPASSWORD\n"})}),"\n",(0,t.jsx)(n.p,{children:"(\u786e\u8ba4.netrc\u6587\u4ef6\u7684\u6743\u9650\u662f600, \u5426\u5219\u6267\u884c\u811a\u672c\u65f6\u4f1a\u62a5\u9519)"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"netrc_error",src:s(9126).Z+"",width:"1475",height:"256"})}),"\n",(0,t.jsx)(n.p,{children:"1.\u4e0b\u8f7d\u672c\u5730sentinel-1\u6570\u636e\u5bf9\u5e94\u7684\u7cbe\u8f68\u6570\u636e"}),"\n",(0,t.jsx)(n.p,{children:"\u5c06\u5f53\u524d\u5730\u5740\u5207\u6362\u5230sentinel-1\u6587\u4ef6\u6240\u5728\u76ee\u5f55\u4e0b\uff0c\u6267\u884c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"eof\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5373\u53ef\u4e0b\u8f7dsentinel-1\u6570\u636e\u5bf9\u5e94\u7684eof\u6587\u4ef6"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"eof\u652f\u6301\u538b\u7f29\u7684zip\u6587\u4ef6\u4ee5\u53ca\u89e3\u538b\u7f29\u7684SAFE folders\u4e24\u79cd\u683c\u5f0f"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"2.\u6307\u5b9a\u7cbe\u8f68\u6570\u636e\u4e0b\u8f7d"}),"\n",(0,t.jsx)(n.p,{children:"eof\u4e5f\u53ef\u4ee5\u6307\u5b9a\u641c\u7d22\u8def\u5f84\u548c\u8f93\u51fa\u8def\u5f84, \u6267\u884c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"eof --search-path /path/to/safe_files/ --save-dir ./orbits/\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4f1a\u68c0\u7d22",(0,t.jsx)(n.code,{children:"/path/to/safe_files/"}),"\u5730\u5740\u4e0b\u7684sentinel-1\u6570\u636e, \u4e0b\u8f7d\u5bf9\u5e94\u7684EOF\u7cbe\u8f68\u6587\u4ef6, \u4fdd\u5b58\u5230",(0,t.jsx)(n.code,{children:"./orbits/"}),"\u5730\u5740\u4e0b(\u5982\u679c\u6587\u4ef6\u4e0d\u5b58\u5728\u5219\u4f1a\u521b\u5efa)\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},9126:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/netrc_error-99aca88b5e9dad53b1bb5e1dab1c1023.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>r});var t=s(7294);const l={},i=t.createContext(l);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);