// let result = 0;
// // 20

// for (let i = 0; i < str.length; i++){
    //     // console.log(number[i]);
    //     result += +str[i]
    // }
    
// console.log(result);
    
// let str = '5645';
// let toArr = str.split("");
    
// console.log(toArr.reduce((a, b) => a + +b, 0));


// let str = 'WBA';
// ABW

// let toArr = str.split("");
// let reversed = toArr.reverse();
// let toStr = reversed.join("");
// console.log(toStr);


// let num = 2451734;
// let sorted = num.toString().split("").sort((a, b) => a - b);
// let toNumber = sorted.join("");
// console.log(typeof Number(toNumber));
// let arr = [1,[3,[5],],[10, [100]]];

// let flatted = arr.flat(Infinity);
// let reduced = flatted.reduce((a, b) => a + b);

// console.log(typeof reduced);



// let cars = [
//     { id: 1, year: 1998, engine: 1, name: "Tico" },
//     { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
//     { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
//     { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
//     { id: 5, year: 2012, engine: 2, name: "Malibu" },
//     { id: 6, year: 2000, engine: 1.2, name: "Damas" },
//     { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
    // {id: 8, name: 'Jetour'}
// ];

// // eski status qushish
// const filtered = () => {
//     let filtering = cars.filter((value) => value.year > 2000 && value.year < 2010);
//     let mapped = filtering.map((value) => {
//         return {...value, status: 'Urta'}
//     })
    
//     console.log(mapped);
// }

// filtered();


// sort by name
// const sorted = () => {
//     return cars.sort((a, b) => a.name.localeCompare(b.name));
// }

// console.log(sorted());



// sort by year
// const sorted = () => {
//     return cars.sort((a, b) => a.year - b.year);
// }

// console.log(sorted());


// sort by engine power
// const sorted = () => {
//     return cars.sort((a, b) => a.engine - b.engine);
// }

// console.log(sorted());




// sort by year 2010 dan katta
// const filtered = () => {
//     return cars.filter(value => value.year > 2010);
// }

// console.log(filtered());



// sort by year 2000 dan kichkina
// const filtered = () => {
//     return cars.filter(value => value.year < 2000);
// }

// console.log(filtered());

// delete by id
// const onDelete = (ids) => {
//    return cars.filter((value) => value.id !== ids);
// }

// console.log(onDelete(5));

// CRUD => Create, Read, Update, Delete

// const onCreate = (car) => {
    
// }

// onCreate({});

// const onUpdate = (car) => {
    
// }

// onUpdate({id: 1});

// destructure in array

// let arr = ['Nozimjon', 'Nursulton', 'Rahimjon'];

// const [user3] = arr;

// console.log(user3);

// ===========================================================================

// spread in array
// let cars = [
//         { id: 1, year: 1998, engine: 1, name: "Tico" },
//         { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
//         { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
//         { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
//         { id: 5, year: 2012, engine: 2, name: "Malibu" },
//         { id: 6, year: 2000, engine: 1.2, name: "Damas" },
//         { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
// ];
 
// cars.map(({id}) => {
//     console.log(id);
// })

// spread in array

// console.log(arr);
// var arr = [1, 2, 3, 4, 5];
// let map = cars.map((value) => {
//     return {...cars, }
// })


// TDZ => temporal dead zone








