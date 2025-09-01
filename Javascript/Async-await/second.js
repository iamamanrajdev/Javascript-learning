// function test1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("First promise is resolved");
//     }, 5000);
//   });
// }

// function test2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Second promise is resolved");
//     }, 5000);
//   });
// }

// async function greet() {
//  console.log("hello i greet u")
//   const data1 = await test1(); // starts timer NOW
//   console.log(data1);

//   const data2 = await test2(); // starts timer AFTER first finishes
//   console.log(data2);
// }
// greet();
// console.log("kaise ho aap sab log")
// console.log("hello aman")

//*output aisa kyo aa rha hai
// hello i greet u
// kaise ho aap sab log
// hello aman
// First promise is resolved
// Second promise is resolved

//*reason
// 🔄 Let’s Break It Down:

// 1. Call Stack runs sync code first:
// 	•	greet() is called → Enters the stack
// 	•	Logs: hello i greet u
// 	•	Hits await test1() → test1() starts its setTimeout(5000)
// 	•	Control is returned to the main thread (because of await)
// 	•	Stack is now free to run the next lines

// 2. Synchronous code continues:
// 	•	Logs: kaise ho aap sab log
// 	•	Logs: hello aman

// These run immediately because they are outside await.

// ⏳ After 5 Seconds:
// 	•	test1() resolves → data1 is printed: ✅ First promise is resolved

// ⸻

// ⏳ After another 5 Seconds (total 10s):
// 	•	test2() resolves → data2 is printed: ✅ Second promise is resolved

// ⸻

// 🧠 So Why This Order?

// Because:
// 	•	await pauses the async function until the Promise resolves.
// 	•	While it’s paused, other synchronous code outside the async function continues running.
// 	•	setTimeout uses the macrotask queue, and async functions are paused and resumed via microtask queue, but setTimeout only enters the event loop after its delay.
// 	•	The event loop ensures the call stack is empty before moving tasks from the queue.

// piche recorder vide me rohit bhaiyaa bataye hai callstack queuque microtask queque gec usi ka logic hai

//*How to handle error in async await use try;

// cart = ["pizza","coke","sandwich"];

// function placeOrder(cart){
//     console.log("Talking with Domino's");
     
//     const pr = new Promise(function(resolve,reject){

//         setTimeout(()=>{
            
//            const food_available = true;
//             if(food_available){
//             console.log("Order Placed Succesfully");
//             const order = {orderId: 221 , food: cart , restaurant: "Dominos", location:"Dwarka"}
//             resolve(order);
//             }
//             else{
//                 reject("Items Out of Stocks");
//             }
//            },2000)

//     })


//     return pr;
// }

// function preparingOrder(order){
//     console.log("Pizza preparation started....");

//     const pr = new Promise(function(resolve,reject){

//         setTimeout(()=>{
//             console.log("Pizza preparation Done");
//             const foodDetails = {token: 12 , restaurant: order.restaurant, location: order.location};
//             resolve(foodDetails);
//            },5000)
//     })

//     return pr;
// };

// function pickupOrder(foodDetails){
//     console.log("Reaching restaurant for picking order")
    
//     const pr = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("Order picked up by Delivery Boy");
//             const droplocation = foodDetails.location;
//             resolve(droplocation);
//            },3000)

//     })

//     return pr;
// }

// function deliverOrder(droplocation){
//     console.log("Delivery boy on the way");

//     setTimeout(()=>{
//         console.log("Order Delivered succesfully");
//     },5000)
// }

// async function greet(){
//     try{
//     const order=await placeOrder(cart)
//     const foodDetails=await preparingOrder(order)
//     const droplocation=await pickupOrder(foodDetails)
//     deliverOrder(droplocation);
// }
// catch(error){
//     console.log(error)
// }
// }
// greet();


//* jab dono ek dusre per dependent nai ho to Promise.all se ek sath run kara sakte hai

function test1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First promise is resolved");
    }, 5000);
  });
}

function test2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Second promise is resolved");
    }, 5000);
  });
}
//* if one time is 8sec and another time is 5sec max output time wale per dono ek sath aayenge yani jo time bada ho sabse us time per aayenge
// async function greet() {
//  console.log("hello i greet u")
//   const [data1,data2] =await Promise.all([test1(),test2()]) 
//   console.log(data1);

//   console.log(data2);
// }
// greet();

// Great question! 👇
// Let’s break it down step-by-step to understand how this line works: const [data1, data2] = await Promise.all([test1(), test2()]);
// 🔹 Step 1: Promise.all([test1(), test2()])

// This means:
// 	•	test1() and test2() both return promises.
// 	•	Promise.all() waits for both promises to resolve.
// 	•	Once both are resolved, it gives you an array of their resolved values.

// 🧠 Example:
// If test1() resolves to "A" and test2() resolves to "B",
// then Promise.all([test1(), test2()]) resolves to:["A", "B"]

// 🔹 Step 2: await Promise.all(...)

// We await that result — so we pause the async function until both promises are resolved.
// await Promise.all(...) → ["A", "B"]
// 🔹 Step 3: const [data1, data2] = ...

// Now you are using array destructuring — meaning:
// 	•	data1 will get the first value: "A"
// 	•	data2 will get the second value: "B"

// So,const [data1, data2] = ["A", "B"];


// ⸻

// ✅ Final Understanding:

// You’re:
// 	•	Waiting for both promises to resolve in parallel ✅
// 	•	Getting both resolved values in an array ✅
// 	•	Using array destructuring to assign them to variables ✅


//* bs ye samajh me aana chhaiye ki hm promise kyo istemal karte hai

