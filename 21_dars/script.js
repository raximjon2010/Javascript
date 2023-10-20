// Divni ichiga yangi child element qushish
// let parent = document.querySelector('.parent'); // biz HTMl dagi parent divimizi olib kelvoldik
// let li = document.createElement("li") // va biz ozimiz bitta li tagidan create qildik
// li.textContent = 'Home' // va bunga biz qiymat bervoldik.
// parent.appendChild(li) // va bunii biz div ga joylab oldik

//ul tagini ichiga new element creat qilish

// let menu = document.querySelector(".menu"); // Bu yerda menu degan ulimizdi olib kelamiz 
// let li = document.createElement('li')// va li degan tag yozib olamiz
// li.textContent = "About Us" // li imizi qiymatini biz About Us qildik

// menu.appendChild(li) // va li imizni menu ni ichiga solib quydik

// appendChild() => method - Bizga malumotni get qilib beradi yanniy bu orqali biz malumotni browser yoki biron bir divlarni ichiga solib quyishimiz mumkun
// endi biz biron bir html elementni function bilan olmoqchi bolsak
// let GetTag = (name) => {
//     let li = document.createElement("li");
//     li.textContent = name
//     return li
// }
// let menu = document.querySelector('.menu');
// menu.appendChild(GetTag('About Us'))
// Bu xolatda bersak boladi 
// textContent() vs innerText()
// textContent() - Bu contentini chiqarib beradi Keyin biz uni conentiga malumotini yangilashimiz mumkun. 
// let container = document.querySelector('.container');
// console.log(container.textContent); // textConent orqali yozilsa
// Bu yashiirin va yashirin bolmagan taglarni chiqarib beradi

// innertext() - Bu ham huddi shunday ishlaydi bu faqat yashirin bolmagan taglarni olib beradi
// let container = document.querySelector('.container');
// console.log(container.innerText); // Bunda esa faqat yashirinmagan taglarni chiqarib beradi

//innerHTML() vs createElement()
// Buni ikkalsi ham malumot qushish uchun ishlatiladi

// let container = document.querySelector('.container');
// container.innerHTML = 'New innerHTMl()';
// console.log(container.innerHTML); // Bunda biz get qilishimiz ham mukun get qilishimz ham mumkun
// endi biz buni ishklatsak bizga hamma malumotini ochiradi va orniga
// biz set qilgan malumotni qushadi.
//  createElement(); // bu faqat qushadi 

// let container = document.querySelector('.container');
// console.log(container.innerHTML); // Biz bunda qiladigan bolsak
// bizga bu ichidagi hamma elementlarni taglari bilan chiqarib beradi
//Lekin biz creatElementda qushganimiz yaxshi

// css DOM - Biz css javascriptda nimaga kerak desak bizga bu 
// biron bir action bajarilganda shu rangda bolsin deyishimz mukun
// huddi shu xolat uchun js css kerak boladi
// let h1 = document.querySelector('.text'); // Biz textni olib kelib olamiz
// h1.style.color = 'red'; // va biz uni bu xolatda colorini ozgartirhsimiz mumkun
// h1.style.backgroundColor = 'blue'; // Bunday yozish juda chalkash bu xolatda yozish tavsiya etilmaydi
// document.body.appendChild(h1) // va biz buni bodyga joylashtiramiz

// let text = document.querySelector('.text');
// text.style.cssText = `
// color: red;
// background: green;
// ` // bu yuldan foydalansak bizga optimal yechim boladi.

// let text = document.querySelector('.text');
// text.style.cssText = `
// color: red;
// background: blue;
// `
// let isActive = true;
// let Change = () => {
//    isActive ? (
//     text.style.cssText = `
//         color: red;
//         background: green;
//         `
//    ) : (
//     text.style.cssText = `
//         color: black;
//         background: white;
//         `
//    )
//     isActive = !isActive
// }
// Biz bu xolatda yozsak bizga button bossak bizga rangini ozgartirb beradi
// Endi buni biz buttonni oziga onclick deb yozib otirmay uni togridan togri js da yozib ketishimiz mukun
// let text = document.querySelector('.text');
// let btn = document.querySelector('.btn');
// let isActive = true;
// let ChangeFunction = () => {
//     isActive ? (
//         text.style.cssText = `
//         background: red;
//         color: green;
//         `
//     )
//     : (
//         text.style.cssText = `
//         background: red;
//         color: green;
//         `
//     )

//     isActive = !isActive
// }
// btn.addEventListener('click', ChangeFunction) // Bu oziga 2 paramter oladi birinchisi
// bu nima bolishi ikkinchis function yozishimz kerak yoki function nomini yozishimz kerak 

// Eni focus bolganda qilishimiz kerak
// let input = document.querySelector('input[type = "text"]'); // biz bu xolatda yozib input type bilan olib olsak boladi
// input.addEventListener('focus', (event) => { // biz focus dedik bu inputlar bilan ishlaydi
//     event.target.style.background = 'yellow' // va target bu input biz shu inputni ichiga kirgan bolamiz va uni ustida biz style bersak oki boshqa amala bajarasak boladi
// })

