
// hoisting in variables => kotarish

// console.log(str);
// var str = 'Salom'; var hoisting bolaoladi yani console.log(yuqoridan yozadigan bolsak malumotni chiqarib bermaydiyu lekin undefineds chiqaradi)
// let str = 'Salom'; let hoisting bolmaydi eror beradi
// const str = 'Salom'; const ham eror beradi ishlamaydi

// =======================================================================================
// Endi bu functionlarda qanday qishlaydi deydigan bolsak
// hoisting in functions
// example();
// function example() {
//     console.log('Salom WBA');
// } // Bu hoisting faqat function declare ishlaydi boshqalarida ishlamaydi

///////////////////////////////////////////////////////////////////////

// example();

// var example = function () {
//    console.log('Salom WBA');
// }// Exspiressionda ham ishlamaydi var qilsak ham bishqa qilsak ham 
// example is not defined chiqaradi


/////////////////////////////////////////////////////////////////////////

// example();
// var example = () => {
//     console.log('Salom WBA');
// } // arrow function ham huddi shnday eror beradi is not defined deydi 


//////////////////////////////////////////////////////////////////////////

// default parametr
// default parametr nima deysak Agar biz example(); shuni ichiga yozish esimizda nchiqib ketsa uni paramter ichiga ham yozib ketishimiz mukun 
// function example(name = 'Rahimjon', status = 'Developer') {
    // console.log(`Name: ${name} Status: ${status}`);
// }

// example();
// example('Nozimjon', 'Engineer');

// let example = null;
// let MyFunction = (name = "Rahimjon" , Surname = "Xujaqulov") =>{
//        console.log(`name: ${name} Surname: ${Surname}`);
// }
// // MyFunction()
// MyFunction("Raximjon", "Xojaqulov");

// Object
// primitive va non-primitive = Bu nan Primitivga kiradi
// Object bu oziga keys va value oladi Bunga masalan o'quvchilarni malumotlarini kioritish uchun ishlatsak boladi
// let obj = {
    // name: "Rahimjon",
    // surname : "Xujaqulov",
    // age: 13
// } // Bu yerda endi (name: ) bu keys : bundan keyin "value" deyiladi buni ichiga biz hoxlagancvha malumot kiritamiz
// endi bularni nomini o'zgartirmaiz
// update
// obj.name = "Xujaqulov"
// obj.surname = "rahimjon"

// create
// obj.Hobby = "Football" - Bu create qilib beradi

// delete - delete bu yaniy ochirib beradi.
// delete obj.name
// delete obj.surname
// delete obj.age

// console.log(obj);
///////////////////////////////////////////////////////////////////////
// obj built in methods

// let obj = {name:"rahimjon"};
    // for (let kalit in obj) {
    //     console.log(kalit); // key
    //     // console.log(obj[kalit]);  value
    // }

    // for(let kalit in obj){
    //     console.log(obj[kalit]);
    // }
    // for(let kalit in obj ){
    //     console.log(kalit);
    // }
    // for(let kalit in obj){
    //     console.log(obj);

// function isEmpty(input) {
    
// }
// isEmpty(obj);

// let obj = {
// "full name": "Rahim",
// "100": "Xujauqlov"
// }
// Object.freeze(obj) // Bu freeze muzlatib quyadi niam amal bajarsak ham ishlamaydi Qushish uchirish umuman ishlamaydi
// Object.seal(obj); // Bu ham muzlatib quyadi faqat bunda update ishlaydi
// obj.name = "dsfds"
// console.log(obj);
// obj.name = 'Nozimjon';
// delete obj.age
// obj.hobby = 'Football';

// console.log(obj);
// console.log(Object.keys(obj)); // BU object ichda keyslarini chiqarib beradi
// console.log(Object.values(obj)); //value bu valuelarini chiqarib beradi 
// console.log(Object.entries (obj)); // Bu birinchi katta array qilib beradi keyin uni ichda har bitta key bn valueni 
// bitta array qilib quyadi
// let key = 'name';

// console.log(obj.name); // Objectni qiymatiga dinamik kirish
// console.log(obj["name"]);
// console.log(obj[key]); // Bu masalan keyni ichiga yozgan malumotimizni objni ichidan qidiradi agar bolsa ichidagi malumotini 
// chiqaradi bolmasa undefined chiqaradi

// console.log(obj.name);
// console.log(obj.name);
// console.log(obj['name']);
// console.log(obj['surname']);
// console.log(obj["full name"]);
// console.log(obj["100"]);



