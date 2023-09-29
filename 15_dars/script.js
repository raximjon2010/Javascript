// new Set(), new Map() => data structure data structure bu array bilan object bu ham data stracturega misol
// Set() bu arrayni orniga ishlatsak boladi bu boshqa ddasturlash tillarida ham bor Lekin Projectlarda array ishlatiladi bu shunchaki qushimcha bolib 
// ES6 da qushilgan bularni o'zini keyin farqi bor
// Map() Buni esa objectni orniga ishlatsak boladi Lekin bu ham xuddi shunday Projectlarda objectni ozi ishlatiladi bu shunchaki qushimcha bo'lib
// ES6 da qushilgan

// Set();
// Array bu tartibli malumot ozida saqlaydi. Qanday desak biz arrayni lengthni chiqara olamiz indexlar bilan kiraolamiz Shuning uchun tartibli deyilgan
// Biz Set() da duplicate qilaolamiz Arrayda esa duplicate qilish uchun ko'p kod yozish kearak
// const arr = [1,2,3,4,5];
// const set = new Set([1,2,3,4,5,])

// const arr = [1,1,2,2,3,4,5]; // arr bu duplicate qilmaydi yaniy 2 ta 3 ta bir xil malumo bolsa hammasini chiqarad
// const set = new Set([1,1,2,3,3,4,5]) // set esa 2 ta 3 ta nechta bolsa ham bir xil malumotni duplicate qiladi 1 ta qilib chiqarib beradi
// set.add(100) // Bu new Set() ga malumot qushadi.
// set.add(101)
// set.add("string")
// set.add([6,7,8])
// set.add({name: "Object"})
// let isExts = set.has(2) // Bu qidiradi yani ichiga yozgan malumotimnizni qidiradi va boolean qaytaradi
// set.delete(4) // Bu shuni ichiga yozgan malumotimizni o'chirib beradi
// set.clear() // bu hech qanaqa ichiga malumot olmaydi clear deb yozsak boldi tozalab beradi new Set ni ichini
// let checkSize = set.size // Bu bizga sizeni chiqarib beradi
// console.log(checkSize);
// console.log(set);

// Biz new setni arrayga ogirishmiz uchun spread operatordan foydalansak boladi
// let spread = {...set}
// console.log(spread);
////////////////////////////////////

// looping set values
// let students = new Set(["Rahimjon", "Nozimjon", "Nursulton"])
// for(let student of students){
//     console.log(students); // New Set da faqat for loop bilan forEach ishlaydi map ishlamaydi
// }
// students.forEach((value,key) => {
//     console.log(key);
// })
// console.log(students);
// ///////////////////////////////////////////////////

// new WeakSet(); 
// - Bu faqat object qabul qiladi Bu setdan kuchsiz varianti, Bunda faqat add bilan has ishlaydi
// let weakset = new WeakSet([1,2,3,4,5]) //Biz bunga string numberni bu xolatda beraolmaymiz bu faqat object qabul qiladi
// let weakset = new WeakSet([{name: "rahimjon"}]) // Bu xolatda yozsak ham bu bizga objectni chiqarib bermaydi items unkown chiqarib beradi
// let weakset = new WeakSet()
// let rahimjon = {name: "rahimjon"}
// let sardorbek = {name: "Sardorbek"}
// let Nursulton = {name: "Nursulton"} // Bu qushadi 
// weakset.add(Nursulton) //Bu ham
// weakset.add(sardorbek)
// weakset.add(rahimjon)
// console.log(weakset.has(rahimjon));
// console.log(weakset.has(Nursulton));
// console.log(weakset.has(sardorbek)); Bular tekshiradi huddi includesga oxshab bolsa true bolmasa false qaytaradi
// ///////////////////////////////////
// Arraydan setni farqlar:
// New set bu Set(5) { 1, 2, 3, 4, 5 } shu xolatda qaytaradi yani nechta malumot borligini va bizga object ko'rinishida qaytarad.
// Bularni yana bitta farqi set faqat foreach va for/of da ishlaydi map da ishlamaydi array esa ishlaydi, New setni ichiga agar biz 2 ta va undan ortiq
// bir xil malumot yozsak bu bittasini chiqarib beradi Arrray esa unday emas uning uchun set qilingan
// Yuz case da ishlamaydi bu array orniga faqatgina data structure
// Keyin set tez ishlaydi arraydan 
// Keyin set bu yunik qabul qiladi array esa qabul qilmaydi Arrayda bunday qilish uchun ozroq ish qilish kerak
// //////////////////////////////////////////////////////////
// Map
// Bu huddi objectga oxshaydi bu ham key value qabul qiladi Buni objectdan xususiyatlari kop 
// Buni bitta asosiy farqi map bu length korsatib turadi object unordered edi korsatmasdi 
// Lekin buni ham index ni korib [] shu xolatda ololmaymiz lekin bu qanaqadir manoda unordrid deyiladi
// let map = new Map()
// map.set("phone", "black")
// map.set("laptop", "silver")
// map.set("football", "CR7")
// map.set("hobby", "IT")
// console.log(map.get("phone"));
// console.log(map.get("laptop"));
// console.log(map.get("football"));
// Biz endi set deb qushsak get deb uning ichidagi malumotlarini ololamiz bu oddiy map ni chiqirib hamma malumotni olsak bunda bittsa chaqirsak boladi
// map.delete('phone')
// map.delete("laptop")
// map.delete('football')
// map.delete("hobby")
// Biz edni delete orqali uchirib tashlasak boladi bu objectda ham bor edi 
// map.clear() 
// Bu ichiga hech qanaqa malumot olmaydi buni ozini shunday yozsak top toza qilib beradi mapimizi bu object yuq edi mapda bor
// console.log(map.keys()); // Bu console.log() ni ichida yoziladi keyin bu keyslarini chiqarib beradi bu objectda yuq
// console.log(map.values()); // bu valuelarini chiqirib beradi bu ham console.log()ni ichida yoziladi bu objectda bor edi
// console.log(map.entries()); // bu har bitta key valueni bitta aray qavsiga solib chiqirb beradi bu ham objectda vbor edi
// map.set({}, "salom") // mapda keyin key sifatida oobjectni ishlatsak boladi lekin objectda bu xususiyat yuq edi
// console.log(map);

// for/of foreach map//////////////////////////////////////////////
// Map ni biz ozi objectga oxshatdik lekin objectda for/of,forEach degan arrayni atributi ishlaydi map da ishlaydi lekin bu objectda ishlamaydi
// for(let string of map){
//     console.log(string);
// } // Bu xolatda ishlaydi map, lekin object ishlamaydi
//////////////////////////////////
// map.forEach((value,index,Object) => {
//     // console.log(value); // bu mana valuelarini chiqrib beradi
//     console.log(index);
// })

// Buni objecda yuq xususiyatlari
// Birinichi xususiyati bu object uzunligi yani length ni korsatmasdi new map korsatadi keyin
// biz objectda key sifatida {} object beraolmas edik lekin bunda yaniy new map da boladi 
// keyin biz objectda array xususiyatlarini ishlataolmayiz lekin buni biz new Map da arrayni xususiyati bolgan for/of va forEachdan foydalansak boladi
// faqat bunda map va boshqalar ishlamaydi faqat for each bilan for/of ishlaydi  

// /////////////////////////////////////////////////////////////////////

// WeakMap
// bu new map dan kuchsiz varianti bu faqat key sifatida object qabul qiladi bunda faqat set bilan has ishlaydi

// const weakmap = new WeakMap()
// weakmap.set("key", 'value') // bunday beraolmaymiz bu xatolik beradi
// biz bunga faqat key sifatida shuni {} bersak boladi
// let keyObj= {}
// weakmap.set(keyObj)
// console.log(weakmap.has(keyObj)); // endi bizga true chiqaradi

// biz buni ichiga malumot kiritsak ham bu bizga tugridan tugri chiqarmaydi items unkown beradi

// const weakMap = new WeakMap();
// let keyObj = {};
// weakMap.set(keyObj, 'value');

// console.log(weakMap.has(keyObj));

// recursion or recursive function

// function recurse(number) {
//     console.log(number);
    
//     let newNumber = number - 1;
    
//     // base condition
//     if (newNumber > 0) {
//         recurse(newNumber);
//     }
    
// }

// recurse(5);

// 1- task
// let arr = [1, 2, 2, 3, 3, 4, 4] // duplicate larni chiqarish kerak, new Set() dan foydalanmasdan

// 2-task
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

// sum of age using recursion