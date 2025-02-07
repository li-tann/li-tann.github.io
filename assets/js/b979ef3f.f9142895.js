"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5726],{54895:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>t,toc:()=>s});const t=JSON.parse('{"id":"code/cpp/tinyxml","title":"TinyXML","description":"\u8fd9\u662f\u4e2a\u5f88\u5c0f\u4f46\u53c8\u5f88\u5e38\u7528\u7684\u5e93\uff0c\u6ca1\u6709\u8fc7\u591a\u7684\u5185\u5bb9\u6240\u4ee5\u4e0d\u9700\u8981\u518d\u521b\u5efa\u5b50\u6587\u4ef6\u3002","source":"@site/docs/code/cpp/tinyxml.md","sourceDirName":"code/cpp","slug":"/code/cpp/tinyxml","permalink":"/docs/code/cpp/tinyxml","draft":false,"unlisted":false,"editUrl":null,"tags":[{"inline":true,"label":"Cpp","permalink":"/docs/tags/cpp"},{"inline":true,"label":"Tinyxml","permalink":"/docs/tags/tinyxml"}],"version":"current","lastUpdatedBy":"li-tann","lastUpdatedAt":1735780614000,"frontMatter":{"custom_edit_url":null,"last_update":{"author":"li-tann"},"tags":["Cpp","Tinyxml"]},"sidebar":"code","previous":{"title":"Regex","permalink":"/docs/code/cpp/std_regex"},"next":{"title":"Triangle","permalink":"/docs/code/cpp/triangle"}}');var r=l(74848),i=l(28453);const d={custom_edit_url:null,last_update:{author:"li-tann"},tags:["Cpp","Tinyxml"]},c="TinyXML",o={},s=[{value:"\u73af\u5883\u914d\u7f6e",id:"\u73af\u5883\u914d\u7f6e",level:2},{value:"TinyXML1",id:"tinyxml1",level:2},{value:"\u9996\u5148\u8bbe\u7f6e\u6839\u76ee\u5f55",id:"\u9996\u5148\u8bbe\u7f6e\u6839\u76ee\u5f55",level:3},{value:"\u6309\u540d\u79f0\u67e5\u627e",id:"\u6309\u540d\u79f0\u67e5\u627e",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:3},{value:"TinyXML2",id:"tinyxml2",level:2},{value:"\u4f7f\u7528Tinyxml2\u521b\u5efaXML",id:"\u4f7f\u7528tinyxml2\u521b\u5efaxml",level:3},{value:"\u4f7f\u7528Tinyxml2\u89e3\u6790XML",id:"\u4f7f\u7528tinyxml2\u89e3\u6790xml",level:3},{value:"\u66f4\u65b0XML",id:"\u66f4\u65b0xml",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"tinyxml",children:"TinyXML"})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u662f\u4e2a\u5f88\u5c0f\u4f46\u53c8\u5f88\u5e38\u7528\u7684\u5e93\uff0c\u6ca1\u6709\u8fc7\u591a\u7684\u5185\u5bb9\u6240\u4ee5\u4e0d\u9700\u8981\u518d\u521b\u5efa\u5b50\u6587\u4ef6\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u73af\u5883\u914d\u7f6e",children:"\u73af\u5883\u914d\u7f6e"}),"\n",(0,r.jsx)(n.p,{children:"tinyxml\u5171\u6709\u4e24\u4e2a\u7248\u672c\uff08tinyxml\u548ctinyxml2\uff09"}),"\n",(0,r.jsx)(n.p,{children:"tinyxml\u4f7f\u7528\u65f6\u5c06\u516d\u4e2a\u6587\u4ef6\uff082\u4e2a.h 4\u4e2a.cpp\uff09\u52a0\u5165\u5230\u5de5\u7a0b\u4e2d\u5373\u53ef\u8c03\u7528\u3002"}),"\n",(0,r.jsx)(n.p,{children:"tinyxml2\u5219\u9700\u8981\u8c03\u7528\u5916\u90e8\u5e93\u7684\u5f62\u5f0f\u4f7f\u7528\uff0c\u4f46\u53ea\u9700\u8981\u6dfb\u52a0\u4e00\u4e2a.h\u548cdll\u5373\u53ef\u3002"}),"\n",(0,r.jsx)(n.p,{children:"tinyxml2\u597d\u50cf\u4f18\u5316\u4e86\u4ee3\u7801\u4ee5\u51cf\u5c11\u5f02\u5e38\u60c5\u51b5?"}),"\n",(0,r.jsx)(n.h2,{id:"tinyxml1",children:"TinyXML1"}),"\n",(0,r.jsx)(n.h3,{id:"\u9996\u5148\u8bbe\u7f6e\u6839\u76ee\u5f55",children:"\u9996\u5148\u8bbe\u7f6e\u6839\u76ee\u5f55"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'TiXmlDocument doc(path);\r\n//  path \u4e3aconst char*\u7c7b\u7684\u8def\u5f84\r\nbool loadOK = doc.LoadFile();\r\nif (!loadOK)\r\n{\r\ncout << "The file can\'t load correctly.\\n" << "Error: " << doc.ErrorDesc() << endl;\r\n}\r\nTiXmlElement* Root = doc.RootElement();\r\n//Root\u4e3axml\u7684\u6839\u76ee\u5f55\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u6309\u540d\u79f0\u67e5\u627e",children:"\u6309\u540d\u79f0\u67e5\u627e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'FirstChildElement()\u6216FirstChildElement("\u2026")\r\n//\u4e0d\u52a0\u540d\u79f0\u65f6\u662f\u5b50\u96c6\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\r\n//\u52a0\u540d\u79f0\u65f6\u662f\u5728\u5b50\u96c6\u4e2d\u6309\u540d\u79f0\u67e5\u627e\u76f8\u5e94\u5143\u7d20\r\n//\u4f8b\u5982\uff1a\r\nTiXmlElement* tempElements = imageinfo->FirstChildElement("width");\r\nint width = atoi(tempElements->GetText());\r\n//\u5f97\u5230\u7ed3\u679c\u4e3astring  \u5982\u9700\u8f6c\u6362\u6210int\u6216double\u7c7b\u578b \u9700\u8981\u5bf9\u5e94\u4f7f\u7528atoi()\u548catof()\u4e24\u4e2a\u51fd\u6570\r\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u5176\u4ed6",children:"\u5176\u4ed6"}),"\n",(0,r.jsx)(n.p,{children:"\u5176\u4ed6\u8fd8\u5305\u62ec\u540c\u7ea7\u8282\u7684\u6307\u9488\u4f20\u9012\uff08nextSiblie..?\uff09\u9002\u5408\u63d0\u53d6\u536b\u661f\u72b6\u6001\u77e2\u91cf"}),"\n",(0,r.jsx)(n.p,{children:"\u63d0\u53d6\u8282\u70b9\u7684\u5c5e\u6027\u503c"}),"\n",(0,r.jsx)(n.p,{children:"\u7b49\u529f\u80fd\uff0c\u540e\u7eed\u4f7f\u7528\u65f6\u518d\u7ee7\u7eed\u6dfb\u52a0\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"tinyxml2",children:"TinyXML2"}),"\n",(0,r.jsxs)(n.p,{children:["\u8f6c\u8f7d\u81ea",(0,r.jsx)(n.a,{href:"https://blog.csdn.net/yancola/article/details/93896148",children:"\u5728C++\u4e2d\u4f7f\u7528tinyxml2\u89e3\u6790\u548c\u521b\u5efaxml\u6587\u4ef6"}),"\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u4f7f\u7528tinyxml2\u521b\u5efaxml",children:"\u4f7f\u7528Tinyxml2\u521b\u5efaXML"}),"\n",(0,r.jsx)(n.p,{children:"xml"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\r\n<school>\r\n    <student Name="libai">stu</student>\r\n    <teacher>\r\n        <gender>man</gender>\r\n    </teacher>\r\n</school>\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u4ee3\u7801\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'tinyxml2::XMLDocument doc;\r\n \r\n//1.\u6dfb\u52a0\u58f0\u660e\r\ntinyxml2::XMLDeclaration* declaration = doc.NewDeclaration();\r\ndoc.InsertFirstChild(declaration);\r\n \r\n//2.\u521b\u5efa\u6839\u8282\u70b9\r\ntinyxml2::XMLElement* root = doc.NewElement("school");\r\ndoc.InsertEndChild(root);\r\n \r\n//3.\u521b\u5efa\u5b50\u8282\u70b9\r\ntinyxml2::XMLElement* childNodeStu = doc.NewElement(\u201cstudent\u201d);\r\ntinyxml2::XMLElement* childNodeTea = doc.NewElement(\u201cteacher\u201d);\r\ntinyxml2::XMLElement* childNodeTeaGender = doc.NewElement(\u201cgender\u201d);\r\n \r\n//4.\u4e3a\u5b50\u8282\u70b9\u589e\u52a0\u5185\u5bb9\r\ntinyxml2::XMLText* contentStu = doc.NewText(\u201cstu\u201d);\r\nchildNodeStu->InsertFirstChild(contentStu);\r\n \r\ntinyxml2::XMLText* contentGender = doc.NewText(\u201cman\u201d);\r\nchildNodeTeaGender->InsertFirstChild(contentGender);\r\n \r\n//5.\u4e3a\u5b50\u8282\u70b9\u589e\u52a0\u5c5e\u6027\r\nchildNodeStu->SetAttribute("Name", "libai");\r\n \r\nroot->InsertEndChild(childNodeStu);//childNodeStu\u662froot\u7684\u5b50\u8282\u70b9\r\nroot->InsertEndChild(childNodeTea);//childNodeTea\u662froot\u7684\u5b50\u8282\u70b9\r\nchildNodeTea->InsertEndChild(childNodeTeaGender);//childNodeTeaGender\u662fchildNodeTea\u7684\u5b50\u8282\u70b9\r\n \r\n//6.\u4fdd\u5b58xml\u6587\u4ef6\r\ndoc.SaveFile(\u201cschool.xml\u201d);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u4f7f\u7528tinyxml2\u89e3\u6790xml",children:"\u4f7f\u7528Tinyxml2\u89e3\u6790XML"}),"\n",(0,r.jsx)(n.p,{children:"\u4e0etinyxml\u76f8\u4f3c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'tinyxml2::XMLDocument doc;\r\n \r\n//1.\u52a0\u8f7dxml\u6587\u4ef6\r\nif(doc.LoadFile("school.xml") != 0) {\r\n    return;\r\n}\r\n \r\n//2.\u627e\u5230\u6839\u8282\u70b9\r\ntinyxml2::XMLElement* root = doc.RootElement();\r\nif (xmlRoot == NULL) {\r\n    return;\r\n}\r\n \r\n//3.\u83b7\u53d6\u5b50\u8282\u70b9\u4fe1\u606f\r\ntinyxml2::XMLElement* childNodeStu = root->FirstChildElement("student");\r\nstd::string contentStu = childNodeStu->GetText();\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u66f4\u65b0xml",children:"\u66f4\u65b0XML"}),"\n",(0,r.jsx)(n.p,{children:"\u6682\u65e0"})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>d,x:()=>c});var t=l(96540);const r={},i=t.createContext(r);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);