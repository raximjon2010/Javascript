// class inheritance => meros olish
// yaniy bizda bitta class bor shundan meros olishimiz kerak. Eni shu classdan biz meros olib huddi 
// shuni ozimizni classimizga olib kelib quyishimiz mumkun va uniga yana parametr va boshqa qushimcha amal bajarishimiz
// mukun uning ustida
// class User {
//     constructor (name,surname , age) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age
//     } // biz buni ichidagi parametrlarni global xolatga keltirib oldik
//     child = () => {
//         return `${this.name} ning familyasi ${this.surname} yoshi ${this.age} da `
//     }
// }
// let user1 = new User("Rahimjon", "Xujaqulov",13)
// console.log(user1.child());
// Endi biz huddi shu class dan inheritance olshimiz kerak
// /////////////////////////////////////////////////////////////////////////////////////////
// class MerosUser extends User { // extends bu yani MerosUser nomi extendsdan keyin yozilgan User bu meros olgan userimiz boladi
//     constructor(name,surname,age, year){
//         super(name,surname, age, ) // Bu super biz boshqa bir class dan Inheritance olganimizda ularni parametrni
//         // hammasin global qilib olsihimz uchun.
//         this.year = year; // agar biz yangi MerosUserimizga parametr qushsak uni this kalit suzi orqali global qilib olamiz
//     }
//     child2 = () => {
//         console.log(this.name);
//         console.log(this.year);
//     }
// }
// let MerosUser1 = new MerosUser("rahimjon" , "xujaqulov" , 13, 2010)
// MerosUser1.child2()  // Biz bu holatda class ni ichidagi funksiyamizni cchaqirib olishimiz mumkun
// console.log(MerosUser1.child()); // bizda bu child() degan function yuq. Lekin bu bizni Inheritance olgan class imizda bor edi.
// Bundan xulosa shuki biz extends orqali meros oldikmi uni ichidagi hamma malumot qabul qilgan class ga ham o'tadi.
// ////////////////////////////////////////////////////////////////////////////////////////

// synchronous javascript - Bu degani single thread degani. Masalan bizda bitta input bor va uni pastida button bor 
// biz shu inputga malumot kiritib button bossak biz request junatgan bolamiz keyin response keladi. Endi qachonki bizga response kelsa 
// shunda biz keyin shu button bosa olamiz ungacha bosa olmayiz. Agar server bilan muommo bulib qolsa yaniy malumot kelmasa
// bu sayt qotishiga olib keladi. Bundan xulosa shuki: Qachonki sychronous da ishlasak bitta button bosilsa backenddan malumot kelmaguncha 
// yana qaytib shu buttonni bosa olmaymiz 

// js is synchronous programming language by default - Javascriptni  synchronous diyilishiga sabab chunki bu ham js ga oxshab birinchi kod 
// ishlamadimi keyingisiga otkazmaydi

// 1-blocking - deyilishiga sabab chunki birinchi ishlamadimi keyingilarni bloklab tashlaydi.
// 2-single-threaded => main thread - Bunday deyilishiga sabab nima desak. Bu codelarni birin ketin o'qiydi shuing uchun synchrounous
// single thread deb ataladi.
// 3-synchrounous - Synchrouns ipli bu bir vaqtning uzida faqat bitta kod ishlaydi

// let a = () => {
//     console.log("A");
// }
// let b = () => {
//     console.log("B");
// }
// d() // Buni biz nomini notugri yozsak ham farqi yuq baribir xatolik beradi xatolik beradigan code ni tugri code ni pastidan yozsak ham baribir xatolik kelib chiqadi  
// b() // Synchrouns ketma ketlikda ishlaydi faqat bitta codeda xatolik ketsa ikkinchini ham chiqarmaydi
// ===========================================================================================================================
// asynchronous javascript // bu masalan synchrounousda  request junatsak bizga response serverdan kelmaguncha biz request junata olmasdik
// Bu esa request xoxlagancha junatsak boladi qaysi tez kelsa shuni bizga serverda olib chiqarib beradi shu narsa asychrounous deyiladi

// Browser web apis => setTimeout(), setInterval(); // bu yani shuncha vaqtdan keyin bizga shu funcsiya ishlasin desak shuni yozamiz 
// keyin biz bitta ozgaruvchi ochib undan keyin setTimeout yossak va unga vaqt belgilab keyin yan bitta ozgarruvchi ochib yozsak 
// Bu bizga birnnchi va setTimeoutdan keyingi ozgaruvchini chiqarib beradi chunki biz setTimeout() ga vaqt belgilab quygan edik.
// setTimeout() oxirida ishlaydi

// user interactions => addeventlistener - bu DOM mavzusi
// backend dan malumot olish => callback, promise, async/await // Keyingi dars
// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 2000)
// setTimeout(() => {
//     console.log(3);
// }, 3000)
// setTimeout(() => {
//     console.log(4);
// }, 4000)
// console.log(5); // Bu xolatda biz qaysi birinchi chiqishini ozimiz yozishimiz mukun setTimeout() bilan.
// bu birnchi vaqt belgilanmaganlarini chiqaradi va keyin setTimeout() larni chiqaradi
// Sayt manzili: latenflip.com || practice uchun
// Endi bizda ozgaruvchilarni chiqardi. Keyin berilgan vaqtda u bizga korinmaydi shu vaqt setTimeout() dagi malumot qayerda turadi desak 
// BROWSER WEB APIS da turadi
// browser web apis => setTimeout(), setInterval()
// callback queue(message queue) => web apis da vaqti tugagan function lar kelib navbatga turadi
// event loop => navbatda turgan functionlarni agar call stack bush bulsa, call stack ga utkazib yuboradi

// ////////////////////////////SetInterval()//////////////////////////////////////////
// setInterval(() => {
//     let d = new Date()
//     console.log(`${d.getDay()}:${d.getHours()}: ${d.getMinutes()}: ${d.getSeconds()}`);
// }, 1000); 
// Bu yulda biz soaat yasasak boladi. setInterval() bu ozi har bit second minut,
//  soat xoxlagancha quyib shu vaqtda bir marta ishlaydigan qiib quysak boladi
// ===========================================================================================================
// error handling
// Bu biron bir codeni xatoligini tekshirish uchun ishlatiladi
// let test = (a,b) => {
//     return a + b
// }
// try {
    // let Myfunction = test(10,20)
//     console.log(Myfunction); // Agar xatolik bolmasa natjasini chiqarib beradi
// } catch (err) {
//     // console.log(err.name); //nomini chiqarib beradi
//     // console.log(err.message); // qanaqa erorligi masaln is not defined
//     // console.log(err); // Bu hammasini chiqarib beradi
// }
// finally {
//     console.log("finally");
// }

// try => xatoga sabab buluvchi kod
// catch => xatoni handle qilish
// finally => ikkala xolatda xam kod yuradi

// callback, promise, async/await









