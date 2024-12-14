"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6979],{88753:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>t,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"code/cpp/spdlog","title":"spdlog","description":"Very fast, header-only/compiled, C++ logging library.","source":"@site/docs/code/cpp/spdlog.md","sourceDirName":"code/cpp","slug":"/code/cpp/spdlog","permalink":"/docs/code/cpp/spdlog","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"custom_edit_url":null},"sidebar":"code","previous":{"title":"pybind11","permalink":"/docs/code/cpp/pybind11"},"next":{"title":"sqlite3","permalink":"/docs/code/cpp/sqlite3"}}');var i=n(74848),o=n(28453);const s={custom_edit_url:null},d="spdlog",t={},a=[{value:"\u53c2\u8003\u4fe1\u606f",id:"\u53c2\u8003\u4fe1\u606f",level:2},{value:"\u5e73\u53f0",id:"\u5e73\u53f0",level:2},{value:"logger\u7c7b\u578b",id:"logger\u7c7b\u578b",level:2},{value:"Create basic logger",id:"create-basic-logger",level:3},{value:"Create rotating logger",id:"create-rotating-logger",level:3},{value:"Create daily logger",id:"create-daily-logger",level:3},{value:"\u57fa\u672c\u64cd\u4f5c",id:"\u57fa\u672c\u64cd\u4f5c",level:2},{value:"\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\u4fe1\u606f",id:"\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\u4fe1\u606f",level:3},{value:"\u521b\u5efa\u65e5\u5fd7\u6587\u4ef6",id:"\u521b\u5efa\u65e5\u5fd7\u6587\u4ef6",level:3}];function g(e){const l={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.header,{children:(0,i.jsx)(l.h1,{id:"spdlog",children:"spdlog"})}),"\n",(0,i.jsx)(l.p,{children:"Very fast, header-only/compiled, C++ logging library."}),"\n",(0,i.jsx)(l.h2,{id:"\u53c2\u8003\u4fe1\u606f",children:"\u53c2\u8003\u4fe1\u606f"}),"\n",(0,i.jsx)(l.p,{children:(0,i.jsx)(l.a,{href:"https://github.com/gabime/spdlog",children:"gabime/spdlog"})}),"\n",(0,i.jsx)(l.p,{children:(0,i.jsx)(l.a,{href:"https://github.com/gabime/spdlog/wiki",children:"spdlog.Wiki"})}),"\n",(0,i.jsx)(l.p,{children:"\u53ea\u662f\u5199\u4e00\u4e9b\u81ea\u5df1\u5df2\u7ecf\u7528\u5230\u7684\u5185\u5bb9, \u4f1a\u5f88\u6d45, \u8be6\u7ec6\u8bf4\u660e\u53ef\u4ee5\u76f4\u63a5\u770bgithub\u3002"}),"\n",(0,i.jsx)(l.h2,{id:"\u5e73\u53f0",children:"\u5e73\u53f0"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:"Linux, FreeBSD, OpenBSD, Solaris, AIX"}),"\n",(0,i.jsx)(l.li,{children:"Windows (msvc 2013+, cygwin)"}),"\n",(0,i.jsx)(l.li,{children:"macOS (clang 3.5+)"}),"\n",(0,i.jsx)(l.li,{children:"Android"}),"\n"]}),"\n",(0,i.jsx)(l.p,{children:"\u6839\u636egithub\u4e0a\u7684\u4fe1\u606f, \u5e94\u8be5\u662f\u4e0d\u652f\u6301Windows MinGW\u7f16\u8bd1\u5668, \u81ea\u5df1\u4e5f\u5728msys\u4e0b\u8f7d\u5e93\u4f46\u65e0\u6cd5\u4f7f\u7528..."}),"\n",(0,i.jsx)(l.h2,{id:"logger\u7c7b\u578b",children:"logger\u7c7b\u578b"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:"basic logger, \u65e0\u7279\u6b8a\u529f\u80fd\u3001\u6587\u4ef6\u5927\u5c0f\u4f1a\u968f\u6587\u672c\u5185\u5bb9\u65e0\u7ebf\u589e\u957f\u7684logger"}),"\n",(0,i.jsx)(l.li,{children:"rotating logger, \u5e94\u8be5\u662f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u6587\u672c\u65e5\u5fd7\u5927\u5c0f\u548c\u6570\u91cf\u7684logger, \u53ef\u4ee5\u63a7\u5236\u65e5\u5fd7\u6570\u91cf"}),"\n",(0,i.jsx)(l.li,{children:"daily logger, \u6bcf\u5929\u5b9a\u65f6(\u81ea\u5b9a\u4e49\u65f6\u95f4)\u521b\u5efa\u4e00\u4e2a\u65b0\u65e5\u5fd7\u6587\u4ef6\u7684logger"}),"\n"]}),"\n",(0,i.jsx)(l.h3,{id:"create-basic-logger",children:"Create basic logger"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-cpp",children:'#include "spdlog/sinks/basic_file_sink.h"\r\nvoid basic_logfile_example()\r\n{\r\n    try {\r\n        auto logger = spdlog::basic_logger_mt("basic_logger", "logs/basic-log.txt");\r\n    }\r\n    catch (const spdlog::spdlog_ex &ex){\r\n        std::cout << "Log init failed: " << ex.what() << std::endl;\r\n    }\r\n}\n'})}),"\n",(0,i.jsx)(l.h3,{id:"create-rotating-logger",children:"Create rotating logger"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-cpp",children:'#include "spdlog/sinks/rotating_file_sink.h"\r\nvoid rotating_example()\r\n{\r\n    // Create a file rotating logger with 5mb size max and 3 rotated files\r\n    auto max_size = 1048576 * 5;\r\n    auto max_files = 3;\r\n    auto logger = spdlog::rotating_logger_mt("some_logger_name", "logs/rotating.txt", max_size, max_files);\r\n}\n'})}),"\n",(0,i.jsx)(l.h3,{id:"create-daily-logger",children:"Create daily logger"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-cpp",children:'#include "spdlog/sinks/daily_file_sink.h"\r\nvoid daily_example()\r\n{\r\n    // Create a daily logger - a new file is created every day on 2:30am\r\n    auto logger = spdlog::daily_logger_mt("daily_logger", "logs/daily.txt", 2, 30);\r\n}\n'})}),"\n",(0,i.jsx)(l.p,{children:"spdlog\u4e5f\u662f\u53ef\u4ee5\u652f\u6301\u5f02\u6b65\u6253\u5370\u65e5\u5fd7\u7684\u3002"}),"\n",(0,i.jsx)(l.h2,{id:"\u57fa\u672c\u64cd\u4f5c",children:"\u57fa\u672c\u64cd\u4f5c"}),"\n",(0,i.jsx)(l.p,{children:"spdlog\u4f7f\u7528\u4e86fmt\u5e93, \u53ef\u4ee5\u4f7f\u7528\u4e0epython\u7c7b\u4f3c\u7684\u683c\u5f0f\u6253\u5370\u6587\u672c\u4fe1\u606f\u3002"}),"\n",(0,i.jsx)(l.p,{children:"\u5173\u4e8efmt\u7684\u4f7f\u7528\u65b9\u6cd5\uff0c\u53ef\u53c2\u8003\u65c1\u8fb9\u6587\u7ae0\u3002"}),"\n",(0,i.jsx)(l.h3,{id:"\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\u4fe1\u606f",children:"\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\u4fe1\u606f"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-cpp",children:'#include "spdlog/spdlog.h"\r\n\r\nint main() \r\n{\r\n    spdlog::info("Welcome to spdlog!");\r\n    spdlog::error("Some error message with arg: {}", 1);\r\n    \r\n    spdlog::warn("Easy padding in numbers like {:08d}", 12);\r\n    spdlog::critical("Support for int: {0:d};  hex: {0:x};  oct: {0:o}; bin: {0:b}", 42);\r\n    spdlog::info("Support for floats {:03.2f}", 1.23456);\r\n    spdlog::info("Positional args are {1} {0}..", "too", "supported");\r\n    spdlog::info("{:<30}", "left aligned");\r\n    \r\n    spdlog::set_level(spdlog::level::debug); // Set global log level to debug\r\n    spdlog::debug("This message should be displayed..");    \r\n    \r\n    // change log pattern\r\n    spdlog::set_pattern("[%H:%M:%S %z] [%n] [%^---%L---%$] [thread %t] %v");\r\n    \r\n    // Compile time log levels\r\n    // define SPDLOG_ACTIVE_LEVEL to desired level\r\n    SPDLOG_TRACE("Some trace message with param {}", 42);\r\n    SPDLOG_DEBUG("Some debug message");\r\n}\n'})}),"\n",(0,i.jsxs)(l.p,{children:["spdlog\u4e2d\u6253\u5370\u7684\u4fe1\u606f\u767b\u8bb0\u88ab\u5206\u4e3a",(0,i.jsx)(l.code,{children:"info"}),", ",(0,i.jsx)(l.code,{children:"warn"}),", ",(0,i.jsx)(l.code,{children:"error"}),", \u548c",(0,i.jsx)(l.code,{children:"critical"}),"\u56db\u79cd\u3002"]}),"\n",(0,i.jsx)(l.h3,{id:"\u521b\u5efa\u65e5\u5fd7\u6587\u4ef6",children:"\u521b\u5efa\u65e5\u5fd7\u6587\u4ef6"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-cpp",children:'#include <iostream>\r\n#include "spdlog/spdlog.h"\r\n#include "spdlog/sinks/basic_file_sink.h" // support for basic file logging\r\n#include "spdlog/sinks/rotating_file_sink.h" // support for rotating file logging\r\n\r\nint main(int, char* [])\r\n{\r\n    try \r\n    {\r\n        // Create basic file logger (not rotated)\r\n        auto my_logger = spdlog::basic_logger_mt("basic_logger", "logs/basic.txt");\r\n        \r\n        // create a file rotating logger with 5mb size max and 3 rotated files\r\n        auto file_logger = spdlog::rotating_logger_mt("file_logger", "myfilename", 1024 * 1024 * 5, 3);\r\n    }\r\n    catch (const spdlog::spdlog_ex& ex)\r\n    {\r\n        std::cout << "Log initialization failed: " << ex.what() << std::endl;\r\n    }\r\n}\n'})})]})}function c(e={}){const{wrapper:l}={...(0,o.R)(),...e.components};return l?(0,i.jsx)(l,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},28453:(e,l,n)=>{n.d(l,{R:()=>s,x:()=>d});var r=n(96540);const i={},o=r.createContext(i);function s(e){const l=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function d(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:l},e.children)}}}]);