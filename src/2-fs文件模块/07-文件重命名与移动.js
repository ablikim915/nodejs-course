const fs = require('fs')

// // 重命名
// fs.rename('./同步写入.txt', './sync-write.txt', err => {
//     if (err) {
//         console.log('操作失败');
//         return
//     }
//     console.log('操作成功');
// })


// 文件移动
fs.rename('./sync-write.txt', '../assets/sync-write.txt', err => {
    if (err) {
        console.log('操作失败');
        return
    }
    console.log('操作成功');
})
