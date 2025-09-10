
// ?✅ 1. Ways to Write a String in JavaScript
//* Three main ways to Write a String in Javascript
	//?(i).	Single Quotes
  let str1 = 'Single quotes';
  //?(ii).	Double Quotes
  let str2 = "Double quotes";
//?(iii)	Backticks (Template Literals) → Modern way
let str3 = `Backticks / Template literals`;
//*👉 All three are valid.

//*👉 But backticks (`) are more powerful → they allow multiline strings, variable embedding, and expressions.
//?✅ Advantages of Template Literals
	//*•	Cleaner syntax (no need for + concatenation).
	//*•	Supports multiline strings.
	//*•	Can embed variables, expressions, and even function calls.

//?Example-1 Multiline Strings with Backticks
let str4 = `This is line 1
This is line 2
This is line 3`;
console.log(str4);
//! Output:
// !This is line 1
// !This is line 2
//! This is line 3
//? Example-2 Example 1: Embedding Variables
let name = "Aman";
let course = "JavaScript";

let msg = `Hi ${name}, you are learning ${course}.`;
console.log(msg);
//! Output: "Hi Aman, you are learning JavaScript."
//? Example-3: Embedding Expressions
let a = 10, b = 5;

let result = `Sum is ${a + b}`;
console.log(result);
// !Output: "Sum is 15"

//*---------------------------------------------------------------------------------
//?✅ String Concatenation in JavaScript
//*👉 Meaning: Joining two or more strings into a single string.
//*🔸 JavaScript provides 2 main ways:
//!Method                     Description
//*+ operator                Traditional way to join strings
//*Template literals (`)     Modern & cleaner way (ES6+)
//?✅ 1. Using + Operator (Traditional Way)
let firstname="AMAN";
let lastname="Raj";
let fullname=firstname+" "+lastname;
console.log(fullname)//!AMAN Raj
//? ❗ Important Things about + Operator
console.log("1" + 2 + 3); // "123"
console.log(1 + 2 + "3"); // "33"
//*👉 Why this happens?
	//*•	JavaScript evaluates left to right.
	//*•	"1" + 2 → "12", then "12" + 3 → "123"
//* 	•	1 + 2 → 3, then 3 + "3" → "33"

//?✅ 2. Using Template Literals (Backticks) (Modern Way)
let address="Motihari"
let state="Bihar"
let intro=`i live in ${address} and state is ${state}` 
console.log(intro)//!i live in Motihari and state is Bihar
//*👉 Benefits of Template Literals:
	//*•	Cleaner syntax
	//*•	Variables and expressions directly inside string ${}
	//*•	Multiline strings support

  //?✅ Multiline Strings
//?🔹 Old Way (Using + and \n)
let mssg = "Hello Aman,\n" +
          "Welcome to JavaScript class.\n" +
          "You're doing great!";

console.log(mssg);
//!Output:
//!Hello Aman,
//!Welcome to JavaScript class.
//!You're doing great!

//?🔹 Modern Way (Using Backticks)
let msgg = `Hello Aman,
Welcome to JavaScript class.
You're doing great!`;

console.log(msgg);
//!Output:
//!Hello Aman,
//!Welcome to JavaScript class.
//!You're doing great!
//?✨ Summary
	//*•	Use + → Works but messy for multiline.
//*•	Use backticks (`) → Modern, clean, powerful (preferred in ES6+).                
//*---------------------------------------------------------------------------------------------
//?✅ What is an Escape Character in JavaScript?
//*👉 In JavaScript, an escape character is used when you need to include special characters inside a string that would otherwise cause errors or give the wrong output.
//*The escape character in JavaScript is the backslash (\).
//*It gives a special meaning to the character that comes after it.
//?✅ Common Escape Characters
//! Escape Code       Meaning          Example                 Output
//*     \'            Single quote       'I\'m Aman'         I'm Aman
//*     \\"           Double quote       "I am "\good\" "    I am "good"
//*     \\            Backslash          "C:\\Users\\Aman"  C:\Users\Aman
//*    \n             New Line           "Hello\nWorld"     Hello
//*                                                         World         

 //?✅ Examples
//*🔹 1. Single & Double Quotes 
let j= 'Hi i\'m Aman'; 
let k="I live in \"Motihari\"" ; 
console.log(j) //!Hi i'm Aman
console.log(k) //! I live in "Motihari"  

//*🔹 2. Backslash  
let path = "C:\\Users\\Aman\\Documents";
console.log(path);
//! Output: C:\Users\Aman\Documents   

//*🔹 3. New Line
let info="Name:\nAman"
console.log(info)
//!output:Name:
//!       Aman

//?🧠 Bonus Tip: Escape Characters in Template Literals
//?Yes ✅ — Escape characters like \n, \t, \', \", \\ also work inside backticks (`).
//?Example
let str=`He said\n I\'m not a "good"\\boy`;
console.log(str)
//!output" He said
//!       I'm not a "good"\boy
//*---------------------------------------------------------------------------------------------
//?✅ Changing Case in JavaScript Strings
//*Sometimes we need to convert text into uppercase or lowercase
//* — for example, while validating user input, making data uniform, or handling search filters.
//*  JavaScript provides two main methods:
//?🔹 1. toUpperCase() → Converts all letters to CAPITAL
let city="Motihari";
let upper=city.toUpperCase();
console.log(upper)//!MOTIHARI
//?🔹 2. toLowerCase() → Converts all letters to small
let lang = "JavaScript";
let lower = lang.toLowerCase();
console.log(lower);  
//! Output: "javascript"
//*🔑 Important Points
//*	•	Strings in JavaScript are immutable → methods like toUpperCase() and toLowerCase() do not change the original string.
//*	•	They always return a new string.
//?Example:
let citty = "Patna";

city.toUpperCase();     
console.log(citty);      
//! Output: "Patna" (still original)

city = citty.toUpperCase();  
console.log(city);          
//! Output: "PATNA" (updated after reassignment)

//*-------------------------------------------------------------------------------------------------------------------------------------
//?✅ Why Do We Search in Strings?
//*👉 Searching is useful when we need to check if a word/character exists inside a string or find its position (index).
//*  JavaScript gives us three main methods for searching:
//?🔹 1. includes() → Boolean Check
//*	•	Purpose: Quickly check if a substring exists inside a string.
//*	•	Return Value: true (if found), false (if not found).
//?Example:
let story="hi i am aman do u remember me"
console.log(story.includes("aman"))//!true
console.log(story.includes("python"))//!false

//?🔹 2. indexOf() → Finds the First Occurrence
//*•	Syntax:string.indexOf(searchValue, startIndex)
//*•	searchValue → substring to find
//*•	startIndex (optional) → where to start searching
//*•	Return Value:
//*	•	Position (index) of the first match
//*	•	-1 if not found
//?Example:
let fruit="Mango is not good Mango is a sweet fruit"
console.log(fruit.indexOf("Mango"))//!0 first match
console.log(fruit.indexOf("sweet"))//!29
console.log(fruit.indexOf("Mango",10))//!18
console.log(fruit.indexOf("xyz"))//!-1

//?🔹 3. lastIndexOf() → Finds the Last Occurrence
//*•	Syntax:string.lastIndexOf(searchValue, fromIndex)
	//*•	Return Value:
	//*•	Position (index) of the last match
	//*•	-1 if not found
  //?Example:
let str30 = "Aman is a hero coder and Aman is smart";

console.log(str30.lastIndexOf("Aman"));      //! 28 (last match)
console.log(str30.lastIndexOf("is"));        //! 33
console.log(str30.lastIndexOf("Aman", 20));  //! 0  (limit search till index 20)
//? Why-0  (limit search till index 20)
//*We have this string:
//*let str30 = "Aman is a hero coder and Aman is smart";
//*Length of string = 38 characters (indexes go 0 → 37).
//*Code-:console.log(str.lastIndexOf("Aman", 20));
//*•	"Aman" → substring we want to find.
//*	•	20 → the fromIndex → means:
//*  Start searching backwards from index 20 (character at index 20 = "c" from "coder").

//?🔹 How lastIndexOf works
//*1.	It searches backwards from the given index.
//*2.	It looks for the last occurrence that is at or before index 20.
//* 🔹 Occurrences of "Aman" in the string
//*•	First "Aman" → starts at index 0.
//*•	Second "Aman" → starts at index 28.

//*Now, because we set fromIndex = 20, the second "Aman" (at index 28) is ignored 
//* (since it comes after index 20).
//*So, lastIndexOf only considers "Aman" at index **0`.

//*--------------------------------------------------------------------------------------------------------------
//?✅ Extraction of Strings in JavaScript
//*JavaScript gives us multiple ways to extract parts of a string.
//*The two most common methods are:
//?🔹 1. slice(start, end)
//*  Syntax:string.slice(start, end)
//*👉 Preferred modern method (flexible & powerful).
//*	•	Extracts part of a string from start index up to (but not including) end index.
//*	•	If only one argument → extracts from start till the end.
//*	•	Supports negative indexes (counting from the end).
//? Examples:
let stra = "JavaScript";
console.log(stra.slice(0,5))//!Javas
console.log(stra.slice(-6));//!Script
console.log(stra.slice(4, 0));//! "" (empty string, since start > end not allowed)
console.log(stra.slice(4));//!Script

//?🔹 2. substring(start, end)
//*Syntax:string.substring(start, end)
//*👉 Similar to slice(), but with differences:
//*•	❌ Does not support negative values.
//*	•	✅ If start > end, it automatically swaps them.
//?Examples:
let strb = "JavaScript";
console.log(strb.substring(0, 4));   //! "Java"
console.log(strb.substring(4));      //! "Script"
console.log(strb.substring(4, 0));   //! "Java" (swapped → 0,4)
console.log(strb.substring(-3));     //! "JavaScript" (negative → treated as 0)

//?✨ Summary
//*	•	Use slice() in most cases (clean, supports negatives).
//*•	substring() is older, mainly useful when you want auto-swap behavior.

//*---------------------------------------------------------------------------------------------------------
//?📝 String Replacement in JavaScript
//*In JavaScript, we often need to replace part of a string with something else.
//*For this, we use replace() or replaceAll().
//?🔹 1. replace(searchValue, newValue)
//*	•	Replaces the first match of searchValue with newValue.
//*•	searchValue can be a string or a regular expression.
//*	•	Strings are immutable → the original string does not change, a new string is returned.

//?✅ Example 1: Replace First Match
let stre = "Hello Aman, Aman is learning JavaScript.";
let resulte = stre.replace("Aman", "Hero");
console.log(resulte);
//! "Hello Hero, Aman is learning JavaScript."
//* 👉 Only the first “Aman” was replaced.

//?🔹 2. replaceAll(searchValue, newValue) (ES2021+)
//*	•	Replaces all matches of searchValue.
//*	•	Easier to use than regex when you want every match.
//*	•	Supported in modern browsers and Node.js.

//!✅ Example 2: Replace All Matches
let stree = "Hello Aman, Aman is learning JavaScript.";
let resultee = str.replaceAll("Aman", "Hero");

console.log(resultee);
//! "Hello Hero, Hero is learning JavaScript."
//*👉 Every “Aman” was replaced.
//*---------------------------------------------------------------------------------------------------------------------------------
//?📘 split() Method in JavaScript
//*✅ Purpose:
//*The split() method breaks a string into an array of substrings, based on a specified separator.
//*Syntax:string.split(separator, limit)
	//*•	separator → The character, symbol, word, or regex where the split should happen.
	//*•	limit → (Optional) The maximum number of splits.
	//?🔹 Examples:
	//?1. Split by Space (" ")
	let strw="Aman is learning JavaScript";
	let word=strw.split(" ");
	console.log(word)//![ 'Aman', 'is', 'learning', 'JavaScript' ]

	//?2. Split by Comma (,)
		let strwe="Aman,Hero,Coder";
	    let worde=strwe.split(",");
		console.log(worde)//![ 'Aman', 'Hero', 'Coder' ]

	//?	3. Split by Empty String ("") → character by character
	let namee = "Aman";
    let chars = namee.split("");
    console.log(chars);  //![ 'A', 'm', 'a', 'n' ]

	//?4. With Limit
	let sti = "Learn Code Daily";
    let parts = sti.split(" ", 2);
    console.log(parts);  //! ["Learn", "Code"]

	//?🔹 Special Case: Separator Not Found
   //* If the separator is not present in the string, split() returns the entire string inside an array.
   let stii = "Aman";
   let resulit = stii.split(",");
   console.log(resulit);//! ["Aman"]  

//?🔹 Return Type:
//*	•	Always returns an array of strings.
//*•	Arrays in JavaScript are a type of object.
let striii = "Aman is learning";
let resulti = striii.split(" ");

console.log(resulti);         //! ["Aman", "is", "learning"]
console.log(typeof resulti);  //! "object" ✅
console.log(Array.isArray(resulti)); //! true ✅
//*------------------------------------------------------------------------------------------------------------------------------------------------------------
//?📘 Trimming in JavaScript
//? ✅ What is Trimming?
//*Trimming means removing extra spaces from the beginning and end of a string.
//*	•	It does not remove spaces in the middle
//?🔹 Method: trim()
//*Syntax:string.trim()
	//*Removes:
	//*•	Leading spaces (at the start)
	//*•	Trailing spaces (at the end)
	//*•	Returns a new string (does not modify the original).
	//?✅ Example 1: Basic Use
	let man=" human ";
	let trim=man.trim();
	console.log(trim);//!"human"
	console.log(man.length);//!7
	console.log(trim.length)//!5

	//?🔹 Variants
	//?•	trimStart() → Removes spaces only from the left side.
	let stw = "   Aman";
    console.log(stw.trimStart());  //! "Aman"
	//?•	trimEnd() → Removes spaces only from the right side.
	  let strk = "Aman   ";
       console.log(strk.trimEnd());    //! "Aman"

	   //? ❌ Important Note on Immutability
//*Strings in JavaScript are immutable → once created, they cannot be changed.
//*	•	trim() does not modify the original string.
//*	•	You need to reassign it if you want to update the value
let names = " Aman ";

names.trim();
console.log(names);   //! " Aman " ❌ (still same)

namess = names.trim();
console.log(namess);   //! "Aman" ✅
//*----------------------------------------------------------------------------------------------------------------------------------------------
//?📘 new String() in JavaScript – Explained Clearly
//?🔹 1. Two ways of creating strings
//*(i) Primitive string
let str8 = "Aman";  
console.log(typeof str8); //! "string"

//*(ii) String object
let str9 = new String("Aman"); 
console.log(typeof str9); //! "object"

//?🔹 2. Comparison Trap
let h = "Aman";           //! primitive
let i = new String("Aman"); //! object

console.log(h == i);   //! true  (value compared after type conversion)
console.log(h === i);  //! false (strict check → different types)

//?🔹 3. Magic of Auto-Boxing
//?👉 Question: How does a primitive string use methods like .length or .toUpperCase() when they belong to objects?
//*💡 Answer: JavaScript auto-converts primitives into temporary objects.
//?Example:
let stark = "Aman";
console.log(stark.toUpperCase()); //! "AMAN"
//*Behind the scenes
let temp = new String("Aman");   //! Step 1: create temporary object
let resulto = temp.toUpperCase(); //! Step 2: call method
temp = null;                     //! Step 3: object destroyed (GC)


//?🔹 4. Garbage Collection (GC)
//*	•	The temporary String object created in the background is automatically destroyed after use.
//*	•	JavaScript engines (like V8 in Chrome) detect unused objects and free memory.
//*	•	This is why you don’t need to worry about memory management for such temporary conversions.

//?🔹 5. When to use new String()?
//*	•	Almost never.
//*	•	It only creates confusion because it makes a string behave like an object.
//*	•	Best practice → always stick with string literals ("Aman", 'Hello', `Hi`).

//?✅ Final takeaway:
//*	•	Use "text" for strings (primitive).
//*	•	Don’t use new String().
//*•	JavaScript already handles temporary conversion and memory cleanup automatically.

//*-------------------------------------------------------------------------------------------------------------------------------------
//?🚀 10 JavaScript String Interview Questions (Practice Set)

//?	Q1-What is the difference between == and === when comparing strings in JavaScript?
//*Answer:==(Equality Operator) checks only the value and performs type coercion if the types are different,
//* while(Strict Equality operator ) === checks both the value and the data type without coercion. For example, "123" == 123 is true, but "123" === 123 is false. In practice, === is preferred for reliable and predictable comparisons.
	
//?Q2-How would you reverse the string "hello" in JavaScript?
//*“JavaScript doesn’t have a built-in reverse() for strings, 
//*but we can reverse by converting the string into an array, applying reverse(),
//* and then joining it back into a string.”
function reverse(str){
	return str.split(" ").reverse().join(" ")
}
console.log(reverse("hello")); //! "olleh"

//?Q3-How can you check if "JavaScript is fun" contains the word "fun"? Mention 2 ways.
//*1️⃣ includes() (Easiest & Modern)
let stroo = "JavaScript is fun";
console.log(stroo.includes("fun")); 
//! true
//!👉 Directly returns true/false.
//*2️⃣ indexOf() (Old but Common in Interviews)
let stri = "JavaScript is fun";
console.log(stri.indexOf("fun")); 
//! 13 → word starts at index 13
console.log(str.indexOf("fun") !== -1); 
//! true
//!👉 Returns index if found, -1 if not.
//!👉 For checking existence → !== -1.

//?Q4-Explain the difference between slice(), substring(), and substr() with examples.
//*1️⃣ slice(start, end)
//*	•	Extracts part of a string from start to end (end not included).
//*	•	✅ Supports negative indexes (counts from the end).
//*	•	Returns a new string (original remains unchanged).
	let strv = "JavaScript";
//* Positive index
console.log(strv.slice(0, 4));   //! "Java"
//* Negative index
console.log(strv.slice(-6, -3)); //! "Scr"

//*2️⃣ substring(start, end)
//*•	Similar to slice(), extracts from start to end (end not included).
//*•	🚫 Does NOT support negative indexes.
//*	•	If start > end, it automatically swaps them.
	let strx = "JavaScript";
//* Normal
console.log(strk.substring(0, 4)); //! "Java"
//* start > end → auto swap
console.log(strk.substring(4, 0)); //! "Java"

//?Q5-Are strings mutable in JavaScript? Show with an example.
//*Answer:
//*No, strings in JavaScript are immutable.
//*This means once a string is created, you cannot change its characters directly.
//*  Any operation that looks like “changing” a string actually creates a new string.
//?🔹 Example: – Updating a Username in a Message
let message = "Hello Aman! Welcome back.";
//* Try to change directly (❌ Not possible)
message[6] = "R";
console.log(message);  
//! Output: "Hello Aman! Welcome back." (No change)
//* ✅ Correct way – create a NEW string
let updatedMessage = message.replace("Aman", "Raj");
console.log(updatedMessage);  
//! Output: "Hello Raj! Welcome back."
//*🔹 Another Example – Capitalizing a Word
let words = "hello";
//* ❌ Direct change not allowed
words[0] = "H"; 
console.log(words); //! "hello"
//* ✅ Create new string
let capitalized = word[0].toUpperCase() + word.slice(1);
console.log(capitalized); //! "Hello"

//?Q-6How can you count how many times the letter "a" appears in "banana"?
//*✅ 1. Using a Loop (Beginner-friendly)
let fruits="banana";
let count=0;
for(let i=0;i<fruits.length;i++){
	if(fruits[i]==="a"){
		count++
	}
	console.log(count)
}
//*✅ 2. Using split() (Smart Trick)
let strf = "banana";
let counts = strf.split("a").length - 1;
console.log(count); //! 3
//?Explaination

//*Case: "banana".split("a")
//*When you use .split("a"), JavaScript breaks the string at every "a" and returns an array of the pieces between them.
//*Step 1: Split at the first “a”
//*	•	Before "a" → "b"
//*•	After "a" → "nana"
//*So far → ["b", "nana"]

//*Step 2: Split "nana" at the next “a”
//*Before "a" → "n"
//*	•	After "a" → "na"
//*So now → ["b", "n", "na"]

//*Step 3: Split "na" at the last “a”
//*	•	Before "a" → "n"
//*	•	After "a" → "" (nothing left!)
//*So final result →["b", "n", "n", ""]
//*✅ The empty string "" happens because the string ended with “a”, and after the last "a" there’s nothing left to put in the array.
//*•	Why -1? Because the number of splits is always 1 more than the number of times the separator appears.
//*	•	So:4 - 1 = 3

//?Q7-How can u change "Aman Raj" into lower and uppercase
let nameee = "Aman Raj";
console.log(nameee.toUpperCase()); //! "AMAN RAJ"
console.log(nameee.toLowerCase()); //! "aman raj"

//?Q8-How can you remove leading and trailing spaces from "   Hello World   "?
let program = "   Hello World   ";
console.log(program.trimStart()); //! "Hello World   " removes only the leading (left) 
console.log(program.trimEnd());   //! "   Hello World" removes only the trailing (right) 
console.log(program.trim());      //! "Hello World"  removes both leading and trailing spaces.
	//*•	All three return a new string (original string stays unchanged).

//?Q9-How can you replace all occurrences of "Aman" with "Hero" in the string "Aman is Aman"?
let orig = "Aman is Aman";
let repl = orig.replaceAll("Aman", "Hero");
console.log(repl);  //! "Hero is Hero"

//?Write a function to check if a string is a palindrome (e.g., "madam", "racecar").
function isPalindrome(str){
	  //* Normalize the string (remove spaces & lowercase it if needed)
  str = str.toLowerCase();
    //* Reverse the string
	let reversed=str.split("").reverse().join("");
	  //* Compare original with reversed
	  return str ===reversed;
}
//* Test
console.log(isPalindrome("madam"));     //! true
console.log(isPalindrome("racecar"));   //! true
console.log(isPalindrome("hello"));     //! false

//*--------------------------------------------------------------


