// let x = 10;
// let y = 10;
// let string = "x + y"

// Endi manashuni qanday qilib qilib qushishimiz mumkun desak buni biz evalda qilsak boladi

// console.log(`${x} + ${y} =`, x + y); // Bu yulda ham qilsak boladi faqat bu yulda x + y cosnole.log() ni ichida yoziladi
// console.log(eval(string)); // Bu yulda qilsak bu juda chunarli ham yaxshi boladi
//////////////////////////////////////////////////////////////////////////////////////////////////////

// let num = 101010101010101001010;  // ikkilik sanoq sistemasi
// console.log(parseInt(num, 2));
// Bu bizga ikkilik sanoq sistemasida chiqarib beradi Masalan 2728 qilib chiqarib bebradi

// let num = 2728;

// console.log(num.toString(2));
////////////////////////////////////////////////////////////////////////////////////////////////////////

// scope => Block, Global, Function 

// var, let , const with function scope // Bu function scope var let const qiymatlarini qabul qiladi

//  let num = 10;
// console.log(num); // Bu 10 chiqadi chunki numni uzini chaqiryapti

// function myFunc() {
//     num = 15 // tashqaridagi numni qiymatini update qiladi. bu 15 bolib qoladi
// }

// console.log(num); // 10chiqadi chunki bizda function qachon chaqirilsa keyin ishlaydi 
// myFunc(); // Bu faqat chaqirildi bunda ham 15 chiqmedi qachonki endi biz console.log()ni num qilsak 
// // shunda bizarga bizga update bolgan qiymat keladi
// console.log(num); //15 chiqadi biz myFunct() dan keyin yozdik shuning uchun.
// keyin yana biz qiymatni update qilsakgina biz uni tashqarida chaqira olamiz bulmasa yuq
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// const num = 10; 

// function myFunc() {
    //  const num = 20; // function ichida ochilgan o'zgaruvchi hech qachon tashqarida console.log() qilsa ishlamaydi
    // console.log(num); // faqat function ichida ishlaydi lekin update qilinsa tashqarida ishlaydi
// }
// console.log(num); // biz function ichida ochilgan ozgaruvchini undan tashqaradi chiqara olmaymiz num is not defined beradi hech qachon buni var da qilsak ham bu ishlamaydi

// myFunc(); // bu esa 20 chiqadi chunki biz function ichida num deb ozgaruvchi ochdik shuni shuni chiqarib beradi
// console.log(num); // 10 chiqadi chunki yuqoridagi numni qiymatini chiqaradi
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// block scope => {}, for/while/do while/for in/ for of, if else // Hammasi block scoped umuman oganda 
// funciondan tashqari {} shu belgi block scoped deyiladi
// Bizarda ozi block scoped let const 
// if (true) {
    // var num = 10;
    // let num = 20;
    // const num = 10; // Bulardan cosnt bilan let  is not defined beradi chunki bularni tashqarida ishlata olmaymiz
    // var esa global uni ishlata olamiz shuning uchun ham block scoped let const deyilgan
// }
// console.log(num);

// for (var i = 0; i < 10; i++){
    
// }
// console.log(i); var bu for mavzusida ham aytib ketilgan yaniy global deb let deb ochilsa uni faqat shuni 
// ichida ishlataolamiz var desa bu umumiy qiymatni yaniy i ni hamma qiymatini yigib chiqarib beradi

// function scoped variables  => var, let, const // Menimcha shunday qilib function scopedda hech qaysi
// ishlamagani uchun var let const deyilgan
// block scoped variables => let, const // bunda faqat let const ishlamaydi var ishlaydi 
// global scoped variable => var bu esa global function scopedan tashqari hamma joyda ishlab ketadi
// //////////////////////////////////////////////////////////////////////////////////////////////////

// call/apply/bind => this context ni boshqa bir object ga yunaltirib beradi
// yaniy bizga this bu object ichida bolsa obj ni oziga teng boladi Endi biz this orqali ana shu objni
// ichidagi hohlagan malumotni olishimiz mumkun edi Biz endi shu objectdan emas boshqa bir objni olmoqchi bolsak
// call apple bind dan foydalansak boladi.

// let obj1 = {
//     id: 1,
//     myFunc(age,status){
//         console.log(this.name, `age: ${age} status: ${status}`);
//     }
// }
// let obj2 = {
//     name: "Rahimjon"
// }
// obj1.myFunc.call(obj2, 13,"Developer"); // biz bu yerda parametr ham argument berib qusib quysak ham boladi
// Biz shu yulda boshqa bir objectga yunaltirsak boladi

// obj1.myFunc.apply(obj2,[ 25, "Developer"]) // Biz buni call daqa yoza olmaymiz bunda eror beradi biz argument yozadigan 
// vaqtimiz buni biz array qavsiga o'rab quyishimiz kerak.

// obj1.myFunc.bind(obj2, 25, "Rahimjon")() // Bu ham xuddi call dek ishlaydi syntaxt shunday lekin bunga () quyib ketishimiz kerak
// let bined = obj1.myFunc.bind(obj2)
// bined() // Biz bu xolatda ham yozib ketsak boladi.

///////////////////////////////////////////////////////////////////////////////////////////////////////
// for of

// let arr = [1, 2, 3, 4, 5];
// let str = 'webbrain';
// for(let letters of arr){
//     console.log(arr);
// } // Biz buni array for lop desak boladi biz array ichidagi malumot nechtaligini bilsak boladi 
// keyin arrayni ozini nomini yozsak malumoti qancha bolsa uni hammasini bitta arrayga solib shuncha qilib chiqariab beradi
// buni string bilan ishlatsaa uni harflarini alohida qilib chiqarsa boladi for loop ni ozida bunga ozroq kod yozish kerak edi

/////////////////////////////////////////////////////////////////////
// let obj = {
//     name: 'John',
//     id:1
// }

// console.log('id' in obj);

// let str = 'w2b4b3b6b1';
// terminal => 16

// let sum = 0;

// for (let i = 0; i < str.length; i++){
    
//     if (+str[i] == str[i]) {
//         sum += parseInt(str[i])
//     }
    
// }


// console.log(sum);

// let str = 'CABDCA';

// // terminal => A
// let count = {}

// for (let i = 0; i < str.length; i++) {
//     let element = str[i];
//         count[element] = (count[element] | 0 ) + 1
// }
// console.log(count);