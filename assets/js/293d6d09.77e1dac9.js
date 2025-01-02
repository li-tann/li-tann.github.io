"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8586],{37128:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"code/cpp/gdal","title":"GDAL","description":"\u5730\u5b66\u5e38\u7528\u7684\u56fe\u50cf\u5904\u7406\u5e93","source":"@site/docs/code/cpp/gdal.md","sourceDirName":"code/cpp","slug":"/code/cpp/gdal","permalink":"/docs/code/cpp/gdal","draft":false,"unlisted":false,"editUrl":null,"tags":[{"inline":true,"label":"Cpp","permalink":"/docs/tags/cpp"},{"inline":true,"label":"GDAL","permalink":"/docs/tags/gdal"}],"version":"current","lastUpdatedBy":"li-tann","lastUpdatedAt":1735780614000,"frontMatter":{"custom_edit_url":null,"last_update":{"author":"li-tann"},"tags":["Cpp","GDAL"]},"sidebar":"code","previous":{"title":"fmt","permalink":"/docs/code/cpp/fmt"},"next":{"title":"matlab","permalink":"/docs/code/cpp/matlab"}}');var a=n(74848),s=n(28453);const i={custom_edit_url:null,last_update:{author:"li-tann"},tags:["Cpp","GDAL"]},l="GDAL",d={},p=[{value:"\u6805\u683c\u6570\u636e\u5904\u7406",id:"\u6805\u683c\u6570\u636e\u5904\u7406",level:2},{value:"\u6805\u683c\u57fa\u7840\u6570\u636e\u7c7b\u578b",id:"\u6805\u683c\u57fa\u7840\u6570\u636e\u7c7b\u578b",level:3},{value:"Create, Read, Write",id:"create-read-write",level:3},{value:"MEM\u6570\u636e\u683c\u5f0f",id:"mem\u6570\u636e\u683c\u5f0f",level:3},{value:"setProjection",id:"setprojection",level:3},{value:"GDAL\u8fdb\u5ea6\u6761",id:"gdal\u8fdb\u5ea6\u6761",level:3},{value:"\u77e2\u91cf\u6570\u636e\u5904\u7406",id:"\u77e2\u91cf\u6570\u636e\u5904\u7406",level:2},{value:"\u77e2\u91cf\u57fa\u7840\u6570\u636e\u7c7b\u578b",id:"\u77e2\u91cf\u57fa\u7840\u6570\u636e\u7c7b\u578b",level:3},{value:"\u62d3\u6251\u5173\u7cfb",id:"\u62d3\u6251\u5173\u7cfb",level:3},{value:"CreateLayer, wkbPolygon",id:"createlayer-wkbpolygon",level:3},{value:"\u7531Geometry\u751f\u6210shp\u6587\u4ef6",id:"\u7531geometry\u751f\u6210shp\u6587\u4ef6",level:3},{value:"spatial reference system",id:"spatial-reference-system",level:2}];function c(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"gdal",children:"GDAL"})}),"\n",(0,a.jsx)(r.p,{children:"\u5730\u5b66\u5e38\u7528\u7684\u56fe\u50cf\u5904\u7406\u5e93"}),"\n",(0,a.jsxs)(r.p,{children:["\u4ee3\u7801\u53ef\u53c2\u8003github\u5e93:",(0,a.jsx)(r.a,{href:"https://github.com/li-tann/execs_dependent_on_gdal",children:"gdal_exes"}),", \u4e00\u4e9b\u6839\u636e\u5b9e\u9645\u9700\u6c42\u5199\u7684\u5c0f\u51fd\u6570\u3002"]}),"\n",(0,a.jsx)(r.h2,{id:"\u6805\u683c\u6570\u636e\u5904\u7406",children:"\u6805\u683c\u6570\u636e\u5904\u7406"}),"\n",(0,a.jsx)(r.h3,{id:"\u6805\u683c\u57fa\u7840\u6570\u636e\u7c7b\u578b",children:"\u6805\u683c\u57fa\u7840\u6570\u636e\u7c7b\u578b"}),"\n",(0,a.jsx)(r.mermaid,{value:"graph TD;\r\n    DV[GDALDriver]--\x3eDS[GDALDataset];\r\n    DS--\x3eXSize;\r\n    DS--\x3eYSize;\r\n    DS--\x3eBands;\r\n    DS--\x3eGeoTransform;\r\n    DS--\x3eProjection;\r\n    DS--\x3eRB[GDALRasterBand];\r\n    DS--\x3eRasterIO;\r\n    RB--\x3eDataType;\r\n    RB--\x3eNoDataValue;\r\n    RB--\x3eRasterIO;\r\n    RasterIO--\x3eArr[void* arr]"}),"\n",(0,a.jsx)(r.h3,{id:"create-read-write",children:"Create, Read, Write"}),"\n",(0,a.jsx)(r.p,{children:"\u4f7f\u7528GDALOpen()\u8bfb\u53d6\u5f71\u50cf\u4fe1\u606f\u5b58\u50a8\u81f3GDALDataset\uff0c\u6709GA_ReadOnly\u548cGA_Update\u4e24\u79cd\u65b9\u5f0f\uff0c\u987e\u540d\u601d\u4e49\u3002"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-cpp",children:'int image_read(const char* imgpath)\r\n{\r\n    /// \u52a0\u8f7d\u6240\u6709\u6ce8\u518c\u5668\r\n    GDALAllRegister();\r\n    /// \u662f\u5426\u652f\u6301\u8bfb\u53d6utf8\u8def\u5f84\r\n    CPLSetConfigOption("GDAL_FILENAME_IS_UTF8", "NO");\r\n\r\n    /// \u8bfb\u53d6\u6587\u4ef6\u5230\r\n    GDALDataset* p_src_ds =  (GDALDataset*)GDALOpen(imgpath, GA_Update);\r\n\r\n    if(p_src_ds == nullptr){\r\n        return -1;\r\n    }\r\n\r\n    int width = p_src_ds->GetRasterYSize();\r\n    int height= p_src_ds->GetRasterXSize();\r\n    int bands = p_src_ds->GetRasterCount();\r\n    GDALDataType type = p_src_ds.GetRasterBand(1).GetRasterDataType();\r\n\r\n    if(type != GDT_FLOAT32)\r\n        return false;\r\n\r\n    /// \u6307\u6ce2\u6bb5\u7684\u8bfb\u53d6\u987a\u5e8f\r\n    int panBandMap[3] = { 1,2,3 };\r\n\r\n    /// \u521b\u5efa\u9a71\u52a8\r\n    GDALDriver* p_dst_driver = GetGDALDriverManager()->GetDriverByName("GTiff");\r\n    /// \u901a\u8fc7\u9a71\u52a8\u521b\u5efa\u6570\u636e\u5c42\r\n    GDALDataset* p_dst_ds = p_dst_driver->Create("./output.tif",width,height,bands,GDT_Float32,nullptr);\r\n\r\n    CPLErr cpl_err;\r\n    cpl_err = p_src_ds->RasterIO(GF_Read,0,0,img_width,img_height,c_float_arr,img_width,img_height,GDT_CFloat32,1,panBandMap,0,0,0);\r\n    for(int band = 1; band <= bands; band++)\r\n    {\r\n        for(int row = 0; row < height; row++)\r\n        {\r\n            /// \u4ee5float\u683c\u5f0f\u9010\u884c\u8bfb\u53d6\u6570\u636e\r\n            float* p_flt_arr = new float[size_t(width)];\r\n            cpl_err = p_src_ds->RasterIO(GF_Read,0,row,width,1,p_flt_arr,width,1,GDT_Float32,band,panBandMap,0,0,0);\r\n            if(cpl_err == CE_Failure){\r\n                GDALClose(p_src_ds);\r\n                GDALClose(p_dst_ds);\r\n                delete[] p_flt_arr;\r\n                return false;\r\n            }\r\n            /// \u5904\u7406\u6570\u636e\r\n            for(int col=0; col < width; col++)\r\n            {\r\n                p_flt_arr[j] += 1;\r\n            }\r\n            /// \u9700\u8981\u6ce8\u610f, \u53ea\u6709\u5f53GDALDataset\u662f\u901a\u8fc7Create\u521b\u5efa\u3001\u6216GDALOpen("",GA_Update)\u65f6\uff0c\u624d\u53ef\u4ee5\u6267\u884c\u5199\u5165\u64cd\u4f5c\r\n            cpl_err = p_dst_ds->RasterIO(GF_Write,0,row,width,1,p_flt_arr,width,1,GDT_Float32,band,panBandMap,0,0,0);\r\n            if(cpl_err == CE_Failure){\r\n                GDALClose(p_src_ds);\r\n                GDALClose(p_dst_ds);\r\n                delete[] p_flt_arr;\r\n                return false;\r\n            }\r\n            delete[] p_flt_arr;\r\n        }\r\n    }\r\n\r\n    GDALClose(p_src_ds);\r\n    GDALClose(p_dst_ds);\r\n}\n'})}),"\n",(0,a.jsx)(r.h3,{id:"mem\u6570\u636e\u683c\u5f0f",children:"MEM\u6570\u636e\u683c\u5f0f"}),"\n",(0,a.jsx)(r.p,{children:"\u5f53\u4ee3\u7801\u9700\u8981\u4f7f\u7528GDAL\u9891\u7e41\u7684\u521b\u5efa\u4e34\u65f6\u6570\u636e\u5e76\u4e14\u65e0\u9700\u8f93\u51fa\u65f6\uff0c\u5c06\u6570\u636e\u5199\u5230\u78c1\u76d8\u4e2d\uff0c\u9891\u7e41\u7684\u8bfb\u5199\u64cd\u4f5c\u4f1a\u964d\u4f4e\u4ee3\u7801\u7684\u8fd0\u884c\u6548\u7387\u3001\u5e76\u4e14\u5927\u91cf\u7684\u4e34\u65f6\u6570\u636e\u5199\u5165\u5230\u78c1\u76d8\u4e2d\u6700\u540e\u518d\u88ab\u5220\u9664\uff0c\u957f\u671f\u79ef\u7d2f\u4e5f\u4f1a\u5bf9\u786c\u76d8\u9020\u6210\u4e00\u5b9a\u5f71\u54cd\u3002"}),"\n",(0,a.jsx)(r.p,{children:"\u6240\u4ee5\uff0c\u9700\u8981\u4f7f\u7528GDAL\u63d0\u4f9b\u7684MEM\u6570\u636e\u683c\u5f0f\uff0c\u5c06\u751f\u6210\u7684\u6570\u636e\uff08GDALDataset\u683c\u5f0f\uff09\u4fdd\u5b58\u5230\u5185\u5b58\u4e2d\uff0c\u65e2\u53ef\u4ee5\u65b9\u4fbf\u6570\u636e\u7684\u8bfb\u53d6\u3001\u53c8\u80fd\u591f\u51cf\u5c11\u786c\u76d8\u7684\u635f\u8017\uff0c\u552f\u4e00\u7684\u786e\u5b9a\u5c31\u662f\u5bf9\u5185\u5b58\u8981\u6c42\u66f4\u9ad8\u3002"}),"\n",(0,a.jsx)(r.p,{children:"GDAL\u7684\u6570\u636e\u8bfb\u53d6\u662f\u4f7f\u7528GDALOpen\u7b49\u51fd\u6570\u8bfb\u5199\u6570\u636e\u65f6\uff0c\u90fd\u9700\u8981\u8f93\u5165\u6570\u636e\u7684\u5730\u5740const char*  pszFilename`\uff0c\u4f7f\u7528GDAL\u63d0\u4f9b\u7684MEM\u6570\u636e\u5b58\u50a8\u683c\u5f0f\uff0c\u5373\u53ef\u89e3\u51b3\u8be5\u95ee\u9898\u3002"}),"\n",(0,a.jsx)(r.p,{children:"\u4f7f\u7528gdal\u81ea\u5e26\u7684gdalwarp\u5bf9\u6570\u636e\u8fdb\u884c\u5f00\u7a97\u3001\u91cd\u91c7\u6837\u5904\u7406\uff0c\u7531\u4e8e\u4ee3\u7801\u53ea\u652f\u6301\u6574\u666f\u5f71\u50cf\u7684\u91cd\u91c7\u6837\uff0c\u6240\u4ee5\u9700\u8981\u4f7f\u7528RasterIO(..)\u63d0\u53d6\u51fa\u7a97\u53e3\u6570\u636e\uff0c\u4fdd\u5b58\u5728\u5185\u5b58\u4e2d\uff0c\u518d\u4f20\u5165gdalWarp\u8fdb\u884c\u91cd\u91c7\u6837\u5904\u7406\u3002"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-cpp",children:'//\u4ee3\u7801\u56de\u5934\u5728\u5199...\r\nGDALDataset* pSrcDS = (GDALDataset*)GDALOpen(pszSrcFile,GA_ReadOnly);\r\nif(pSrcDS == nullptr){\r\n    return -1;  //Error -1, "srcDataset\'s point is equal with nullptr\r\n}\r\nGDALDataType eDT = pSrcDS->GetRasterBand(1)->GetRasterDataType();\r\nint iBandCount = pSrcDS->GetRasterCount();\r\nint iSrcWidth = pSrcDS->GetRasterXSize();\r\nint iSrcHeight = pSrcDS->GetRasterYSize();\r\nvoid* arr;\r\n//\u8bfb\u53d6\u7a97\u53e3\u6570\u636e\r\nCPLErr e_cpl = pSrcDS->RasterIO(GF_Read, 0, 0, iSrcWidth, iSrcHeight, arr, iSrcWidth, iSrcHeight, GDT_Float64, iBandCount, ibands, 0, 0, 0);\r\nsprintf_s(c_src_mem_path, 256, "MEM:::DATAPOINTER=%d,PIXELS=%d,LINES=%d,BANDS=%d,DATATYPE=%s", arr, iSrcWidth, iSrcHeight, iBandCount, GDALGetDataTypeName(eDT));\n'})}),"\n",(0,a.jsx)(r.p,{children:"\u6838\u5fc3\u662fMEM\u6570\u636e\u7684\u5199\u6cd5\uff0c\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-cpp",children:'sprintf_s(c_src_mem_path, 256, "MEM:::DATAPOINTER=%d,PIXELS=%d,LINES=%d,BANDS=%d,DATATYPE=%s", arr, iSrcWidth, iSrcHeight, iBandCount, GDALGetDataTypeName(eDT));\n'})}),"\n",(0,a.jsx)(r.h3,{id:"setprojection",children:"setProjection"}),"\n",(0,a.jsx)(r.p,{children:"\u4e3a\u5f71\u50cf\u6dfb\u52a0\u5750\u6807\u7cfb\u7edf"}),"\n",(0,a.jsxs)(r.p,{children:["\u53c2\u8003\u7f51\u5740\uff1a",(0,a.jsx)(r.a,{href:"https://spatialreference.org/ref/epsg/4326/html/",children:"4326\u5750\u6807\u7cfb\u7edf\u5b57\u7b26\u4e32\u683c\u5f0f"})]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-cpp",children:'/// \u6b64\u5904\u4e3a\u4e86\u6574\u9f50 \u5207\u4e86\u5f88\u591a\u884c, \u5b9e\u9645\u4f7f\u7528\u65f6\u4f1a\u62a5\u9519\uff0c\u9700\u8981\u5c06\u6240\u6709\u5b57\u7b26\u4fee\u6539\u5230\u540c\u4e00\u884c\u4e2d\u3002\r\nconst char* projection = "GEOGCS[\\"WGS 84\\",\r\n    DATUM[\\"WGS_1984\\",\r\n        SPHEROID[\\"WGS 84\\",6378137,298.257223563,\r\n            AUTHORITY[\\"EPSG\\",\\"7030\\"]],\r\n        AUTHORITY[\\"EPSG","6326\\"]],\r\n    PRIMEM[\\"Greenwich\\",0,\r\n        AUTHORITY[\\"EPSG","8901\\"]],\r\n    UNIT[\\"degree\\",0.01745329251994328,\r\n        AUTHORITY[\\"EPSG","9122\\"]],\r\nAUTHORITY[\\"EPSG","4326\\"]]";\r\n\r\nGDALDataset::setProjection(projection);\n'})}),"\n",(0,a.jsx)(r.h3,{id:"gdal\u8fdb\u5ea6\u6761",children:"GDAL\u8fdb\u5ea6\u6761"}),"\n",(0,a.jsx)(r.p,{children:"gdal\u7684\u8fdb\u5ea6\u6761\u90fd\u662f\u901a\u8fc7\u56de\u8c03\u51fd\u6570\u4f7f\u7528\u7684\u3002"}),"\n",(0,a.jsx)(r.p,{children:"\u4f7f\u7528\u65b9\u6cd5\u4e3a\uff1a"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"\u6839\u636e\u4e09\u4e2a\u5f62\u53c2\uff08\u5b9e\u9645\u4e0a\u53ea\u4f7f\u7528\u4e86\u7b2c\u4e00\u4e2a\u53c2\u6570\uff09\uff0c\u7f16\u5199\u4e00\u4e2a\u8fd4\u56de\u503c\u4e3aint\u7684\u51fd\u6570\uff0c\u51fd\u6570\u5185\u4f7f\u7528\u5f62\u53c2\u8f93\u51fa\u76f8\u5e94\u7684\u8fdb\u7a0b\u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"\u628a\u8fd9\u4e2a\u51fd\u6570\u6307\u9488\u5199\u5165gdal\u7684\u51fd\u6570\u7684\u6307\u5b9a\u4f4d\u7f6e\u5b8c\u6210\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"\u4ee5RasterIO\u4e3a\u4f8b\uff1a"}),"\n",(0,a.jsx)(r.p,{children:"\u9996\u5148\u5199\u8fdb\u5ea6\u503c\u8fd4\u56de\u51fd\u6570\uff1a"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-cpp",children:'int gdalprocess_tmp(double dfComplete,char * pszMessage,void * pProgressArg)\r\n{\r\n    int prog = static_cast<int>(dfComplete * 10);\r\n    static int last_prog = -1;\r\n    if(prog < last_prog){\r\n        last_prog = -1;\r\n    }\r\n    if(last_prog < prog){\r\n        printf("rasterio-prog:%d\\n",prog * 10);\r\n        last_prog = prog;\r\n    }\r\n    return true;\r\n}\n'})}),"\n",(0,a.jsx)(r.p,{children:"\u51fd\u6570\u7684\u8f93\u51fa\u683c\u5f0f\u4e3a\uff1a\u6bcf\u8fc710\u8f93\u51fa\u4e00\u6b21\u5f53\u524d\u8fdb\u5ea6\u3002"}),"\n",(0,a.jsx)(r.p,{children:"main\uff1a"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-cpp",children:'#include <gdal/gdal_priv.h>\r\n#include <gdal/gdal.h>\r\n\r\nint main(int argc, char *argv[])\r\n{\r\n    GDALAllRegister();\r\n    GDALDataset* pdataset = (GDALDataset*)GDALOpen("...",GA_ReadOnly);\r\n    float* arr = new float[pdataset->GetRasterXSize() * pdataset->GetRasterYSize()];\r\n    //\u5b9a\u4e49GDALRasterIOExtraArg\u5e76\u521d\u59cb\u5316\uff08\u521d\u59cb\u5316\u51fd\u6570\u9700\u8981gdal.h\uff09\r\n    GDALRasterIOExtraArg ex_arg;\r\n    INIT_RASTERIO_EXTRA_ARG(ex_arg);\r\n    //\u8fd9\u4e2a\u662f\u4e0a\u9762\u81ea\u5df1\u5199\u7684\u8bfb\u8fdb\u5ea6\u503c\u51fd\u6570\r\n    ex_arg.pfnProgress = (GDALProgressFunc)gdalprocess_tmp;\r\n    //\u8fd9\u4e2a\u662fgdal\u81ea\u5e26\u7684\u8bfb\u8fdb\u5ea6\u503c\u51fd\u6570\uff0c\u6bcf\u8fc72.5%\u8f93\u51fa\u4e00\u4e2a\u201c.\u201d\uff0c\u6bcf\u8fc710%\u8f93\u51fa\u4e00\u6b21\u6570\u5b57\r\n//    ex_arg.pfnProgress = (GDALProgressFunc)GDALTermProgress;\r\n\r\n    pdataset->GetRasterBand(1)->RasterIO(GF_Read, 0, 0, pdataset->GetRasterXSize(), pdataset->GetRasterYSize(), arr, pdataset->GetRasterXSize(), pdataset->GetRasterYSize(), GDT_Float32, 0, 0, &ex_arg);\r\n    \r\n    return 1;\r\n}\n'})}),"\n",(0,a.jsx)(r.p,{children:"\u7ed3\u679c\u5982\u56fe\u6240\u793a"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"cmd\u6548\u679c\u5c55\u793a",src:n(52741).A+"",width:"1222",height:"638"})}),"\n",(0,a.jsx)(r.h2,{id:"\u77e2\u91cf\u6570\u636e\u5904\u7406",children:"\u77e2\u91cf\u6570\u636e\u5904\u7406"}),"\n",(0,a.jsx)(r.h3,{id:"\u77e2\u91cf\u57fa\u7840\u6570\u636e\u7c7b\u578b",children:"\u77e2\u91cf\u57fa\u7840\u6570\u636e\u7c7b\u578b"}),"\n",(0,a.jsx)(r.mermaid,{value:"graph TD;\r\n    driver[GDALDriver] --\x3e ds[GDALDataset]\r\n    ds --\x3e layer[OGRLayer]\r\n    layer --\x3e feature[OGRFeature]\r\n    layer --\x3e getExtent\r\n    layer --\x3e spatialFilter\r\n    layer --\x3e attributeFilter\r\n    layer --\x3e topological\r\n    feature --\x3e geometry[OGRGeometry]\r\n    geometry --\x3e getExtent\r\n    geometry --\x3e topological"}),"\n",(0,a.jsx)(r.p,{children:"\u4e86\u89e3\u8f83\u5c11\uff0c\u540e\u7eed\u5b66\u4e60\u8fc7\u7a0b\u4e2d\u4f1a\u9010\u6e10\u5b8c\u5584"}),"\n",(0,a.jsx)(r.h3,{id:"\u62d3\u6251\u5173\u7cfb",children:"\u62d3\u6251\u5173\u7cfb"}),"\n",(0,a.jsx)(r.p,{children:"OGR\u4e2d\u63d0\u4f9b\u7684\u62d3\u6251\u5173\u7cfb\u6709\u4e03\u79cd\uff0c\u51fd\u6570\u683c\u5f0f\u76f8\u4f3c, \u5f62\u5982\uff0c"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-cpp",children:"OGRLyaer::Topological(OGRLayer* pLayerMehtod,.....)\r\n///\u5c06\u5f53\u524d\u56fe\u5c42\u8bb0\u4e3a lyrC, \u7ed9\u5b9a\u56fe\u5c42\u8bb0\u4e3alyrM\u3002\r\n///\uff08lyr: layer, C: current, M: method\uff09\n"})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"intersection\uff0c\u6c42lyrC\u4e0elyrM\u4e24\u4e2a\u56fe\u5c42\u7684\u4ea4\u96c6"}),"\n",(0,a.jsx)(r.li,{children:"union\uff0c\u6c42lyrC\u4e0elyrM\u4e24\u4e2a\u56fe\u5c42\u7684\u5e76\u96c6"}),"\n",(0,a.jsx)(r.li,{children:"symdifference\uff0c\u6c42lyrC\u4e0elyrM\u4e24\u4e2a\u56fe\u5c42\u7684\u5bf9\u79f0\u5dee"}),"\n",(0,a.jsx)(r.li,{children:"identity\uff0c\u7528lyrM\u7684\u8981\u7d20\u8bc6\u522blyrC\u7684\u8981\u7d20\uff0c\u56fe\u5c42\u6c42\u4ea4\uff0c\u5c5e\u6027\u8868\u6c42\u5e76"}),"\n",(0,a.jsx)(r.li,{children:"update\uff0c\u5c06\u7ed9\u5b9alayer\u66f4\u65b0\u5230\u5f53\u524dlayer\u4e2d"}),"\n",(0,a.jsx)(r.li,{children:"clip\uff0c\u7528lyrM\u88c1\u526alyrC\uff0c"}),"\n",(0,a.jsx)(r.li,{children:"crase\uff0c\u64e6\u9664lyrC\u88ablyrM\u8986\u76d6\u7684\u533a\u57df"}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"\u5982\u679c\u53ea\u9700\u8981\u8ba1\u7b97\u51e0\u4f55\u5173\u7cfb\uff0c\u4e0d\u8003\u8651\u5c5e\u6027\u8868\u7684\u8bdd\uff0cintersetion\uff0cunion\u548csymDifference\u5e94\u8be5\u662f\u4e09\u79cd\u6700\u5e38\u7528\u7684\u62d3\u6251\u5173\u7cfb\u3002"}),"\n",(0,a.jsx)(r.h3,{id:"createlayer-wkbpolygon",children:"CreateLayer, wkbPolygon"}),"\n",(0,a.jsx)(r.p,{children:"\u7531\u70b9\u4fe1\u606f\u751f\u6210\u591a\u8fb9\u5f62shp"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-cpp",children:"vector<xy> points; /// \u5b58\u50a8\u4e86\u5927\u91cf\u7684\u70b9\u4fe1\u606f\r\n\r\nOGRPolygon* polygen = (OGRPolygon*)OGRGeometryFactory::createGeometry(wkbPolygon);\r\nOGRLinearRing* ring = (OGRLinearRing*)OGRGeometryFactory::createGeometry(wkbLinearRing);\r\nOGRPoint point;\r\n\r\nfor(auto& iter : points)\r\n{\r\n    point.setX(iter.x); point.setY(iter.y);\r\n    ring->addPoint(&point);\r\n}\r\n/// \u5728\u7ec8\u70b9\u540e\u518d\u6dfb\u52a0\u4e00\u6b21\u8d77\u70b9, \u5f62\u6210\u95ed\u73af\r\npoint.setX(points[0].x); point.setY(points[0].y);\r\nring->addPoint(&point);\r\n\r\nring->closeRings();\r\npolygen->addRing(ring);\n"})}),"\n",(0,a.jsx)(r.h3,{id:"\u7531geometry\u751f\u6210shp\u6587\u4ef6",children:"\u7531Geometry\u751f\u6210shp\u6587\u4ef6"}),"\n",(0,a.jsx)(r.p,{children:"\u4ee5\u4e0a\u9762\u7684polygon\u4e3a\u4f8b\uff0c"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-cpp",children:'GDALDriver* shp_driver = GetGDALDriverManager()->GetDriverByName("ESRI Shapefile");\r\nif (shp_driver == nullptr) {\r\n    return message(false, "shp driver is nullptr.");\r\n}\r\n\r\n/// \u65b0\u7248\u7684GDAL \u5df2\u7ecf\u5f03\u7528\u4e86\u65e9\u671f\u7684OGRDataResouce, \u6539\u7528GDALDataset, Create\u8fd9\u79cd\u540c\u4e00\u7684\u51fd\u6570\r\nGDALDataset* ds = shp_driver->Create(shp_file, 0, 0, 0, GDT_Unknown, NULL);\r\nif (ds == nullptr) {\r\n    return message(false, "ds is nullptr.");\r\n}\r\n\r\n/// \u8bbe\u7f6e\u5750\u6807\u7cfb\u7edf\r\nOGRSpatialReference spatialRef;\r\nspatialRef.SetWellKnownGeogCS("WGS84");\r\nOGRLayer* layer = ds->CreateLayer("layer", &spatialRef, wkbPolygon, NULL);\r\nif (layer == nullptr) {\r\n    return message(false, "layer is nullptr.");\r\n}\r\n\r\nOGRFeatureDefn* featureDefn = layer->GetLayerDefn();\r\nOGRFeature* feature = OGRFeature::CreateFeature(featureDefn);\r\nOGRErr err = feature->SetGeometry((OGRGeometry*)polygen);\r\nif (err != OGRERR_NONE) {\r\n    if (err == OGRERR_UNSUPPORTED_GEOMETRY_TYPE) {\r\n        return message(false, "unsupported geometry type.");\r\n    }\r\n    else{\r\n        return message(false, "unknown setGeometry error.");\r\n    }\r\n}\r\n\r\n\r\nif (layer->CreateFeature(feature) != OGRERR_NONE) {\r\n    return message(false, "create feature in shapefile failed.");\r\n}\r\n\r\n\r\nOGRFeature::DestroyFeature(feature);\r\nGDALClose(ds);\n'})}),"\n",(0,a.jsx)(r.h2,{id:"spatial-reference-system",children:"spatial reference system"}),"\n",(0,a.jsx)(r.p,{children:"\u7a7a\u95f4\u53c2\u8003\u5750\u6807\u7cfb\u7edf"}),"\n",(0,a.jsx)(r.p,{children:"\u4f7f\u7528GDAL\u8bfb\u5199\u6570\u636e\u65f6\uff0c\u5f53\u6d89\u53ca\u5230\u5730\u7406\u4fe1\u606f\u65f6\u7ed5\u4e0d\u5f00\u5750\u6807\u7cfb\u7edf\u3002"}),"\n",(0,a.jsx)(r.p,{children:"GDAL\u4e2d\u5e38\u89c1\u7684\u4e24\u79cd\u8bfb\u53d6\u548c\u586b\u5199\u53c2\u8003\u5750\u6807\u7cfb\u7684\u65b9\u5f0f\u6709\u4e24\u79cd\uff0c"}),"\n",(0,a.jsx)(r.p,{children:"\u4e00\u662fprojectionRef\uff0c\u4ee5\u5b57\u7b26\u4e32\u7684\u5f62\u5f0f\u5b58\u50a8\u5750\u6807\u7cfb\u7edf\uff1b"}),"\n",(0,a.jsxs)(r.p,{children:["\u4e8c\u662fspatialRef\uff0c\u662f\u4ee5",(0,a.jsx)(r.code,{children:"OGRSpatialReference"}),"\u7c7b\u7684\u5f62\u5f0f\u5b58\u50a8\u5750\u6807\u7cfb\u7edf\u3002"]}),"\n",(0,a.jsx)(r.p,{children:"\u4e24\u8005\u5f88\u9002\u5408\u642d\u914d\u4f7f\u7528\uff0c\u867d\u7136\u6211\u4e5f\u4e0d\u77e5\u9053\u600e\u4e48\u642d\u914d\uff0c\u4f46\u5b98\u65b9\u6587\u6863\u5982\u662f\u8bf4\uff1a"}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"const char *GetProjectionRef(void) const\r\n...\r\nThe returned string defines the projection coordinate system of the image in OpenGIS WKT format. It should be suitable for use with the OGRSpatialReference class."}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["\u663e\u7136\uff0c",(0,a.jsx)(r.code,{children:"OGRSpatialReference"}),"\u66f4\u4fbf\u4e8e\u7a7a\u95f4\u53c2\u8003\u5750\u6807\u7cfb\u7edf\u7684\u7cbe\u7ec6\u5316\u64cd\u4f5c\u3002"]})]})}function o(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},52741:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/gdal_progress-ea93a08d51de3700ea00b641eed74cff.png"},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>l});var t=n(96540);const a={},s=t.createContext(a);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);