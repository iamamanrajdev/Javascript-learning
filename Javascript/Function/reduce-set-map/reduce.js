//*reduce
// 🧠 Where to use reduce()?
	// •	Total score nikalna
	// •	Max/min value find karna
	// •	Grouping elements
	// •	Counting occurrences
	// •	Flattening arrays
	// •	Custom logic (sum of even numbers, etc.)
// 🔧 Syntax:array.reduce((accumulator, currentValue, index, array) => {
//   return updatedAccumulator;
// }, initialValue);
// 🧠 Terms samjho:
// 	•	accumulator: result jisme value store hoti rehti hai (sum, string, object, etc.)
// 	•	currentValue: abhi jis element pe kaam ho raha hai
// 	•	initialValue: accumulator ki starting value (optional but recommended)

// ⸻

//*🚀 Example 1: Sum of all numbers
// let numbers = [10, 20, 30, 40];

// let total = numbers.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);
//*single line me - const result=Array.reduce((acc,curr)=>acc+curr,0)

// console.log(total); // 👉 100

// 👀 Behind the scenes:
// Step 1: acc = 0, curr = 10 → acc = 10
// Step 2: acc = 10, curr = 20 → acc = 30
// Step 3: acc = 30, curr = 30 → acc = 60
// Step 4: acc = 60, curr = 40 → acc = 100

//*Real world uses
// let arr = ['a', 'b', 'a', 'c', 'b', 'a'];
// const result=arr.reduce((acc,curr)=>{
//     if(acc.hasOwnProperty(curr))
//         acc[curr]++;
//     else
//         acc[curr]=1

//     return acc;
// },{})

// console.log(result) //{ a: 3, b: 2, c: 1 }

//*⚡ Example 2: Multiply all values
// let nums = [2, 3, 4];

// let product = nums.reduce((acc, curr) => acc * curr, 1);

// console.log(product); // 👉 24

//*🧵 Example 3: Join all names
// let names = ["Aman", "Rohit", "Neha"];

// let result = names.reduce((acc, curr) => acc + ", " + curr);

// console.log(result); // 👉 Aman, Rohit, Neha
// 📌 hasOwnProperty() in JavaScript

//🔍 Definition:

// hasOwnProperty() ek method hoti hai objects ki, jo check karti hai ki koi property object ke paas directly hai ya nahi (i.e., inherited nahi honi chahiye).


// ⸻

// 💡 Why Use It?

// Agar tumhe object ke andar ki asli (direct) property check karni hai, bina prototype ki property check kiye, tab use karo.
// ✅ Syntax:object.hasOwnProperty('propertyName')
// Ye true ya false return karta hai.
// 🔥 Ek Line Me:

// hasOwnProperty() check karta hai kya property object ki apni hai ya uske ancestors (prototype) se inherited hai.
// 🧠 Example 1: Basic
// let person = {
//   name: "Aman",
//   age: 21
// };

// console.log(person.hasOwnProperty("name")); // 👉 true
// console.log(person.hasOwnProperty("email")); // 👉 false


//*Set
// 📦 What is a Set in JavaScript?
//set ke pass .add .delete .has .size clear propery hoti hai ye set of prototype se aa rha hai isko example me banana hai

//🔑 Definition:

//Set is a special type of object that stores unique values only — duplicates allowed nahi hote.

// 🔧 Syntax:let mySet = new Set();
// 🧠 Real-Life Example:

// Socho tumhare paas ek bucket hai jisme tum sirf unique fruits daal sakte ho — agar tum ne do baar “apple” daala, to bucket ek hi baar accept karega.
// let fruits = new Set();

// fruits.add("apple");
// fruits.add("banana");
// fruits.add("apple"); // Duplicate – ignore ho jaayega

// console.log(fruits); 
// 👉 Set(2) { 'apple', 'banana' }

//*typeof set object hai

//ek aur tarika hai set bananae ka
// const set1=new Set([10,20,10,20,30])
// console.log(set1)//Set(3) { 10, 20, 30 }

// const user_id=new Set(["aman_09","ankit_08","ravi_09"])
// let new_user="aman_09";
// console.log(user_id.has(new_user))//true

// 🔍 Step-by-Step Explanation:
// 1️⃣ new Set([...])-const user_id = new Set(["aman_09", "ankit_08", "ravi_09"]);Yahaan tumne ek Set banaya hai jisme teen unique usernames store kiye gaye hain:

// 2️⃣ let new_user = "aman_09";Yahaan ek naye user ka ID store kiya gaya hai ek variable me:
// 3️⃣ user_id.has(new_user)3️⃣ user_id.has(new_user)

// Ab ye line check karti hai:

// “Kya new_user wali value ("aman_09") user_id set ke andar already maujood hai?”


// ⸻

// ✅ Why true?
// 	•	Set stores only unique values.
// 	•	"aman_09" already present hai, isliye has() confirm karega ki wo value exist karti hai.
// 	•	So output is: true.

//*🔁 Convert Set to Array
// ✅ Method 1: Using Spread Operator [...set]
// const mySet = new Set([10, 20, 30]);
// const myArray = [...mySet];

// console.log(myArray); // 👉 [10, 20, 30]
// Sabse fast + clean method — spread operator ... simply Set ke elements ko Array me daal deta hai.
//*🔁 Convert Array to Set in JavaScript
// const myArray = [10, 20, 10, 30, 20];
// const mySet = new Set(myArray);

// console.log(mySet); // 👉 Set(3) { 10, 20, 30 }

//* 🔗 Union of Two Sets in JavaScript

//* ✅ Syntax (Using Spread Operator):
// const setA = new Set([1, 2, 3,1,3,2,5]);
// const setB = new Set([3, 4, 5,6,5,2]);

// const unionSet = new Set([...setA, ...setB]);

// console.log(unionSet); 
// 👉Set(6) { 1, 2, 3, 5, 4, 6 }

// * Intersection of Two Sets in JavaScript
//*  Intersection = Sirf wo elements jo dono sets me common hain
// const setA = new Set([1, 2, 3, 4]);
// const setB = new Set([3, 4, 5, 6]);
// const result=new Set([...setA].filter((num)=>setB.has(num)));
// console.log(result)//*Set(2) { 3, 4 }

//* Iterate over set
// *🔁 1. Using for...of loop ✅
// const fruits = new Set(["apple", "banana", "mango"]);

// for (let fruit of fruits) {
//   console.log(fruit);
// }
// // 👉 apple
// // 👉 banana
// // 👉 mango

//*🔁 2. Using forEach() method ✅
// fruits.forEach((value) => {
//   console.log(value);
// });
// // 👉 apple
// // 👉 banana
// // 👉 mango



//* 🔍 Difference Between .hasOwnProperty() vs "in" / .has():

// 🧠 1. hasOwnProperty() — object ki apni property check karta hai
// let person = {
//   name: "Aman"
// };

// console.log(person.hasOwnProperty("name")); // 👉 true
// console.log(person.hasOwnProperty("toString")); // 👉 false (inherited hai, direct nahi)
// 🔥 It checks only direct properties.

// 🔍 2. “key” in object — inherited bhi check karega
// console.log("name" in person); // 👉 true
// console.log("toString" in person); // 👉 true ❗ (kyunki Object.prototype se aayi hai)
// "in" operator checks direct + inherited.

// 🧩 3. Set/Map ke liye .has() method
// const user_id = new Set(["aman_09", "ankit_08"]);
// console.log(user_id.has("aman_09")); // 👉 true
// console.log(user_id.has("rohit_08")); // 👉 false
// .has() is used in Set and Map to check value existence (not property name).


//*Map in javascript-in js a map is a collection of key value pair where both the key and the value can be any datatype(primitive or object).unlike
//*regular js objects a map maintains theorder of its elements based on insertion and allows keys of any typeof(even ,objects,functions and primitive types)where object only allow strings or symbol as keys

//*.set(k, v) Add key-value
// const map1=new Map();
// map1.set(3,90);
// map1.set("rohit",45);
// map1.set(20,"mohan")

//console.log(map1)//Map(3) { 3 => 90, 'rohit' => 45, 20 => 'mohan' }
//*key hmesha unique hona chhaiye
//map1.set(20,"ankit")//error key should be unique
//*has(k) Check if key exists
 //console.log(map1.has(20))//true
 //*.delete(k) Remove key
  //console.log(map1.delete(20))
  //console.log(map1)//Map(2) { 3 => 90, 'rohit' => 45 }

  //*.clear()Remove all entries
  //console.log(map1.clear)
  //console.log(map1)//Map(3) { 3 => 90, 'rohit' => 45, 20 => 'mohan' }


  //*.size Total number of entries
  //console.log(map1.size)//3
  //*.get(k) get value by key
  //console.log(map1.get(20))//mohan

//*Another way to create Map
const map1=new Map([
    [4,"aman"],
    ["fame","aman"]
]);
//*console.log(map1)//Map(2) { 4 => 'aman', 'fame' => 'aman' }

//*iterate over map usinf fo of and for each
//*🔁 1. Using for...of (Full Control - Best for Destructuring)
for(let value of map1)
    console.log(value)
//[ 4, 'aman' ]
//[ 'fame', 'aman' ]
//*Agar key value chhaiye to
for (let [key, value] of map1) {
  console.log(key, value);
}
// 4 aman fame aman

//* 📌 Bonus: Iterate over just keys or values
// for (let key of map1.keys()) {
//   console.log("Key:", key);
// }

// for (let value of map1.values()) {
//   console.log("Value:", value);
// }

//*🔁 2. Using map.forEach()
map1.forEach((value, key) => {
  console.log(key, value);
});
// Output:
// 4 'aman'
// fame 'aman'


//*✅ Simple Example: Why Map > Object
const myMap = new Map();

const objKey = { id: 1 };
const funcKey = () => {};

myMap.set(objKey, "Object as key");
myMap.set(funcKey, "Function as key");

console.log(myMap.get(objKey));  // * "Object as key"
console.log(myMap.get(funcKey)); // * "Function as key"
console.log(myMap.size);         // * 2

//* Same thing with Object (Fails!)
const myObj = {};

myObj[objKey] = "Object as key";
myObj[funcKey] = "Function as key";


 
//*🔍 Map vs Object — Developer Cheat Sheet

// | Feature                      | Object                                          | Map                                               |
// |-----------------------------|--------------------------------------------------|---------------------------------------------------|
// | 🔑 Key Types                 | Only string or symbol                           | Any type — string, number, object, array, function ✅ |
// | 📋 Order of Keys            | Not guaranteed                                  | Maintains insertion order ✅                       |
// | 📏 Size Check               | Object.keys(obj).length (indirect)              | .size property directly gives count ✅             |
// | 🔁 Iteration                | Use for...in, Object.keys()                     | Use for...of, .forEach() — easy ✅                 |
// | 🚀 Performance (frequent ops)| Slower for frequent add/remove                  | Faster for frequent inserts/deletes ✅             |
// | 🔐 Prototype Pollution Safe | ❌ No — inherited properties exist (like toString) | ✅ Yes — no prototype pollution risk             |
// | 🧰 Built-in Methods         | Very limited (hasOwnProperty, etc.)             | .set(), .get(), .has(), .delete(), .clear() ✅     |
// | 💡 Best Use Case            | Static, small, simple data (config, JSON)       | Dynamic, large data, complex keys, frequent access |
// */


