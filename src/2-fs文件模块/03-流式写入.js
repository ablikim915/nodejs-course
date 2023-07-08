const fs = require('fs')

// 1. 创建写入流对象，实际上创建一个websocket通道, 使用场景，频繁追加写入内容时使用
const ws = fs.createWriteStream('./去公司路线.txt')

// 2. 写入
ws.write('先到东站地铁站\r\n')
ws.write('乘坐1号线\r\n')
ws.write('换座3号线\r\n')
ws.write('到联胜路下车\r\n')

// 3. 关闭通道
ws.close()
