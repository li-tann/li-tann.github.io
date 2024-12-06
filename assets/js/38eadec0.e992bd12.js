"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4184],{16056:(A,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"code/cpp_qt/qgraphics","title":"QGraphics","description":"Scene, View, Item\u7684\u8054\u7cfb","source":"@site/docs/code/cpp_qt/qgraphics.md","sourceDirName":"code/cpp_qt","slug":"/code/cpp_qt/qgraphics","permalink":"/docs/code/cpp_qt/qgraphics","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"custom_edit_url":null},"sidebar":"code","previous":{"title":"Qt Database","permalink":"/docs/code/cpp_qt/qclass_database"},"next":{"title":"qmake\u8bed\u6cd5\uff08pro\u6587\u4ef6\u5199\u6cd5\uff09","permalink":"/docs/code/cpp_qt/qmake_syntax"}}');var r=n(74848),t=n(28453);const s={custom_edit_url:null},c="QGraphics",d={},o=[{value:"Scene, View, Item\u7684\u8054\u7cfb",id:"scene-view-item\u7684\u8054\u7cfb",level:2},{value:"test",id:"test",level:3},{value:"item",id:"item",level:2},{value:"\u57fa\u672c\u5c5e\u6027",id:"\u57fa\u672c\u5c5e\u6027",level:3},{value:"\u5e38\u7528\u4e8b\u4ef6",id:"\u5e38\u7528\u4e8b\u4ef6",level:3},{value:"test-lineItem(mouseMoveEvent)",id:"test-lineitemmousemoveevent",level:3},{value:"test-rectItem(hover + move)",id:"test-rectitemhover--move",level:3},{value:"test-item bezier-curve",id:"test-item-bezier-curve",level:3},{value:"ViewportUpdateMode",id:"viewportupdatemode",level:3},{value:"stroker",id:"stroker",level:3},{value:"test-",id:"test-",level:3}];function l(A){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...A.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"qgraphics",children:"QGraphics"})}),"\n",(0,r.jsx)(e.h2,{id:"scene-view-item\u7684\u8054\u7cfb",children:"Scene, View, Item\u7684\u8054\u7cfb"}),"\n",(0,r.jsx)(e.p,{children:"qgraphicsview, qgraphicsscene, qgraphicsitem \u4e09\u8005\u4e4b\u95f4\u7684\u5173\u7cfb"}),"\n",(0,r.jsx)(e.p,{children:"qgraphicsscene(\u573a\u666f)\u53ef\u4ee5\u7406\u89e3\u4e3a\u4e00\u5757\u753b\u5e03\uff0cqgraphicsitem(\u56fe\u5143)\u8981\u7ed8\u5236\u5230\u201c\u753b\u5e03\u201d\u4e2d\uff0c\u4f46\u5982\u679c\u60f3\u8981\u6b63\u5e38\u7684\u770b\u5230scene\u91cc\u7684\u5185\u5bb9\uff0c\u9700\u8981\u7528\u4e00\u4e2aqgraphicsview(\u89c6\u56fe)\u6765\u76d1\u89c6scene\u3002"}),"\n",(0,r.jsx)(e.p,{children:"view\u548cscene\u7684\u5750\u6807\u7cfb\u7edf\u4e5f\u662f\u4e0d\u5b8c\u5168\u76f8\u540c\u7684\uff0cview\u7684\u5750\u6807\u7cfb\u7edf\u4e0e\u5176\u4ed6\u7a97\u53e3\u7c7b\u4f3c\uff0c\u5de6\u4e0a\u89d2\u4e3a(0,0); scene\u5219\u662f\u4e2d\u5fc3\u70b9\u4e3a(0,0)\u3002 view\u548cscene\u7684\u5750\u6807\u7cfb\u7edf\u662f\u53ef\u4ee5\u901a\u8fc7\u51fd\u6570\u76f4\u63a5\u8f6c\u6362\u7684\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u521d\u59cb\u5b9a\u4e49\u65f6\uff0c\u9700\u8981\u5148\u5b9a\u4e49scene\uff0c\u518d\u5b9a\u4e49view\uff08\u5173\u952e\u662f\u5efa\u7acb\u597dscene\u540e\u518d\u5c06view\u4e0escene\u7ed1\u5b9a\uff09"}),"\n",(0,r.jsx)(e.h3,{id:"test",children:"test"}),"\n",(0,r.jsx)(e.p,{children:"\u5b9e\u73b0\u4e00\u4e2a\u652f\u6301\u9f20\u6807\u8ffd\u8e2a\uff0c\u5b9e\u65f6\u663e\u793a\u5750\u6807\u7cfb\u7684\u754c\u9762"}),"\n",(0,r.jsx)(e.p,{children:"\u5b9e\u73b0\u9f20\u6807\u8ffd\u8e2a, \u9700\u8981\u5199\u4e00\u4e2a\u81ea\u5df1\u7684scene\uff08\u7ee7\u627f\uff09"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:'/// my_scene.h\r\n#ifndef MY_SCENE\r\n#define MY_SCENE\r\n\r\n#include <QGraphicsScene>\r\n#include "item_test.h"\r\n\r\nclass my_scene : public QGraphicsScene\r\n{\r\n    Q_OBJECT\r\npublic:\r\n    my_scene(QObject* parent = nullptr);\r\n    ~my_scene();\r\nsignals:\r\n    void sentScenePos(QPointF pos);\r\nprotected:\r\n    // \u5de6\u952e\uff1a\u6dfb\u52a0item  \u53f3\u952e\uff1a\u79fb\u9664item\r\n    void mousePressEvent(QGraphicsSceneMouseEvent* event);\r\n    void mouseMoveEvent(QGraphicsSceneMouseEvent* event);\r\n    // Backspace\u952e\u79fb\u9664item\r\n    void keyPressEvent(QKeyEvent* event);\r\n};\r\n#endif // !MY_SCENE\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:'/// my_scene.cpp\r\n#include "my_scene.h"\r\n#include <qevent.h>\r\n#include <qgraphicssceneevent.h>\r\n#include <qdebug.h>\r\n\r\nnodeeditor_scene::nodeeditor_scene(QObject* parent)\r\n    : QGraphicsScene(parent){}\r\n\r\nnodeeditor_scene::~nodeeditor_scene(){}\r\n\r\nvoid nodeeditor_scene::mousePressEvent(QGraphicsSceneMouseEvent* event)\r\n{\r\n        QGraphicsScene::mousePressEvent(event);\r\n    emit sentScenePos(event->scenePos());\r\n}\r\n\r\nvoid nodeeditor_scene::mouseMoveEvent(QGraphicsSceneMouseEvent* event)\r\n{\r\n    QGraphicsScene::mouseMoveEvent(event);\r\n    emit sentScenePos(event->scenePos());\r\n    \r\n}\r\n\r\nvoid nodeeditor_scene::keyPressEvent(QKeyEvent* event) {\r\n    if (event->key() == Qt::Key_Backspace) {\r\n        while (!selectedItems().isEmpty()) \r\n            removeItem(selectedItems().front());\r\n    }\r\n    else {\r\n        QGraphicsScene::keyPressEvent(event);\r\n    }\r\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u521b\u5efa\u597d\u81ea\u5b9a\u4e49\u7684scene\u540e\uff0c\u5728widget\u4e2d\u6dfb\u52a0scene\u7b49\u63a7\u4ef6"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:'/// mainwindow.h\r\n#ifndef MAINWINDOW_H\r\n#define MAINWINDOW_H\r\n\r\n#include <qmainwindow.h>\r\n#include <qwidget.h>\r\n#include <qlabel.h>\r\n#include <qgraphicsview.h>\r\n#include <qgraphicsitem.h>\r\n#include <qgraphicsscene.h>\r\n#include "my_scene.h"\r\n\r\nclass mainwindow : public QMainWindow\r\n{\r\n    Q_OBJECT\r\npublic:\r\n    mainwindow(QWidget* parent = nullptr);\r\n    ~mainwindow();\r\n\r\n    QWidget* central_widget;\r\n    QGraphicsView* view;\r\n    my_scene* scene;\r\n    QGridLayout* gridlayout;\r\n    QLabel* label_pos;\r\n\r\n};\r\n#endif // !MAINWINDOW_H\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:'#include "mainwindow.h"\r\n\r\n#include <qfiledialog.h>\r\n#include <iostream>\r\n#include <qstring.h>\r\n\r\n#include <qevent.h>\r\n#include <qdebug.h>\r\n\r\nmainwindow::mainwindow(QWidget* parent):\r\n    QMainWindow(parent)\r\n{\r\n    this->setMinimumSize(1000, 700);\r\n    /// \u5b9a\u4e49scene\u5c3a\u5bf8\r\n    scene = new nodeeditor_scene(this);\r\n    scene->setSceneRect(-400, -400, 800, 700);\r\n    /// mainwindow\u4e2d\u9700\u8981\u8bbe\u7f6e\u4e00\u4e2acentral_widget\r\n    central_widget = new QWidget(this);\r\n    central_widget->setMouseTracking(true);\r\n\r\n    label_pos = new QLabel(this);\r\n\r\n    label_pos->setGeometry(20, 20, 200, 100);\r\n    label_pos->setAlignment(Qt::AlignLeft | Qt::AlignTop);\r\n    label_pos->setText(tr("pos"));\r\n\r\n    view = new QGraphicsView(scene, this);\r\n    view->setMouseTracking(true);\r\n\r\n    /// scene\u4e2d\u53d1\u51fascene\u5750\u6807\u540e, \u5728\u8be5lambda\u51fd\u6570\u4e2d\u8f6c\u6362\u5230view\u5750\u6807\u7cfb\u4e2d, \u6253\u5370\u5230label\u4e2d\u663e\u793a\r\n    connect(scene, &nodeeditor_scene::sentScenePos, this, [=](QPointF pos) {\r\n        auto view_pos = view->mapFromScene(pos);\r\n            label_pos->setText(tr("view : %1\\nscene:%2")\r\n                .arg(QString("%1,%2").arg(view_pos.y()).arg(view_pos.x()))\r\n                .arg(QString("%1,%2").arg(pos.y()).arg(pos.x()))\r\n            );\r\n        });\r\n\r\n    gridlayout = new QGridLayout(central_widget);\r\n    gridlayout->setSpacing(2);\r\n    gridlayout->setContentsMargins(5, 5, 5, 5);\r\n    gridlayout->addWidget(view);\r\n\r\n    view->show();\r\n\r\n}\r\n\r\nmainwindow::~mainwindow()\r\n{}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u6700\u540e\u5728\u4e3b\u51fd\u6570\u4e2d\u542f\u52a8mainwindow, \u5373\u53ef\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:'/// main.cpp\r\n#include <qapplication.h>\r\n#include "mainwindows.h"\r\n\r\nint main(int argc, char* argv[])\r\n{\r\n    QApplication a(argc,argv);\r\n\r\n    mainwindow m;\r\n    m.show();\r\n\r\n    return a.exec();\r\n}\r\n\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Alt text",src:n(7935).A+"",width:"1005",height:"728"})}),"\n",(0,r.jsx)(e.h2,{id:"item",children:"item"}),"\n",(0,r.jsx)(e.p,{children:"\u573a\u666f\u4e2d\u7684\u5404\u79cd\u56fe\u50cf\u90fd\u662f\u6709item\u7ec4\u6210\u7684\uff0c\u6211\u4e86\u89e3\u7684\u4e5f\u4e0d\u591a\uff0c\u4f46\u6709\u4e00\u70b9\u70b9\u81ea\u5df1\u7684\u7406\u89e3\u3002(\u5148\u6b20\u7740\u5427)"}),"\n",(0,r.jsx)(e.h3,{id:"\u57fa\u672c\u5c5e\u6027",children:"\u57fa\u672c\u5c5e\u6027"}),"\n",(0,r.jsx)(e.p,{children:"\u5bf9\u4e8e\u81ea\u5b9a\u4e49\u7684item\u6765\u8bf4\uff0c\u6211\u8ba4\u4e3aQPen, QBrush\u662f\u5173\u952e\u3002"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"pen"}),"\n",(0,r.jsx)(e.li,{children:"brush"}),"\n",(0,r.jsx)(e.li,{children:"collding"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["QPen\u8d1f\u8d23\u63cf\u7ed8\u5916\u4fa7\u8f6e\u5ed3\uff0cQBrush\u8d1f\u8d23\u586b\u5145item\u5185\u90e8\u989c\u8272\uff0ccollding\u7528\u4e8e\u78b0\u649e\u68c0\u6d4b\uff0c\u5f53\u81ea\u5b9a\u4e49\u4e0d\u89c4\u5219\u56fe\u5f62\u65f6\u9700\u8981\u91cd\u5199",(0,r.jsx)(e.code,{children:"shape()"}),"\u51fd\u6570\uff0c\u5e76\u5728\u91cd\u5199",(0,r.jsx)(e.code,{children:"boundingRect"}),"\u51fd\u6570\u65f6\uff0c\u8fd4\u56de",(0,r.jsx)(e.code,{children:"shape().boundingRect()"}),",\u53ef\u4ee5\u8868\u793a\u56fe\u50cf\u6700\u771f\u5b9e\u7684\u5f62\u72b6\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u81ea\u5b9a\u4e49\u7684item\uff08\u57fa\u7c7b\u662fQGraphicsItem\uff09\u662f\u6ca1\u6709\u9ed8\u8ba4\u7684pen\u548cbrush\u7684\uff0c\u9700\u8981\u5728\u7c7b\u4e2d\u81ea\u5df1\u5b9a\u4e49\uff0c\u5e76\u4e14\u5728paint\u51fd\u6570\u4e2d\u4e3apainter\u52a0\u8f7dpen\u548cbrush\u8fdb\u884c\u7ed8\u5236\u3002\uff08\u8be6\u7ec6\u7684paint\u51fd\u6570\u4f1a\u5728\u540e\u7eed\u7684\u793a\u4f8b\u4ee3\u7801\u4e2d\u8fdb\u884c\u8bf4\u660e\uff09"}),"\n",(0,r.jsx)(e.p,{children:"\u7531\u4e8eQGraphicsItem\u5e76\u975e\u7ee7\u627f\u81eaQObject, \u5982\u679c\u60f3\u8981\u4f7f\u81ea\u5b9a\u4e49\u7684Item\u5e26\u6709\u4fe1\u53f7\u69fd\u529f\u80fd\uff0c\u53ef\u4ee5\u901a\u8fc7\u591a\u91cd\u7ee7\u627f\u7684\u65b9\u5f0f\u6b63\u5e38\u4f7f\u7528\u4fe1\u53f7\u69fd\u529f\u80fd\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class my_item : public QObject, public QGraphicsItem\r\n{\r\n    Q_OBJECT\r\n    ///...\r\n}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u5e38\u7528\u4e8b\u4ef6",children:"\u5e38\u7528\u4e8b\u4ef6"}),"\n",(0,r.jsx)(e.p,{children:"\u9f20\u6807\u62d6\u62fd\u4e8b\u4ef6:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"mousePressEvent"}),"\n",(0,r.jsx)(e.li,{children:"mouseMoveEvent"}),"\n",(0,r.jsx)(e.li,{children:"mouseReleaseEvent"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u9f20\u6807\u60ac\u6d6e\u4e8b\u4ef6:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"hoverEnterEvent"}),"\n",(0,r.jsx)(e.li,{children:"hoverMoveEvent(\u4e0d\u5e38\u7528)"}),"\n",(0,r.jsx)(e.li,{children:"hoverLeaveEvent"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"test-lineitemmousemoveevent",children:"test-lineItem(mouseMoveEvent)"}),"\n",(0,r.jsx)(e.p,{children:"\u518d\u5b9e\u73b0\u4e00\u4e2a\u53ef\u62d6\u62fd\u7684, \u652f\u6301\u78b0\u649e\u68c0\u6d4b\u7684\u76f4\u7ebf\u7c7b\uff08\u57fa\u4e8eLineItem\uff09"}),"\n",(0,r.jsx)(e.h3,{id:"test-rectitemhover--move",children:"test-rectItem(hover + move)"}),"\n",(0,r.jsx)(e.p,{children:"\u518d\u5b9e\u73b0\u4e00\u4e2a\u53ef\u62d6\u62fd\uff0c\u5e76\u4e14\u6dfb\u52a0\u4e86\u60ac\u505c\u4e8b\u4ef6\u7684 \u77e9\u5f62item"}),"\n",(0,r.jsx)(e.h3,{id:"test-item-bezier-curve",children:"test-item bezier-curve"}),"\n",(0,r.jsx)(e.p,{children:"\u518d\u57fa\u4e8eItem\u5b9e\u73b0\u4e00\u4e2a\u652f\u6301\u62d6\u62fd\u3001\u652f\u6301\u78b0\u649e\u68c0\u6d4b\u7684cubic\u8d1d\u585e\u5c14\u66f2\u7ebf\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u81ea\u5efa\u7684item\uff0c\u5c24\u5176\u662f\u9047\u5230\u4e0d\u89c4\u5219\u56fe\u50cf\u65f6\uff0c\u9700\u8981\u91cd\u6784boundingRect(), shape(), itemChanged(), paint()"}),"\n",(0,r.jsx)(e.h3,{id:"viewportupdatemode",children:"ViewportUpdateMode"}),"\n",(0,r.jsx)(e.p,{children:"\u81ea\u5b9a\u4e49paint\u540e\uff0c\u62d6\u62fditem\u4f1a\u51fa\u73b0\u62d6\u5f71\u95ee\u9898\uff0c\u89e3\u51b3\u65b9\u6cd5\u662f\u8bbe\u7f6eview\u7684\u66f4\u65b0\u65b9\u6cd5"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"view->setViewportUpdateMode(QGraphicsView::FullViewportUpdate);"})}),"\n",(0,r.jsx)(e.h3,{id:"stroker",children:"stroker"}),"\n",(0,r.jsx)(e.p,{children:"\u8fd8\u8981\u8bf4\u4e00\u8bf4\u7c7b\u4f3c\u4e8e\u7f13\u51b2\u533a\u6548\u679c\u7684stroker"}),"\n",(0,r.jsx)(e.h3,{id:"test-",children:"test-"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Alt text",src:n(91638).A+"",width:"1039",height:"787"})}),"\n",(0,r.jsx)(e.p,{children:"\u7a97\u53e3\u5185\u5305\u542b\u5185\u5bb9\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u591a\u79cd\u53ef\u62d6\u52a8\u7684item\u7ec4\u4ef6"}),"\n",(0,r.jsx)(e.li,{children:"\u5177\u6709\u9f20\u6807\u60ac\u505c\u6548\u679c\u7684\u77e9\u5f62\u5757rectItem"}),"\n",(0,r.jsx)(e.li,{children:"\u6709Pen\u4f46\u6ca1\u6709Brush\u7684\u66f2\u7ebf"}),"\n",(0,r.jsx)(e.li,{children:"\u591a\u79cd\u56fe\u50cf\u7684\u68c0\u6d4b\u78b0\u649e\uff08\u7ea2\u6846\u8868\u793a\u6709\u5b58\u5728\u78b0\u649e\uff09"}),"\n",(0,r.jsx)(e.li,{children:"\u81ea\u5b9a\u4e49\u7684\u8d1d\u8d5b\u5c14\u66f2\u7ebf\uff0c\u652f\u6301\u62d6\u62fd\u548c\u78b0\u649e\u68c0\u6d4b"}),"\n"]})]})}function a(A={}){const{wrapper:e}={...(0,t.R)(),...A.components};return e?(0,r.jsx)(e,{...A,children:(0,r.jsx)(l,{...A})}):l(A)}},7935:(A,e,n)=>{n.d(e,{A:()=>i});const i="data:image/png;base64,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"},91638:(A,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/2023-07-27-13-20-06-bb1b4884260585d9ed679c49f1a763cc.png"},28453:(A,e,n)=>{n.d(e,{R:()=>s,x:()=>c});var i=n(96540);const r={},t=i.createContext(r);function s(A){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function c(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(r):A.components||r:s(A.components),i.createElement(t.Provider,{value:e},A.children)}}}]);