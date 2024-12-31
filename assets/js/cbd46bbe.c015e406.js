"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3203],{39685:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>a});const l=JSON.parse('{"id":"code/cpp_qt/qmake_syntax","title":"qmake\u8bed\u6cd5\uff08pro\u6587\u4ef6\u5199\u6cd5\uff09","description":"qmake\u8bed\u6cd5","source":"@site/docs/code/cpp_qt/qmake_syntax.md","sourceDirName":"code/cpp_qt","slug":"/code/cpp_qt/qmake_syntax","permalink":"/docs/code/cpp_qt/qmake_syntax","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","lastUpdatedBy":"litan_thinkPad","lastUpdatedAt":1704438721000,"frontMatter":{"custom_edit_url":null},"sidebar":"code","previous":{"title":"QGraphics","permalink":"/docs/code/cpp_qt/qgraphics"},"next":{"title":"QComboBox","permalink":"/docs/code/cpp_qt/qtwidgets_combobox"}}');var c=r(74848),s=r(28453);const d={custom_edit_url:null},i="qmake\u8bed\u6cd5\uff08pro\u6587\u4ef6\u5199\u6cd5\uff09",o={},a=[{value:"\u751f\u6210\u6587\u4ef6\u56fe\u6807\u8bbe\u7f6e",id:"\u751f\u6210\u6587\u4ef6\u56fe\u6807\u8bbe\u7f6e",level:2},{value:"\u4e2d\u95f4\u6587\u4ef6\u751f\u6210\u8def\u5f84",id:"\u4e2d\u95f4\u6587\u4ef6\u751f\u6210\u8def\u5f84",level:2},{value:"QMAKE_CXXFLAGS",id:"qmake_cxxflags",level:2},{value:"stdlib.h no such file or directory",id:"stdlibh-no-such-file-or-directory",level:2},{value:"COPY",id:"copy",level:2},{value:"QMAKE_PRE_LINK",id:"qmake_pre_link",level:3},{value:"COPIES",id:"copies",level:3}];function t(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"qmake\u8bed\u6cd5pro\u6587\u4ef6\u5199\u6cd5",children:"qmake\u8bed\u6cd5\uff08pro\u6587\u4ef6\u5199\u6cd5\uff09"})}),"\n",(0,c.jsx)(n.p,{children:"qmake\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.h2,{id:"\u751f\u6210\u6587\u4ef6\u56fe\u6807\u8bbe\u7f6e",children:"\u751f\u6210\u6587\u4ef6\u56fe\u6807\u8bbe\u7f6e"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-qmake",children:"RC_FILE += res_widget.rc\r\nRC_ICONS += SARBOX_BLUE_512.ico\n"})}),"\n",(0,c.jsx)(n.p,{children:"rc\u6587\u4ef6\u5185\u5bb9\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-rc",children:'IDI_ICON   ICON    DISCARDABLE     ".\\\\icon\\\\SARBOX_BLUE_512.ico"\n'})}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"\u521b\u5efa*.rc\u6587\u4ef6\uff0c\u5199\u660e\u56fe\u6807\u6240\u5728\u8def\u5f84\uff08\u76f8\u5bf9\u8def\u5f84\u5373\u53ef\uff09"}),"\n",(0,c.jsxs)(n.li,{children:["qmake\u4e2d\u6dfb\u52a0\u5982\u4e0a\u6240\u793a\u7684",(0,c.jsx)(n.code,{children:"RC_FILE"}),"\u548c",(0,c.jsx)(n.code,{children:"RC_ICONS"}),"\u4e24\u884c\u4ee3\u7801\uff0c\u6267\u884cqmake\r\n*\uff1a\u6709\u65f6\u4e00\u6b21\u6267\u884cqmake\u540e\u65b0\u751f\u6210\u7684\u6587\u4ef6\u4ecd\u7136\u4e0d\u5e26\u56fe\u6807\uff0c\u9700\u8981\u591a\u6b21\u5c1d\u8bd5..."]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u4e2d\u95f4\u6587\u4ef6\u751f\u6210\u8def\u5f84",children:"\u4e2d\u95f4\u6587\u4ef6\u751f\u6210\u8def\u5f84"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-qmake",children:"CONFIG(debug, debug|release){\r\n    DESTDIR =       $$PWD/../../bin/debug\r\n    UI_DIR =        ./debug/UI\r\n    MOC_DIR =       ./debug/MOC\r\n    OBJECTS_DIR =   ./debug/OBJ\r\n}else{\r\n    DESTDIR =       $$PWD/../../bin/release\r\n    UI_DIR =        ./release/UI\r\n    MOC_DIR =       ./release/MOC\r\n    OBJECTS_DIR =   ./release/OBJ\r\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"DESTDIR"}),"\u4e3a\u751f\u6210\u6587\u4ef6\u8def\u5f84\uff08exe\u3001dll\u7b49\u6587\u4ef6\uff09\uff0c",(0,c.jsx)(n.code,{children:"UI_DIR"}),"\u662f\u53c8*.ui\u81ea\u52a8\u751f\u6210\u7684ui_",(0,c.jsxs)(n.em,{children:[".h\u6587\u4ef6\u7684\u8def\u5f84\uff0c",(0,c.jsx)(n.code,{children:"MOC_DIR"}),"\u662f\u81ea\u52a8\u751f\u6210\u7684\u5b58\u653e\u6307\u9488\u548c\u69fd\u51fd\u6570\u7684moc_"]}),".h\u6587\u4ef6\u7684\u8def\u5f84\uff0c",(0,c.jsx)(n.code,{children:"OBJECTS_DIR"}),"\u662f\u5404\u4e2a.cpp\u751f\u6210\u7684\u4e2d\u95f4\u6587\u4ef6*.o\u7684\u8def\u5f84"]}),"\n",(0,c.jsx)(n.h2,{id:"qmake_cxxflags",children:"QMAKE_CXXFLAGS"}),"\n",(0,c.jsx)(n.p,{children:"\u5c06\u6240\u6709\u7684\u8b66\u544a\u5f53\u6210\u9519\u8bef\u5904\u7406"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-qmake",children:"QMAKE_CXXFLAGS += -Werror = return-type //\u51fd\u6570\u6709\u8fd4\u56de\u503c\r\nQMAKE_CXXFLAGS += -Werror = return-local-addr //\u8fd4\u56de\u5c40\u90e8\u53d8\u91cf\u5730\u5740\r\nQMAKE_CXXFLAGS += -Werror = missing-field-initializers //\u7f3a\u5c11\u521d\u59cb\u503c\u8bbe\u5b9a\u9879\r\nQMAKE_CXXFLAGS += -Werror = maybe-uninitialized //\u53d8\u91cf\u53ef\u80fd\u6ca1\u6709\u88ab\u521d\u59cb\u5316\r\nQMAKE_CXXFLAGS += -Werror = delete-non-virtual-dtor //\r\nQMAKE_CXXFLAGS += -Werror = unused-but-set-variable //\u8bbe\u7f6e\u4e86\u4f46\u672a\u4f7f\u7528\u7684\u53d8\u91cf\r\nQMAKE_CXXFLAGS += -Werror = parentheses //\u62ec\u53f7\u4e0d\u5339\u914d\r\nQMAKE_CXXFLAGS += -Werror = pointer-arith //\u6307\u9488\u7528\u5728\u4e86\u7b97\u672f\u8fd0\u7b97\r\nQMAKE_CXXFLAGS += -Werror = reorder //\u8b66\u544a\u6784\u9020\u51fd\u6570\u7684\u987a\u5e8f\u4e0d\u4f1a\u88ab\u4f7f\u7528\r\nQMAKE_CXXFLAGS += -Werror = format-extra-args //\u683c\u5f0f\u4e0d\u5bf9\r\nQMAKE_CXXFLAGS += -Werror = format= //\u683c\u5f0f\u4e0d\u5bf9\r\nQMAKE_CXXFLAGS += -Werror = unused-variable //\u672a\u4f7f\u7528\u7684\u53d8\u91cf\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5ffd\u7565\u8be5\u8b66\u544a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-qmake",children:"QMAKE_CXXFLAGS += -Wno-unused-function //\u672a\u4f7f\u7528\u7684\u51fd\u6570\r\nQMAKE_CXXFLAGS += -Wno-unused-parameter //\u8bbe\u7f6e\u4e86\u4f46\u672a\u4f7f\u7528\u7684\u53c2\u6570\r\nQMAKE_CXXFLAGS += -Wno-comment //\u6ce8\u91ca\u4f7f\u7528\u4e0d\u89c4\u8303\u3002\r\nQMAKE_CXXFLAGS += -Wno-sequence-point //\u5982\u51fa\u73b0i=i++\u8fd9\u7c7b\u4ee3\u7801\uff0c\u5219\u62a5\u8b66\u544a\n"})}),"\n",(0,c.jsx)(n.h2,{id:"stdlibh-no-such-file-or-directory",children:"stdlib.h no such file or directory"}),"\n",(0,c.jsxs)(n.p,{children:["linux\u7f16\u7a0b\u65f6\uff0c\r\n",(0,c.jsx)(n.code,{children:"#include <QDialog>"}),"\u540e\uff0c\u901a\u8fc7\u591a\u7ea7include \uff0c\u6700\u540e\u5230\u8fbe",(0,c.jsx)(n.code,{children:"#include <cstdlib.h"}),">\u4e2d\uff0c"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728cstdlib.h\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"#include_next <stdlib.h>"}),"\u62a5\u9519\uff0c\u63d0\u793a\uff1a",(0,c.jsx)(n.code,{children:"no such file or directory"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://blog.csdn.net/xuleisdjn/article/details/108345311",children:"\u539f\u56e0\u53ca\u89e3\u51b3\u65b9\u6cd5(form csdn)"})}),"\n",(0,c.jsx)(n.p,{children:"\u539f\u56e0\uff1a\r\n\u8fd9\u662f\u7531\u4e8egcc7\u5df2\u7ecf\u5427stdlib.h\u7eb3\u5165\u4e86libstdc++\u4ee5\u8fdb\u884c\u66f4\u597d\u7684\u4f18\u5316\uff0cC Library\u7684\u5934\u6587\u4ef6stdlib.h\u4f7f\u7528 Include_next\uff0c\u800cinclude_next\u5bf9gcc\u7cfb\u7edf\u5934\u6587\u4ef6\u8def\u5f84\u5f88\u654f\u611f"}),"\n",(0,c.jsx)(n.p,{children:"\u89e3\u51b3\u65b9\u6cd5\uff1a"}),"\n",(0,c.jsx)(n.p,{children:"\u5728.pro\u6587\u4ef6\u4e2d\uff0c\u6dfb\u52a0"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-qmake",children:"DEFINES += ENABLE_PRECOMPILED_HEADERS=OFF\r\nQMAKE_CFLAGS_ISYSTEM = -I\r\ngreaterThan(QT_MAJOR_VERSION, 4): {\r\nQT += widgets\r\nQMAKE_CFLAGS_ISYSTEM=-I\r\n}\n"})}),"\n",(0,c.jsx)(n.h2,{id:"copy",children:"COPY"}),"\n",(0,c.jsx)(n.p,{children:"\u7f16\u8bd1\u524dCOPY\u6587\u4ef6\u5230\u6307\u5b9a\u4f4d\u7f6e"}),"\n",(0,c.jsx)(n.p,{children:"\u573a\u666f\uff1a\u5f53\u5de5\u7a0b\u8c03\u7528\u5916\u90e8\u5e93\u65f6\uff0c\u9700\u8981\u5c06dll\u6587\u4ef6\u62f7\u8d1d\u5230exe\u7684\u76ee\u5f55\u4e2d\u624d\u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528\u8f6f\u4ef6\u3002\u800c\u62f7\u8d1d\u662f\u4e00\u4e2a\u7e41\u7410\u7684\u8fc7\u7a0b\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u6700\u597d\u7684\u529e\u6cd5\u662f\u4f7f\u7528qmake\u81ea\u52a8\u67e5\u627e\u4f9d\u8d56\u5e93\u5e76\u4e14\u81ea\u52a8\u586b\u5145\u5230\u6307\u5b9a\u4f4d\u7f6e\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u7531\u4e8e\u8fd8\u4e0d\u4f1a\u4e0a\u8ff0\u64cd\u4f5c\uff0c\u6682\u65f6\u4f7f\u7528",(0,c.jsx)(n.code,{children:"QMAKE_PRE_LINK"}),"+",(0,c.jsx)(n.code,{children:"COPY"}),"\u4ee3\u66ff\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"qmake_pre_link",children:"QMAKE_PRE_LINK"}),"\n",(0,c.jsx)(n.p,{children:"\u9996\u5148\u786e\u5b9a\u5f85\u62f7\u8d1d\u6587\u4ef6\u7684\u5730\u5740\u4ee5\u53ca\u9700\u8981\u62f7\u8d1d\u5230\u7684\u8def\u5f84\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-qmake",children:"MINGW64_BIN = D:/msys64/mingw64/bin\r\nsrc_dll = $$MINGW64_BIN/libgdal*.dll\r\nsrc_dll = $$replace(src_dll, /, \\\\)\r\ndst_dll = $$replace(DESTDIR, /, \\\\)\r\nQMAKE_PRE_LINK += copy /Y $$src_dll $$dst_dll\n"})}),"\n",(0,c.jsx)(n.p,{children:"src_dll\u5c31\u662f\u5b58\u50a8\u591a\u6709dll\u5730\u5740\u7684\u6587\u4ef6\uff0cdst_dll\u662fdll\u62f7\u8d1d\u5230\u7684\u8def\u5f84\uff0c\u4f7f\u7528copy\u6307\u4ee4\u6267\u884ccopy\u64cd\u4f5c\u3002 \u4e00\u6b21\u53ea\u80fdcopy\u4e00\u4e2a\u6216\u4e00\u6279\u53ef\u4ee5\u7528*\u53f7\u66ff\u6362\u7684\u6587\u4ef6\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["windows\u4e2d\uff08\u81f3\u5c11\u662fwindows\uff09\u7684copy\u64cd\u4f5c\uff0c\u53ea\u80fd\u8bc6\u522b",(0,c.jsx)(n.code,{children:"\\\\"}),"windows\u7248\u672c\u7684\u5206\u9694\u7b26\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"copies",children:"COPIES"}),"\n",(0,c.jsx)(n.p,{children:"\u4f7f\u7528\u8be5\u65b9\u6cd5\u53ef\u4ee5\u590d\u5236\u6574\u4e2a\u6587\u4ef6\u5939"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-qmake",children:"CONFIG += file_copies\r\nexample.files += $$PWD/folder   #$$PWD\u6307\u5f53\u524dpro\u6587\u4ef6\u7684\u8def\u5f84\r\nexample.path = $$DESTDIR        #$$DESTDIR\u6307\u7f16\u8bd1\u8f93\u51fa\u8def\u5f84\r\n\r\n#\u5982\u679c\u662fwindows\u7cfb\u7edf\u7684\u8bdd \u9700\u8981\u628a\u5730\u5740\u4ece ../../.. \u66f4\u6362\u4e3a..\\\\..\\\\..\r\nwin32: example.files ~= s,/,\\\\,g\r\nwin32: example.path ~= s,/,\\\\,g\r\n\r\nCOPIES += example\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8be5\u65b9\u6cd5\u5f88\u65b9\u4fbf\uff0c\u4f46\u662f\u4e0d\u786e\u5b9a\u662f\u7f16\u8bd1\u524d\u8fd8\u662f\u7f16\u8bd1\u540e\uff0c\u4e0d\u4e00\u5b9a\u53ef\u4ee5\u66ff\u4ee3",(0,c.jsx)(n.code,{children:"QMAKE_PRE_LINK"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(t,{...e})}):t(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>i});var l=r(96540);const c={},s=l.createContext(c);function d(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);