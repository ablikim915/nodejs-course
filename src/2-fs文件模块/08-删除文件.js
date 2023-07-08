const fs = require('fs')

// // 用 unlink/unlinkSync 方法删除 
// fs.unlink('./准备删除1.txt', err => {
//     if (err) {
//         console.log('删除失败')
//         return
//     }
//     console.log('删除成功');
// })


// 用 rm/rmSync 方法删除文件 14.4开始支持此方法 
fs.rm('./准备删除2.txt', err => {
    if (err) {
        console.log('删除失败')
        return
    }
    console.log('删除成功');
})
