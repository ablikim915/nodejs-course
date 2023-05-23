// buffer与字符串转换
let buf1 = Buffer.from([105, 32, 108, 111, 118, 101, 32, 121, 111, 117])
// console.log(buf1.toString())

//
let buf2 = Buffer.from('hello');
console.log(buf2[4].toString(10)) // 111
buf2[1] = 111;
console.log(buf2.toString())  // hollo

// 溢出
let buf3 = Buffer.from('hello');
buf3[0] = 361; // 舍弃高于8位的数字，因为utf-8解码中1字节等于8位  0001 0110 1001 => 0110 1001
console.log(buf3) // <Buffer 69 65 6c 6c 6f>
console.log(buf3.toString()) // iello

// 中文 
let buf4 = Buffer.from('你好')
console.log(buf4); // <Buffer e4 bd a0 e5 a5 bd>  utf-8的中文字符，一个中文字占3个字节
