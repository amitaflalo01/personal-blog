const fs = require('fs')

const itemsRemove = function(req, res) {
    const itemType = req.body.type;
    const dataExp = fs.readFileSync('./data.json', 'utf8')
    const data = JSON.parse(dataExp)

    const delItemID = req.body.id - 0

    const elementFound = function(item) {
        return item.id === delItemID
    }

    const index = data[itemType].findIndex(elementFound)

    data[itemType].splice(index, 1)

    let dataToFile = JSON.stringify(data)

    fs.writeFile('./data.json', dataToFile, function(err) {
        if (err) throw err;
        console.log('item removed');
    });
}

module.exports = itemsRemove;
