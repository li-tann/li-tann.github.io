"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4174],{55:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var l=s(5893),a=s(1151);const r={title:"GAMMA",sidebar_position:0,custom_edit_url:null},c=void 0,i={id:"document/insar_software/gamma",title:"GAMMA",description:"\u73af\u5883\u914d\u7f6e",source:"@site/docs/document/insar_software/gamma.md",sourceDirName:"document/insar_software",slug:"/document/insar_software/gamma",permalink:"/docs/document/insar_software/gamma",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"GAMMA",sidebar_position:0,custom_edit_url:null},sidebar:"docs",previous:{title:"InSAR\u5de5\u5177\u5b66\u4e60",permalink:"/docs/category/insar\u5de5\u5177\u5b66\u4e60"},next:{title:"ISCE2",permalink:"/docs/document/insar_software/isce2"}},d={},o=[{value:"\u73af\u5883\u914d\u7f6e",id:"\u73af\u5883\u914d\u7f6e",level:2},{value:"\u6307\u4ee4\u5b66\u4e60",id:"\u6307\u4ee4\u5b66\u4e60",level:2},{value:"\u6570\u636e\u5bfc\u5165",id:"\u6570\u636e\u5bfc\u5165",level:3},{value:"ALOS/ALOS2",id:"alosalos2",level:4},{value:"\u914d\u51c6&gt;&gt;&gt;\u5e72\u6d89",id:"\u914d\u51c6\u5e72\u6d89",level:3},{value:"\u4e3b\u8f85\u5f71\u50cf\u914d\u51c6",id:"\u4e3b\u8f85\u5f71\u50cf\u914d\u51c6",level:4},{value:"\u8f85\u5f71\u50cf\u91cd\u91c7\u6837",id:"\u8f85\u5f71\u50cf\u91cd\u91c7\u6837",level:4},{value:"\u4e3b\u8f85\u5f71\u50cf\u5e72\u6d89",id:"\u4e3b\u8f85\u5f71\u50cf\u5e72\u6d89",level:4},{value:"\u751f\u6210DSM",id:"\u751f\u6210dsm",level:3},{value:"\u5730\u7406\u7f16\u7801",id:"\u5730\u7406\u7f16\u7801",level:3},{value:"\u5dee\u5206\u5e72\u6d89",id:"\u5dee\u5206\u5e72\u6d89",level:3}];function t(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u73af\u5883\u914d\u7f6e",children:"\u73af\u5883\u914d\u7f6e"}),"\n",(0,l.jsxs)(n.p,{children:["\u53c2\u8003",(0,l.jsx)(n.a,{href:"https://github.com/yunjunz/conda_envs",children:"yunjun's conda_envs"})," /gamma/README.md"]}),"\n",(0,l.jsx)(n.p,{children:"\u7b80\u8ff0\uff1a"}),"\n",(0,l.jsx)(n.p,{children:"1.\u901a\u8fc7conda\u6216mamba\u521b\u5efagamma\u73af\u5883"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"conda create --name gamma\r\nconda activate gamma\n"})}),"\n",(0,l.jsx)(n.p,{children:"2.\u4f7f\u7528requirements.txt\u4e00\u952e\u4e0b\u8f7dgamma\u4f9d\u8d56\u73af\u5883"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"mamba install --yes --file ~/tools/conda_envs/gamma/requirements.txt\n"})}),"\n",(0,l.jsx)(n.p,{children:"3.\u94fe\u63a5libgdal.so.20"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"ln -s ${CONDA_PREFIX}/lib/libgdal.so ${GAMMA_HOME}/lib/libgdal.so.20\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u6ce8: ",(0,l.jsx)(n.code,{children:"${CONDA_PREFIX}"}),", ",(0,l.jsx)(n.code,{children:"${GAMMA_HOME}"}),"\u7b49\u90fd\u5305\u542b\u5728config.rc\u6587\u4ef6\u4e2d\uff0c\u6240\u4ee5\u9700\u8981\u5148\u6267\u884c"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"source ~/tools/conda_envs/gamma/config.rc\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["4.\u901a\u8fc7",(0,l.jsx)(n.code,{children:"load_gamma"}),"\u6307\u4ee4\u5feb\u901f\u542f\u52a8gamma\u73af\u5883"]}),"\n",(0,l.jsx)(n.p,{children:"\u5728~/.bashrc\u6587\u4ef6\u4e2d\u6dfb\u52a0\u4e00\u884c\u6307\u4ee4\u5373\u53ef"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"alias load_gamma='conda activate gamma; source ~/tools/conda_envs/gamma/config.rc'\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u6700\u540e\u4f7f\u7528",(0,l.jsx)(n.code,{children:"source ~/.bashrc"}),"\u66f4\u65b0\u73af\u5883\u540e\uff0c\u5373\u53ef\u901a\u8fc7load_gamma\u5207\u6362\u5230gamma\u73af\u5883\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u6307\u4ee4\u5b66\u4e60",children:"\u6307\u4ee4\u5b66\u4e60"}),"\n",(0,l.jsx)(n.p,{children:"\u5217\u4e3e\u51e0\u79cd\u5e38\u89c1\u7684\u6570\u636e\u5904\u7406\u6d41\u7a0b\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u6570\u636e\u5bfc\u5165",children:"\u6570\u636e\u5bfc\u5165"}),"\n",(0,l.jsx)(n.h4,{id:"alosalos2",children:"ALOS/ALOS2"}),"\n",(0,l.jsxs)(n.p,{children:["ALOS/ALOS2 level 1.1 CEOS\u683c\u5f0f\u7684\u6570\u636e\u5bfc\u5165\u5f88\u7b80\u5355, \u8c03\u7528",(0,l.jsx)(n.code,{children:"par_EORC_PALSAR"}),"\u6307\u4ee4\u5373\u53ef\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'par_EORC_PALSAR <CEOS_leader> <SLC_par> <CEOS_data> [SLC]\r\n\r\n# <CEOS_leader> \u5bf9\u5e94\u5934\u6587\u4ef6, \u547d\u540d\u683c\u5f0f\u4e3aLED...\r\n# <SLC_par> \u8f6c\u6362\u540e\u7684\u53c2\u6570\u6587\u4ef6, \u901a\u5e38\u8bbe\u7f6e\u4e3a"date.slc.par"\r\n# <CEOS_data> \u5bf9\u5e94\u6570\u636e\u6587\u4ef6, \u547d\u540d\u683c\u5f0f\u4e3aIMG..., \u5b58\u5728IMG-HH\u548cIMG-HV\u4e24\u79cd\u6570\u636e, \u6839\u636e\u9700\u6c42\u9009\u62e9\u5176\u4e00\r\n# [SLC] \u8f6c\u6362\u540e\u7684\u6570\u636e\u6587\u4ef6, \u901a\u5e38\u8bbe\u7f6e\u4e3a"date.slc"\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u914d\u51c6\u5e72\u6d89",children:"\u914d\u51c6>>>\u5e72\u6d89"}),"\n",(0,l.jsx)(n.p,{children:"\u51c6\u5907\u597d\u4e00\u7ec4\u5e72\u6d89\u6570\u636e, \u5982master.slc, master.slc.par, slave.slc, slave.slc.par"}),"\n",(0,l.jsx)(n.h4,{id:"\u4e3b\u8f85\u5f71\u50cf\u914d\u51c6",children:"\u4e3b\u8f85\u5f71\u50cf\u914d\u51c6"}),"\n",(0,l.jsx)(n.p,{children:"\u9996\u5148\u9700\u8981\u5bf9\u4e3b\u8f85\u5f71\u50cf\u8fdb\u884c\u914d\u51c6, \u914d\u51c6\u6d41\u7a0b\u4e3a,"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u4f7f\u7528",(0,l.jsx)(n.code,{children:"create_offset"}),"\u6307\u4ee4, \u521b\u5efa\u4e3b\u8f85\u5f71\u50cf\u7684\u504f\u79fb\u91cf\u6587\u4ef6;"]}),"\n",(0,l.jsxs)(n.li,{children:["\u4f7f\u7528",(0,l.jsx)(n.code,{children:"init_offset_orbit"}),"\u6216",(0,l.jsx)(n.code,{children:"init_offset"}),"\u6307\u4ee4, \u8ba1\u7b97\u521d\u59cb\u504f\u79fb\u91cf(\u4ec5\u8ba1\u7b97\u5355\u70b9\u504f\u79fb\u91cf, \u83b7\u53d6\u504f\u79fb\u91cf\u7cfb\u6570\u7684\u5e38\u6570\u9879\u4fe1\u606f);"]}),"\n",(0,l.jsxs)(n.li,{children:["\u4f7f\u7528",(0,l.jsx)(n.code,{children:"offset_pwr"}),"\u6216",(0,l.jsx)(n.code,{children:"offset_SLC"}),"\u6307\u4ee4, \u8ba1\u7b97\u4e3b\u8f85\u5f71\u50cf\u540c\u540d\u70b9\u7684\u5750\u6807\u4fe1\u606f;"]}),"\n",(0,l.jsxs)(n.li,{children:["\u4f7f\u7528",(0,l.jsx)(n.code,{children:"offset_fit"}),"\u6307\u4ee4, \u57fa\u4e8e\u4e3b\u8f85\u5f71\u50cf\u540c\u540d\u70b9\u7684\u5750\u6807\u4fe1\u606f\u8fdb\u884c\u591a\u9879\u5f0f\u62df\u5408, \u5f97\u5230\u4e3b\u8f85\u5f71\u50cf\u7684\u504f\u79fb\u91cf\u7684\u591a\u9879\u5f0f\u7cfb\u6570"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"create_offset <SLC1_par> <SLC2_par> <OFF_par> [algorithm] [rlks] [azlks] [iflg]\r\n\r\n# <SLC1_par> \r\n# <SLC2_par>\r\n# <OFF_par>\r\n# [algorithm]\r\n# [rlks]\r\n# [azlks]\r\n# [iflg]\n"})}),"\n",(0,l.jsx)(n.p,{children:"create_offset\u6307\u4ee4\u8bf4\u660e"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"init_offset_orbit\n"})}),"\n",(0,l.jsx)(n.p,{children:"init_offset_orbit\u6307\u4ee4\u8bf4\u660e"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"offset_pwr\n"})}),"\n",(0,l.jsx)(n.p,{children:"offset_pwr\u6307\u4ee4\u8bf4\u660e"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"offset_fit\n"})}),"\n",(0,l.jsx)(n.p,{children:"offset_fit\u6307\u4ee4\u8bf4\u660e"}),"\n",(0,l.jsxs)(n.p,{children:["\u901a\u8fc7",(0,l.jsx)(n.code,{children:"grep poly mas-sla.off"}),"\u53ef\u4ee5\u5feb\u901f\u67e5\u770b\u914d\u51c6\u504f\u79fb\u91cf\u7684\u591a\u9879\u5f0f\u7cfb\u6570"]}),"\n",(0,l.jsx)(n.h4,{id:"\u8f85\u5f71\u50cf\u91cd\u91c7\u6837",children:"\u8f85\u5f71\u50cf\u91cd\u91c7\u6837"}),"\n",(0,l.jsx)(n.h4,{id:"\u4e3b\u8f85\u5f71\u50cf\u5e72\u6d89",children:"\u4e3b\u8f85\u5f71\u50cf\u5e72\u6d89"}),"\n",(0,l.jsx)(n.p,{children:"(\u5e72\u6d89\u5b8c\u8bb0\u7740\u591a\u89c6)"}),"\n",(0,l.jsx)(n.h3,{id:"\u751f\u6210dsm",children:"\u751f\u6210DSM"}),"\n",(0,l.jsx)(n.p,{children:"\u53bb\u5e73\u5730\u3001\u6ee4\u6ce2\u3001\u89e3\u7f20\u3001\u76f8\u9ad8\u8f6c\u6362\u7b49"}),"\n",(0,l.jsx)(n.h3,{id:"\u5730\u7406\u7f16\u7801",children:"\u5730\u7406\u7f16\u7801"}),"\n",(0,l.jsx)(n.p,{children:"create_dem_par, replace_values, interp_ad, gc_map, geocode, create_diff_par, init_offsetm, offset_pwrm, offset_fitm, gc_map_fine, geocode_back\u7b49\u7b49"}),"\n",(0,l.jsx)(n.h3,{id:"\u5dee\u5206\u5e72\u6d89",children:"\u5dee\u5206\u5e72\u6d89"}),"\n",(0,l.jsx)(n.p,{children:"\u4ecb\u7ecd\u53bb\u9664\u5730\u5f62\u76f8\u4f4d\u540e\u89e3\u7f20\u4ee5\u53ca \u89e3\u7f20\u540e\u518d\u53bb\u9664\u5730\u5f62\u76f8\u4f4d\u7b49\u65b9\u6cd5"})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>c});var l=s(7294);const a={},r=l.createContext(a);function c(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);