//?🔢 Arrays in JavaScript (Basics)
//?1. What is an Array?
	//*•	An Array is a special variable in JavaScript that can store multiple values in a single variable.
	//*•	Each value is stored at an index (position number).
	//*•	Indexing starts from 0 (zero-based indexing).
   //? ✅ Example:
    let fruits = ["apple", "banana", "mango"];
    console.log(fruits[0]); //! "apple"
    console.log(fruits[1]); //! "banana"
    console.log(fruits.length); //! 3

//?2. How to Create an Array

//?✅ Method 1: Array Literal (Most Common)
let array = [10, 20, 30];

//?✅ Method 2: Using new Array()
let arrr = new Array(10, 20, 30);
//*⚠️ Not recommended unless you specifically want an empty array of fixed length:
let arr = new Array(5);  //! creates [empty × 5]

    //?3. Key Features
	//*•	Arrays can store different data types:
    //*	•	Arrays are a type of object in JavaScript:
    //?Example:
        let nums = [1, 2, 3];
    console.log(typeof nums); //! "object"
//*---------------------------------------------------------------------------------------------------------------------------
//?📌 Array Indexing in JavaScript
	//*.	Index starts at 0
	//*•	The first element → index 0
	//*•	The second element → index 1
	//*•	And so on…
 //?Example:
let fruitss = ["apple", "banana", "mango"];
console.log(fruitss[0]); //! "apple"
console.log(fruitss[1]); //! "banana"
console.log(fruitss[2]); //! "mango"

//?Accessing the last element
//*Use: arr[arr.length - 1]
console.log(fruitss[fruitss.length - 1]); //! "mango"

//*	If index is out of range
//*You’ll get undefined.
//*--------------------------------------------------------------------------------------------------------------------
//?Common Array Method:
//?🔹 1. push()
//*	•	Adds an element at the end of the array.
//*	•	Changes original array.
//*👉 Example: [1,2,3] → push(4) → [1,2,3,4]

//?🔹 2. pop()
//*	•	Removes the last element.
//*	•	Changes original array.
//*👉 Example: [1,2,3] → pop() → [1,2]

//?🔹 3. shift()
//*	•	Removes the first element.
//*	•	Changes original array.
//*👉 Example: [1,2,3] → shift() → [2,3]

//?🔹 4. unshift()\	
//* 	Adds an element at the start of the array.
//*		Changes original array.
//*  👉 Example: [2,3] → unshift(1) → [1,2,3]

//?🔹 5. includes()
//*•	Checks if a value exists in the array.
//*	•	Returns true/false.
//*👉 Example: [1,2,3].includes(2) → true

//?🔹 6. indexOf()
//*	•	Returns the index of a value.
//*	•	If not found → returns -1.
//*👉 Example: [10,20,30].indexOf(20) → 1

//? 🔹 lastIndexOf()
	//*•	It searches the array from right → left.
	//*•	Returns the last position (index) of the given value.
	//*•	If the value is not found, it returns -1.
//* Example:
let arrf = [10, 20, 30, 20, 40, 20];
console.log(arrf.lastIndexOf(20));  //! 5  (last 20 is at index 5)
console.log(arrf.lastIndexOf(30));  //! 2  (30 is at index 2)
console.log(arrf.lastIndexOf(100)); //! -1 (not found)

//?🔹 8. slice(start, end)
//*	•	Returns a new array (copy).
//*•	Does not modify original array.
//*	•	End index is excluded.
//*👉 Example: [10,20,30,40].slice(1,3) → [20,30]

//?🔹 9. splice(startIndex, deleteCount, items...)
//*	•	Can remove, replace, or add elements.
//*	•	Modifies the original array.
//?👉 Example:
let arre = [1,2,3,4];
arre.splice(1,2,"X","Y");  
//! Removes 2 elements starting at index 1 → [2,3]
//! Adds "X","Y" → arr = [1,"X","Y",4]
//?👉 You can do 3 things with splice:
	//?1.	Delete elements
   let arrl = [10, 20, 30, 40, 50];
   arr.splice(1, 2); 
   console.log(arrl); //! [10, 40, 50] 

   	//?2.	Add elements
    let arrgk = [1, 2, 5];
   arr.splice(2, 0, 3, 4);
   console.log(arrgk); //! [1, 2, 3, 4, 5]

  //?	3.	Replace elements
   let arro = ["apple", "banana", "cherry"];
   arr.splice(1, 1, "mango");
 console.log(arr); //! ["apple", "mango", "cherry"]

	//?4.	Delete everything from a position
    let arrt = [10, 20, 30, 40, 50];
    arr.splice(2);
    console.log(arrt); //! [10, 20]
  //!⚠️ Important: splice() changes the original array.

//?⚡ Trick to Remember in Interviews
//*	•	push, pop → work at end
//*	•	shift, unshift → work at start
//*	•	slice → copy (non-destructive)
//*•	splice → surgery (destructive, changes original)

//?10 🔹 reverse()
		//*Reverses the order of all array elements.
		//*It modifies the original array.
     //? Example:
    let arrd = [1, 2, 3];
    arr.reverse();
   console.log(arrd); //! [3, 2, 1]
//*--------------------------------------------------------------------------------
//? DIFF B/W join() AND t
//?🔹 join(separator)
//*👉 Purpose: Convert array → string with a custom separator.
//*✅ Features:
//*1.	You can choose your own separator (-, space, emoji, etc).
//*	2.	Default separator = , (comma).
//*	3.	Returns a string.
//*	4.	Does not change the original array.
//?🧪 Examples:
let arrk = [1, 2, 3];
console.log(arrk.join("-"));     //! "1-2-3"
console.log(arrk.join(" 🌟 "));  //! "1 🌟 2 🌟 3"
console.log(arrk.join(""));      //! "123" (no separator)
console.log(typeof arrk) //!string
console.log(arrk);               //! [1, 2, 3] (original array unchanged)

//?🔹 toString()
//*👉 Purpose: Convert array → string, but separator is always comma.
///*✅ Features:
//*	1.	Separator is fixed = , (cannot be changed).
//*	2.	Returns a string.
//*3.	Works even with nested arrays (flattens them).
//*4.	Does not change the original array.
//?Example:
let arrg = [1, 2, 3];
console.log(arrg.toString());  //! "1,2,3"
console.log(typeof arrg.toString()); //! "string"

let nested = [1, [2, 3], 4];
console.log(nested.toString()); //! "1,2,3,4"

//*------------------------------------------------------------------------------------------------------------------ 
//?⚡ What is structuredClone()?
//*	•	It’s a built-in JavaScript method.
//*	•	It creates a deep copy of objects, arrays, maps, sets, and other data structures.
//*	•	Deep copy means even nested objects/arrays are copied separately (no connection to the original).
//?✅ Why is it Better?
//*	•	Normal methods like slice(), spread operator (...), or Object.assign() only make a shallow copy → nested objects/arrays are still linked.
//*	•	structuredClone() solves this by making completely independent copies.
//?🔹 Example 1: Simple Array
const original = [1, 2, 3, 4];
const clone = structuredClone(original);
clone[0] = 99;
console.log(original); //! [1, 2, 3, 4] ✅ unchanged
console.log(clone);    //! [99, 2, 3, 4] ✅ independent
//!👉 Here, changing clone does not affect original.

//?🔹 Example 2: Nested Arrays/Objects
const originall = [1, { name: "Aman" }, [10, 20]];
const clonee = structuredClone(originall);

//* Modify clone
clone[1].name = "Raj";
clone[2][0] = 99;

console.log("Original:", originall);
//! [1, { name: "Aman" }, [10, 20]]

console.log("Clone:", clone);
//! [1, { name: "Raj" }, [99, 20]]
//*--------------------------------------------------------------------------------------------------------------
//?✅ 1. What is Concatenation?
//*•	Concatenation means joining arrays together into one new array.
//*•	It does not modify the original arrays → instead, it returns a new array.

//?    ✅ 2. Using .concat()
    const arr9 = [1, 2];
    const arr8 = [3, 4];
const resulti = arr9.concat(arr8);
console.log(resulti); //! [1, 2, 3, 4]
console.log(arr9);   // ![1, 2] (unchanged)
console.log(arr8);   //! [3, 4] (unchanged)
//*👉 Original arrays remain safe.

//?✅ 3. Concatenate Multiple Arrays
const a = [1];
const b = [2, 3];
const c = [4, 5];
const resulte = a.concat(b, c);
console.log(resulte); //! [1, 2, 3, 4, 5]

//?✅ 4. Concatenate Arrays + Values
const arrj = [1, 2];
const resultt = arrj.concat(3, 4, 5);
console.log(resultt); //! [1, 2, 3, 4, 5]
//*👉 You can add arrays + values together.

//?✅ 5. Alternative: Spread Operator ...
const arr1 = [1, 2];
const arr2 = [3, 4];
const result = [...arr1, ...arr2];
console.log(result); //! [1, 2, 3, 4]

//*👉 Same result as concat(), but shorter and modern.
//*👉 Widely used in React / ES6 codebases.
//*🔑 Key Takeaways
//*	1.	.concat() = traditional way, returns new array.
//*	2.	Spread (...) = modern way, shorter syntax.
//*	3.	Both methods do shallow concatenation (they don’t deep clone nested objects)

//?⚡ Question for you:
//*If we do this →
let x = [1, [2, 3]];
let y = [4, 5];
let res = x.concat(y);
console.log(res);//![ 1, [ 2, 3 ], 4, 5 ]
//*👉 What do you think will happen with the nested [2, 3]? Will it stay safe or be deeply copied?
//*------------------------------------------------------------------------------------------------------------------------------------------------------------

