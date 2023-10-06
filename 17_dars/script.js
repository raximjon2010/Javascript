// Closure
// let Parent  = () => {
//     let name = "Rahimjon";
//     let child = () => {
//         console.log(name);
//     }
//     child()
// }
// Parent() // shu narsa closure deyiladi yani biz function ichida ozgaruvchi yozib uni ichida yana bitta function ochib 
// keyin shu ozgaruvchini child functionda chaqirishimiz clourse
// ===================================================================================================================
// let name = "Rahimjon";
// let child = () => {
//     console.log(name);
// }
// child() // Manashu biz yaratayotgan holatimiz leksikal scope deyiladi 
// ===================================================================================================================
// let name = "Rahimjon";
// function MyFUnc() {
//     let message = "Hi"
//     console.log(name, message);
// }
// MyFUnc() // Bu ishlaydi odatdakidek ishlaydi yani bu scope biz tashqarida ozgaruvchi ochib uni function ichida ishlatomaiz lekin function ichida
// ochilgan ozgaruvchini tashqarida chaqira olmaymiz bu is not defined beradi
// ===========================================================================================================================
// JSON => javascript object notation
// 1-Configurations of project
// 2-Backend bilan frontend malumot almashganda
// Buni biz objectga oxshatsak ham boladi yani buni biz backend bilan ishlaganda yani backendga malumot junatganda
// Bu har qanday dasturlash tili bilan ishlaydi. Va bu kam joy egallaydi
//////////////////////////////////////////////////////////////////////////////////////////////////
//  let JSON = [
//     {
//         "name": "Rahimjon",
//         "surnamme": "Xujaqulov",
//         "age": 13,
//         "hobbies": "Web Programera"
//     },
//     {
//         "name": "Kamron",
//         "surname": "Toshpulatov",
//         "age": 13,
//         "hobbies":"Web Programera"
//     },
//     {
//         "name": "Muxriddin",
//         "surname": "Mardiev",
//         "age": 14,
//         "hobbies": "football"
//     },
//     {
//         "hobbies" : ["football"]
//     },
//     {
//         "hobbies" : ["football"]
//     },
//     {
//         "hobbies" : ["football"]
//     },
//     {
//         "hobbies" : ["football"]
    // }
// ] // Biz JSON ni faqat {} shu orqali ochamiz unga nom bermaymiz va biz uni key va valuelarini "" shunday yozamiz
// Bolmasa eror beradi. Bu yogiga endi malumotlar JSON da boladi
// endi buni malumotlarini ham chaqirishimiz uchun
// console.log(JSON[0]);
// console.log(JSON[1]);
// console.log(JSON[2]); // Bu yulda biz JSON imizni chaqirishimiz mumkun va biz nechta {} shunda yozsak
// biz [0] desak bizga shularni 0 chisini chiqarib beradi bu index yani noldan boshlanadi 
// keyin yana bitta narsa biz buni [0] deb chaqira olayamizmi demak bu tartibliga kiradi
// eni bu ichida yana bitta JSON bolsa uni ichda yana bitta array bolsa uni qanday chaqiramiz desak
// console.log(JSON[3].hobbies[0]);
// console.log(JSON[4].hobbies[0]);
// console.log(JSON[5].hobbies[0]); // Shunday qilib nuqta orqali yonidan yozib kirsak boladi

// Biz kirishni ham kordik endi biz JSON objectga va objectni JSON o'tkazish uchun bu yoldan foydalanamiz
// let obj  = {
//     name: "rahimjon",
//     surname: "Xujaqulov"
// }
// let toJSON = JSON.stringify(obj) // Bu bizga JSON ga otkazib beradi
// let toObj = JSON.parse(toJSON) // bu endi bizga qaytarib obj qilib quyadi
// console.log(toJSON);
// ///////////////////////////////////////////////////////////////////////////////////////////////
// Module - Bu bizga bitta fayldan turrib ikkinchi faylga malumot otkazib uni u yerda ishlatish imkoni beradi

// =========================================================
// 1-yuli bu impor qilishni
// import {name} from "./script.mjs"
// console.log(name); // Mana biz buni boshqa bir fayldan shunday chiqarsak boladi bu birimnchi yuli edi
// =========================================================
// functionni import va export qilish
// export let ExporFunction = (a,b,c) => {
//     console.log(a + b + c);
// }

// import {ExporFunction} from './script.mjs'
// console.log(ExporFunction(10,20,30)); // bu yulda biz functionlarni
// import va export qilamiz
// =========================================================
// let ExporFunction = (a,b,c) => {
//     console.log(a + b + c);
// }
// export default ExporFunction

// import xoxlagan from './script.mjs'
// console.log(xoxlagan(10,20,10));
// Bu default export buni biz export qilgandan keyin uni export qiladiganda
// ozini nomi orqali export boladi va import qiladigan vaqt uni hohlagan
// nom bilan yozsak boladi va bu faqat script fayni ichida bitta 
// function bolsa ishlaydi 
//=================================================================
// let name = "test";
// let ExporFunction = (a,b,c) => {
//    console.log(a + b + c);
// }

// export {name,ExporFunction}
// import {name,ExporFunction} from './script.mjs'
// ExporFunction(10,20,10);
// console.log(name);
// bu usulda ikkita uchta va hohlagancha exprot qilib import qilsak boladi
// =================================================================================================
// prototype
// Bu biz global metod yaratishimiz uchun, string uchun array uchun, number uchun biz o'zimiz metod yaratib ishlatishimiz
// mumkun.
// let obj = {
//     name: "rahimjon",
//     surname: "Xujaqulov",
//     getAge () {
//         console.log("getAge");
//     }
// } // Bizda bitta obj bor biz uni brauzer consoleda obj desak bizga ichdagi malumotlarini chiqarib beradi 
// keyin biz bitta paga tsusak prototype degani bor shuni ichiga kirsak biz barcha global bolgan metodlarni chiqarib 
// beradi. Biz keyin obj.MyMethod() deb yozsak brauzer console bizga is not defined beradi chunki
// bunaqa method yuq endi biz ozimiz ham shu protoypega global object method qushishmiz mukun.

// Object.prototype.MyMethod = () => {
//     console.log("Mymethod()");
// } // Object deb yozganimzni sababi o'zi javascriptda ham objectga o'ralgan biz Objet.prototype deb ochsak 
// bu bizga holgan data type bilan bilan ishlashimiz mumkun. prototype.Mymethod bu nomi biz shunday nomi berdik
// va function yaratdik endi biz uni ichiga hohlagan locik yozishimiz mumkun

// let num = 10; // number bilan ham ishlatishimiz mukun eni biz Methodimizni
// let str = "John doe" // string bilan ham ishlatishimiz mukun endi Methodimizni
// let arr = [1,2,3,4,5] // array bilan ham ishlatishimiz mukun
// obj.MyMethod(); // endi biz uni chaqiramiz nomi orqali methodimiz ichiga nima yozilgan bolsa shuni chiqarib beradi
// num.MyMethod();  
// str.MyMethod();
// str.MyMethod();
// Biz object da prototype ochsak bu global boladi.
// ==============================================
// array metod yaratish
// Array.prototype.ArrayMethod = () => {
//     return arr.filter((value, index) => arr.indexOf(value) === index);
// }
// let arr = [1,2,1,2]
// console.log(arr.ArrayMethod()); // biz bu yulda arrni duplicatelrini uchiradigan method 
// yaratdik
// ==============================================
// stringga metod qushish
// String.prototype.UpperCase = () => {
//     let sum = ""
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i].toUpperCase()) {
//             sum += str[i]
//         }
//     }
//     return sum
// }
// let str = "RAhimJON"
// console.log(str.UpperCase());
// ==============================================
// numberga metod qushish
// Number.prototype.random = () => {
//     return parseInt(Math.random() * 1000000000)
// }

// let num = new Number()
// console.log(num.random());
// ====================================================================================================
// OOP => Object oriented programming
// Biz project qilganimizda asosan functional programingga asoslanib qilamiz yokida
// OOP deganda class lar nazarda tutuladi Objectga yunaltirilgan programming
// endi biz qaysi birini ishlatamiz desak  biz agar juda katta project ustida ishlayotgan bolsa biz OOP dan foydalanimiz
// Masalan bitta davlatni Malumotlari bolsa// OOP programinga asoslanib qilamiz

// 1-paradigm => Functional programming biz xozirgacha organib kelganimiz bu functional Programing bunda codelar 
// function ichida yoziladi. Agar functionlarda kotarilsa bu function boladi

// 2-paradigm => OOP programming => Abstraction, Encapsulation, Inheritance, Polymorphism
// Agar biz Object orinded programingda qiladaigan bolsak qanaqadir tasklar class da qilamiz OOP da funcsiyalar
// class ni ichida keladi. Agar bizda class lar bilan project kotarilsa bu OOP boladi

// javascript is Multi paradigm and prototype based programing language

// class => reusable object yaratish uchun template(shablon) xisoblanadi, chaqirilishda "new" constructori orqali chaqiriladi
// constructor(name) => class ning parametrlari beriladi, "this" orqali global qilib olinadi.
// class AvtoSalon   {
//     constructor (Gentra, Cobalt, Damas, Tracker, Malibu){
//         this.Gentra = Gentra,
//         this.Cobalt = Cobalt,
//         this.Damas = Damas,
//         this.Malibu = Malibu
//         this.Tracker = Tracker
    // }
    //  AvtoSalonJoylashish = () => {
    //     return `${this.Gentra}`
    //     return `${this.Cobalt}`
    //     return `${this.Damas}`
    //     return `${this.Malibu}`
    //     return `${this.Tracker}`
    //  }
    
// }
// let Mashinalar1 = new AvtoSalon(
//     {name: "Gentra", color: "black", engine: 2, year: 2023},
//     {name: "Cobalt", color: "white", engine: 2.5, year: "Yangi"},
//     {name: "Damas", color: "White", engine: 1.5, year: 2022},
//     {name: "Malibu", color: "black", engine: 3, year: 2023},
//     {name: "Tracker", color: "black", engine: 3.5, year: 2022},
// )
// let Mashinalar2 = new AvtoSalon(
//     {name: "Matiz", color: "white", engine: 1, year: 2013},
//     {name: "Tico", color: "red", engine: 1, year: 2008},
//     {name: "Damas", color: "White", engine: 1.5, year: 2017},
//     {name: "Nexia", color: "white", engine: 1.2, year: 2016},
//     {name: "Jiuli", color: "red", engine: 1, year: 2000},
// )
// Mashinalar1.AvtoSalonJoylashish();
// console.log(Mashinalar1);
// console.log(Mashinalar2);
// Shu xolatda biz class lardan foydalanib ishlashimiz mukun keyin biz bunda bitta classni yozib
// uni nomini ozgartirib  xooxlagancha ishlatishimiz mumkun 
// ====================================================================================================
// constructor function

// function MyFunction(name, surname) {
    // this.name = name
    // this.surname = surname
// }
// const MyFunction1 = new MyFunction("rahimjon", "xujaqulov")
// let MyFunction2 = new MyFunction("Xujaqulov" , "Rahimjon")
// console.log(MyFunction2);
// console.log(MyFunction1); // Buni biz huddi class ga uxshatsak boladi bu ham reusezble  boladi
// console.log(MyFunction1.name);
// console.log(MyFunction1.surname);

// console.log(typeof MyFunction1); // Biz new constructorda nom berib functionimizga argument berib 
// typeof Myfunction1 deb kursak bu object qaytaradi 
// console.log(typeof MyFunction); // endi biz functionni uzini yani functionni nomini typeof
//  qilsak bu function qaytaradi



















// function Mashina(name, color) {
//     this.name = name;
//     this.color = color;
// }

// const mashina1 = new Mashina("Jentra", "Qora");

// console.log(mashina1.name);
// console.log(mashina1.color);

// console.log(typeof Mashina);
// console.log(typeof mashina1);


