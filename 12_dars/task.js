// let number = "1234"
// for (let i = 0; i < number.length; i++) {
    //     parseInt(result += number[i])
// }
// console.log(result);

// let result = number.split("").reduce((a , b) => +a + +b )
// console.log(result);
// let number = "1234"
// let reversed = number.split("").reverse().join("")
// console.log(Number(reversed));

// let number = "abcdefghijklmnopqrstuvhshh";
// let reversed = number.split("")
// let sort = reversed.sort((a,b) => b.localeCompare(a)).join(",")
// console.log(sort);
// let arr = [1,[3,[5],],[10, [100]]];
// let flated = arr.flat(Infinity)
// let reduce = flated.reduce((a , b ) => a + b )
// console.log(reduce);

// let arr = ["olma" , "Uzum" , "Nok", "Anor" , 'Banan']
// let deleteMeva = (Array) =>{
//     let filtered = arr.filter(value => value !== Array)
//     console.log(filtered);
// }
// deleteMeva("olma")


// let user = [
//     {id: 1, year: 1998, engine: 1, name: "Tico"},
//     {id: 2, year: 2005, engine: 1.2, name: "Matiz"},
//     {id: 3, year: 2010, engine: 1.6, name: "Gentra"},
//     {id: 4, year: 2010, engine: 1.5, name: "Cobalt"},
//     {id: 5, year: 2012, engine: 2, name: "Malibu"},
//     {id: 6, year: 2000, engine: 1.2, name: "Damas"},
//     {id: 7, year: 2018, engine: 2.4, name: "Tracker"},
// ]

// let Myfunction = ()=> {
    // let maps = user.map((value) => {
    //     return {...user, id: 8, year: 2016,engine: 1.6, name: "Nexia" }
    // })
    // console.log(maps);
// }
// Myfunction();
// let statusFunction = () => {
//     let filtered = user.filter((value , index) => value.year >= 2000 && value.year <= 2010)
//     let maps = filtered.map(value => {
//         return {...filtered , status: "O'rta "}
//     })
//     console.log(maps);
// }
// statusFunction()

// let statusFunction = () => {
//     let filtered = user.filter((value,index) => value.year > 2010 && value.year < 2023)
//     let maps = filtered.map(value => {
//         return {...filtered, status : "Yangi"}
//     })
//     console.log(maps);
// }
// statusFunction()

// let statusFunction = () => {
//     let filtered = user.filter((value) => value.year < 2000)
//     let maps = filtered.map((value) => {
//         return{...filtered, status: "Eski"};
//     })
//     console.log(maps);
// }
// statusFunction();


// let nameFuncion = () => {
//     let sort = user.sort((value,index) => value.name.localeCompare(index.name))
// }
// nameFuncion()


// let engine = (cars) => {
//     let sort = user.sort((value , index) => value.engine - index.engine)
//     console.log(sort);
// }
// engine()

// let yearFunction = () =>{
//     let sort = user.sort((value,index) => value.year - index.year)
//     console.log(sort);
// }
// yearFunction()

// const onDelete = (id) => {
//     let filtered = user.filter((value) => value.id !== id)
//     console.log(filtered);
// }

// onDelete(5)




// let arr = [1,4,53,4,87,65,7,453,45,2]
// let string = arr.join()
// let number = parseInt(string)
// let maxNumber = Math.max(number)
// console.log(number);


// function evenOrOdd(number) {
//     if (number % 2 === 0) {
//         console.log("Juft son");
//     }
//     else if (number % 1 === 0) {
//         console.log("Toq son");
//     }
//   else {
//     console.log("Raqamni kiriting")
//   }
//   }
//   evenOrOdd(4)


// function even_or_odd(number) {
//     return number % 2 ? console.log("Even") : console.log("Odd");
//   }
//   even_or_odd(2)
// let arr = [
//     { id : 1, year: 1998, engine: 1, name: "Tiko" },
//     { id : 2, year: 2005, engine: 1.2, name: "Matiz" },
//     { id : 3, year: 2010, engine: 1.6, name: "Gentra" },
//     { id : 4, year: 2010, engine: 1.5, name: "Cobalt" },
//     { id : 5, year: 2012, engine: 2, name: "Malibu" },
//     { id : 6, year: 2018, engine: 2.4, name: "Tracker" },
//     ];
    // ---------------------------------Read--------------------------------------------
    // let ReadFunction = (value) => {
    //     let filtered = arr.filter((a) => a.year < value)
    //     console.log(filtered);
    // }
    // ReadFunction(2000)
// --------------------------delete------------------------------------------------------
    // let deleteFunction = (deletevalue) =>{
    //     let filtered = arr.filter((a) => a.id !== deletevalue)
    //     console.log(filtered);
    // }
    // deleteFunction(5)
//     let deleteFunction = (deletevalue) => {
//         let filtered = arr.filter((a) => a.id !== deletevalue)
//         console.log(filtered);
//     }
// deleteFunction(2)
// ------------------------------------- create ---------------------------------------------------------
    // const createFUnction = (year,engine,name) => {
    //     return [
    //         ...arr, {
    //             id: arr.length + 1,
    //             year: year,
    //             engine: engine,
    //             name: name,
    //         }
    //     ]
    // }
    // console.log(createFUnction(2023,4,"KIA"));
        // let createFunction = (year,engine, name) => {
    //     return arr.map(value => {
    //         return [
    //             ...arr,
    //             {
    //                 id: arr.length + 1,
    //                 year: year,
    //                 engine: engine,
    //                 name: name
    //             }
    //         ] 
    //     })
    // }
    // console.log(createFunction(2010, 1.6, "Nexia"));
    // -------------------Update -------------------------------------------
    // const updateKey = ({id, key, value}) => {
    // return arr.map(obj => {
    // return obj.id === id ? {...obj, [key]: value } : obj;
    // });
    // };
    // console.log(updateKey({ id: 5, key: "name", value: "jiguli"}));

// const updateKey2 = ({id,key,value}) => {
//     return arr.map(obj => {
//         return obj.id === id ? {...obj, [key]: value} : obj
//     }
//     ) 
// }
// console.log(updateKey2({id : 5, key: 'name', value: "Jiguli"}));

