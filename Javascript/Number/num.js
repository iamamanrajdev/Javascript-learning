// //EXAMPLE
// let num1 = 231;
// let num2 = new Number(231);
// let num3 = new Number(231);

// console.log(num1 == num2);  // true ❓
// console.log(num2 == num3);  // false ❓
// 🔍 Step-by-Step Explanation:

// ✅ 1. let num1 = 231;
// 	•	This is a primitive number.
// 	•	typeof num1 → "number"

// ✅ 2. let num2 = new Number(231);
// 	•	This creates a Number object, not primitive.
// 	•	typeof num2 → "object"

// 👉 Behind the scenes:let num2 = {
//   [[NumberData]]: 231
// }
// ✅ 3. let num3 = new Number(231);
// 	•	Again, this is a different Number object in memory.
// 	•	Even though value is same, object memory reference is different.

// 💥 Comparison 1:console.log(num1 == num2); // true
// ❓ Why true with ==?
// 	•	== does type coercion
// 	•	JavaScript converts num2 (object) to its primitive value (231)
// 	•	So: 231 == 231 → ✅ true
// Memory level:
// num1 (primitive) → 231
// num2 (object) → auto-converted to 231

// 💥 Comparison 2:console.log(num2 == num3); // false
// ❌ Why false?
// 	•	Both num2 and num3 are separate objects
// 	•	In JavaScript: two objects are only equal if they reference the same memory
// 	•	Here:num2 → Object#123
// num3 → Object#456
// 	•	So: num2 == num3 → false

// 🔢 Numbers in JavaScript – Full Explanation
// ✅ 1. Basic Types of Numbers

// JavaScript mein sirf ek hi number type hota hai:
// 	•	Number: Includes both integers and floating-point numbers.
//     let a = 10;       // Integer
// let b = 10.5;     // Float
// JavaScript mein sab number internally 64-bit floating point format mein store hote hain (IEEE 754).

// ✅ 2. Number Methods (Built-in)
// **(i) toString() in JavaScript

// 🔹 Definition:

// toString() is a method that converts a value (mostly numbers, arrays, booleans, etc.) into a string.
// // 1️⃣ Number to String
// let num = 231;
// console.log(num.toString());      // "231"
// console.log(typeof num.toString()); // "string"

// // 2️⃣ Boolean to String
// let isLoggedIn = false;
// console.log(isLoggedIn.toString()); // "false"

// // 3️⃣ Array to String
// let arr = [1, 2, 3];
// console.log(arr.toString());     // "1,2,3"

// //** IMP */ 4️⃣ Object to String (Default)
// let obj = { name: "Aman" };
// console.log(obj.toString());     // "[object Object]"

// // 5️⃣ Radix (Base Conversion)
// let dec = 10;
// console.log(dec.toString(2));    // "1010" → binary
// console.log(dec.toString(8));    // "12"   → octal
// console.log(dec.toString(16));   // "a"    → hexadecimal

// // 6️⃣ String ka toString (No change hota hai)
// let str = "Hero";
// console.log(str.toString());     // "Hero"

// // 7️⃣ Null or Undefined — ⚠️ ERROR dega
// // let x = null;
// // console.log(x.toString());    ❌ ERROR: Cannot read properties of null

// // ✅ Safe way to convert:
// console.log(String(null));       // "null"9
// console.log(String(undefined));  // "undefined"
// 🔥 Interview Tip:
// 🔸 3 tarike — kaam same, implementation alag
// let num = 50;
// console.log("" + num);         // "50" → String conversion
// console.log(String(num));      // "50"
// console.log(num.toString());   // "50"

// *(ii)📘 toFixed(n) :toFixed(n) returns a string representation of the number with exactly n digits after the decimal point.
// 🧪 Syntax:number.toFixed(n);
// 	•	n = Number of digits after decimal
// 	•	Returns: String (not number)
// 🔍 Example 1: Basic Usage
// let num = 5.6789;

// console.log(num.toFixed(2)); // "5.68"
// console.log(num.toFixed(0)); // "6" 👉 Output rounded hota hai, cut nahi!
// console.log(num.toFixed(3)); // "5.679"
// 🔍 Example 2: With Integers
// let num = 45;

// console.log(num.toFixed(2)); // "45.00" 🎯 Adds decimal digits even if not needed, because you asked for 2 digit

// ⚠️ Important Notes
// num.toFixed(2)
// "12.00"
// Always returns a string
// num.toFixed()
// "12"
// Default is 0 decimal places
// typeof result
// "string"
// Even if original was number
// n > 20
// ❌ Error
// Range: 0 ≤ n ≤ 100 (in most JS engines)
// 🔥 Bonus: Type Conversion
// let result = Number(5.678.toFixed(2));
// console.log(result);      // 5.68 (Back to number)
// console.log(typeof result); // "number"

// *(iii) toPrecision() in JavaScript
// 📌 Definition:
// toPrecision(n) returns a string representing the number with exactly n significant digits
// ⚙️ Syntax:number.toPrecision(n);
// 	•	n = Total digits, not just after decimal.
// 	•	Returns: String
// ⚙️ Let’s take your example:let num = 123.456;
// Ye number:  123.456
//             ↑↑↑ ↑↑↑
//             123.456 → total 6 digits
//            → Significant digits = 1, 2, 3, 4, 5, 6

//            🧪 Case 1: console.log(num.toPrecision(2)); // "1.2e+2"
//            Breakdown:
// 	•	Tumne bola: “Mujhe 2 significant digits chahiye.”
// 	•	Original number: 123.456
// 	•	Pehle 2 digits: 1 and 2
// 	•	Baaki sab hata do. Ab ye 1.2 × 10² hota hai.
// 	•	Isliye answer = "1.2e+2"

// ➡️ Scientific notation tabhi aata hai jab JS ko lage number chhota/baḍa hai aur n digits me dikhana mushkil hai.
// 🧪 Case 2:console.log(num.toPrecision(4)); // "123.5"
// Breakdown:
// 	•	Tumne bola: “Mujhe 4 significant digits chahiye.”
// 	•	123.456 → pehle 4 digits: 1, 2, 3, 4
// 	•	Lekin next digit hai 5, toh rounding hoti hai
// 	•	So 123.4 → becomes → 123.5
// 	•	Output: "123.5" → normal string (not exponential)
// 🧪 Case 3:console.log(num.toPrecision(6)); // "123.456"
// Breakdown:
// 	•	Tumne bola: “Mujhe 6 significant digits chahiye.”
// 	•	123.456 already has 6 digits → 1, 2, 3, 4, 5, 6
// 	•	Isliye JS kuch change nahi karta
// 	•	Output: "123.456"
// 🧠 Tips:
// 	•	Significant digits = Total number of digits that matter
// 	•	toPrecision() = smart method → kabhi round karega, kabhi scientific notation dega
// 	•	Always returns string, never number

// 🔍 Let’s take a small number:let num = 0.00456789;
// ✅ Case 1:console.log(num.toPrecision(1)); // "0.005"
// 🧠 Samjhaav:
// 	•	Tumne bola: “Mujhe sirf 1 significant digit chahiye.”
// 	•	Number = 0.00456789
// 	•	Pehli significant digit: 4
// 	•	Agli digit: 5 → toh rounding hogi → 4 becomes 5
// 	•	Rounded value = 0.005
// 	•	✔️ Output: "0.005" (string)
// ✅ Case 2:console.log(num.toPrecision(2)); // "0.0046"
// 🧠 Samjhaav:
// 	•	Tumne 2 significant digits maange
// 	•	0.00456789 → pehle 2 significant digits = 4 and 5
// 	•	Agli digit 6 → toh 45 becomes 46
// 	•	Output: "0.0046"
// ✅ Case 3:console.log(num.toPrecision(4)); // "0.004568"
// 	•	4 digits chahiye → 0.00456789 mein pehle 4 important digits → 4, 5, 6, 7
// 	•	Next digit = 8 → toh 4567 becomes 4568
// 	•	✔️ Output: "0.004568"

//     ✅ Case 4: num.toPrecision(1) with very small number
//     let x = 0.00000012345;
// console.log(x.toPrecision(1)); // "1e-7"
// 	Number bohot chhota hai → scientific notation use karega
// 	•	1 digit chahiye → 1
// 	•	Remaining: e-7 = 10^-7
// 	•	Output: "1e-7"
// //SAMJHO
// Decimal ke baad 7 digits ke baad aaya 1, phir 2, 3, etc.
// 📌 What is toPrecision(1)?

// toPrecision(1) ka matlab:
// ➤ “Sirf 1 significant digit rakhna”
// ➤ Baaki sab hata do ya round karo
// ➤ Agar number bahut chhota ya bada ho → scientific notation use karo
// 🔬 Step-by-Step:
// 	•	Original number: 0.00000012345
// 	•	First significant digit: 1
// 	•	Next digit = 2 → par tu ne bola sirf ek digit chahiye → round nahi hoga kyunki 2 < 5
// 	•	Ab hum isse likhenge as:1 × 10^(-7)
//     	•	Matlab:1e-7

// *🧠 parseInt() vs parseFloat() – Kya hai?
// parseInt()
// Integer part extract karta hai (whole number)
// parseFloat()
// Floating-point (decimal) number return karta hai
// ✅ SYNTAX:parseInt(string, [radix]);     // Optional radix: base (like 10, 2, 16)
// parseFloat(string);
// 🔍 Example 1: Basic Use
// let str1 = "123.456";

// console.log(parseInt(str1));   // 123
// console.log(parseFloat(str1)); // 123.456
// 	•	parseInt() → Sirf 123 liya (decimal ke baad ignore)
// 	•	parseFloat() → Full number liya including decimal
//     	•	parseInt() → Sirf 123 liya (decimal ke baad ignore)
// 	•	parseFloat() → Full number liya including decimal
//     let str2 = "42px";
// let str3 = "99.99kg";

// console.log(parseInt(str2));     // 42
// console.log(parseFloat(str3));   // 99.99
// 	•	parseInt() aur parseFloat() string ke starting se number padte hain
// 	•	Jaise hi non-numeric character milta hai → wahin ruk jaate hain

//     🧨 Example 3: Invalid Start
//     console.log(parseInt("abc123"));    // NaN
// console.log(parseFloat("xyz12.34"));// NaN
// 	•	Agar string number se start hi nahi ho rahi → Output = NaN

//     ⚠️ Difference from Number()
//     ⚠️ POINT:

// ✅ parseInt() / parseFloat() = Flexible
// ❌ Number() = Strict
// 📌 1. Number() — Strict Behaviour
// console.log(Number("123"));        // ✅ 123
// console.log(Number("123.45"));     // ✅ 123.45
// console.log(Number("123abc"));     // ❌ NaN
// console.log(Number("abc123"));     // ❌ NaN
// Kya hua?
// 	•	Number() pura string check karta hai — agar kahi bhi invalid part mila (like abc) → fail ho jaata hai → result = NaN
// 🧠 Think like this:

// Number() bolta hai: “Main ya to pure string ko number banaunga, ya bilkul bhi nahi banaunga”

// 📌 2. parseInt() / parseFloat() — Flexible Behaviour
// console.log(parseInt("123abc"));     // ✅ 123
// console.log(parseFloat("99.99kg"));  // ✅ 99.99
// console.log(parseInt("abc123"));     // ❌ NaN
// Kya hua?
// 	•	Jab tak number milta raha → parseInt/parseFloat use karte gaye
// 	•	Jaise hi koi non-number mila (abc, kg) → wahan ruk gaye → but jo mil chuka tha wo return kar diya
//     🧠 Think like this:

// parseInt() / parseFloat() bolta hai:
// “Mujhe jo number mile, main utna le lunga, baaki ignore kar dunga.”

//* 🧠 isNaN() kya karta hai?

// 🔹 Check karta hai ki value “NaN” (Not a Number) hai ya nahi
// 🔹 JavaScript me kuch values number jaisi dikhte hain par actually number nahi hote → unke liye yeh method kaam aata hai.
// ✅ Syntax:isNaN(value)
// 	•	Returns: true → agar value NaN hai
// 	•	Returns: false → agar value number hai (ya number me convert ho sakti hai)
// 🧪 Examples
// console.log(isNaN(123));          // false ✅ → yeh number hai
// console.log(isNaN("123"));        // false ✅ → yeh number me convert ho sakta hai
// console.log(isNaN("abc"));        // true  ❌ → NaN ban jaata hai
// console.log(isNaN(NaN));          // true  ✅ → obvious
// console.log(isNaN(undefined));    // true ❌
// console.log(isNaN(true));         // false ✅ → 1 ban jaata hai
// 🧠 JavaScript isNaN() internally Number() se convert karta hai value ko, aur fir check karta hai ki NaN bana ya nahi.
// ⚠️ Problem with isNaN()--console.log(isNaN("hello"));     // true ❌ (Even though it's a string)
// “hello” ek string hai, to true kyu aaya?”
// Chal step-by-step samjhte hain is line ke peeche ka poora logic — hidden trap hai yahaan!
// 🧠 Reason: isNaN() internally value ko Number me convert karta hai
// isNaN("hello")
// Step 1: "hello" is not a number → JS tries to convert
// Number("hello") → NaN
// kyunki “hello” ek string hai jisko number me convert nahi kiya ja sakta
// ➡️ Number("hello") ban jaata hai NaN
// Step 2: isNaN(NaN) = true
// Toh final result ho gaya:isNaN("hello") → isNaN(NaN) → ✅ true
// 🔥 But confusion yahi se hoti hai!

// Tu sochta hai:

// "hello" string hai → NaN to nahi hai
// Par isNaN() string ko convert karta hai number me → aur fail hone par NaN milta hai

// 🧨 Isiliye misleading result aata hai!

// ✅ Better Solution: Use Number.isNaN()
// console.log(Number.isNaN("hello")); // ❌ false
// 	•	Yeh method check karta hai actual value NaN hai ya nahi
// 	•	Na string convert karta hai, na kuch — bilkul accurate

//  *   🔹 1. valueOf() in JavaScript

// 📌 Definition:

// valueOf() method ek object ka primitive value return karta hai.
// ⚙️ Use Case:
// 	•	Jab humne string ya number new keyword se banaya ho (object form), tab valueOf() se actual primitive value milta hai.
// 🧪 Example:
// let numObj = new Number(42);   // Number object
// console.log(numObj);           // [Number: 42]

// console.log(numObj.valueOf()); // 42 (Primitive number)
// Same for String:
// let strObj = new String("Aman");
// console.log(strObj);            // [String: 'Aman']
// console.log(strObj.valueOf());  // Aman

// *🔹 1. toExponential() — Kya hai?

// toExponential() ek JavaScript Number method hai
// Jo number ko scientific (exponential) notation me convert karta hai
// Output hamesha string me hota hai.
// 🔎 Examples:
// let num = 123456;

// console.log(num.toExponential());     // "1.23456e+5"
// console.log(num.toExponential(2));    // "1.23e+5"
// console.log(num.toExponential(4));    // "1.2346e+5"

// 🔹 Example with small numbers:
// let x = 0.000012345;

// console.log(x.toExponential());    // "1.2345e-5"
// console.log(x.toExponential(2));   // "1.23e-5"

// 🔍 e+6 vs e-5 — KYA FARK HAI?

// 🔷 e+6 → Big Number → Decimal ko LEFT le jaate hain

// 🔶 e-5 → Small Number → Decimal ko RIGHT le jaate hain
// 🧠 BASE RULE:a × 10^b → JS returns this as → "aeb"
// Case
// Example
// Form
// Explanation
// e+6
// 1000000
// 1e+6
// 1 × 10⁶ = 1000000
// e-5
// 0.00001234
// 1.234e-5
// 1.234 × 10⁻⁵ = 0.00001234

// // ✅ 7. Binary, Octal, and Hexadecimal in JavaScript

// // Binary → prefix: 0b
// let binaryNum = 0b1010;      // 10 in decimal
// console.log("Binary (0b1010):", binaryNum);

// // Octal → prefix: 0o
// let octalNum = 0o755;        // 493 in decimal
// console.log("Octal (0o755):", octalNum);

// // Hexadecimal → prefix: 0x
// let hexNum = 0x1A3F;         // 6719 in decimal
// console.log("Hexadecimal (0x1A3F):", hexNum);

// ✅ METHOD 2: Binary to Octal
// let binary = "101011";
// let decimal = parseInt(binary, 2);   // binary to decimal
// let octal = decimal.toString(8);     // decimal to octal

// console.log(octal); // 53
// 📘 Explanation:parseInt("101011", 2);   // Binary string → Decimal number = 43
// 43.toString(8);          // Decimal → Octal string = "53"

// ✅ Bonus: Octal to Binary (Reverse)
// let octal = "53";
// let decimal = parseInt(octal, 8);
// let binary = decimal.toString(2);
// console.log(binary); // "101011"
// 🎯 INTERVIEW Tip:

// 🔹 Always convert to decimal → then to any base (binary, octal, hex)
// 🔹 Use parseInt(num, fromBase) and num.toString(toBase)

//*✅ 1️⃣ parseInt() — String ➜ Number

// *✅ Converts a string (in a given base) → decimal number.


//* ✅ 2️⃣ toString() — Number ➜ String in another base

// *✅ Converts a decimal number → string in another base.

