//*function jab bhi call hota hai call stack me jata hai
// Jab bhi JavaScript me koi function call hota hai, vo call stack me push (add) ho jata hai.
// function greet() {
//     console.log("Hello!");
// }

// function welcome() {
//     greet(); // Step 2
//     console.log("Welcome!");
// }

// welcome(); // Step 1

// 🧩 Call Stack Execution:
// 	1.	welcome() is called → goes to call stack
// 	2.	Inside welcome(), greet() is called → also goes to call stack
// 	3.	greet() runs and completes → removed from stack
// 	4.	Now welcome() continues → runs and completes → removed from stack

// ⸻
// 📊 Visualization:
// Initial:         []

// Step 1:      [welcome]
// Step 2:      [welcome, greet]
// After greet: [welcome]
// After all:       []

// *🔍 API ka Full Form:

// Application Programming Interface
// 💻 Programming ke terms me:

// API ek interface hoti hai jo:
// 	•	Frontend (client) ko Backend (server/database) se baat karne deti hai
// 	•	Ye predefined tareeke (rules) provide karti hai jaise:
// 	•	GET → data lena
// 	•	POST → data bhejna
// 	•	PUT → update karna
// 	•	DELETE → data hataana

// ⸻
// 🤝 API kya hai? (Real Life Example se)

// Socho tum ek restaurant me gaye ho.
// 	•	Tum menu dekhte ho (options kya available hain)
// 	•	Tum waiter ko bolte ho ki mujhe pizza chahiye
// 	•	Waiter kitchen (backend) me jaata hai, order deliver karta hai
// 	•	Fir pizza tumhare table par aata hai 🍕

// ➡️ Yahan “Waiter” = API
// Tum (user) aur kitchen (server) ke beech mein jo connection bana raha hai, wahi API hai.

// *🔄 Call Stack & Callback Queue — What’s the Difference?
// 	•	Call Stack: Jahan synchronous (line-by-line) code execute hota hai.
// 	•	Callback Queue: Jahan asynchronous tasks (like setTimeout, eventListeners, etc.) wait karte hain.

// ⸻

// 📦 Event Loop ka Role:

// Event Loop continuously check karta hai:

// “Kya Call Stack empty hai?
// Agar haan, to Callback Queue se function leke Call Stack me bhej do.”



// 📊 Execution Step-by-Step:
// 	1.	console.log("1") → Call Stack me gaya → Output: 1 → Stack se hata
// 	2.	setTimeout() → Web API handle karta hai → Callback () => console.log("2") ko Callback Queue me bhej deta hai (after 0ms)
// 	3.	console.log("3") → Call Stack me gaya → Output: 3 → Stack se hata
// 	4.	Ab Call Stack empty hai → Event Loop callback queue check karta hai
// 	5.	console.log("2") → Callback Queue se utha ke Call Stack me push hota hai → Output: 2

// ⸻
// 🔁 Final Output: 1,3,2
// 🧠 Visual:Call Stack         | Callback Queue
// ------------------|----------------
// console.log("1")  | 
// setTimeout()      | console.log("2") (waiting)
// console.log("3")  |
// (empty)           | 
// ------------------|----------------

// Event Loop: “Oh, Call Stack is empty now, let me push console.log(“2”)”
// Call Stack
// Runs sync code immediately
// Callback Queue
// Stores async callbacks (like setTimeout)
// Event Loop
// Moves tasks from queue to stack when it’s empty


// 🤔 Why do we need APIs?

// Imagine this:
// 	•	Your website frontend is built with React (JavaScript)
// 	•	Your backend is written in Java or Python

// How do they talk to each other? Different languages, right?

// ➡️ That’s where APIs come in.

// APIs act as a universal bridge —
// They allow different technologies to communicate seamlessly, using common data formats like JSON.

// So whether your backend is in Java, Python, or anything else,
// as long as there’s an API, your frontend can connect, fetch data, and work smoothly.


console.log("hello aman raj");
setTimeout(()=>{
    const a=2+4
    console.log(a)
},3000)
setInterval(()=>{
    console.log("i am fast")
},2000)

let b=20;
let arr=[20,30,50]
for(let i of arr){
    console.log(i+b)
}
//* 🔁 JavaScript Execution Flow – Explained Step by Step
// 	1.	console.log("Hello Aman")
// → JavaScript executes this line immediately using the Call Stack
// ✅ Output: Hello Aman
// 	2.	setTimeout(..., 5000)
// → Web API handle karega
// → Callback ko Callback Queue me daalega after 5 sec (non-blocking)
// 	3.	setInterval(..., 2000)
// → Web API me chala jaata hai
// → Har 2 sec baad callback queue me push hota rahega
// 	4.	let b = 20;
// → Synchronous line → Call Stack me execute hoga
// 	5.	console.log(arr)
// → Again synchronous → Stack me execute hoke output print karega
// 	6.	Global Execution Context (GEC)
// → Ab sab sync code ho chuka, so Call Stack becomes empty
// 	7.	Event Loop kicks in
// 	•	Event Loop dekhta hai: “Call Stack empty hai?”
// 	•	Haan → Toh Callback Queue se function uthake Call Stack me bhej deta hai

// ⸻

// ⚙️ Web APIs can handle multiple timers:
// 	•	Web APIs are multithreaded ✅
// 	•	They can manage many timers at once (setTimeout, setInterval, etc.)
// 	•	But JavaScript thread (Call Stack) is single-threaded, so callbacks execute one at a time


// console.log("Burger 1");

// setTimeout(() => {
//   console.log("Burger 2 (late order)");
// }, 0);

// console.log("Burger 3");

// console.log("Burger 1");

// setTimeout(() => {
//   console.log("Burger 2 (late order)");
// }, 0);

// console.log("Burger 3");

// ❓ Question:

// Timer to 0 hai, phir bhi Burger 2 last me kyun aaya?

// ⸻

// 🔁 Behind the Scenes (JavaScript Flow):
// 	1.	✅ console.log("Burger 1")
// 	•	Synchronous code
// 	•	Directly Call Stack me gaya → execute hua → Output: Burger 1
// 	2.	🕒 setTimeout(..., 0)
// 	•	Web API handle karta hai isse
// 	•	0ms means → “queue me daalne ka minimum delay”
// 	•	Ye immediately Callback Queue me nahi jaata → Web API me wait karta hai
// 	•	Jab 0ms complete hote hain, Callback Queue me push hota hai
// 	3.	✅ console.log("Burger 3")
// 	•	Call Stack me gaya → run hua → Output: Burger 3
// 	4.	⏳ Ab Call Stack empty hoti hai
// 	•	Event Loop dekhta hai: “Call Stack khali hai?” → Haan
// 	•	Callback Queue me Burger 2 ka function padha hai
// 	•	Event Loop usko uthake Call Stack me daal deta hai → Output: Burger 2 (late order)

// ⸻

// 🧠 Important Concept:

// Even if setTimeout(..., 0) likho — it doesn’t mean “run immediately”.
// It means: “Run after minimum 0ms, but only when the Call Stack is empty.”

// This delay is guaranteed to be at least 0ms, not exactly 0ms.

// ⸻

// 🚫 What It’s NOT:

// ❌ This is not a race condition.
// ✅ This is asynchronous scheduling, managed by the event loop, and based on queue order.

// ⸻

//* 🧰 What does Web API offer? (Key Categories)

// 1. 🕒 Timers API
// 	•	setTimeout() – runs code after delay
// 	•	setInterval() – runs code repeatedly at intervals

// 2. 🌍 DOM API (Document Object Model)
// 	•	document.querySelector(), getElementById(), etc.
// 	•	Used to select, update, and manipulate HTML elements

// 3. 📡 Fetch & AJAX (Network API)
// 	•	fetch() – to make network requests (GET, POST, etc.)
// 	•	Used to connect to servers or APIs

// 4. 🖱️ Events API
// 	•	addEventListener() – detect clicks, keypresses, mouse moves, etc.

// 5. 📦 Storage APIs
// 	•	localStorage, sessionStorage – store data in browser
// 	•	Cookies – store small bits of data with expiration

// 6. 📍 Geolocation API
// 	•	navigator.geolocation.getCurrentPosition() – get user’s location (with permission)

// 7. 🔊🎤📷 Media APIs
// 	•	MediaDevices.getUserMedia() – access mic & camera
// 	•	For video calls, voice recording, etc.

// 8. 🖼️ Canvas & WebGL API
// 	•	For drawing graphics, animations, and games inside browser

// 9. 🔐 Clipboard API
// 	•	Copy/paste functionality from system clipboard

// 10. 🔄 History & Navigation API
// 	•	history.back(), history.pushState() – control browser history
