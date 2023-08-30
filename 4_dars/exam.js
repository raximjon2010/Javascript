
// // ---------------------------1 exam------------------------------------------------------

// // Juft va toq sonni topish;
// let number = 3;
// if(number % 2 ===0){
//     console.log("Juft son");
// }
// else {
//     console.log("Toq son");
// }
// -------------------------- 1 - exam Switch-----------------------------------------------
// let number2 = 3;
// switch(number2 % 2){
//     case 0 : console.log("Juft son");break;
//     case 1 : console.log("toq son");break;
//     default: console.log("Son emas");break
// }
// -------------------------- 1 - exam Ternary-----------------------------------------------
// let number3 = 3;
// number3 % 2 ===0 ? console.log("Juft son") : console.log("toq son");

// // ---------------------------2 exam------------------------------------------------------

// Ball topish sistemasi
// 1. ball 100-86 gacha bolsa A chiqsin;
// 2. ball 85-61 gacha bolsa B chiqsin;
// 3. ball 60-50 gacha C chiqsin
// 4. ball 50 kam bolsa faild
// -------------------------- 2- exam if else-----------------------------------------------
// let ball = 100;
// if(ball >= 86 && ball <= 100){
//     console.log("A");
// }
// else if(ball >= 61 && ball <= 85){
//     console.log("B");
// }
// else if(ball >= 50 && ball <=60){
//     console.log("C");
// }
// else if (ball < 50){
//     console.log("faild");
// }
// else{
//     console.log("Xato");
// }
// Ball topish sistemasi
// 1. ball 100-86 gacha bolsa A chiqsin;
// 2. ball 85-61 gacha bolsa B chiqsin;
// 3. ball 60-50 gacha C chiqsin
// 4. ball 50 kam bolsa faild
// -------------------------- 2 - exam Switch-----------------------------------------------
// let ball = 55;
// switch(true){
//     case (ball <= 100 && ball >= 86) : console.log("A");break;
//     case (ball <= 85 && ball >= 61) : console.log("B");break;
//     case (ball <= 60 && ball >= 50) : console.log("C"); break;
//     case (ball < 50) : console.log("Faild"); break;
//     default : console.log("Xato");
// }
// Ball topish sistemasi
// 1. ball 100-86 gacha bolsa A chiqsin;
// 2. ball 85-61 gacha bolsa B chiqsin;
// 3. ball 60-50 gacha C chiqsin
// 4. ball 50 kam bolsa faild
// -------------------------- 2 - exam Ternary-----------------------------------------------
// let ball = 100;
// ball <= 100 && ball >= 86 ? console.log("A") : console.log("B");

// // ---------------------------3 exam------------------------------------------------------

// Meva narxlarini topuvchi dastur yozing

// -------------------------- 3- exam if else-----------------------------------------------

// let meva = 'olma'

// if(meva === 'olma'){
//     console.log('10 000');
// }
// else if(meva === 'nok'){
//     console.log("15 000");
// }
// else if(meva === 'shaftoli'){
//     console.log("12 000");
// }
// else if(meva === 'uzum'){
//     console.log("11 000");
// }
// else if(meva === 'anor'){
//     console.log("Anor");
// }
// else {
//     console.log("Bu meva emas");
// }

// -------------------------- 3 - exam Switch-----------------------------------------------

// let meva = 'shaftoli'

// switch (meva){
//     case 'olma' : console.log("10 000"); break;
//     case 'shaftoli' : console.log('12 000'); break;
//     case 'uzum' : console.log('11 000'); break;
//     case 'anor' : console.log('20 000'); break;
//     default : console.log("Bu meva emas"); break;
// }

// -------------------------- 3 - exam Ternary-----------------------------------------------

// let meva = 'olma'

// meva === 'olma' ? console.log("10 000") : meva === 'Shaftoli' ?console.log("12 000") : 
// meva === 'uzum' ? console.log("11 000") : meva === 'anor' ? console.log("20 000") : console.log("Bunday meva yoq");

// -------------------------- 4 - exam ------------------------------------------------------

// 3ga bolinadi , 5 ga bolinadi , 3 ga va 5ga bolinadigan sonlarni aniqlang

// -------------------------- 4 - exam if else -------------------------------------------------
// let num = 15;
// if (num % 3 === 0){
//     console.log(`Bu raqam 3ga bolinadi`);
// }
// if (num % 5 === 0){
//     console.log(`Bu raqam 5 ga bolinadi`);
// }
//  if (num % 3 === 0 && num % 5 === 0){
//     console.log("Bu raqam 5 ga va 3 ga bolinadi");
// }
// else {
//     console.log("Bu raqam 5 ga ham 3 ga ham bolinmaydi");
// }

// -------------------------- 4 - exam Switch Case -------------------------------------------------

// let num = 15;
// switch (num % 3){
//     case 0 : console.log("Bu son 3 ga bolinadi");
// }
// switch (num % 5 ){
//     case 0 : console.log("Bu son 5 ga bolinadi");
// }
// switch(num % 5 && num % 3){
//     case 0 : console.log("Bu son 3 ga va 5 ga bolinadi"); break;
//     default : console.log("Bu son 3 ga va 5 ga bolinmaydi");
// }

// -------------------------- 4 - exam Ternary -------------------------------------------------

// let num = 9;
// num % 3 === 0 ? console.log("Bu son 3 ga bolinadi") : console.log('Eror');
// num % 5 === 0 ? console.log("Bu son 5 ga bolinadi") : console.log('Eror');
// num % 3 === 0 && num % 5 ? console.log("Bu raqam 3 ga va 5 ga bolinadi") : console.log("Bu raqam 3 ga va 5 ga bolinmaydi");

// -------------------------- 5 - exam  -------------------------------------------------
// Quyidagi kalitga mos keladigan if else dan foydalanib kodni yozing

// let browser = 'Edge';
// if(browser === 'Edge'){
//     console.log("You've god the Edge")
// }
// else if(browser === 'Chrome'){
//     console.log("Okay we support thease browser too");
// }
// else if(browser === 'Firefox'){
//     console.log("Okay we support thease browser too");
// }
// else if(browser === "Safari"){
//     console.log("Okay we support thease browser too");
// }
// else if(browser === 'Opera'){
//     console.log("Okay we support thease browser too");
// }
// -------------------------- 6 - exam  -------------------------------------------------
//O'qish uchun kodni bir nechta qatorlarga bo'lish tavsiya etiladi
// Men buni switch korinishida ham  yozdim
// let message = undefined;

// switch(message){
//     case "Employee" : message = 'Hello'
//     case "Director" : message = 'Girettings'
//     case "" : message = 'No login'
//     default : 'No login'
// }