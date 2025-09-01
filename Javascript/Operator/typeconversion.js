//?Type Conversion in JavaScript
//*JavaScript has two types of conversions:
	//*1.	Type Conversion (Explicit / Type Casting) → You do it manually.
	//*2.	Type Coercion (Implicit) → JS does it automatically behind the scenes.

//? 1. Explicit Conversion

//*You intentionally convert a value to another type using functions or operators.
	//*•(a)	To String
       String(123);   //! "123"
       (123).toString(); //! "123"

	  //*•(b)	To Number
       Number("123"); //! 123
      Number("abc"); //! NaN
     parseInt("12px"); //! 12
     parseFloat("12.34"); //! 12.34

	//*•(c)	To Boolean
      Boolean(1);   //! true
      Boolean(0);   //! false
      Boolean("");  //! false
      Boolean("hi"); //! true

    //*-------------------------------------------------------------------------------------------  
    //? 2. Implicit Conversion (Coercion)

	//*(i)•	String Coercion (when + with a string is used):
       "5" + 2;  //! "52"  (number → string)

    //*(ii)	•	Number Coercion (when -, *, / are used):
        "5" - 2;  //! 3  (string → number)
       "5" * "2"; // !10

     //*  (iii)	•	Boolean Coercion (in conditions, !, ||, &&):
     //?Example:
     console.log(!"hello"); // !false
     console.log(!0);       //! true
     //* Explaination
	//!•	"hello" truthy hai → true → !true = false
	//!	0 falsy hai → false → !false = true

   console.log("" || "Hi");  // !"Hi"  (kyunki "" falsy hai)
  console.log("Hello" || "Hi"); //! "Hello" (pehla truthy mil gaya)

  //*----------------------------------------------------------------------------------------
  //?⚡ Important Notes:
//*✅ Falsy values: 0, "", null, undefined, NaN, false
//*✅ Everything else is truthy.
//*✅ == allows coercion, === does not.

//?Example:
0 == false;   //! true (coercion)
0 === false;  //! false (strict check)
//*---------------------------------------------------------------------------------------
//?🔥 10 Important Practice Questions (Type Conversion)
	//*1.	What will be the output?
      console.log("5" + 1);//!"51"
      console.log("5" - 1);//!4
      console.log("5" * "2");//!10
      console.log("5" / "two");//!	•	"5" → 5 (number)
	//!•	"two" ko number banane ki koshish karega → NaN (Not a Number)
    	//!•	5 / NaN → NaN
      //!✅ Output: NaN

    //*	2.	Convert the following explicitly:
	//*•	"123" → Number
    console.log(Number("123"))
	//*•	false → String
    console.log(String(false))
	//*•	"0" → Boolean
    console.log(Boolean("0"))

//* 3.	What is the output?
 console.log(Boolean("false"));//!true
 console.log(Boolean(false));//! false

//* 4.	Explain why:
[] == false;   // ! true ->	•	== loose equality hai → type conversion (coercion) karta hai.
	//!1.	false ko number me convert karega → 0
	//!2.	[] (empty array) jab number me convert hota hai:
	//!•	[].toString() → ""
	//!•	Number("") → 0
   [] === false;  //!false->	=== strict equality hai → type conversion nahi hota.
	//!•	Yahaan:
	//!•	[] ek object hai (array is an object in JS)
	//!•	false ek boolean hai
	//!•	Types alag → ❌ false

    	//*5.	Predict the result:
        console.log(1 + true);//!2
        console.log(1 + false);//!1
        console.log(true + true);//!2

    //*	6.	How does JS convert these?
    console.log("10" - "4" - "3" + 2);//!5

    //? Imp concept for question no 7
   //* 🔹 !! (Double NOT) kya karta hai?
	//*•	Pehla ! → value ko boolean me convert karke ulta kar deta hai.
	//*•	Dusra ! → us ulte ko phir se ulta kar deta hai.
     //!* Matlab kisi bhi value ka exact boolean equivalent milta hai.

    //*	7.	Use !! to find the boolean equivalent of:

		"" //!falsy !!""->false
		" "//!		•	!!" " → true ✅
		0 //! !!0 → false ✅
	   "0" //! 	•	!!"0" → true ✅

       //?	8.	Why does this happen?
       console.log(null + 1);//! null->0+1=1
      console.log(undefined + 1);//!undefined->NaN+1=NaN

	  //?9.	Check the difference:
      console.log("10" == 10);//! true
      console.log("10" === 10);//! false datatype are diff

    //?10.	Write a function toBoolean(value) that converts any value into
    // ?    its boolean equivalent using type conversion.
      let toBoolean = (value) => {
       return Boolean(value)
      }
      console.log(toBoolean("hello"))//! true

//*----------------------THE END--------------------------------------------------------
      //*CONSISTENCY & DISCIPLINE ARE THE TWO MANI PILLAR OF SUCCESS