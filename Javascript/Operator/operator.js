//? Operators in JavaScript

//*1 Arithmetic Operators(+, -, *, /, %, **)
console.log(1+2) //! Addition: 1 + 2 = 3
console.log(1-2) //! Subtraction: 1 - 2 = -1
console.log(2*3) //! Multiplication: 2 * 3 = 6
console.log(7/2) //! Division: 7 / 2 = 3.5 (decimal result)
console.log(7%2) //! Modulus: 7 % 2 = 1 (remainder of division)
console.log(2**3) //! Exponentiation: 2 raised to the power 3 = 8
//*--------------------------------------------------------------------------------------------
//*2 Increment & Decrement Operators (++ (increment), -- (decrement))
	//*•	Post Increment → use first, then increase.
	//*•	Pre Increment → increase first, then use
    let sum=20;
    sum++;//!postincrement ans21
    console.log(sum)
    let sum1=20;
    ++sum1;
    console.log(sum1)//! preincrement ans 21

    //* Difference with example:
    let add=30;
    let total=add++
    console.log(total)//! 30 (used old value first)
    console.log(add)// !31 (then increased)

    //* Same goes with decrement 
    //?Example
    let sub=30;
    let all=sub--
    console.log(all)//! 30 (used old value first)
    console.log(sub)// !29 (then decreased)
 //*---------------------------------------------------------------------------------------------

//*3 Assignment Operators(=, +=, -=, *=, /=, %=, **=)
let c=3;
c+=4
console.log(c)//!7
c**=2
console.log(c)//!49

//*Other assignment forms:
c -= 5;   //! subtract and assign
c *= 2;   //! multiply and assign
c /= 2;   // !divide and assign
c %= 3;   //! modulus and assign
