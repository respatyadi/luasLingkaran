const readlineSync = require('readline-sync')
const { Lingkaran } = require('./models/lingkaran')

function luas(jarijari) {
    const phi = 3.14
    L = phi * (jarijari * jarijari)
    return L
}

const hitungLuasLingkaranDash = () => {
    console.clear()
    console.log('----------------------------------------------------------------')
    console.log('Untuk menghitung luas lingkaran harap masukan nilai jari- jari: ')
    console.log('--------------------------------------------------------------\n')

    const jarijari = readlineSync.question("nilai jari-jari : ")

    const luas_lingkaran = luas(jarijari)
    console.log('Luas: '+luas_lingkaran)

    const lingkaran = new Lingkaran() 
    lingkaran.create(jarijari,luas_lingkaran)
    console.log("\n===================================")
    console.log("Luas lingkaran berhasil disimpan")
    console.log("===================================\n")
    
    const option = readlineSync.question("Tekan apa saja untuk kembali ke menu utama: ")
    console.clear()

    return option
}

module.exports = { hitungLuasLingkaranDash }