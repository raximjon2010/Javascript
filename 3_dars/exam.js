
// ----------------------------- 1 -exam ------------------------------------------
// let number = -1;
// if(number < 0){
//     console.log("Manfiy sonlar");
// }else{
//     console.log("Musbat sonlar");
// }
// ----------------------------- 2 - exam ------------------------------------------
// let number2 = 10;
// if (number2 % 2 ===0){
//     console.log("Juft son");
// }
// else{
//     console.log("Toq son");
// }
// ----------------------------- 3 - exam ------------------------------------------
// /*let hafta = 3;
// if (hafta < 1){
//     console.log("Bunaqa kun yo'q");
// }
// else if(hafta == 1){
//     console.log("Dushanba");
// }
// else if (hafta == 2){
//     console.log("Sheshanba");
// }
// else if (hafta == 3){
//     console.log("Chorshaba");
// }
// else if(hafta == 4){
//     console.log("Payshanba");
// }
// else if (hafta == 5){
//     console.log("Juma");
// }
// else if(hafta == 6){
//     console.log("Shanba");
// }
// else if(hafta == 7){
//     console.log("Yakshanba");
// }
// ----------------------------- 4 - exam ------------------------------------------
// let number3 = -1;
// let number3_wrapper = 2;
// if(number3 > 0){
//     console.log(number3 + number3_wrapper );
// }
// else{
//     console.log(number3 - number3_wrapper);

// }
// ----------------------------- 5 - exam ------------------------------------------
// let A = 5;
// let B = 3;

// if (A < 2 && B >= -2) {
//     console.log("A < 2 ve B >= -2 Shart bajarildi");
// } else {
//     console.log("A < 2 ve B >= -2 Shart bajarilmadi");
// }

// if (A > 0) {
//     A += 2;
// } else {
//     A -= 2;
// }
// console.log("A sonucu: " + A);

// ----------------------------- 6 - exam ------------------------------------------
// let A = 1;
// let B = 3;

// if (A < 2 && B >= -2) {
//     console.log("Shart bajarildi");
// } else {
//     console.log("Shart bajarilmadi");
// }
// ----------------------------- 7 - exam ------------------------------------------
// let A = 3;
// let B = 4;
// if(A>B){
//     console.log("A katta B dan ");
// }
// else {
//     console.log("B katta A dan");
// }
// ----------------------------- 8 - exam ------------------------------------------

// let A = 3.14;
// let B = 2.71;
// if (A % 1 < B % 1){
//     console.log("B ning qoldigi katta");
// }
// else if(A % 1 > B % 1){
//     console.log("A ning qoldiga katta");
// }
// else {
//     console.log("A va B ning qolgigi teng ");
// }
// -----------------------------9 - exam ------------------------------------------
// let A = 10;
// let B = 20;
// let C = 30;
// if(A === B){
//     console.log("A va B shartlar bir biriga togri keladi");
// }
// else if(B === C){
//     console.log("B va C shartlar bir birga togri keladi");
// }
// else if(A === C){
//     console.log("A va C bir biriga togri keladi");
// }
// else {
//     console.log("Bu shartlar bir biriga togri kelmaydi");
// }
// -----------------------------10 - exam ------------------------------------------
// let A = 14;
// let B = 12;
// let C = 15;
// if(A > B && C > B){
//     console.log("O'rtada B turibdi");
// }
// else {
//     console.log("B ortada turgani yuq");
// } // Bu yerda B ortadami yoki yuqligini bilish uchun B doim A va C dan kichik bolishi kerak 
// SHunda B ni ortada turganini bilsak boladi.
// -----------------------------11 - exam ------------------------------------------
// let A = -1;
// let B = -3;
// let C = 5;
// // ---------------------- A son ------------------------------------------------
// console.log("---------------------- A son -----------------");
// if (A < 0){
//     console.log("A Manfiy son");
// }
// else{
//     console.log("A manfiy son emas");
// }

// if (A < 0){
//     console.log("A 1 ta manfiy son");
// }

// else {
//     console.log("A manfiy son emas");
// }
// // ---------------------- B son ------------------------------------------------
// console.log("---------------------- B son -----------------");

//  if (B < 0){
//     console.log("B Manfiy son");
// }
// else {
//     console.log("Bu yerda manfiy son yuq");
// }
// if(B < 0){
//     console.log("B 1 manfiy son");
// }
// else {
//     console.log("B manfiy son emas");
// }
// // ---------------------- C son ------------------------------------------------
// console.log("---------------------- C son -----------------");

//  if (C < 0){
//     console.log("C Manfiy son");
// }
// else {
//     console.log("Bu yerda manfiy son yuq");
// }

// if(C < 0){
//     console.log("C 1 manfiy son");
// }
// else{
//     console.log("C manfiy son emas");
// }
// -----------------------------12 - exam ------------------------------------------

// let A = 5;
// let B = 10;
// let C = 7;

// if (A > B && A > C) {
//     if (B > C) {
//         console.log(A + B);
//     } else {
//         console.log(A + C);
//     }
// } else if (B > A && B > C) {
//     if (A > C) {
//         console.log(B + A);
//     } else {
//         console.log(B + C);
//     }
// } else if (C > A && C > B) {
//     if (A > B) {
//         console.log(C + A);
//     } else {
//         console.log(C + B);
//     }
// }
// -----------------------------13 - exam ------------------------------------------

// function isPrime(number) {
//     if (number <= 1) { // Son manfiy yoki 1 ga teng bo'lsa
//       return false;
//     } else if (number <= 3) { // Son 2 yoki 3 ga teng yoki kichik bo'lsa
//       return true;
//     } else if (number % 2 === 0 || number % 3 === 0) { // Son 2 yoki 3 ga qoldiqsiz bo'linsa
//       return false;
//     }
    
//     let i = 5;
    
//     while (i * i <= number) {
//       if (number % i === 0 || number % (i + 2) === 0) {
//         return false;
//       }
//       i +=6;
//      }
     
//      return true; // Tub son
//   }
  
//   let A = prompt("Son kiriting:");
//   if(isPrime(A)){
//      console.log(A + " tub son");
//   } else {
//      console.log(A + " tub son emas");
//   }
// -----------------------------14 - exam ------------------------------------------
// let A = 4;
// let B = 10;
// if(A % 2 === 0 && B % 2 == 0){
//     console.log("Bu sonlar juft son");
// }
// else{
//     console.log("Bu sonlar toq sonlar");
// }
// -----------------------------15 - exam ------------------------------------------
// let A = 5;
// let B = 9;
// if(A % 2 == 1){
//     console.log(" A Toq son");
// }
// else {
//     console.log("A Bu son toq son emas");
// }
// if(B % 2 === 1){
//     console.log(" B Toq son");
// }
// else{
//     console.log(" A Bu son toq son emas");
// }
// -----------------------------16 - exam ------------------------------------------
// let A = -1;
// let B = -3;
// let C = -2;
// if(A < 0 && B < 0 && C < 0){
//     console.log("Bu sonlar musbat sonlar");
// }
// else {
//     console.log("Bu sonlar musbat sonlar emas");
// }
// -----------------------------17 - exam ------------------------------------------
// let A = 20;
// if(A % 2 === 0 && A >= 10){
//     console.log("bu son 2 xonali va 2 ga bolinadi");
// }
// else {
//     console.log("Bu son 2 xonali emas va 2 ga bolinmaydi");
// }
// -----------------------------18 - exam ------------------------------------------
// let A = 113;
// if(A % 2 == 1 && A >= 100){
//     console.log("Bu son tog son va 3 xonali son");
// }
// else {
//     console.log("Bu son 3 xonali emas va tog son ham emas");
// }
// -----------------------------19 - exam ------------------------------------------
// let a = 3;
// let b = 2;
// let c = 2;
// if(a === b && b === c && a === c ){
//     console.log("Bu uch xonali sonlarni raqami bir xil ekanligi aniqlandi");
// }
// else {
//     console.log("Bu uch xonali sonlarni raqami har xil ekanligi aniqlandi.");
// }
// -----------------------------20 - exam ------------------------------------------
// let a = -1;
// if(a < 0){
//     console.log("Bu son musbat");
// }
// else {
//     console.log("Bu son musbat emas");
// }
// if(a >= 1 && a < 10 ){
//     console.log("Bu 1 xonali sonn");
// }
// else if(a >= 10 && a < 100 ){
//     console.log("bu 2 xonali son");
// }
// else if(a <= 999 && a >= 100){
//     console.log("Bu 3 xonali raqam");
// }
// else {
//     console.log("Bunaqa raqam bu yerda yuq");
// }
// -----------------------------21 - exam ------------------------------------------
// let A = 123;
// let B = 122;
// let C = 121;
// if(A < B && B < C){
//     console.log("Bu raqam o'shish tartibida");
// }
// else if(A > B && B > C){
//     console.log("Bu raqam kamayish tartibida");
// }else{
//     console.log("Sonlar tasodifiy tartibda");
// }
// -----------------------------22 - exam ------------------------------------------
// let son = 1234;

// if(son > son){
//     console.log('raqam chapdan ong tarafga qarab oqilyapti');
// }
// else if(son < son ){
//     console.log("raqam chapdan onga qarab oqilyapti");
// }
// else {
//     console.log("raqam oqilmayapti");
// }
// -----------------------------23 - exam ------------------------------------------

// let son = 1234;

// if (son % 10 === parseInt(son / 1000) % 10 && parseInt(son / 10) % 10 === parseInt(son / 100) % 10) {
//     console.log("Bir xil");
// } else {
//     console.log("Bir xil emas");
// }
// -----------------------------24 - exam ------------------------------------------
// let x = 3; // X koordinatasi
// let y = 6; // Y koordinatasi

// // Qora katakning koordinatalari 1-8 oralig'ida
// var qoraKatakKoordinatalari = [
//   ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'],
//   ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
//   ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6' , 'h6'],
//   ['a5', 'b5','c5','d5','e5','f5','g5','h5'],
//   ['a4','b4','c4','d4','e4','f4','g4' ,'h4'],
//   ['a3' ,'b3' ,'c3' ,'d3' ,'e3' ,'f3' ,'g3' ,'h3'],
//   ['a2' ,'b2 ','c2 ','d2 ','e2 ','f2 ','g2 ','h2'],
//   ['a1 ','b1 ','c1 ','d1 ','e1 ','f1 ','g1 ','h1']
// ];

// // X va Y sonlariga mos keluvchi qora katakni topish
// var qoraKatak = qoraKatakKoordinatalari[y-1][x-1];

// console.log("X va Y sonlari uchun qora katak: " + qoraKatak);
// -----------------------------25 - exam ------------------------------------------
// let X1 = 3;
// let Y1 = 5;
// let X2 = 4;
// let Y2 = 6;

// if ((X1 + Y1) % 2 == (X2 + Y2) % 2) {
//     console.log("Bir xil rangdagi katakdalar");
// } else {
//     console.log("Turli rangdagi katakdalar");
// }
// -----------------------------26 - exam ------------------------------------------
// let X1 = 3;
// let Y1 = 5;
// let X2 = 4;
// let Y2 = 6;
// if (X1 === X2 || Y1 === Y2) {
//     console.log("Ular bir xil rangdagi katekda yurishadi");
//  } else {
//     console.log("Ular bir xil rangdagi katekda yurmaydi");
//  }
// -----------------------------27 - exam ------------------------------------------
// let filX = 4; // Filning x koordinatasi
// let filY = 4; // Filning y koordinatasi

// let hedefX = 8; // Hedefning x koordinatasi
// let hedefY = 8; // Hedefning y koordinatasi

// if (Math.abs(filX - hedefX) === Math.abs(filY - hedefY)) {
//     console.log("Fil hedefga o'tish mumkin");
// } else {
//     console.log("Fil hedefga o'tish imkonsiz");
// }

// -----------------------------28 - exam ------------------------------------------
// let x = 4; // Farzin boshlang'ich x koordinatasi
// let y = 4; // Farzin boshlang'ich y koordinatasi

// // Agar o'nlik koordinatalarida o'nga yurishni hohlaysiz
// if (someCondition) {
//   x += 2; // O'nlik x koordinatasini 2 ga oshiramiz
// }
// // Agar o'nlik koordinatalarida tepaga yurishni hohlaysiz
// else if (someOtherCondition) {
//   y -= 2; // O'nlik y koordinatasini 2 ga kamaytiramiz
// }

// // Boshqa holatlarda bergan if-else shartlari bilan yakunlaymiz

// // Natijada yangi x va y koordinatalarini ekranga chiqaramiz
// console.log("Farzinni yangi joylashuvi: (" + x + ", " + y + ")");
// -----------------------------29 exam -----------------------------------------
// let K = 365;
// let N  = 7;
// if(N >= 1 && N <= 7){
//     console.log("");
// } // Uztoz bunga tushunmadim Yozilgan matnlari xatomi tushunmadim nimani surayotganini