"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8130],{77735:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"/2024/12/06/docusaurus_3_6_3","metadata":{"permalink":"/blog/2024/12/06/docusaurus_3_6_3","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-12-06-docusaurus_3_6_3.md","source":"@site/blog/2024-12-06-docusaurus_3_6_3.md","title":"Docusaurus Update to 3.6.3","description":"\u56e02024\u5e745\u6708, \u6dd8\u5b9d\u4e4b\u524d\u7684\u955c\u50cf\u5f7b\u5e95\u4e0d\u80fd\u7528\u4e86\uff0c\u4e5f\u5c31\u5bfc\u81f4\u4f7f\u7528\u5e9f\u5f03\u7684\u955c\u50cf\u65e0\u6cd5\u4e0b\u8f7d\u6587\u4ef6","date":"2024-12-06T00:00:00.000Z","tags":[{"inline":true,"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":1.195,"hasTruncateMarker":true,"authors":[{"name":"litan","title":"SW Engineer","url":"https://github.com/li-tann","imageURL":"/img/me.jpg","key":"li-tann","page":null}],"frontMatter":{"title":"Docusaurus Update to 3.6.3","authors":"li-tann","tags":["docusaurus"]},"unlisted":false,"nextItem":{"title":"PowerShell\u67e5\u770b\u5386\u53f2\u8bb0\u5f55","permalink":"/blog/2024/12/03/powershell_history"}},"content":"\u56e02024\u5e745\u6708, \u6dd8\u5b9d\u4e4b\u524d\u7684\u955c\u50cf\u5f7b\u5e95\u4e0d\u80fd\u7528\u4e86\uff0c\u4e5f\u5c31\u5bfc\u81f4\u4f7f\u7528\u5e9f\u5f03\u7684\u955c\u50cf\u65e0\u6cd5\u4e0b\u8f7d\u6587\u4ef6\\r\\n\\r\\n\u9996\u5148\u9700\u8981\u5148\u66f4\u65b0\u955c\u50cf,\\r\\n\\r\\n```powerShell\\r\\nnpm config set registry https://registry.npmmirror.com\\r\\n```\\r\\n\\r\\n\u53ef\u4ee5\u901a\u8fc7`npm view [package] versions`\u7b49\u65b9\u5f0f\u68c0\u9a8cnpm\u662f\u5426\u53ef\u7528\\r\\n\\r\\n\u66f4\u65b0\u955c\u50cf\u540e\uff0c\u628a\u5730\u5740\u5207\u5230\u9879\u76ee\u5730\u5740\u4e0b\uff0c\u8f93\u5165\u6307\u4ee4\u66f4\u65b0docusaurus\u7248\u672c\\r\\n\\r\\n```powershell\\r\\nnpm i @docusaurus/core@latest @docusaurus/preset-classic@latest @docusaurus/module-type-aliases@latest @docusaurus/tsconfig@latest @docusaurus/types@latest\\r\\n```\\r\\n\\r\\n\u66f4\u65b0\u540e\u4f7f\u7528`npm start`\u5c1d\u8bd5\u542f\u52a8\u9879\u76ee, \u62a5\u9519, \u63d0\u793a\u4fe1\u606f\u4e3a\\r\\n\\r\\n```powershell\\r\\nError: Docusaurus was unable to resolve the \\"@docusaurus/theme-mermaid\\" theme.....\\r\\n```\\r\\n\\r\\n\u4e8e\u662f\u53c8\u66f4\u65b0\u4e86@docusaurus/theme-mermaid, \u66f4\u65b0\u540e\u518d\u6b21\u4f7f\u7528`npm start`\u5c31\u53ef\u4ee5\u6b63\u5e38\u542f\u52a8\u9879\u76ee\u4e86\\r\\n\\r\\n```powershell\\r\\nnpm i @docusaurus/theme-mermaid@latest\\r\\n```\\r\\n\\r\\n\u542f\u52a8\u540e\u53d1\u73b0\u9996\u9875\u4e0e\u4e4b\u524d\u4e0d\u540c\uff0c\u7ecf\u8fc7\u6392\u67e5\u540e\u53d1\u73b0, \u56e0\u4e3a\u6211\u5b58\u4e86\u4e24\u7248\u4e3b\u9875\uff1a`index.md`\u548c`index.tsx`\uff0c\u8001\u7248\u8f6f\u4ef6\u4f1a\u4f18\u5148\u8c03\u7528*.tsx\uff0c\u800c\u65b0\u7248\u4e3b\u9875\u4f1a\u4f18\u5148\u8c03\u7528`*.md`\uff0c\u5c06`index.md`\u6587\u4ef6\u5220\u9664\uff08\u6216\u91cd\u547d\u540d\uff09\u540e\u4e00\u5207\u6062\u590d\u6b63\u5e38\u3002\\r\\n\\r\\n\u66f4\u65b0\u6210\u529f\u3002\\r\\n\\r\\n\x3c!-- truncate --\x3e"},{"id":"/2024/12/03/powershell_history","metadata":{"permalink":"/blog/2024/12/03/powershell_history","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-12-03-powershell_history.md","source":"@site/blog/2024-12-03-powershell_history.md","title":"PowerShell\u67e5\u770b\u5386\u53f2\u8bb0\u5f55","description":"1.\u5728\u63a7\u5236\u53f0\u67e5\u770b\u5386\u53f2\u6307\u4ee4","date":"2024-12-03T00:00:00.000Z","tags":[{"inline":true,"label":"PowerShell","permalink":"/blog/tags/power-shell"}],"readingTime":0.56,"hasTruncateMarker":true,"authors":[{"name":"litan","title":"SW Engineer","url":"https://github.com/li-tann","imageURL":"/img/me.jpg","key":"li-tann","page":null}],"frontMatter":{"title":"PowerShell\u67e5\u770b\u5386\u53f2\u8bb0\u5f55","authors":"li-tann","tags":["PowerShell"]},"unlisted":false,"prevItem":{"title":"Docusaurus Update to 3.6.3","permalink":"/blog/2024/12/06/docusaurus_3_6_3"},"nextItem":{"title":"VSCode Cpp_IntelliSense \u7f62\u5de5","permalink":"/blog/2024/05/09/vscode_c_cpp_intelliSense_not_work"}},"content":"## 1.\u5728\u63a7\u5236\u53f0\u67e5\u770b\u5386\u53f2\u6307\u4ee4\\r\\n\\r\\n\u4f7f\u7528\u8be5\u6307\u4ee4\u53ef\u4ee5\u5728\u63a7\u5236\u53f0\u6253\u5370\u5f53\u524d\u7a97\u53e3\u7684\u5386\u53f2\u6307\u4ee4\uff0c\u4f46\u5f53\u6307\u4ee4\u8d85\u8fc7\u63a7\u5236\u53f0\u5bbd\u5ea6\u65f6\uff0c\u6307\u4ee4\u4f1a\u88ab\u7701\u7565\u53f7\u4ee3\u66ff\\r\\n\\r\\n```powershell\\r\\nGet-History\\r\\n```\\r\\n\\r\\n![powershell](./blog_photos/2024-12-03-powershell_img.png)\\r\\n\\r\\n## 2.\u4fdd\u5b58\u6307\u4ee4\\r\\n\\r\\n\u5c06\u6307\u4ee4\u8f93\u51fa\u5230csv\u6587\u4ef6\u4e2d\uff0c\u4fdd\u7559\u5b8c\u6574\u7684\u6307\u4ee4\uff0c\u4ee5\u53ca\u6bcf\u6761\u6307\u4ee4\u7684\u542f\u52a8\u4e0e\u7ec8\u6b62\u65f6\u95f4\u3001\u8017\u65f6\u7b49\u4fe1\u606f\u3002\\r\\n\\r\\n```powershell\\r\\nGet-History | Export-Csv -Path tool_geocode_history.csv\\r\\n```\\r\\n\\r\\n![powershell](./blog_photos/2024-12-03-powershell_img2.png)\\r\\n\\r\\n\x3c!-- truncate --\x3e"},{"id":"/2024/05/09/vscode_c_cpp_intelliSense_not_work","metadata":{"permalink":"/blog/2024/05/09/vscode_c_cpp_intelliSense_not_work","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-05-09-vscode_c_cpp_intelliSense_not_work.md","source":"@site/blog/2024-05-09-vscode_c_cpp_intelliSense_not_work.md","title":"VSCode Cpp_IntelliSense \u7f62\u5de5","description":"\u6628\u5929\uff082024-05-08\uff09\u4e0b\u5348\u5f00\u59cb\uff0cVSCode\u667a\u80fd\u63d0\u793a\u7a81\u7136\u7f62\u5de5\uff0c","date":"2024-05-09T00:00:00.000Z","tags":[{"inline":true,"label":"VSCode","permalink":"/blog/tags/vs-code"},{"inline":true,"label":"Cpp_IntelliSense","permalink":"/blog/tags/cpp-intelli-sense"}],"readingTime":0.855,"hasTruncateMarker":true,"authors":[{"name":"litan","title":"SW Engineer","url":"https://github.com/li-tann","imageURL":"/img/me.jpg","key":"li-tann","page":null}],"frontMatter":{"title":"VSCode Cpp_IntelliSense \u7f62\u5de5","authors":"li-tann","tags":["VSCode","Cpp_IntelliSense"]},"unlisted":false,"prevItem":{"title":"PowerShell\u67e5\u770b\u5386\u53f2\u8bb0\u5f55","permalink":"/blog/2024/12/03/powershell_history"},"nextItem":{"title":"bat\u811a\u672c\u62c6\u5206\u5b57\u7b26\u4e32","permalink":"/blog/2023/12/20/for_bat"}},"content":"\u6628\u5929\uff082024-05-08\uff09\u4e0b\u5348\u5f00\u59cb\uff0cVSCode\u667a\u80fd\u63d0\u793a\u7a81\u7136\u7f62\u5de5\uff0c\\r\\n\\r\\n![vscode_error](blog_photos/2024-05-09-vscode_error.png)\\r\\n\\r\\n\u8d77\u521d\u662f\u8ba4\u4e3aMSVC\u7f16\u8bd1\u5668\u66f4\u65b0\u5bfc\u81f4includepath\u66f4\u6362\u5bfc\u81f4\u201c\u65e0\u6cd5\u627e\u5230 \u6e90 \u6587\u4ef6\u201d\uff0c\u4e8e\u662f\u4fbf\u5f00\u59cb\u75af\u72c2\u5728settings.json\u548cc_cpp_properties.json\u4e2d\u6dfb\u52a0\u4fe1\u606f\\r\\n\\r\\nsettings.json:\\r\\n\\r\\n- C_Cpp.errorSquiggles: enabled\\r\\n- C_Cpp.intelliSenseEngineFallback: enabled\\r\\n- C_Cpp.default.compilerPath: vs2022/community/vc/tools/msvc/14.39.33519/bin/hostx64/x64/cl.exe\\r\\n- C_Cpp.default.includePath: vs2022/community/vc/tools/msvc/14.39.33519/include\\r\\n- ...\\r\\n\\r\\njson\u548cc_cpp_properties.json:\\r\\n\\r\\n- compilerPath\\" vs2022/community/vc/tools/msvc/14.39.33519/bin/hostx64/x64/cl.exe\\r\\n- intelliSenseMode: msvc-x64,\\r\\n- configurationProvider: ms-vscode.cmake-tools,\\r\\n- windowsSdkVersion: 10.0.19041.0\\r\\n- ...\\r\\n\\r\\n\u81ea\u5df1\u80fd\u60f3\u5230\u7684\uff0c\u7f51\u4e0a\u80fd\u641c\u5230\u7684\u641c\u8bd5\u4e86\u4e00\u904d\uff0c\u90fd\u65e0\u6d4e\u4e8e\u4e8b\uff0c\u76f4\u5230\u5c3d\u65e9\u5076\u7136\u53d1\u73b0VSCode\u7684C/C++\u63d2\u4ef6\uff08\u8d1f\u8d23cpp_intelliSense\uff09\u6700\u8fd1\u4e00\u6b21\u66f4\u65b0\u662f21\u5c0f\u65f6\u524d\uff0c\u4e0e\u7f62\u5de5\u76f8\u543b\u5408\uff0c\u4e8e\u662f\u4fbf\u9000\u56de\u4e86\u4e00\u4e2a\u7248\u672c\uff0c\u91cd\u542fVSCode\u540e\u4e00\u5207\u6062\u590d\u6b63\u5e38...\\r\\n\\r\\n![vscode_error](blog_photos/2024-05-09-c_cpp_version.png)\\r\\n\\r\\n\x3c!-- truncate --\x3e"},{"id":"/2023/12/20/for_bat","metadata":{"permalink":"/blog/2023/12/20/for_bat","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-12-20-for_bat.md","source":"@site/blog/2023-12-20-for_bat.md","title":"bat\u811a\u672c\u62c6\u5206\u5b57\u7b26\u4e32","description":"delims= \u8868\u793a\u7528\u6765\u5206\u5272\u5b57\u7b26\u4e32\u7684\u5b57\u7b26","date":"2023-12-20T00:00:00.000Z","tags":[{"inline":true,"label":"bat","permalink":"/blog/tags/bat"}],"readingTime":0.41,"hasTruncateMarker":true,"authors":[{"name":"litan","title":"SW Engineer","url":"https://github.com/li-tann","imageURL":"/img/me.jpg","key":"li-tann","page":null}],"frontMatter":{"title":"bat\u811a\u672c\u62c6\u5206\u5b57\u7b26\u4e32","authors":"li-tann","tags":["bat"]},"unlisted":false,"prevItem":{"title":"VSCode Cpp_IntelliSense \u7f62\u5de5","permalink":"/blog/2024/05/09/vscode_c_cpp_intelliSense_not_work"},"nextItem":{"title":"gdaladdo ovr","permalink":"/blog/2023/11/29/gdaladdo"}},"content":"```bat\\r\\nsetlocal enabledelayedexpansion\\r\\nset target=\'\'\\r\\nfor /f \\"tokens=1,3 delims=,\\" %%i in (1.txt) do (\\r\\n    set d1=%%i\\r\\n    set d2=%%j\\r\\n)\\r\\n```\\r\\n\\r\\ndelims= \u8868\u793a\u7528\u6765\u5206\u5272\u5b57\u7b26\u4e32\u7684\u5b57\u7b26\\r\\n\\r\\ntokens= \u8868\u793a\u62c6\u5206\u540e\u9700\u8981\u4f7f\u7528\u7684\u7b2ci\u4e2a\u5b57\u6bb5\\r\\n\\r\\n%%i, %%j \u5bf9\u5e94\u5b57\u7b26\u4e32\u5185\u5bb9\\r\\n\\r\\n\u4f8b\u59821.txt\uff1a\\r\\n\\r\\nname,id,point\\r\\nli-tann,0,15\\r\\nli-tamm,1,19\\r\\n\\r\\n\u4f7f\u7528\u4e0a\u8ff0\u811a\u672c\uff0c\u8f93\u51fa\u4e3a\uff1a\\r\\n\\r\\n```cmd\\r\\nd1=li-tann, d2=15\\r\\nd1=li-tamm, d2=19\\r\\n```\\r\\n\\r\\n\x3c!-- truncate --\x3e"},{"id":"/2023/11/29/gdaladdo","metadata":{"permalink":"/blog/2023/11/29/gdaladdo","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-11-29-gdaladdo.md","source":"@site/blog/2023-11-29-gdaladdo.md","title":"gdaladdo ovr","description":"\u901a\u5e38\u60c5\u51b5\u6211\u4eec\u4f7f\u7528ArcMap\u6253\u5f00\u4e00\u5f20\u975e\u5e38\u5927\u7684\u5f71\u50cf\u65f6\uff0c\u90fd\u4f1a\u63d0\u793a\u662f\u5426\u751f\u6210\u91d1\u5b57\u5854\u6587\u4ef6\u4ee5\u4fbf\u4e8e\u540e\u7eed\u5f71\u50cf\u7684\u5feb\u901f\u7ed8\u5236\u548c\u7f29\u653e\u3002","date":"2023-11-29T00:00:00.000Z","tags":[{"inline":true,"label":"gdal","permalink":"/blog/tags/gdal"},{"inline":true,"label":"gdaladdo","permalink":"/blog/tags/gdaladdo"}],"readingTime":1.495,"hasTruncateMarker":true,"authors":[{"name":"litan","title":"SW Engineer","url":"https://github.com/li-tann","imageURL":"/img/me.jpg","key":"li-tann","page":null}],"frontMatter":{"title":"gdaladdo ovr","authors":"li-tann","tags":["gdal","gdaladdo"]},"unlisted":false,"prevItem":{"title":"bat\u811a\u672c\u62c6\u5206\u5b57\u7b26\u4e32","permalink":"/blog/2023/12/20/for_bat"},"nextItem":{"title":"BABEL Error","permalink":"/blog/2023/11/08/babel-error"}},"content":"\u901a\u5e38\u60c5\u51b5\u6211\u4eec\u4f7f\u7528ArcMap\u6253\u5f00\u4e00\u5f20\u975e\u5e38\u5927\u7684\u5f71\u50cf\u65f6\uff0c\u90fd\u4f1a\u63d0\u793a\u662f\u5426\u751f\u6210\u91d1\u5b57\u5854\u6587\u4ef6\u4ee5\u4fbf\u4e8e\u540e\u7eed\u5f71\u50cf\u7684\u5feb\u901f\u7ed8\u5236\u548c\u7f29\u653e\u3002\\r\\n\\r\\n\u4f46\u5f53\u5f71\u50cf\u8fc7\u5927\u65f6\uff0c\u4f7f\u7528ArcMap\u7684\u9ed8\u8ba4\u9009\u9879\u5df2\u7ecf\u65e0\u6cd5\u6210\u529f\u521b\u5efa\u91d1\u5b57\u5854\u6587\u4ef6\uff0c\u6b64\u65f6\u5c31\u9700\u8981\u8c03\u7528GDAL\u5de5\u5177\u624b\u52a8\u751f\u6210\u91d1\u5b57\u5854\u6587\u4ef6\u3002\\r\\n\\r\\n\u6307\u4ee4\u5982\u4e0b\u6240\u793a\uff0c\\r\\n\\r\\n```shell\\r\\ngdaladdo -ro --config COMPRESS_OVERVIEW DEFLATE --config BIGTIFF_OVERVIEW YES dem.tif 2 4 8 16\\r\\n```\\r\\n\\r\\n\u4f46\u662f\u5f53\u5f71\u50cf\u975e\u5e38\u5927\u65f6\uff08\u4e2a\u4eba\u7ecf\u9a8c\u65f6\u8d85\u8fc720Gb\uff09\uff0c\u4f7f\u7528\u4e0a\u9762\u7684\u6307\u4ee4\u751f\u6210\u91d1\u5b57\u5854\u6587\u4ef6\u4f1a\u572870%\u5de6\u53f3\u62a5\u9519\uff0c\u6b64\u65f6\u5c31\u9700\u8981\u5c06\u6307\u4ee4\u62c6\u5206\uff0c\u6bcf\u6b21\u53ea\u751f\u6210\u4e00\u4e2a\u7f29\u653e\u6bd4\u4f8b\u7684\u91d1\u5b57\u5854\uff0c\u591a\u91cd\u590d\u51e0\u6b21\u5373\u53ef\u3002\\r\\n\\r\\n\u6307\u4ee4\u5982\u4e0b\u6240\u793a\uff0c\\r\\n\\r\\n```shell\\r\\ngdaladdo -ro --config COMPRESS_OVERVIEW DEFLATE --config BIGTIFF_OVERVIEW YES dem.tif 16\\r\\ngdaladdo -ro --config COMPRESS_OVERVIEW DEFLATE --config BIGTIFF_OVERVIEW YES dem.tif 8\\r\\ngdaladdo -ro --config COMPRESS_OVERVIEW DEFLATE --config BIGTIFF_OVERVIEW YES dem.tif 4\\r\\ngdaladdo -ro --config COMPRESS_OVERVIEW DEFLATE --config BIGTIFF_OVERVIEW YES dem.tif 2\\r\\n```\\r\\n\\r\\n16\u500d\u7f29\u653e\u91d1\u5b57\u5854\u5e94\u8be5\u662f\u6570\u636e\u5bfc\u5165\u65f6\u7684\u7f29\u7565\u56fe\u6bd4\u4f8b\uff0c\u6240\u4ee5\u5f53\u6211\u4eec\u6210\u529f\u751f\u621016\u500d\u7684\u91d1\u5b57\u5854\u65f6\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528ArcMap\u8bfb\u53d6\u5f71\u50cf\uff0c\u5e76\u5feb\u901f\u5c06\u5f71\u50cf\u7684\u7f29\u7565\u56fe\u7ed8\u5236\u5230\u89c6\u56fe\u4e2d\u3002\\r\\n\\r\\n\x3c!-- truncate --\x3e"},{"id":"/2023/11/08/babel-error","metadata":{"permalink":"/blog/2023/11/08/babel-error","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-11-08-babel-error.md","source":"@site/blog/2023-11-08-babel-error.md","title":"BABEL Error","description":"\u5199md\u6587\u4ef6\u65f6\u53d1\u73b0\uff0c\u5f53\u67d0\u4e2amd\u6587\u6863\u8fc7\u957f(\u5f88\u53ef\u80fd\u662f\u56e0\u4e3a\u5b58\u5728\u5927\u91cflatex\u516c\u5f0f\u5bfc\u81f4)\uff0c\u5728\u7f16\u8bd1\u671f\u95f4\u65f6\u4f1a\u5f39\u51fa\u4ee5\u4e0b\u8b66\u544a\u5185\u5bb9\uff0c\u4e25\u91cd\u5f71\u54cd\u89c2\u611f... \u4e0d\u5f97\u5df2\u5c06md\u6587\u6863\u62c6\u5206\u540e\u89e3\u51b3\u95ee\u9898...","date":"2023-11-08T00:00:00.000Z","tags":[{"inline":true,"label":"babel","permalink":"/blog/tags/babel"}],"readingTime":0.44,"hasTruncateMarker":true,"authors":[{"name":"litan","title":"SW Engineer","url":"https://github.com/li-tann","imageURL":"/img/me.jpg","key":"li-tann","page":null}],"frontMatter":{"title":"BABEL Error","authors":"li-tann","tags":["babel"]},"unlisted":false,"prevItem":{"title":"gdaladdo ovr","permalink":"/blog/2023/11/29/gdaladdo"},"nextItem":{"title":"Docusaurus Update to 2.4.1","permalink":"/blog/2023/08/22/docusaurus_2_4_1"}},"content":"\u5199md\u6587\u4ef6\u65f6\u53d1\u73b0\uff0c\u5f53\u67d0\u4e2amd\u6587\u6863\u8fc7\u957f(\u5f88\u53ef\u80fd\u662f\u56e0\u4e3a\u5b58\u5728\u5927\u91cflatex\u516c\u5f0f\u5bfc\u81f4)\uff0c\u5728\u7f16\u8bd1\u671f\u95f4\u65f6\u4f1a\u5f39\u51fa\u4ee5\u4e0b\u8b66\u544a\u5185\u5bb9\uff0c\u4e25\u91cd\u5f71\u54cd\u89c2\u611f... \u4e0d\u5f97\u5df2\u5c06md\u6587\u6863\u62c6\u5206\u540e\u89e3\u51b3\u95ee\u9898...\\r\\n\\r\\n```shell\\r\\n[BABEL] Note: The code generator has deoptimised the styling of xxxxx.md as it exceeds the max of 500KB.\\r\\n```\\r\\n\\r\\n\x3c!-- truncate --\x3e"},{"id":"/2023/08/22/docusaurus_2_4_1","metadata":{"permalink":"/blog/2023/08/22/docusaurus_2_4_1","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-08-22-docusaurus_2_4_1.md","source":"@site/blog/2023-08-22-docusaurus_2_4_1.md","title":"Docusaurus Update to 2.4.1","description":"","date":"2023-08-22T00:00:00.000Z","tags":[{"inline":true,"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.055,"hasTruncateMarker":true,"authors":[{"name":"litan","title":"SW Engineer","url":"https://github.com/li-tann","imageURL":"/img/me.jpg","key":"li-tann","page":null}],"frontMatter":{"title":"Docusaurus Update to 2.4.1","authors":"li-tann","tags":["docusaurus"]},"unlisted":false,"prevItem":{"title":"BABEL Error","permalink":"/blog/2023/11/08/babel-error"},"nextItem":{"title":"Word \u81ea\u5b9a\u4e49\u5feb\u6377\u952e","permalink":"/blog/2023/08/01/word-customize-shortcuts"}},"content":"```bat\\r\\nnpm i @docusaurus/core@latest @docusaurus/preset-classic@latest @docusaurus/theme-mermaid@latest @docusaurus/module-type-aliases@latest\\r\\n```\\r\\n\\r\\n\x3c!-- truncate --\x3e"},{"id":"/2023/08/01/word-customize-shortcuts","metadata":{"permalink":"/blog/2023/08/01/word-customize-shortcuts","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-08-01-word-customize-shortcuts.md","source":"@site/blog/2023-08-01-word-customize-shortcuts.md","title":"Word \u81ea\u5b9a\u4e49\u5feb\u6377\u952e","description":"\u6587\u4ef6-\u9009\u9879\uff0c\u6253\u5f00\u201cWord\u9009\u9879\u201d\u5bf9\u8bdd\u6846","date":"2023-08-01T00:00:00.000Z","tags":[{"inline":true,"label":"word","permalink":"/blog/tags/word"}],"readingTime":0.97,"hasTruncateMarker":true,"authors":[{"name":"litan","title":"SW Engineer","url":"https://github.com/li-tann","imageURL":"/img/me.jpg","key":"li-tann","page":null}],"frontMatter":{"title":"Word \u81ea\u5b9a\u4e49\u5feb\u6377\u952e","authors":"li-tann","tags":["word"]},"unlisted":false,"prevItem":{"title":"Docusaurus Update to 2.4.1","permalink":"/blog/2023/08/22/docusaurus_2_4_1"},"nextItem":{"title":"Word \u6846\u5185\u6253\u52fe","permalink":"/blog/2023/03/07/word-check-mark"}},"content":"\u6587\u4ef6-\u9009\u9879\uff0c\u6253\u5f00\u201cWord\u9009\u9879\u201d\u5bf9\u8bdd\u6846\\r\\n\\r\\n\u9009\u62e9\u81ea\u5b9a\u4e49\u529f\u80fd\u533a\uff0c\u70b9\u51fb\u201c\u952e\u76d8\u5feb\u6377\u65b9\u5f0f\u201d\u53f3\u4fa7\u7684\u201c\u81ea\u5b9a\u4e49\u201d\u6309\u94ae\uff0c\u5f39\u51fa\u201c\u81ea\u5b9a\u4e49\u952e\u76d8\u201d\u7a97\u53e3\\r\\n\\r\\n\u4ee5formatParagraph\u529f\u80fd\uff08 \u6bb5\u843d\u8bbe\u7f6e\u5bf9\u8bdd\u6846\uff09\u4e3a\u4f8b\\r\\n\\r\\n\u5728\u5de6\u4fa7\u201c\u7c7b\u522b\u201d\u4e2d\u9009\u62e9\u201c\u2018\u5f00\u59cb\u2019\u9009\u9879\u5361\u201d\uff0c\u5728\u53f3\u4fa7\u547d\u4ee4\u4e2d\u627e\u201cFormatParagraph\u201d\\r\\n\\r\\n\u5728\u201c\u8bf7\u6309\u65b0\u5feb\u6377\u952e\u201d\u7a97\u53e3\u5185\uff0c\u952e\u5165\u4f60\u5e0c\u671b\u7684\u5feb\u6377\u952e\uff08\u82e5\u4e0e\u5176\u4ed6\u5feb\u6377\u952e\u51b2\u7a81\u4f1a\u9876\u66ff\u5f53\u524d\u5feb\u6377\u6307\u4ee4\u4e0e\u5176\u4ed6\u529f\u80fd\u7684\u94fe\u63a5\u5173\u7cfb\uff09\\r\\n\\r\\n\u6211\u8bbe\u7f6e\u6210Alt+F(\u65e7\u7684\u6307\u4ee4\u7b49\u4e8e\u70b9\u51fb\u83dc\u5355\u680f\u7684\u201c\u6587\u4ef6\u201d\u6309\u94ae)\\r\\n\\r\\n\u70b9\u51fb\u4e0b\u65b9\u201c\u6307\u5b9a\u201d\u6309\u94ae\u4fdd\u5b58\u5feb\u6377\u6307\u4ee4\u3002\\r\\n\\r\\n\u5b8c\u6210\u3002\\r\\n\\r\\n[Word \u4e2d\u7684\u952e\u76d8\u5feb\u6377\u65b9\u5f0f](https://support.microsoft.com/zh-cn/office/word-%E4%B8%AD%E7%9A%84%E9%94%AE%E7%9B%98%E5%BF%AB%E6%8D%B7%E6%96%B9%E5%BC%8F-95ef89dd-7142-4b50-afb2-f762f663ceb2)\\r\\n\\r\\n\x3c!-- truncate --\x3e"},{"id":"/2023/03/07/word-check-mark","metadata":{"permalink":"/blog/2023/03/07/word-check-mark","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-03-07-word-check-mark.md","source":"@site/blog/2023-03-07-word-check-mark.md","title":"Word \u6846\u5185\u6253\u52fe","description":"\u5728word\u8f93\u51652611, \u6309ALT+X, \u5373\u53ef\u751f\u6210\u201c\u6846\u5185\u6253\u52fe\u2705\u201d\u7684\u7279\u6b8a\u5b57\u7b26\u3002","date":"2023-03-07T00:00:00.000Z","tags":[{"inline":true,"label":"word","permalink":"/blog/tags/word"}],"readingTime":0.12,"hasTruncateMarker":true,"authors":[{"name":"litan","title":"SW Engineer","url":"https://github.com/li-tann","imageURL":"/img/me.jpg","key":"li-tann","page":null}],"frontMatter":{"title":"Word \u6846\u5185\u6253\u52fe","authors":"li-tann","tags":["word"]},"unlisted":false,"prevItem":{"title":"Word \u81ea\u5b9a\u4e49\u5feb\u6377\u952e","permalink":"/blog/2023/08/01/word-customize-shortcuts"},"nextItem":{"title":"github stars\u663e\u793a\u65b9\u6cd5","permalink":"/blog/2023/03/03/github-stars"}},"content":"\u5728word\u8f93\u5165`2611`, \u6309`ALT`+`X`, \u5373\u53ef\u751f\u6210\u201c\u6846\u5185\u6253\u52fe\u2705\u201d\u7684\u7279\u6b8a\u5b57\u7b26\u3002\\r\\n\\r\\n\x3c!-- truncate --\x3e"},{"id":"/2023/03/03/github-stars","metadata":{"permalink":"/blog/2023/03/03/github-stars","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-03-03-github-stars.md","source":"@site/blog/2023-03-03-github-stars.md","title":"github stars\u663e\u793a\u65b9\u6cd5","description":"Github\u4e2d\u7ecf\u5e38\u89c1\u5230\u7c7b\u4f3c\u7684\u6807\u7b7e\uff0c","date":"2023-03-03T00:00:00.000Z","tags":[{"inline":true,"label":"github stars","permalink":"/blog/tags/github-stars"}],"readingTime":0.415,"hasTruncateMarker":true,"authors":[{"name":"litan","title":"SW Engineer","url":"https://github.com/li-tann","imageURL":"/img/me.jpg","key":"li-tann","page":null}],"frontMatter":{"title":"github stars\u663e\u793a\u65b9\u6cd5","authors":"li-tann","tags":["github stars"]},"unlisted":false,"prevItem":{"title":"Word \u6846\u5185\u6253\u52fe","permalink":"/blog/2023/03/07/word-check-mark"},"nextItem":{"title":"zotero+OneDrive\u5b9e\u73b0\u4e91\u540c\u6b65","permalink":"/blog/2023/03/03/zotero-onedrive"}},"content":"Github\u4e2d\u7ecf\u5e38\u89c1\u5230\u7c7b\u4f3c\u7684\u6807\u7b7e\uff0c\\r\\n\\r\\n![starts](https://img.shields.io/github/stars/li-tann/li-tann.github.io.svg) ![example label](https://img.shields.io/badge/li--tann-InSAR-brightgreen)\\r\\n\\r\\n\u524d\u8005\u662fli-tann.github.io\u7684\u5b9e\u65f6stars\uff0c\u540e\u8005\u662f\u81ea\u5b9a\u4e49\u751f\u6210\u7684\u9759\u6001\u5185\u5bb9\u3002\\r\\n\\r\\n\u7c7b\u4f3c\u7684\u6807\u7b7e\uff0c\u90fd\u662f\u901a\u8fc7[Shield IO](https://shields.io/)\u7f51\u7ad9\u5b9e\u73b0\u7684\u3002\\r\\n\\r\\n\u5b9e\u65f6\u7684github stars:\\r\\n\\r\\n`https://img.shields.io/github/stars/<user>/<repository>.svg`\\r\\n\\r\\n\u4ee5\u8be5\u7f51\u9875\u4e3a\u4f8b\uff0c\\r\\n\\r\\n\u7528\u6237\u540d\u662f`li-tann`, \u4ed3\u5e93\u662f`litan.github.io`\uff0c\\r\\n\\r\\n\u8be5\u4ed3\u5e93\u7684\u5b9e\u65f6stars: `https://img.shields.io/github/stars/li-tann/li-tann.github.io.svg`\\r\\n\\r\\n\x3c!-- truncate --\x3e"},{"id":"/2023/03/03/zotero-onedrive","metadata":{"permalink":"/blog/2023/03/03/zotero-onedrive","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-03-03-zotero-onedrive.md","source":"@site/blog/2023-03-03-zotero-onedrive.md","title":"zotero+OneDrive\u5b9e\u73b0\u4e91\u540c\u6b65","description":"zotero.logo","date":"2023-03-03T00:00:00.000Z","tags":[{"inline":true,"label":"zotero","permalink":"/blog/tags/zotero"},{"inline":true,"label":"OneDrive","permalink":"/blog/tags/one-drive"}],"readingTime":1.33,"hasTruncateMarker":true,"authors":[{"name":"litan","title":"SW Engineer","url":"https://github.com/li-tann","imageURL":"/img/me.jpg","key":"li-tann","page":null}],"frontMatter":{"title":"zotero+OneDrive\u5b9e\u73b0\u4e91\u540c\u6b65","authors":"li-tann","tags":["zotero","OneDrive"]},"unlisted":false,"prevItem":{"title":"github stars\u663e\u793a\u65b9\u6cd5","permalink":"/blog/2023/03/03/github-stars"},"nextItem":{"title":"gdal_translate\u53bb\u9664\u7f16\u7801\u5f71\u50cf\u9ed1\u8fb9","permalink":"/blog/2023/03/02/gdal_translate"}},"content":"![zotero.logo](https://www.zotero.org/static/images/theme/zotero-logo.1519312231.svg)\\r\\n\\r\\nzotero\u662f\u4e00\u6b3e\u514d\u8d39\u7684\u6587\u732e\u7ba1\u7406\u5de5\u5177(\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u6587\u4ef6\u7ba1\u7406\u529f\u80fd)\uff0c\u5176\u672c\u8eab\u63d0\u4f9b\u6536\u8d39\u7684\u4e91\u7aef\u6587\u4ef6\u5b58\u50a8\u670d\u52a1\uff08\u514d\u8d39\u5411\u6bcf\u4e2a\u8d26\u6237\u63d0\u4f9b300Mb\u4e91\u7a7a\u95f4\uff09\u3002\\r\\n\\r\\n\u4f46\u5c06\u672c\u5730\u5b58\u50a8\u642d\u5efa\u5728OneDrive\u4e2d\uff0c\u4e91\u7aef\u53ea\u540c\u6b65\u6587\u732e\u57fa\u672c\u4fe1\u606f\uff08\u4e0d\u4e0a\u4f20\u9644\u4ef6\u5185\u5bb9\uff09\uff0c\u5373\u53ef\u5b9e\u73b0\u514d\u8d39\u7684\u591a\u8bbe\u5907\u540c\u6b65\u3002\\r\\n\\r\\n## \u64cd\u4f5c\u8bf4\u660e\\r\\n\\r\\n1. zotero\u7f16\u8f91->\u9996\u9009\u9879->\u540c\u6b65->\u8bbe\u7f6e\uff0c\u53d6\u6d88\u6587\u4ef6\u540c\u6b65\u7684\u4e24\u4e2a\u9009\u9879\uff08\u4e0d\u540c\u6b65\u9644\u4ef6\uff09\uff1b\\r\\n\\r\\n2. zotero\u7f16\u8f91->\u9996\u9009\u9879->\u9ad8\u7ea7->\u6587\u4ef6\u548c\u6587\u4ef6\u5939\uff1a\u6570\u636e\u5b58\u50a8\u4f4d\u7f6e\u9009\u62e9\u81ea\u5b9a\u4e49\uff0c\u4fee\u6539\u6587\u4ef6\u5b58\u50a8\u4f4d\u7f6e\uff08\u5982\uff1a`E:\\\\zotero_library`\uff09\uff1b\\r\\n\\r\\n    > \u957f\u671f\u79ef\u7d2f\u7684\u6587\u732e\u8f83\u5927\uff0c\u4e0d\u5efa\u8bae\u653e\u5728\u9ed8\u8ba4\u7684C\u76d8\\r\\n\\r\\n3. \u5c06`E:\\\\zotero_library\\\\storage`\u79fb\u52a8\u5230OneDrive\u7f51\u76d8\u4e2d\uff0c\u5982\uff1a`D:\\\\OneDrive\\\\Zorero_storage\\\\storage`\uff1b\\r\\n\\r\\n4. \u5efa\u7acb\u94fe\u63a5\\r\\n\\r\\n`mklink /J \\"E:\\\\zotero_library\\\\storage\\" \\"D:\\\\OneDrive\\\\Zorero_storage\\\\storage\\"`\\r\\n\\r\\n\u5230\u6b64\u4e3a\u6b62\uff0c\u5b9e\u73b0\u540c\u6b65\u3002\\r\\n\\r\\n\u82e5\u76f4\u63a5\u5c06zotero\u6570\u636e\u5b58\u50a8\u4f4d\u7f6e\u653e\u81f3OneDrive\u4f1a\u63d0\u793a\u6709\u98ce\u9669\uff08\u6570\u636e\u540c\u6b65\u7684\u5f02\u5e38\u60c5\u51b5\uff09\uff0c\u6240\u4ee5\u5c06storage\u653e\u7f6e\u4e91\u76d8\uff0c\u5e76\u5efa\u7acb\u4e91\u76d8\u4e0e\u672c\u5730\u7684\u94fe\u63a5\u98ce\u9669\u66f4\u4f4e\u3002\\r\\n\\r\\n\x3c!-- truncate --\x3e"},{"id":"/2023/03/02/gdal_translate","metadata":{"permalink":"/blog/2023/03/02/gdal_translate","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-03-02-gdal_translate.md","source":"@site/blog/2023-03-02-gdal_translate.md","title":"gdal_translate\u53bb\u9664\u7f16\u7801\u5f71\u50cf\u9ed1\u8fb9","description":"\u5730\u7406\u7f16\u7801\u540e\u5f71\u50cf\u7684\u56db\u4e2a\u89d2\u70b9\u4e00\u822c\u90fd\u6709\u201c\u9ed1\u8fb9\u201d(\u5bf9\u4e8efloat\u4ee5\u4e0a\u6570\u636e\uff0c\u663e\u793a\u4e3aNoData\uff0c\u503c\u4e3aNAN)\uff0c\u5728arcgis\u4e2d\u663e\u793a\u65f6\u975e\u5e38\u5f71\u54cd\u89c2\u611f\uff0c\u9700\u8981\u6d88\u9664\u3002","date":"2023-03-02T00:00:00.000Z","tags":[{"inline":true,"label":"gdal","permalink":"/blog/tags/gdal"},{"inline":true,"label":"gdal_translate","permalink":"/blog/tags/gdal-translate"}],"readingTime":0.83,"hasTruncateMarker":true,"authors":[{"name":"litan","title":"SW Engineer","url":"https://github.com/li-tann","imageURL":"/img/me.jpg","key":"li-tann","page":null}],"frontMatter":{"title":"gdal_translate\u53bb\u9664\u7f16\u7801\u5f71\u50cf\u9ed1\u8fb9","authors":"li-tann","tags":["gdal","gdal_translate"]},"unlisted":false,"prevItem":{"title":"zotero+OneDrive\u5b9e\u73b0\u4e91\u540c\u6b65","permalink":"/blog/2023/03/03/zotero-onedrive"},"nextItem":{"title":"docusaurus\u5e38\u7528\u547d\u4ee4","permalink":"/blog/sec-blog"}},"content":"\u5730\u7406\u7f16\u7801\u540e\u5f71\u50cf\u7684\u56db\u4e2a\u89d2\u70b9\u4e00\u822c\u90fd\u6709\u201c\u9ed1\u8fb9\u201d(\u5bf9\u4e8efloat\u4ee5\u4e0a\u6570\u636e\uff0c\u663e\u793a\u4e3aNoData\uff0c\u503c\u4e3aNAN)\uff0c\u5728arcgis\u4e2d\u663e\u793a\u65f6\u975e\u5e38\u5f71\u54cd\u89c2\u611f\uff0c\u9700\u8981\u6d88\u9664\u3002\\r\\n\\r\\n\u4f7f\u7528gdal_translate.exe\u5de5\u5177\uff0c\u53ef\u4ee5\u6709\u6548\u6d88\u9664\u201c\u9ed1\u8fb9\u201d\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a\\r\\n\\r\\n`gdal_translate.exe img_input.tif img_output.tif -a_nodata 0`\\r\\n\\r\\n\u8be5\u547d\u4ee4\u53ef\u4ee5\u5c06img_input.tif\u4e2d\u6240\u6709\u503c\u4e3a`NoData`\u7684\u503c\u8f6c\u6362\u4e3a`0`\uff0c\u5e76\u4e14\u4e3a\u5f71\u50cf\u6dfb\u52a0\u6570\u636e`NoData Value=0`\uff0c\\r\\n\\r\\n\u8f6c\u6362\u5b8c\u6210\u540e\uff0c\u518d\u6b21\u4f7f\u7528arcmap\u52a0\u8f7d\u8be5\u5f71\u50cf\uff0c\u5373\u53ef\u5f97\u5230\u65e0\u201c\u9ed1\u8fb9\u201d\u7684\u5730\u7406\u7f16\u7801\u540e\u5f71\u50cf\u3002\\r\\n\\r\\n\u4f2a\u4ee3\u7801\uff1a\\r\\n\\r\\n```cpp\\r\\nGDALDataset* p_ds = static_cast<GDALDataset*>(GDALOpen(\\"\\",GA_Update));\\r\\nint bands = p_ds->GetRasterCount();\\r\\nfor(int b = 1; b<bands; b++)\\r\\n{\\r\\n    GDALRasterBand* rb = p_ds->GetRasterBnad(b);\\r\\n    rb->setNoDataValue(0);\\r\\n}\\r\\nGDALClose(p_ds);\\r\\n\\r\\n```\\r\\n\\r\\n\x3c!-- truncate --\x3e"},{"id":"sec-blog","metadata":{"permalink":"/blog/sec-blog","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-03-01-docusaurus-note.md","source":"@site/blog/2023-03-01-docusaurus-note.md","title":"docusaurus\u5e38\u7528\u547d\u4ee4","description":"\u4e0b\u8f7d\u6807\u51c6\u7248\u672c\uff0c","date":"2023-03-01T00:00:00.000Z","tags":[{"inline":true,"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.245,"hasTruncateMarker":true,"authors":[{"name":"litan","title":"SW Engineer","url":"https://github.com/li-tann","imageURL":"/img/me.jpg","key":"li-tann","page":null}],"frontMatter":{"slug":"sec-blog","title":"docusaurus\u5e38\u7528\u547d\u4ee4","authors":"li-tann","tags":["docusaurus"]},"unlisted":false,"prevItem":{"title":"gdal_translate\u53bb\u9664\u7f16\u7801\u5f71\u50cf\u9ed1\u8fb9","permalink":"/blog/2023/03/02/gdal_translate"},"nextItem":{"title":"My First Blog in docusaurus","permalink":"/blog/fst-blog"}},"content":"\u4e0b\u8f7d\u6807\u51c6\u7248\u672c\uff0c\\r\\n\\r\\n`npx create-docusaurus@latest my-website classic`\\r\\n\\r\\n\u4e0b\u8f7d\u7279\u5b9a\u7248\u672c\u7684math\u548ckatex\u63d2\u4ef6\uff0c\\r\\n\\r\\n`npm install --save remark-math@3 rehype-katex@5 hast-util-is-element@1.1.0`\\r\\n\\r\\ngithub\u90e8\u7f72\uff0c\\r\\n\\r\\n`cmd /C \'set \\"GIT_USER=li-tann\\" && yarn deploy\'`\uff0c\\r\\n\\r\\n\u6216\\r\\n\\r\\n`cmd /C \'set \\"USE_SSH=true\\" && yarn deploy\'`\\r\\n\\r\\n\x3c!-- truncate --\x3e"},{"id":"fst-blog","metadata":{"permalink":"/blog/fst-blog","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-02-08-my-fst-blog.md","source":"@site/blog/2023-02-08-my-fst-blog.md","title":"My First Blog in docusaurus","description":"hello, docusaurus","date":"2023-02-08T00:00:00.000Z","tags":[{"inline":true,"label":"hello","permalink":"/blog/tags/hello"},{"inline":true,"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.03,"hasTruncateMarker":true,"authors":[{"name":"litan","title":"SW Engineer","url":"https://github.com/li-tann","imageURL":"/img/me.jpg","key":"li-tann","page":null}],"frontMatter":{"slug":"fst-blog","title":"My First Blog in docusaurus","authors":"li-tann","tags":["hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"docusaurus\u5e38\u7528\u547d\u4ee4","permalink":"/blog/sec-blog"}},"content":"hello, docusaurus\\r\\n\\r\\n--li-tann\\r\\n\\r\\n\x3c!-- truncate --\x3e"}]}}')}}]);