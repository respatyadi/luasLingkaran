const readlineSync = require('readline-sync')
const { hitungLuasLingkaranDash } = require('./create-lingkaran.js')
const { getHitungLingkaran } =require('./get-lingkaran')

const main = () => {
    console.clear()
    console.log('----------------------------------')
    console.log('1. Hitung Luas Lingkaran ')
    console.log('2. Tampilkan Perhitungan Lingkaran')
    console.log('----------------------------------')
    const option = readlineSync.question('Mau pilih nomor berapa ?')
    const optionNum = parseInt(option)

    if (optionNum === 1){
        const hitungLuasLingkaran = hitungLuasLingkaranDash()
        const hitungLuasLingkaranNum = parseInt(hitungLuasLingkaran)

        if (hitungLuasLingkaranNum === 1){
            main()
        }
    }
    else if (optionNum === 2){
        const tampilGetHitung = getHitungLingkaran()
        const tampilGetHitungNum = parseInt(tampilGetHitung)

        if (tampilGetHitungNum === 1) {
            main()
        }
    }
    if (optionNum > 2 || optionNum <= 0) {
        console.log(' Maaf Pilihanmu tidak tersedia')}
        console.clear()
        main()
}
main()