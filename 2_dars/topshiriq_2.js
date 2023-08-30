let userName = "1rahimjon";
let password = "12323443344";
let specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

if (specialChars.test(userName)) {
    console.log("Xatolik: Siz bunday belgilar yoz olmaysiz!");
    return false;
  }
if(/^\d|\d$/.test(userName)){
    console.log("Xatolik: Foydalanuvchi nomi raqam bilan boshlanmasligi kerak!");
    return false;
}
if (userName.length === 0) {
    console.log("Xatolik: Foydalanuvchi nomini kiritishingiz kerak!");
    return false;
  }
if(userName.length > 3  && password.length > 8){
    console.log("Siz ro'yhatdan o'tdingiz");
}
else{
    console.log("Nimadur xato ketdi");
}






