// IIFE => immidiately invoked function expression
// Biz buni yozish orqali functionlarni nomini yozmay chaqirishimiz mukun Bu ham huddi functionday ishlaydi lekin
// Buni vazifasi boshqa
// Biz bitta project ustida ishlayapmiz projectlarda faqat bitta papkani ichida bitta javascript fayli bolmaydi 
// Agar bizda bitta function bolsa uni var bilan elon qilgan bolsak Biz uni brazurlarda 
// olishimiz kerak. Biz uni HTML fayl bilan ulasak va brauzer console da uni MyFunc() deb nomi 
// orqali chaqirsak Bizga 2-chiqaradi chunki biz uni HTMl bilan ulasak qaysini birinchi yozgan bolsa uni emas
// Undan keyingisini chiqaradi. CHunki birinchini tekshiradi ikkinchini tekshiradi va ikkalsi bir xil boldimi 
// oxiridagini oladi. Bu Objectda ham shu edi.
// endi buni biz muomoni hal qilsihimiz uchun IIFE orab quyishimiz kerak
// (() => {
    // var MyFunc = () => {
        // console.log("Script1");
    // }  
    // MyFunc()
// }) ()
//syntax

// ((name => {
//    console.log("Hello world");
// }))()
// ((name) => {
//     console.log("Hello world");
// })()
// ((name) => {
//     console.log("Rahimjon");
// })() // Bu callback IIFE deyiladi bunga ham argument va parametr berib ketsak boladi

// //////////////////////////////////

// (function (name) {
//     console.log("Rahimjon",name);
// }) ("Xujaqulov")
// (function (surname) {
//     console.log("Rahimjon" , surname);
// }) ("Xujaqulov")
// (function (world) {
//     console.log("Hello" , world);
// }) ("World")
// Bu Function exspiression da yozilgan sytax bu ham parametr va argument oladi

// //////////////////////////////////

// (function name(world) {
//     console.log("Hello", world);
// }) ("World")
// Bu declare usulda yozilgan IIFE
////////////////////////////////////////////////////////////////////////////
// getter/setter
// Buni ishlatib functionni qiymatini ozgartirsak boladi Bu object ichidagi functionni qiymatini ozgartirish imkoni beradi
// const obj = {
//     firstname: 'John',
//     lastname: 'Doe',
//     age: 20,
    // Biz endi shuni funcyionda this orqali chaqiramiz
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//     get fullname() {
//         return `${this.firstname} ${this.lastname} ${this.age}` // Biz bu funksiya ichiga object qiymatlarini 
// chaqirib oldik. 
//     },
// Bu yerda get deb yozilganini sababi biz oldiga get deb yozib ketsak bu bizga uni chiqriganda yani funcsiyani 
// chaqirganda biz uni oldiga () shuni quyishimiz shar bolmaydi Keyin bu bizga update qiladigan vaqt
// obj.Myfunct = "" shu xolatda yozish imkonini beradi Biz setda endi uni update qilamiz

// set fullname(value) { // bu yerda set dedik yani update qilamiz fullname nargin funksiyamizni nomi 
// va biz bunga parametr berishimiz kerak shu parametr orqali biz funksiyamizni ichidagi malumotni update qilaolamiz
//         const values = value.split(" "); // bu yerda biz split orqali stringga uzgirib olamiz
//         this.firstname = values[0]; // enid values ni 0 chi indexga firsname ni quyamiz 
//         this.lastname = values[1]; // Endi lastname ni values ni 1 chisiga quyamiz va valuedagi qiymatlar buni orniga keladi
//         // this.age = value; // biz bu xolatda yozsak ham boladi
//     }
// }

// obj.fullname = 'test test'; // Biz bu yerda fullnameni argumentini beryapmiz
// console.log(obj.fullname);


// get => obj ichidagi metodni oddiy property korinishida chaqirishga imkon yaratadi
// set => obj ichidagi function qiymatini tawqaridan update qilish imkonini beradi


// higher ordered functions 
// Bu map, filter, some, sort...
// higher oreder function => biror bir function boshqa bir function ni parametr sifatida qabul qila olsa => map, foreach, sort, filter....
// callback function => biror bir function da parametr yoki argument sifatida keladigan function
 
// const numbers = [1, 2, 3, 4, 5];
// function arr(arr) {
//     for (let i = 0; i < arr.length; i++){
//         console.log(arr[i] + 1);
//     }
// } // Shu array ichdagi raqamlarni qiymatini birga kopaytirb beradi.
// addOne(numbers);

// numbers.forEach((value) => console.log(value + 1)); // Bu shuni qisqa yuli yani console.log() qilib 
// valueni qiymati bizda arr shu arrayni bizga birga kopayturb beradi Yani 1 = 2

// curry function

// non curried version
// const add = (a, b, c) => {
//     return a + b + c
// }

// console.log(add(1, 2, 3)); // Bu currymas function bu odatdagidik ishlayd

// curry function
// Bu curray function Biz bunga odddiyroq misol bilan korsak
// let Example = (a) => {
//     return (b) => {
//         return (c) =>{
//             return a + b + c
//         }
//     }
// }
// console.log(Example(1)(2)(3)); // Bu oddiy usuli yaniy bizga raqamlarni qushib beradi Buni biz keyinchalik 
// senxron asenxronda yaxshi tushunib olamiz bu shunchaki syntax

// const sendRequest = (greet) => {
//     return (name) => {
//         return (message) => {
//             console.log(`${greet} ${name} ${message}`);
//         }
//     }
// }


// sendRequest('Salom')('John')('Iltimos meni gruppaga qushib quy');

