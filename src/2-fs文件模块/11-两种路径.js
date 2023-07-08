const fs = require('fs')

// 相对路径
fs.writeFileSync('./love.txt', 'love')
fs.writeFileSync('love.txt', 'love')
fs.writeFileSync('../love.txt', 'love')

// 绝对路径
fs.writeFileSync('D:/love.txt', 'love')
fs.writeFileSync('/love.txt', 'love')   // 根目录
