
// let obj = {
//     name: 'Humoyun',
//     status: 'Student'
// }

// let spreaded = { ...obj, age: 28 };
// console.log(obj);
// console.log(spreaded == obj);
// console.log(spreaded === obj);
// Spread Operatorda malumotni yangilasa bu yangi ochgan variable bilan taqqoslasa false qaytaradi


// console.log(obj[key]); // Bu key ni ichidagi stringni malumotini oladi
// Object.values(obj) => value // Bu valuelarini chiqaradi
// Object.keys(obj) => key // Bu keylarini chiqaradi
// Object seal() vs freeze() // Bularni farqi seal da faqat update ishlaydi  freeze bu muzlatadi
// Object.assign({}, obj);  => shallow clone Judayam nested bolib ketsa bu xatolik kelib chiqaradi
// structuredClone(obj); => deep clone Buni nested bolsa ishlatsak boladi 

// while bilan doWhileni farqi while for loopga oxshab odatdagidek ishlaydi do/while esa false bolsa ham 
// 0 chiqaradi Chunki bunda condeshin pasida yozilgani uchun 0 chiqaradi


// let arr = [1, 2, 3];
// let spreaded = [...arr,]; // spread bu qushish uchun ishlatiladi
// console.log(spreaded);
// let arr2 = arr1;
// console.log(arr == spreaded); // Taqqoslasak ham bu false qaytaradi chunki bu spread degan ozgaruvchiga saqlayaptdi
//  buni ozini log qilsak ham biz qushgan malumot korinmaydi
// console.log(arr === spreaded);
/////////////////////////////////////////////////destructured/////////////////////////////////////////////////// 
// let destructured = [bir , ikki , uch] = arr
// console.log(bir);
// console.log(ikki);
// console.log(uch);
// let [third] = arr;
// console.log(third);


// let cars = [
//     { id: 1, year: 1998, engine: 1, name: "Tico" }, // 0
//     { id: 2, year: 2005, engine: 1.2, name: "Matiz" }, // 1
//     { id: 3, year: 2010, engine: 1.6, name: "Gentra" },  // 0
//     { id: 4, year: 2010, engine: 1.5, name: "Cobalt" }, // 0
// ];

// update
// let onUpdate = (car) => {
    // let updated = cars.map((value) => value); // Bu faqat malumotlarni chiqarib beradi
    // let updated = cars.map((value) => value.id === car.id ? 1 : 0 ); // Bu agar teng bolsa 1 ni chiqaradi teng bolmasa 0ni
    // let updated = cars.map((value) => value.id === car.id ? {...value, name: "Nissan", year: 2023} : value); // Bu update quiladi
    // let updated = cars.map((value) => value.id === car.id ? {...value, [car.key] : car.value} : value);
    // let update = cars.map(value => value.id === car.id ? {...value, name: "Nissan",year: 2023, engine: 3} : value)
    // let update = cars.map(value => value.id === car.id ? {...value, name: "Nissan", year: 2022, engine: 2.5} : value)
    // let update = cars.map(value => value.id === car.id ? {...value,[car.key]: car.value} : value)
    // console.log(updated);
// }

// onUpdate({ id: 2, key: "id" , value : "WBA"});

// ============================================================

// create
// let onCreate = (car) =>{
//     let newArr = [...cars, {...car}]
//     console.log(newArr);
// }
// onCreate({id: 8, name: "Nissan", engine: 4, year: 2023})

// onCreate({ id: 8, name: 'Nissan', year: 2022 });
// console.log(cars);

// ======================================================================

// delete
// let onDelete = (ids) => {
//     let deleted = cars.filter((value) => value.id !== ids);
//     console.log(deleted);
// }

// onDelete(3);

// ==================================================


// CRUD => Create, Read, Update, Delete

// read
// let onRead = () => {
//     return cars.map((value) => value)
// }

// console.log(onRead());

// new Date();

// let d = new Date();
// console.log(d); // Buni yozsak sana yil oy hammasini chiqarib beradi bu terminaldan xato korsatadi 
// console.log(d.getDate()); // Bu sanani chiqaradi Hozir 25 sentabr bolgani uchun 25 chiqaradi
// console.log(d.getDay()); // Bu haftaning nechinchi kuni ekanligini tekshiradi
// console.log(d.getMonth()); // Bu nechinchi oy ekanligni Javascript 0 dan xisoblaydi Yanvar 0-oy boladi
// console.log(d.getFullYear()); // Bu nechinchi yil ekanligi
// console.log(d.getHours()); // Bu soatni aytadi
// console.log(d.getMinutes()); // Bu minutni tekshiradi
// console.log(d.getSeconds()); // Bu secondi tekshiradi
// console.log(d.getMilliseconds()); // Bu millisecond







