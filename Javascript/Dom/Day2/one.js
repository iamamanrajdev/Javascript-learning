// const id=document.querySelector("#first");
// id.innerHTML="Hello Money";

//by singleElement
// const aman =document.querySelector(".header2");
// aman.innerHTML="Hello Money";
// aman.style.backgroundColor="yellow";

//by multiple element
// const items = document.querySelectorAll(".header2");
// //✅ 5️⃣ Accessing Elements in NodeList
// items[0].innerHTML = "First Item Changed!"; //pehla tarika ⭐ Like an array:

// for (let i = 0; i < items.length; i++) {. //⭐ Using loop: //doosra tarika
//   items[i].style.color = "red";  ///i=0 matlab header 0 1 2 jitne bhi honge sabke karo
// }

//⭐ Using forEach: //teesra tarika
// const items = document.querySelectorAll(".header2"); //tag name bhi de sakte hai like li header2 ke jagah
// items.forEach(function(header2) {
//   header2.style.backgroundColor = "red";
// });


//✅ 1️⃣ “Tag selector”
// ✅ (a) getElementsByTagName
// const paras = document.getElementsByTagName("li");
// paras[0].style.color = "blue";
// paras[0].style.backgroundColor = "yellow"; //✅ Access first element:

//✅ Loop for all:
// for (let i = 0; i < paras.length; i++) {
//   paras[i].style.color = "red";
// }

//✅ 1️⃣ Relationships in HTML DOM
// ⭐ HTML mein elements ek tree ki tarah hote hain:
// <ul>
//   <li>Item 1</li>
//   <li>Item 2</li>
// </ul>
// ✔️ Yahaan:
// 	•	<ul> = parent
// 	•	<li> = children
// 	•	Do <li> = siblings

// ✅ DOM mein hum parent, children, siblings ke relationship se elements access kar sakte hain.
// ✅ 2️⃣ Main Relationships

// ⭐ Ye 5 sabse common relationships hain
// ✅ 2️⃣ Main Relationships

// ⭐ Ye 5 sabse common relationships hain
// ✅ (a) parentNode → Parent ko access karo
// const list=document.querySelector("li")
// console.log(list.parentElement)
// console.log(list.parentElement)
// ✅ (b) childNodes / children → Child elements access karo
const list=document.querySelector("ul")
// console.log(list)
// console.log(list.childNodes) //aise aayega NodeList(9) [text, li, text, li, text, li, text, li, text]
// 0
// : 
// text
// 1
// : 
// li
// 2
// : 
// text
// 3
// : 
// li
// 4
// : 
// text
// 5
// : 
// li
// 6
// : 
// text
// 7
// : 
// li
// 8
// : 
// text
// length
// : 
// 9 
// node list me jo bhi space rahega ya tm kuch extra bhi likhte ho wo text ke form me count hoga yahi diff hai node list and element me
// console.log(list.children). //HTMLCollection(4) [li, li, li, li]
// 0
// : 
// li
// 1
// : 
// li
// 2
// : 
// li
// 3
// : 
// li
// length
// : 
// 4 aise aayega
// ✅ (c) firstChild / firstElementChild → Pehla child
// console.log(list.firstElementChild)
//  console.log(list.firstChild) //node dega same last bhi nikal sakte hain
// ✅ (d) lastChild / lastElementChild → Aakhri child
// console.log(list.lastElementChild)
// ✅ (e) nextSibling / nextElementSibling → Agla bhai (sibling)
// console.log(list.nextElementSibling) //script
// console.log(list.nextSibling)  //#text
// ✅ (f) previousSibling / previousElementSibling → Pichla bhai (sibling)
// console.log(list.previousElementSibling) //h1#Second.header2
// console.log(list.previousSibling) //#text