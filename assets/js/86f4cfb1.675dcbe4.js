"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5119],{98654:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"code/cpp/nlohmann_json","title":"nlohmann::json","description":"JSON for Modern C++\uff0cstarts\uff0c\u8be6\u7ec6\u7684\u8bf4\u660e\u53ef\u524d\u5f80github\u5b66\u4e60\u4f7f\u7528\u3002","source":"@site/docs/code/cpp/nlohmann_json.md","sourceDirName":"code/cpp","slug":"/code/cpp/nlohmann_json","permalink":"/docs/code/cpp/nlohmann_json","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"custom_edit_url":null},"sidebar":"code","previous":{"title":"matlab","permalink":"/docs/code/cpp/matlab"},"next":{"title":"spdlog","permalink":"/docs/code/cpp/spdlog"}}');var s=r(74848),o=r(28453);const i={custom_edit_url:null},l="nlohmann::json",d={},a=[{value:"Json\u6587\u4ef6\u7c7b\u578b",id:"json\u6587\u4ef6\u7c7b\u578b",level:2},{value:"Json\u6570\u636e\u7c7b\u578b",id:"json\u6570\u636e\u7c7b\u578b",level:2},{value:"\u5199Json",id:"\u5199json",level:2},{value:"\u8bfbJson",id:"\u8bfbjson",level:2},{value:"\u8bfb\u53d6Json\u5e76\u5199\u5165QTreeWidget",id:"\u8bfb\u53d6json\u5e76\u5199\u5165qtreewidget",level:2}];function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"nlohmannjson",children:"nlohmann::json"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://github.com/nlohmann/json",children:"JSON for Modern C++"}),"\uff0c",(0,s.jsx)(e.img,{src:"https://img.shields.io/github/stars/nlohmann/json.svg",alt:"starts"}),"\uff0c\u8be6\u7ec6\u7684\u8bf4\u660e\u53ef\u524d\u5f80github\u5b66\u4e60\u4f7f\u7528\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"json\u6587\u4ef6\u7c7b\u578b",children:"Json\u6587\u4ef6\u7c7b\u578b"}),"\n",(0,s.jsx)(e.p,{children:"Json\u6587\u4ef6\u5206\u4e3aJson\u548cOrdered_Json, \u5176\u4e2dOrdered_Json\u7684\u5b58\u50a8\u987a\u5e8f\u4e0e\u586b\u5199\u987a\u5e8f\u4e00\u81f4, \u800c\u9ed8\u8ba4\u7684Json\u5219\u662f\u6309\u7167\u5b57\u6bcd\u987a\u5e8f\u6392\u5e8f"}),"\n",(0,s.jsx)(e.h2,{id:"json\u6570\u636e\u7c7b\u578b",children:"Json\u6570\u636e\u7c7b\u578b"}),"\n",(0,s.jsx)(e.p,{children:"Object, Array, String, Number, Bool"}),"\n",(0,s.jsx)(e.h2,{id:"\u5199json",children:"\u5199Json"}),"\n",(0,s.jsx)(e.p,{children:"code:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:'nlohmann::json j;\r\nj["part1"]["section1_string"] = "this is string";\r\nj["part1"]["section2_number"] = 3.1415926;\r\nj["part2"]["section1_array_number"] = {1,2,3,4};\r\nj["part2"]["section2_array_string"] = {"str1","str2","str3"};\r\n\r\nstd::ofstream ofs("./path.json");\r\nif(!ofs.is_open()){\r\n    return false;\r\n}\r\n/// \u63a7\u5236\u7f29\u8fdb\r\nofs<<j.dump(4);\r\nofs.close();\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u8f93\u51fa\u7ed3\u679c(\u5927\u6982\u5427\uff0c\u6bd5\u7adf\u4e0d\u662f\u901a\u8fc7\u4ee3\u7801\u751f\u6210\u7684json...):"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\r\n    "part1":{\r\n        "section1_string":"this is string",\r\n        "section2_number":3.1415926\r\n    },\r\n    "part2":{\r\n        "section1_array_number":[\r\n            1,\r\n            2,\r\n            3,\r\n            4\r\n        ],\r\n        "section2_array_string":[\r\n            "str1",\r\n            "str2",\r\n            "str3"\r\n        ]\r\n    }\r\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u8bfbjson",children:"\u8bfbJson"}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0a\u9762\u7684json\u6587\u4ef6\u4e3a\u4f8b\uff0c\u8bfb\u53d6\u8be5\u6587\u4ef6"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:'std::ifstream ifs("path.json");\r\n    if (!ifs.is_open()) {\r\n        return false;\r\n    }\r\n    nlohmann::json j = nlohmann::json::parse(ifs);\r\n    /// \u5982\u679c\u5bf9\u8bfb\u53d6\u7684json\u987a\u5e8f\u6709\u8981\u6c42\uff1a\r\n    nlohmann::ordered_json oj = nlohmann::json::parse(ifs);\r\n    ifs.close();\r\n\r\n    \n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u8bfb\u53d6json\u5e76\u5199\u5165qtreewidget",children:"\u8bfb\u53d6Json\u5e76\u5199\u5165QTreeWidget"}),"\n",(0,s.jsx)(e.p,{children:".h"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"void print_json(nlohmann::ordered_json json);\r\nvoid json_to_item(nlohmann::ordered_json& json, std::string json_key, QTreeWidgetItem* item);\n"})}),"\n",(0,s.jsx)(e.p,{children:".cpp"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:'void QTreeWidget_Json::print_json(nlohmann::ordered_json json)\r\n{\r\n    for (nlohmann::ordered_json::iterator iter = json.begin();\r\n    iter != json.end();\r\n    ++iter) {\r\n        QTreeWidgetItem* item = new QTreeWidgetItem(this);\r\n        this->json_to_item(iter.value(), iter.key(), item);\r\n    }\r\n}\r\n\r\nvoid QTreeWidget_Json::json_to_item(nlohmann::ordered_json& json, std::string json_key, QTreeWidgetItem* item)\r\n{\r\n    for (auto key : m_jsonKey_filter) {\r\n        if (key == json_key) {\r\n            delete[] item;\r\n            return;\r\n        }\r\n    }\r\n    if (json.is_object()) {\r\n        item->setText(0, json_key.c_str());\r\n        item->setToolTip(0, item->text(0));\r\n        for (nlohmann::ordered_json::iterator iter = json.begin();\r\n            iter != json.end();\r\n            ++iter) {\r\n            QTreeWidgetItem* new_item = new QTreeWidgetItem(item);\r\n            json_to_item(iter.value(), iter.key(), new_item);\r\n        }\r\n    }\r\n    else if (json.is_array()) {\r\n        std::string str = "";\r\n        for (nlohmann::ordered_json::iterator it = json.begin(); it != json.end(); ++it) {\r\n            if ((*it).is_number()) {\r\n                str += fmt::format("{},", (*it).get<double>());\r\n            }\r\n            else if ((*it).is_string()) {\r\n                str += fmt::format("{},", *it);\r\n            }\r\n            \r\n        }\r\n        item->setText(0, json_key.c_str());\r\n        item->setText(1, str.c_str());\r\n        item->setToolTip(0, item->text(0));\r\n        item->setToolTip(1, item->text(1));\r\n    }\r\n    else if (json.is_string()) {\r\n        std::string str = fmt::format("{}", json);\r\n        item->setText(0, json_key.c_str());\r\n        item->setText(1, str.c_str());\r\n        item->setToolTip(0, item->text(0));\r\n        item->setToolTip(1, item->text(1));\r\n        //item->setFlags(item->flags() | Qt::ItemIsEditable);\r\n    }\r\n    else if (json.is_number()) {\r\n        //if(json.is_number_float())\r\n        std::string str = fmt::format("{}", json.get<double>());\r\n        item->setText(0, json_key.c_str());\r\n        item->setText(1, str.c_str());\r\n        item->setToolTip(0, item->text(0));\r\n        item->setToolTip(1, item->text(1));\r\n    }\r\n    else if (json.is_boolean()) {\r\n        std::string str =  json ? "true" : "false";\r\n        item->setText(0, json_key.c_str());\r\n        item->setText(1, str.c_str());\r\n        item->setToolTip(0, item->text(0));\r\n        item->setToolTip(1, item->text(1));\r\n    }\r\n    else {\r\n        return;\r\n    }\r\n    return;\r\n}\n'})})]})}function m(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>i,x:()=>l});var t=r(96540);const s={},o=t.createContext(s);function i(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);