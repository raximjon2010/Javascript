// Operators +,-,*,/,%,(),=, ++, -- , **,
// let num1 = 20;
// let num2 = 39;
// console.log(num1 + num2); // Bu qo'shish yani ikkita raqamni bir biriga qoshadi 
// bu raqamni ornida bittasi string korinishida bolsa bu ikklasini yonma yon qilib quyadi
// let num1 = 50;
// let num2 = 39;
// console.log(num1 - num2); // bu num1dan num2ni ayiryapti javob 11;
// let num1 = 50;
// let num2 = 39;
// console.log(num1 * num2); //bu num1ni num2 ga kopaytirib beradi Yani bu kopaytirish
// uchun ishlatiladi.
// let num1 = 10;
// let num2 = 2;
// console.log(num1 / num2); // bu bolish uchun ishlatiladi
// let num1 = 11;
// let num2 = 2;
// console.log(num1 % num2); // bu qoldiqni xisoblash uchun ishlatiladi
// 11ni 2ga bolsak 5 va 1 ta raqam ortiqcha shu qoldiq deyiladi va terminalga qoldiqni  
// chiqaradi 
// let num1 = 50;
// num1 = num1 + 12 // biz bu xolatda shu num1ni raqamini ozgartira olamiz lekin buni qisqa 
// yollari ham bor.
// num1 += 20; // bu yuqoridagini qisqartirma holati 
// num1 ++; // bu xolat bitta qoshib quymoqchi bolsak ishlatamiz boshqa holatda ishlatib bolmaydi
//bu xolatda faqat 1 raqam qoshiladi.
// num1 --; bu -- esa bitta raqam kamaytiradi yani 50 bolsa 49 qilib quyadi.
// console.log(num1);
// console.log(4 ** 2); bu yerda darajaga oshiradi yani 4 ni 2 darajasi deyapti bu 16;
// Comparision - bu taqoslash taqqoslashda har doim true yoki false qaytartadi.
// (==,===,<=,>=)
// == taqqoslash bunda agar bitta raqam bitta string bolsa raqam ham 10 string ham 10 bolsa
// bu yerda == 2ta tenglik bolsa bu true qaytaradi gar === tenglik bolsa bu false qaytaradi
// Chunki === tenglik bu data typeni ham tekshiradi
// let num1 = 10;
// let num2 = '10';
// console.log(num1 == num2); // bu xolatda true chiqaradi chunki bu ichidagi malumotni oladi
// let num1 = 10;
// let num2 = '10';
// console.log(num1 === num2); // bu false qaytaradi chunki bularni bittasi string bittasi number
// hozir bu yerda num2 ni stringdan chiqarsak bu true chiqaradi chunki bularni 
// qiymati ham 10 data type ham number boladi.
// let num1 = 10;
// let num2 = 15;
// console.log(num1 < num2); // bu xolatda true chiqaradi chunki num2 katta num1da deyapmiz bu true chiqaradi

// let num1 = 10;
// let num2 = 15;
// console.log(num1 > num2); // bu false qaytaradi chunlki num1 num2da katta emas.
// let num1 = 10;
// let num2 = 10;
// console.log(num1 <= num2); // Biz bu xolatda yozsak true chiqaradi chunki biz num2 num1dan katta 
// yoki kichikmi deyapmiz bu yerda =likni quymasak bu hozirgi holati teng bolsa false qaytaradi
// chunki bular bir biriga teng emas deb = tenglikni quysak bu true boladi.

// Logical Operations: (&& va ||) bunda 2 ta qiymat bor OR va AND degan qiymatlari bor.
// OR  bu bitta amal qoniqtirsa boldi bu true chiqaradi 
// And - esa qachonki ikkkalsi ham true bolsa keyin true qaytaradi.
// console.log(DEREKTOR === "derektor bor" ||QOROVUL  === "qorovul bor");
// console.log(Derektor === true && Qorovul === false);




//Type conversions- Malumotlarni bir turdan ikkinchi turga otkazib olish
// let str = '12'
// console.log(+str);
// console.log(Number(str));
// console.log(parseInt(str));
// console.log(parseFloat(str));
// console.log(str);

// strga otkazish 
// let num = 122321124;
// let result = num.toString();
// console.log(result); // strga otkazish bu xolatda boladi