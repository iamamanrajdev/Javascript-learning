// ✅ ⭐ 1️⃣ .innerHTML

// ⭐ Poora HTML (tags ke saath) set ya get karta hai.

// ✅ ➜ Tum HTML tags bhi dal sakte ho.
// ✅ ➜ Uske andar ke sab tags aur unka structure preserve karta hai.
//  const list=document.getElementById("box").innerHTML
//  console.log(list) //
 // document.getElementById("box").innerHTML kya return karega?

// ⭐ Ye pura innerHTML (tags ke saath) laata hai:
 //   Hello <span style="display:none">Secret</span> World  get hua tm set bhi kar sakte ho
//   const list=document.getElementById("box").innerHTML="Aman raj"
// console.log(list) //Aman raj


// ✅ ⭐ 2️⃣ .innerText

// ⭐ Sirf visible text show karta hai.
// ✅ ➜ Jo screen pe dikhega wohi deta hai.
// ✅ ➜ CSS se hide kiya gaya text nahi aata.
//  const list=document.getElementById("box").innerText
//  console.log(list) //Hello World
//  ✅ ⭐ Use when: Jo user ko dikhega wahi chahiye.
//  ✅ ⭐ HIDDEN text ignore karta hai: jaise secret ko kiya

// ✅ ⭐ 3️⃣ .textContent

// ⭐ Sab text laata hai – hidden bhi.
// ✅ ➜ Saare text nodes (including hidden text) deta hai.
// ✅ ➜ Fast aur raw text.
 const list=document.getElementById("box").textContent
//  console.log(list) //
//   Hello Secret World
//✅ Hidden text bhi laayega: