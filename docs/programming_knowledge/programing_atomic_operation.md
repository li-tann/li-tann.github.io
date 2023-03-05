# Atomic Operation 原子性操作

多线程访问资源时，需要确保所有的线程不在同一时间内访问相同的资源。

原子性操作是指不能再被拆分、不会被线程调度机制中断的操作。原子性操作一旦开始，在结束前中间不会有任何context switch。

[参考文档](https://blog.csdn.net/rain_qingtian/article/details/11020827)

参考文档中，题到了intel参考手册里说明的，CPU是基于以下三种机制在多核中加锁的原子操作：

（1）Guaranteed atomic operations
（2）Bus locking, using the LOCK# signal and the LOCK instruction prefix
（3）Cache coherency protocols that ensure that atomic operations can be carried out on cached data structures (cache lock); this mechanism is present in the Pentium 4, Intel Xeon, and P6 family processors

这三个机制相互独立，相辅相承。简单的理解起来就是
（1）一些基本的内存读写操作是本身已经被硬件提供了原子性保证（例如读写单个字节的操作）；
（2）一些需要保证原子性但是没有被第（1）条机制提供支持的操作（例如read-modify-write）可以通过使用”LOCK#”来锁定总线，从而保证操作的原子性
（3）因为很多内存数据是已经存放在L1/L2 cache中了，对这些数据的原子操作只需要与本地的cache打交道，而不需要与总线打交道，所以CPU就提供了cache coherency机制来保证其它的那些也cache了这些数据的processor能读到最新的值（关于cache coherency可以参加我的一篇博文）。

 对于CPU来说，以下基本的操作提供了原子性支持：

从Intel486 processor开始，以下的基本内存操作是原子的：
• Reading or writing a byte（一个字节的读写）
• Reading or writing a word aligned on a 16-bit boundary（对齐到16位边界的字的读写）
• Reading or writing a doubleword aligned on a 32-bit boundary（对齐到32位边界的双字的读写）

从Pentium processor开始，除了之前支持的原子操作外又新增了以下原子操作：
• Reading or writing a quadword aligned on a 64-bit boundary（对齐到64位边界的四字的读写）
• 16-bit accesses to uncached memory locations that fit within a 32-bit data bus（未缓存且在32位数据总线范围之内的内存地址的访问）

从P6 family processors开始，除了之前支持的原子操作又新增了以下原子操作：
• Unaligned 16-, 32-, and 64-bit accesses to cached memory that fit within a cache line（对单个cache line中缓存地址的未对齐的16/32/64位访问）

举例：

（1）x=1是原子操作。因为x是int类型，32位CPU上int占32位，在X86上由硬件直接提供了原子性支持。实际上不管有多少个线程同时执行类似x=1这样的赋值语句，x的值最终还是被赋的值（而不会出现例如某个线程只更新了x的低16位然后被阻塞，另一个线程紧接着又更新了x的低24位然后又被阻塞，从而出现x的值被损坏了的情况）。
（2）x++和++x不属于原子操作。其实类似x++, x+=2, ++x这样的操作在多线程环境下是需要同步的。因为X86会按三条指令的形式来处理这种语句：从内存中读x的值到寄存器中，对寄存器加1，再把新值写回x所处的内存地址（见上面的反汇编代码）。

（3）x=y不是原子操作。在X86上它包含两个操作：读取y至寄存器，再把该值写入x。读y的值这个操作本身是原子的，把值写入x也是原子的，但是两者合起来是不是原子操作呢？我个人认为x=y不是原子操作，因为它不是不可再分的操作。
