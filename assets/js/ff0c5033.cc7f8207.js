"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1101],{57453:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"code/python/sftp","title":"ftp","description":"paramiko","source":"@site/docs/code/python/sftp.md","sourceDirName":"code/python","slug":"/code/python/sftp","permalink":"/docs/code/python/sftp","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","lastUpdatedBy":"litan_thinkPad","lastUpdatedAt":1704438721000,"frontMatter":{"title":"ftp","custom_edit_url":null},"sidebar":"code","previous":{"title":"packages","permalink":"/docs/code/python/packages"},"next":{"title":"utils","permalink":"/docs/code/python/utils"}}');var o=n(74848),s=n(28453);const a={title:"ftp",custom_edit_url:null},i=void 0,c={},p=[{value:"paramiko",id:"paramiko",level:2}];function d(t){const e={code:"code",h2:"h2",pre:"pre",...(0,s.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"paramiko",children:"paramiko"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'import paramiko\r\n\r\nHostname = "172.1.0.0"\r\npost = 21\r\nUsername = "usrnm"\r\nPassword = "pswd"\r\n\r\nclient = paramiko.Transport((Hostname,post))\r\nclient.connect( username=Username,password=Password)\r\nsftp = paramiko.SFTPClient.from_transport(client)\r\n\r\nsftp.chdir("/home/share_file/")\r\ndirectory_structure = sftp.listdir_attr()\r\n\r\n# Print data\r\nfor attr in directory_structure:\r\n    print(attr.filename, attr)\r\n\r\n# ......\r\n\n'})})]})}function l(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>a,x:()=>i});var r=n(96540);const o={},s=r.createContext(o);function a(t){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:a(t.components),r.createElement(s.Provider,{value:e},t.children)}}}]);