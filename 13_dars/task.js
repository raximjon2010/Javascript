// function breakCamelCase(str) {
//     let result = '';
    
//     for(let i = 0; i < str.length; i++) {
//       if(str[i] === str[i].toUpperCase()) {
//         result += ' ' + str[i];
//       } else {
//         result += str[i];
//       }
//     }
    
//     return result;
//   }
  
//   console.log(breakCamelCase("camelCasing")); // "camel Casing"
//   console.log(breakCamelCase("identifier")); // "identifier"
//   console.log(breakCamelCase("")); // ""









// function countSheep(array) {
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === true) {
//         count++;
//       }
//     }
//     return count;
//   }
  
//   const sheepArray = [true, true, true, false, true, true, true, true,
//                       true, false, true, false, true, false, false,
//                       true ,true ,true ,true ,false ,false ,true ,true];
  
//   console.log(countSheep(sheepArray)); // Output: 17



// function breakCamelCase(str) {
//     let result = '';
    
//     for(let i = 0; i < str.length; i++) {
//       if(str[i] === str[i].toUpperCase()) {
//         result += ' ' + str[i];
//       } else {
//         result += str[i];
//       }
//     }
    
//     return result;
//   }
// function removetrim(String) {
//     let result = "";

//     for (let i = 0; i < String.length; i++) {
//        if (String[i] === String[i].toUpperCase()) {
//         result += " " + String[i]
//        }
//        else{
//         result += String[i]
//        }
//        return result
//     }
// }
// console.log(removetrim("camelCase"));
//     function checkAlive (health) {
//         return health > 0;
//       }
// console.log(checkAlive(-1));7

// let MInMax = (Number) => {
//     let Min = Math.min(...Number)
//     let Max = Math.max(...Number)
//     return Min,Max
// }
// console.log(MInMax([1,2,3,4,5,6,7]));

// let Myfuncton = (number,value1, value2) =>{
//     switch (number) {
//         case "+": value1 + value2;break;
//         case "-": value1 - value2;break;
//         case "*": value1 * value2;break;
//         case "/": value1 / value2;break;
// }
// }
// console.log(Myfuncton("+", 4,7));
// console.log(Myfuncton("-", 4 , 7));
// console.log(Myfuncton("*", 4 , 7));
// console.log(Myfuncton("/", 4 , 7));

// -----------------------------------------------------------------------------------------------------
let arr = [
    { id : 1, year: 1998, engine: 1, name: "Tiko" },
    { id : 2, year: 2005, engine: 1.2, name: "Matiz" },
    { id : 3, year: 2010, engine: 1.6, name: "Gentra" },
    { id : 4, year: 2010, engine: 1.5, name: "Cobalt" },
    { id : 5, year: 2012, engine: 2, name: "Malibu" },
    { id : 6, year: 2018, engine: 2.4, name: "Tracker" },
    ];
    let Create = (array) => {
        return [
            ...arr, {
                id: array.length + 1, year: 2023,engine: 4, name: "Nissan",
            }
        ]
    }
console.log(Create({}));

