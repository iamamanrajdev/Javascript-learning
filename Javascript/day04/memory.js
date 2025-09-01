// Pri,itive data types are ImmutABLE
// Primitive Data Types (Immutable)

// 🔹 Examples:
// 	•	String
// 	•	Number
// 	•	Boolean
// 	•	undefined
// 	•	null
// 	•	Symbol
// 	•	BigInt

// 🔸 Behavior:
// 	•	These values are immutable.
// 	•	When you perform operations on them, you’re not changing the original value, you’re creating a new value.
//     /
let a=10;
let b=a;
b=20;
console.log(b)//20
console.log(a)//10 Output: 10 (original value not changed)
//ANOTHER EXAMPLE
let str = "Hello";
str[0] = "Y";  // Trying to change the first character
console.log(str);  // Output: "Hello" (unchanged)
//non primitive data type are mutable
// ✅ Non-Primitive Data Types (Mutable)

// 🔹 Examples:
// 	•	Object
// 	•	Array
// 	•	Function

// 🔸 Behavior:
// 	•	These values are mutable.
// 	•	When you change the value inside them, the original reference gets updated.

let obj1={
name:"aman",
roll:23
}
let obj2=obj1;
obj2.roll=30;
console.log(obj1)//{ name: 'aman', roll: 30 }
console.log(obj2)//{ name: 'aman', roll: 30 }

//extras
//primitive 
// const an=23;
// an=24;
// console.log(an)
//non primitive
const obj3={namee:"ankit",id:3}


obj3.id=11;
console.log(obj3)//{ namee: 'ankit', id: 11 }

