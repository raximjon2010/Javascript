// let user = {
//     name: 'test',
//     age: 30,
//     child: {
//         name: 'test',
//         age: 20,
//         child: {
//             age: 10,
//             test: {
//                 age: 100
//             },
//             tesing1: {
//                 age: 20
//             }
//         }
//     }
// }

// let sum = 0;
// function getAge(obj) {
    
//     sum += obj.age
    
//     if (obj.child) {
//         getAge(obj.child)
//     }
//     else if (obj.test) {
//         getAge(obj.test)
//     }
// }

// getAge(user)
// console.log(sum);

// let sum = 0;
// let AgeChild = (obj) => {
//     sum += obj.age
//     // base condition
//     if (obj.child) {
//         AgeChild(obj.child)
//     }
//     return sum
// }
// console.log(AgeChild(user));
// let arr = [1, 2, 2, 3, 3, 1, 3];

// const removeDuplicate = (number) => {
//     return arr.filter((value, index) => arr.indexOf(value) === index);
// }
// console.log(removeDuplicate(arr));
// ========================================================================================================
// ===================================1 -task ====================================================
// 1 -task = Object yozamiz uni ichida function yozamiz va shu function boshqa bir objectga yunalitirib 
// Shuni ichdan name va surname ni olib shuni qiymatini update qilish
// let obj1 = {
//     get Copy () {
//         console.log(`${name} ${surname} ${age}`);
//     },
//     set Copy (value) {
//         let values = value.split(" ")
//         this.name = value[0]
//         this.surname = value[1]
//         this.age = value[2]
//     }
// }
// console.log(obj1.Copy = "Rahimjon Xujaqulov 13")
// let obj2 = {
//     name: "rahimjon",
//     surname: "Xujaqulov",
//     age: 13,
// }
// ===================================2 -task ====================================================
// IIFE 
// var MyFunc = () => {
//     console.log("MyFunc1");
// }
// MyFunc()

// var MyFunc = () => {
//     console.log("MyFunc2");
// }
// MyFunc()
// ===================================3 -task ====================================================
// Curry functionda funksiya yozish
// xabaralshish funksiyasi
let Messages = (MyPhone) => {
    if (MyPhone === "+998") {
        console.log("UZB raqami:" ,MyPhone);
    }
    // if (HE === true) {
    //     return (HE) => {

    //     }
    // }
    // if (SHE === true) {
    //     return (SHE) => {

    //     }   
    // }
}
Messages({"+998": 933317274})