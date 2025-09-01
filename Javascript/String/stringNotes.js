// ✅ 1. Ways to Write a String in JavaScript

// JavaScript me string likhne ke 3 main ways hote hain:
// let str1 = 'Single quotes';     // ✅
// let str2 = "Double quotes";     // ✅
// let str3 = `Backticks / Template literals`; // ✅
// 	•	Teeno valid hain.
// 	•	Lekin backticks (`) me extra power hoti hai → template literals, multiline strings, expression embedding, etc.

//          . Template Literals (Backticks) → Modern JS Style
//          let name = "Aman";
// let course = "JavaScript";

// let msg = `Hi ${name}, you are learning ${course}.`;
// console.log(msg);
// // Output: "Hi Aman, you are learning JavaScript."

// ✅ Advantages:
// 	•	Clean syntax
// 	•	Can write multiline strings
// 	•	Can embed variables, expressions, and even functions
//     let a = 10, b = 5;
// let result = `Sum is ${a + b}`; // Sum is 15

// ✅ What is String Concatenation?

// String Concatenation ka matlab hota hai:
// 2 ya usse zyada strings ko jodna (join karna) into a single string.
// 🔸 JavaScript me 2 Tarike Hain:
// Method
// Description
// + operator
// Traditional way to join strings
// Template literals (``)
// Modern & cleaner way (ES6+)

// ✅ 1. Using + Operator
// 🔹 Example:
// let firstName = "Aman";
// let lastName = "Raj";

// let fullName = firstName + " " + lastName;
// console.log(fullName); // Aman Raj
// ❗ Important Things with + Operator:

// 🔹 Left to Right Execution:
// console.log("1" + 2 + 3); // "123"
// console.log(1 + 2 + "3"); // "33"
// 🔹 Why?
// 	•	JS executes left to right
// 	•	First one: “1” + 2 → “12”, then +3 → “123”
// 	•	Second one: 1 + 2 → 3, then + “3” → “33”

// ✅ 2. Using Template Literals (Backticks)
// let name = "Aman";
// let lang = "JavaScript";

// let greet = `Hi ${name}, you are learning ${lang}!`;
// console.log(greet); // Hi Aman, you are learning JavaScript!

// ✅ 1. Multiline Concatenation (Old Way using +)

// 🔸 JavaScript me string ko multiple lines me likhne ke liye:
// 	•	Har line ko " " me likhna padta tha
// 	•	Aur har line ke end me + lagana padta tha
// 	•	Aur \n se new line dena padta tha
// ✅ Example:
// let msg = "Hello Aman,\n" +
//           "Welcome to JavaScript class.\n" +
//           "You're doing great!";

// console.log(msg);
// 🟰 Output:Hello Aman,
// Welcome to JavaScript class.
// You're doing great!

// ✅ 2. Multiline String using Template Literals (Modern Way)

// 🔸 Backtick (`) ka use karo → aur jo likhoge wo waise hi print hoga!
//     let msg = `Hello Aman,
// Welcome to JavaScript class.
// You're doing great!`;

// console.log(msg);
// 🟰 Output:
// Hello Aman,
// Welcome to JavaScript class.
// You're doing great!


// ✅ What is an Escape Character?

// JavaScript me escape character ka use tab hota hai jab tumhe string me kuch special characters likhne hote hain — jinko directly likhne se error ya galat output aa sakta hai.

// JavaScript me escape character hota hai: \ (backslash)
// Yeh special meaning ke liye use hota hai.

// ✅ Common Escape Characters in JS:
// Escape Code
// Meaning
// Example
// Output
// \'
// Single quote
// 'I\'m Aman'
// I’m Aman
// \"
// Double quote
// "He said: \"Hello\""
// He said: “Hello”
// \\
// Backslash (\)
// "C:\\Users\\Aman"
// C:\Users\Aman
// \n
// New Line
// "Hello\nWorld"
// HelloWorld
// \t
// Tab (horizontal space)
// "A\tB"
// A    B

//🔸 Examples:
// 1. Single & Double Quotes:
// let a = 'I\'m learning JS';
// let b = "He said: \"Great job!\"";
// console.log(a); // I'm learning JS
// console.log(b); // He said: "Great job!"

// 2. Backslash:
// let path = "C:\\Users\\Aman\\Documents";
// console.log(path); // C:\Users\Aman\Documents
// 3. New Line & Tab:
// let msg = "Name:\tAman\nRole:\tCoder";
// console.log(msg);
// 🟰 Output:
// Name:	Aman
// Role:	Coder

// 🧠 Bonus Tip: Escape in Template Literals?
// 🧠 Do Escape Characters Work Inside Template Literals?

// ✅ YES! Escape characters like \n, \t, \', \", \\ work normally inside backticks (`).

// Example : \', \", \\
// let str = `He said: \"Let's Code\" and path is C:\\Users\\Aman`;
// console.log(str);
// 🟰 Output:
// He said: "Let's Code" and path is C:\Users\Aman

// Ab samjhte hain “Changing Case in JavaScript Strings” — yaani uppercase / lowercase conversion. Interview me bhi aata hai aur real-world validation me bhi kaam aata hai.
// ✅ 1. toUpperCase() → Converts all letters to CAPITAL
// let name = "Aman Raj";
// let upper = name.toUpperCase();

// console.log(upper);  // "AMAN RAJ"

// ✅ 2. toLowerCase() → Converts all letters to small
// let lang = "JavaScript";
// let lower = lang.toLowerCase();

// console.log(lower);  // "javascript"

// 🔁 These methods:
// 	•	Do not change the original string (immutable)
// 	•	Always return a new string
//     let city = "Patna";
// city.toUpperCase();      // returns "PATNA"
// console.log(city);       // still "Patna"

// city = city.toUpperCase();  // Now we update it
// console.log(city);          // "PATNA"

// ✅ Why Search in String?

// Jab hume check karna hota hai ki koi word ya character string ke andar present hai ya nahi, ya kis position pe hai, tab searching ka use hota hai.

// ⸻
// ✅ 1. includes() → Boolean Check
// ✅ Simple way to check if something exists or not.
// let str = "I am learning JavaScript";

// console.log(str.includes("Java"));   // true
// console.log(str.includes("python")); // false

// 1️⃣2indexOf() → 🔍 Finds the FIRST occurrence of a substring

// ✅ Syntax:string.indexOf(searchValue, startIndex);
// 	•	searchValue: jo dhoondhna hai
// 	•	startIndex: (optional) kahan se start karna hai search
// ✅ Example:
// let str = "Aman is a hero coder and Aman is smart";

// console.log(str.indexOf("Aman"));       // 0  (first match)
// console.log(str.indexOf("coder"));      // 15
// console.log(str.indexOf("Aman", 10));   // 28 (start searching from index 10)
// console.log(str.indexOf("xyz"));        // -1 (not found)
// 3 lastIndexOf() → 🔍 Finds the LAST occurrence of a substring
// ✅ Syntax:string.lastIndexOf(searchValue, fromIndex);
// ✅ Example:
// let str = "Aman is a hero coder and Aman is smart";

// console.log(str.lastIndexOf("Aman"));      // 28 (last match)
// console.log(str.lastIndexOf("is"));        // 33
// console.log(str.lastIndexOf("Aman", 20));  // 0  (limit search till index 20)
//EXTRACTION OF STRING 
// 🔹 1. slice(start, end)
//👉 Use slice() for most use cases — it’s modern, flexible, and clean.
// 	•	✅ Preferred modern method
// 	•	Extracts part of a string from start index to (but not including) end index.
// 	•	Supports negative indexes.
//string.slice(start, end)

// let stra = "JavaScript";

// console.log(stra.slice(0, 4));   // "Java"
// console.log(stra.slice(4));      // "Script"
// Bahut accha question! 🔥
// Agar slice() me sirf ek hi argument diya ho — jaise slice(4) — to iska matlab “index 4 se lekar end tak” hota hai.
// ❌ Iska matlab 0 se 4 nahi hota.
//✅ “Start from index 4 and go till the end of the string.”

// console.log(stra.slice(-6)); 
// 🔹 slice(-6) ka matlab kya hai?
//string.slice(negativeIndex)
// Agar slice() me negative value dete ho — jaise slice(-6) — to JavaScript usse string ke end se count karta hai.
   
// 🔹 2. substring(start, end)
// 	•	Very similar to slice() but:
// 	•	❌ Does not support negative values
// 	•	✅ If start > end, it swaps them automatically.
// string.substring(start, end)
// let strb = "JavaScript";

// console.log(strb.substring(0, 4));   // "Java"
// console.log(strb.substring(4));      // "Script"
// console.log(strb.substring(4, 0));   // "Java" (swaps automatically)
// console.log(strb.substring(-3));     // "JavaScript" (negative treated as 0)

//🔹 Kya start index > end index allowed hai?
// 🟢 slice(start, end)
// 	•	 NOT Allowed
// 	•	❌ Agar start > end ho, to empty string return karta hai.
//     ⚠️ slice() does not auto-swap start and end.

//     BUT 
//    🟢 substring(start, end)
// 	•	✅ Allowed
// 	•	✅ Agar start > end ho, to automatically swap kar deta hai.

//REPLACING CONTENT 
// 🔹 1. replace() Method
// string.replace(searchValue, newValue)
// 	•	searchValue: kya replace karna hai (string ya regex)
// 	•	newValue: kis se replace karna hai
// 	•	❗By default, replace() sirf pehla match replace karta hai

//✅ Example 1: Replace First Match
// let strc = "Hello Aman, Aman is learning JavaScript.";
// let newStr = strc.replace("Aman", "Hero");

// console.log(newStr);
// Output: "Hello Hero, Aman is learning JavaScript."
//🔹 Sirf pehla ‘Aman’ replace hua. Baaki untouched.

//🔹 2. Replace All Matches → replaceAll() or Regex with /g
//✅  string.replaceAll(searchValue, newValue)
// let strd = "Hello Aman, Aman is learning.";
// let newStre = strd.replaceAll("Aman", "Hero");

// console.log(newStre);
// Output: "Hello Hero, Hero is learning."


// 🔧 Bonus Tip: Can’t mutate original string

// Strings in JS are immutable, so:
// let strz = "hello";
// strz.replace("h", "y"); // doesn't change original
// console.log(strz); // "hello"

// strj = strz.replace("h", "y"); // reassign to change
// console.log(strj); // "yello"

//🔹 split() Method

// ✅ Purpose:

// split() method string ko tod deta hai (i.e., split karta hai) into an array of substrings, based on a separator.
// string.split(separator, limit)
// 	separator → kis symbol, space, character, word ke basis pe string ko split karna hai
// 	•	limit → kitne parts me maximum split karna hai (optional)
// 🔹 Examples

// ✅ 1. Split by Space " 
// ⸻let str = "Aman is learning JavaScript";
// let words = str.split(" ");

// console.log(words);
// Output: ["Aman", "is", "learning", "JavaScript"]

//✅ 2. Split by Comma ","
// let data = "Aman,Hero,Coder";
// let arr = data.split(",");

// console.log(arr);
// Output: ["Aman", "Hero", "Coder"]

//✅ 3. Split by Empty String "" (character by character)
// let name = "Aman";
// let chars = name.split("");

// console.log(chars);
// Output: ["A", "m", "a", "n"]

//✅ 4. With Limit
// let str = "Learn Code Daily";
// let parts = str.split(" ", 2);

// console.log(parts);
// Output: ["Learn", "Code"]

//🔹 What if Separator Not Found?
// let str = "Aman";
// let result = str.split(",");

// console.log(result);
// Output: ["Aman"]  ✅ (no comma found, returns full string in array)

//✅ Jab bhi hum split() ka use karte hain, return value hoti hai:

//🔹 Array of strings
// ✅ Example:
// let str = "Aman is learning";
// let result = str.split(" ");

// console.log(result);         // ["Aman", "is", "learning"]
// console.log(typeof result);  // "object" ✅ (kyunki array bhi ek object hota hai)
// Array.isArray(result);       // true ✅

// 🔹 What is Trimming?

// “Trimming” ka matlab hota hai:

// ✅ String ke starting aur ending spaces ko hata dena.

// ⸻

// ✅ Method: trim()
// string.trim()
// 🔸 Removes:
// 	•	Leading spaces (start ke space)
// 	•	Trailing spaces (end ke space)
// 	•	❌ Middle ke spaces ko touch nahi karta
// ✅ Example 1: Basic Use
// let str = "   Aman Raj   ";
// let trimmed = str.trim();

// console.log(trimmed);       // "Aman Raj"
// console.log(str.length);    // 13
// console.log(trimmed.length); // 8

// 🔹 Also Available:
// ✅ trimStart() → Sirf left-side ke space hataata hai
// let str = "   Aman";
// console.log(str.trimStart());  // "Aman"
// ✅ trimEnd() → Sirf right-side ke space hataata hai
// let str = "Aman   ";
// console.log(str.trimEnd());    // "Aman"

// ❌ Important Note:
// let name = " Aman ";

// name.trim(); // returns new trimmed string
// console.log(name); // " Aman " ❌

// name = name.trim(); // assign karo to update
// console.log(name); // "Aman" ✅

// Strings are immutable in JavaScript. So trim() original string ko change nahi karta — nayi trimmed string return karta hai.

// ✅ What is new String() in JavaScript?

// new String("value") ek string object banata hai, primitive string nahi.
// 🧠 Syntax:let str = new String("Aman");
// 🤯 Output:console.log(str);        // [String: 'Aman']
// console.log(typeof str); // ❗ "object"
// ⚠️ It returns an object, not a primitive string.

// ⚠️ Comparison Trap:
// let str1 = "Aman";                   // Primitive
// let str2 = new String("Aman");       // Object

// console.log(str1 == str2);   // ✅ true (value same)
// console.log(str1 === str2);  // ❌ false (type different)
// == karta hai type conversion
// === karta hai strict check (value + type)

// ✅ Final Line Samjho:

// JavaScript khud primitive string ko object bana ke handle karta hai jab zarurat hoti hai.
// Isiliye new String() likhne ki zarurat hi nahi hai aaj ke zamane me.

// ⸻

// 🧠 Let’s break it down:

// 🔹 Primitive string:let str = "Aman";
// Yeh ek simple string hai, aur iska type hota hai "string" (primitive).
// 🔹 Jab tu kuch aisa karta hai: console.log(str.toUpperCase());  // "AMAN"
// ❓ Par ruk jao…

// Tu ne "Aman" string pe method laga diya (toUpperCase()), jo to object method hai!
// 💥 Magic: JavaScript Automatically Kya Karta Hai?

// Jab bhi tu primitive string par object method use karta hai (jaise .length, .toUpperCase()), tab:

// JavaScript ka automatic process:
// 	1.	Wo "Aman" ko temporarily ek String object me convert karta hai
// 	2.	Us object pe method lagata hai
// 	3.	Phir wo object automatically destroy kar deta hai
// 🔥 Tera Sawal:

// JavaScript phir us object ko automatically destroy kar deta hai — iska matlab?

// ⸻

// 🎯 Concept:

// Jab tu kisi primitive string par method lagata hai (jaise "Aman".toUpperCase()), tab:
// 	1.	JavaScript ek temporary String object banata hai
// 	2.	Wo method run karta hai
// 	3.	Jaise hi kaam khatam → wo object memory se hata diya jata hai
// (engine automatically garbage collection karta hai)
// 👇 Visualization:
// let str = "Aman";
// let result = str.toUpperCase();
// Internally:
// Behind the scenes:
// let temp = new String(str);      // Step 1: Temporary object
// let result = temp.toUpperCase(); // Step 2: Use method
// temp = null; 
// ✅ You don’t see this — JavaScript engine does it for you.   
// 🧠 Technical Term: Garbage Collection

// JavaScript ka engine (like V8 in Chrome) automatically:
// 	•	Detect karta hai ki koi object use nahi ho raha
// 	•	Aur usko memory se clean kar deta hai

// Isiliye tu new String() nahi use karta — kyunki JS already:
// 	•	Use karta hai temporary object
// 	•	Aur manage bhi khud karta hai memory ✅
//                  // Step 3: Automatically destroyed


//* practice question and ans 
//*Section 4: Practice Set
// 1. Write a function to manually split a string by space without using split().
// 2. Write a function that replaces all 'hi' with 'hello' in a sentence.
// 3. Create a function to trim leading and trailing whitespace.
// 4. Extract first and last word of any sentence.
// 5. Convert 'JavaScript Is Fun' to 'javascript is fun'.
// 6. Implement a function that mimics slice() using substring().
// 7. Write a function to count how many times a letter appears in a string.
// 8. Given 'Hello from Aman', return the initials.
//*radhe radhe **************************************************
// 9. Convert a sentence to CamelCase.
let sentence = "hello world from aman";

// 1. Sentence ko words mein split karo
let words=sentence.split(" ")
// 2. Pehla word waise ka waise
let camelCase=words[0].toLocaleLowerCase();
// 3. Baaki sab words ko capital bana ke jodo


//*radhe radhe **************************************************
//*10. Find all indexes where 'a' occurs in 'banana'.
// let str="banana";
// let index=[]
// for(let i=0;i<str.length;i++){
//     if(str[i]==='a'){
//         index.push(i) //* important concept
//     }
//  “String se multiple indexes nikalne ke liye, array use karte hain taki sab position ek sath store ho sake.”

// ⸻


 // console.log(index); //[ 1, 3, 5 ]

  //ab isi ko function ke roop me
//   function allindexes(str,letter){
// let index=[]
// for(let i=0;i<str.length;i++){
//     if(str[i]===letter){
//         index.push(i) //* important concept
//     }
// }
//     return index;
// }
// console.log(allindexes("banana",'n')) //[ 2, 4 ]
//*radhe radhe **************************************************