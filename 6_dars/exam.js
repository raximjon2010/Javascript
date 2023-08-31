// // ------------------------------------1 exam -------------------------------------------------------
// // Katta harflarni topish
// let string = "WEBbrain"
// let newStr = '';
// for(i = 0; i < string.length; i++){
//     if (string[i] === string[i].toLocaleUpperCase() ){
//         newStr += string[i]
//     }
// }
// console.log(newStr);
// -------------------------------------1-exam Kichkina harfini topish--------------------------------------
// Kichkina harfni topish 
// let str = "WeBbRAiN";
// let newSTR = '';
// for(i = 0 ; i < str.length; i++){
//     if(str[i] ===  str[i].toLocaleLowerCase()){
//         newSTR += str[i]
//     }
// }
// console.log(newSTR);
// -------------------------------------1-while ------------------------------------
// let str = "WebbraiN";
// let newStr = ""; 
// let i = 0;
// while(i < str.length){
//     if(str[i] === str[i].toLocaleUpperCase()){
//         newStr += str[i]
//     }
// i++;
// }
// console.log(newStr);
// -------------------------------------1-while Kichkina bolgandagi holat------------------------------------
// let str = "WebBraIN";
// let newSTR = "";
// let i = 0;
// while (i < str.length){
//     if (str[i] === str[i].toLocaleLowerCase()) {
//         newSTR += str[i]        
//     }
//     i++
// }
// console.log(newSTR);
// // ------------------------------------2 exam -------------------------------------------------------
// Stringlar orasida bironta bir katta harf kelsa uni kichkina harfga ozgartrib quyadi.
// let str = "WebbRain"
// let newSTR = ""
// for(i = 0 ; i < str.length; i++){
//     if(str[i] === str[i].toLowerCase()){
//         newSTR += str[i].toLowerCase();
//     }
//     else{
//         newSTR += str[i].toLowerCase()
//     }
// }
// console.log(newSTR,);
// // ------------------------------------2 exam  kichkina harf kelsa karta harfga ozgartirad-------------------------------------------------------
// Stringlar orasida bironta bir kichkina harf kelsa uni katta harfga ozgartirb quyadi.
// let str = "WebBRAIN";
// let newStr = "";
// for(i = 0; i < str.length; i++){
//     if(str[i] === str[i].toUpperCase()){
//         newStr += str[i].toUpperCase()
//     }
//     else{
//         newStr += str[i].toUpperCase()
//     }
// }
// console.log(newStr);
// // ------------------------------------2 exam Katta harf kelsa While -------------------------------------------------------
//While da Stringlar orasida bironta bir Katta harf kelsa kichkina harfga ozgartrib quyadi.
// let str = "WEBBRIN ACADEMY";
// let newStr = '';
// let i = 0;
// while(i < str.length){
//     if (str[i] === str[i].toLowerCase()) {
//         newStr += str[i].toLowerCase();        
//     }
//     else {
//         newStr += str[i].toLowerCase()
//     }
//     i++
// }
// console.log(newStr);
// // ------------------------------------2 exam kichkina harf kelsa While -------------------------------------------------------
//While da Stringlar orasida bironta bir kichkina harf kelsa katta harfga ozgartrib quyadi.
// let str = "webbrain academy";
// let newStr = "";
// let i = 0;
// while(i < str.length){
//     if(str[i] === str[i].toUpperCase()){
//         newStr += str[i].toUpperCase()
//     }
//     else{
//         newStr += str[i].toUpperCase()
//     }
//     i++ 
// }
// console.log(newStr);
// ---------------------------------------- 3 - exam -------------------------------------------
//  Bu Katta K harfi nechta kichkina a harfi nechta ekanligini aniqlaydigan programma
// let str = "Webbrain Academy";
// let new_A = 0;
// let new_a = 0;
// for(i = 0; i < str.length; i++){

//     if(str[i] === 'A'){
//         new_A++
//     }
//     else if (str[i] === 'a') {
//         new_a++
//     }
// }
// console.log("Katta A harfi soni:" , new_A);
// console.log("Kichkina a harfi soni:" , new_a);
// ---------------------------------------- 3 - exam Davomi-------------------------------------------
//  Bunisi faqat whileda Katta A harfi nechta kichkina a harfi nechta ekanligini aniqlaydigan programma

// let i = 0 ;
// let str = "Webbrain Academy"
// let new_A = 0;
// let new_a = 0;
// while(i < str.length){
//     if(str[i] === "A"){
//         new_A++
//     }
//     else if(str[i] === "a"){
//         new_a++
//     }
//     i++
// }
// console.log("Katta A harfi soni: ", new_A);
// console.log("Kichkina a harfi soni: ", new_a);
// let str = 'Webbbrain Academy';
// let new_A = 0;
// let new_a = 0;
// let i = 0;
// do{
//     if (str[i] === 'A') {
//         new_A++
//     };
//      if(str[i] === 'a'){
//         new_a++
//     }
//     i++
// } while(i < str.length)
// console.log("Katta A harfi soni : " , new_A);
// console.log("Kichkina a harfi soni :" , new_a);
// ---------------------------------------- 4 - exam -------------------------------------------
// Kabisa yilini topish
// function KabisaYiliniXisoblash(startyear , EndYear){
//     let year = 0;
//     for( year === startyear ; year <= EndYear ; year ++){
//         if (year % 4 === 0 || year % 100 !== 0 || year % 400 === 0) {
//             console.log(year + "Kabisa yili");
//         }
//         else {
//             console.log(year + "Kabisa yili emas");
//         }
//     }
// }
// KabisaYiliniXisoblash(2020 , 2023)

// // console.log(365 * 4);






