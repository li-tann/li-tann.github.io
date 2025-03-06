"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6910],{33046:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>d,toc:()=>p});const d=JSON.parse('{"id":"code/cpp/pybind11","title":"pybind11","description":"pybind11logo","source":"@site/docs/code/cpp/pybind11.md","sourceDirName":"code/cpp","slug":"/code/cpp/pybind11","permalink":"/docs/code/cpp/pybind11","draft":false,"unlisted":false,"editUrl":null,"tags":[{"inline":true,"label":"Cpp","permalink":"/docs/tags/cpp"},{"inline":true,"label":"Pybind11","permalink":"/docs/tags/pybind-11"}],"version":"current","lastUpdatedBy":"li-tann","lastUpdatedAt":1735780614000,"frontMatter":{"custom_edit_url":null,"last_update":{"author":"li-tann"},"tags":["Cpp","Pybind11"]},"sidebar":"code","previous":{"title":"json","permalink":"/docs/code/cpp/nlohmann_json"},"next":{"title":"spdlog","permalink":"/docs/code/cpp/spdlog"}}');var l=r(74848),i=r(28453);const s={custom_edit_url:null,last_update:{author:"li-tann"},tags:["Cpp","Pybind11"]},c="pybind11",t={},p=[{value:"\u5bfc\u5165pybind11",id:"\u5bfc\u5165pybind11",level:2},{value:"\u521b\u5efa\u6a21\u677f\u5e93",id:"\u521b\u5efa\u6a21\u677f\u5e93",level:2},{value:"pybind&quot;\u8bed\u6cd5&quot;",id:"pybind\u8bed\u6cd5",level:2},{value:"\u51fd\u6570",id:"\u51fd\u6570",level:3},{value:"\u7c7b",id:"\u7c7b",level:3},{value:"\u91cd\u8f7d\u7684\u6210\u5458\u51fd\u6570",id:"\u91cd\u8f7d\u7684\u6210\u5458\u51fd\u6570",level:3},{value:"operator",id:"operator",level:3},{value:"\u679a\u4e3e",id:"\u679a\u4e3e",level:3},{value:"\u6a21\u677f\u7c7b",id:"\u6a21\u677f\u7c7b",level:3},{value:"TODO",id:"todo",level:3},{value:"pyd\u4f7f\u7528",id:"pyd\u4f7f\u7528",level:2},{value:"pybind11-stubgen",id:"pybind11-stubgen",level:2}];function o(e){const n={a:"a",code:"code",del:"del",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"pybind11",children:"pybind11"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"pybind11_logo",src:r(89162).A+"",width:"1131",height:"336"})}),"\n",(0,l.jsx)(n.p,{children:"\u4f7f\u7528CMake + Pybind11, \u5c06C++\u5199\u7684\u7b97\u6cd5/\u7c7b\uff0c\u5bfc\u51fa\u5230Python\u4e2d\uff0c\u7c7b\u4f3c\u4e8e\u4e00\u4e2aPython\u5e93/\u5305"}),"\n",(0,l.jsx)(n.h2,{id:"\u5bfc\u5165pybind11",children:"\u5bfc\u5165pybind11"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"vcpkg"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"cd\u5230vcpkg\u6839\u76ee\u5f55\u4e0b, \u4e0b\u8f7dpybind11\u5e93"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"vcpkg install pybind11:x64-windows --clean-after-build\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5728CMakeLists.txt\u5185\u6dfb\u52a0\u5982\u4e0b\u5b57\u6bb5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cmake",children:"find_package(Python COMPONENTS Interpreter Development)\r\nfind_package(pybind11 CONFIG)\r\n\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"sub_directory"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"pybind11\u662f\u4e00\u4e2aheader-only\u5e93, \u6240\u4ee5\u76f4\u63a5\u628a\u5b83\u5f53\u505a\u5b50\u9879\u76ee\u52a0\u8f7d\u5230\u5f53\u524d\u9879\u76ee\u4e2d\u4e5f\u975e\u5e38\u65b9\u4fbf"}),"\n",(0,l.jsxs)(n.p,{children:["\u4ecegithub\u4e0b\u8f7d",(0,l.jsx)(n.a,{href:"https://github.com/pybind/pybind11",children:"pybind11"}),"\u5230\u6307\u5b9a\u8def\u5f84\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u9879\u76ee\u7ed3\u6784\uff0c\u5982\u4e0b\u6240\u793a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"projects/\r\n    pybind11/   <-- \u4ecegithub\u4e0a\u4e0b\u8f7d\u7684pybind11\u9879\u76ee\r\n        docs/\r\n        include/\r\n        tools/\r\n        ...\r\n        setup.py\r\n        CMakeLists.txt\r\n    mylib.cpp\r\n    CMakeLists.txt  <-- \u9879\u76ee\u6839\u76ee\u5f55\u7684CMakeLists.txt\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u5916\u4fa7CMakeLists.txt\u4e2d\u6dfb\u52a0\u5982\u4e0b\u5b57\u6bb5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cmake",children:"add_subdirectory(pybind11)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u521b\u5efa\u6a21\u677f\u5e93",children:"\u521b\u5efa\u6a21\u677f\u5e93"}),"\n",(0,l.jsx)(n.p,{children:"\u4e0d\u540c\u4e8eC++\u4e2d\u5e38\u89c1\u7684\u53ef\u6267\u884c\u6587\u4ef6'executable', \u52a8\u6001\u5e93'shared library', \u53c8\u6216\u662f\u9759\u6001\u5e93'static library', pybind11\u7684\u76ee\u6807\u5728VSCode\u88ab\u6807\u8bb0\u4e3a\u6a21\u677f\u5e93'module library'\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u521b\u5efa\u6a21\u677f\u5e93\u65f6\u4e5f\u4e0d\u5e94\u8be5\u4f7f\u7528C++\u4e2d\u5e38\u7528\u7684",(0,l.jsx)(n.code,{children:"add_library"}),", ",(0,l.jsx)(n.code,{children:"add_executable"}),", \u800c\u662f",(0,l.jsx)(n.code,{children:"pybind11_add_module"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cmake",children:"# CMakeLists.txt\r\npybind11_add_module(py_ltie\r\n        your_libs.cpp)\r\ntarget_link_libraries(py_ltie PUBLIC my_utils)  \r\ntarget_link_libraries(py_ltie PUBLIC my_algo)   # my_utils, my_algo \u90fd\u662f\u4f9d\u8d56\u5e93\r\ntarget_link_libraries(py_ltie PRIVATE pybind11::lto pybind11::embed pybind11::module pybind11::headers)\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u4e00\u6b21CMake\u540e, \u8be5\u76ee\u6807\u4f1a\u663e\u793a\u5728IDE(VSCode)\u4e2d,"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"alt text",src:r(60326).A+"",width:"695",height:"202"})}),"\n",(0,l.jsx)(n.h2,{id:"pybind\u8bed\u6cd5",children:'pybind"\u8bed\u6cd5"'}),"\n",(0,l.jsxs)(n.p,{children:["\u51e0\u4e4e\u6240\u6709\u8bed\u6cd5\u90fd\u662f\u5199\u5728",(0,l.jsx)(n.code,{children:"PYBIND11_MODULE(name, varible)"}),"\u5b8f\u5185\u3002\u5176\u4e2d",(0,l.jsx)(n.code,{children:"name"}),"\u540d\u5b57\u5e94\u8be5\u4e0e",(0,l.jsx)(n.code,{children:"pybind11_add_module"}),"\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u76f8\u540c\uff0c",(0,l.jsx)(n.code,{children:"varible"}),"\u5219\u968f\u610f\u8bbe\u7f6e\u4e00\u4e2a\u53d8\u91cf\u5373\u53ef\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u4e0e\u4e0a\u9762CMake\u4ee3\u7801\u76f8\u5bf9\u5e94\u7684\uff0c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c++",children:"/// your_libs.cpp\r\n#include <pybind11/pybind11.h>\r\nnamespace py = pybind11;\r\n\r\nPYBIND11_MODULE(py_ltie, m) {\r\n    /* \u66f4\u591a\u5185\u5bb9... */\r\n}\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"your_libs.cpp"})," \u5efa\u8bae\u662f\u4e00\u4e2a\u72ec\u7acb\u7684cpp\u6587\u4ef6, \u5b83\u53ef\u4ee5\u901a\u8fc7",(0,l.jsx)(n.code,{children:"#include <...>"})," \u52a0\u8f7d\u5176\u4ed6\u5e93\u91cc\u7684\u7c7b\u548c\u51fd\u6570, \u800c\u4e0d\u9700\u8981\u5728\u8be5\u6587\u4ef6\u4e2d\u91cd\u65b0\u5b9a\u4e49\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.del,{children:["\u4e0b\u9762\u63d0\u5230",(0,l.jsx)(n.code,{children:"PYBIND11_MODULE"}),"\u7684\u4ee3\u7801\u5757, \u90fd\u9ed8\u8ba4\u4f7f\u7528\u4e86",(0,l.jsx)(n.code,{children:"#include <pybind11/pybind11.h>"}),"\u548c",(0,l.jsx)(n.code,{children:"namespace py = pybind11;"}),", \u4e5f\u5c31\u4e0d\u518d\u8d58\u8ff0\u4e86"]})}),"\n",(0,l.jsx)(n.h3,{id:"\u51fd\u6570",children:"\u51fd\u6570"}),"\n",(0,l.jsx)(n.p,{children:"\u5927\u90e8\u5206\u201c\u873b\u8713\u70b9\u6c34\u201d\u5f0f\u4ecb\u7ecdpybind11\u7684\u6587\u7ae0/\u89c6\u9891\uff0c\u90fd\u4f1a\u63d0\u5230\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u5b9e\u9645\u4e0a\u5c31\u662f\u7528\u4e86pybind\u5b98\u65b9\u6587\u6863\u7684",(0,l.jsx)(n.a,{href:"https://pybind11.readthedocs.io/en/stable/basics.html#creating-bindings-for-a-simple-function",children:"First steps #Creating bindings for a simple function"}),"\u7684\u5185\u5bb9..."]}),"\n",(0,l.jsx)(n.p,{children:"\u5199\u4e00\u4e2a\u51fd\u6570, \u5c31\u5b8c\u4e8b\u4e86\u3002\u5b8c\u6574\u7684\u4ee3\u7801\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c++",children:'/// your_libs.cpp\r\n#include <pybind11/pybind11.h>\r\n\r\nint add(int i, int j) {\r\n    return i + j;\r\n}\r\n\r\nPYBIND11_MODULE(py_ltie, m) {\r\n    m.doc() = "pybind11 example plugin"; // optional module docstring\r\n    m.def("add", &add, "A function that adds two numbers");\r\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u6211\u8fd8\u4e0d\u592a\u7406\u89e3pybind11\u5de5\u4f5c\u539f\u7406\u7684\u65f6\u5019\uff0c\u8fd9\u4e48\u70b9\u793a\u4f8b\u5b8c\u5168\u4e0d\u591f\u6211\u53bb\u4e3e\u4e00\u53cd\u4e09\u7684\u3002\u6211\u751a\u81f3\u4e00\u5ea6\u4ee5\u4e3a\u8981\u5728\u81ea\u5df1\u7684\u6bcf\u4e2acpp\u4e0b\u9762\u90fd\u52a0\u4e00\u4e2a",(0,l.jsx)(n.code,{children:"PYBIND11_MODULE"}),"..."]}),"\n",(0,l.jsx)(n.p,{children:"\u6709\u4e00\u70b9\u9700\u8981\u6ce8\u610f\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c++",children:'      \u8fd9\u91cc\u7684py_lite \u2193  \u5e94\u8be5\u4e0ecmakelist.txt\u91cc\u7684\'py_lite\'\u4fdd\u6301\u4e00\u81f4(\u5426\u5219\u4f1a\u5728import py_lite\u65f6\u63d0\u793a\u52a8\u6001\u6a21\u677f\u6ca1\u6709\u521d\u59cb\u5316)\r\nPYBIND11_MODULE(py_ltie, m) {    <-- \u8fd9\u91cc\u7684m\r\n  \u548c\u8fd9\u4e2am\u9700\u8981\u4fdd\u6301\u4e00\u81f4 --\x3e m.def("add", &add, "A func...");\r\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u8a00\u5f52\u6b63\u4f20\uff0c\u666e\u901a\u51fd\u6570\u7684\u8f6c\u6362\u8bed\u6cd5\u4e3a\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c++",children:'PYBIND11_MODULE(py_ltie, m) {\r\n    m.def("add", &add, "A function that adds two numbers");\r\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u7b2c\u4e00\u4e2a\u53c2\u6570, ",(0,l.jsx)(n.code,{children:'"add"'}),"\u662f\u5728\u8be5\u51fd\u6570\u5728python\u4e2d\u7684\u540d\u79f0\uff1b"]}),"\n",(0,l.jsxs)(n.p,{children:["\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c",(0,l.jsx)(n.code,{children:"&add"}),"\u662f\u8f93\u5165\u4e86\u8be5\u51fd\u6570\u7684\u5730\u5740"]}),"\n",(0,l.jsxs)(n.p,{children:["\u7b2c\u4e09\u4e2a\u53c2\u6570\uff0c",(0,l.jsx)(n.code,{children:'"A func..."'}),"\u662f\u5bf9\u8be5\u51fd\u6570\u7684\u89e3\u91ca\u8bf4\u660e\uff08\u5728",(0,l.jsx)(n.a,{href:"#pybind11-stubgen",children:"pybind11-stubgen"}),"\u7ae0\u8282\u751f\u6210pyi\u6587\u4ef6\u540e, IDE\u4e2d\u5c31\u4f1a\u663e\u793a\u8be5\u51fd\u6570\u7684\u89e3\u91ca\u8bf4\u660e\uff09"]}),"\n",(0,l.jsx)(n.h3,{id:"\u7c7b",children:"\u7c7b"}),"\n",(0,l.jsx)(n.p,{children:"\u9762\u5411\u5bf9\u8c61\u662fC++\u5185\u5e38\u89c1\u7684\u7f16\u7a0b\u601d\u8def\uff0c\u6240\u4ee5\u81ea\u5b9a\u4e49\u7684\u7c7b\u624d\u662f\u6700\u9700\u8981\u63d0\u4f9bpython\u63a5\u53e3\u7684... \u4f46\u7f51\u4e0a\u613f\u610f\u7ffb\u8bd1\u4e00\u4e0b\u5b98\u65b9\u6587\u6863\u8bb2\u4e00\u4e0b\u5b83\u7684\u4eba\u6123\u662f\u6ca1\u51e0\u4e2a..."}),"\n",(0,l.jsx)(n.p,{children:"\u524d\u63d0\uff1a"}),"\n",(0,l.jsxs)(n.p,{children:["\u6211\u4e4b\u524d\u5199\u4e86\u4e00\u4e2a\u5c0f\u5de5\u5177\u52a8\u6001\u5e93",(0,l.jsx)(n.code,{children:"my_utils.dll"}),"\uff0c\u5e76\u4e14\u8be5\u5e93\u5df2\u7ecf\u901a\u8fc7",(0,l.jsx)(n.code,{children:"target_link_libraries"}),"\u52a0\u8f7d\u5230",(0,l.jsx)(n.code,{children:"py_lite"}),"\u6a21\u677f\u5e93\u4e2d\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5176\u4e2d\u5728utils/datatype.h\u4e2d\u6211\u5b9a\u4e49\u4e86\u4e00\u4e2a\u7ed3\u6784\u4f53",(0,l.jsx)(n.code,{children:"xyz"}),"\u7528\u4e8e\u5b58\u653e\u7a7a\u95f4\u76f4\u89d2\u5750\u6807\u7cfb\u6570\u636e, \u5f62\u5982"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c++",children:"/// include/utils/datatype.h\r\nclass llh; /// longitude, latitude, height\r\nclass xyz \r\n{\r\npublic:\r\n    xyz();\r\n    ~xyz();\r\n    xyz(double X, double Y, double Z);\r\n    double norm();\r\n    xyz abs();\r\n    xyz unit();\r\n    xyz cross(xyz sec);\r\n    xyz operator-(xyz sec);\r\n    xyz operator+(xyz sec);\r\n    double operator*(xyz sec);\r\n    xyz operator*(double m);\r\n    llh to_llh();\r\n    llh to_llh(double major, double minor);\r\n    void from_llh(llh lonlathei, double major, double minor);\r\n\r\npublic:\r\n    double x, y, z;\r\n};\r\n\r\n/// src/utils/datatype.cpp\r\n\r\n/* \u5b58\u653e\u76f8\u5e94\u7684\u51fd\u6570\u5b9e\u73b0\u4ee3\u7801 */\r\n\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8f6c\u6362\u8bed\u6cd5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c++",children:'/// your_libs.cpp\r\n#include <pybind11/pybind11.h>\r\nnamespace py = pybind11;\r\n#include <utils/datatype.h> /// \u8fd9\u662f\u6211\u81ea\u5df1\u5199\u7684\u52a8\u6001\u5e93, \u5728CMakeLists\u4e2d\u5df2\u7ecf\u901a\u8fc7`target_link_libraries`\u94fe\u63a5\u4e86\r\n\r\nPYBIND11_MODULE(py_ltie, m) {\r\n    py::class_<xyz>(m, "xyz")\r\n        .def(py::init<>())\r\n        .def(py::init<double, double, double>())\r\n        .def_readwrite("x",&xyz::x)\r\n        .def_readwrite("y",&xyz::y)\r\n        .def_readwrite("z",&xyz::z)\r\n        /*\u5176\u4ed6\u6210\u5458\u53d8\u91cf*/\r\n        .def("norm",&xyz::norm)\r\n        .def("abs",&xyz::abs)\r\n        .def("unit",&xyz::unit)\r\n        .def("cross",&xyz::cross);\r\n}    \r\n\n'})}),"\n",(0,l.jsxs)(n.p,{children:["1 ",(0,l.jsx)(n.code,{children:"py::class_<>()"})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:'py::class_<llh>(m, "xyz")'}),"\u662f\u5728python\u4e2d\u521b\u5efa\u4e00\u4e2allh\u7c7b\uff0c\u5176\u4e2d\u7b2c\u4e00\u4e2a",(0,l.jsx)(n.code,{children:"<xyz>"}),"\u662fC++\u4e2d\u7684\u7c7b\uff0c\u7b2c\u4e8c\u4e2a",(0,l.jsx)(n.code,{children:'"xyz"'}),"\u662f\u8be5\u7c7b\u5728python\u4e2d\u7684\u540d\u79f0\uff0c\u5373\u8c03\u7528\u65b9\u6cd5\u3002\u5728\u540e\u9762\u52a0",(0,l.jsx)(n.code,{children:".def"}),", ",(0,l.jsx)(n.code,{children:".def_readonly"}),", ",(0,l.jsx)(n.code,{children:".def_readwrite"}),"\u7684\u884c\u4e3a\uff0c\u5c31\u662f\u5728python\u4e2d\u4e3a\u8be5\u7c7b\u5939\u53ef\u4ee5\u8c03\u7528\u7684\u6210\u5458\u51fd\u6570\u3001\u6210\u5458\u53d8\u91cf\u7b49\u5185\u5bb9..."]}),"\n",(0,l.jsx)(n.p,{children:"2 \u6784\u9020\u51fd\u6570"}),"\n",(0,l.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u6784\u9020\u51fd\u6570\u662f\u5fc5\u987b\u5b58\u5728\u7684\u3002\u56e0\u4e3a\u6211\u5728llh\u7c7b\u4e2d\u8bbe\u7f6e\u4e86\u4e24\u79cd\u6784\u9020\u51fd\u6570\uff0c\u4e00\u79cd\u662f\u4e0d\u9700\u8981\u5165\u53c2\u7684",(0,l.jsx)(n.code,{children:"xyz()"}),"\uff0c\u53e6\u4e00\u79cd\u662f\u6709\u4e09\u4e2a\u5165\u53c2\u7684",(0,l.jsx)(n.code,{children:"xyz(double, double, double)"}),"\uff0c\u6240\u4ee5\u6211\u9700\u8981\u5199\u4e24\u4e2a",(0,l.jsx)(n.code,{children:"py::init"}),"\uff08\u6211\u4e5f\u53ef\u4ee5\u4e0d\u5199\u5168\uff0c\u4f46\u6ca1\u5199\u7684\u6784\u9020\u65b9\u6cd5\u4e5f\u5c31\u6ca1\u529e\u6cd5\u5728python\u4e2d\u4f7f\u7528\uff09\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:".def(py::init<>())"}),"\u5bf9\u5e94",(0,l.jsx)(n.code,{children:"xyz()"}),", ",(0,l.jsx)(n.code,{children:".def(py::init<double, double, double>())"}),"\u5bf9\u5e94",(0,l.jsx)(n.code,{children:"xyz(double, double, double)"}),"\u3002\u5982\u679c\u4f60\u7684\u7c7b\u91cc\u6709\u5176\u4ed6\u7684\u6784\u9020\u51fd\u6570\uff0c\u4f9d\u6b21\u7c7b\u63a8..."]}),"\n",(0,l.jsx)(n.p,{children:"3 \u5171\u6709\u6210\u5458\u53d8\u91cf"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:'.def_readwrite("x",&xyz::x)'}),"\u53ef\u4ee5\u4e3a\u6210\u5458\u53d8\u91cf",(0,l.jsx)(n.code,{children:"x"}),"\u63d0\u4f9b\u6709\u53ef\u8bfb\u53ef\u5199\u7684\u63a5\u53e3\u3002\u7b2c\u4e00\u4e2a",(0,l.jsx)(n.code,{children:'"x"'}),"\u8be5\u6210\u5458\u51fd\u6570\u5728python\u4e2d\u7684\u540d\u79f0\uff0c\u4e5f\u662f\u8c03\u7528\u65b9\u6cd5\u3002\u7b2c\u4e8c\u4e2a",(0,l.jsx)(n.code,{children:"&xyz::x"}),"\u662f\u5b83\u7684\u5730\u5740\u3002\u5982\u679c\u6211\u4eec\u60f3\u8bbe\u7f6e\u53ea\u8bfb\u7c7b\u578b\u7684\u63a5\u53e3\uff0c\u53ef\u4ee5\u628a",(0,l.jsx)(n.code,{children:".def_readwrite(...)"}),"\u66ff\u6362\u4e3a",(0,l.jsx)(n.code,{children:".def_readonly(...)"}),"\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"4 \u79c1\u6709\u6210\u5458\u53d8\u91cf"}),"\n",(0,l.jsxs)(n.p,{children:["\u5bf9\u4e8e\u79c1\u6709\u53d8\u91cf(",(0,l.jsx)(n.code,{children:"private:"}),"), \u53ef\u4ee5\u4f7f\u7528",(0,l.jsx)(n.code,{children:'.def_property("name", &class::get, &class::set)'}),"\u5b9a\u4e49"]}),"\n",(0,l.jsx)(n.p,{children:"TODO: \u6ca1\u5199\u5b8c, \u4ee5\u540e\u7528\u5230\u4e86\u518d\u8865\u5145"}),"\n",(0,l.jsx)(n.p,{children:"5 \u6210\u5458\u51fd\u6570"}),"\n",(0,l.jsx)(n.p,{children:"\u65b9\u6cd5\u4e0e\u6210\u5458\u53d8\u91cf\u7c7b\u4f3c\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u4ee5",(0,l.jsx)(n.code,{children:'.def("norm",&xyz::norm)'}),"\u4e3a\u4f8b\uff0c\u8be5\u51fd\u6570\u662f\u8ba1\u7b97\u5750\u6807\u6a21\u957f\u7684\u51fd\u6570\u3002\u7b2c\u4e00\u4e2a",(0,l.jsx)(n.code,{children:'"norm"'}),"\u662f\u8be5\u6210\u5458\u53d8\u91cf\u5728python\u4e2d\u7684\u540d\u79f0\uff0c\u4e5f\u662f\u8c03\u7528\u65b9\u6cd5\u3002\u7b2c\u4e8c\u4e2a",(0,l.jsx)(n.code,{children:"&xyz::norm"}),"\u662f\u5b83\u7684\u51fd\u6570\u5730\u5740\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u91cd\u8f7d\u7684\u6210\u5458\u51fd\u6570",children:"\u91cd\u8f7d\u7684\u6210\u5458\u51fd\u6570"}),"\n",(0,l.jsxs)(n.p,{children:["\u7531\u4e8epython\u5e76\u4e0d\u652f\u6301\u51fd\u6570\u91cd\u8f7d\uff0c\u6240\u4ee5\u5bf9\u4e8eC++\u7c7b\u91cc\u91cd\u8f7d\u7684\u6210\u5458\u51fd\u6570\uff0cpybind11\u63d0\u4f9b\u7684\u65b9\u6cd5\u662f\uff1a",(0,l.jsx)(n.code,{children:"py::overload_cast<double>(&class::func)"}),", \u5c06\u91cd\u8f7d\u51fd\u6570\u5b9a\u4e49\u4e0d\u540c\u7684\u8c03\u7528\u65b9\u6cd5\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4ecd\u4ee5",(0,l.jsx)(n.a,{href:"#%E7%B1%BB",children:"\u7c7b"}),"\u4e2d\u63d0\u5230\u7684",(0,l.jsx)(n.code,{children:"xyz"}),"\u4e3a\u4f8b\uff0c\u6210\u5458\u51fd\u6570",(0,l.jsx)(n.code,{children:"to_llh()"}),"\u5b58\u5728\u91cd\u8f7d\u60c5\u51b5\uff0c\u5b9e\u73b0\u65b9\u6cd5\u4e3a,"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c++",children:'/// your_libs.cpp\r\n#include <pybind11/pybind11.h>\r\nnamespace py = pybind11;\r\n#include <utils/datatype.h> \r\n\r\nPYBIND11_MODULE(py_ltie, m) {\r\n    py::class_<xyz>(m, "xyz")\r\n        .def(py::init<>())\r\n        .def(py::init<double, double, double>())\r\n        .def("to_llh_wgs84", py::overload_cast<>(&xyz::to_llh))\r\n        .def("to_llh", py::overload_cast<double, double>(&xyz::to_llh))\r\n        /*\u5176\u4ed6\u6210\u5458\u53d8\u91cf \u6216\u6210\u5458\u51fd\u6570*/\r\n        .def("cross",&xyz::cross);\r\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u901a\u8fc7",(0,l.jsx)(n.code,{children:"py::overload_cast<..>(..)"}),","]}),"\n",(0,l.jsxs)(n.p,{children:["\u5c06\u4e0d\u9700\u8981\u5165\u53c2\u3001\u9ed8\u8ba4\u4f7f\u7528WGS84\u692d\u7403\u53c2\u6570\u7684\u51fd\u6570",(0,l.jsx)(n.code,{children:"to_llh"}),"\u5728python\u7684\u8c03\u7528\u65b9\u6cd5\uff0c\u4fee\u6539\u4e3a",(0,l.jsx)(n.code,{children:'"to_llh_wgs84"'}),","]}),"\n",(0,l.jsxs)(n.p,{children:["\u5c06\u9700\u8981\u8f93\u5165\u692d\u7403\u957f\u77ed\u534a\u8f74\u7684\u51fd\u6570",(0,l.jsx)(n.code,{children:"to_llh"}),"\u5728python\u4e2d\u7684\u8c03\u7528\u65b9\u6cd5\uff0c\u4fee\u6539\u4e3a",(0,l.jsx)(n.code,{children:'"to_llh"'})]}),"\n",(0,l.jsx)(n.h3,{id:"operator",children:"operator"}),"\n",(0,l.jsx)(n.p,{children:"1 \u52a0\u51cf\u4e58\u9664\u53cc\u76ee\u8fd0\u7b97\u7b26"}),"\n",(0,l.jsxs)(n.p,{children:["\u4ecd\u4ee5",(0,l.jsx)(n.a,{href:"#%E7%B1%BB",children:"\u7c7b"}),"\u4e2d\u63d0\u5230\u7684",(0,l.jsx)(n.code,{children:"xyz"}),"\u4e3a\u4f8b\uff0c\u7c7b\u91cc\u5305\u542b\u4e86\u52a0\u51cf\u4e58\u9664\u8fd0\u7b97\u7b26\uff0c\u5b9e\u73b0\u65b9\u6cd5\u4e3a,"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c++",children:'/// your_libs.cpp\r\n#include <pybind11/pybind11.h>\r\nnamespace py = pybind11;\r\n#include <utils/datatype.h> \r\n\r\nPYBIND11_MODULE(py_ltie, m) {\r\n    py::class_<xyz>(m, "xyz")\r\n        .def(py::init<>())\r\n        .def(py::init<double, double, double>())\r\n        .def("__add__", &xyz::operator+)\r\n        .def("__sub__", &xyz::operator-)\r\n        .def("__mul__", &xyz::operator*)\r\n        .def("__truediv__", &xyz::operator/)\r\n        /*\u5176\u4ed6\u6210\u5458\u53d8\u91cf \u6216\u6210\u5458\u51fd\u6570*/\r\n        .def("cross",&xyz::cross);\r\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"2 bool\u9690\u5f0f\u8f6c\u6362"}),"\n",(0,l.jsxs)(n.p,{children:["\u53e6\u4e00\u4e2a\u7c7b",(0,l.jsx)(n.code,{children:"funcrst"}),"\uff0c\u662f\u6267\u884c\u51fd\u6570\u8fd4\u56de\u7684\u4fe1\u606f\uff0c\u8bb0\u53ef\u9690\u5f0f\u8f6c\u6362\u4e3abool\u503c, \u76f4\u63a5\u4f7f\u7528if\u5224\u65ad\u662f\u5426\u6267\u884c\u6210\u529f"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c++",children:'struct funcrst{\r\n    funcrst() { result = false; explain = ""; };\r\n    funcrst(bool b, std::string s) { result = b; explain = s; }\r\n    bool result{ false };\r\n    std::string explain{ "" };\r\n    operator bool() { return result; }\r\n};\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u8bed\u6cd5\u4e3a\uff0c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c++",children:'/// your_libs.cpp\r\n#include <pybind11/pybind11.h>\r\nnamespace py = pybind11;\r\n#include <utils/datatype.h> \r\n\r\nPYBIND11_MODULE(py_ltie, m) {\r\n    py::class_<xyz>(m, "xyz")\r\n        /* ... */\r\n        .def(py::init<>());\r\n\r\n    py::class_<funcrst>(m, "funcrst")\r\n        .def(py::init<>())\r\n        .def(py::init<bool, std::string>())\r\n        .def_readwrite("result",&funcrst::result)\r\n        .def_readwrite("explain",&funcrst::explain)\r\n        .def("__bool__", &funcrst::operator bool);\r\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u679a\u4e3e",children:"\u679a\u4e3e"}),"\n",(0,l.jsx)(n.p,{children:"c++\u4e2d\u7684\uff08\u5f3a\uff09\u679a\u4e3e\uff0c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c++",children:"enum class Look_Diredction      { error, left, right }; \n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8f6c\u5230pybind11,"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c++",children:'/// your_libs.cpp\r\n#include <pybind11/pybind11.h>\r\nnamespace py = pybind11;\r\n#include <utils/datatype.h> \r\n#include <algo/datatype.h>\r\n\r\nPYBIND11_MODULE(py_ltie, m) {\r\n    py::class_<xyz>(m, "xyz")\r\n        /* ... */\r\n        .def(py::init<>());\r\n\r\n    py::class_<funcrst>(m, "funcrst")\r\n        /* ... */\r\n        .def(py::init<>());\r\n\r\n    py::enum_<Look_Diredction>(m, "look_direction")\r\n        .value("error", Look_Diredction::error)\r\n        .value("left", Look_Diredction::left)\r\n        .value("right", Look_Diredction::right)\r\n        .export_values();\r\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u6a21\u677f\u7c7b",children:"\u6a21\u677f\u7c7b"}),"\n",(0,l.jsxs)(n.p,{children:["\u4ee5",(0,l.jsx)(n.code,{children:"pt2<>"}),"\u4e3a\u4f8b, \u662f\u4e00\u4e2a\u5b58\u653e\u548c\u8ba1\u7b97\u50cf\u5e73\u9762\u5750\u6807\u7684\u6a21\u677f\u7c7b,"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c++",children:"/// include/utils/datatype.h\r\ntemplate<typename type>\r\nclass pt2\r\n{\r\n    static_assert(std::is_same<type, int>::value || std::is_same<type, double>::value \r\n                  , \"Type must be short int, or double.\");\r\npublic:\r\n    pt2() :c(0), r(0) {};\r\n    pt2(type row_, type col_) :c(col_), r(row_) {};\r\n\r\n    type norm() { ...};\r\n    pt2<type> abs_() { ... };\r\n    pt2<type> unit() { ...};\r\n\r\n    bool operator !=(pt2<type> src) {return !operator==(src);};\r\n    bool operator ==(const pt2<type> src) {...};\r\n    pt2<type> operator-(pt2<type> src) {...};\r\n    pt2<type> operator+(pt2<type> src) {...};\r\n    pt2<type> operator/(const type m) {...};\r\n    pt2<type> operator*(const type m) {...};\r\n\r\n    template<typename _Ty2>\r\n    pt2<_Ty2> to() {\r\n        return pt2<_Ty2>(this->r, this->c);\r\n    }\r\n\r\npublic:\r\n    type r; /// @brief equal with 'y' & 'row'\r\n    type c; /// @brief equal with 'x' & 'col'\r\n};\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u6211\u4eec\u9700\u8981\u5728python\u4e2d\u63d0\u4f9b",(0,l.jsx)(n.code,{children:"pt2<int>"}),"\u548c",(0,l.jsx)(n.code,{children:"p2<double>"}),"\u7684\u6570\u636e\u63a5\u53e3\uff0c\u90a3\u4e48\u9700\u8981\u5728",(0,l.jsx)(n.code,{children:"your_libs.cpp"}),'\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u6a21\u677f\u51fd\u6570"\u7279\u5316"\u7684\u51fd\u6570\u3002']}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c++",children:'template <typename T>\r\nvoid template_pt2(py::module& m, const std::string& className) {\r\n    py::class_<pt2<T>>(m, className.c_str())\r\n        .def(py::init<>())\r\n        .def(py::init<T, T>())\r\n        .def("norm",&pt2<T>::norm)\r\n        .def("abs",&pt2<T>::abs_)\r\n        .def("unit",&pt2<T>::unit)\r\n        .def("__add__", &pt2<T>::operator+)\r\n        .def("__sub__", &pt2<T>::operator-)\r\n        .def("__mul__", &pt2<T>::operator*)\r\n        .def("__truediv__", &pt2<T>::operator/)\r\n        .def_readwrite("r", &pt2<T>::r)\r\n        .def_readwrite("c", &pt2<T>::c);\r\n}\r\n\r\nPYBIND11_MODULE(py_ltie, m) {\r\n    /* \u5176\u4ed6\u5b9a\u4e49 */\r\n    template_pt2<int>(m, "pt2i");\r\n    template_pt2<double>(m, "pt2d");\r\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"todo",children:"TODO"}),"\n",(0,l.jsx)(n.p,{children:"\u6d3e\u751f\u7c7b, \u9759\u6001\u53d8\u91cf\u7b49... \u4ee5\u540e\u6709\u673a\u4f1a\u63a5\u89e6\u5230\u4e86\u518d\u5b8c\u5584\u76f8\u5173\u5185\u5bb9"}),"\n",(0,l.jsx)(n.h2,{id:"pyd\u4f7f\u7528",children:"pyd\u4f7f\u7528"}),"\n",(0,l.jsx)(n.p,{children:"\u5b8c\u6210\u4e0a\u8ff0\u5185\u5bb9\u540e, \u901a\u8fc7\u7f16\u8bd1\u53ef\u4ee5\u5f97\u5230\u51e0\u4e2a\u6587\u4ef6"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"py_ltie.cp310-win_amd64.pyd"}),"\n",(0,l.jsx)(n.li,{children:"py_ltie.exp"}),"\n",(0,l.jsx)(n.li,{children:"py_ltie.lib"}),"\n",(0,l.jsx)(n.li,{children:"python310.dll"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"(\u56e0\u4e3a\u6211\u94fe\u63a5\u7684python\u7248\u672c\u662f310, C++\u7f16\u8bd1\u5668\u662famd64\u7248, \u6240\u4ee5\u5f97\u5230\u7684pyd\u6587\u4ef6\u7684\u540e\u7f00\u662f\u201ccp310-win_amd64.pyd\u201d)"}),"\n",(0,l.jsxs)(n.p,{children:["\u5c06\u8fd9\u4e9b\u6587\u4ef6\u4e0e",(0,l.jsx)(n.code,{children:"my_utils.dll"}),", ",(0,l.jsx)(n.code,{children:"my_algo.dll"}),"\u4f9d\u8d56\u7684\u4e09\u65b9\u52a8\u6001\u5e93\uff0c\u653e\u5230\u540c\u4e00\u76ee\u5f55\u4e0b\uff08\u6700\u597d\u53ef\u4ee5\u88abpython\u68c0\u7d22\u5230\uff09"]}),"\n",(0,l.jsxs)(n.p,{children:["\u6bd4\u5982\uff0c\u8fd9py_ltie\u4f9d\u8d56",(0,l.jsx)(n.code,{children:"my_utils.dll"}),", ",(0,l.jsx)(n.code,{children:"my_algo.dll"}),"\uff0c\u800c\u4fe9\u52a8\u6001\u5e93\u53c8\u4f9d\u8d56gdal, fmt, tinyxml2, nlohoman_json, fftw\u7b49\u52a8\u6001\u5e93\u3002\u4f46\u901a\u5e38\u5728\u7f16\u8bd1",(0,l.jsx)(n.code,{children:"my_utils.dll"}),"\u548c ",(0,l.jsx)(n.code,{children:"my_algo.dll"}),"\u65f6\uff0c\u7cfb\u7edf\u5c31\u5df2\u7ecf\u914d\u597d\u73af\u5883\u4e86\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u6211\u5c06\u5b83\u4eec\uff08pyd, mu_utils.dll, my_algo.dll, gdal.dll, libtiff.dll, ...\uff09\u6253\u5305\u653e\u5230",(0,l.jsx)(n.code,{children:"d:/python310/Lib/site-packages/ltie/"}),"\u5730\u5740\u5185\u3002\uff08ltie\u662f\u8be5\u5de5\u7a0b\u7684\u547d\u540d\u7f29\u5199\uff09"]}),"\n",(0,l.jsx)(n.p,{children:"\u4efb\u610f\u4f4d\u7f6e\u521b\u5efa\u4e00\u4e2a.py\u6587\u4ef6, \u5199\u5165"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'from ltie.py_ltie import pt2d\r\n\r\np1 = pt2d(23.12, 9.42)\r\np2 = pt2i(9.2, 1.2)\r\np3 = p1 + p2\r\nprint("p1 :", p1.r, p1.c)\r\nprint("p2 :", p2.r, p2.c)\r\nprint("p3 :", p3.r, p3.c)\r\nprint("p3.norm :", p3.norm())\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"from ltie.py_ltie import pt2i"}),"\u4e2d,"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"ltie"}),'\u662fsite-packages\u4e0b\u7684\u6587\u4ef6\u5939"ltie"']}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"py_ltie"}),"\u662f\u6211\u4eec\u751f\u6210\u7684pyd\u6587\u4ef6,"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"pt2i"}),"\u662fpy_ltie\u4e2d\u7684\u4e00\u4e2a\u7279\u5316\u6a21\u677f\u7c7b"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884cpython\u811a\u672c, \u5f97\u5230\u7ed3\u679c\u5982\u4e0b\u6240\u793a"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"py_ltie_running_result",src:r(19718).A+"",width:"796",height:"304"})}),"\n",(0,l.jsx)(n.h2,{id:"pybind11-stubgen",children:"pybind11-stubgen"}),"\n",(0,l.jsxs)(n.p,{children:["\u751f\u6210pyd\u6587\u4ef6\u540e, \u6211\u4eec\u5df2\u7ecf\u53ef\u4ee5\u57fa\u4e8e\u5b83\u7f16\u5199python\u811a\u672c, \u4f46\u6ca1\u6709\u667a\u80fd\u63d0\u793a\u4f1a\u5bfc\u81f4\u975e\u5e38\u5bb9\u6613\u5199\u9519\u4ee3\u7801, \u6240\u4ee5\u6211\u4eec\u9700\u8981\u501f\u52a9",(0,l.jsx)(n.code,{children:"pybind11-stubgen"}),"\u5de5\u5177\u6765\u5236\u4f5c\u4e0epyd\u6587\u4ef6\u76f8\u5bf9\u5e94\u7684pyi\u6587\u4ef6\uff0c\u4f7fIDE\u7684\u667a\u80fd\u63d0\u793a\u529f\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u5b89\u88c5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"pip install pybind11-stubgen\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u8f93\u5165",(0,l.jsx)(n.code,{children:"pybind11-stubgen -v"}),"\u53ef\u4ee5\u67e5\u770b\u662f\u5426\u5b89\u88c5\u6210\u529f\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u4fdd\u8bc1pyd\u6587\u4ef6\u53ef\u4ee5\u88abpython\u5de5\u5177\u68c0\u7d22\u5230\u540e, \u8f93\u5165",(0,l.jsx)(n.code,{children:"pybind11-stubgen.exe py_ltie"}),", \u5982\u679c\u6ca1\u6709\u5feb\u901f\u62a5\u9519, \u4e00\u822c\u5c31\u662f\u8f93\u51fa\u6210\u529f\u4e86"]}),"\n",(0,l.jsx)(n.p,{children:"\u7ed3\u675f\u540e\u4f1a\u5728\u5f53\u524d\u5730\u5740(\u6bd4\u5982\u6211\u6240\u4f7f\u7528\u8bbe\u5907\u7684powershell\u7684\u9ed8\u8ba4\u5730\u5740\u662fc:/user/lenovo)\u521b\u5efa\u4e00\u4e2astubs\u6587\u4ef6\u5939, \u91cc\u9762\u6709\u4e00\u4e2altie\u6587\u4ef6\u5939, \u91cc\u9762\u5b58\u653e\u8fd9\u4e00\u4e2apy_ltie.pyi"}),"\n",(0,l.jsx)(n.p,{children:"\u5c06pyi\u6587\u4ef6\u62f7\u8d1d\u81f3site-packages/ltie/\u540e, \u518d\u6b21\u4f7f\u7528VSCode\u5199\u4ee3\u7801\u65f6, \u5c31\u51fa\u73b0\u4e86\u667a\u80fd\u63d0\u793a\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"pyi",src:r(44701).A+"",width:"940",height:"399"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},19718:(e,n,r)=>{r.d(n,{A:()=>d});const d=r.p+"assets/images/py_ltie_running_result-5099492bf35a63c61874c2e994f094a5.png"},60326:(e,n,r)=>{r.d(n,{A:()=>d});const d=r.p+"assets/images/py_ltie_target-6bd42d3d1ce24693d016b383d8c33524.png"},89162:(e,n,r)=>{r.d(n,{A:()=>d});const d=r.p+"assets/images/pybind11_logo-8d803c9312cd96da2e5a20a8bf9e90fe.png"},44701:(e,n,r)=>{r.d(n,{A:()=>d});const d=r.p+"assets/images/pybind11_pyi-6307da1fa23657a3e14d813a5f419749.png"},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>c});var d=r(96540);const l={},i=d.createContext(l);function s(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);