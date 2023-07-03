const fs = require('fs')

// 创建读取流
const ws = fs.createReadStream('../assets/复联.mp4')

// 读取, 绑定 data 事件
ws.on('data', chunk => {
    console.log(chunk.length);  // 65536 字节 => 64kb
})

// 关闭通道
ws.on('end', () => {
    console.log('读取完成')
})
