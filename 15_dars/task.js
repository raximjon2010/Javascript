// let obj = {
//     name: 'Test',
//     age: 20,
//     child: {
//         name: 'test',
//         age: 10,
//         child: {
//             age: 5
//         }
//     }
// }
//================================== 1 exam for/loopda==========================================
// function sumNumbersInObject(obj) {
//     let sum = 0;
  
//     for (let key in obj) {
//       if (typeof obj[key] === "number") {
//         sum += obj[key];
//       }
//     }
  
//     return sum;
//   }
  
//   console.log(sumNumbersInObject(obj))
//================================== 1 exam recursion function==========================================
// let recurse = (number) => {
//     for(let key in obj){
//         if (typeof obj[key] === 'number') {
//             sum += obj[key]
//         }
//         else if (typeof obj[key] === 'object'){
//             sum += recurse(obj[key])
//         }
//     }
// return sum
// }
//  const sum = recurse(obj)
//  console.log(sum);
// ===================================2 -exam ==============================================================
// let arr = [1,1, 2, 2, 3, 3, 4, 4] // duplicate larni chiqarish kerak, new Set() dan foydalanmasdan
// const duplicates = [];

// for(let i = 0; i < arr.length; i++) {
//     for(let j = i + 1; j < arr.length; j++) {
//         if(arr[i] === arr[j] && !duplicates.includes(arr[i])) {
//             duplicates.push(arr[i]);
//         }
//     }
// }

// console.log(duplicates)