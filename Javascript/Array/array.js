//* 🔢 1. What is an Array in JavaScript?

//* An Array is a special variable that can hold multiple values at once.

// ✅ Example:let fruits = ["apple", "banana", "mango"];
// 	•	fruits[0] → “apple”
// 	•	fruits[1] → “banana”
// 	•	fruits.length → 3
//*📦 2. How to Create an Array

// *✅ Method 1: Literal Syntax (Most Common)
// let arr = [10, 20, 30];
// *✅ Method 2: Using new Array()
// let arr = new Array(10, 20, 30);
// 🧠 Avoid this for simplicity.

// *🧮 3. Array Indexing
// 	•	Index starts from 0
// 	•	Last element → arr[arr.length - 1]

// 🔍 4. Common Array Methods
// Method
// *🔹 1. push()

// Add karta hai value array ke end me.
// let arr = [1, 2, 3];
// arr.push(4);      // arr becomes [1, 2, 3, 4]
//*🔹 2. pop()

// Last element ko remove karta hai
// let arr = [1, 2, 3];
// arr.pop();        // arr becomes [1, 2]

//*🔹 3. shift()

// Pehla element hata deta hai.
// let arr = [1, 2, 3];
// arr.shift();      // arr becomes [2, 3]

//* 🔹 4. unshift()
// Pehle jagah pe element add karta hai.
// let arr = [2, 3];
// arr.unshift(1);   // arr becomes [1, 2, 3]



//* 🔹 5. includes()

// Check karta hai ki element array me hai ya nahi (true/false).
// let arr = [1, 2, 3];
// arr.includes(2);   // true
// arr.includes(5);   // false

// *🔹 6. indexOf()

// Value kis index pe hai, wo batata hai. Agar na mile to -1.
// let arr = [10, 20, 30];
// arr.indexOf(20);    // 1
// arr.indexOf(100);   // -1

//* 🔸 7. join(separator) in Array
// let arr = [1, 2, 3];
// console.log(arr.join("-"));   // "1-2-3"
// console.log(arr.join(" 🌟 ")); // "1 🌟 2 🌟 3"
// 🔍 Points:
// 	•	You can give custom separator
// 	•	Default is also , if nothing is passed
// 	•	More powerful and flexible

//   *  JOIN AND TOSTRING ME KYA DIIF HAIN
//     🔸 8. toString() in Array
//     let arr = [1, 2, 3];
// console.log(arr.toString());  // "1,2,3"
// 🔍 Points:
// 	•	Default separator = , (comma)
// 	•	Cannot customize the separator
// 	•	Converts entire array to a string
// 	•	Works even if array has nested arrays

// *   🔹 9. slice(start, end)

// Ek naya array banata hai (original ko change nahi karta).
// let arr = [10, 20, 30, 40];
// arr.slice(1, 3);      // [20, 30] (end index excluded)



//* 🔹 10. splice(start, count)
// array.splice(startIndex, deleteCount, item1, item2, ...)
// startIndex
// Kahaan se operation start karna hai (0-based index)
// deleteCount
// Kitne elements hataane hain (0 ka matlab → koi delete nahi karega)
// item1...n
// Agar kuch add karna ho to yeh values daal do


// Array me se element delete/add karta hai (original array ko change karta hai).
// 
// *🔥 1. Delete Element from Array
// let arr = [10, 20, 30, 40, 50];

// // Delete 2 elements from index 1
// arr.splice(1, 2);

// console.log(arr);  // [10, 40, 50]

//*🔥 2. Add Element to Array
// let arr = [1, 2, 5];

// // At index 2, delete 0, and add 3, 4
// arr.splice(2, 0, 3, 4);

// console.log(arr);  // [1, 2, 3, 4, 5]

// *🔥 3. Replace Element in Array
// let arr = ["apple", "banana", "cherry"];

// // Replace "banana" with "mango"
// arr.splice(1, 1, "mango");

// console.log(arr);  // ["apple", "mango", "cherry"]
//*🔥 4. Delete All from a Position
// let arr = [10, 20, 30, 40, 50];

// // Delete from index 2 till end
// arr.splice(2);

// console.log(arr); // [10, 20]
//* 🔹 11. reverse()

// Pura array reverse kar deta hai (original array ko change karta hai).
// let arr = [1, 2, 3];
// arr.reverse();       // arr becomes [3, 2, 1]

// *12 lastIndexOf() — Kya karta hai?

// Woh index return karta hai jahan pe koi value ya character last time mila ho.
// Search right to left hota hai.
// let arr = [10, 20, 30, 20, 40, 20];

// console.log(arr.lastIndexOf(20));     // ➤ 5

// *⚡ What is structuredClone()?

// It’s a built-in JavaScript method to deep copy objects, arrays, and other data structures.

// ✅ It copies nested structures too.
// ✅ Safer than just using slice/spread for nested objects.
// const original = [1, 2, 3, 4];

// const clone = structuredClone(original);

// console.log(clone); // [1, 2, 3, 4] 
// 👉 Both are now independent arrays.

// ✅ With Nested Arrays/Objects
// const original = [1, { name: "Aman" }, [10, 20]];

// const clone = structuredClone(original);

// clone[1].name = "Raj";
// clone[2][0] = 99;

// console.log("Original:", original);
// // [1, { name: "Aman" }, [10, 20]]

// console.log("Clone:", clone);
// // [1, { name: "Raj" }, [99, 20]]

//* ✅ 1️⃣ What is Concatenation?

// Concatenation means joining two or more arrays into a single new array.

// ✅ Important:
// 	•	The original arrays are NOT modified.
// 	•	It returns a new array.

// 	*✅ 2️⃣ How to use .concat() Method
// 	const arr1 = [1, 2];
// const arr2 = [3, 4];

// const result = arr1.concat(arr2);

// console.log(result); // [1, 2, 3, 4]
// *✅ 3️⃣ Concatenate Multiple Arrays
// const a = [1];
// const b = [2, 3];
// const c = [4, 5];

// const result = a.concat(b, c);

// console.log(result); // [1, 2, 3, 4, 5]

//*✅ 4️⃣ Concatenating with Values
// const arr = [1, 2];
// const result = arr.concat(3, 4, 5, 6);

// console.log(result); // [1, 2, 3, 4, 5, 6]
//*✅ 6️⃣ Alternative: Spread Operator
// const arr1 = [1, 2];
// const arr2 = [3, 4];

// const result = [...arr1, ...arr2];

// console.log(result); // [1, 2, 3, 4]