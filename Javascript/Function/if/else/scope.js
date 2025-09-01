//*SCOPE KE BARE MEIN
//* GLOBAL SCOPE,LOCAL SCOPE(FUNCTIONAL SCOPE),BLOCK SCOPE
//*GLOBAL SCOPE
//* 1️⃣ Global Scope 🌍

// *📍 Variable declared outside any function or block

//* ✅ Accessible anywhere in the file

// let name = "Aman";

// function greet() {
//   console.log(name);  // ✅ Works here
// }

// greet();
// console.log(name);    // ✅ Works here too

//*2️⃣ Function Scope 🔒
// 📍 Variable declared inside a function

// ❌ Can’t access it outside the function
// function sayHello() {
//   let greeting = "Radhe Radhe!";
//   console.log(greeting); // ✅ OK
// }

// sayHello();
// console.log(greeting);   // ❌ Error: greeting is not defined

// //*BLOCK SCOPE
// if(true){
//     let a=10;
//     var b=20;
//     const c=30;
// }
//console.log(b)//20 🤯 But var ignores block scope – behaves like global/function scoped!
//*  (with let and const) allowed nai hota block ke bahar


// let amount =20; //ye global scope hai
// if(true){
//     let amount=30;//ye block scope hai ye allowed hoga kyoki dono alag alag represent kar rha hai
//     console.log(amount);
// }

// console.log(a)//not allowed
// console.log(b)//error
// console.log(c)//undefined but access kar sakte hain
// let a=1;
// let b=2;
// var c=3;


//*Two ways to define a function

// greet(); //yaha greet pehle bhi access kar sakte hai 
// function greet(){ 
//     console.log("hello")
// }

// meet();//error not allowed kyoki const block scoper meya function scope ke baad hi access ho sakta hain
// const meet=function meet(){ 
//     console.log("bello")
// }


//*while loop
// let i=1;
// while(i<6){
//     console.log(i)
//     i++
// }


// let arr=[10,20,30,40,50]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// const obj={
//     name:"aman",
//     age:30,
//     amount:420,
//     city:"kotdwar"
// }

// //*ab key value access karna hai obj.key and obj.value isse bhi access kar sakte hain
// const key=Object.keys(obj);
// for(let i=0;i<key.length;i++){
//     console.log(obj[key[i]])// sarivalue print kar dega
// }

//*Do while loop
// *🧪 Example 1: Basic do-while
// let count = 1;

// do {
//   console.log("Count is:", count);
//   count++;
// } while (count <= 5);
//*🧪 Example 2: Jab condition false ho pehle se
// let x = 10;

// do {
//   console.log("This runs even if condition is false");
// } while (x < 5);

//** important */ output-This runs even if condition is false
// ✅ Use do...while When:
// 	•	Tumhe kam se kam ek baar kaam karwana hi hai
// 	•	Pehle action, baad mein validation


