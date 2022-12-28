const fs = require('fs')

class Lingkaran {
    constructor() {
        this.data = require('../databases/luas.json')
    }

    getLingkaran() {
        return this.data
    }

    create(jarijari,luas_lingkaran) {
        this.data.push({
            jarijari: jarijari,
            luas_lingkaran: luas_lingkaran
            })

        fs.writeFileSync("./databases/luas.json", JSON.stringify(this.data))
    }
}

module.exports = {
    Lingkaran
}