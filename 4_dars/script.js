// if/else, switch/case,  ternary

// if (false) {
//     console.log(1);
// } else if (false) {
//     console.log(2);
// } else if (false) {
//     console.log(3);
// } else {
//     console.log('else');
// } // Bu yera  condeshin true yoki false bolishini kutadi true boldi demak console.logni ichidagi malumotni chiqazib berad
// agar false bolsa keyingisini tekshiradi bu ham false bolsa keyingini tekshiradi u true demak shuni oladi agar false
// bolsa hech qaysi shart qanotlantirmasa elseni ichidagi kodni oqiydi va shuni chiqazib beradi.

// var car = 'Malibu';
// var color = 'yellow';

// if (car === 'Malibu') {
    
//     if (color === 'red') {
//         console.log('qizil mashina');
//     } else if (color === 'yellow') {
//         console.log('sariq mashina');
//     } else {
//         console.log('rangsiz mashina');
//     }
    
// } else {
//     console.log('Bunday mashina yuq');
// }
// Bu yerda birinchi bolib birinchi varni oqiydi Va u true bolsa Uning ichiga kiradi va keyingi varni oqiydi 
// buni ichidagi qaysi true bolsa ana ushani chiqazib beradi. Agar bu shart yani ifni ichidagi togri kelmasa 
// rangsiz mashinani chiqaradi agar katta if tugri kelmasa Bunday mashina yuqni chiqaradi.


// let gentra = 10; 
// if (gentra === 10){
//     console.log('10 000 000');
// }
// if(gentra === 10){
//     console.log("15 000 000");
// }
// Javascriptda single Thread degan narsa bor bu bir vaqtni ozida bitta kodni oqiydi keyin ikkinchisini o'qiydi
// Hozir bu yerda shunaqa holat bolyapti gentra 10 ga tengmi teng bolsa 10 000 000 chiqar deyapmiz bu true boladi va buni chiqaradi
// Keyin yana if qilib huddi shhunday gentra teng bolsa 10 ga  deyapmiz 15 000 000 ming chiqar deyapmiz. bu ham true
// demak  bu yerda biz ikkalsini ham if qilib yozaypmiz bu yangi ifni gruppasi ochildi degani endi bu ikkalasini ham chiqaradi

// let age = 2;
// if (age >= 18 ){
//     console.log("Siz ovoz bera olasiz");
// }
// else if(age < 5){
//     console.log("siz hali bolasiz");
// }
// else if(age <= 18 && age < 5){
//     console.log("siz ovoz bera olmaysiz");
// }
// buni biz order desak boaldi yani ketma ketligi orderi yuqmi ishlamay qoladi. Biz shuning uchun kichkina raqamdan 
// boshlab yozishimiz kerak.

// let login = 'rahimjon';
// let pw = 2010;
// if(login === 'rahimjon' && pw === 2010){
//     console.log("Sahifangizga xush kelibsiz");
// } 
// else {
//     console.log("login yoki passwordda xatolik bor");
// }
// Hozir bu yerda && bu belgi and operator Locical operatorsdagi and bu and ikkalsi ham true bolsa keyin truew chiqarardi.
// Endi bu yerda login va password truemi demak ISz saxifangizga xush kelibsiz chiqadi agar login yoki passowrddan 
// bittasi true bolmadimi demak bu false qaytaradi.


// switch/case - Switch bu xuddi if elsega oxshaydi if else nima vazifa bajarsa bu ham hudii shu vazifani bajaradi
//  let kun = 2; // ===
//  switch (kun) {
//      case 1: console.log('Dushanba'); break;
//      case 2: console.log("Seashanba"); break;
//      case 3 : console.log("Chorshanba");break;
//      case 4: console.log("Payshanba"); break;
//      case 5: console.log("Juma");break;
//      case 6: console.log("Shanba");break ;
//      case 7: console.log("Yakshanba"); break;
//  }
 // Switch shu tarizda yoziladi bunda break quyib ketishimiz shart chunki keyingi kodga otib ketmaslik uchun 
 // Agar break quymasak undan keyingi kodlarni ham ishlatib tashlaydi. 

// let one = '1';   // == or ===

// if (one == 1) {
//     console.log('Bir');
// }
// Bu switch bilan if elseni farqi agar biz if else da taqqoslash belgisini quyib variable qiymati masalan string 
// lekin if elseda number qilib yozsak bu ishlaydi lekin qatiy tenglik quysak ishlamaydi. Switchda bu xolat umuman 
// ishlamaydi. Bularni farqi shunda.

// ternary operator

// let color = 're';

// color === 'red' ? console.log('Togri') : console.log('Notugri');

// let age = 18;
// age >= 18 ? console.log("Siz gmail ocha olasiz") : console.log("Siz gmail ocha olaysiz");

// const age = 17;

// const citizen = age >= 18 ? 'ovoz bera oladi!' : 'ovoz bera olmaydi!';

// console.log(citizen);

// nullish operator - Nullish bu null bilan undifined qaytarganda yani bizga foydalanuvchidan kelgan null va 
// undifined biz nullish orqali unga nimadir deb yozib qoysak boladi Bu saytni ishlashi uchun kerak

// let name = null ?? [];
// let name = undefined ?? null;

// let name = null ?? ['RAHIMJON']
// let user = undefined ?? ['rahimjon1201']

// console.log(name);
// console.log(user);

// let son = 45;

// 3 ga va 5 ga bulinadi
// 3 ga bulinadi
// 5 ga bulinadi
// 5 ga va 3 ga bulinadi










