
let result = 0;
let answer4 = confirm("Омоним  айтылышы бирдей , жазылышы бирдей , маниси арбашка?");
if (answer4) {
    result = result + 10;

}
let answer3 = confirm("Антоним  айтылышы бирмес , жазылышы бирмес , маниси окшош? ");
if (answer3) {
    result = result + 30;

}
let answer2 = confirm("Табиятынтынан карама-каршы создор сенонимдер?");
if (answer2) {
    result = result + 15;

}

let answer5 = confirm(" Токтагул Сатылганов атындагы мектеп 1991-жылы негизделген?");

if (answer5) {
    result = result + 20;


}

let answer6 = confirm(" Ата-Мекендик согуш качан болгон 1992 ?");
if (answer6) {
    result = result + 10;
}


let answer7 = confirm("Ысык-кол кыргызстандабы?");
if (answer7) {
    result = result + 5;
}

let answer8 = confirm("Каракол Ысык-Колдун борбору ?");
if (answer8) {
    result = result + 10;
}
console.log(" Your ve earned " + result + " point")




