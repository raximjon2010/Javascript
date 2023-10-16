// DOM => document object model - bu bizga HTMl ni elementlarini ustida amala bajarish htmlga 
// tag qushish title ni ozgartirish va boshqa amalarni bajarish uchun ishlatiladi

// console.log(window); // Biz buni yozganimizda bizga windowni ichida hamma methodlarni chiqarib beradi shu 
// methodlarni ichida document ham bor biz uni ichiga ham kirsak body html bor head va boshqa taglar bor 
// eni u degani biz shu document orqali uning ichidagi taglarni elementlarni va boshqalarni ustida 
// document object bolganligi uchun nuqta orqali amal bajarsak boladi
// console.log(document); // Manashu xolatda ham yozsak bu bizga htmlni ichidagi boshlangich codelarni chiqarib beradi
// console.dir(document); // bu collection korinishida chiqarib eradi

// changing title by the DOM
// console.log(document.title = "DOM tutorial"); // Bu xolatda biz document deb yozib uni ichida bolgan title ni nomini 
// ozgartirsak boladi
// const title = document.title = "DOM TUTORIAL" // Bu xolatda ham qilsak boladi buni log qilishimz shart emas 
// chunki bu faqat bizga titleni ozgartirib beradi.

// getting html elements
// console.log(document.getElementById("title").innerHTML) // Bu yulda biz id ni ololamiz id bu birinchi korgan tagni oladi
// va birinchisini chiqaradi
// innerHTML => tag ichidagi content;

// getting elements, by id/className/tagsName
// const id_olish = document.getElementById('title').innerHTML
// console.log(id_olish);
// const Get_class = document.getElementsByClassName('text')
// console.log(Get_class[0].innerHTML); // Bu class orqali olish bu esa toplam qilib chiqarib beradi. Bung sabab classga biz bir nechta 
// qiymat berishimz mumkun edi, id esa yunik faqat bita qiymat oladi.
// const GetTag = document.getElementsByTagName('h1')
// console.log(GetTag[0].innerHTML); // bu ham collection korinishida chiqarib beradi. Bunda ham chunki h1 degan tagdan kop bolishi mumkun 

// querySelector() - Bu faqat bitta qiymatini chiqarib beradi huddi id ga oxshaydi bir nechta bir xil qiymat bolsa 
// bizga faqat birinchisini chiqarib beradi 
// const general = document.querySelector('#title')
// console.log(general); // Bu id bilan bolyapti bu ozini xolatida ishlayveradi
// const general = document.querySelector(".text")
// console.log(general); // bu ham huddi shunday id ga oxshab ishlaydi faqat birnchisi olib beraveradi.
// const general = document.querySelector('h1')
// console.log(general); // bizda header tegidan 4 ta bor faqat bu bizga birnchisi olib beradi.

// querySelectorAll() - Bu esa huddi class va tag ga oxshatib chiqaradi yani bu toplam qilib chiqaradi
// NodeList(nechtaligi) data

// const general = document.querySelectorAll('#title')
// console.log(general); // Bu class korinishida chiqarib beradi. Yani toplam qiladi. NodeList()
// const general = document.querySelectorAll(".tutorial"); // Bu classday ishlaydi uzi class lekin bu collection qaytsrmaydi
// NodeList qaytaradi
// const general = document.querySelectorAll("h1"); // Bu ham NodeList qaytaradi

// get the parent element (parentNode);
// let paragraph = document.querySelector("#title");
// console.log(paragraph.parentNode); => read-only element = Bu parentini chiqarib beradi va uni ustida bishqa hech qanaqa amal
// bajarib bolamydi
// 
// getting next sibling of element
// let next  = document.querySelector('#center');
// let getNext = next.nextElementSibling;
// console.log(getNext); // Bu bizga center yani belgilangan tagdan bitta oldingisi olib beradi nextElementSibling

// getting prev sibling of element
// let prev = document.querySelector('#center');
// let getPrev = prev.previousElementSibling;
// console.log(getPrev); // Bu bitta olddingisi olib beradi

// get all next siblings

// let nextAll = document.querySelector('#center')
// let nextSibling = nextAll.nextElementSibling;

// while (nextSibling) {
//     console.log(nextSibling);
//     nextSibling = nextSibling.nextElementSibling;
// }

// get all prev siblings
// let current = document.querySelector("#center");
// let prevSiblings = current.previousElementSibling;

// while (prevSiblings) {
//     console.log(prevSiblings);
//     prevSiblings = prevSiblings.previousElementSibling;
// }

// getting first child of element
// let first = document.querySelector('#parent');
// let getFirst = first.firstElementChild
// console.log(getFirst); // Bunda parentdan turib uni ichidagi birnchi va oxirgi bolgan taglarni olishimiz mumkun


// getting last child of element
// let last = document.querySelector('#parent');
// console.log(last.lastElementChild); // Bu bizga shu parent ichidan oxirgi bolgan malumotni olayaomiz

// getting all childs of element
// let children = document.querySelector('#parent');
// let GetChildren = children.children;
// console.log(GetChildren); // Bu esa bizga shu parentni ichidagi barcha childrenlarni chiqarib beradi collection ichida


// giving colors according to odd or even elements by children property
// let content = document.querySelector("#menu");
// for (let i = 0; i < content.children.length; i++){
//     if (i % 2 === 0) content.children[i].style.color = 'red'
//     else content.children[i].style.color = 'blue';
// }

// create element by the js DOM
// let div = document.createElement("div");
// div.innerHTML = '<p>Create element example</p>';
// div.innerHTML = 'WEBBRAIN ACADEMY';
// document.body.appendChild(div);

// let div = document.createElement('div')
// div.innerHTML = '<p>Welcome to DOM</p>'.toUpperCase();
// div.style.color = 'red';
// document.body.appendChild(div);

// adding an id to the div
// let div = document.createElement("div");
// div.id = 'content';
// div.className = 'text';
// div.innerHTML = '<p>Create element example</p>';
// document.body.appendChild(div);

// // let divElement = document.querySelector("#content");
// let divElement = document.querySelector(".text");
// console.log(divElement);









