// -----------------------------sort()-------------------------------------------------------------
// Sort bu raqamlarni stringlarni arrayda tartib bilan chiqarish uchun ishlatiladi
// let arr = [
//     'c','a','b'
// ]
// let result = arr.sort()// bu 1 xonlli raqamlarni ketma ketlig bo'yicha chiqarib beradi.Lekin 2 xonali kiritsa chalkash bolib ketadi
// let result = arr.sort((a,b) => a-b) // Bu xolatda yozsak buzga ikki xonali raqamlarni ham bir xonali raqamlarni ham tartirb bilan chiqarib beradi.
//Biz endi harflarni bir tartib bilan chiqarmoqchi bolsak bu yoldan foydlanamiz
// let result = arr.sort((a,b) => a.localeCompare(b)) // localeComparedan foydalansak boladi bu taqqoslab tartiblab beradi
// console.log(result);
// ---------------------------------------map()---------------------------------------------------
// Biz buni for loop() ga oxshatsak boladi faqat bu array bilan ishlaydi arrayni valuelarini chiqarib beradi indexlarini
// chiqarib beradi va arrayni ozini malumoti aancha bolsa ana shuncha qilib arraygsa solib chiqarib beradi
// let arr = [
//     'Rahimjon','Xujaqulov','13'
// ]
// arr.map((value,index,Array) => {
//     console.log(value);// Bu qiymatlarini chiqarib beradi
//     console.log(index);// Bu indexlarini chiqarib beradi
//     console.log(Array); // Agar biz array deb yozadigan bolsak Bu bizni ozgaruvcini aiymati nechta bolsa uhancha chiqarib beradi
// });
// Endi biz parametrga har doim value index , array , deb yozishimiz shartmi desak Bu yuq bu yerda ketma ketlik muhim
// Biz keyin buy 3 ta parametrni berishimiz shart emas Qaysi kerak bolsa yozib ishlatamiz Array maslan 99foizda ishlatilmaydi
// ---------------------------------------forEach()---------------------------------------------------
// Bu ham map() bilan bir xil Bularni ozroq farqi bor
// let arr = [
//     'Rahimjon','Xujaqulov','13'
// ]
// arr.forEach((value , index, Array ) => {
//     console.log(value); // Value desak valuelarini chiqarib beradi 
//     console.log(index); // Bu indexlarini chiqarib beradi
//     console.log(Array);  // Bu arrayimiz ichida necha malumot bolsa hammasini ana shuncha qilib chiqarib beradi
// })
// Bu ikkalsi ham bir xil ishlasa bularni farqini koramiz 
// Map() bilan forEach() ni farqi
// let arr = [
//     'Rahimjon','Xujaqulov','13'
// ]
// let NewArr = arr.map((value) => {
//     return "Salom"; // Biz map() ishlatsak valueni qiymatini uptade qila olamiz 
// });
// console.log(NewArr);

// let arr = [
//     'Rahimjon','Xujaqulov','13'
// ]
// let NewArr = arr.forEach((value) => {
//     return "Helo";
// })
// console.log(NewArr); // Biz forEachda valueni uptade qilaolmaynmiz 
// Agar bizga valueni uptade qilish kerak bolsa map() ishlatamiz agar uptade qilish kerak bolmasa forEach() ishlatamiz
// ---------------------------------------filter()---------------------------------------------------
// let arr =  [
//    123, 1,2,3,4,5,6,7,8,9,10000
// ]
// let filterted = arr.filter((value,index,Array) => {
//     // return value Bu valuelarini return qilib beradi 
//     // return index // Indexlarni return qilib bermaydi
//     // return Array // Bu arrayni ham return qilib beraydi
//     // console.log(value); // Bu xolatda ishlatib beradi 
//     // console.log(index); // indexini ham chiqarib beradi
//     // console.log(Array); // Bu ham ishlaydi nechta malumot bolsa shuncha aray qilib beradi
// })
// console.log(filterted);
// let arr =  [
//     123, 1,2,3,4,5,6,7,8,9,10000, "200"
//  ]
// let filterted = arr.filter((value) => {return value < 7}) // Biz bu filter() ni Shu xoltada ishlatsak boladi
// // katta bolgan raqamlarni chiqar kichkina bolgan raqamlarni chiqar teng bolgan deyishimiz mukun filter shu xolatda ishlaydi
// console.log(filterted);
// ---------------------------------------find()---------------------------------------------------
// Bu array ichidan maumotlarni qidiradi
// let arr =  [
//     123, 1,2,3,4,5,6,7,8,9,10000, "200"
//  ]
// let fined = arr.find((value,index , array)) Bu ham uchtta qiymat oladi qiymatlarni return qilsak odatdagidek ishlaydi 
//Keyin buni vazifasi boshqa
// let fined = arr.find((value) => value === 10000) // Bu ha =m true false boladi true bolsa usha rqamni hiqarib beradi.
// false bolsa undefined chiqarib beradi buni filter()dan farqi filter arrayga solib chiqaradi bu ozini shunday chiqaradi
// console.log(fined);
// ---------------------------------------findIndex()---------------------------------------------------
// Bu ham find()ga oxshaydi finindex() bu raqamlarni yozsak nechu=inchi index da turganini chiqarib beradi 
// Agar yo'q malumot yozsak bu -1 chiqaradi
// let arr =  [
//     123, 1,2,3,4,5,6,7,8,9,10000, "200"
//  ]
//  let finded = arr.findIndex((value) => value === 50 )
//  console.log(finded);
// ---------------------------------------some()---------------------------------------------------
// Bizda array qiymatlari bor biz uni ichida biz yozgan raqamlardan kichigi ham bormi yoki yuqligin bilmoqchimiz
// Biz bu xolatda some() dan foydalansak boladi. Bu some() huddi Locigal Orga oxshab ishlidi bittasi true bolsa boldi
// true chiqaradi
// let arr = [
//     30,20,50,78,65
// ]
// let some = arr.some(value => value < 30)

// console.log(some);
// ---------------------------------------every()---------------------------------------------------
// let arr = [
//     30,20,50,78,65
// ]
// let some = arr.every(value => value < 79) // Bu Locigal and ga oxshab ishliydi
// console.log(some);
// ---------------------------------------reduce()---------------------------------------------------
// BU array ichdagi malumtlarni qushadi
// let arr = [
//     30,20,50,78,65
// ]
// let result = arr.reduce((initial , total) => initial + total)
// console.log(result);