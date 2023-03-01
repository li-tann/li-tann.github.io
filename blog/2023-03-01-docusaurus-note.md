---
slug: sec-blog
title: docusaurus常用命令
authors: li-tann
tags: [docusaurus]
---

下载标准版本，

`npx create-docusaurus@latest my-website classic`

下载特定版本的math和katex插件，

`npm install --save remark-math@3 rehype-katex@5 hast-util-is-element@1.1.0`

github部署，

`cmd /C "set "GIT_USER=li-tann" && yarn deploy"`，

或

`cmd /C 'set "USE_SSH=true" && yarn deploy'`
