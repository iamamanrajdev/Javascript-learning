// const form=document.querySelector('form');
// form.addEventListener('click',(event)=>{
//     console.log(event.target) //*Form per lagaya hai event bubbling poora chaild ka access hai uske pass and event.target bata rha hai ki action kis child per ho rha hai .id laga ke id bhi access kar sakte hain
//     //**form me user name=aman to aman ka access kaise le to event.target.value */
// })

//* <!-- Event type -->
// *1: input
// form.addEventListener("input",(event)=>{
//     console.log(event.target.value)
// }). //*	•	Description: Jab bhi user input field mein kuch bhi likhe (har character pe), event fire hota hai.
// 2://* change
// form.addEventListener("change",(event)=>{
//     console.log(event.target.value)
//})//*	•	Description: Jab input field ka value change karke blur hota hai (focus chhodte ho), tab fire hota hai.
// //*3: focus
// form.addEventListener("focusin",(event)=>{
//     console.log(event.target.value);
// })
// <!-- focus: Does not bubble, so it needs to be directly attached to individual input elements.
// focusin: Bubbles, so it can be attached to the form element for event delegation. -->
// //*4: blur or focusout //*blur bhi bubble nai karta tum focusout use kar sakte ho
// form.addEventListener("focusout",(event)=>{
//     console.log(event.target.value);
// })
// *5: click
// form.addEventListener("click",(event)=>{
//      console.log("singleclickaman");
    
// })
// *<!-- 6: dblclick -->
// *⭐ 2️⃣ Where can you use dblclick?

// ✅ kisi bhi HTML element par:
// 	•	button
// 	•	div
// 	•	img
// 	•	p
// 	•	li
// 	•	User button ko 2 baar tezi se click kare → console me message aayega.
// form.addEventListener("dblclick", (event) => {
//   console.log("Double Clicked:",event.target );
// });

//* 7: submit -Form submit karte hi fire hota hai. after form  submit page refresh ho jata hai to event.preventDefault()use karo
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log("Form submitted!");
// });
//** */ 8: reset-- clear form data button ka type reset rakhna hoga tabhi hoga
// form.addEventListener("reset", () => {
//   console.log("Form reset!");
// });
//** */ 9: FormData 


// const form=document.querySelector('form');
// form.addEventListener('submit',(event)=>{
//     event.preventDefault();
    // const first=document.getElementById('first');
    // console.log(first.value)
    //  const second=document.getElementById('second');
    // console.log(second.value)
    //  const third=document.getElementById('third');
    // console.log(third.value)
 

//     const result=document.getElementById('result')
   
//     result.innerText=`${first.value} ${second.value} is a good boy;`
//     document.body.append(result)
// })

// //* ab isis code ko optimized way me likho
// * FormData ek built-in browser object hai jo form ke andar ke sabhi input values ko easily read karta hai. 
// const form=document.querySelector('form');
// form.addEventListener('click',(event)=>{
    // ******************************1st method*****************
    // console.log(Array.from(data.keys()));//*Iterator de rha hai .keys .value
    // console.log(Array.from(data.values()))
    // ***************************************************************
    // ***********Second Method for of*******************************
    // for(let key of data.keys()){
    //     console.log(key)
    // }
    // for(let value of data.values()){
    //     console.log(value)
    // }
    // **************************************************************
    // *******************************Third method*******************************
//     for(let [key,value] of data.entries())
//         console.log(key,value)
// }
// )
// *******************************************************************************
    //* uper sare For of loop se bhi iterate hue hai
