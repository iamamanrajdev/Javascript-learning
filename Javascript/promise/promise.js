//*fetch operation seekhenge pehle ye asyncs task hai
//*weather api.com per jao acount banao


//  const obj=fetch(`http://api.weatherapi.com/v1/current.json?key=74615a01e6ea4205b96150144252607&q=London&aqi=no`)

// // setTimeout(()=>{
// //     console.log(obj)
// // },2000)

// //*but tmhe kaise malum chal rha hai ki 2 sec me fetch hoga ki 1 sec me ki 0ms me

// //*isliye hmlog use karenge obj.then

// obj.then((data)=>{ //*data matlab const obj ka data ko data name me store karaye
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })
//🔹 Step 2: catch((error) => {...})
	// •	Agar obj (Promise) me koi error aata hai (API down, wrong URL, internet off, etc.)…
	// •	Tab .catch() ka function chalega.
// 🔹 What is a Promise in JavaScript?

// A Promise is like a “commitment” by JavaScript that:

// “I’m doing something now (like calling an API), and I’ll give you the result later — either a ✅ success or ❌ failure.”

// 🔹 3 States of a Promise
// 1-pending
// Still working on the task (e.g., API call not completed yet)
// 2-fulfilled
// Task done successfully (you get the data)
//3- rejected
// Task failed (e.g., server error, internet issue,

// 🔹 Why not just use setTimeout()?

// Because setTimeout() waits blindly. It doesn’t care when the API actually finishes.


//Jase request marte hai data chal jata hai 
//1-pending me 
//2-resolve //*agar data successfully fetch hua to resolve 
//3-reject //* agar kuch issue hua fetch karne per to reject ka message aayega

//* isse kya samjhe promise hmesha koi na koi data jaruru dega success hua to data fetch error bhi aaya to bhi batayega error

//* Bahut badhiya question! Yeh dono code same output denge, lekin likhne ka tareeka (structure) alag hai.

//* Chalo dono ko deeply samajhte hain step-by-step:

// *🧪 Code 1: Nested .then()
// const obj = fetch(`URL`);
// obj.then((data) => {
//   const pro2 = data.json();  //* Step 1: convert response to JSON (returns a Promise)
//   pro2.then((data) => {
//     console.log(data);       // *Step 2: print the actual data
//   });
// });

// *💡 What’s happening?
// 	•	fetch() returns a Promise → obj
// 	•	.then((data) => { ... }) waits for fetch to finish
// 	•	data.json() again returns a Promise → pro2
// 	•	Again we use .then() to get actual data and log it

//* ⚠️ Downside: Code is getting nested — like a ladder:
// .then(() => {
//    .then(() => {
//      ...
//    })
// })
//* Yeh readable nahi hai — agar aur steps ho, to callback hell jaisa ho jaata.

//*✅ Code 2: Chained .then() (Cleaner Way)
//  const obj = fetch(`URL`);
// obj.then((data) => {
//   return data.json();      // Step 1: convert response to JSON
// }).then((data) => {
//   console.log(data);       // Step 2: use the JSON data
// });
// 💡 What’s happening?
// 	•	fetch() returns a Promise
// 	•	First .then() waits for response and returns data.json() (which is also a Promise)
// 	•	Second .then() waits for that JSON Promise to finish and prints the final data

//*using arraow function aur simple way
// fetch(`http://api.weatherapi.com/v1/current.json?key=74615a01e6ea4205b96150144252607&q=London&aqi=no`)
// .then(data=>data.json())
// .then(data=>console.log(data))//*ab data.current f aise karke access kar sakte hai kuch bhi weather api me se
// .catch(error=>console.log(error))

// 🔍 Line-by-Line Breakdown:

// 🔹 Step 1: fetch(...)
// 	•	fetch() ek built-in browser function hai jo web se data laata hai.
// 	•	Yeh asynchronous function hai aur Promise return karta hai.
// 	•	Is Promise ka output hota hai ek Response object.

// ⸻

// 🔹 Step 2: .then(data => data.json())
// 	•	data yahan wo Response object hai.
// 	•	Lekin is object me actual data JSON format me chhupa hota hai.
// 	•	data.json() again returns a Promise — because JSON parsing bhi asynchronous hoti hai.
// 	•	Isliye next .then() ka wait hota hai.

//     🔹 Step 3: .then(data => console.log(data))
//     	Ab yeh data woh actual parsed JSON object hai.
// 	•	Ab hum usko directly console.log() kar sakte hain.
// 	•	Yahi real data hota hai — jisme temperature, city, etc. hota hai.

// ⸻

// 🔹 Step 4: .catch(error => console.log(error))
// 	Agar koi bhi error aata hai (fetch fail ho jaye, wrong URL ho, etc.)
// 	•	To yeh catch() block chalega.
// 	•	Yeh always chain ke last me likhna chahiye.

// ⸻
// ✅ Why This Is the Best Style?
// 	•	🔹 Arrow functions make the code shorter
// 	•	🔹 No nesting, flat structure (easy to read)
// 	•	🔹 Covers both ✅ success and ❌ error