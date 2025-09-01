// const red=document.getElementById("red")
// const blue=document.getElementById("blue")
// const orange=document.getElementById("orange")
// const green=document.getElementById("green")
// const purple=document.getElementById("purple")

// const body=document.querySelector("body")
// red.addEventListener("click",()=>{
// body.style.backgroundColor="red";
// } )


// blue.addEventListener("click",()=>{
// body.style.backgroundColor="blue";
// } )

// orange.addEventListener("click",()=>{
// body.style.backgroundColor="orange";
// } )


// green.addEventListener("click",()=>{
// body.style.backgroundColor="green";
// } )

// purple.addEventListener("click",()=>{
// body.style.backgroundColor="purple";
// } )
//**More optimized code */
//const buttons=document.querySelectorAll("button")
// ✔️ document.querySelectorAll("button") kya karega?
// ✅ → Page ke saare button elements ko select karega.
// ✅ → Ek NodeList (list of buttons) banayega.
//const body=document.body;
// ✔️ Ye poora <body> element ko access karta hai.
// ⭐ Tum ab body ka background color change kar sakte ho!
//** ye for loop se hua */
// buttons.forEach((button)=>{
//     ⭐ Iska matlab:
// ✅ buttons ek list hai sab button elements ki.
// ✅ forEach un sab buttons par ek-ek karke kaam karega.
// ✅ (button) => { ... } is function mein har baar ek button milega.


// button.addEventListener("click",()=>{
//     body.style.backgroundColor=button.id;
// });
// });


//** ye lormal loop se✅ ⭐ Normal for loop version: normal loop se bhi kar sakte hai agr for looop na aye to 
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", () => {
//     body.style.backgroundColor = buttons[i].id;
//   });
// }

//** abhi bhi code optimized nai hai 100 button hote 100 background color change karte system meomry occupied karega and slow krega */
//** so yaha event bubbling and event capturing  ka concept use hoga aur isko fast banayega */
//** */ Event bubbling ka matlab hai:

// **Jab aap kisi child element par event trigger karte ho (jaise click), toh wo event parent → grandparent → document tak propagate hota hai.

//** */ Bubble word isi liye use hota hai – jaise bubbles paani me upar uthte hain!
// ✅ Example se samjho

// Maan lo HTML structure hai:<div id="parent">
//   <button id="child">Click me</button>
// </div>
// Aur JavaScript:
// document.getElementById('parent').addEventListener('click', () => {
//   console.log('Parent clicked');
// });

// document.getElementById('child').addEventListener('click', () => {
//   console.log('Child clicked');
// });
// ✅ Ab agar aap button (child) par click karoge:

// 1️⃣ Pehle child ka listener chalega: Child clicked
// 2️⃣ Fir event bubble hota hai parent tak:Parent clicked
// ✅ Diagram se socho Click on child
//     |
//     |---> child listener runs
//     |
//     |---> parent listener runs
//     |
//     |---> grandparent/document (if any)

//**Event capturing */
// 💥 Event Capturing Kya Hota Hai?

// Event capturing ka matlab hai:

// Jab event sabse outer parent (document) se start hota hai, aur step by step inner child tak jata hai.

// Ye process top to bottom hoti hai.
// 💥 Event Capturing Kya Hota Hai?

// Event capturing ka matlab hai:

// Jab event sabse outer parent (document) se start hota hai, aur step by step inner child tak jata hai.

// Ye process top to bottom hoti hai.
// 🧠 Real Life Example Se Socho:

// Socho ek ghar hai:Ghar (document)
//  └── Papa (div)
//       └── Beta (button)

//**optimized uing event deligation */
//* ✅ 1️⃣ Event Delegation ka simple definition:

// *⭐ Event Delegation ek technique hai jisme:

//* Hum parent element par ek hi event listener lagate hain aur usse sab child elements ke events handle karte hain.

//* ✔️ Matlab har child pe alag listener lagane ki zaroorat nahi.
// *✔️ Ye memory aur performance dono ke liye accha hai.
const root=document.getElementById('root')
root.addEventListener('click',(event)=>{
  if(event.target.tagName==='BUTTON')
  document.body.style.backgroundColor=event.target.id
})
// ✅ event.target.tagName kya hota hai?

// ⭐ event.target.tagName ek string return karta hai jo element ka tag name hota hai (jaise DIV, BUTTON, SPAN, etc.)

// ✅ BUT:
// Ye hamesha UPPERCASE return karta hai.


