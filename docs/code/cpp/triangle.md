---
title: triangle
custom_edit_url: null
last_update:
    author: li-tann
tags: [Cpp, triangle]
---

# Triangle

:::info

该文档来源于`triangle -h`打印的信息, 以及`triangle.h`的注释。

:::

## triangle.h注释文档

作者建议先看`triangle -h`, 但我认为先把结构体看懂个大概再回去看开关(switch)更合适...

> If you haven't read Triangle's instructions (run "triangle -h" to read them), you won't understand what follows.

编译细节，因为我直接用了vcpkg提供的Triangle包, 所以就不仔细看了...

总而言之：triangle要用makefile编译，其中有一些可以影响switch的宏定义必须要makefile或triangle.c中修改。

> Triangle must be compiled into an object file (triangle.o) with the  TRILIBRARY symbol defined (generally by using the -DTRILIBRARY compiler switch).  The makefile included with Triangle will do this for you if you run "make trilibrary".  The resulting object file can be called via the procedure triangulate().
> 
> If the size of the object file is important to you, you may wish to generate a reduced version of triangle.o. The REDUCED symbol gets rid of all features that are primarily of research interest. Specifically, the -DREDUCED switch eliminates Triangle's -i, -F, -s, and -C switches. The CDT_ONLY symbol gets rid of all meshing algorithms above and beyond constrained Delaunay triangulation.  Specifically, the -DCDT_ONLY switch eliminates Triangle's -r, -q, -a, -u, -D, -Y, -S, and -s switches.
> 
> IMPORTANT:  These definitions (TRILIBRARY, REDUCED, CDT_ONLY) must be made in the makefile or in triangle.c itself.  Putting these definitions in this file (triangle.h) will not create the desired effect.

The calling convention for triangulate() follows.

核心内容就是下面的五行代码。

- `triangulate()`是三角剖分函数；
- `triswitches`是我们要调用的开关；
- `in`, `out`分别是输入与输出的顶点、线段、三角形、邻接三角形等信息；
- `vorout` 是输出的voronoi图信息。

```c
      void triangulate(triswitches, in, out, vorout)                       
      char *triswitches;                                                   
      struct triangulateio *in;                                            
      struct triangulateio *out;                                           
      struct triangulateio *vorout;                                        
```

`triswitches`常用指令的使用建议：

1. 使用`z`可以指定编号从0开始，这很符合C/C++的开发习惯；
2. 使用`Q`可以开启静默模式，不打印额外的信息（除非报错）；
3. 如果不使用`q`(三角形角度限制), `a`(三角形面积限制), `u`(约束三角形尺寸), `D`(严密三角剖分), `j`(丢弃重复点), 和`s`(线段分割)则输出的顶点与输入的顶点相同；
4. 使用`N`可以不输出节点，从而节省内存（如果确实不需要输出节点的话）；
5. 如果确实需要输出节点但又想节约内存，可以在`triangulate`之前令`out->pointlist = in->pointlist`, 这样程序就会把输出的节点覆盖到输入节点。（？）
6. 编译时，如果定义了宏TRILIBRARY，那么`I`(无迭代编号)和`g`(输出.off)两个指令就会失效。

> `triswitches` is a string containing the command line switches you wish to invoke.  No initial dash is required. Some suggestions:
> 
> - You'll probably find it convenient to use the 'z' switch so that points (and other items) are numbered from zero.  This simplifies indexing, because the first item of any type always starts at index [0] of the corresponding array, whether that item's number is zero or one.
> - You'll probably want to use the 'Q' (quiet) switch in your final code, but you can take advantage of Triangle's printed output (including the 'V' switch) while debugging.
> - If you are not using the 'q', 'a', 'u', 'D', 'j', or 's' switches, then the output points will be identical to the input points, except possibly for the boundary markers.  If you don't need the boundary markers, you should use the 'N' (no nodes output) switch to save memory.  (If you do need boundary markers, but need to save memory, a good nasty trick is to set out->pointlist equal to in->pointlist before calling triangulate(), so that Triangle overwrites the input points with identical copies.)
> - The 'I' (no iteration numbers) and 'g' (.off file output) switches have no effect when Triangle is compiled with TRILIBRARY defined.

`in`为输入的点、线、三角形、孔洞、邻接三角形等信息；`out`为输入的点、线、三角形、孔洞、邻接三角形等信息；`vorout`为输出的Voronoi信息。后者可能为空（如果不使用`v`的话），但前两者一定不为空。

执行triangulate前，`in`和`out`结构体的部分信息需要先初始化。

> 'in', 'out', and 'vorout' are descriptions of the input, the output, and the Voronoi output.  If the 'v' (Voronoi output) switch is not used, 'vorout' may be NULL.  'in' and 'out' may never be NULL.
> 
> Certain fields of the input and output structures must be initialized, as described below.

### 结构体说明

The 'triangulateio' structure.

Used to pass data into and out of the triangulate() procedure.

Arrays are used to store points, triangles, markers, and so forth.  In all cases, the first item in any array is stored starting at index [0]. However, that item is item number '1' unless the 'z' switch is used, in which case it is item number '0'.  Hence, you may find it easier to index points (and triangles in the neighbor list) if you use the 'z' switch.  Unless, of course, you're calling Triangle from a Fortran program.

Description of fields (except the 'numberof' fields, which are obvious):

#### pointlist

顶点的坐标数组，REAL类型（大部分代码里REAL就是double），第一个数字为第1个点的x坐标，第二个数字为第一个点的y坐标，以此类推。所以pointlist总长度等于`numberofpoint * 2`, pointlist数组占用内存长度等于`numberofpoint * 2 * sizeof(REAL)`。

> 'pointlist':  An array of point coordinates.  The first point's x coordinate is at index [0] and its y coordinate at index [1], followed by the coordinates of the remaining points.  Each point occupies two REALs.

#### pointattributelist

顶点的属性数组, REAL类型, 每个点都有`numberofpointattributes`个属性。

> 'pointattributelist':  An array of point attributes.  Each point's attributes occupy 'numberofpointattributes' REALs.

#### pointmarkerlist

点标记数组（啥意思？）, 每个点有一个标记, 类型为int？

> 'pointmarkerlist':  An array of point markers; one int per point.

#### trianglelist

三角形数组, int类型, `trianglelist[i*3+0], trianglelist[i*3+1], trianglelist[i*3+2]`表示第`i`个三角形三个顶点的索引值（三个角点沿逆时针旋转）。

如果三角形表示非线性元素，则后面是任何其他节点（？）。

每个三角形占用内存为`numberofcorners * sizeof(int)`。(通常是3*4)

> 'trianglelist':  An array of triangle corners.  The first triangle's first corner is at index [0], followed by its other two corners in counterclockwise order, followed by any other nodes if the triangle represents a nonlinear element.  Each triangle occupies 'numberofcorners' ints.

#### triangleattributelist

三角形的属性数组。每个三角形占用内存长度为`numberoftriangleattributes * sizeof(REAL)`。

> 'triangleattributelist':  An array of triangle attributes. Each triangle's attributes occupy 'numberoftriangleattributes' REALs.
  
#### trianglearealist

三角形的约束面积，每个三角形对应一个`REAL`, 仅在输入时使用。

> 'trianglearealist':  An array of triangle area constraints; one REAL per triangle.  Input only.
  
#### neighborlist

邻接三角形数组，每一个三角形都有三个邻接三角形，对应三个int， 记录三个三角形的索引值（如果没有邻接三角形则该处索引值为-1）。

> 'neighborlist':  An array of triangle neighbors; three ints per triangle. Output only.

#### segmentlist

线段的端点数组，每一个线段都有两个端点，对应两个int，记录两个端点的索引值。

> 'segmentlist':  An array of segment endpoints.  The first segment's endpoints are at indices [0] and [1], followed by the remaining segments.  Two ints per segment.

#### segmentmarkerlist

线段标记数组，每个线段对应一个int。

> 'segmentmarkerlist':  An array of segment markers; one int per segment.  

#### holelist

孔洞数组，`holelist[0], holelist[1]`代表第一个孔洞的第一个点的x和y坐标，剩下的数组是该空洞的其他点（遇到第0点应该就说明第一个孔洞已经成环结束？）。

每个点占用两个`REAL`, 仅限输入, 它的指针会被复制到输出结构体中。

> 'holelist':  An array of holes.  The first hole's x and y coordinates are at indices [0] and [1], followed by the remaining holes.  Two REALs per hole.  Input only, although the pointer is copied to the output structure for your convenience.

#### regionlist

属性与面积约束的数组，`regionlist[0], regionlist[1], regionlist[2], regionlist[3]`分别表示第一个约束的x坐标、y坐标、区域属性(regional attribute)、以及最大面积( maximum area)。每个约束占用四个REAL。

其中，区域属性约束仅在使用`A`时才奏效、区域的面积约束仅在使用`A`并且**没有跟随数字**时才奏效。仅限输入，并且指针被复制到输出的结构体中。

> 'regionlist':  An array of regional attributes and area constraints. The first constraint's x and y coordinates are at indices [0] and [1], followed by the regional attribute at index [2], followed by the maximum area at index [3], followed by the remaining area constraints. Four REALs per area constraint.  Note that each regional attribute is used only if you select the 'A' switch, and each area constraint is used only if you select the 'a' switch (with no number following), but omitting one of these switches does not change the memory layout. Input only, although the pointer is copied to the output structure for your convenience.

#### edgelist

边缘端点的数组。`edgelist[0], edgelist[1]`代表第一条边的两个端点索引，后面是其余边的。每条边占用两个int，仅输出。

> 'edgelist':  An array of edge endpoints.  The first edge's endpoints are at indices [0] and [1], followed by the remaining edges.  Two ints per edge.  Output only.

#### edgemarkerlist

> 'edgemarkerlist':  An array of edge markers; one int per edge.  Output only.

#### normlist

法向量数组，用于Voronoi图的射线(infinite rays)。`normlist[0], normlist[1]`代表第一个法向量的x，y幅度(magnitude)，后面是其余法向量。对于Voronoi图中的每个有限边，所写的法向量是零向量（没太搞懂）。每边两个REAL。仅输出。

> 'normlist':  An array of normal vectors, used for infinite rays in Voronoi diagrams.  The first normal vector's x and y magnitudes are at indices [0] and [1], followed by the remaining vectors.  For each finite edge in a Voronoi diagram, the normal vector written is the zero vector.  Two REALs per edge.  Output only.

#### 内存分配与释放

所有程序需要使用的输入输出项都必须初始化。对于需要使用的数组，需要为其分配空间(`malloc`, `new`也许也可以), 或将指针初始化为`NULL`，程序为结果分配空间（out内的数组设置为`NULL`）。并且更建议使用后者，因为程序可以为各个数组分配正确的空间长度。前者主要是为Fortran提供的。

Triangle不会释放（`free()`）任何输入或输出数组，即使是程序自己分配的空间，同样也需要手动释放内存。

程序提供了`trifree()`函数来释放Triangle分配的数组。默认情况下，`trifree()`只调用标准库中的`free()`，但调用`trianglate()`的应用程序可以替换triangle.c中的`trimalloc()`和`trifree()`来使用特定的内存分配器(memory allocators)。

> Any input fields that Triangle will examine must be initialized. Furthermore, for each output array that Triangle will write to, you must either provide space by setting the appropriate pointer to pointto the space you want the data written to, or you must initialize the pointer to NULL, which tells Triangle to allocate space for the results. The latter option is preferable, because Triangle always knows exactly how much space to allocate.  The former option is provided mainly for people who need to call Triangle from Fortran code, though it also makes possible some nasty space-saving tricks, like writing the output to the same arrays as the input.
>
> Triangle will not free() any input or output arrays, including those it allocates itself; that's up to you.  You should free arrays allocated by Triangle by calling the trifree() procedure defined below.  (By default, trifree() just calls the standard free() library procedure, but applications that call triangulate() may replace trimalloc() and trifree() in triangle.c to use specialized memory allocators.)

### 结构体初始化

Here's a guide to help you decide which fields you must initialize before you call triangulate().

#### in

- 'pointlist' must always point to a list of points; 'numberofpoints' and 'numberofpointattributes' must be properly set.
'pointmarkerlist' must either be set to NULL (in which case all markers default to zero), or must point to a list of markers.  If 'numberofpointattributes' is not zero, 'pointattributelist' must point to a list of point attributes.
- If the 'r' switch is used, 'trianglelist' must point to a list of triangles, and 'numberoftriangles', 'numberofcorners', and 'numberoftriangleattributes' must be properly set.  If 'numberoftriangleattributes' is not zero, 'triangleattributelist' must point to a list of triangle attributes.  If the 'a' switch is used (with no number following), 'trianglearealist' must point to a list of triangle area constraints.  'neighborlist' may be ignored.
- If the 'p' switch is used, 'segmentlist' must point to a list of segments, 'numberofsegments' must be properly set, and 'segmentmarkerlist' must either be set to NULL (in which case all markers default to zero), or must point to a list of markers.
- If the 'p' switch is used without the 'r' switch, then 'numberofholes' and 'numberofregions' must be properly set.  If 'numberofholes' is not zero, 'holelist' must point to a list of holes.  If 'numberofregions' is not zero, 'regionlist' must point to a list of region constraints.
- If the 'p' switch is used, 'holelist', 'numberofholes', 'regionlist', and 'numberofregions' is copied to 'out'.  (You can nonetheless get away with not initializing them if the 'r' switch is used.)
- 'edgelist', 'edgemarkerlist', 'normlist', and 'numberofedges' may be ignored.

#### out

- 'pointlist' must be initialized (NULL or pointing to memory) unless the 'N' switch is used.  'pointmarkerlist' must be initialized unless the 'N' or 'B' switch is used.  If 'N' is not used and 'in->numberofpointattributes' is not zero, 'pointattributelist' must be initialized.
- 'trianglelist' must be initialized unless the 'E' switch is used.'neighborlist' must be initialized if the 'n' switch is used.  If the 'E' switch is not used and ('in->numberofelementattributes' is not zero or the 'A' switch is used), 'elementattributelist' must be initialized.  'trianglearealist' may be ignored.
- 'segmentlist' must be initialized if the 'p' or 'c' switch is used, and the 'P' switch is not used.  'segmentmarkerlist' must also be initialized under these circumstances unless the 'B' switch is used.
- 'edgelist' must be initialized if the 'e' switch is used. 'edgemarkerlist' must be initialized if the 'e' switch is used and the 'B' switch is not.
- 'holelist', 'regionlist', 'normlist', and all scalars may be ignored.

#### vorout

(only needed if 'v' switch is used)

- 'pointlist' must be initialized.  If 'in->numberofpointattributes' is not zero, 'pointattributelist' must be initialized. 'pointmarkerlist' may be ignored.
- 'edgelist' and 'normlist' must both be initialized. 'edgemarkerlist' may be ignored.
- Everything else may be ignored.

  After a call to triangulate(), the valid fields of 'out' and 'vorout'will depend, in an obvious way, on the choice of switches used.  Note that when the 'p' switch is used, the pointers 'holelist' and 'regionlist' are copied from 'in' to 'out', but no new space is allocated; be careful that you don't free() the same array twice.  On the other hand, Triangle will never copy the 'pointlist' pointer (or any others); new space is allocated for 'out->pointlist', or if the 'N' switch is used, 'out->pointlist' remains uninitialized.

All of the meaningful 'numberof' fields will be properly set; for instance, 'numberofedges' will represent the number of edges in the triangulation whether or not the edges were written.  If segments are not used, 'numberofsegments' will indicate the number of boundary edges.

## triangle -h

A Two-Dimensional Quality Mesh Generator and Delaunay Triangulator.Version 1.6

### 版权说明

Copyright 1993, 1995, 1997, 1998, 2002, 2005 Jonathan Richard Shewchuk 2360 Woolsey #H / Berkeley, California 94705-1927 Bugs/comments to jrs@cs.berkeley.edu

Created as part of the Quake project (tools for earthquake simulation). Supported in part by NSF Grant CMS-9318163 and an NSERC 1967 Scholarship. There is no warranty whatsoever.  Use at your own risk. This executable is compiled for double precision arithmetic.

### 功能介绍

Triangle可以生成精确Delaunay三角剖分(exact Delaunay triangulations), 约束Delaunay三角剖分(constrained Delaunay triangulations), 一致Delaunay三角剖分(conforming Delaunay triangulations), Voronoi图(Voronoi diagrams), 以及高质量的三角形网格(high-quality triangular meshes)。

> Triangle generates exact Delaunay triangulations, constrained Delaunay triangulations, conforming Delaunay triangulations, Voronoi diagrams, and high-quality triangular meshes.  

高质量的三角形网格(The latter)中不存在过大或过小的角, 所以适合有限元分析(finite element analysis)。

> The latter can be generated with no small or large angles, and are thus suitable for finite element analysis.  If no
command line switch is specified, your .node input file is read, and the Delaunay triangulation is returned in .node and .ele output files.  

:::tip[triangle语法]

`triangle [-prq__a__uAcDjevngBPNEIOXzo_YS__iFlsCQVh] input_file`

:::

输入文件(input_file)必须是后缀为`.node`的文件, 除非打开`-p`开关时使用后缀为`.poly`的文件。如果使用了`-r`就必须输入`.node`和`.ele`文件, 此外可能还需要提供`.poly`和`.area`文件。

下划线表示它前面的参数/开关(switch)之后可以选择性的输入数字。__而不是指代空格__。

> Underscores indicate that numbers may optionally follow certain switches. Do not leave any space between a switch and its numeric parameter.
>
> input_file must be a file with extension .node, or extension .poly if the -p switch is used.  If -r is used, you must supply .node and .ele files, and possibly a .poly file and an .area file as well.  

### 参数说明

The formats of these files are described below.

#### 指令简述

|指令|说明|
|:---:|:---:|
|-p|输入顶点时, 使用-p可以生成.|

Command Line Switches:

#### -p 读取poly文件

读取平面直线图(Planar Straight Line Graph, PSLG, *.poly file), 生成一个**受约束的Delaunay三角剖分(constrained Delaunay triangulation, CDT)**。如果使用了`-s`、 `-q`、 `-a`、或`-u`，则会生成一个**一致约束Delaunay三角剖分(conforming constrained Delaunay triangulation, CCDT)**。如果想要生成一个**真正的Delaunay三角剖分(exact Delaunay triangulation, EDT)**，而不是受约束的，则需要使用`-D`。当不使用`-p`时, Triangle会默认读取`.node`文件。

`.poly`文件可以对顶点(vertices)、线段(segments)、孔(holes)、区域属性(regional attributes)和区域(regional area)施加约束。

> Reads a Planar Straight Line Graph (.poly file), which can specify vertices, segments, holes, regional attributes, and regional area constraints.  Generates a constrained Delaunay triangulation (CDT) fitting the input; or, if -s, -q, -a, or -u is used, a conforming constrained Delaunay triangulation (CCDT).  If you want a truly Delaunay (not just constrained Delaunay) triangulation, use -D as well.  When -p is not used, Triangle reads a .node file by default.

#### -r 优化预输入网格

优化从`.node`和`.ele`文件中读取的网格。如果同时使用了`-p`, `.poly`文件也会被读取并用于约束网格中的线段(segments)；如果`-a`也被使用并且没有跟随数字, 则`.area`文件会被读取并对网格施加面积约束。（详见`-a`?）

> Refines a previously generated mesh.  The mesh is read from a .node file and an .ele file.  If -p is also used, a .poly file is read and used to constrain segments in the mesh.  If -a is also used (with no number following), an .area file is read and used to impose area constraints on the mesh.  Further details on refinement appear below.

#### -q 提升网格质量

基于`Paul Chew`和`Jim Ruppert`的混合算法, 通过Delaunay精化生成高质量的网格。通过在网格中增加端点(vertices)来保证所有的角都在20~140度之间。在`-q`之后可以制定一个数字来表示允许的最小角度$\theta$(允许使用小数但不允许指数写法(exponential notation)), 并且最大角度$\phi$与最小角度$\theta$的关系满足，$\phi = 180^{\circ} - 2 \theta$。

> Quality mesh generation by Delaunay refinement (a hybrid of Paul Chew's and Jim Ruppert's algorithms).  Adds vertices to the mesh to ensure that all angles are between 20 and 140 degrees.  An alternative bound on the minimum angle, replacing 20 degrees, may be specified after the 'q'.  The specified angle may include a decimal point, but not exponential notation.  Note that a bound of theta degrees on the smallest angle also implies a bound of (180 - 2 theta) on the largest angle.  If the minimum angle is 28.6 degrees or smaller, Triangle is mathematically guaranteed to terminate (assuming infinite precision arithmetic--Triangle may fail to terminate if you run out of precision).  In practice, Triangle often succeeds for minimum angles up to 34 degrees.  For some meshes, however, you might need to reduce the minimum angle to avoid problems associated with insufficient floating-point precision.

#### -a 限制最大面积

如果`-a`后面带有数字, 则三角形的面积不会超过它; 如果没有指定数字, 则.rearea文件（如果使用`-r`）或.ply文件（如果不使用`-r`）将指定一组最大面积约束。`.area`文件包含每个三角形单独的面积约束，对"基于后验误差估计(posteriori error estimates)的有限元网格(finite element mesh)精度提升"有帮助。`.poly`文件可以约束所有线段相关区域(segment-bounded region)的面积，所以在三角剖分时使用平面直线图可以控制生成三角形密度。

此外，还可以两次调用`-a`开关来施加固定面积约束和可变面积约束，一次后面有数字，一次不带数字。(没看懂)

> Imposes a maximum triangle area.  If a number follows the 'a', no triangle is generated whose area is larger than that number.  If no number is specified, an .area file (if -r is used) or .poly file (if -r is not used) specifies a set of maximum area constraints. An .area file contains a separate area constraint for each triangle, and is useful for refining a finite element mesh based on a posteriori error estimates.  A .poly file can optionally contain an area constraint for each segment-bounded region, thereby controlling triangle densities in a first triangulation of a PSLG. You can impose both a fixed area constraint and a varying area constraint by invoking the -a switch twice, once with and once without a number following. Each area specified may include a decimal point.

#### -u 约束三角形尺寸

对三角形尺寸施加一个用户定义(user-defined)的约束。有两种使用方法：一是修改(edit)`triangle.c`代码文件中`triunsuitable()`函数，来添加想要的约束（需要重新编译Triangle）。二是使用符号集(symbol set)`EXTERNAL_TEST`编译`triangle.c`（编译指令`compiler switch -DEXTERNAL_TEST`），然后将triangle与实现triunsuitable()的单独对象文件链接。

（说实话，两种方法都没太搞明白是啥意思，应该怎么实现）

> Imposes a user-defined constraint on triangle size.  There are two ways to use this feature.  One is to edit the triunsuitable() procedure in triangle.c to encode any constraint you like, then recompile Triangle.  The other is to compile triangle.c with the EXTERNAL_TEST symbol set (compiler switch -DEXTERNAL_TEST), then link Triangle with a separate object file that implements triunsuitable(). In either case, the -u switch causes the user-defined test to be applied to every triangle.

#### -A 浮点属性

为每个三角形附加一个浮点属性，以标识每个三角形所属的分段边界区域(segment-bounded region)。属性由`.poly`文件提供, 如果一个区域(region)在.poly文件宏没有被标记（是否有属性）时，该区域的所有三角形的属性数值为0。`-A`只有在使用了`-p`且不使用`-r`时才会有效。

> Assigns an additional floating-point attribute to each triangle that identifies what segment-bounded region each triangle belongs to. Attributes are assigned to regions by the .poly file.  If a region is not explicitly marked by the .poly file, triangles in that region are assigned an attribute of zero.  The -A switch has an effect only when the -p switch is used and the -r switch is not.

#### -c 凸包线段

在三角剖分的凸包(convex hull)上创建线段。意思应该是可以连接边界点形成线段，作为三角形的一条边。

如果对顶点集(vertex set)进行三角剖分，那么-c会使程序输出一个`.poly`文件。如果对平面直线图(PSLG)进行三角剖分(也就是说输入了一个.poly文件), `-c`会对PSLG的整个凸包进行三角剖分，无论PSLG有哪些段。如果在对PSLG进行三角剖分时不使用`-c`，程序会假设已经通过用输入PSLG的片段包围它来识别要三角剖分的区域。（最后一句话没看懂...）

需要注意的是，`-c`可能会导致PSLG段和凸包段之间出现**极薄的角度**，这可能会导致超限（如果三角精度不足，可能会失败）。

当你正在细化(refining)网格时, `-c`可以会使程序输出一个.poly文件, 文件内包含了网格边界边(boundary edges of the mesh)。（如果没有输入.poly文件的话, 它非常实用）

> Creates segments on the convex hull of the triangulation.  If you are triangulating a vertex set, this switch causes a .poly file to be written, containing all edges of the convex hull.  If you are triangulating a PSLG, this switch specifies that the whole convex hull of the PSLG should be triangulated, regardless of what segments the PSLG has.  If you do not use this switch when triangulating a PSLG, Triangle assumes that you have identified the region to be triangulated by surrounding it with segments of the input PSLG.  Beware:  if you are not careful, this switch can cause the introduction of an extremely thin angle between a PSLG segment and a convex hull segment, which can cause overrefinement (and possibly failure if Triangle runs out of precision).  If you are refining a mesh, the -c switch works differently:  it causes a .poly file to be written containing the boundary edges of the mesh (useful if no .poly file was read).

#### -D 严密三角剖分

严密Delaunay三角剖分。使用`-D`可以保证所有三角形都符合Delaunay，而不仅仅是受约束的Delaunay(constrained Delaunay)；又或是保证所有的Voronoi顶点(Voronoi vertices)都在三角型内部。

该算法来自于`Ruppert's original algorithm`, 该算法会分割（重构？）那些直径圆(diametral circle)被侵占(encroached)的子线段(subsegment)，这会增加顶点和三角形的数量。

> Conforming Delaunay triangulation:  use this switch if you want to ensure that all the triangles in the mesh are Delaunay, and not merely constrained Delaunay; or if you want to ensure that all the Voronoi vertices lie within the triangulation.  (Some finite volume methods have this requirement.)  This switch invokes Ruppert's original algorithm, which splits every subsegment whose diametral circle is encroached.  It usually increases the number of vertices and triangles.

#### -j 丢弃点

将output.node文件中不属于任何三角剖分的顶点丢弃。

默认情况下，Triangle会以相同的顺序将输入的顶点文件(input .node file)复制到输出的顶点文件(output .node file)中，不改变输出的顶点文件中点的索引顺序。`-j`可防止重复的输入顶点或被孔“吃掉”的顶点出现在output.node文件中。如果输入顶点文件中存在两个或更多具有完全相同的坐标，则只有第一个顶点出现在输出中。如果丢弃了任何顶点，则输出.node文件中的顶点编号与输入.node文件的顶点编号不同。

> Jettisons vertices that are not part of the final triangulation from the output .node file.  By default, Triangle copies all vertices in the input .node file to the output .node file, in the same order, so their indices do not change.  The -j switch prevents duplicated input vertices, or vertices 'eaten' by holes, from appearing in the output .node file.  Thus, if two input vertices have exactly the same coordinates, only the first appears in the output.  If any vertices are jettisoned, the vertex numbering in the output .node file differs from that of the input .node file.

#### -e 输出.edge

输出triangle的所有边信息。（记录每条边两个端点的索引值）

> Outputs (to an .edge file) a list of edges of the triangulation.

#### -v 输出Voronoi图

输出与三角剖分结果对应的Voronoi图。因为不尝试检测退化(detect degeneracies), 所以一部分Voronoi顶点会重复。 请参阅下面对Voronoi图的讨论。

> Outputs the Voronoi diagram associated with the triangulation. Does not attempt to detect degeneracies, so some Voronoi vertices may be duplicated.  See the discussion of Voronoi diagrams below.

#### -n 输出.neigh

输出所有三角形的相邻三角形信息。（记录相邻三角形的索引值）

> Outputs (to a .neigh file) a list of triangles neighboring each triangle.

#### -g 输出.off

以对象文件类型(Object File Format, .off)输出网格，便于使用Geomview package查看。

> Outputs the mesh to an Object File Format (.off) file, suitable for viewing with the Geometry Center's Geomview package.

#### -B 不输出边界标记

输出的`.node`、`.poly`和.`edge`文件中没有边界标记。请参阅下面对边界标记的详细讨论。

> No boundary markers in the output .node, .poly, and .edge output files.  See the detailed discussion of boundary markers below.

#### -P 不输出.poly

不输出.poly文件。节省磁盘空间，但在以后对网格进行细化时，您将失去保持约束段的能力。

> No output .poly file.  Saves disk space, but you lose the ability to maintain constraining segments on later refinements of the mesh.

#### -N 不输出.node

> No output .node file.

#### -E 不输出.ele

> No output .ele file.

#### -I 无迭代数

抑制`.node`和`.poly`文件的输出，以保证输入文件不会被覆盖。但如果仅输入了`.poly`文件，那么`.node`还是会输出。

不能与`-r`一同使用，因为这会使输入的`.ele`文件被覆盖。

如果输入了`.node`文件，那么就不应该搭配`-a`, `-u`, 或`-s`使用, 因为没有输出新的`.node`文件，这会导致新添加的Steiner points不会被记录和输出。

> No iteration numbers.  Suppresses the output of .node and .poly files, so your input files won't be overwritten.  (If your input is a .poly file only, a .node file is written.)  Cannot be used with the -r switch, because that would overwrite your input .ele file. Shouldn't be used with the -q, -a, -u, or -s switch if you are using a .node file for input, because no .node file is written, so there is no record of any added Steiner points.

#### -O 无孔洞

忽略`.poly`文件中的所有孔洞。

> No holes.  Ignores the holes in the .poly file.

#### -X 降低精度

当Triangle会使用浮点值计算以保证测试精度。精确的算法也保证了三角剖分算法的鲁棒性(robustness)。使用`-X`可以禁用精确算法, 这会使处理速度略微提升, 但也会导致无法生成有效的网络。所以不推荐使用。

> No exact arithmetic.  Normally, Triangle uses exact floating-point arithmetic for certain tests if it thinks the inexact tests are not accurate enough.  Exact arithmetic ensures the robustness of the triangulation algorithms, despite floating-point roundoff error. Disabling exact arithmetic with the -X switch causes a small improvement in speed and creates the possibility that Triangle will fail to produce a valid mesh.  Not recommended.

#### -z 从0编号

从0开始编号, 如果不使用`-z`就是从1开始编号。

> Numbers all items starting from zero (rather than one).  Note that this switch is normally overridden by the value used to number the first vertex of the input .node or .poly file.  However, this switch is useful when calling Triangle from another program.

#### -o2

生成二阶子参数元素，每个元素有六个节点。（不理解。）

> Generates second-order subparametric elements with six nodes each.

#### -Y 边界不生成新顶点

边界不生成新的顶点。当我们必须保留网格边界以符合某些相邻网格时，-Y非常有用。但是这很可能会降低网格的质量，生成的三角网中可能包含形状非常差的三角形，但如果边界定点间隔很近那么可能不会有很大影响。

使用`-YY`可以防止所有分段拆分，包括内部边界。

> No new vertices on the boundary.  This switch is useful when the mesh boundary must be preserved so that it conforms to some adjacent mesh.  Be forewarned that you will probably sacrifice much of the quality of the mesh; Triangle will try, but the resulting mesh may contain poorly shaped triangles.  Works well if all the boundary vertices are closely spaced.  Specify this switch twice ('-YY') to prevent all segment splitting, including internal boundaries.

#### -S Steiner点数量

指定Steiner点的最大数量。

Steiner点指：非输入的，但是满足了最小角度和最大面积约束后被添加进来的顶点(vertices)

默认情况下是不会限制Steiner点数量的，但如果使用了`-S`并且后面没有跟数字，那么Steiner点数量就会被限制为0。Triangle程序总是会在线段相交处添加顶点，即使超过了数量限制。

当Triangle通过[-s指令](#-s)插入线段时，它总是添加足够的顶点以确保PLSG（平面直线图）的所有分段都被恢复，必要时忽略限制。

> Specifies the maximum number of Steiner points (vertices that are not in the input, but are added to meet the constraints on minimum angle and maximum area).  The default is to allow an unlimited number.  If you specify this switch with no number after it, the limit is set to zero.  Triangle always adds vertices at segment intersections, even if it needs to use more vertices than the limit you set.  When Triangle inserts segments by splitting (-s), it always adds enough vertices to ensure that all the segments of the PLSG are recovered, ignoring the limit if necessary.

#### -i 增量算法

使用增量算法(incremental)而不是分而治之算法(divide-and-conquer algorithm)来构建Delaunay三角剖分。如果分而治之算法失败，请尝试一下。

> Uses an incremental rather than a divide-and-conquer algorithm to construct a Delaunay triangulation.  Try it if the divide-and- conquer algorithm fails.

#### -F sweepline算法

使用Steven Fortune的sweepline算法构建Delaunay三角剖分。警告：并非所有计算都使用精确算术。无法保证准确的结果。

> Uses Steven Fortune's sweepline algorithm to construct a Delaunay triangulation.  Warning:  does not use exact arithmetic for all calculations.  An exact result is not guaranteed.

#### -l 垂直切割

在分而治之算法(divide-and-conquer)中仅使用垂直切割(vertical cuts)。默认情况下，三角形在垂直和水平剪切之间交替，这通常会提高速度，除非顶点集较小或较短且较宽。这种转变主要是理论上的。

> Uses only vertical cuts in the divide-and-conquer algorithm.  By default, Triangle alternates between vertical and horizontal cuts, which usually improve the speed except with vertex sets that are small or short and wide.  This switch is primarily of theoretical interest.

#### -s 分段分割

指定：通过在线段的中点递归分割线段，而不是生成受约束的Delaunay三角剖分，对线段强制应用于三角剖分。

分段分割符合Ruppert的原始算法，但可能会创建不必要的小三角形。这种转变主要是理论上的。

> Specifies that segments should be forced into the triangulation by recursively splitting them at their midpoints, rather than by generating a constrained Delaunay triangulation.  Segment splitting is true to Ruppert's original algorithm, but can create needlessly small triangles.  This switch is primarily of theoretical interest.

#### -C 网格一致性

检查最终网格的一致性。使用精确的算术进行检查，即使使用了`-X`降低算法精度也不会影像网格一致性检查的精度。

> Check the consistency of the final mesh.  Uses exact arithmetic for checking, even if the -X switch is used.  Useful if you suspect Triangle is buggy.

#### -Q 静默模式

不打印任何中间信息，除非报错。

> Quiet: Suppresses all explanation of what Triangle is doing, unless an error occurs.

#### -V 详情

打印Triangle执行过程的详细信息。使用`-V`可以打印算法进展的信息和更详细的统计数据；使用`-VV`可以打印逐顶点的细节，但打印过多信息也会降低软件运行速度；`-VVVV`提供了调试人员所需的信息。

> Verbose:  Gives detailed information about what Triangle is doing. Add more V's for increasing amount of detail.  -V is most useful; itgives information on algorithmic progress and much more detailed statistics.  -VV gives vertex-by-vertex details, and prints so much that Triangle runs much more slowly.  -VVVV gives information only a debugger could love.

### 定义

:::warning

以后有空再慢慢翻译吧...

:::

Definitions:

  A Delaunay triangulation of a vertex set is a triangulation whose vertices are the vertex set, that covers the convex hull of the vertex set.  A Delaunay triangulation has the property that no vertex lies inside the circumscribing circle (circle that passes through all three vertices) of any triangle in the triangulation.

  A Voronoi diagram of a vertex set is a subdivision of the plane into polygonal cells (some of which may be unbounded, meaning infinitely large), where each cell is the set of points in the plane that are closer to some input vertex than to any other input vertex.  The Voronoi diagram is a geometric dual of the Delaunay triangulation.

  A Planar Straight Line Graph (PSLG) is a set of vertices and segments. Segments are simply edges, whose endpoints are all vertices in the PSLG. Segments may intersect each other only at their endpoints.  The file format for PSLGs (.poly files) is described below.

  A constrained Delaunay triangulation (CDT) of a PSLG is similar to a Delaunay triangulation, but each PSLG segment is present as a single edge of the CDT.  (A constrained Delaunay triangulation is not truly a Delaunay triangulation, because some of its triangles might not be Delaunay.)  By definition, a CDT does not have any vertices other than those specified in the input PSLG.  Depending on context, a CDT might cover the convex hull of the PSLG, or it might cover only a segment-bounded region (e.g. a polygon).

  A conforming Delaunay triangulation of a PSLG is a triangulation in which each triangle is truly Delaunay, and each PSLG segment is represented by a linear contiguous sequence of edges of the triangulation.  New vertices (not part of the PSLG) may appear, and each input segment may have been subdivided into shorter edges (subsegments) by these additional vertices. The new vertices are frequently necessary to maintain the Delaunay property while ensuring that every segment is represented.

  A conforming constrained Delaunay triangulation (CCDT) of a PSLG is a triangulation of a PSLG whose triangles are constrained Delaunay.  New vertices may appear, and input segments may be subdivided into subsegments, but not to guarantee that segments are respected; rather, to improve the quality of the triangles.  The high-quality meshes produced by the -q switch are usually CCDTs, but can be made conforming Delaunay with the -D switch.

### 文件类型

:::warning
软件开发不涉及文件格式说明, 所以就不再细看了
:::

File Formats:

#### 通用格式说明

所有文件都可以使用`#`符号作为注释标识。

顶点(vertices)、三角形(triangle)、边(edge)、孔(hole)、最大面积约束(maximum area constraints)，这些文件内的信息都必须保证索引号码连续, 编号从0或1开始, 并且所有文件应使用同一个标准。

> All files may contain comments prefixed by the character '#'.  Vertices, triangles, edges, holes, and maximum area constraints must be numbered consecutively, starting from either 1 or 0.  Whichever you choose, all input files must be consistent; if the vertices are numbered from 1, so must be all other objects.  Triangle automatically detects your choice while reading the .node (or .poly) file.  (When calling Triangle from another program, use the -z switch if you wish to number objects from zero.)  Examples of these file formats are given below.

#### 文件说明

```shell
  .node files:
    First line:  <# of vertices> <dimension (must be 2)> <# of attributes> <# of boundary markers (0 or 1)>
    Remaining lines:  <vertex #> <x> <y> [attributes] [boundary marker]
```

  The attributes, which are typically floating-point values of physical quantities (such as mass or conductivity) associated with the nodes of a finite element mesh, are copied unchanged to the output mesh.  If -q, -a, -u, -D, or -s is selected, each new Steiner point added to the mesh has attributes assigned to it by linear interpolation.

  If the fourth entry of the first line is '1', the last column of the remainder of the file is assumed to contain boundary markers.  Boundary markers are used to identify boundary vertices and vertices resting on PSLG segments; a complete description appears in a section below.  The .node file produced by Triangle contains boundary markers in the last column unless they are suppressed by the -B switch.

``` shell
  .ele files:
    First line:  <# of triangles> <nodes per triangle> <# of attributes>
    Remaining lines:  <triangle #> <node> <node> <node> ... [attributes]
```

  Nodes are indices into the corresponding .node file.  The first three nodes are the corner vertices, and are listed in counterclockwise order around each triangle.  (The remaining nodes, if any, depend on the type of finite element used.)

  The attributes are just like those of .node files.  Because there is no simple mapping from input to output triangles, Triangle attempts to interpolate attributes, and may cause a lot of diffusion of attributes among nearby triangles as the triangulation is refined.  Attributes do not diffuse across segments, so attributes used to identify segment-bounded regions remain intact.

  In .ele files produced by Triangle, each triangular element has three nodes (vertices) unless the -o2 switch is used, in which case subparametric quadratic elements with six nodes each are generated. The first three nodes are the corners in counterclockwise order, and the fourth, fifth, and sixth nodes lie on the midpoints of the edges opposite the first, second, and third vertices, respectively.

```shell
  .poly files:
    First line:  <# of vertices> <dimension (must be 2)> <# of attributes> <# of boundary markers (0 or 1)>
    Following lines:  <vertex #> <x> <y> [attributes] [boundary marker]
    One line:  <# of segments> <# of boundary markers (0 or 1)>
    Following lines:  <segment #> <endpoint> <endpoint> [boundary marker]
    One line:  <# of holes>
    Following lines:  <hole #> <x> <y>
    Optional line:  <# of regional attributes and/or area constraints>
    Optional following lines:  <region #> <x> <y> <attribute> <max area>
```

  A .poly file represents a PSLG, as well as some additional information. The first section lists all the vertices, and is identical to the format of .node files.  `<# of vertices>` may be set to zero to indicate that the vertices are listed in a separate .node file; .poly files produced by Triangle always have this format.  A vertex set represented this way has the advantage that it may easily be triangulated with or without segments (depending on whether the -p switch is invoked).

  The second section lists the segments.  Segments are edges whose presence in the triangulation is enforced.  (Depending on the choice of switches, segment might be subdivided into smaller edges).  Each segment is specified by listing the indices of its two endpoints.  This means that you must include its endpoints in the vertex list.  Each segment, like each point, may have a boundary marker.

  If -q, -a, -u, and -s are not selected, Triangle produces a constrained Delaunay triangulation (CDT), in which each segment appears as a single edge in the triangulation.  If -q, -a, -u, or -s is selected, Triangle produces a conforming constrained Delaunay triangulation (CCDT), in which segments may be subdivided into smaller edges.  If -D is selected, Triangle produces a conforming Delaunay triangulation, so that every triangle is Delaunay, and not just constrained Delaunay.

  The third section lists holes (and concavities, if -c is selected) in the triangulation.  Holes are specified by identifying a point inside each hole.  After the triangulation is formed, Triangle creates holes by eating triangles, spreading out from each hole point until its progress is blocked by segments in the PSLG.  You must be careful to enclose each hole in segments, or your whole triangulation might be eaten away.  If the two triangles abutting a segment are eaten, the segment itself is also eaten.  Do not place a hole directly on a segment; if you do, Triangle chooses one side of the segment arbitrarily.

  The optional fourth section lists regional attributes (to be assigned to all triangles in a region) and regional constraints on the maximum triangle area.  Triangle reads this section only if the -A switch is used or the -a switch is used without a number following it, and the -r switch is not used.  Regional attributes and area constraints are propagated in the same manner as holes:  you specify a point for each attribute and/or constraint, and the attribute and/or constraint affects the whole region (bounded by segments) containing the point. If two values are written on a line after the x and y coordinate, the first such value is assumed to be a regional attribute (but is only applied if the -A switch is selected), and the second value is assumed to be a regional area constraint (but is only applied if the -a switch is selected).  You may specify just one value after the coordinates, which can serve as both an attribute and an area constraint, depending on the choice of switches.  If you are using the -A and -a switches simultaneously and wish to assign an attribute to some region without imposing an area constraint, use a negative maximum area.

  When a triangulation is created from a .poly file, you must either enclose the entire region to be triangulated in PSLG segments, or use the -c switch, which automatically creates extra segments that enclose the convex hull of the PSLG.  If you do not use the -c switch, Triangle eats all triangles that are not enclosed by segments; if you are not careful, your whole triangulation may be eaten away.  If you do use the -c switch, you can still produce concavities by the appropriate placement of holes just inside the boundary of the convex hull.

  An ideal PSLG has no intersecting segments, nor any vertices that lie upon segments (except, of course, the endpoints of each segment).  You aren't required to make your .poly files ideal, but you should be aware of what can go wrong.  Segment intersections are relatively safe-- Triangle calculates the intersection points for you and adds them to the triangulation--as long as your machine's floating-point precision doesn't become a problem.  You are tempting the fates if you have three segments that cross at the same location, and expect Triangle to figure out where the intersection point is.  Thanks to floating-point roundoff error, Triangle will probably decide that the three segments intersect at three different points, and you will find a minuscule triangle in your output--unless Triangle tries to refine the tiny triangle, uses up the last bit of machine precision, and fails to terminate at all. You're better off putting the intersection point in the input files, and manually breaking up each segment into two.  Similarly, if you place a vertex at the middle of a segment, and hope that Triangle will break up the segment at that vertex, you might get lucky.  On the other hand, Triangle might decide that the vertex doesn't lie precisely on the segment, and you'll have a needle-sharp triangle in your output--or a lot of tiny triangles if you're generating a quality mesh.

  When Triangle reads a .poly file, it also writes a .poly file, which includes all the subsegments--the edges that are parts of input segments.  If the -c switch is used, the output .poly file also includes all of the edges on the convex hull.  Hence, the output .poly file is useful for finding edges associated with input segments and for setting boundary conditions in finite element simulations.  Moreover, you will need the output .poly file if you plan to refine the output mesh, and don't want segments to be missing in later triangulations.

```shell
  .area files:
    First line:  <# of triangles>
    Following lines:  <triangle #> <maximum area>
```

  An .area file associates with each triangle a maximum area that is used for mesh refinement.  As with other file formats, every triangle must be represented, and the triangles must be numbered consecutively.  A triangle may be left unconstrained by assigning it a negative maximum area.

```shell
  .edge files:
    First line:  <# of edges> <# of boundary markers (0 or 1)>
    Following lines:  <edge #> <endpoint> <endpoint> [boundary marker]
```

  Endpoints are indices into the corresponding .node file.  Triangle can produce .edge files (use the -e switch), but cannot read them.  The optional column of boundary markers is suppressed by the -B switch.

  In Voronoi diagrams, one also finds a special kind of edge that is an infinite ray with only one endpoint.  For these edges, a different format is used:

```shell
        <edge #> <endpoint> -1 <direction x> <direction y>
```

  The 'direction' is a floating-point vector that indicates the direction of the infinite ray.

```shell
  .neigh files:
    First line:  <# of triangles> <# of neighbors per triangle (always 3)>
    Following lines:  <triangle #> <neighbor> <neighbor> <neighbor>
```

  Neighbors are indices into the corresponding .ele file.  An index of -1 indicates no neighbor (because the triangle is on an exterior boundary).  The first neighbor of triangle i is opposite the first corner of triangle i, and so on.

  Triangle can produce .neigh files (use the -n switch), but cannot read them.

Boundary Markers:

  Boundary markers are tags used mainly to identify which output vertices and edges are associated with which PSLG segment, and to identify which vertices and edges occur on a boundary of the triangulation.  A common use is to determine where boundary conditions should be applied to a finite element mesh.  You can prevent boundary markers from being written into files produced by Triangle by using the -B switch.

  The boundary marker associated with each segment in an output .poly file and each edge in an output .edge file is chosen as follows:
    - If an output edge is part or all of a PSLG segment with a nonzero
      boundary marker, then the edge is assigned the same marker.
    - Otherwise, if the edge lies on a boundary of the triangulation
      (even the boundary of a hole), then the edge is assigned the marker
      one (1).
    - Otherwise, the edge is assigned the marker zero (0).
  The boundary marker associated with each vertex in an output .node file is chosen as follows:
    - If a vertex is assigned a nonzero boundary marker in the input file,
      then it is assigned the same marker in the output .node file.
    - Otherwise, if the vertex lies on a PSLG segment (even if it is an
      endpoint of the segment) with a nonzero boundary marker, then the
      vertex is assigned the same marker.  If the vertex lies on several
      such segments, one of the markers is chosen arbitrarily.
    - Otherwise, if the vertex occurs on a boundary of the triangulation,
      then the vertex is assigned the marker one (1).
    - Otherwise, the vertex is assigned the marker zero (0).

  If you want Triangle to determine for you which vertices and edges are on the boundary, assign them the boundary marker zero (or use no markers at all) in your input files.  In the output files, all boundary vertices, edges, and segments will be assigned the value one.

Triangulation Iteration Numbers:

  Because Triangle can read and refine its own triangulations, input and output files have iteration numbers.  For instance, Triangle might read the files mesh.3.node, mesh.3.ele, and mesh.3.poly, refine the triangulation, and output the files mesh.4.node, mesh.4.ele, and mesh.4.poly.  Files with no iteration number are treated as if their iteration number is zero; hence, Triangle might read the file points.node, triangulate it, and produce the files points.1.node and points.1.ele.

  Iteration numbers allow you to create a sequence of successively finer meshes suitable for multigrid methods.  They also allow you to produce a sequence of meshes using error estimate-driven mesh refinement.

  If you're not using refinement or quality meshing, and you don't like iteration numbers, use the -I switch to disable them.  This switch also disables output of .node and .poly files to prevent your input files from being overwritten.  (If the input is a .poly file that contains its own points, a .node file is written.  This can be quite convenient for computing CDTs or quality meshes.)

Examples of How to Use Triangle:

  'triangle dots' reads vertices from dots.node, and writes their Delaunay triangulation to dots.1.node and dots.1.ele.  (dots.1.node is identical to dots.node.)  'triangle -I dots' writes the triangulation to dots.ele instead.  (No additional .node file is needed, so none is written.)

  'triangle -pe object.1' reads a PSLG from object.1.poly (and possibly object.1.node, if the vertices are omitted from object.1.poly) and writes its constrained Delaunay triangulation to object.2.node and object.2.ele. The segments are copied to object.2.poly, and all edges are written to object.2.edge.

  'triangle -pq31.5a.1 object' reads a PSLG from object.poly (and possibly object.node), generates a mesh whose angles are all between 31.5 and 117 degrees and whose triangles all have areas of 0.1 or less, and writes the mesh to object.1.node and object.1.ele.  Each segment may be broken up into multiple subsegments; these are written to object.1.poly.

  Here is a sample file 'box.poly' describing a square with a square hole:

```
    # A box with eight vertices in 2D, no attributes, one boundary marker.
    8 2 0 1
     # Outer box has these vertices:
     1   0 0   0
     2   0 3   0
     3   3 0   0
     4   3 3   33     # A special marker for this vertex.
     # Inner square has these vertices:
     5   1 1   0
     6   1 2   0
     7   2 1   0
     8   2 2   0
    # Five segments with boundary markers.
    5 1
     1   1 2   5      # Left side of outer box.
     # Square hole has these segments:
     2   5 7   0
     3   7 8   0
     4   8 6   10
     5   6 5   0
    # One hole in the middle of the inner square.
    1
     1   1.5 1.5
```

  Note that some segments are missing from the outer square, so you must use the '-c' switch.  After 'triangle -pqc box.poly', here is the output file 'box.1.node', with twelve vertices.  The last four vertices were added to meet the angle constraint.  Vertices 1, 2, and 9 have markers from segment 1.  Vertices 6 and 8 have markers from segment 4.  All the other vertices but 4 have been marked to indicate that they lie on a boundary.
  
```shell
    12  2  0  1
       1    0   0      5
       2    0   3      5
       3    3   0      1
       4    3   3     33
       5    1   1      1
       6    1   2     10
       7    2   1      1
       8    2   2     10
       9    0   1.5    5
      10    1.5   0    1
      11    3   1.5    1
      12    1.5   3    1
    # Generated by triangle -pqc box.poly
```

  Here is the output file 'box.1.ele', with twelve triangles.

```shell
    12  3  0
       1     5   6   9
       2    10   3   7
       3     6   8  12
       4     9   1   5
       5     6   2   9
       6     7   3  11
       7    11   4   8
       8     7   5  10
       9    12   2   6
      10     8   7  11
      11     5   1  10
      12     8   4  12
    # Generated by triangle -pqc box.poly
```

  Here is the output file 'box.1.poly'.  Note that segments have been added to represent the convex hull, and some segments have been subdivided by newly added vertices.  Note also that `<# of vertices>` is set to zero to indicate that the vertices should be read from the .node file.

```
    0  2  0  1
    12  1
       1     1   9     5
       2     5   7     1
       3     8   7     1
       4     6   8    10
       5     5   6     1
       6     3  10     1
       7     4  11     1
       8     2  12     1
       9     9   2     5
      10    10   1     1
      11    11   3     1
      12    12   4     1
    1
       1   1.5 1.5
    # Generated by triangle -pqc box.poly
```

Refinement and Area Constraints:

  The -r switch causes a mesh (.node and .ele files) to be read and refined.  If the -p switch is also used, a .poly file is read and used to specify edges that are constrained and cannot be eliminated (although they can be subdivided into smaller edges) by the refinement process.

  When you refine a mesh, you generally want to impose tighter constraints. One way to accomplish this is to use -q with a larger angle, or -a followed by a smaller area than you used to generate the mesh you are refining.  Another way to do this is to create an .area file, which specifies a maximum area for each triangle, and use the -a switch (without a number following).  Each triangle's area constraint is applied to that triangle.  Area constraints tend to diffuse as the mesh is refined, so if there are large variations in area constraint between adjacent triangles, you may not get the results you want.  In that case, consider instead using the -u switch and writing a C procedure that determines which triangles are too large.

  If you are refining a mesh composed of linear (three-node) elements, the output mesh contains all the nodes present in the input mesh, in the same order, with new nodes added at the end of the .node file.  However, the refinement is not hierarchical: there is no guarantee that each output element is contained in a single input element.  Often, an output element can overlap two or three input elements, and some input edges are not present in the output mesh.  Hence, a sequence of refined meshes forms a hierarchy of nodes, but not a hierarchy of elements.  If you refine a mesh of higher-order elements, the hierarchical property applies only to the nodes at the corners of an element; the midpoint nodes on each edge are discarded before the mesh is refined.

  Maximum area constraints in .poly files operate differently from those in .area files.  A maximum area in a .poly file applies to the whole (segment-bounded) region in which a point falls, whereas a maximum area in an .area file applies to only one triangle.  Area constraints in .poly files are used only when a mesh is first generated, whereas area constraints in .area files are used only to refine an existing mesh, and are typically based on a posteriori error estimates resulting from a finite element simulation on that mesh.

  'triangle -rq25 object.1' reads object.1.node and object.1.ele, then refines the triangulation to enforce a 25 degree minimum angle, and then writes the refined triangulation to object.2.node and object.2.ele.

  'triangle -rpaa6.2 z.3' reads z.3.node, z.3.ele, z.3.poly, and z.3.area. After reconstructing the mesh and its subsegments, Triangle refines the mesh so that no triangle has area greater than 6.2, and furthermore the triangles satisfy the maximum area constraints in z.3.area.  No angle bound is imposed at all.  The output is written to z.4.node, z.4.ele, and z.4.poly.

  The sequence `triangle -qa1 x`, `triangle -rqa.3 x.1`, `triangle -rqa.1 x.2` creates a sequence of successively finer meshes x.1, x.2, and x.3, suitable for multigrid.

Convex Hulls and Mesh Boundaries:

  If the input is a vertex set (not a PSLG), Triangle produces its convex hull as a by-product in the output .poly file if you use the -c switch. There are faster algorithms for finding a two-dimensional convex hull than triangulation, of course, but this one comes for free.

  If the input is an unconstrained mesh (you are using the -r switch but not the -p switch), Triangle produces a list of its boundary edges (including hole boundaries) as a by-product when you use the -c switch. If you also use the -p switch, the output .poly file contains all the segments from the input .poly file as well.

Voronoi Diagrams:

  The -v switch produces a Voronoi diagram, in files suffixed .v.node and .v.edge.  For example, 'triangle -v points' reads points.node, produces its Delaunay triangulation in points.1.node and points.1.ele, and produces its Voronoi diagram in points.1.v.node and points.1.v.edge.  The .v.node file contains a list of all Voronoi vertices, and the .v.edge file contains a list of all Voronoi edges, some of which may be infinite rays.  (The choice of filenames makes it easy to run the set of Voronoi vertices through Triangle, if so desired.)

  This implementation does not use exact arithmetic to compute the Voronoi vertices, and does not check whether neighboring vertices are identical. Be forewarned that if the Delaunay triangulation is degenerate or near-degenerate, the Voronoi diagram may have duplicate vertices or crossing edges.

  The result is a valid Voronoi diagram only if Triangle's output is a true Delaunay triangulation.  The Voronoi output is usually meaningless (and may contain crossing edges and other pathology) if the output is a CDT or CCDT, or if it has holes or concavities.  If the triangulated domain is convex and has no holes, you can use -D switch to force Triangle to construct a conforming Delaunay triangulation instead of a CCDT, so the Voronoi diagram will be valid.

Mesh Topology:

  You may wish to know which triangles are adjacent to a certain Delaunay edge in an .edge file, which Voronoi cells are adjacent to a certain Voronoi edge in a .v.edge file, or which Voronoi cells are adjacent to each other.  All of this information can be found by cross-referencing output files with the recollection that the Delaunay triangulation and the Voronoi diagram are planar duals.

  Specifically, edge i of an .edge file is the dual of Voronoi edge i of the corresponding .v.edge file, and is rotated 90 degrees counterclock- wise from the Voronoi edge.  Triangle j of an .ele file is the dual of vertex j of the corresponding .v.node file.  Voronoi cell k is the dual of vertex k of the corresponding .node file.

  Hence, to find the triangles adjacent to a Delaunay edge, look at the vertices of the corresponding Voronoi edge.  If the endpoints of a Voronoi edge are Voronoi vertices 2 and 6 respectively, then triangles 2 and 6 adjoin the left and right sides of the corresponding Delaunay edge, respectively.  To find the Voronoi cells adjacent to a Voronoi edge, look at the endpoints of the corresponding Delaunay edge.  If the endpoints of a Delaunay edge are input vertices 7 and 12, then Voronoi cells 7 and 12 adjoin the right and left sides of the corresponding Voronoi edge, respectively.  To find which Voronoi cells are adjacent to each other, just read the list of Delaunay edges.

  Triangle does not write a list of the edges adjoining each Voronoi cell, but you can reconstructed it straightforwardly.  For instance, to find all the edges of Voronoi cell 1, search the output .edge file for every edge that has input vertex 1 as an endpoint.  The corresponding dual edges in the output .v.edge file form the boundary of Voronoi cell 1.

  For each Voronoi vertex, the .neigh file gives a list of the three Voronoi vertices attached to it.  You might find this more convenient than the .v.edge file.

Quadratic Elements:

  Triangle generates meshes with subparametric quadratic elements if the -o2 switch is specified.  Quadratic elements have six nodes per element, rather than three.  'Subparametric' means that the edges of the triangles are always straight, so that subparametric quadratic elements are geometrically identical to linear elements, even though they can be used with quadratic interpolating functions.  The three extra nodes of an element fall at the midpoints of the three edges, with the fourth, fifth, and sixth nodes appearing opposite the first, second, and third corners respectively.

Domains with Small Angles:

  If two input segments adjoin each other at a small angle, clearly the -q switch cannot remove the small angle.  Moreover, Triangle may have no choice but to generate additional triangles whose smallest angles are smaller than the specified bound.  However, these triangles only appear between input segments separated by small angles.  Moreover, if you request a minimum angle of theta degrees, Triangle will generally produce no angle larger than 180 - 2 theta, even if it is forced to compromise on the minimum angle.

Statistics:

  After generating a mesh, Triangle prints a count of entities in the output mesh, including the number of vertices, triangles, edges, exterior boundary edges (i.e. subsegments on the boundary of the triangulation, including hole boundaries), interior boundary edges (i.e. subsegments of input segments not on the boundary), and total subsegments.  If you've forgotten the statistics for an existing mesh, run Triangle on that mesh with the -rNEP switches to read the mesh and print the statistics without writing any files.  Use -rpNEP if you've got a .poly file for the mesh.

  The -V switch produces extended statistics, including a rough estimate of memory use, the number of calls to geometric predicates, and histograms of the angles and the aspect ratios of the triangles in the mesh.

Exact Arithmetic:

  Triangle uses adaptive exact arithmetic to perform what computational geometers call the 'orientation' and 'incircle' tests.  If the floating- point arithmetic of your machine conforms to the IEEE 754 standard (as most workstations do), and does not use extended precision internal floating-point registers, then your output is guaranteed to be an absolutely true Delaunay or constrained Delaunay triangulation, roundoff error notwithstanding.  The word 'adaptive' implies that these arithmetic routines compute the result only to the precision necessary to guarantee correctness, so they are usually nearly as fast as their approximate counterparts.

  May CPUs, including Intel x86 processors, have extended precision floating-point registers.  These must be reconfigured so their precision is reduced to memory precision.  Triangle does this if it is compiled correctly.  See the makefile for details.

  The exact tests can be disabled with the -X switch.  On most inputs, this switch reduces the computation time by about eight percent--it's not worth the risk.  There are rare difficult inputs (having many collinear and cocircular vertices), however, for which the difference in speed could be a factor of two.  Be forewarned that these are precisely the inputs most likely to cause errors if you use the -X switch.  Hence, the -X switch is not recommended.

  Unfortunately, the exact tests don't solve every numerical problem. Exact arithmetic is not used to compute the positions of new vertices, because the bit complexity of vertex coordinates would grow without bound.  Hence, segment intersections aren't computed exactly; in very unusual cases, roundoff error in computing an intersection point might actually lead to an inverted triangle and an invalid triangulation. (This is one reason to specify your own intersection points in your .poly files.)  Similarly, exact arithmetic is not used to compute the vertices of the Voronoi diagram.

  Another pair of problems not solved by the exact arithmetic routines is underflow and overflow.  If Triangle is compiled for double precision arithmetic, I believe that Triangle's geometric predicates work correctly if the exponent of every input coordinate falls in the range [-148, 201]. Underflow can silently prevent the orientation and incircle tests from being performed exactly, while overflow typically causes a floating exception.

Calling Triangle from Another Program:

  Read the file triangle.h for details.

Troubleshooting:

  Please read this section before mailing me bugs.

  'My output mesh has no triangles!'

  If you're using a PSLG, you've probably failed to specify a proper set of bounding segments, or forgotten to use the -c switch.  Or you may have placed a hole badly, thereby eating all your triangles.  To test these possibilities, try again with the -c and -O switches. Alternatively, all your input vertices may be collinear, in which case you can hardly expect to triangulate them.

  'Triangle doesn't terminate, or just crashes.'

    Bad things can happen when triangles get so small that the distance between their vertices isn't much larger than the precision of your machine's arithmetic.  If you've compiled Triangle for single-precision arithmetic, you might do better by recompiling it for double-precision. Then again, you might just have to settle for more lenient constraints on the minimum angle and the maximum area than you had planned.

    You can minimize precision problems by ensuring that the origin lies inside your vertex set, or even inside the densest part of your mesh.  If you're triangulating an object whose x-coordinates all fall between 6247133 and 6247134, you're not leaving much floating-point precision for Triangle to work with.

    Precision problems can occur covertly if the input PSLG contains two segments that meet (or intersect) at an extremely small angle, or if such an angle is introduced by the -c switch.  If you don't realize that a tiny angle is being formed, you might never discover why Triangle is crashing.  To check for this possibility, use the -S switch (with an appropriate limit on the number of Steiner points, found by trial-and-error) to stop Triangle early, and view the output .poly file with Show Me (described below).  Look carefully for regions where dense clusters of vertices are forming and for small angles between segments. Zoom in closely, as such segments might look like a single segment from a distance.

    If some of the input values are too large, Triangle may suffer a floating exception due to overflow when attempting to perform an orientation or incircle test.  (Read the section on exact arithmetic above.)  Again, I recommend compiling Triangle for double (rather than single) precision arithmetic.

    Unexpected problems can arise if you use quality meshing (-q, -a, or -u) with an input that is not segment-bounded--that is, if your input is a vertex set, or you're using the -c switch.  If the convex hull of your input vertices has collinear vertices on its boundary, an input vertex that you think lies on the convex hull might actually lie just inside the convex hull.  If so, the vertex and the nearby convex hull edge form an extremely thin triangle.  When Triangle tries to refine the mesh to enforce angle and area constraints, Triangle might generate extremely tiny triangles, or it might fail because of insufficient floating-point precision.

  'The numbering of the output vertices doesn't match the input vertices.'

    You may have had duplicate input vertices, or you may have eaten some of your input vertices with a hole, or by placing them outside the area enclosed by segments.  In any case, you can solve the problem by not using the -j switch.

  'Triangle executes without incident, but when I look at the resulting mesh, it has overlapping triangles or other geometric inconsistencies.'

    If you select the -X switch, Triangle occasionally makes mistakes due to floating-point roundoff error.  Although these errors are rare, don't use the -X switch.  If you still have problems, please report the bug.

  'Triangle executes without incident, but when I look at the resulting Voronoi diagram, it has overlapping edges or other geometric inconsistencies.'

    If your input is a PSLG (-p), you can only expect a meaningful Voronoi diagram if the domain you are triangulating is convex and free of holes, and you use the -D switch to construct a conforming Delaunay triangulation (instead of a CDT or CCDT).

  Strange things can happen if you've taken liberties with your PSLG.  Do you have a vertex lying in the middle of a segment?  Triangle sometimes copes poorly with that sort of thing.  Do you want to lay out a collinear row of evenly spaced, segment-connected vertices?  Have you simply defined one long segment connecting the leftmost vertex to the rightmost vertex, and a bunch of vertices lying along it?  This method occasionally works, especially with horizontal and vertical lines, but often it doesn't, and you'll have to connect each adjacent pair of vertices with a separate segment.  If you don't like it, tough.

  Furthermore, if you have segments that intersect other than at their endpoints, try not to let the intersections fall extremely close to PSLG vertices or each other.

  If you have problems refining a triangulation not produced by Triangle: Are you sure the triangulation is geometrically valid?  Is it formatted correctly for Triangle?  Are the triangles all listed so the first three vertices are their corners in counterclockwise order?  Are all of the triangles constrained Delaunay?  Triangle's Delaunay refinement algorithm assumes that it starts with a CDT.

A Brief Plea:

  If you use Triangle, and especially if you use it to accomplish real work, I would like very much to hear from you.  A short letter or email (to jrs@cs.berkeley.edu) describing how you use Triangle will mean a lot to me.  The more people I know are using this program, the more easily I can justify spending time on improvements, which in turn will benefit you.  Also, I can put you on a list to receive email whenever a new version of Triangle is available.

  If you use a mesh generated by Triangle in a publication, please include an acknowledgment as well.  And please spell Triangle with a capital 'T'! If you want to include a citation, use Jonathan Richard Shewchuk, ''Triangle: Engineering a 2D Quality Mesh Generator and Delaunay Triangulator,'' in Applied Computational Geometry:  Towards Geometric Engineering (Ming C. Lin and Dinesh Manocha, editors), volume 1148 of Lecture Notes in Computer Science, pages 203-222, Springer-Verlag, Berlin, May 1996.  (From the First ACM Workshop on Applied Computational Geometry.)'



