var Thetv = require('thetv')
var Path = require('path')

module.exports = (input) => {
    var archive = input
    var item = Thetv(Path.parse(input).name)
    item.archive = archive
    if (item.tv) {
        // return tv folder
        return Object.assign({}, item, {
            sorted: Path.join(item.name, "S" + item.season.name)
        })
    }
    else {
        // return the name for the unsorted folder
        return Object.assign({}, item, {
            unsorted: item.name
        })
    }
}
