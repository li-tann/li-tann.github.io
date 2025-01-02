"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2665],{26650:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"code/python/utils","title":"utils","description":"\u904d\u5386\u641c\u7d22\u5173\u952e\u5b57","source":"@site/docs/code/python/utils.md","sourceDirName":"code/python","slug":"/code/python/utils","permalink":"/docs/code/python/utils","draft":false,"unlisted":false,"editUrl":null,"tags":[{"inline":true,"label":"Python","permalink":"/docs/tags/python"}],"version":"current","lastUpdatedBy":"li-tann","lastUpdatedAt":1735780614000,"frontMatter":{"title":"utils","custom_edit_url":null,"last_update":{"author":"li-tann"},"tags":["Python"]},"sidebar":"code","previous":{"title":"ftp","permalink":"/docs/code/python/sftp"},"next":{"title":"CUDA","permalink":"/docs/category/cuda"}}');var o=t(74848),s=t(28453);const i={title:"utils",custom_edit_url:null,last_update:{author:"li-tann"},tags:["Python"]},a=void 0,l={},c=[{value:"\u904d\u5386\u641c\u7d22\u5173\u952e\u5b57",id:"\u904d\u5386\u641c\u7d22\u5173\u952e\u5b57",level:2},{value:"\u6b63\u5219\u7b5b\u9009\u6587\u4ef6\u540d",id:"\u6b63\u5219\u7b5b\u9009\u6587\u4ef6\u540d",level:2},{value:"\u83b7\u53d6\u8ba1\u7b97\u673a\u540d",id:"\u83b7\u53d6\u8ba1\u7b97\u673a\u540d",level:2}];function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u904d\u5386\u641c\u7d22\u5173\u952e\u5b57",children:"\u904d\u5386\u641c\u7d22\u5173\u952e\u5b57"}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u6307\u5b9a\u5730\u5740\u5185\uff0c\u641c\u7d22\u5173\u952e\u5b57"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import os\r\n\r\ndef search_files(path, keyword):\r\n    for root, dirs, files in os.walk(path):\r\n        for name in files:\r\n            file_path = os.path.join(root, name)\r\n            try:\r\n                with open(file_path, encoding=\'utf-8\') as f:\r\n                    if keyword in f.read():\r\n                        print(file_path + " has keyword")\r\n            except:\r\n                print("open failed:" + file_path)\r\n                pass\r\n\r\n# \u4ece\u6587\u4ef6\u5939\u4e2d\u641c\u7d22\u6587\u4ef6\u5185\u5185\u90e8\u542b\u6709\u2018datum_shift\u2019\u5b57\u6bb5\u7684\u6587\u4ef6\r\nsearch_files("./GAMMA_SOFTWARE-20100103", \'datum_shift\')\n'})}),"\n",(0,o.jsx)(n.h2,{id:"\u6b63\u5219\u7b5b\u9009\u6587\u4ef6\u540d",children:"\u6b63\u5219\u7b5b\u9009\u6587\u4ef6\u540d"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import os\r\nimport re\r\n\r\ndef filter_files_baseon_regex(root, regex):\r\n    filterd_fileapths=[]\r\n    rgx = re.compile(regex)\r\n    for root, dirs, files in os.walk(root):\r\n        for name in files:\r\n            file_path = os.path.join(root, name)\r\n            match_obj=re.findall(rgx,name)\r\n            if match_obj:\r\n                filterd_fileapths.append(name)\r\n    return filterd_fileapths\r\n\r\n# \u4ece\u5f88\u591a*.shp, *.shx, *.prj, *.dbf\u6587\u4ef6\u4e2d\u63d0\u53d6\u6240\u6709\u7684*.shp\u6587\u4ef6\r\nf = filter_files_baseon_regex("./shp/",".*shp$")\n'})}),"\n",(0,o.jsx)(n.h2,{id:"\u83b7\u53d6\u8ba1\u7b97\u673a\u540d",children:"\u83b7\u53d6\u8ba1\u7b97\u673a\u540d"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"import ctypes\r\n\r\ndef getComputerName():\r\n    pcName = ctypes.c_char_p(''.encode('utf-8'))\r\n    pcSize = 16\r\n    pcName = ctypes.cast(pcName, ctypes.c_char_p)\r\n    try:\r\n        ctypes.windll.kernel32.GetComputerNameA(pcName, ctypes.byref(ctypes.c_int(pcSize)))\r\n    except Exception:\r\n        print(\"Sth wrong in getname!\")\r\n    print(pcName.value.decode('utf-8'))\r\n    return pcName.value.decode('utf-8')\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(96540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);