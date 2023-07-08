const fs = require('fs')

// 异步读取
// fs.readFile('./去公司路线.txt', (err, data) => {
//     if (err) {
//         console.log('读取失败')
//         return
//     }
//     console.log(data.toString());
// })


// 同步读取
const data = fs.readFileSync('./我爱宝宝.txt')
console.log(data.toString())


/**
 * 文件读取使用场景
    1. 电脑开机
    2. 程序运行
    3. 编辑器打开文件
    4. 查看图片
    5. 播放视频
    6. 播放音乐
    7. git查看日志
    8. 上传文件
    9. 查看聊天记录
 * */ 
