//*Declare the variable
let num=10;
console.log(num)
//?PRIMITIVE DATA TYPES

//*1- NUMBER

let account_balance=30;
console.log(account_balance)
console.log(typeof account_balance) //!Number
//*---------------------------------------------*
//*2 string

let str="aman";
console.log(str);
console.log(typeof str) //!String
//*------------------------------------------------*
//*3 Boolean

let statement=true;
console.log(statement) //!true //It gives result in  only True or False Format
console.log(typeof statement) //!boolean
//*---------------------------------------------------------------------------------------------------------*

//*undefined

let account;
console.log(account) //!undefined
console.log(typeof account) //!undefined

//? Doubt(a)-What does undefined do?
// *👉 undefined in JavaScript is a primitive data type.
//* 👉 It represents the absence of a value by default (when nothing is assigned).
// *👉 If a variable is declared but not initialized, its value is undefined.
// *👉 You can later update/fill the variable with some actual value.

//?Examples:
let data;
console.log(data); // !undefined  (no value assigned yet)

let user = undefined;  
console.log(user); //! undefined (explicitly assigned)
//*---------------------------------------------------------------------------------------------------------------*

//*null
let bal=null;
console.log(bal) //*null
console.log(typeof null) //*object. (bug)

//?Doubt(a)-What is null
//* -->null in JavaScript is a primitive data type that represents the intentional absence of any object value.
//* Doubt (b)-Why typeof null is object?
//* -->So this a Historical bug in js so null is primitive but due to this bug there type shows object
//* 👉 Even though this is a well-known bug, it cannot be fixed because too much existing code depends on it.

//*---------------------------------------------------------------------------------------------------------------*
//*bigint
//? What is  BigInt in JavaScript
///*		BigInt is a primitive data type introduced in ES2020.
    //* 	It allows you to work with very large integers beyond the safe integer range of Number.
//?Example:
let a=219042140184901814840n
console.log(a)//!219042140184901814840n
console.log(typeof a)//!bigint

//?🔹 Why BigInt is needed?
//*Normal numbers in JavaScript are represented as 64-bit floating-point.
//*The safe integer range is:
//*LARGEST NO
console.log(Number.MAX_SAFE_INTEGER)//!9007199254740991
//*Smallest no
console.log(Number.MIN_SAFE_INTEGER)//!-9007199254740991
//*If we go beyond this range js numbers start losing precision
//?Example:
let sum=9007199254740991
console.log(sum+1)//!9007199254740992 ✅
console.log(sum+2)//! 9007199254740992 ❌ (Precision lost!)

//*But with BigInt:
let big=9007199254740991n
console.log(big+2n)//!9007199254740993n ✅ (No precision loss)
//? Why 2n instead of 2?
//* JavaScript does not allow mixing number and bigint in arithmetic operations.
//*If you write:console.log(big + 2); //TypeError: Cannot mix BigInt and other types

//*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//? Non-Primitive Data Types in JavaScript

//*All non-primitive data types in JS are objects. Even functions and arrays are treated as objects under the hood.
//*The main ones are:
	//* 1.	Array
	//* 2.	Object
	//* 3.	Function
	
    // ?1️⃣ Array
	//* •	Ordered collection of elements (can store numbers, strings, objects, functions, etc.).
	//* •	Special kind of object (that’s why typeof arr → "object").
	//* •	Zero-based index (first element at index 0).
	//* •	Mutable (can be changed after creation).

    //?Example
    let arr=["apple",10,true,20]
    console.log(arr[2])//!true
    arr.push(99);//!add element
    console.log(arr)//![ 'apple', 10, true, 20, 99 ]
    console.log(typeof arr)//!object
    //* Internally, Array is just an object with numeric keys.
    //*Values inside the array can be a mix of Primitive ot Non-primitive

    let arr1=[10,//!Primitive
        [1,2,3],//!array
        {game:"cricket"},//!object
       //! const greet=()=>Hello//*error we cannot declare a varialbe inside a array
       function greet(){console.log("Hello")}//!function
    ]
    console.log(arr1);//![ 10, [ 1, 2, 3 ], { game: 'cricket' }, [Function: greet] ]

    //*------------------------------------------------------------------------------------------------------------

    //?2️⃣ Object
	//*•	Collection of key–value pairs.
	//*•	Keys are strings (or symbols), values can be anything (primitive or non-primitive).
    //?Example:
    let obj={
        name:"Aman-Raj",//!String(Primitive)
        age:33,//!number(Primitive)
        isage:true,//!boolean (Primitive)
        obj1:{ //!Nested-object(Non-Primitive)
            play:"ludo",
            eat:"daily"
        }
    }
    console.log(obj.name);//!Aman-Raj
    console.log(typeof obj)//!object
    obj.age=26;
    console.log(obj["age"])//!26
    //!we can use console.log(0bj.age but[]use of bracket notation is more powerful)

    //*---------------------------------------------------------------------------------------------------------------------------------------------

    //? 3️⃣ Function
	//*•	In JS, functions are objects (callable objects).
	//*•	You can store them in variables, pass them as arguments, or return them from other functions → this makes JS a first-class function language.

    //?Example:
    //*Normal function
    function greet(){console.log(`hello aman raj`)}
    greet();//!hello aman raj
    //*Function assigned to a variable
    const meet=function(){
        console.log(1+2)
    }
    meet();//!3

    //*Arrow function
    const bird=()=>console.log(`sparrow`)
    bird(); //!sparrow

    //? Why is typeof function "function" instead of "object"?

	//*•	In JavaScript, functions are actually objects (callable objects).
	//*•	However, the typeof operator was intentionally designed to return "function"
    //* for functions (instead of "object") to make it easier to distinguish them from
    // * normal objects.
    	//*•	This is a special case in the language specification for developer convenience in (ECMAScript)


  //*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  
//?🔥 10 Most Important JavaScript Data Type Questions

//?1. Type Checking Basics
//*👉 Predict output:
console.log(typeof null);//!object
console.log(typeof NaN);//!number
console.log(typeof []);//!object
console.log(typeof {});//!object
console.log(typeof function(){});//!function

//? 2. Implicit Type Conversion (Type Coercion)
//*👉 Predict output:
console.log("5" - 2);//!3
console.log("5" + 2);//!"52"
console.log(true + true);//!2
console.log(false + 10);//!10
console.log("10" * "2");//!20

//?3. NaN Tricky Cases
//*👉 Predict output:
console.log(NaN === NaN);///!false
console.log(Number.isNaN("NaN"));//!false
console.log(isNaN("NaN"));//!true
console.log(0 / 0);//!NaN

//?4. null vs undefined
//*👉 Predict output:
let a;
let b = null;
console.log(typeof a);//!undefined
console.log(typeof b);//!object
console.log(a == b);//!true
console.log(a === b);//!false

//?5. Object vs Array vs Function
//*👉 Predict output:
console.log(Array.isArray([]));//!true
console.log([] instanceof Object);//!true
console.log({} instanceof Object);//!true
console.log(function(){} instanceof Object);//!true

//? 6. String Conversion
//!👉 Predict output:
console.log(100 + "200");//!"100200"
console.log("Hello" + true);//!"Hellotrue"
console.log("5" + 5 + 5);//!"555"
console.log(5 + 5 + "5");//!"105"

//?7. Boolean Conversion (Truthy & Falsy)
//*👉 Predict output:
console.log(Boolean(""));//!false
console.log(Boolean(" "));//!true
console.log(Boolean(0));//!false
console.log(Boolean("0"));//!true
console.log(Boolean([]));//!true
console.log(Boolean({}));//!true

//?8. BigInt
//*👉 Predict output:
let big = 1234567890123456789012345678901234567890n;
console.log(typeof big); //!bigint


//?9. Equality Puzzles (== vs ===)
//*👉 Predict output:
console.log(0 == false);//!true
console.log(0 === false);//!false
console.log("0" == false);//!true
console.log("0" === false);//!false

//?10. typeof Special Cases
//*👉 Predict output:
console.log(typeof undefined);//!undefined
console.log(typeof null);//!object
console.log(typeof NaN);//!Number
console.log(typeof Infinity);//!number
console.log(typeof new Date());//!Object
//*----------------The end-------------------------------------------------------------------------------------------
//*--“Consistency beats talent.
//*Har din chhoti progress karo, chahe 1% hi sahi.
//*Ek din woh 1% milke aapko 100% banayega.”
