const fs = require('fs')

// 异步写入
fs.writeFile('./我爱宝宝.txt', '我爱我的bobak宝宝', err => {
    if (err) {
        console.log('写入失败')
        return
    }
    console.log('写入成功');
})

// 同步写入
fs.writeFileSync('./同步写入.txt', '同步写入的内容')


/**
    文件写入的场景
    1.下载文件
    2.安装文件
    3.保存程序日志，如git
    4.编辑器保存文件
    5.视频录制

    ** 当需要持久化保存数据的时候，应该想到文件写入！

* / 
