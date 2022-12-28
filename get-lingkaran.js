const readlineSync = require('readline-sync')
const { Lingkaran } = require('./models/lingkaran')

const getHitungLingkaran = () => {
    console.clear()

    const lingkaran = new Lingkaran()
    retrievedLingkaran = lingkaran.getLingkaran();
    retrievedLingkaran.forEach((data, index) => {
        console.log(`         DATA LINGKARAN ${index+1}`)
        console.log("================================")
        console.log(`Jari - Jari Lingkaran : ${data.jarijari}`)
        console.log(`Luas : ${data.luas_lingkaran}`)
        console.log("================================")
        
    });
    // console.log(retrievedUser);
    
    const option = readlineSync.question("Tekan apa saja untuk kembali ke menu utama: ")
    console.clear()

    return option
}

module.exports = { getHitungLingkaran }