cart = ["pizza","coke","sandwich"];

function placeOrder(cart){
    console.log("Talking with Domino's");
     
    const pr = new Promise(function(resolve,reject){

        setTimeout(()=>{
            
           const food_available = true;
            if(food_available){
            console.log("Order Placed Succesfully");
            const order = {orderId: 221 , food: cart , restaurant: "Dominos", location:"Dwarka"}
            resolve(order);
            }
            else{
                reject("Items Out of Stocks");
            }
           },2000)

    })


    return pr;
}

function preparingOrder(order){
    console.log("Pizza preparation started....");

    const pr = new Promise(function(resolve,reject){

        setTimeout(()=>{
            console.log("Pizza preparation Done");
            const foodDetails = {token: 12 , restaurant: order.restaurant, location: order.location};
            resolve(foodDetails);
           },5000)
    })

    return pr;
};

function pickupOrder(foodDetails){
    console.log("Reaching restaurant for picking order")
    
    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Order picked up by Delivery Boy");
            const droplocation = foodDetails.location;
            resolve(droplocation);
           },3000)

    })

    return pr;
}

function deliverOrder(droplocation){
    console.log("Delivery boy on the way");

    setTimeout(()=>{
        console.log("Order Delivered succesfully");
    },5000)
}
 
//********************** ye aise likhe me samajhne me mushkil hoga */
// placeOrder(cart)
// .then(order=>preparingOrder(order))
// .then(foodDetails=>pickupOrder(foodDetails))
// .then(droplocation=>deliverOrder(droplocation))
// .catch(error=>console.log(error));
//********************************************************************* */

//*sliye async await ka yaha use karenge simple bhi lagega and wait bhi karega jab tak kam nai poora hoga tab tak aage nai badhega
// async function greet(){
//     const order=await placeOrder(cart)
//     const foodDetails=await preparingOrder(order)
//     const droplocation=await pickupOrder(foodDetails)
//     deliverOrder(droplocation);
// }
// greet();


//* 🔍 Breakdown:

// ✅ async keyword:
// 	•	Marks a function as asynchronous.
// 	•	Automatically returns a Promise.

// ✅ await keyword:
// 	•	Used inside async functions.
// 	•	Tells JS to wait until the Promise resolves before moving ahead.
// 	•	Makes your async code look like normal synchronous code (cleaner, readable).

// ⸻

// ⚠️ Important Points:
// 	1.	await can only be used inside async functions.
// 	2.	It pauses the function execution until the promise resolves.
// 	3.	If the promise is rejected, it throws an error (which can be caught with try/catch).


//* ab samjho
// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve ("hello everyone");
//     },5000)
// })

//*Agar old method se karta to
//p1.then((response)=>console.log(response));

//* isse accha async await se kar sakte hai
// async function greet(params) {
//   const data=await p1;  
//   console.log(data)
// }
// greet();

//* ab log galti kaha karte hai  data and data2 dono ka output ek sath aayega reason


// async function greet() {
//   const data1=await p1;  
//   console.log(data1)
//   const data2=await p1;  
//   console.log(data2)
// }
// greet();

//* reason is — the promise p1 is already resolved from the first await.



// ✅ Code Explanation:
// 🔸 What’s happening here?
// 	•	Tum ek promise bana rahe ho (p1) jo 5 second ke baad "hello everyone" return karega.
// 	•	Isme setTimeout ke through simulate kiya gaya hai ki kuch asynchronous work ho raha hai (like API call, file reading, etc.).
// 🔁 OLD WAY (then/catch):
// 	•	Yeh kehta hai: “Jab promise resolve ho jaye, tab mujhe result do.”
// 	•	Problem? Agar aise multiple promises ho jaayein, to .then().then() hell ban jata hai.

// ⸻
// ✅ NEW WAY (async/await):
// 🔍 Explanation:
// 	1.	async function greet()
// Tum ek function declare kar rahe ho jo async nature ka hai. Matlab, is function ke andar tum await use kar sakte ho.
// 	2.	await p1
// JavaScript yahan ruk jaata hai — jab tak p1 resolve nahi hota. Lekin browser hang nahi hota, kyunki JS event loop kaam kar raha hota hai background mein.
// 	3.	console.log(data)
// Jaise hi promise resolve hua, "hello everyone" print ho gaya.


// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve ("First promise is resolved");
//     },8000)
// })

// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve ("Second promise is resolved");
//     },5000)
// })

// async function greet() {
//   const data1=await p1;  
//   console.log(data1)
//   const data2=await p2;  
//   console.log(data2)
// }
// greet();

// ❓Why you’re confused:
// 	•	You’re thinking:
// ✅ p2 resolves in 5 sec
// ❌ So it should print before p1 (which resolves in 8 sec)

// But console.log(data1) comes first, and then data2.
// 🧠 Why is that?

// Because of this key thing:const data1 = await p1;
// 	•	JS waits here first.
// 	•	p1 takes 8 seconds, so nothing moves ahead until it’s resolved.
// 	•	Even though p2 is ready after 5 sec, JS doesn’t move to it until p1 finishes.

// Only after p1 resolves, it goes to:const data2 = await p2;
// By this time, p2 has already resolved, so await p2 gives the result immediately.

//Ab agar same chij ko normal promise method se  banake use  karenge to kya dono ek sath execute  hoga?

// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve ("First promise is resolved");
//     },8000)
// })

// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve ("Second promise is resolved");
//     },5000)
// })
// p1.then(value=>console.log(value))
// p2.then(value=>console.log(value))

// output-Second promise is resolved
// First promise is resolved


//* ques yaha per ek 5 sec bad aa rha hai but dusra call kar rahe hai wo bhi alag se 5sec le rha hai kyo

function test1(){
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve ("First promise is resolved");
    },5000)
})
return p1;
}

function test2(){
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve ("Second promise is resolved");
    },5000)
})
return p2;
}

async function greet() {
  const data1=await test1();  
  console.log(data1)
  const data2=await test2();  
  console.log(data2)
}
greet();

//*note- async function always promise reurn karega
// async function meet(){
//     return "hello"
// }
// meet().then(value=>console.log(value))
// 🔍 What’s happening here?

// Even though you’re returning a simple string "hello", the function is marked async.

// And in JavaScript:

// 🔁 Every async function automatically wraps the return value in a Promise.
// So this:return "hello";
// Is internally treated as:return Promise.resolve("hello");
// ✅ Now look at this:meet().then(value => console.log(value));
// Here’s what’s happening:
// 	1.	meet() returns a Promise that resolves with "hello".
// 	2.	.then(value => ...) receives that resolved value ("hello") and prints it.
//     agar return me kuch nai bhi dalenge to wo undefined return karega kuch na kuch return jarur karta hai
// Because of how await works!

// ⸻

// 🔍 Step-by-Step Execution:
// 	1.	greet() is called.
// 	2.	await test1();
// 	•	test1 starts a 5-second timer using setTimeout.
// 	•	JavaScript waits (pauses execution of greet) until test1 is resolved.
// 	•	⏳ 5 seconds later… logs 👉 "First promise is resolved"
// 	3.	Now JS goes to await test2();
// 	•	test2 starts only now, not earlier!
// 	•	Another 5-second timer starts.
// 	•	Again, JavaScript waits until test2 resolves.
// 	•	⏳ 5 more seconds later… logs 👉 "Second promise is resolved"

// ⸻

// ⏱️ Total Time = 5s (test1) + 5s (test2) = 10 seconds
