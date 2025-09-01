const Quotes = [
  "True devotion begins when the ego ends.",
  "Chant the Lord’s name with love, and your heart will find peace.",
  "Do not count the number of times you remember God—make sure you never forget Him.",
  "Where there is humility, there is the Lord’s grace.",
  "A pure heart is the temple where God truly resides.",
  "Surrender is not weakness—it is the highest wisdom.",
  "See God in everyone, and you will never be alone.",
  "The mind will find peace only at the feet of God.",
  "Love is the only offering God accepts.",
  "Don’t waste time judging others—use that time to remember God.",
  "Bhakti (devotion) is simple—complicate it and you lose its sweetness.",
  "Serve others without expecting anything in return.",
  "Your problems are smaller than God’s power—have faith.",
  "Tears shed in longing for God purify the soul.",
  "Happiness does not lie in possessions, but in devotion.",
  "When you forget yourself, you find God.",
  "Let go of anger—it burns devotion to ashes.",
  "Faith turns even the impossible into possible.",
  "Those who remember God with love never fail in life.",
  "The ultimate truth is simple: Love God with all your heart."
];

 


// ***⭐ addEventListener is a method in JavaScript.
// ⭐ Iska kaam hai element ko sunna (listen karna) for events (like click, hover, keypress, etc.).
// ⭐ Jab wo event hota hai → tumhara code chalega (function run hoga).

// ✅ Short me:

// “Event hone pe function call karo.”

//*✅ 2️⃣ Syntax element.addEventListener(event, handlerFunction);
	// •	element → Kisko sunna hai? (eg. button, div)
	// •	event → Kya sunna hai? (eg. “click”, “mouseover”)
	// •	handlerFunction → Event hone par kya karna hai?

// ✅ 3️⃣ JavaScript me

// Event listeners bhi callback functions istemal karte hain.

// “Jab event ho, ye function chala do.”

// ✅ Tum listener ko function dete ho → browser ya JS engine us event ke hone par use call karta hai.

// ⸻


// const button=document.querySelector("button")
// button.addEventListener("click",()=>{
//   //** Mouse event */-1 click -2 dbclick 3-mouseover(⭐ mouseover event fires once when the mouse enters the boundary of an element.) 4-mousemove(⭐ mousemove event fires continuously as long as you move the mouse inside the element.)
//   const text=document.getElementById("quote")
//   const index=Math.floor(Math.random()*Quotes.length)
//   text.textContent=Quotes[index]
// })

//********Keyboard events */ 1 keydown(keydown fires as soon as you press down a key.)  2 keup(keyup fires when you release the key.)
// document.addEventListener("keydown",()=>{
 
//   const text=document.getElementById("quote")
//   const index=Math.floor(Math.random()*Quotes.length)
//   text.textContent=Quotes[index]
// })

//***********.  event object */**************************** */
// ✅ 1️⃣ What is the event object?

// ⭐ Jab bhi koi event hota hai (click, keypress, mousemove, etc.)
// → JavaScript automatically ek object banata hai → event object.

// ✅ Ye object sab details rakhta hai about what happened.
//**1 event */
// ⭐ Ye poora event object hota hai jo tumhare function ko milta hai.
// const button=document.querySelector("button")
// button.addEventListener("click", (event) => {
//   console.log(event);
// }); //try in console
// ✔️ Jab tum click karoge, event object me sab info hoga:
// 	•	Kaha click hua
// 	•	Kis element pe click hua
// 	•	Kaunsa button click hua, etc.

// ✅ event = poora box with all event details.
//***************************************************************************** */
//**2 event.target */
// const button=document.querySelector("button")
// button.addEventListener("click",(event)=>{
// console.log(event.target) //target batayega ✅ event.target = That specific element jisko click ya event mila. jaise is example me button
//***************************************************************** */

//**3 event.type */
// const button=document.querySelector("button")
// button.addEventListener("click",(event)=>{
// console.log(event.type) //✅ event.type = event ka naam (e.g. “click”, “keydown”).
// })
//**************************************************** */
//**4 event.key */
// ✅ 5️⃣ event.key

// ⭐ Kaunsi key dabayi gayi?

// ✅ event.key = Keyboard key jo press hui.

// ✅ Only for keyboard events → keydown, keyup.

//  document.addEventListener("keydown", (event) => {
//   console.log(event.key);
// });
// // ✔️ Tum “A” dabao → "A"
// // ✔️ Tum “Enter” dabao → "Enter"

// document.addEventListener("keydown",(event)=>{
//  if(event.key==="Enter"){ //*jab tak enter nai dabega tab tak change nai hoga
//   const text=document.getElementById("quote")
//   const index=Math.floor(Math.random()*Quotes.length)
//   text.textContent=Quotes[index]
//  }
// })
//************************************************************** */
//*5 event.clientX && event.clientY */ */
// ⭐ Mouse ka location (X, Y) on screen jab event hua.

// ✅ event.clientX = Horizontal (left-right) position
// ✅ event.clientY = Vertical (top-bottom) position
// const button=document.querySelector("button")
// button.addEventListener("click",(event)=>{

// // console.log(event.clientX) //  Horizontal (left-right) position
//  console.log(event.clientY)//✅ event.clientY = Vertical (top-bottom) position
//  })
//**************************************************************** */