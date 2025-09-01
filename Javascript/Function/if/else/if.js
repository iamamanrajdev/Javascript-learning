//*if-else
//     let age=30;
// if(age>=18){
//     console.log("eligible for vote");
// }
// else
// {
//     console.log("Not eligible gor vote")
// }

//*if else if else
//     let age=50;
// if(age<=18){
//     console.log("eligible for vote");
// }
// else if(age>45){
// console.log("old")
// }
// else
// {
//     console.log("Not eligible gor vote")
// }

//*Multiple condition:Switch
//*Example1
// switch(new Date().getDay()){
//     case 0:
//         console.log("Sunday")
//         break;
//           case 1:
//         console.log("Monday")
//         break;
//           case 2:
//         console.log("Tuesday")
//         break;
//           case 3:
//         console.log("Wednesday")
//         break;
//           case 4:
//         console.log("Thursday")
//         break;
//           case 5:
//         console.log("friday")
//         break;
//           case 6:
//         console.log("Saturday")
//         break;
        
        
        

// }
//*Example2
// let fruit = "apple";

// switch(fruit) {
//   case "banana":
//     console.log("Banana is ₹40 per kg");
//     break;

//   case "apple":
//     console.log("Apple is ₹100 per kg");
//     break;

//   case "mango":
//     console.log("Mango is ₹150 per kg");
//     break;

//   default:
//     console.log("Sorry, fruit not available");
// }

//*🔁 Without break (Fall-through Example):
// let day = "Monday";

// switch(day) {
//   case "Monday":
//     console.log("Start of the week");
//   case "Tuesday":
//     console.log("Second day");
//   default:
//     console.log("Week goes on...");
// }

//*🤔 Real Life Example – Weather Suggestion
// let weather = "rainy";

// switch(weather) {
//   case "sunny":
//     console.log("Wear sunglasses 😎");
//     break;
//   case "rainy":
//     console.log("Take an umbrella ☔");
//     break;
//   case "cold":
//     console.log("Wear a jacket 🧥");
//     break;
//   default:
//     console.log("Check the weather app 🌤");
// }

//* 🔎 Does switch use strict checking (===) or loose checking (==)?

// *Answer: switch uses strict comparison (===) in JavaScript.
//* ✅ Example 1: Type Mismatch ❌
// let value = '1'; // string

// switch(value) {
//   case 1:
//     console.log("Matched number 1");
//     break;
//   case '1':
//     console.log("Matched string '1'");
//     break;
//   default:
//     console.log("No match");
// }
// output-Matched string '1'

//*value is '1' (string), so it will only match the '1' case, not 1 (number).

//*🔁 🔁 FOR LOOP in JavaScript
//*✅ Example 1: Print numbers from 1 to 5
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

 //*Example 2: Print numbers from 10 to 1 (reverse)
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

//*C++ Fast lang kyo hai kyoki js me jabhi i=0 phit i =1 jab vhi change ho rha hai to wo ek new space le rha hai aur c++ aisa nai karta

//*🔁 NESTED FOR LOOP in JavaScript
for(let j=0;j<6;j++){
    let line="";
for(let i=1;i<=5;i++){
line+=i+" "
   
}
 console.log(line)
}