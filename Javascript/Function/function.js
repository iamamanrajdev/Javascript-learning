//* 📌 What is a Function in JavaScript?

// *👉 A function is a reusable block of code designed to perform a particular task.
// function greet(){
//     console.log("hello")
//      console.log("hell")
//        console.log("Bell")

// }

// greet();

//*add program
// function sum(num1,num2){ //parameter
// console.log(num1+num2)
// }

// sum(3,4)//7 argument pass karna

//*Multiplication
// function multiply(num1,num2){
//     return num1*num2

// }
// console.log(multiply(4,5))//20

//*Variable me bhi store kar sakte hai function ko
// const fun=function(){
//     console.log("hello")
//     return 20;
//     console.log("hi")//return ke niche kuch bhi kam nai karega
// }

// console.log(fun())//hello ,20

//*********************************************************************************************** */
//*Arrow function
// const fun=()=>{
//     console.log("hello")
// }

// fun()//hello

//*Advantage of using Arrow function
// const sum=(num1,num2)=>{
//    return num1+num2
// }

// console.log(sum(3,4))//7

//*Single line me likh sakte hai
//const sum=(num1,num2)=>num1+num2 //*Note single parameter hai to {} nai lagta hai per ek se jyada arguement honge to lagega
// console.log(sum(3,4))//7

// const cube=(num)=>num*num*num
// console.log(cube(3))//27

//*********************************************************************************************** */

//*🔍 What is ...number? (Rest Parameter)
//*•Jab aap ... lagate ho kisi parameter ke aage (like ...number), to wo baki sab arguments ko ek array me collect kar leta hai.
//*•Iska matlab: function kitne bhi arguments accept kar sakta hai, sab ek array ban ke milenge.
// const fun=function(...number){
// console.log(number)
// }

// fun(2,3,4)//[ 2, 3, 4 ]
// fun(2,3,4,5)//[ 2, 3, 4, 5 ]

//*********************************************************************************************** */
//*Tu ne ek object destructuring with function parameter ka use kiya hai.
//*Chalo ekdum clear aur simple tareeke se samajhte hain:
// let obj={
//     name:"aman",
//     city:"patna",
//     amount:420,
// }

// function fun({name,amount}){
// console.log(name,amount);
// }
// fun(obj)//aman 420
//*********************************************************************************************** */
//*Prototype in function
// const first=function(){
//     return 5;
// }

// first.__proto//function prototype
// first.__proto__.__proto__//object.protoptype
// first.__proto__.__proto__.__proto__//null

//*********************************************************************************************** */

//*How to check pass-by value or pass-by reference?
//*🧪 Let’s Test with an Example:
// ✅ Pass-by-Value (Primitive Types)
// let a = 10;
// let b = a;
// b = 20;

// console.log(a); // 10 ❌ Not affected
// console.log(b); // 20 ✅ Changed
//*🧠 Here, a and b are independent because numbers are primitive types (pass-by-value).

//*🟠 Pass-by-Reference (Non-Primitives like objects or arrays)
// let obj1 = { name: "Aman" };
// let obj2 = obj1;

// obj2.name = "Rohit";

// console.log(obj1.name); // Rohit ✅ Changed!
// console.log(obj2.name); // Rohit ✅ Changed!


//*Imp example-✅ 2. Pass-by-Reference (Non-primitive like array, object)
// let obj = { score: 100 };

// function update(scoreObj) {
//   scoreObj.score = 200;
// }

// update(obj);
// console.log(obj.score); // Output: 200 ✅ Changed

//*🔎 Kyun?

//*scoreObj actually obj ka reference hold karta hai, matlab dono same memory pe point karte hain.
//*⚠️ Lekin ek twist bhi hai:

//*Agar function me poora object ya array ko hi reassign kar diya, tab reference break ho jata hai.
// let obj = { score: 100 };

// function update(scoreObj) {
//   scoreObj = { score: 999 }; // 🔥 New object ban gaya
// }

// update(obj);
// console.log(obj.score); // Output: 100 ❌ Not changed