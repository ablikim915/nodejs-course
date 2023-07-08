const fs = require('fs')

fs.stat('../assets/porn.mp4', (err, data) => {
    if (err) {
        console.log('操作失败')
        return
    }
    // console.log(data)
    // 判断是不是文件
    console.log(data.isFile());
    // 判断是不是文件夹
    console.log(data.isDirectory())
})
