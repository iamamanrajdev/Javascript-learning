
//* Call back function
// function fetchuser(){
//     console.log("fetching the user Detail...")
//     setTimeout(() => {
//         console.log("data fetched successfully")
//     }, 2000);
// }
// fetchuser();

//*Another example of call back function
// function f1(fun){
//     console.log("i am here")
//     fun();
// }
// f1(()=>{
//     console.log("hello")
// });

//* Js Synchronous language hai line by line chalta hai yani per agar hm chahte hai mera code parallely chale to callback hell use karna hoga

//* Call back hell ka faida
// function ass(callback){
//     console.log("fetching the user detail...")
//     setTimeout(()=>{
// console.log("data fetched successfully...")
// const name="Aman";
// callback(name)// kitne sare bana lo function ek callback se sab run ho jayega
//     },2000) 
// }

// function greet(name){
//     console.log(`hello${name}`)
// }

// function meet(name){
//    console.log(`hello${name}How are you`)
// }
// function edit(name){
//         console.log(`Edit${name},of the user`)
// }

// ass(greet);
// ass(meet);
// ass(edit);

//*nai to hmko aise bar bar alag alag function banake greet()karna padta phit meet ka banana padta phir edit ka

// function ass(callback){
//     console.log("fetching the user detail...")
//     setTimeout(()=>{
// console.log("data fetched successfully...")
// const obj={
//     name:"aman",
//     age:24,
//     city:"Motihari"
// };
// callback(obj)// kitne sare bana lo function ek callback se sab run ho jayega agar yaha greet(obj)karta to sirf wahi chalta isliye callback kya faida diya tm ek bar likh do aur jisko call karana hai karao sara ab mere under hi hoga
//     },2000) 
// }

// function greet(obj){
//     console.log(obj.name)
// }

// function meet(obj){
//    console.log(obj.age)
// }
// function edit(obj){
//         console.log(obj.city)
// }

// ass(greet);
// ass(meet);
// ass(edit);


//*Call back hell

// MAN LO DOMINOS SE PIZZA ORDER KARNA HAI
// function placeorder(callback){
//     console.log("Talking with Dominos")
//     setTimeout(()=>{
//         console.log("Order placed Succesfully")
//         callback()
//     },2000)
// }
// function preparingOrder(callback){
//     console.log("pizza prep started...")
//     setTimeout(()=>{
//         console.log("pizza prep done")
//         callback()
//     },2000)

  
    
// }
// function pickupOrder(callback){
//     console.log("reaching restro for picking order")
//     setTimeout(()=>{
//         console.log("order picked up by delivery boy")
//         callback()
//     },2000)

  
    
// }

// function deliveredOrder(){
//     console.log("Delivery boy on the way")
//     setTimeout(()=>{
//         console.log("orde delivered successfully")
//     },2000)

    
// }

//* Call bak hell- iska disadvantage hai agar 50-60 ho to kaise code padh paunga dimag kharab ho jayega
// *badi company me placeorder order ke liye alag team hogi preparing order ke liye alag team phir pickuporder wali team hogi  phir delivered order karne wali alag team hogi
//* agar placeorder wala team call hi nai kiya to aage wala prep ka call ka naiyaa placeorder ke bharoshe hai wo bhool gaya to kaise kaam chalega
//  placeorder(()=>{
//     preparingOrder(()=>{
//         pickupOrder(()=>{
//             deliveredOrder()
//         })
//     })
// });

//* js is a single threaded synchronus language -ek ke bad ek task execute hote hai
// console.log("10")
// console.log("20")
// console.log("30")
//*pehle 10 wala chalega phir 20 phir 30

//*Great — this is a classic example of JavaScript’s asynchronous behavior using setTimeout.
// console.log("10")
// setTimeout(()=>{
// console.log("20")
// },2000)

// console.log("30")

// 🕰️ What Happens Step-by-Step?
// 	1.	console.log("10") → runs immediately ✅
// 	2.	setTimeout(..., 2000) → tells JavaScript:
// “Hey, run this after 2 seconds, but don’t wait here.” 😎
// It’s non-blocking, so JS continues.
// 	3.	console.log("30") → runs immediately ✅
// 	4.	After 2 seconds, console.log("20") finally runs ✅
//✅ Output:
// 10
// 30
// 20  // (after 2 seconds)
// 🔁 Why?

// Because setTimeout is handled by the Web APIs / Callback Queue, and JavaScript Event Loop pushes it back to the call stack after the delay.

// ⸻

// 💡 Summary:
// 	•	setTimeout is asynchronous.aur fun fact js ka part nai hai wo webapi ka part hai agar ye js ka part hota to wo 10,20,30 aise print karata
// 	•	JavaScript doesn’t wait for it — it finishes current tasks and comes back later.
// 	•	That’s why "30" prints before "20".


//*Excellent example to understand the difference between synchronous blocking and asynchronous non-blocking behavior in JavaScript! 💡
// console.log("10")
// const timer=Date.now();
// while(Date.now()-timer<2000){
//     //*wait for 2 sec
// }
// console.log("20")
// console.log("30")

// 🔍 What is happening here?
// 	1.	✅ console.log("10") → prints immediately.
// 	2.	🕒 The while loop blocks the thread for 2 seconds:
// 	•	It keeps checking the condition Date.now() - timer < 2000
// 	•	This is a busy-wait: JS is stuck here and can’t do anything else until the loop finishes.
// 	3.	✅ After 2 seconds, console.log("20") runs.
// 	4.	✅ Then console.log("30") runs.

// ✅ Output:10
// 20
// 30

//But the output appears after 2 seconds of freeze, unlike setTimeout where "30" prints immediately.




// ⚠️ So Never Use while(Date.now()-timer<...) in real-world code!

// It’s only good for learning or simulating blocking behavior. It will freeze the browser or Node.js process.


placeOrder(() => {
  preparingPizza(() => {
    pickupOrder(() => {
      deliverOrder(() => {
        console.log("Enjoy your pizza! ");
      });
    });
  });
});