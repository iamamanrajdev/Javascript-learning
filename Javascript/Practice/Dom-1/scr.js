// *✅ Questions for DOM Practice
//* 1️⃣ Change Text Content


// When you click on the first <h1> (id=“first”), change its text to:
// "Welcome to Coder Army Practice!"

// Bonus: Change its text color to green.



// const first=document.getElementById("first")
// first.addEventListener("click" ,(event)=>{
//   first.innerHTML="Welcome to Coder Army Practice!"
//   first.style.color="green";
// })
// ***************************************************************************************
//* 2️⃣ Add a New List Item

// When you click a button (create a new button below the <ul>), it should add a new <li> with text "ReactJS" to the existing list.

// Bonus: Style the new <li> with background-color yellow.
// const ul=document.querySelector("ul")
// const button=document.querySelector("button")
// button.addEventListener("click",(event)=>{
//    const newli=document.createElement("li");
//    newli.innerText="React js";
//      newli.style.backgroundColor = "yellow"; 
//      ul.appendChild(newli);
// })

// ***************************************************************************************
//* 3️⃣ Remove the Last List Item

// Add another button that removes the last <li> in the list when clicked.

// const uli=document.querySelector("ul")
// const buttone=document.getElementById("delete")
// buttone.addEventListener("click",(event)=>{

//      uli.removeChild(uli.lastElementChild)
// })
// ****

//* 4️⃣ Toggle Background Color

// Add a button that toggles the entire body’s background color between black and white each time it is clicked.

// Bonus: Also toggle text color between white and black accordingly.
// let isdark=true;
// const body=document.querySelector("body");
// const buttonee=document.getElementById("color")
// buttonee.addEventListener("click",(event)=>{
// //  if(isdark){
// //     body.style.backgroundColor = "white";
// //     body.style.color = "black";
// //  }
// //  else{
// //    body.style.backgroundColor = "black";
// //     body.style.color = "white";
// //  }
// // isDark = !isDark;
// const randomcolor="#"+Math.floor(Math.random()*12345678).toString(16);
// body.style.backgroundColor=randomcolor
   
// }
// )
// ***************************************************************************************

//* 5️⃣ Count Number of List Items

// Write a function that logs (in console) the number of <li> items inside the <ul>.

// Bonus: Display the count in a new <p> below the list.

// const buttok=document.getElementById("countBtn")

// buttok.addEventListener("click",(event)=>{
//   const count=ul.querySelectorAll("li") //*count under kyo likha taki delete bhi ho botom yaha se read kare ki kitna count hai
// const total=count.length;
// console.log(total);

//   const p = document.getElementById("displayCount");
//   p.innerText=`Total items:${total}`
// })

// ***************************************************************************************

// *7️⃣ Highlight on Hover
// Using JavaScript, add a hover effect so that when you hover over any <li>, its background color changes to red.
// const ul = document.querySelector("ul"); // ✅ Make sure this line exists above
//   const hoveritems=ul.querySelectorAll("li") //*ye node list deta hai multiple element so for each lganan hoga
// *  ✅ 1️⃣ Kya hai forEach?

//* ✅ forEach ek loop hai jo array ya NodeList ke har item par kaam karta hai.
// hoveritems.forEach((aman)=>{
//   aman.addEventListener("mouseenter",(event)=>{
//     aman.style.backgroundColor="red"
//   })
//     aman.addEventListener("mouseleave", () => {
//     aman.style.backgroundColor = "";   // Remove color or set to original
//   });

// })

// ***************************************************************************************




//* 8️⃣ Disable a Button

//* Create a button labeled "Disable Me". When you click it, it should disable itself.
// const button=document.getElementById("disable")
// button.addEventListener("click",(event)=>{
//   button.disabled=true;
//   setTimeout(()=>{
//     button.disabled=false;
//   },2000);
  
// })

// ***************************************************************************************

//*9️⃣ Dynamically Create a New Heading

//* Add a button. When clicked, it should create a new <h2> with text "Keep Practicing!" and append it to the #root div.
// const div=document.getElementById("root")
// const button=document.getElementById("add")
// button.addEventListener("click",(event)=>{
// const newh2=document.createElement("h2")
// newh2.innerText="Keep Practicing!"
// div.appendChild(newh2)
// })

// ***************************************************************************************
// *🔟 Input Field and Live Display

// *Add an <input> field and a <p> below it. Whatever the user types in the input should immediately appear in the <p> in real-time.

// const input = document.getElementById("input");
// const output = document.getElementById("output");
// input.addEventListener("input",(event)=>{
//   output.innerText=input.value //*or event.target.value
// })

// *****************************************************************************************************************************************************************

// *⭐ Bonus: Dark / Light Mode Toggle

//* Create a single button that toggles your entire page between dark mode (black background, white text) and light mode (white background, black text).

const body = document.querySelector("body");
const button = document.getElementById("change");

let isDark = true;
button.addEventListener("click", () => {
  if (isDark) {
    // Switch to light mode
    body.style.backgroundColor = "white";
    body.style.color = "black";
    button.innerText = "Switch to Dark Mode";
  } else {
    // Switch to dark mode
    body.style.backgroundColor = "black";
    body.style.color = "white";
    button.innerText = "Switch to Light Mode";
  }
 isDark=!isDark //*flip the mode
})