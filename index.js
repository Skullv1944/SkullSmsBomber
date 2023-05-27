const rl = require('readline-sync');
const colors = require('colors');
const title = require('./modules/title.js');
const fastBomber = require('./modules/sms.js');

title('Skull SmsBombera Hoşgeldiniz');

let telefon = rl.question('Telefon Numarası Griniz +90: ' .green);
if (telefon.length != 10) {
    console.log('Telefon Numarası 10 Haneli Olmalidir. Ex: 5401234521'.red);
    process.exit(1);
}
title('Numara: ' + telefon);

let miktar = rl.question("Kaç Adet SMS Göndermek İstiyorsunuz: ".green);
if(isNaN(miktar)) return console.log('Lütfen Bir Rakam Giriniz'.red) && process.exit(1);
if (miktar.length == 0) {
    console.log('Miktar Giriniz'.red);
    process.exit(1);
}
title(`Telefon: ${telefon} - Miktar: ${miktar}`);

console.log('SMS Gönderiliyor...'.rainbow);

fastBomber(telefon, miktar);
