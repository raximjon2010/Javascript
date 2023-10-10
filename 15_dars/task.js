let user = {
    name: 'Test',
    age: 20,
    child: {
        name: 'test',
        age: 10,
        child: {
            age: 5
        }
    }
}
//================================== 1 exam for/loopda==========================================
// let sum = 0
// function sumNumbersInObject(obj) {
//     sum += obj.age
//     if (obj.child) {
//         sumNumbersInObject(obj.child)
//     }
// }
// sumNumbersInObject(user)
// console.log(sum);
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


// ===================================3 -exam ==============================================================

// let users = [
//   { id: 1, name: 'Raximjon'},
//   { id: 2, name: 'Nozimjon'},
//   { id: 3, name: 'Azizbek'},
//   { id: 4, name: 'Jahongir'},
// ];

// const onSearch = (input) => {
//   let result = [];
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].name.includes(input)){
//       result.push(users[i])
//     }
//   }
//   console.log(result);
// }
// onSearch('m')

// //////////////    0000     ///////////

// const onSearch = (input) => {
//   let result = [];
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].name.toLocaleLowerCase().includes(input.toLocaleLowerCase())){
//       result.push(users[i])
//     }
//   }
//   return result
// }
// ===================================4 -exam ==============================================================
// duplicate larni chiqarish kerak, new Set() dan foydalanmasdan
// let arr = [1,1, 2, 2, 3, 3, 4, 4]
// let string = arr.join(",")
// let NewSet = new Set()
// NewSet.add(arr)
// console.log(NewSet);