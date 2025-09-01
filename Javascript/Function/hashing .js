//* 🔐 What is Hashing?

//* Hashing is a technique that converts input (like a string or number) into a fixed-size value (called a hash code) using a special function called a hash function.

//* Think of hashing like a smart locker system:
//*	•	You give your name → it gives you locker no. 42.
// *	•	When you return, you use locker no. 42 → quickly get your stuff.

// *⚙️ Where is Hashing used in JavaScript?

//* 1. Objects and Maps
//* 	•	In JavaScript, when you use an object’s property like obj["key"], JS behind the scenes hashes "key" and maps it to a memory location.
//* 	•	This is why object key lookup is super fast — O(1) time complexity in average case.

//* 2. Set
//* 	•	When you add values to a Set, JavaScript uses hashing to check for uniqueness.
//* 	•	That’s why Set doesn’t allow duplicates — it hashes the value and checks if it already exists.


// *🧠 Internally (Simplified)

//* When you write:
// let user = { name: "Aman" };
// *JavaScript:
//* 	•	Converts the "name" key into a hash (e.g., a number).
// *
//  *   When you do:console.log(user["name"]);
//  *   JS:
// *	•	Re-hashes "name" and goes to the exact memory location → super fast lookup.

//* 🔍 Hashing Is Important For:

//* ✅ Fast data access
//* ✅ Removing duplicates
//* ✅ Cryptography (with secure hash functions like SHA256)

