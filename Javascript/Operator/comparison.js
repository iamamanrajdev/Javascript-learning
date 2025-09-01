//* 4 Comparison operator
//* • ==  → loose equality (performs type coercion, e.g. 1 == "1" → true)
//* • !=  → loose inequality (e.g. 2 != "2" → false)
//* • === → strict equality (checks value + type, e.g. 1 === "1" → false)
//* • !== → strict inequality (e.g. 2 !== "2" → true)
//* • <, >, <=, >= → standard numerical comparisons


//* Number to Number Examples
let a1=1;
let a2=2;
console.log(a1 == a2);  //! false → 1 is not equal to 2
console.log(a1 != a2);  //! true  → 1 is not equal to 2
console.log(a1 > a2);   //! false → 1 is not greater than 2
console.log(a1 < a2);   //! true  → 1 is less than 2
console.log(a1 <= a2);  //! true  → 1 is less than or equal to 2
//*-----------------------------------------------------------------------------------------------------------------------------------------------------
//* Toughest Comparison Examples

// ?Comparing two arrays
console.log([] == []);   
//* false → Arrays are reference types. Even if both are empty, 
// *they are stored at different memory locations, so they are NOT equal.

//? Comparing two objects
console.log({} == {});   
//* false → Same reason as arrays. Objects are compared by reference, 
// *not by value. Two different objects will never be equal.

//? Loose equality between number and string
let num = 10;
let str = "10";
console.log(num == str);  
//* true → "10" (string) is type coerced to 10 (number), then compared. 
//* Result → true because values match after conversion.

//? Another string vs string comparison
let str1 = "30";
console.log(str1 == str);  
// *false → "30" is not equal to "10". No coercion needed here since both are strings.
//*REASON-Since both are the same type (string), the == operator does NOT perform type coercion here.
///*Instead, it compares the strings character by character.
	//*	"30" → first char "3"
	//*	"10" → first char "1"
	//*	"3" is not equal to "1", so immediately returns false.
	//*	Therefore, "30" == "10" → false.

//? Strict equality (===)
console.log(num === str);  
//* false → Strict equality checks both value and type. 
// *num is number (10), str is string ("10"). Different types → false.

console.log(str1 === str);  
// *false → Both are strings, but values "30" and "10" don’t match.

//*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//?general rules
//*null can only be equal to undefined
//*null==undefined  //!true
//*null===undefined//false both are diff type
console.log(null==0)//!false
console.log(null>0)//!false
console.log(null<=0)//!true
console.log(null>=0)//!true 

//*null <= 0: The null value is converted to the number 0. The comparison then becomes 0 <= 0, which is true.
//*null >= 0: The null value is also converted to the number 0. The comparison becomes 0 >= 0, which is also true.
//?Why Is null == 0 False?
//*The == operator has a different set of rules. The equality operator (==) performs a type-coercion,
// *but null and undefined are special cases. 
//*The official specification states that null only loosely equals undefined,
// * and nothing
// * else. Therefore, null == 0 is false because null is not a number and it's not undefined. This is a crucial distinction that makes null behave differently with loose equality compared to other comparisons.
//*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//?undefined comparison
console.log(undefined==0)//!false
console.log(undefined>0)//!false NaN>0
console.log(undefined<=0)//!falseNaN<0
console.log(undefined>=0)//!false

//?How It Works
//*When you use loose comparison operators (==, >, <=, >=) with undefined,
//*  JavaScript tries to convert it into a number.
 //*The special rule for undefined is that when it's converted to a number, 
 //* it becomes NaN (Not a Number).

//?undefined > 0
//*This comparison becomes NaN > 0. Because NaN is not a number,
// * it can't be greater than, less than, or equal 
//*to any other number. All comparisons involving NaN will always evaluate to false. 
//*This is a core part of NaN's behavior.

//?undefined <= 0
//*Similarly, this comparison becomes NaN <= 0. As explained above,
//*  NaN can't be less than or equal to any number, so this also evaluates to false.

//?undefined >= 0
//*This comparison becomes NaN >= 0, which also evaluates to false for the same reason.

//?What About undefined == 0?
//*The == operator has a specific rule for undefined.
// * The only value that undefined is loosely equal to is null. 
// *It is not loosely equal to any other value, including numbers like 0. 
// *Therefore, undefined == 0 is false.

//*Key Takeaway
//*The key difference between null and undefined in these comparisons is how they're converted to numbers:
//*null is converted to 0.

//*undefined is converted to NaN.
//*This is why null <= 0 and null >= 0 are true, while undefined <= 0 and undefined >= 0 are false. 
//*It's a great example of JavaScript's tricky type coercion rules.
 //*To avoid such confusion, always prefer using the strict equality operator (===) and
 //* strict inequality operator (!==), as they don't perform type coercion.
//*-----------------------------------------------------------------------------------------------------------------------------------------------------
//?NaN
console.log(NaN==NaN)//!false
//?Example
let str3="aman"
let str4="richa"
console.log(Number(str3)==Number(str4)) //*false
//*Number(str3) == Number(str4)
//*The expression Number(str3) == Number(str4) evaluates to false because 
// *both str3 ("aman") and str4 ("richa") 
//* are strings that cannot be converted into valid numbers.
//*Number("aman") evaluates to NaN.
//*Number("richa") evaluates to NaN.
//*The expression then becomes NaN == NaN, which, as explained above, is false.
// * This again highlights the unique nature of NaN and the importance of 
// *using a different method to check for it.
//?Example
let abc1=123;
let abc2="123";
let abc3=123;
console.log(abc1==abc2==abc3)//!false

//*Step-by-Step Breakdown
//*abc1 == abc2
//*This is the first comparison.
//*abc1 is the number 123.
//*abc2 is the string "123".
//*The == operator performs type coercion. It converts the string "123" to the number 123.
//*The comparison becomes 123 == 123, which is true.
//*true == abc3
//*The result of the first comparison (true) is then compared to abc3.
//*abc3 is the number 123.
//*Again, the == operator performs type coercion. It tries to convert true to a number.
//*In JavaScript, true coerces to the number 1.
//*The comparison becomes 1 == 123, which is false.
//*console.log(undefined!=null)//false

//*--------------------------------------------------------------------------------------------------------------------------------------------------------------------
//* 5 logical operator
	//?	&& (AND)
	//?	|| (OR)
	//?	! (NOT)

let page=18;
let money=420;
console.log(page>18&&money>200) //!false  The && (AND) operator only returns true if both conditions are true. If even one condition is false, the entire expression is false.
console.log(page>18||money>200) //!true The || (OR) operator returns true if at least one of the conditions is true. It only returns false if both conditions are false.
console .log(!(page<18)) //!true The ! (NOT) operator simply reverses the boolean value of an expression.
//*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* 6 Conditional (Ternary) Operator

//*in JavaScript is a concise way to write an if-else statement
//*Syntax:variablename = (condition) ? value1:value2 
//*example with if-else and ternary
let israin=true;
let activity;
if(israin==true){
     activity = "Read a book"; 
}
else{
    activity = "Go for a walk";
}
console.log(activity); //* "Read a book"

//?Lets Simplify this with Conditional ternary operator

let ispain=true;
let play=ispain?"on your leg" : "on your feet";
console.log(play); //! "on your leg"
//*The conditional (ternary) operator in JavaScript is a concise way to write an if-else statement.
//*It's the only operator that takes three operands and is often used for simple conditional assignments.
//?Another Example
let agee = 20;
let canvote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // !"Yes, you can vote."

//?Nesting Ternary Operators like if elseif else
    let ageee=18;
let eligiblee;
if(ageee>18){
    eligiblee="you can vote";
}
else if(ageee===18){
eligiblee="you can also vote";
}
else
{
    eligiblee="you are not allowed to vote"
}
console.log(eligiblee); //!Output: "You can also vote"

//?with ternary
    let ageeee=18;
let eligibleee=ageeee>18?"you can vote":(age===18?"you can also vote":"you are not allowed to vote")
console.log(eligibleee); // !Output: "You can also vote"
//*------------------------------------------------------------------------------------------------------------------------------------------------------
//?How String Comparison Works

//*When you compare two strings using <, >, <=, or >=, JavaScript performs a lexicographical (dictionary-like) comparison. It doesn't convert the strings to numbers. Instead, it compares the characters of the strings one by one, from left to right, based on their Unicode values.
//*"2" < "12": false
//*JavaScript compares the first character of "2" ("2") to the first character of "12" ("1").
//*The character "1" has a smaller Unicode value than the character "2".
//*because "1" comes before "2" alphabetically, "12" is considered "less than" "2".
//*Therefore, "2" < "12" evaluates to false.
//*"2" > "12": true
//*For the same reason as above, "2" is considered "greater than" "12".
//*The first character comparison ("2" vs "1") determines the outcome immediately.
//*Therefore, "2" > "12" evaluates to true.
//*2" == "12": false

//*The == operator checks if the strings are equal in value.
//*Since the characters in "2" and "12" are not the same, the strings are not equal.
//*Therefore, "2" == "12" evaluates to false.
//*---------------------------------------------------------------------------------------------------------------

//*7 Bitwise operator

//? (i) &(AND): Sets a bit to 1 only if both corresponding bits are 1.
let c = 5;  //*!Binary: 00000101
let d = 3;  //!Binary: 00000011
let total = c & d; //! Binary: 00000001
console.log(total); //! 1

//? (ii) Bitwise(OR): Sets a bit to 1 if at least one of the corresponding bits is 1.
let e = 5;  //! Binary: 00000101
let f = 3;  //!Binary: 00000011
let totall = e | f; //! Binary: 00000111
console.log(totall); //! 7

//? (iii) Bitwise XOR (^)^ (XOR): Sets a bit to 1 if the corresponding bits are different.
let g = 5;  //! Binary: 00000101
let h = 3;  //! Binary: 00000011
let totalll = g ^ h; //! Binary: 00000110
console.log(result); //! 6

//? (iv)Left Shift (<<)<< (Zero fill left shift): Shifts bits to the left,
//?  and fills the empty spots on the right with zeros.

// *This is equivalent to multiplying by powers of 2.
//*It’s like multiplying by 2^n.
let i = 5;         //! Binary: 00000000 00000000 00000000 00000101
let resultt = i << 1;  //! Shift left by 1 bit
console.log(resultt);  //! Output: 10

//?Another example
let j = 5; // ! Binary: 00000101
let resulttt = j << 2; //! Shifts left by 2. Binary: 00010100
console.log(resulttt); //! 20 (5 * 2^2)

//?. (v)Right Shift (>>)>> (Signed right shift): Shifts bits to the right.
// ? It preserves the sign of the number by pushing copies of the leftmost bit into the empty spots on the left.

//*rule It’s like dividing by 2^n and keeping the sign.
let a11 = 10;        //! Binary: 00000000 00000000 00000000 00001010
let resultttt = a11 >> 1;
console.log(reseltttt);  //! Output: 5

//?Explaination
//*Start with the number 10:
//*In 32-bit signed binary, 10 is 0000 0000 0000 0000 0000 0000 0000 1010. The leading 0 indicates that it's a positive number.
//*Shift the bits to the right by 1 position:
//*The >> 1 operation tells the computer to move every bit one place to the right. The rightmost bit falls off and is discarded.
//*Original: 0000 0000 0000 0000 0000 0000 0000 1010
//*Shifted: 0000 0000 0000 0000 0000 0000 0000 0101
//*Fill the empty leftmost spot:
//*The operator "pushes" a copy of the leftmost bit into the now empty spot on the far left. Since the original number was positive (with a 0 sign bit), a 0 is added to the beginning.
//*The result is 0000 0000 0000 0000 0000 0000 0000 0101.
//*Convert the binary back to decimal:
//*0000 0101 in binary is equal to (0 * 8) + (1 * 4) + (0 * 2) + (1 * 1), which is 4 + 1 = 5.
//*The "Divide by 2^n" Rule
//*Your rule is a useful mental shortcut. A right shift of n positions is equivalent to integer division by 2^n.
//*In your example, 10 >> 1 is like 10 / 2^1 or 10 / 2, which equals 5.
//*If you had 10 >> 2, it would be 10 / 2^2 or 10 / 4, which equals 2 (since this is integer division, the remainder is dropped).


//? (vi)Bitwise NOT (~)~ (NOT): Inverts all the bits of a number. This can produce surprising results with negative numbers due to a concept called two's complement.
//*  A handy rule of thumb for ~x is that it's equal to -(x + 1).
// *The ~ operator flips every bit:
//* 0 → 1 and 1 → 0
//* It works on 32-bit signed integers in JavaScript.
//*Shortcut Formula:~x = - (x + 1)
let k = 5;  // !Binary: 00000000...00000101
let resulttttt = ~x;  //! Binary: 11111111...11111010
console.log(resulttttt); // !-6

//? Explaination

//?Step 1: Write k = 5 in binary

//*32-bit signed integer (JavaScript uses 32-bit signed ints for bitwise ops):
 //*00000000 00000000 00000000 00000101   (this is 5)

//? Step 2: Apply ~ (bitwise NOT)

//*~ flips every bit (0 → 1, 1 → 0):
//*11111111 11111111 11111111 11111010

//? Step 3: Convert back to decimal

//*The above binary is in two’s complement form (that’s how JS stores negative numbers).
//*•	First bit = 1 → means it’s a negative number.
//*	•	To find the value:
//*	1.	Invert the bits again: 00000000 00000000 00000000 00000101
//*2.	Add 1 → 00000000 00000000 00000000 00000110 = 6
//*So value = -6. ✅
//*-------------------------------------------------------------------------------------------------------------
//? TRICKY QUESTION

console.log(0.1 + 0.2);  // *❓ Expected: 0.3, Actual: 0.30000000000000004

//* This is a great question that highlights a fundamental quirk in JavaScript and other programming languages.
// * The reason 0.1 + 0.2 doesn't equal 0.3 is due to how computers store and handle floating-point numbers.
//* The Problem with Binary Fractions
//* Most programming languages, including JavaScript, use the IEEE 754 standard to represent
// * floating-point numbers (decimals). This standard stores numbers in binary format (base 2).
// * While it's easy to represent a decimal fraction like 1/2 as 0.5 in decimal, 
// *some decimal fractions, like 0.1 and 0.2, don't have a perfectly clean representation in binary.
//* Decimal 0.1 in binary: It's a repeating fraction, similar to how 1/3 is 0.333... in decimal. 
// *In binary, 0.1 is represented as 0.000110011001100...
//* Decimal 0.2 in binary: This is also a repeating fraction: 0.001100110011001...
//* Since computers have a finite amount of space (typically 64 bits) to store these numbers, 
// *they can't store the infinite repeating fraction. They must round the number, 
// *leading to tiny precision errors.

//* The Calculation
// *When you perform the addition 0.1 + 0.2, the computer is actually adding the slightly 
// *imprecise binary representations:
//* The stored binary value for 0.1 is slightly larger than the actual 0.1.
//* The stored binary value for 0.2 is also slightly larger than the actual 0.2.
//* When these two slightly oversized numbers are added together, the result is a number that is just a 
// *hair over 0.3, which, when converted back to decimal, is displayed as 0.30000000000000004.
//* This is a well-known characteristic of floating-point arithmetic and isn't specific to JavaScript
//*-------------------------------------------------------------------------------------------------------------------------------------------

//?NAN QUESTION 
let resulte=0/0;//*NaN
if(resulte==NaN){
    console.log("wahh bhai") 
}
if(Number.isNaN(resulte)){
    console.log("good way to detect NaN")
}
//*The resultI == NaN check fails because NaN is unique; it's not equal to anything, including itself. 
// *This is a fundamental rule of the NaN value.
//*The Number.isNaN(resultI) check works because Number.isNaN() is specifically designed to correctly detect 
// *if a value is the NaN value. It returns true only if the value is of the Number type and is NaN.

//? Why NaN Is Unique 🤯
//*NaN stands for "Not a Number." It's a special value used to represent the result of
// * an invalid mathematical operation, such as 0/0, Math.sqrt(-1),
// * or trying to convert a non-numeric string to a number (e.g., Number('hello')).
// * Because these operations don't produce a consistent, fixed number, NaN is defined to be unequal 
// *to all other values, including other instances of NaN.

//*This is why the if(resulte == NaN) condition is always false.

//*The Correct Way to Check for NaN
//*There are two main ways to correctly check for NaN:

//?(a). Number.isNaN() (Recommended)
//*This is the most reliable method. It returns true only if the value is the Number type and is NaN.

let resultee = 0 / 0; //! NaN
console.log(Number.isNaN(resultee)); //!true
console.log(Number.isNaN(NaN)); //! true
console.log(Number.isNaN('hello')); //! false (it's a string, not the number NaN)

//? (b) isNaN() (Legacy)
//*This is a global function that works, but with a significant difference: 
// *it performs a type coercion. It returns true if a value is NaN or if it can't be converted to a number.

let resultI = 0 / 0; //! NaN
console.log(isNaN(resultI)); //! true
console.log(isNaN(NaN)); // !true
console.log(isNaN('hello')); //! true (since 'hello' cannot be converted to a number)
console.log(isNaN('123')); // !false (since '123' can be converted to a number)
//*-----------------------------------------------------------------------------------------------------------------
//?How Logical Operators Work
//*Unlike in some other languages, JavaScript's logical operators (&&, ||) don't always return a boolean
// * (true or false). Instead, they return one of the original operands.
// * This is called short-circuit evaluation.

//?(a) && (AND) Operator

//*The && operator evaluates from left to right.
//*If the first operand is falsy, it immediately stops and returns that falsy value.
//*If the first operand is truthy, it continues and returns the second operand, 
// *regardless of whether it's truthy or falsy.

//? Example:

console.log(true && 5); //! 5
//*true is truthy, so the operator moves on.
//*It returns the second operand, which is 5.

console.log(false && 5); //! False
//*false is falsy, so the operator stops immediately.
//*It returns the first operand, which is false.


//? (b) || (OR) Operator

//*The || operator also evaluates from left to right.
//*If the first operand is truthy, it immediately stops and returns that truthy value.
//*If the first operand is falsy, it continues and returns the second operand, regardless of whether it's truthy or falsy.
//? Example:
console.log(true || 0);//! true
//*true is truthy, so the operator stops immediately.
//*It returns the first operand, which is true.

console.log(false || 0); //! 0
//*false is falsy, so the operator moves on.
//*It returns the second operand, which is 0.


 //? (c) !(NOT) Operator

//*The ! operator always returns a boolean value (true or false). It coerces its single operand into a boolean and then returns the opposite value.
//?Example:
console.log(!"hello");//	!true → false
//*The string "hello" is a truthy value.
//* ! coerces "hello" to true and then negates it to false.

console.log(!0);//! false->true
//*The number 0 is a falsy value.
//* ! coerces 0 to false and then negates it to true.

//?The Rules of Truthy and Falsy
//*Falsy Values: false, 0, "" (empty string), null, undefined, NaN.
//*Truthy Values: Everything else! This includes [] (empty array), {} (empty object), "0" (string with zero), "false" (string with false), and any non-zero number.
//*Understanding truthy and falsy values is crucial for writing clean and effective conditional statements in JavaScript.


//*💥 Tricky Logical Example:
console.log(true && 5);    //* → 5
console.log(false && 5);   //* → false
console.log(true || 0);    //* → true
console.log(false || 0);   //* → 0
console.log(!"hello");     //* → false
console.log(!0);           //* → true

//*-----------------------------------------------------------------------------------------------------------------------------
//? Imp Explaination

//*JavaScript Uses 32 bits Bitwise Operands
//*. The 64-bit to 32-bit Conversion 🔄
//*You've correctly identified the crucial first step. While JavaScript's standard number type uses 64 bits to store floating-point numbers, all bitwise operations are performed on 32-bit integers. This means that before an operation like ~ or & happens, the 64-bit number is temporarily converted to a 32-bit signed integer. The resulting 32-bit integer is then converted back to a 64-bit floating-point number after the operation is complete.

//*Since JavaScript uses 32 bits signed integers, it will not return 10. It will return -6.
//*00000000000000000000000000000101 (5)
//*11111111111111111111111111111010 (~5 = -6)
//*How Lets Understand
//*. The ~ (Bitwise NOT) Operator and Two's Complement 🔢
//*Your example with ~5 is a classic illustration of this process.
//*the decimal number 5 is represented in a 32-bit signed integer as: 00000000000000000000000000000101.
//*The ~ operator flips every bit. The 0s become 1s and the 1s become 0s: 11111111111111111111111111111010.
//*This result is a negative number because the leftmost bit is 1. A computer interprets this bit string using two's complement. To get the decimal value, you flip the bits again and add 1.
//*Inverted: 00000000000000000000000000000101
//*Add 1: 00000000000000000000000000000110 (which is binary for 6).
//*Because the original number was negative, the result is -6.
//*The simple trick you mentioned, ~x is equivalent to -(x + 1), holds true for any integer x due to the mechanics of two's complement.