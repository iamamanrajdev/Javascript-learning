let z;
var x;
let y;
console.log(x);
z=50;
console.log(y);
x=10;
y=20;
console.log(z)


//Hoisting in function 
// let a=20;
// let b=20;
// function add(num1,num2){
//     let result=num1+num2;
//     return result;
// }
// let ans=add(a,b);
// console.log(ans)

// //Case1
// sheet();
// function sheet(){
//     console.log("i am here")
// }

//case2
// meet();
// let meet=function(){
//     console.log("byy") //errorReferenceError: Cannot access 'meet' before initialization
// }
//case 3
// meter();
// var meter=function(){
//     console.log("aman")//❌ Output: TypeError: meter is not a function
// }


// 🔥 1. Execution Context (JS ka dimaag)

// Jab bhi JavaScript koi function ya code run karta hai:
// 	•	Memory Phase (Creation)
// 	•	Execution Phase

// 🧠 Creation Phase:
// 	•	Variables aur functions ko memory allocate kiya jata hai.
// 	•	var → undefined
// 	•	let & const → Not initialized (TDZ me chale jaate hain)
// 	•	Functions → poora function memory me chala jata hai

//     🔁 2. Hoisting – Lift ho jana!

// JavaScript variables aur functions ko top pe utha deta hai — memory me rakh leta hai before execution starts.

// ✅ Example 1: Hoisting with var
// console.log(a);   // undefined
// var a = 10;
// Explanation:
// 	•	Creation phase me a = undefined
// 	•	Execution phase me value assign hoti hai → 10

//     ❌ Example 2: Hoisting with let and const
//     console.log(b);   // ❌ ReferenceError
// let b = 20;
// Kyun?
// Because let/const hoist to hote hain, but unko initialize nahi kiya jata.
// Wo Temporal Dead Zone (TDZ) me chale jaate hain.


// ⸻

// ⛔ 3. Temporal Dead Zone (TDZ)

// TDZ = wo time jab variable hoist ho gaya hai but accessible nahi hai.

// ✅ Safe code:let x;
// console.log(x);  // undefined
// x = 5;

// ❌ Unsafe (TDZ):
// console.log(y);  // ReferenceError
// let y = 10;

// 🧠 Quick Real-Life Analogy:

// 👷 Execution Context:

// Jaise ek kitchen me cook ka dimaag – “kya kaha rakha hai” sab memory me banata hai pehle, fir kaam karta hai.

// ⚡ Hoisting:

// JavaScript pehle sab variable aur function ka naam top pe rakh leta hai memory me (hoisting).

// 🔐 TDZ:

// Jab tak tum let/const ko define nahi karte – JavaScript bolta hai:
// “Tumne yeh cheez rakhi hai, par main use nahi karne dunga abhi.”


// “Why is JavaScript called a synchronous, single-threaded language?”

// ⸻

// ✅ 1. JavaScript is Single Threaded

// 🔹 Single Threaded means:

// JavaScript has one call stack and can do one task at a time.

// ⛓️ Ek samay par sirf ek hi line of code run hoti hai.

// ⸻

// 🔸 Visual Socho:Call Stack:
// --------------
// |  log("Hi")  | ← abhi yeh run ho raha hai
// --------------Koi doosra kaam jab tak pehla finish nahi hota — start nahi hoga.

// ✅ 2. JavaScript is Synchronous (by default)

// Synchronous means — code runs line-by-line, in the order it appears.
// console.log("A");
// console.log("B");
// console.log("C");
// A
// B
// C
// 🧠 Iska matlab: JavaScript pehle ek line completely execute karega, tab hi agla shuru karega.

// ⸻

// ⸻

// ✅ 🔍 Case 1: Function Declaration
// sheet(); // ✅ Works

// function sheet() {
//   console.log("i am here");
// }
// 💡 Explanation:
// 	•	Function declaration is fully hoisted → memory me poora function body chala jata hai.
// 	•	Isliye sheet() call before declaration bhi chalega.

//     ❌ Case 2: Function Expression with let

//     meet();  // ❌ ReferenceError

// let meet = function () {
//   console.log("byy"); //ReferenceError: Cannot access 'meet' before initialization
// }
// 💡 Explanation:
// 	•	let variables hoist hote hain but unko initialize nahi kiya jata.
// 	•	Isliye meet variable TDZ (Temporal Dead Zone) me hota hai jab tak let meet line execute na ho jaaye.
// 	•	meet() call usse pehle ho raha hai → ❌ Error

// ❌ Case 3: Function Expression with var
// meter();  // ❌ TypeError

// var meter = function () {
//   console.log("aman");//TypeError: meter is not a function
// }
// 💡 Explanation:
// 	•	var variables hoist hote hain with value undefined.
// 	•	So at runtime, meter === undefined hota hai.
// 	•	Tum likh rahe ho: undefined(); → ❌ That’s a TypeError
