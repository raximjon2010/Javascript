// Break or continue
// for (i = 1; i < 10; i++){
//     if (i === 3){
//         break
//     }
//     console.log(i);
// }
// Bu yerda break deb quysak i = 1 kichkinami i < 10 dan true demak ifni oqiydi if true masmi console.log(i) ni oqiydi
// terminal da keyin 1 ni chiqaradi keyin i++ qiymatni birga oshiradi va i ni qiymati i = 2 boladi i < 10 dan
// true mi demak ifga otadi if false boldimi demak console.log(i) ni oqiydi va  terminalda 2 ni chiqaradi.
// keyin i++ qiymagtni birga oshiradi va i = 3 boladi i = 3 kichkinami i < 10 dan true mi demak ifni oqiydi
// ifni connditionnida i === 3 mi degan true demak endi break ishlaydi Va shhu yerda tuxtaydi.
// for(i =1 ; i < 10; i++){
//     if (i === 5) {
//         continue
//     }
//     console.log(i);
// }
//  Endi bu yerda ifni  conditionni teng bolsa 5 ga continue deyapi yani 5 ni otkazib yuboradi 
// Yani terminalda 5 dan boshqa 10gacha bolgan raqamlar chiqadi. Biz buni 3 deyishimiz ham mumkun boshqa.
// Nestit Loop - bu For loop ichida for loop degani yani for loopni ichida forloop yozamiz
// for(i = 1; i <= 1 ; i++){
//     console.log("============1 Karra================");
//     for(j = 1 ; j <= 10; j++){
//         let sum = 1;
//         console.log(`${sum} * ${j} = `, sum * j);
//     }
//     console.log("============2 Karra================");
//     for(k = 1 ; k <= 10 ; k++){
//         let sum = 2;
//         console.log(`${sum} * ${k} = `, sum * k);
//     }
//     console.log("============3 Karra================");
//     for(l = 1 ; l <= 10 ; l++){
//         let sum = 3;
//         console.log(`${sum} * ${i} = `, sum * i);
//     }
//     console.log("============4 Karra================");
//     for(z = 1 ; z <= 10; z++){
//         let sum = 4;
//         console.log(`${sum} * ${z} = ` , sum * i);
//     }
//     console.log("============5 Karra================");
//     for(x = 1 ; x <= 10; x++){
//         let sum = 4;
//         console.log(`${sum} * ${x} = ` , sum * x);
//     }
//     console.log("===========6 Karra================");
//     for(c = 1 ; c <= 10; c++){
//         let sum = 4;
//         console.log(`${sum} * ${c} = ` , sum * c);
//     }
//     console.log("===========7 Karra================");
//     for(v = 1 ; v <= 10 ; v++){
//         let sum = 7;
//         console.log(`${sum} * ${i} = `, sum * i);
//     }
//     console.log("===========8 Karra================");
//     for(b = 1; b <= 10; b++ ){
//         let sum = 8;
//         console.log(`${sum} * ${b} = `, sum * b);
//     }
//     console.log("===========9 Karra================");
//     for(n = 1; n <= 10; n++){
//         let sum = 9;
//         console.log(`${sum} * ${n} = `, sum * n);
//     }
// }   bu kara kara jadvalini nestit loop da qilsa ham boladi.

// for(i = 1 ; i <= 4; i++){
//     console.log("Orab turuvchi loop", i );

//     for(j = 1 ; j < 4 ; j++){
//         console.log("Nestit Loop" , j);
//     }
// } 
//  Endi bu yerda birinchi for loop yanni katta for loop bir b=marta ishlaganda yanni i =1 ga keyin i <= 4; 
//  bu truemi keyin  console.log("Orab turuvchi loop", i ); bu ishlaydi bu bir marta yuradi
// Keyin nestit for loop ishlaydi u toliq yuradi keyin keyin i++ qiymatni birga oshiradi  keyin i ni qiymati 2 boladi
// i <=4  2 4dan kichkinami yoki tengmi deyapti 2 kichkina truemi keyin yana console.log() ishlaydi 
// yana nestit loop ishlaydi shu tariqa ketuvradi Katta loop bir marta yursa nestit loop ozini ishini tugatib keyin
// i++ ni qiymatini birga oshiradi
// while | do / whhile

// while  - Bu huddi for loop ga oxshaydi for loop nima vazifa bajarsa bu ham huddi shu vazifani bajaradi
// bularni kichkina farqi ham bor
// let i = 1;
// while(i < 10){
//     console.log("While" , i);
//     i++
// }
// Buni for loop dan farqi buni qavsini ichida faqat condition yoziladi Ozgaruvchi tashqarida biriktiriladi
// Shu contion true bolsa keyin conole.log() ishllaydi i++ oxirida quyish kerak har doim bolmasa ishlamaydi
// endi do/ while bilan farqi

// do/while
// let i = 0
// do{
// console.log(i);
// i++ 
// } while(i < 1)
// Buni bitta farqi condition pasida boladi, keyin conditon false bolsa ham i ni qiymatini chiqadi.





