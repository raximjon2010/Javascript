// ======================================================= 1 - task ================================================
// Masala 1: JavaScriptda "Person" nomli class yaratish va uning "name" va "age" nomli xususiyatlari bo'lsin.
//  Bu classdan bir nechta obyektlar yaratib, ularga ma'lumotlarni berib, har bir obyekt uchun ma'lumotlarni konsolga chiqaring.
// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
// }
// let Person1 = new Person("Rahimjon", "Xujaqulov");
// console.log(Person1);
// ======================================================= 2 - task ================================================
// Masala 2: JavaScriptda "Rectangle" nomli class yaratish va uning "width" va "height" 
// nomli xususiyatlari bo'lsin. Bu classning "area()" nomli metodini yaratib, bu metoddan 
// foydalanib har bir obyekt uchun to'g'ri to'rtburchakning yuzini hisoblang.
// class YuziniHisoblash {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     YuziniHisoblashFunc = () => {
//         return `${this.width} * ${this.height}`, this.width * this.height
//     }
// }
// let YuziniHisoblash1 = new YuziniHisoblash(10, 20)
// console.log(YuziniHisoblash1.YuziniHisoblashFunc());
// ======================================================= 3 - task ================================================
// class DOG {
//     constructor (ismi, parada) {
//         this.ismi = ismi;
//         this.parada = parada;
//     }
//     DOGFunc = () => {
//         return `${this.ismi} ning paradasi ${this.parada}`
//     }
// }
// let DOG1 = new DOG("Buldak", "Aqilli")
// console.log(DOG1.DOGFunc());



// function sumEvenNumbers(input) {
//     let sum = 0
//     for (let i = 0; i < input.length; i++) {
//         if (parseInt(input[i]) % 2 === 0) {
//             sum += +input[i]
//         }    
//     }
//     return sum
//   }
//   console.log(sumEvenNumbers([4, 3, 1, 2, 5, 10, 6, 7, 9, 8] ))


// function filter_list(l) {
//   let filltered = l.filter(value => typeof value === "number" )
//   return filltered;
// }
// console.log(filter_list([1,2,'aasf','1','123',123]));


// function findMissingDigits() {
//     const allDigits = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
//     const missingDigits = new Set();

//     for (let i = 0; i < arguments.length; i++) {
//       const numString = String(arguments[i]);  
//       for (let j = 0; j < numString.length; j++) {
//         const digit = numString[j];
//         missingDigits.delete(digit);
//       }
//     }
  
//     return Array.from(missingDigits);
//   }

// let arr = [ 1, 2, 3,3]
// function uniqueSum(lst) {
//     let filtered =  lst.filter((value,index) => lst.indexOf(value) === index)
//     let reduced = filtered.reduce((a,b) => a + b)
//     return reduced
// }
// console.log(uniqueSum(arr));


// function cookingTime(eggs) {
//   for (let i = 0; i < eggs.length; i++) {
//     if (eggs[i] === eggs[i]) {
//         return `${Math.abs(eggs)} eggs => time: ${Math.abs(eggs[i])} minute`
//     }
//   }
// }
// console.log(cookingTime([-2]));


// function excludingVatPrice(price){
//     if (typeof price === 'number') {
//         return price * 0.15 + price
//      }
//      else if (price === null) {
//        return -1
//      }
//   }
//   console.log(excludingVatPrice(null));

// function getCharacters(obj, key, val) {
//     let  characters = {"characters": [
//       {"name":"Bill Cipher", "age":"Unknown", "speciality":"warp reality"},
//   ]};
//     let filtered = characters.filter(value => value.name === "Bill")
//     return filtered
//     // return foundCharacters;
//   }
//   getCharacters()