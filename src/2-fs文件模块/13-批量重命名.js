const fs = require('fs')

const files = fs.readdirSync('./')

files.map(item => {
    if (item.includes('.js')) {
        let [num, name] = item.split('-')
        console.log('num,name', num, name);
        if (Number(num) < 10) {
            num = '0' + num
        }
        let newName = num + '-' + name;
        // 重命名
        fs.renameSync(`./${item}`, `./${newName}`);
    }
})
