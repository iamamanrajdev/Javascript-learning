//* 🌟 1️⃣ What is the Date Object?

// ✅ In JavaScript, the Date object lets you work with dates and times.
// ✅ You can create, read, update, and format dates and times.

//* 🌟 2️⃣ How to Create a Date

// ✅ JavaScript Date object has 4 common ways to create dates:
//*✅ 2.1 Current Date & Time
//let now=new Date();
//console.log(now); //2025-07-08T14:30:57.446Z
//🧭 It gives the current date and time on your computer.

//*✅ 2.2 Using Date String
// let d=new Date("2025-07-08")
// console.log(d) //2025-07-08T00:00:00.000Z

//**✅ 2.3 Using Year, Month, Day, Hour, Minute, Second, Millisecond */
// let d=new Date(2025,7,8,10,0,0);
// console.log(d) //2025-08-08T04:30:00.000Z
// 2025-08-08T04:30:00.000Z
// ✅ 📌 Reason: Timezone Difference!

// ⭐ JavaScript’s Date object internally stores time in UTC (Coordinated Universal Time).
// ⭐ What happened here exactly?
// 	•	You asked for 10:00 AM local time (India).
// 	•	JavaScript stored it correctly as 10:00 AM IST
//*✅ 2.5 Shortcut: Date.now()
// console.log(Date.now()) //1751985660481
// ✅ Returns timestamp in milliseconds since Jan 1, 1970 UTC.

//*🌟 3️⃣ Reading Values from Date

// ✅ Once you have a Date object, you can extract parts:

//*✅ 3.1 Get Full Year
// let d=new Date()
// console.log(d.getFullYear())//2025
//*✅ 3.2 Get Month
//console.log(d.getMonth()) //6 console.log(d.getFullYear()) o se indexing hota hain
//* ✅ 3.3 Get Date
//console.log(d.getDate())//8
//* ✅ 3.4 Get Day of Week
//console.log(d.getDay()) //2 DSRA SAPTAH
// *✅ 3.5 Get Hours, Minutes, Seconds
// console.log(d.getHours());   // 0-23
// console.log(d.getMinutes()); // 0-59
// console.log(d.getSeconds()); // 0-59
// *✅ 3.6 Get Milliseconds
//console.log(d.getMilliseconds()); // 0-999
// *✅ 3.7 Get Time (timestamp)
// console.log(d.getTime()); // milliseconds since Jan 1, 1970

//* 🌟 4️⃣ Setting Date Values

// ✅ You can update parts of a Date object:


//*✅ 4.1 setFullYear()
// let d=new Date();
//console.log(d.setFullYear(2026)) //1783522283092
// “Maine year set kiya 2025 — number kyu aa gaya?”
// ✅ 📌 Reason

// ✅ The setFullYear() method returns the timestamp (milliseconds since Jan 1, 1970 UTC).
// ✅ It modifies the date in place and returns the timestamp.
//** */ ✅ 4.2 setMonth()
//console.log(d.setMonth(4)) //1746716024411
// **✅ 4.3 setDate()
//console.log(d.setMonth(4)) //1746716060989
// ✅ 4.4 setHours(), setMinutes(), setSeconds()
 //console.log(d.setHours(15)); //1751968539489

// ✅ 4.5 setTime()
// console.log(d.setTime(10))//10
// ⭐ What happens here?
// 	•	d.setTime(10) sets the Date object to 10 milliseconds after 1970-01-01 00:00:00 UTC.
// 	•	It returns the new timestamp you set (which is 10).

//*🌟 5️⃣ toString() and Formatting
//let d=new Date();
//*✅ Default string output:
//console.log(d.toString()); //Tue Jul 08 2025 20:29:50 GMT+0530 (India Standard Time)
//* ✅ Date only:
//console.log(d.toDateString()) //Tue Jul 08 2025
// //* ✅ Time only:
 //console.log(d.toTimeString()) //20:32:37 GMT+0530 (India Standard Time)
// //* ✅ ISO Format:
// console.log(d.toISOString())//2025-07-08T15:03:11.615Z
 //ISO Format = International Standard Format for dates and times.
// //* ✅ UTC String:
 //console.log(d.toUTCString()) //Tue, 08 Jul 2025 15:04:56 GMT
// ✅ 📌 What is toUTCString()?

// ✔️ The toUTCString() method converts a Date object into a string, showing the date and time in UTC (Coordinated Universal Time).

// ✅ It’s always in UTC — not in your local timezone.
//* ✅ Locale Date Only:
// console.log(d.toLocaleDateString()) 7/8/2025
//* ✅ Locale Time Only:
//console.log(d.toLocaleTimeString()) //8:37:13 PM

//*🌟 6️⃣ Comparing Dates
//✅ You can compare using timestamps:
// let d1 = new Date('2024-07-11');
// let d2 = new Date('2024-07-12');

// console.log(d1.getTime() < d2.getTime()); // true
// ⭐ Yahan tumne do Date objects banaye:
// 	•	d1 → 11 July 2024
// 	•	d2 → 12 July 2024
// ✅ 2️⃣ What is .getTime()?

// ✔️ .getTime() method Date ko timestamp me convert karta hai.
// ✔️ Timestamp = milliseconds since 1 Jan 1970 UTC.
// ✅ d2 ka timestamp > d1 ka timestamp (kyunki d2 baad ki date hai).
// ⭐ Tum check kar rahe ho:

// “Kya d1 ka time d2 se pehle hai?”

// ✅ Yes!
// 11 July 2024 < 12 July 2024
// ✅ Output:true

//Practical Example Countdown timer
// let today=new Date();
// let eventDate=new Date("2026-04-03")
// let diff=eventDate-today;
//console.log(diff) // = 20353800000 (milliseconds)
// ⭐ JavaScript allows you to subtract Date objects.

// ✅ What happens?
// 	•	Both dates are converted to timestamps (ms since Jan 1, 1970).
// 	•	Subtraction gives difference in milliseconds.
// let days= Math.floor(diff/(1000*60*60*24))
// console.log(days) //268
// or using backtick
//console.log(`Days left: ${days}`) //Days left: 268

//*✅ Ab isi tarah Hours left, Minutes left, Seconds left bhi nikalna hai!
// ⭐ 1 day = 24 hours
//* ⭐ 1 hour = 60 minutes
// let hour= Math.floor(diff/(1000*60*60)%24)
// console.log(`hours left: ${hour}`) //hours left: 8
// *⭐ 1 minute = 60 seconds
// let min= Math.floor(diff/(1000*60)%60)
// console.log(`min left: ${min}`) //min left: 16
//* ⭐ 1 second = 1000 milliseconds
// let sec= Math.floor(diff/(1000)%60)
// console.log(`hours left: ${sec}`)//hours left: 24

//console.log(`my birthday: Days:${days} hours:${hour} min:${min} sec:${sec} `)
//my birthday: Days:268 hours:8 min:13 sec:34 



let aman=new Date()
console.log(aman.getDate())