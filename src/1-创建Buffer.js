// 1. alloc => 清空原来的内存空间
let buf1 = Buffer.alloc(10, 'a')
// console.log(buf1);

// 2. allocUnsafe => 不会清空旧的内存空间，速度会比 alloc 快，所以平时用的多，但是用的时候需要注意。
let buf2 = Buffer.allocUnsafe(10000)
// console.log(buf2)

// 3. from
let buf3 = Buffer.from('hello')
let buf4 = Buffer.from([1,2,3])
console.log(buf3); // <Buffer 68 65 6c 6c 6f>
console.log(buf4); // <Buffer 01 02 03>
