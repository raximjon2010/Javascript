// --------------------------------- 1-task-------------------------------------
// raqamlarni qushish
// let number = '5645';
// let sum = 0;
// for (let i = 0; i < number.length; i++) {
//     sum += parseInt(number[i])
// }
// console.log(sum);
// --------------------------------- 2-task-------------------------------------
// Nested arraydan sumni chiqaring
// let arr =[1,[3,[5]],[10]];
// let sumNumbers = (array) =>{
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//             sum += sumNumbers(array[i])
//         }
//         else{
//             sum += array[i]
//         }
        
//     }
//     return sum
// }
// console.log(sumNumbers(arr));
// --------------------------------- 3-task-------------------------------------

// let user = [
//     {id: 1, year: 1998, engine: 1, name: "Tico"},
//     {id: 2, year: 2005, engine: 1.2, name: "Matiz"},
//     {id: 3, year: 2010, engine: 1.6, name: "Gentra"},
//     {id: 4, year: 2010, engine: 1.5, name: "Cobalt"},
//     {id: 5, year: 2012, engine: 2, name: "Malibu"},
//     {id: 6, year: 2000, engine: 1.2, name: "Damas"},
//     {id: 7, year: 2018, engine: 2.4, name: "Tracker"},
// ]
// 2000 yildan oldin chiqarilgan mashinalar
// console.log(user.filter(value => value.year < 2000));
// ===================================================
// 2010-yildan keyin chiqarilgan mashinalar ruyhati
// console.log(user.filter(car => car.year > 2010));
// ===================================================
// engine kuchiga qarab sartirofka qilish

// let user2 = 
//     user.sort((a,b) => {
//         a.engine - b.engine
// }
// )
// console.log(user2);
// ===================================================

// let years = user.sort((a,b) => {
//     b.year - a.year
// })
// console.log(years);
// ===================================================
// let alphabet = user.sort((a,b) => {
//     a.name.localeCompare(b.name)
// })
// console.log(alphabet);
// ===================================================
// 2000 yildan oldingilarga statusiga eski deb qushish
// for (let i = 0; i < user.length; i++) {
//     if (user.year < 2000) {
//         user[i].status = "Eski"
//     }  
// }
// console.log(user);
// --------------------------------- 4 - task------------------------------------
// let array = [12,4,2,50]
// let maxNumber = array[0];
// let minNumber = array[0];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > maxNumber) {
//         maxNumber = array[i]
//     }
//     if (array[i] < minNumber) {
//         minNumber = array[i]
//     }
    
// }
// console.log(maxNumber);
// console.log(minNumber);
// --------------------------------- 5 - task------------------------------------
// let = name = 1213233434435
// let arr = ["Olma", "uzum" , "Anor", 'Shaftoli', 'banan']
// let Olibtashlash= (array) => {
//     arr.forEach((value) => {
//         if (value === "olma") {
//             continue
//         }
//     })
// }
// console.log(Olibtashlash('olma'));




