//<li>ts</li> ye mujhe create karna hai through js
//*************Created a element******************
//  const element=document.createElement("li");
//  element.innerHTML="Ts";
//   // ab isko ul ke under dalne ke liye parent ka access lena hoga
//   const parent=document.getElementById("root")
//   parent.appendChild(element)


// Note-- ek bar dalne ke liye thk hai agar agar baar baar dalna hai to function ka use karenge 
// function attach(content){
//  const element=document.createElement("li");
//  element.innerHTML=content;
//   // ab isko ul ke under dalne ke liye parent ka access lena hoga
//   const parent=document.getElementById("root")
// //   parent.appendChild(element) //matlab ek bar me only ek
// parent.append(element,"Aman raj ", "&lt") //multiple element add kara sakte hain parent.appendchild() me ek hi
// };
// attach("Ts")
// attach("Git")
// attach("React")


//*****************Create a text node***********
// const node=document.createTextNode("AMAN RAJ")
// const parent=document.getElementById("root")
// parent.append(node) //node means only text

//*********Create a Attribute node **********
//****Access to first list ***8
// const element=document.createAttribute("id");
// element.value="first";
//ab isko li ke under dalna hai to li ko access karna hoga
 //const list=document.querySelector("li")
 //list.setAttributeNode(element); //inspect karke dekh lo


 ///**** Access to second list
 //pehle parent ka access le lo
//  const parent=document.getElementById("root")
//  parent.children[1].setAttributeNode(element)


 //**** Access a Attribute Node of element*/



// *** 1;getAttribute***
//  const element=document.getElementById("root")
//  console.log(element.getAttribute("class")) //ans Mohan
//***  2:setAttribute***
 //const element=document.getElementById("root")
 //element.setAttribute("custom","20"); //new add bhi kar sakte hai
// element.setAttribute("class","sohan")//change karne ke liye set se create and update  bhi kar sakte hai 

 //*** 3:removeAttribute***
// element.removeAttribute("custom")


//****Add nodes to the dom */

//

// **************************************************************** 
// ******** append(node1,node2,...)
// ✅ 1️⃣ Kya hai append()?

// 🟢 append() ek DOM method hai.
// 🟢 Ye parent element ke andar last mein ek ya zyada nodes ya text add karta hai.
//    Adds Multiple Node as the last child of a parent.
//✅ Tum jitne chaaho utne nodes ya text de sakte ho.
// const parent = document.getElementById("root");

// const newItem1 = document.createElement("li");
// newItem1.textContent = "Banana";

// const newItem2 = document.createElement("li");
// newItem2.textContent = "Cherry";

// parent.append(newItem1, newItem2);
//********************************************************** */
// * insertBefore(newNode, referenceNode)
// Iska matlab:
// 	•	parentNode ke andar
// 	•	newNode ko
// 	•	referenceNode ke pehle daal do. 
//     matlab jo element tm dalna chahte ho usko man lo 6 list hai jis list se pehle dalna chahte ho dal do
// const parent = document.getElementById("root"); // Correct variable name
// const newItem = document.createElement("li");
// newItem.textContent = "New Item";

// const child = parent.children[1];  // 2nd child (index 1)
// parent.insertBefore(newItem, child);
//*************************** ************************************/
// * prepend  & append
// const parent=document.getElementById("root")
// const element=document.createElement("li")
// element.innerHTML="Ts"
// //parent.prepend(element) //sapse pehle wala jagah me dalna
// parent.append(element) //last me dalna
//********************************************************** */
// ***5: replaceChild()
// syntax-parent.replaceChild(newNode, oldChild);
// ➡️ parent ke andar, oldChild ko hata kar newNode laga do.
// const parent=document.getElementById("root")
// const newitem=document.createElement("li")
// newitem.textContent="replace item"
// const child=parent.children[2]
// parent.replaceChild(newitem,child)
//************************************************************************** */
// *****6: Using innerHTML
//    Directly sets the HTML content of an element.
// const parent=document.getElementById("root")
// parent.innerHTML+="<li>Ts</li>"
// ✅ 3️⃣ += "<li>Ts</li>"

// 👉 += ka matlab add / append karna hai.
// 	•	Tum existing innerHTML ke end mein naya li tag add kar rahe ho.
//********************************************************** */
//* 7: Using insertAdjacentHTML() or insertAdjacentElement():
//    👉 Ye method new HTML ko exact position par insert karta hai.
// 👉 Tum decide karte ho kahaan insert ka
// const parent=document.getElementById("root")
//Ab root ke pehle ek element attach karana hai
// const element=document.createElement("div")
// element.innerHTML="hello bhaiyaa";
//parent.insertAdjacentElement("beforebegin",element)  // ** 1st property--beforebegin: Before the element itself.
//parent.insertAdjacentElement("afterbegin",element)  //** 2nd property */ afterbegin: Inside the element, before its first child.
//parent.insertAdjacentElement("afterend",element) //*afterend: After the element itself.
//parent.insertAdjacentElement("beforeend",element)// **beforeend: Inside the element, after its last child.

//********************************************************************************************************* */

//** */ 8: removeChild(node) Homework
// ➡️ Tum parent ko bolte ho:

// “Is child ko hata do!”

// const parent = document.getElementById("root");
// const child = parent.children[2]
// parent.removeChild(child);

//**************************************************************** */

// *** The .remove() method in JavaScript is used to remove an element from the 
//    DOM (Document Object Model).
// const element=document.querySelector("li")
// element.remove();

// *****************************************************

// <!-- Practice on projects -->
