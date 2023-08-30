// ---------------------------- 1 - topshiriq-------------------------------------------------------------


let DEREKTOR = "Maktab ochqmi";

 let kim = "Maktabda kim bor";

 if (DEREKTOR === "Maktab ochiqmi" || DEREKTOR === "Maktab ochiqmi?" || DEREKTOR === "maktab ochiqmi?" || DEREKTOR === "Maktab ochiqmi" || DEREKTOR === "maktab ochiqmi" || DEREKTOR === "Maktab yopiqmi?"
 || DEREKTOR === "maktab yopiqmi?" || DEREKTOR === "maktab yopiqmi" || DEREKTOR === "maktab qachon ochiladi?" 
 || DEREKTOR === "Maktab ishlayaptimi?"
 || DEREKTOR === "maktab ishlayaptimi?"
 || DEREKTOR === "Maktab ishlayaptimi"
 ){
    console.log("maktab ochiq kirishingiz mumkun");
}

 else if( DEREKTOR === "Maktab Tezroq Ochilsin."
        || DEREKTOR === "Maktab ishlayaptimi"
         ) {
    console.log("Maktab yopiq derektor yoki qorovul kelishini kuting!" || DEREKTOR === "maktab tezroq ochilsin.");
}

// ---------------------------- 2 - topshiriq-------------------------------------------------------------

function validateUsername(username) {
    let specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    
    if (specialChars.test(username)) {
      console.log("Xatolik: Foydalanuvchi nomida maxsus belgilarni ishlatishingiz mumkin emas!");
      return false;
    }
    
    if (username.includes(" ")) {
      console.log("Xatolik: Foydalanuvchi nomida bo'shliq ishlatishingiz mumkin emas!");
      return false;
    }
    
    if (/^\d|\d$/.test(username)) {
      console.log("Xatolik: Foydalanuvchi nomi raqam bilan boshlanmasligi kerak!");
      return false;
    }
    
    // Check if the username is empty
    if (username.length === 0) {
      console.log("Xatolik: Foydalanuvchi nomini kiritishingiz kerak!");
      return false;
    }
    
    console.log("Foydalanuvchi nomi to'g'ri formatda!");
    return true;
  }
  
  var inputUsername = prompt("Foydalanuvchi nomini kiriting:");
  validateUsername(inputUsername);














