// Object clone

// let obj1 ={
//     name : "Rahimjon"
// }
// // let obj2 = {
// //     name : "Rahimjon"
// // }
// let obj2 = obj1
// obj1.name = "Abdurahim"
// obj2.name = "sdjg"
// console.log(obj1);
// console.log(obj2);
// Endi bu yerda biz 2 ta objectni har doim taqqoslasak false qaytaradi chunki bularni referens linki bir xil emas
// Bu referens linklarni taqqoslaydi Hech qachon Bu linklar bir xil bolib qolmaydi Yangi Object ochib taqqoslaganda faqat
// // Endi buni true chiqarish ham mumkuni bitta obj ochib uni ikkinchi objga taqqoslaydi bu true chiqaradi
// // lekin buni menus tomoni ham bor biz obj1 ni ozgartirsak obj2 ham ozgaradi. Buni ham yoli bor alohida qilshni

// let obj1 = {
//         name: 'Rahimjon',
//         age: 20,
//     }
// let obj2 = structuredClone(obj1)
// obj2.name = "Abdurahim"
// obj2.status = "Developer"
// console.log(obj2);
// console.log(obj1);
// console.log(obj1 === obj2);
// Bu ham obj1 dan obj2 ga clone qilib beradi buni + tomoni obj1ni ozgartirsak obj2 ga tasir qilmaydi 
// endi buni - tomoni Referenns linki bir xil bolmaydi va taqqoslaganda false qaytaradi
// deep clone => structuredClone()
// =================================================================================================
//  let obj2 = Object.assign({}, obj1);  //<= shallow clone
//  console.log(obj2);
//  obj2.name = "AbduRahim"
//  obj2.status = "Developer"
//  console.log(obj2);
//  console.log(obj1 === obj2);
//  let obj2 = Object.assign(); <= shallow clone
// Bu ham bir xil lekin u qisqa kod boladi
// // =======================================================================================

// // Nesteed Object
// // Nested object bu Object ichida Object degan Object ichida biz xolgan ish qilaolamiz
// let obj1 = {
//     name: "Rahimjon",
//     hobby: {
//         hobby: "Football",
//         myfunction (){
//             console.log("rahimjon");
//         }
//     }

// }
// const  {name, hobby:{hobby,myfunction}} = obj1
// console.log(myfunction());
// // obj1.hobby.myfunction()

// Methods in object

// let obj = {
//         name: 'Rahimjon',
//         status: 'Student',
//         info(){
//             // console.log(this.name);
//             // console.log(this.status); // bunday qilib biz object ichidagi malumotlarni function ichida olib ishlatsak boladi
//             // console.log(this); bu global object buyicha oladi Agar Object ichida yozilsa Endi buni qanday ishlatamiz
//         }
// }
// obj.info();
// console.log(this); Bu global window object yaniy bu butun windowni korsatadi


// spread operator (...);

// let obj = {
//     name: 'Nozimjon',
//     age: 20,
// }
// console.log({...obj, name: "Rahimjon" , age: 13});
// spread opearator bu ... 3 ta nuqta shu uchta nuqtani yozib undan keyin objni nomini yozib 
// keyin ana usha objectni ichdagi malumotlarini qaytadan yozsak boladi yani ozgartirsak yoki boshqa qilsak boladi
// Bunda ham har doim obj.name = "Nimadir deb ozgartrib " yana keyingisada shunday ochib keyin uni har bittasini 7
// console.log qilib chiqishni bu oldini oladi

// destructure

// let student ={
//     name: "rahimjon",
//     status: "Developer",
//     age: 13,
//     obj2: {
//         hobby: "Football",
//         hobby2: "Volleyball",
//         friend: {
//             name1: "Muxish",
//             name2 : "Feruz",
//             name3 : "Umid",
//             name4: "kamron",
//             name5: "Ravshan"
//         }
//     }
// }
// const {name , status,age, obj2: {hobby,hobby2, friend: {name1, name2,name3,name4,name5}} } = student
// console.log(name);
// console.log(age);
// console.log(hobby);
// console.log(hobby2);
// console.log(name1);
// console.log(name2);
// console.log(name3);
// console.log(name4);
// console.log(name5);
// console.log(student.obj2.friend.name1);
// // const { name : ism, nickName, age, hobbies: {first, second, last: {third}} } = student;
// console.log(student.name);
// console.log(student.status);
// console.log(student.age);
// // console.log(first);
// // console.log(second);
// console.log(third);

// console.log(student.hobbies.first);
// console.log(student.hobbies.second);


// // console.log(ism);
// // console.log(nickName);
// // console.log(age);

// // console.log(student.name);
// // console.log(student.nickName);
// // console.log(student.age);


// array - biz buni biz bitta yuk mashinasiga uxshatsak boladi Yani uni container desak ham boladi bu objectdan ham
// katta boladi array fura desak obj bu yengil mashina desak ham boladi 
// let mashina1 = { name: 'Nexia', status: 'GM' };
// let mashina2 = { name: 'Cherry', status: 'GM' };
// let mashina3 = { name: 'Lada', status: 'GM' };
// let arr = ["string", 12, null, undefined, Symbol,Boolean,{name: "rahim"}, [12,"xujaqulov"]]
// console.log(arr); manashu holatda hamn kursak boladi hohlagancha malumot kiritsak boladi

// let arr = ["string", 12, null, undefined, Symbol,Boolean,{name: "rahim"}, [12,"xujaqulov"]]
// let newArr = new Array(12,"rahimjon", null , undefined , )
// console.log(arr.lengt ); // bu sakkiz chiqaradi chunki buni ichdagi malumotlari soni 8 ta
// console.log(newArr.length); //bu 4 hiqaradi chunki buni ichidagi malumotlari soni 4 ta
// console.log(arr[0]); index doim 0 dan boshlanadi shuning uchun bizga 0 inchi malumotni chiqarib beradi
// console.log(arr[2]);
// console.log(arr[arr.length - 1]); // bu oxiradagi array malumotini chiqarish uchun
// console.log(arr[arr.length - 2]);
// console.log(arr[arr.length -3]);

// let arr = [100, 'hey']
// let newArr = new Array(100, 'hey')

// console.log(typeof arr);//Bu typeofni chiqaradi yani bu object deb chiqaradi buni array deb chiqarishni ham yolli bor 
// console.log(Array.isArray(arr)); // bu arraymi deyapti bu true yoki false qaytaradi Bu true chunki bu array
// console.log(Array.isArray(arr));
// console.log(Array.isArray(arr));

// array methods

// let arr2 = ['d', 'e', 'f'];
// let str = 'WBA';

// arr2.push("Webrain") //=> oxiridan qushadi
// / arr2.pop() // => oxiridan uchiradi
// arr2.unshift("Webbrian") // bu boshiga qushadi
// arr2.shift()
// console.log(arr2.join('')); // join arrayni stringga ozgartrib beradi
// console.log(arr2.concat(str, 'Rahimjon', 13));
// console.log(str.split(' ')); // bu stringni arrayga ozgartrib beradi
// console.log(arr2.reverse()); // Bu teskarsini chiqarib beradi
// console.log(arr2);
// let arr = ['Nozimjon', 'Nursulton', 'Rahimjon'];

// arr.slice(0,3)  // => ctrl + C
// arr.splice(0,2) //=> ctrl + X
// console.log(arr);

// REGEX
// match() => string metodi, regex bilan ishlaydi, mos kelgan element larni array sifatida qaytaradi
// join('') => array metodi, stringga ugiradi
// match(/[A-Z]/g) => katta xarflarni yigish
// match(/[a-z]/g) => kichik xarflarni yigish
// match(/[0-9]/g) => raqamlarni yigish
// g => global
// 
