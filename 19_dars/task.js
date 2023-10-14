// // Callbackda tasklar
// // ==================================================1 - task =======================================
// let API = fetch('https://jsonplaceholder.typicode.com/users')
// console.log("Started");
// let Faceebok = (Email,username, callback) => {
//     setTimeout(() => {
//         if (API.email === Email && API.username === username) {
//             callback("Sahifangizga xush kelibsiz")
//             console.log("finished");
//         }
//         else {
//             callback("Email yoki username xato");
//         }
//     },2000)
// }
// Faceebok("Sincere@april.biz", "Bret",((data) => {
//     console.log(data);
// }))

// Promeise

// let API = fetch("https://jsonplaceholder.typicode.com/users");

// let instagram = (email, username) => {
//    setTimeout(() => {
//     let promeise = new Promise((resolve, reject) => {
//         if (API.email == email && API.username == username) {
//             resolve("Saxifangizga xush kelibsiz")
//         }
//         else {
//             reject("email yoki username xato")
//         }
//     })
//     promeise
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((eror) => {
//         console.log(eror);
//     })
//    },2000)
// }
// instagram("Sincere@april.biz", "Bret")
// Promeise da biz yozganda resolv va rejact degan paramteri keladi uni biz uni biz resolve deganini true bolgan holatlarda
// ishlatamiz va rejactni esa false bolgan holatda ishlatsak boladi.
// promeise.then.catch bolgan holatlar biz promeiseni chaqirish uchun ishlatsak boladi 
// Endi bizda yana bitta promeise bor.SHu promeise ni ham biz chaqirmoqchimiz biz yana promeise deyishimz kerak 
// va bu chalashlik olib keladi endi biz uni ham oldini olish uchun async/await dan foydalanishimiz kerak.


// let faceebok = (email, username) => {
//     let API = fetch('https://jsonplaceholder.typicode.com/users');
//     setTimeout(() => {
//        let PromeiseFaceebok = new Promise((resolve, reject) => {
//         if (API.email === email && API.username === username) {
//             resolve("Saxifangizga Xush kelibsiz!")
//         }
//         else{
//             reject("Xatolik")
//         }
//        })
//        let Asyc = async () => {
//         try {
//             let user = await faceebok("Sincere@april.biz", "Bret")
//              console.log(user);
//         }
//         catch (eror) {
//             console.log("Xatoni togirlang" ,eror);
//         }
//        }
//     }, 2000)
// }
// faceebok("Sincere@april.biz", "Bret")










































