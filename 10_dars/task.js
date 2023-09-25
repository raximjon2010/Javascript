// ---------------------------------1 exam ----------------------------------------------------
// Object keylarini toping
// let obj = {
//     name:"rahimjon",
//     id : 1,
// }
// for(let key in obj){
//     console.log(key);
// }
// ---------------------------------2 exam ----------------------------------------------------
// Objectni raqamlarini toping
// let obj2 = {
//     name : "Jack",
//     "phone Number" : 933317274,
//     age : 13,
//     status: "Developer",
//     'mashina raqam' : 135
// }
// let number = (input) => {
//     for(let value in input){
//         if (typeof input[value] === 'number') {
//             console.log(value + ':' + obj2[value])
//         }
//     }
// }
// number(obj2)
// ---------------------------------3 exam ----------------------------------------------------
// Objectni malumotlarini boolean tipidagi malumot turiga aylantring keylari bilan birga
// let obj3 = {
//     name : "rahimjon",
//     surname: 'Xujaqulov',
//     status: "Developer0"
// }
// let boolean = (input) => {
//     for(let boolea in obj3){
//         if (obj3[boolea] === obj3[boolea]) {
//             console.log(true);
//         }
//         else {
//             console.log(false);
//         }
//     }
// }
// boolean(obj3)
// --------------------------------4 exam ----------------------------------------------------
// Object dagi malumotlarni qushish
//  let person = {
//         id: 1,
//         name: 'Odil',
//         age:78,
//         child: {
//             id: 1,
//             name: 'Ali',
//             age:48,
//             child: {
//                 id: 1,
//                 name: 'Umar',
//                 age:20
//             }
//         }
//     }
//     let sumNumbers = (obj) => {
//         let sum = 0;
//         for(let key in obj){
//             if (typeof obj[key] === 'number') {
//                 sum += obj[key]
//             }
//             else if(typeof obj[key] === 'object'){
//                 sum += sumNumbers(obj[key])
//             }
            
//         }
//         return sum
//     }
//     console.log(sumNumbers(person));
// ---------------------------------5 exam ----------------------------------------------------
// search qilish kerak
// let arr = {
//     name: "Umar", id: 1,
//     name2: "Rahimjon",
//     surname: "Aliyev" , id2: 2 
// }
// let search = "name2"
// if (arr.hasOwnProperty(search)) {
//     console.log(arr[search]);
// }
// else {
//     console.log("Bunday malumot topilmadi");
// }

// ---------------------------------6 exam ----------------------------------------------------
// Ismlarni harfi uzunligi qancha bolsa shuni 30 ga kopaytirish kerak
// let ism = "Rahimjon"
// function billboard(name, price = 30){
//     console.log(name.length * price)
// } 
// billboard(ism)
// ---------------------------------7 exam ----------------------------------------------------
// qaysi tilni belgilasa usha tilda xush kelibsiz deb chiqarishi kerak
// let number = 1
// function rowSumOddNumbers(n) {
//   if(n === 1){
//     console.log(n)
//   }
// }
// rowSumOddNumbers(number)

// let language1 = "czech";
// function greet(language) {
//   if(language === "Engilish"){
//     console.log("Welocome")
//   }
//   else if(language === "czech"){
//     console.log("Vitejte")
//   }
//    else if(language === "danish"){
//     console.log("Welkom")
//   }
//   else if(language === "estonian"){
//     console.log("Tere tulemast")
//   }
//    else if(language === "finnish"){
//     console.log("Tervetuloa")
//   }
//    else if(language === "flemish"){
//     console.log("Welgekomen")
//   }
//    else if(language === "french"){
//     console.log("Bienvenue")
//   }
//    else if(language === "german"){
//     console.log("Willkommen")
//   }
//    else if(language === "irish"){
//     console.log("Failte")
//   }
//    else if(language === "italian"){
//     console.log("Benvenuto")
//   }
//    else if(language === "latvian"){
//     console.log("Gaidits")
//   }
//    else if(language === "lithuanian"){
//     console.log("Laukiamas")
//   }
//    else if(language === "polish"){
//     console.log("Witamy")
//   }
//    else if(language === "spanish"){
//     console.log("Bienvenido")
//   }
//   else if(language === "swedish"){
//     console.log("Valkommen")
//   }
//   else if(language === "welsh"){
//     console.log("Croeso")
//   }
//   else{
//     console.log("Bunday til yuq");
//   }
// }
// greet(language1)