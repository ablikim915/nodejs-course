const fs = require('fs')

// 创建文件夹 mkdir/mkdirSync
// fs.mkdir('./html', err => {
//     if (err) {
//         console.log('创建失败')
//         return
//     }
//     console.log('创建成功')
// })


// 递归创建文件夹 mkdir/mkdirSync 参数 { recursive: true }
// fs.mkdir('./a/b/c', { recursive: true }, err => {
//     if (err) {
//         console.log('创建失败')
//         return
//     }
//     console.log('创建成功')
// })


// 读取文件夹 readdir
// fs.readdir('./',  (err, data)=> {
//     if (err) {
//         console.log('读取失败')
//         return
//     }
//     console.log(data)
// })


// 删除文件夹 rmdir/rmdirSync
// fs.rmdir('./html', err => {
//     if (err) {
//         console.log('删除失败')
//         return
//     }
//     console.log('删除成功')
// })


// 不推荐 递归删除文件夹 rmdir/rmdirSync  参数 { recursive: true }
// fs.rmdir('./a', { recursive: true } , err => {
//     if (err) {
//         console.log('删除失败')
//         return
//     }
//     console.log('删除成功')
// })

// 推荐 递归删除文件夹 rm  参数 { recursive: true }
fs.rm('./a', { recursive: true } , err => {
    if (err) {
        console.log('删除失败')
        return
    }
    console.log('删除成功')
})
