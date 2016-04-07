var Fs = require('fs')

module.exports = (pwd) => {

    // find all suitable files in this folder
    var files = Fs.readdirSync(pwd)
    for (var i in files) {
        if (files[i].indexOf('.rar') > -1) {
            return files[i]
        }
    }1
}
