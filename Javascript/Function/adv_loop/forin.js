//*🧠 What is for...in loop?

//* for...in loop object ke keys (ya indexes) ko iterate karta hai.
//* Yeh loop objects ya arrays ke properties/indexes ke upar chalta hai — values nahi!

//* ✅ Syntax:for (let key in object) {
//   // code using key
// }

//*🔍 Example 1: Object ke keys loop karna
// const student = {
//   name: "Aman",
//   age: 21,
//   city: "Kotdwar"
// };

// for(let aman in student){
//    // console.log(aman)//* name age city
//     console.log(student[aman])//aman 21 kotdwar
// }

// //*🔍 Example 2: Array ke indexes loop karna
// const fruits = ["apple", "banana", "mango"];
// for(let ankit in fruits){
//    // console.log(ankit)//0,1,2
//     console.log(fruits[ankit]) apple,banana, mango
// }


//*Key difference very imp
// let obj = {
//   name: "Aman",
//   age: 21,
//   city: "Kotdwar"
// };
// let obj2=Object.create(obj) //inherit prototype
// obj2.money=420;
// obj2.id="aman"
//console.log(obj2) //{ money: 420, id: 'aman' } sirf iska hi print hoga
//but for in loop se inherit wala aur iska dono print hoga
// for(let key in obj2){
//     console.log(obj2[key])///420 aman Aman 21 Kotdwar
// }

//* imp-question per obj.protoye me tostring and another sare method ka key print kyo nai kar rha kya reason hain
// let obj={};
// obj.name="aman"
//key value writable enumerable configurable
//console.log(Object.getOwnPropertyDescriptor(obj,"name"))//*{ value: 'aman', writable: true, enumerable: true, configurable: true } kya hai ye
//Writable true hai to objname ki value change kar sakte hai
// obj.name="ankit";
//*configurable true hai to aap writable and enumerable change kar sakte hain
// let obj={};
// Object.defineProperty(obj,"name",{
//       value: "Aman",
//   writable: false,
//   enumerable: true,
//   configurable: false //*to hm ab writable enumerable change nai kar sakte
// });
// Object.defineProperty(obj,"name",{
// writable:true,
// })
// obj.name="ankit"//value cant change
//*obj.name="raj"// ❌ won't change the value

// const ob1={
//     name:"aman",
//     age:23,
//     account:30000
// }
// Object.defineProperty(obj1,"account",{
//     writable:false
// })
// obj1.account=20000 //but main change karna nai chahta to writable false kiye

//*Enumerable.jis bhi key ka enumerable true hoga uska key access hoga aur inherit karki bhi jo key aayega uska key bhi access hoga
// const obj1={
//     name:"aman",
//     age:23,
//     account:30000,
// }
// Object.defineProperty(obj1,"name",{
//     enumerable:false,
// })
// for(let key in obj1){
//     console.log(key)// ,age ,account name wala key nai aaya
// }

// const customer={
//     name:"aman",
//     age:23,
//     account:30000,
// }
// let customer2=Object.create(customer);
// customer2.city="patna";
// customer2.place="delhi";

// Object.defineProperty(customer,"name",{
//    enumerable:false,})

//    for(let key in customer2){
//     console.log(key)// name ko chorker sab key print karega  customer1 and customer2 ka
// }
//*imp vvip concept
//* per customer1 bhi to object se property method inherit karta hai per wo print kyo nai hota hai 
//* kyoki uske enumerable false rehta hai


//**For in loop : isko array ke sath nai lete
//arr is an object
// const arr=[10,20,30]
// //*but arr obj hai aisa bhi likh sakte hai
// arr.name="Rohit"
// for(let key in arr){
//     console.log(key)//0,1,2, name but name index thode hota hai isiliye hmlog use nai karte
// }


// *🧠 Difference Between:

// *1️⃣ Object.getOwnPropertyDescriptor()

// *2️⃣ Object.defineProperty()

// *3️⃣ Object.defineProperties()

// ✅ 1. Object.getOwnPropertyDescriptor(obj, prop)

// 🔍 Use:
// Kisi specific property ke descriptors (jaise value, writable, enumerable, configurable) ko dekhne ke liye use hota hai.
// 🧪 Example:
// let person = { name: "Aman" };

// let desc = Object.getOwnPropertyDescriptor(person, "name");
// console.log(desc);
// 📤 Output:
// {
//   value: 'Aman',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
//*⚠️ Default descriptors: true hote hain when defined normally.
// 🛠️ 2. Object.defineProperty(obj, prop, descriptor)

// ⚙️ Use:
// Ek single property ke saare descriptors define ya update karne ke liye.

//🧪 Example:
// let user = {};
// Object.defineProperty(user, "id", {
//   value: 101,
//   writable: false,
//   enumerable: false,
//   configurable: false
// });

// 🧰 3. Object.defineProperties(obj, descriptorsObj)

// 🔧 Use:
// Ek hi baar mein multiple properties ko define karne ke liye.

// 🧪 Example:
// let user = {};
// Object.defineProperties(user, {
//   name: {
//     value: "Aman",
//     writable: true
//   },
//   age: {
//     value: 22,
//     writable: false
//   }
// });

