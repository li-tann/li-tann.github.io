"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4265],{5756:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=i(5893),a=i(1151);const r={title:"Mastering CMake",sidebar_position:0,custom_edit_url:null},t=void 0,c={id:"code/cmake/mastering_cmake",title:"Mastering CMake",description:"Mastering CMake study notes",source:"@site/docs/code/cmake/mastering_cmake.md",sourceDirName:"code/cmake",slug:"/code/cmake/mastering_cmake",permalink:"/docs/code/cmake/mastering_cmake",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Mastering CMake",sidebar_position:0,custom_edit_url:null},sidebar:"code",previous:{title:"CMake",permalink:"/docs/category/cmake"},next:{title:"find_package",permalink:"/docs/code/cmake/cmake_find_package"}},l={},o=[{value:"Getting Started",id:"getting-started",level:2},{value:"Hello World for CMake",id:"hello-world-for-cmake",level:3},{value:"Configure and Generate",id:"configure-and-generate",level:3},{value:"Specifying the Compiler to CMake",id:"specifying-the-compiler-to-cmake",level:3},{value:"Build Configurations",id:"build-configurations",level:3},{value:"Building Your Project",id:"building-your-project",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3},{value:"Writing CMakeLists Files",id:"writing-cmakelists-files",level:2},{value:"Comments(\u6ce8\u91ca)",id:"comments\u6ce8\u91ca",level:3},{value:"variables(\u53d8\u91cf)",id:"variables\u53d8\u91cf",level:3},{value:"Variable Scope",id:"variable-scope",level:3},{value:"Commands(\u6307\u4ee4)",id:"commands\u6307\u4ee4",level:3},{value:"Conditional Statements (if)",id:"conditional-statements-if",level:3},{value:"Looping Constructs (foreach, while)",id:"looping-constructs-foreach-while",level:3},{value:"Procedure definitions (macro, function)",id:"procedure-definitions-macro-function",level:3},{value:"Regular Expressions",id:"regular-expressions",level:3},{value:"Advanced Commands",id:"advanced-commands",level:3},{value:"CMake Cache",id:"cmake-cache",level:2},{value:"Key Concepts",id:"key-concepts",level:2},{value:"Policies",id:"policies",level:2},{value:"Modules",id:"modules",level:2},{value:"Installing Files",id:"installing-files",level:2},{value:"System Inspection",id:"system-inspection",level:2},{value:"Finding Packages",id:"finding-packages",level:2},{value:"Custom Commands",id:"custom-commands",level:2},{value:"Converting Existing Systems To CMake",id:"converting-existing-systems-to-cmake",level:2},{value:"Cross Compiling With CMake",id:"cross-compiling-with-cmake",level:2},{value:"Packaging With CPack",id:"packaging-with-cpack",level:2},{value:"Testing With CMake and CTest",id:"testing-with-cmake-and-ctest",level:2},{value:"CDash",id:"cdash",level:2},{value:"CMake Tutorial",id:"cmake-tutorial",level:2},{value:"User Interaction Guide",id:"user-interaction-guide",level:2},{value:"Using Dependencies Guide",id:"using-dependencies-guide",level:2},{value:"Importing and Exporting Guide",id:"importing-and-exporting-guide",level:2},{value:"IDE Integration Guide",id:"ide-integration-guide",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Mastering CMake"})," study notes"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://cmake.org/cmake/help/book/mastering-cmake/index.html",children:"Mastering CMake"})}),"\n",(0,s.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsx)(n.h3,{id:"hello-world-for-cmake",children:"Hello World for CMake"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"cmake_minimum_required"}),", the first line of the top level CMakeLists file should always be."]}),"\n",(0,s.jsxs)(n.p,{children:["This allows projects to require a given ",(0,s.jsx)(n.strong,{children:"version of CMake"})," and, in addition, allows CMake to be ",(0,s.jsx)(n.strong,{children:"backwards compatible(\u5411\u540e\u517c\u5bb9)"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"\u8bbe\u5b9aCMake\u7248\u672c\u5e76\u4e14\u652f\u6301\u5411\u540e\u517c\u5bb9"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"project"}),", the next line of any top level CMakeLists file should be."]}),"\n",(0,s.jsxs)(n.p,{children:["This command sets ",(0,s.jsx)(n.strong,{children:"the name of the project"})," and ",(0,s.jsx)(n.strong,{children:"may specify other options"})," such as language or version."]}),"\n",(0,s.jsx)(n.p,{children:"\u8bbe\u7f6e\u5de5\u7a0b\u540d\u79f0, \u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u8bed\u8a00\u3001\u7248\u672c\u7b49\u5176\u4ed6\u4fe1\u606f\uff08\u540e\u9762\u5e94\u8be5\u4f1a\u6709\u8be6\u7ec6\u8bf4\u660e\uff09"}),"\n",(0,s.jsxs)(n.p,{children:["The project will contain all targets that are in the CMakeLists.txt file and any subdirectories, as specified by the ",(0,s.jsx)(n.code,{children:"add_subdirectory"})," command.(If the ",(0,s.jsx)(n.code,{children:"EXCLUDE_FROM_ALL"})," option is used in the ",(0,s.jsx)(n.code,{children:"add_subdirectory"})," command, the generated project will not appear in the top-level Makefile or IDE project file; this is useful for generating sub-projects that do not make sense as part of the main build process.)"]}),"\n",(0,s.jsxs)(n.p,{children:["project\u4f1a\u94fe\u63a5\u6240\u6709\u7684targets, \u5305\u62ec\u901a\u8fc7",(0,s.jsx)(n.code,{children:"add_subdirectory"}),"\u6dfb\u52a0\u7684\u5b50\u76ee\u5f55, \u9664\u975e\u5728\u5b50\u76ee\u5f55\u4e2d\u8bbe\u7f6e",(0,s.jsx)(n.code,{children:"EXCLUDE_FROM_ALL"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"add_executable"}),", be used to add an executable to the project using the given source file."]}),"\n",(0,s.jsx)(n.h3,{id:"configure-and-generate",children:"Configure and Generate"}),"\n",(0,s.jsx)(n.p,{children:"After a CMakeLists file has been created, CMake processes the text file and creates entries in a cache file. Users may edit the CMakeLists file or specify cache values with the CMake gui or ccmake and re-configure. Next, CMake uses the cache entries to generate a project in the user\u2019s desired build system (e.g. Makefile or Visual Studio solution)."}),"\n",(0,s.jsx)(n.p,{children:"\u5199\u597dCMakeLists.txt\u540e\uff0c\u5c31\u9700\u8981\u914d\u7f6e\u548c\u751f\u6210\u9879\u76ee\uff0c\u53ef\u4ee5\u901a\u8fc7gui/command\u7b49\u591a\u79cd\u9014\u5f84\u3002\u4f46\u662f\u5728\u914d\u7f6e\u524d\u8fd8\u9700\u8981\u8fdb\u884c\u4e00\u4e9b\u8bbe\u7f6e, \u4f8b\u5982\u6784\u5efa\u76ee\u5f55\u3001\u8bbe\u7f6e\u7f16\u8bd1\u5668\u7b49\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"specifying-the-compiler-to-cmake",children:"Specifying the Compiler to CMake"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"CC"})," environment variable specifies the C compiler, while ",(0,s.jsx)(n.code,{children:"CXX"})," specifies the C++ compiler.You can specify the compilers directly on the command line by using ",(0,s.jsx)(n.code,{children:"-DCMAKE_CXX_COMPILER=cl"})," for example."]}),"\n",(0,s.jsxs)(n.p,{children:["Once cmake has been run and picked a compiler, if you wish to change the compiler, start over with ",(0,s.jsx)(n.strong,{children:"an empty binary directory"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The flags for the compiler and the linker can also be changed by setting environment variables. Setting ",(0,s.jsx)(n.code,{children:"LDFLAGS"})," will initialize the cache values for link flags, while ",(0,s.jsx)(n.code,{children:"CXXFLAGS"})," and ",(0,s.jsx)(n.code,{children:"CFLAGS"})," will initialize ",(0,s.jsx)(n.code,{children:"CMAKE_CXX_FLAGS"})," and ",(0,s.jsx)(n.code,{children:"CMAKE_C_FLAGS"})," respectively."]}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7",(0,s.jsx)(n.code,{children:"-DCMAKE_CXX_COMPILER=cl"}),"\u547d\u4ee4\u53ef\u4ee5\u8bbe\u7f6eC++\u7f16\u8bd1\u5668\u4e3acl(\u4e0d\u8fc7\u5728VSCode\u3001VisualStudio\u7b49\u5177\u5907CMake\u76f8\u5173\u7ec4\u4ef6\u7684IDE\u4e2d, \u90fd\u5177\u6709\u53ef\u89c6\u5316\u7684\u7f16\u8bd1\u5668\u8bbe\u7f6e\u9009\u9879)\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"vscode, set compiler",src:i(7696).Z+"",width:"1188",height:"51"})}),"\n",(0,s.jsx)(n.h3,{id:"build-configurations",children:"Build Configurations"}),"\n",(0,s.jsxs)(n.p,{children:["Build configurations allow a project to be built in different ways for debug, optimized, or any other special set of flags. CMake supports, by ",(0,s.jsx)(n.strong,{children:"default"}),", ",(0,s.jsx)(n.strong,{children:"Debug"}),", ",(0,s.jsx)(n.strong,{children:"Release"}),", ",(0,s.jsx)(n.strong,{children:"MinSizeRel"}),", and ",(0,s.jsx)(n.strong,{children:"RelWithDebInfo"})," configurations."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Debug has the basic debug flags turned on."}),"\n",(0,s.jsx)(n.li,{children:"Release has the basic optimizations turned on."}),"\n",(0,s.jsx)(n.li,{children:"MinSizeRel has flags that produce the smallest object code, but not necessarily the fastest code."}),"\n",(0,s.jsx)(n.li,{children:"RelWithDebInfo builds an optimized build with debug information as well."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"CMake handles the configurations in slightly different ways depending on the generator being used."}),"\n",(0,s.jsx)(n.p,{children:"\u4f46\u4e0d\u540c\u7684generator\uff0c\u53ef\u80fd\u4f7fCMake\u5728\u5904\u7406\u914d\u7f6e\u7684\u65b9\u6cd5\u7565\u6709\u4e0d\u540c\u3002"}),"\n",(0,s.jsx)(n.p,{children:"The Visual Studio IDE supports the notion of Build Configurations. A default project in Visual Studio usually has Debug and Release configurations. From the IDE you can select build Debug, and the files will be built with Debug flags. The IDE puts all of the binary files into directories with the name of the active configuration. This brings about an extra complexity for projects that build programs that need to be run as part of the build process from custom commands."}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u4e00\u6bb5\u4e0d\u662f\u5f88\u7406\u89e3..."}),"\n",(0,s.jsx)(n.p,{children:"With Makefile-based generators, only one configuration can be active at the time CMake is run, and it is specified with the CMAKE_BUILD_TYPE variable\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u6784\u5efa\u9879\u76ee\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,s.jsx)(n.code,{children:"-DCMAKE_BUILD_TYPE=Debug/Release"}),"\u6765\u6307\u5b9a\u6784\u5efa\u7c7b\u578b\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"building-your-project",children:"Building Your Project"}),"\n",(0,s.jsxs)(n.p,{children:["Another option is to use cmake\u2019s ",(0,s.jsx)(n.code,{children:"--build"})," option from the command line. This option is simply a convenience that allows you to build your project from the command line, even if that requires launching an IDE."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"cmake --build _build"}),", \u5728",(0,s.jsx)(n.code,{children:"./_build"}),"\u6587\u4ef6\u5939\u4e2d\u6784\u5efa\u9879\u76ee\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,s.jsxs)(n.p,{children:["\u5199CMakeLists.txt\u65f6, \u6700\u57fa\u7840\u7684\u6587\u4ef6\u5e94\u5305\u542b",(0,s.jsx)(n.code,{children:"cmake_minimum_required(VERSION 3.26.0)"}),"\u548c",(0,s.jsx)(n.code,{children:"project(name)"}),", \u901a\u8fc7",(0,s.jsx)(n.code,{children:"add_executable(exe_name hello_world.cpp)"})," \u6765\u6dfb\u52a0\u53ef\u6267\u884c\u6587\u4ef6\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u7f16\u8bd1\u548c\u6784\u5efaCMake\u9879\u76ee\u65f6, \u53ef\u4ee5\u901a\u8fc7",(0,s.jsx)(n.code,{children:"-DCMAKE_CXX_COMPILER=<complier>"})," \u8bbe\u7f6e\u7f16\u8bd1\u5668, \u901a\u8fc7",(0,s.jsx)(n.code,{children:"-DCMAKE_BUILD_TYPE=<build_type>"}),"\u8bbe\u7f6e\u7f16\u8bd1\u7c7b\u578b, \u901a\u8fc7",(0,s.jsx)(n.code,{children:"--build"}),"\u8bbe\u7f6e\u7f16\u8bd1\u76ee\u5f55\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"writing-cmakelists-files",children:"Writing CMakeLists Files"}),"\n",(0,s.jsxs)(n.p,{children:["The CMake language is composed of ",(0,s.jsx)(n.strong,{children:"comments(\u6ce8\u91ca)"}),", ",(0,s.jsx)(n.strong,{children:"commands(\u547d\u4ee4)"}),", and ",(0,s.jsx)(n.strong,{children:"variables(\u53d8\u91cf)"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"comments\u6ce8\u91ca",children:"Comments(\u6ce8\u91ca)"}),"\n",(0,s.jsxs)(n.p,{children:["Comments start with # and run to the end of the line. See the ",(0,s.jsx)(n.a,{href:"https://cmake.org/cmake/help/latest/manual/cmake-language.7.html",children:"cmake-language"})," manual for more details."]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728CMakeLists\u6587\u4ef6\u4e2d,\u7531",(0,s.jsx)(n.code,{children:"#"}),"\u8d77\u59cb\u7684\u884c\u4e3a\u6ce8\u91ca\u884c"]}),"\n",(0,s.jsx)(n.h3,{id:"variables\u53d8\u91cf",children:"variables(\u53d8\u91cf)"}),"\n",(0,s.jsxs)(n.p,{children:["CMakeLists files use variables much like any programming language. CMake variable names are ",(0,s.jsx)(n.strong,{children:"case sensitive(\u5927\u5c0f\u5199\u654f\u611f)"})," and may only contain ",(0,s.jsx)(n.strong,{children:"alphanumeric characters\u5b57\u6bcd\u5b57\u7b26"})," and ",(0,s.jsx)(n.strong,{children:"\u4e0b\u5212\u7ebf"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["A number of useful variables are automatically defined by CMake and are discussed in the ",(0,s.jsx)(n.a,{href:"https://cmake.org/cmake/help/latest/manual/cmake-variables.7.html",children:"cmake-variables"})," manual. These variables begin with ",(0,s.jsx)(n.code,{children:"CMAKE_"}),". Avoid this naming convention (and, ideally, establish your own) for variables specific to your project."]}),"\n",(0,s.jsxs)(n.p,{children:["All CMake variables are stored internally as ",(0,s.jsx)(n.strong,{children:"strings"})," although they may sometimes be interpreted as other types."]}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"set"})," command to set variable values. In its simplest form, the first argument to ",(0,s.jsx)(n.code,{children:"set"})," is the name of the variable and the rest of the arguments are the values. Multiple value arguments are packed into a semicolon-separated list and stored in the variable as a string. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cmake",children:'set(Foo "")      # 1 quoted arg -> value is ""\r\nset(Foo a)       # 1 unquoted arg -> value is "a"\r\nset(Foo "a b c") # 1 quoted arg -> value is "a b c"\r\nset(Foo a b c)   # 3 unquoted args -> value is "a;b;c"\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"set"}),"\u547d\u4ee4, \u7b80\u5355\u7684\u8bed\u6cd5\u662f\u53d8\u91cf\u540d+\u53c2\u6570/\u5b57\u7b26\u4e32, \u5982\u679c\u8f93\u5165\u591a\u4e2a\u53c2\u6570\u4f1a\u88ab\u62fc\u63a5\u6210\u4ee5\u5206\u53f7",(0,s.jsx)(n.code,{children:";"}),"\u5206\u5272\u7b26\u7684\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["Variables may be referenced in command arguments using syntax ",(0,s.jsx)(n.code,{children:"${VAR}"})," where ",(0,s.jsx)(n.code,{children:"VAR"})," is the variable name."]}),"\n",(0,s.jsx)(n.p,{children:"If the named variable is not defined, the reference is replaced with an empty string; otherwise it is replaced by the value of the variable. Replacement is performed prior to the expansion of unquoted arguments, so variable values containing semicolons are split into zero-or-more arguments in place of the original unquoted argument.For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cmake",children:'set(Foo a b c)    # 3 unquoted args -> value is "a;b;c"\r\ncommand(${Foo})   # unquoted arg replaced by a;b;c and expands to three arguments\r\n\r\ncommand("${Foo}") # quoted arg value is "a;b;c"\r\nset(Foo "")       # 1 quoted arg -> value is empty string\r\ncommand(${Foo})   # unquoted arg replaced by empty string and expands to zero arguments\r\n\r\ncommand("${Foo}") # quoted arg value is empty string\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7",(0,s.jsx)(n.code,{children:"${VAR}"}),"\u53ef\u4ee5\u8c03\u7528\u53d8\u91cf\uff0c\u4f7f\u7528\u53d8\u91cf",(0,s.jsx)(n.code,{children:"VAR"}),"\u7684\u503c",(0,s.jsx)(n.code,{children:"VALUE"}),"\u3002\u5982\u679c\u53d8\u91cf\u672a\u88ab\u5b9a\u4e49\u4f7f\u7528\u65f6\u4f1a\u88ab",(0,s.jsx)(n.code,{children:"\u66ff\u6362(replace)"}),"\u6210\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32",(0,s.jsx)(n.code,{children:'""'}),"\u3002\u4e14",(0,s.jsx)(n.code,{children:"\u66ff\u6362"}),"\u52a8\u4f5c\u53d1\u751f\u5728VALUE\u7684\u5c55\u5f00\u524d\uff0c\u6240\u4ee5\u5305\u542b\u5206\u53f7",(0,s.jsx)(n.code,{children:";"}),"\u7684\u503c",(0,s.jsx)(n.code,{children:"VALUE"}),"\u662f\u88ab\u62c6\u5206\u4e3a\u591a\u4e2a\u53c2\u6570\u540e, \u518d\u66ff\u6362",(0,s.jsx)(n.code,{children:"${VAR}"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"System environment variables(\u7cfb\u7edf\u73af\u5883\u53d8\u91cf)"})," and ",(0,s.jsx)(n.strong,{children:"Windows registry values(\u6ce8\u518c\u8868\u503c)"})," can be accessed directly in CMake. To access system environment variables, use the syntax ",(0,s.jsx)(n.code,{children:"$ENV{VAR}"}),". CMake can also reference registry entries in many commands using a syntax of the form ",(0,s.jsx)(n.code,{children:"[HKEY_CURRENT_USER\\\\Software\\\\path1\\\\path2;key]"}),", where the paths are built from the registry tree and key."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"$ENV{VAR}"}),"\u53ef\u4ee5\u76f4\u63a5\u8bfb\u53d6\u73af\u5883\u53d8\u91cf\u3002(\u6ce8\u518c\u8868\u503c\u6ca1\u8bd5\u8fc7)"]}),"\n",(0,s.jsx)(n.h3,{id:"variable-scope",children:"Variable Scope"}),"\n",(0,s.jsx)(n.p,{children:"\u53d8\u91cf\u8303\u56f4"}),"\n",(0,s.jsxs)(n.p,{children:["Variables in CMake have a scope that is a little different from most languages. When you set a variable, it is visible to the current CMakeLists file or function and any subdirectory\u2019s CMakeLists files, any functions or macros(\u5b8f) that are invoked(\u8c03\u7528), and any files that are included using the ",(0,s.jsx)(n.code,{children:"include"})," command."]}),"\n",(0,s.jsx)(n.p,{children:"When a new subdirectory is processed (or a function called), a new variable scope is created and initialized with the current value of all variables in the calling scope. Any new variables created in the child scope, or changes made to existing variables, will not impact the parent scope."}),"\n",(0,s.jsx)(n.p,{children:"There is a way for CMake to return a value from a function, and it can be done by using the PARENT_SCOPE option with the set command."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cmake",children:"function(foo)\r\n message(${test}) # test is 1 here\r\n message(${test_2}) # test_2 is 1 here\r\n set(test 2)\r\n set(test_2 2 PARENT_SCOPE)\r\n message(${test}) # test is 2 here, but only in this scope\r\n message(${test_2}) # test_1 still 1 in this scope\r\nendfunction()\r\n\r\nset(test 1)\r\nset(test_2 1)\r\nfoo()\r\nmessage(${test}) # test will still be 1 here\r\nmessage(${test_2}) # test_2 will now be 2 here\n"})}),"\n",(0,s.jsxs)(n.p,{children:["CMakeLists.txt\u4e2d\u8bbe\u7f6e\u7684\u53d8\u91cf\uff0c\u5728\u5f53\u524d\u6587\u4ef6\u6216\u51fd\u6570\u3001\u5b50\u76ee\u5f55\u6587\u4ef6\u3001\u6240\u6709\u88ab\u8c03\u7528\u7684\u51fd\u6570\u6216\u5b8f\u3001\u4ee5\u53ca\u4f7f\u7528",(0,s.jsx)(n.code,{children:"include"}),"\u547d\u4ee4\u5f15\u7528\u7684\u6587\u4ef6\u4e2d\u53ef\u89c1\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5b50\u76ee\u5f55\u6216\u51fd\u6570\u4e2d\u4fee\u6539\u4e0a\u4e00\u533a\u57df(parent scope)\u7684\u53d8\u91cf, \u53ea\u4f1a\u5f71\u54cd\u5f53\u524d\u533a\u57df\u8be5\u53d8\u91cf\u7684\u503c, \u6539\u53d8\u91cf\u5728\u4e0a\u4e00\u533a\u57df\u7684\u4f7f\u7528\u65f6\u4e0d\u53d7\u4efb\u4f55\u5f71\u54cd\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f46\u5982\u679c\u5728",(0,s.jsx)(n.code,{children:"set(VAR VALUE PARENT_SCPOE)"}),"\u52a0\u5165",(0,s.jsx)(n.code,{children:"PARENT_SCPOE"}),"\uff0c\u5c31\u4f1a\u4fee\u6539\u8be5\u53d8\u91cf\u5728\u4e0a\u4e00\u533a\u57df\u7684\u503c\uff0c\u800c\u4e0d\u4f1a\u4fee\u6539\u5f53\u524d\u533a\u57df\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"commands\u6307\u4ee4",children:"Commands(\u6307\u4ee4)"}),"\n",(0,s.jsxs)(n.p,{children:["A command consists of the ",(0,s.jsx)(n.strong,{children:"command name"}),", ",(0,s.jsx)(n.strong,{children:"opening parenthesis"}),", ",(0,s.jsx)(n.strong,{children:"whitespace separated arguments"}),", and a ",(0,s.jsx)(n.strong,{children:"closing parenthesis"}),". Each command is evaluated in the order that it appears in the CMakeLists file. See the ",(0,s.jsx)(n.a,{href:"https://cmake.org/cmake/help/latest/manual/cmake-commands.7.html",children:"cmake-commands"})," manual for a full list of CMake commands."]}),"\n",(0,s.jsxs)(n.p,{children:["CMake is ",(0,s.jsx)(n.strong,{children:"no longer case sensitive"})," to command names, so where you see ",(0,s.jsx)(n.code,{children:"command"}),", you could use ",(0,s.jsx)(n.code,{children:"COMMAND"})," or ",(0,s.jsx)(n.code,{children:"Command"})," instead.It is considered best practice to use lowercase commands.All whitespace (",(0,s.jsx)(n.strong,{children:"spaces"}),", ",(0,s.jsx)(n.strong,{children:"line feeds"}),", ",(0,s.jsx)(n.strong,{children:"tabs"}),") is ignored except to separate arguments.Therefore, commands may span multiple lines as long as the command name and the opening parenthesis are on the same line."]}),"\n",(0,s.jsx)(n.p,{children:"\u4e0e\u53c2\u6570\u4e0d\u540c\uff0c\u547d\u4ee4\u5bf9\u5927\u5c0f\u5199\u4e0d\u654f\u611f\u3002\u5efa\u8bae\u4f7f\u7528\u5c0f\u5199\u8f93\u5165\u547d\u4ee4\u3002\u547d\u4ee4\u4e2d\u7684\u7a7a\u767d\u90fd\u4f1a\u88ab\u5ffd\u7565\uff08\u4f7f\u7528\u8be5\u7279\u5f81\u53ef\u4ee5\u6267\u884c\u547d\u4ee4\u4e2d\u53c2\u6570\u4e4b\u95f4\u7684\u6362\u884c\u7b49\u64cd\u4f5c\uff09\uff0c\u4f46\u8981\u4fdd\u8bc1\u547d\u4ee4\u540d\u79f0\u4e0e\u5f00\u59cb\u7684\u5de6\u62ec\u53f7\u5728\u540c\u4e00\u884c\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5e38\u89c1\u547d\u4ee4\u6709\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"set, \u8bbe\u7f6e\u666e\u901a\u53d8\u91cf\u3001\u7f13\u5b58\u53d8\u91cf\u3001\u6216\u73af\u5883\u53d8\u91cf"}),"\n",(0,s.jsx)(n.li,{children:"unset, \u6d88\u9664\u666e\u901a\u53d8\u91cf\u3001\u7f13\u5b58\u53d8\u91cf\u3001\u6216\u73af\u5883\u53d8\u91cf"}),"\n",(0,s.jsx)(n.li,{children:"string, \u5b57\u7b26\u4e32\u64cd\u4f5c, \u5305\u62ec\u67e5\u627e\u66ff\u6362(find, replace)\u3001\u590d\u6742\u64cd\u4f5c(append, tolower, toupper, length...)\u3001\u5bf9\u6bd4(compare)\u3001\u54c8\u5e0c(hash)..."}),"\n",(0,s.jsx)(n.li,{children:"list, \u5217\u8868\u64cd\u4f5c, \u5305\u4e0estring\u7c7b\u4f3c, \u4f46\u64cd\u4f5c\u5bf9\u8c61\u4e0d\u540c"}),"\n",(0,s.jsx)(n.li,{children:"separate_arguments, \u89e3\u6790\u547d\u4ee4\u884c\u53c2\u6570"}),"\n",(0,s.jsx)(n.li,{children:"add_executable, \u65b0\u589e\u53ef\u6267\u884c\u6587\u4ef6"}),"\n",(0,s.jsx)(n.li,{children:"add_library, \u65b0\u589e\u5e93\u6587\u4ef6"}),"\n",(0,s.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"conditional-statements-if",children:"Conditional Statements (if)"}),"\n",(0,s.jsx)(n.p,{children:"if, elseif, else\u7684\u57fa\u672c\u7528\u6cd5:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cmake",children:"if(MSVC80)\r\n  # do something here\r\nelseif(MSVC90)      \r\n  # do something else\r\nelseif(APPLE)\r\n  # do something else\r\nelse()\r\nendif()\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8be6\u7ec6\u4f7f\u7528\u65b9\u6cd5\u53c2\u8003: ",(0,s.jsx)(n.a,{href:"https://cmake.org/cmake/help/latest/command/if.html#command:if",children:"if"})]}),"\n",(0,s.jsx)(n.p,{children:"\u4e3b\u8981\u662f\u5bf9if\u5224\u65ad\u6761\u4ef6\u8bed\u6cd5(Condition Syntax)\u7684\u62d3\u5c55\uff0c\u5305\u542b"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u57fa\u7840\u5b57\u7b26\u7684\u5904\u7406\u3001"}),"\n",(0,s.jsx)(n.li,{children:"\u903b\u8f91\u5224\u65ad\uff08Logic Operators: NOT, AND, OR...\uff09"}),"\n",(0,s.jsx)(n.li,{children:"\u5b58\u5728\u68c0\u67e5\uff08Existence Checks\uff09"}),"\n",(0,s.jsx)(n.li,{children:"\u6587\u4ef6\u5224\u65ad\uff08File Operations: EXISTS, IS_NEWER_THAN, IS_DIRECTORY, IS_SYMLINK, IS_ABSOLUTE..\uff09"}),"\n",(0,s.jsx)(n.li,{children:"\u53d8\u91cf\u6216\u5b57\u7b26\u7684\u6bd4\u8f83\uff08MATCHES, LESS, GREATER, EQUAL, LESS_EQUAL...\uff09"}),"\n",(0,s.jsx)(n.li,{children:'\u7248\u672c\u6bd4\u8f83(Version Comparisons(\u6682\u65f6\u8fd8\u6ca1\u6709\u4ed4\u7ec6\u770b"\u7248\u672c\u6bd4\u8f83"\u662f\u4ec0\u4e48\u610f\u601d))'}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"\u5e94\u8be5\u8fd8\u5f97\u6709\u4e00\u4e2a\u8be6\u7ec6\u7684\u89e3\u91ca\u6216\u8005\u793a\u4f8b"})}),"\n",(0,s.jsx)(n.h3,{id:"looping-constructs-foreach-while",children:"Looping Constructs (foreach, while)"}),"\n",(0,s.jsx)(n.p,{children:"The foreach command enables you to execute a group of CMake commands repeatedly on the members of a list."}),"\n",(0,s.jsx)(n.p,{children:"\u7528foreach\u547d\u4ee4, \u53ef\u4ee5\u5728for\u5faa\u73af\u6c47\u603b, \u4f7f\u7528\u540c\u4e00\u4e2a\u53d8\u91cf\u4ee3\u66ff\u6570\u7ec4\u5185\u7684\u5176\u4ed6\u53d8\u91cf"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cmake",children:'foreach(tfile\r\n        TestAnisotropicDiffusion2D\r\n        TestButterworthLowPass\r\n        TestButterworthHighPass\r\n        TestCityBlockDistance\r\n        TestConvolve\r\n        )\r\n\r\nmessage("tfile:" ${tfile})\r\nendforeach()        \n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0a\u8ff0\u793a\u4f8b\u4ee3\u7801\u4e2d, \u5c06\u4f1a\u6267\u884c5\u6b21\u5faa\u73af, \u7b2c\u4e00\u6b21\u5faa\u73af\u4e2d",(0,s.jsx)(n.code,{children:"${tfile}"}),"\u4e3aTestAnisotropicDiffusion2D, \u7b2c\u4e8c\u6b21\u5faa\u73af\u4e2d",(0,s.jsx)(n.code,{children:"${tfile}"}),"\u662fTestButterworthLowPass... \u4e00\u6b21\u7c7b\u63a8"]}),"\n",(0,s.jsx)(n.p,{children:"foreach\u53ef\u4ee5\u7528\u4e8e\u5d4c\u5957, \u6bd4\u5982: (\u8bbe\u60f3\u7684\u5e94\u7528\u573a\u666f)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cmake",children:'foreach(package OpenMP GDAL Eigen3 fmt)\r\nfind_package(${package} CONFIG REQUIRED)\r\nif(NOT ${package}_FOUND)\r\nmessage(FATAL_ERROR "${package} not found!")\r\nendif()\r\nendforeach()\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u641c\u7d22\u5404\u4e2a\u5e93, \u641c\u7d22\u4e0d\u5230\u7684\u8bdd\u5c31\u62a5\u9519\u9000\u51fa\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["foreach\u7684\u8be6\u7ec6\u7528\u6cd5\u53c2\u8003\uff1a",(0,s.jsx)(n.a,{href:"https://cmake.org/cmake/help/latest/command/foreach.html#command:foreach",children:"foreach"})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"\u5e94\u8be5\u8fd8\u5f97\u6709\u4e00\u4e2a\u8be6\u7ec6\u7684\u89e3\u91ca\u6216\u8005\u793a\u4f8b"})}),"\n",(0,s.jsx)(n.p,{children:"while\u7528\u6cd5\u662f\u5f53\u6ee1\u8db3\u5224\u65ad\u6761\u4ef6\u65f6\u6267\u884c\u5faa\u73af\u64cd\u4f5c, \u76f4\u5230\u4e0d\u6ee1\u8db3\u5224\u65ad\u6761\u4ef6\u4e3a\u6b62\u3002\u8bed\u6cd5\u5f62\u5982\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cmake",children:"while(<condition>)\r\n  <commands>\r\nendwhile()\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<condition>"}),"\u7684\u8bed\u6cd5\u4e0e",(0,s.jsx)(n.code,{children:"if(<condition>)endif()"}),"\u76f8\u540c\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"The commands break() and continue() provide means to escape from the normal control flow."}),"\n",(0,s.jsxs)(n.p,{children:["while\u4e2d\u63d0\u4f9b\u4e86",(0,s.jsx)(n.code,{children:"break()"}),"\u548c",(0,s.jsx)(n.code,{children:"continue()"}),"\u4e24\u4e2a\u6307\u4ee4, \u6765\u8df3\u51fa\u548c\u8df3\u8fc7\u5f53\u524d\u5faa\u73af, \u7528\u6cd5\u4e0eC++\u8fd1\u4f3c\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"procedure-definitions-macro-function",children:"Procedure definitions (macro, function)"}),"\n",(0,s.jsxs)(n.p,{children:["The main differences (between ",(0,s.jsx)(n.code,{children:"macro"})," and ",(0,s.jsx)(n.code,{children:"function"}),") are that a macro does not push and pop a new variable scope, and that the arguments to a macro are not treated as variables but as strings replaced prior to execution."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"macro"}),"\u548c",(0,s.jsx)(n.code,{children:"function"}),"\u7684\u533a\u522b\u4e0eC++\u4e2d\u5b8f\u548c\u51fd\u6570\u7684\u533a\u522b\u7c7b\u4f3c\uff0c",(0,s.jsx)(n.code,{children:"macro"}),"\u53ef\u4ee5\u7406\u89e3\u4e3a\u5c06\u4e00\u6bb5\u4ee3\u7801\u8fdb\u884c\u66ff\u6362, \u800c",(0,s.jsx)(n.code,{children:"function"}),"\u5219\u662f\u5f00\u8f9f\u4e00\u5757\u65b0\u7684\u7a7a\u95f4\uff0c\u5728\u7a7a\u95f4\u5185\u90e8\u6267\u884c\u76f8\u5e94\u6307\u4ee4\uff0c\u5373function\u5185\u90e8\u53d8\u91cf\u7684\u6539\u52a8\u4e0d\u4f1a\u6539\u53d8\u5176\u5728function\u5916\u90e8\u7684\u503c\u3002\u6240\u4ee5\uff0c\u5982\u679c\u60f3\u5728function\u4e2d\u8bbe\u7f6e\u53d8\u91cf\uff0c\u4e14\u5e0c\u671b\u5176\u5728function\u7ed3\u675f\u540e\u4ecd\u7136\u751f\u6548\uff0c\u9700\u8981\u6dfb\u52a0",(0,s.jsx)(n.code,{children:"PARENT_SCOPE"}),"\u6307\u4ee4\uff0c\u5373",(0,s.jsx)(n.code,{children:'set(${var} "value" PARENT_SCOPE)'}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u53c2\u6570( ARGC, ARGV, ARGV#i, ARGN)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"${ARGC}"}),", the number of arguments passed into the function (macro), \u8f93\u5165\u7684\u53c2\u6570\u4e2a\u6570"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"${ARGV}"}),", A list of all arguments given to the function (macro)\uff0c \u6240\u6709\u53c2\u6570(\u4e0d\u5305\u542b\u8d85\u8fc7\u5b9a\u4e49\u53c2\u6570\u4e2a\u6570\u7684\u53ef\u53d8\u53c2\u6570, \u5373ARGN\u90e8\u5206)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"${ARGV#i}"}),", ARGV0 represents the first argument to the macro, \u7b2ci\u4e2a\u53c2\u6570"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"${ARGN}"}),", a list of all the arguments after the formal arguments, \u6240\u6709\u8d85\u8fc7\u5b9a\u4e49\u53c2\u6570\u683c\u5f0f\u4e4b\u540e\u7684\u53ef\u53d8\u53c2\u6570"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cmake",children:"macro(regist mas sla)\r\n  message(STATUS ARGC=${ARGC})\r\n  message(STATUS ARGV=${ARGV})\r\n  message(STATUS ARGN=${ARGN})\r\n  message(STATUS ARGV0=${ARGV0})\r\n  message(STATUS ARGV1=${ARGV1})\r\n  message(STATUS ARGV2=${ARGV2})\r\n  message(STATUS ARGV3=${ARGV3})\r\nendmacro()\r\n\r\nregist(mas sla aux)\r\n\r\n# \u8f93\u51fa:\r\n[cmake] -- ARGC=3\r\n[cmake] -- ARGV=masslaaux\r\n[cmake] -- ARGN=aux\r\n[cmake] -- ARGV0=mas\r\n[cmake] -- ARGV1=sla\r\n[cmake] -- ARGV2=aux\r\n[cmake] -- ARGV3=\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"return"})," command returns from a function, directory or file."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"return"}),"\u547d\u4ee4\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u51fd\u6570\u3001\u76ee\u5f55\u6216\u6587\u4ef6\u3002\u7531\u4e8e",(0,s.jsx)(n.code,{children:"macro"}),"\u548c",(0,s.jsx)(n.code,{children:"function"}),"\u7684\u673a\u5236\u4e0d\u540c\uff08",(0,s.jsx)(n.code,{children:"macro"}),"\u6ca1\u6709\u5f00\u8f9f\u65b0\u7a7a\u95f4\u800c\u662f\u539f\u5730\u5c55\u5f00/\u66ff\u6362\uff09, ",(0,s.jsx)(n.code,{children:"macro"}),"\u4e0d\u80fd\u4f7f\u7528",(0,s.jsx)(n.code,{children:"return"}),"\u6307\u4ee4\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"regular-expressions",children:"Regular Expressions"}),"\n",(0,s.jsx)(n.p,{children:"Since there are several different conventions for specifying regular expressions, CMake\u2019s standard is described in the string command documentation. The description is based on the open source regular expression class from Texas Instruments, which is used by CMake for parsing regular expressions."}),"\n",(0,s.jsxs)(n.p,{children:["CMake\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u4f7f\u7528\u7684\u662f ",(0,s.jsx)(n.strong,{children:"Texas Instruments"}),"\u7684\u6807\u51c6\uff0c\u8be6\u60c5\u9700\u8981\u53c2\u8003",(0,s.jsx)(n.a,{href:"https://cmake.org/cmake/help/latest/command/string.html#command:string",children:"string"}),"\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"advanced-commands",children:"Advanced Commands"}),"\n",(0,s.jsx)(n.p,{children:"There are a few commands that can be very useful, but are not typically used in writing CMakeLists files. This section will discuss a few of these commands and when they are useful."}),"\n",(0,s.jsx)(n.p,{children:"\u4ecb\u7ecd\u4e86\u51e0\u4e2a\u4e0d\u5e38\u7528\u4f46\u5728\u7279\u5b9a\u60c5\u51b5\u4e0b\u975e\u5e38\u6709\u7528\u7684\u6307\u4ee4\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://cmake.org/cmake/help/latest/command/add_dependencies.html#command:add_dependencies",children:"add_dependencies"})}),"\n",(0,s.jsxs)(n.p,{children:["Makes a top-level ",(0,s.jsx)(n.code,{children:"target"})," depend on other top-level targets to ensure that they build before ",(0,s.jsx)(n.code,{children:"target"})," does. A top-level target is one created by one of the ",(0,s.jsx)(n.code,{children:"add_executable()"}),", ",(0,s.jsx)(n.code,{children:"add_library()"}),", or ",(0,s.jsx)(n.code,{children:"add_custom_target()"})," commands (but not targets generated by CMake like ",(0,s.jsx)(n.code,{children:"install"}),")."]}),"\n",(0,s.jsx)(n.p,{children:'\u4f5c\u7528\u662f\u5728\u4e24\u4e2a"top-level"\u7684\u76ee\u6807(targets)\u4e4b\u95f4\u5efa\u7acb\u5173\u7cfb\uff0ctop-level\u662f\u53ef\u6267\u884c\u6587\u4ef6(executable), \u5e93(library)\u6216custom_target( a target with no output so it will always be built)\u3002'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://cmake.org/cmake/help/latest/command/include_regular_expression.html#command:include_regular_expression",children:"include_regular_expression"})}),"\n",(0,s.jsx)(n.p,{children:"Set the regular expression used for dependency checking."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cmake",children:'include_regular_expression(regex_match [regex_complain])\r\n\r\nregex_match    = "^.*$" (match everything)\r\nregex_complain = "^$" (match empty string only)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"cmake-cache",children:"CMake Cache"}),"\n",(0,s.jsx)(n.p,{children:"The CMake cache may be thought of as a configuration file. The first time CMake is run on a project, it produces a CMakeCache.txt file in the top directory of the build tree. CMake uses this file to store a set of global cache variables, whose values persist across multiple runs within a project build tree."}),"\n",(0,s.jsx)(n.h2,{id:"key-concepts",children:"Key Concepts"}),"\n",(0,s.jsx)(n.h2,{id:"policies",children:"Policies"}),"\n",(0,s.jsx)(n.h2,{id:"modules",children:"Modules"}),"\n",(0,s.jsx)(n.h2,{id:"installing-files",children:"Installing Files"}),"\n",(0,s.jsx)(n.h2,{id:"system-inspection",children:"System Inspection"}),"\n",(0,s.jsx)(n.h2,{id:"finding-packages",children:"Finding Packages"}),"\n",(0,s.jsx)(n.h2,{id:"custom-commands",children:"Custom Commands"}),"\n",(0,s.jsx)(n.h2,{id:"converting-existing-systems-to-cmake",children:"Converting Existing Systems To CMake"}),"\n",(0,s.jsx)(n.h2,{id:"cross-compiling-with-cmake",children:"Cross Compiling With CMake"}),"\n",(0,s.jsx)(n.h2,{id:"packaging-with-cpack",children:"Packaging With CPack"}),"\n",(0,s.jsx)(n.h2,{id:"testing-with-cmake-and-ctest",children:"Testing With CMake and CTest"}),"\n",(0,s.jsx)(n.h2,{id:"cdash",children:"CDash"}),"\n",(0,s.jsx)(n.h2,{id:"cmake-tutorial",children:"CMake Tutorial"}),"\n",(0,s.jsx)(n.h2,{id:"user-interaction-guide",children:"User Interaction Guide"}),"\n",(0,s.jsx)(n.h2,{id:"using-dependencies-guide",children:"Using Dependencies Guide"}),"\n",(0,s.jsx)(n.h2,{id:"importing-and-exporting-guide",children:"Importing and Exporting Guide"}),"\n",(0,s.jsx)(n.h2,{id:"ide-integration-guide",children:"IDE Integration Guide"})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7696:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/cmake_vscode_set_complier-06b88be1f660c739f3b9918dccc927a9.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>t});var s=i(7294);const a={},r=s.createContext(a);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);