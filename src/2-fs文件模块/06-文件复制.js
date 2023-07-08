const fs = require('fs')
const process = require('process')

// // 方式1 同步方式复制
// // 同步读取文件内容
// let data = fs.readFileSync('../assets/porn.mp4')
// // 同步写入文件
// fs.writeFileSync('../assets/porn-副本1.mp4', data)
// console.log('--总过占用内存空间', process.memoryUsage());   // 113516544 字节 => 108mb


// 方式2 流式操作
// 创建读取流对象
const rs = fs.createReadStream('../assets/porn.mp4');
// 创建写入流对象
const ws = fs.createWriteStream('../assets/porn-副本2.mp4');

// 绑定data事件
rs.on('data', (chunk) => {
    ws.write(chunk)
})

rs.on('end', () => {
    console.log('--总过占用内存空间', process.memoryUsage());   // 25772032 字节 => 24mb
})


/**
    1. 当文件体积较小的时候，两种复制方式内存占有量几乎一样。
    2. 当文件体积比较大的时候（100mb左右），流式操作内存占有率明显小。
 */
