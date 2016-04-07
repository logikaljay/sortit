var fs = require('fs')
var path = require('path')
var spawn = require('child_process').spawn

module.exports = (archive, to, show) => {
    createIfNotExists(to)
    spawn('unrar', ['e', archive, to])
}


var createIfNotExists = (to) => {
    var seasonDir = path.join(to)
    var showDir = path.join(seasonDir, '../')

    console.log(showDir)
    console.log(seasonDir)

    if ( ! fs.existsSync(showDir)) {
        fs.mkdirSync(showDir)
    }

    if ( ! fs.existsSync(seasonDir)) {
        fs.mkdirSync(seasonDir)
    }
}
