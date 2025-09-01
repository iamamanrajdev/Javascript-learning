 // Math object in JavaScript – it’s a built-in global object that provides mathematical constants and functions. It’s not a constructor, so you don’t use new Math().
// ✅ 1. Accessing Math
// You use Math directly:console.log(Math.PI); // 3.141592653589793

//* ✅ JavaScript Math Constants with Meaning

// console.log("Math Constants in JavaScript");

//* 1. Math.PI – Value of π (pi)
// console.log("Math.PI:", Math.PI);           // 3.141592653589793
// console.log("Use: Area of Circle = πr²");

// let radius = 10;

// // The formula: area = π * r²
// let area = Math.PI * (radius ** 2);


//* 2. Math.E – Euler’s Number
// console.log("Math.E:", Math.E);             // 2.718281828459045
// console.log("Use: Exponential growth, compound interest");

// *3. Math.SQRT2 – Square root of 2
// console.log("Math.SQRT2:", Math.SQRT2);     // 1.4142135623730951
// console.log("Use: Diagonal of a square");

// let x=4;
// let square=Math.sqrt(x);
// console.log(square)

// * 4. Math.LN2 – Natural log of 2
// console.log("Math.LN2:", Math.LN2);         // 0.6931471805599453
// console.log("Use: Logarithmic calculations in base e");

// *5. Math.LN10 – Natural log of 10
// console.log("Math.LN10:", Math.LN10);       // 2.302585092994046
// console.log("Use: Converting log base e to base 10");

// *✅ 1. Math.floor(x)

// “Floor” ka matlab hota hai — neeche gir jaana
// Ye function hamesha number ko neeche (down) round karta hai (nearest smaller integer)
// 🔹 Example:
// Math.floor(4.9);  // 4
// Math.floor(4.1);  // 4
// Math.floor(-4.1); // -5 ⛔ (Downward towards -∞)
//* ✅ Works for both +ve and -ve numbers → rounds down in both.

// *✅ 2. Math.ceil(x)

// “Ceil” = Ceiling → upar chadh jaana
// Ye function hamesha number ko upar round karta hai (nearest greater integer)
// 🔹 Example:Math.ceil(4.1);   // 5
// Math.ceil(4.9);   // 5
// Math.ceil(-4.1);  // -4 ✅ (upar round)
//* ✅ Always upward round karta hai — chahe number negative ho ya positive.

// *✅ 3. Math.trunc(x)

// “Truncate” = Bas decimal hata do, koi rounding nahi!
// Ye function decimal ke baad ka part hata deta hai — no rounding
// 🔹 Example:Math.trunc(4.9);   // 4
// Math.trunc(4.1);   // 4
// Math.trunc(-4.9);  // -4 ✅
// ✅ Ye decimal point ke aage ka part ignore karta hai — towards zero.


// * ✅ 4. Math.pow(x, y)
// // x to the power of y
// console.log("Math.pow(2, 3):", Math.pow(2, 3)); // 8
// console.log("Use: 2 raised to the power of 3");
// let x=2;
// let y=3;
// console.log(Math.pow(x,y)); //8
// //* This does the exact same thing as Math.pow(x, y)
// console.log(x ** y);//8

//* ✅ 5. Math.sqrt(x)
// // Square root
// console.log("Math.sqrt(16):", Math.sqrt(16));   // 4
// console.log("Use: Square root of 16");

// * ✅ 6. Math.cbrt(x)
// // Cube root
// console.log("Math.cbrt(27):", Math.cbrt(27));   // 3
// console.log("Use: Cube root of 27");
// let x=27;
// console.log(Math.cbrt(x))//3

//* ✅ 1. Math.min(...values)

// Sabse chhoti value dhoondta hai
// console.log(Math.min(4, 8, 2));   // 2
// console.log(Math.min(-10, 0, 5)); // -10

//* ✅ 2. Math.max(...values)

// Sabse badi value return karta hai
// console.log(Math.max(4, 8, 2));   // 8
// console.log(Math.max(-5, 0, 10)); // 10

//* ✅ 3. Math.abs(x)
// Toh, Math.abs() ka kaam bahut simple hai:
// Agar number positive hai, to use waise ka waisa hi rakho.
// Agar number negative hai, to uska minus sign (-) hata do aur use positive bana do.
// Absolute value deta hai
// Negative number ko positive bana deta hai
// console.log(Math.abs(-5)); // 5
// console.log(Math.abs(5));  // 5


// *Math.random.    most important topic
//**0-9 tak dega */
//console.log(Math.random());//0<=1 tak deta hai 0.3927800320047621

//console.log(Math.floor(Math.random()*10)) //4
// *1-10 tak generate karna hai to
//console.log(Math.floor(Math.random()*10)+1) //10 tak dega

//**11-20 tak */
//console.log(Math.floor(Math.random()*10)+11)

//**Agar koi bole minimum 40,max-50 tk nikal ke de */
//console.log(Math.floor(Math.random()*(max-min+1)+min)) //Formula
//** Formula decoding */
//* Agar koi puchta hai 0-10 tak karo no generate 
//* 0-9 tak to hota hi hai phir Math.floor lagate hai to round off hojata hai
//* to man lo 0-9 tak aaya hmko 0-10 tak lana hai to total 11 digit hoga isliye 0-9 ko 11 se multiply kar denge to last me 11*0.99
//* to 9.something banega to round off hoke 10 ban jayega

//console.log(Math.floor(Math.random()*11))
//* aise. hi 0-12 puche to total 13 no 
//console.log(Math.floor(Math.random()*13)) //0.999 *times 13 = 12.987 ✅
//*to yahi se dekho agar 0-12 chhaiye tha (max-min)+1 yani 12-0+1=13 multiplyer bana na
//*ab hme 0-12 nikalna aa gaya ab agar koi puche 2-12 niaklo to 0-12 aata hai na nikalne
//*max-min+1 bs hme 2-12 puch rha hai to (max-min+1)+min yani 2 add add kar denge

//*Practice ab 1-6 tak karke dikhao
console.log(Math.floor(Math.random()*20)+1) //*done
