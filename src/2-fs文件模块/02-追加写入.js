const fs = require('fs')

// \r\n 是换行符

// 异步追加内容
// fs.appendFile('./我爱宝宝.txt', '\r\n我的宝宝特别好看', err => {
//     if (err) {
//         console.log('写入失败');
//         return
//     }
//     console.log('写入成功')
// })

// 同步追加内容
// fs.appendFileSync('./我爱宝宝.txt', '\r\n我的宝宝特别可爱')

// 用fs.writeFile实现追加写入 flag 可选参数 a 代表 append 追加写入
fs.writeFile('./我爱宝宝.txt', '\r\n我的宝宝特别善良', {flag: 'a'}, err => {
    if (err) {
        console.log('写入失败');
        return
    }
    console.log('写入成功')
})
