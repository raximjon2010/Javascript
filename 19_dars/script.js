// handling http requests
// callback function

// function doSomething(callback) {
//     // vazifalar yoki operatsiyalarni bajarish
//     // qayta qo'ng'iroq qilish funktsiyasini chaqiring
//     callback()
// }

// function callbackFunction() {
//     console.log('callback function yuryapti.....');
// } 
// doSomething(callbackFunction);
// Biz bu  functionni parametrni function ichida chaqirsa keyin biz argument bergan functionni ichidagi
// malumotni olib beradi

// doSomething((data) => {
//     console.log(data);
// });

// sinxron callback - Bu ketma ketlik buyicha ishlatib beradi. yani single thread boladi. Va bu bitta code 
// ishlamasa block qilib quyadi
// function doSomething(callback) {
//     console.log(1);
//     callbck(); // Budda xatolik ketsa undan keyingi codelarni block qilib tashlaydi. undan oldingi code ishlaydi
//     console.log(2); 
// }

// function callbackFunction() {
//     console.log('Callback is running...');
// } // Bu function callbackni argumenti bolib keladi. 

// doSomething(callbackFunction); // Huddi shu xolat sinxron callback deyiladi 
// Yaniy bu singl thread bulyapti Birin ketin ishlatib beradi.

// asinxron callback - bu masalan callback()ni 1 secundan keyin chaqirsin desak bu asinxron boladi
// bunda qaysi birinchi ishlashini ozimiz yozishimz kerak boladi

// function doSomething(callback) {
//     console.log(1); //bu yerda birnchi bolib shu chiqadi 
    
//     setTimeout(() => {
//         callback();
//     }, 1000) //  ha bu vaqt olar ekan keyingisi chiqadi. Va vaqti tugagandan keyin chiqadi
    
//     console.log(2); // bu chiqadi
// }

// function callbackFunction() {
//     console.log('Callback is running...');
// }
// doSomething(callbackFunction);

// console.log('Started....');
// endi xuddi shu xolat asinxron callback boladi

// let users = {
//     id: 1,
//     name: 'test',
//     pw: 200
// }

// const facebook = (username, password, callback) => {
    
//     setTimeout(() => {
        
//         if (users.name === username && users.pw === password) {
//             callback('Saxifangizga xush kelipsiz')
//         } else {
//             callback('something wrong!')
//         }
        
//     }, 1000)
    
// }

// function getResponse(data) {
//     console.log(data);
// }

// facebook('test', 20, (data) => {
//     console.log(data);
//     console.log('finished...');
// });

// promises
// state => pending, fulfilled, rejected
// resolve bu true bolgandagi xolatni yozish uchun 
// rejected - false bolgandagi xolatni yozish uchun

// const myPromise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve('Saxifaga xush kelipsiz') // yaniy bu truemi demak bizga resolveni chiqaradi chunki resolve true bolgan holat uchun
//     } else {
//         reject('somethind is wrong!')
//     }
// })


// myPromise
// .then((value) => { // biz bunda true bolgan holatni chiqarish uchun ishlatsak boladi
//     console.log(value);
// })
// .catch((error) => { // catch false bolgan holatni chiqarish uchun ishlatsak boladi.
//     console.log(error);
// })
// then catch orqali qiladigan bosak har doim yanabitta function bolsa yan then qilib 
// yozishimiz ga tugri keladi shuning uchun biz buni yanadan soddalashtirihs uchun async/await kerak boladi
// console.log(myPromise);

// let obj = {
//     name: 'rahimjon',
//     id: 1,
//     password: 2010
// }
// let facebook = (username, pw) => {
//     return new Promise((resolve, reject) => {
//         if (obj.name === username && obj.password === pw) {
//             resolve("Saxifangizga xush kelibsiz")
//         }
//         else {
//             reject("eror")
//         }
//     })
// }
// let users = async() => {
//     try{
//         let user1 = await facebook('rahimjon', 2010)
//         let user2 = await facebook('rahimjon', 2010) // agar bbizda yana bitta function bolganda biz yan then deb yozishimz kerak edi
// lekin bunda hohlagancha parameter berib tushinarli qilib ozs boladi
//         let user3 = await facebook('rahimjon', 2010) // Bu xolatda biz boshqa bir functionlarni ham ishlatishimz 
//         //mumkun

//         console.log(user1);
//         console.log(user2);
//         console.log(user3);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// users()
// Bu xolatda biz then catch ishlatmasdan syntaxni oson qilib yozishimiz mukun

// fetch(); - Bu bazani linkini quyish uchun 

// fetch("https://jsonplaceholder.typicode.com/post")
//    .then(response => response.json())
//    .then((res) => console.log(res))
//    .catch(error => {
//      console.error(error);
//    });
// const myFunc = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await response.json();
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }

// myFunc();

// async function fetchData() {
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/post");
//         // if (!response.ok) {
//         //     throw new Error('HTTP error! Status: ');
//         // }
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// fetchData();
// ==============================================================

// fetch("https://jsonplaceholder.typicode.com/pots")
// .then((data) => {
//     console.log(data.json());
//     if (!data.ok) {
//         throw new Error("SIzda xatolik bor:")
//     }
// })
// .then((res) => {
//     console.log(res);
// })  
// .catch((eror) => {
//     console.log(console.log("Xatongizni togirlang"),eror);
// })
   
// async/await
// let Myfunc = async () => {
//     let API = await fetch("https://jsonplaceholder.typicode.com/comments");
//     try{
//         if (!API.ok) {
//             throw new Eror("Xatolik boldi");
//         }
//         let data = await API.json()
//         console.log(data);
//     }
//     catch(eror){
//         console.log("Xatoni togirlang" )
//     };

// } 
// Myfunc()

   

   

