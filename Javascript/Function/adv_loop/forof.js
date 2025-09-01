//* 🔁 What is for...of?

//* for...of is a loop used to iterate over the values of iterable objects like:
// ✅ Arrays
// ✅ Strings
// ✅ Maps
// ✅ Sets
//* ❌ Not for Objects (use for...in for that)

//*✅ Example 1: Loop over an array
// const arr=[10,20,30]
// for(let value of arr){
//     console.log(value) //10,20,30
// }

//*✅ Example 2: Loop over a string
// let name = "Aman";

// for (let char of name) {
//   console.log(char);//A m a n
// }

//*Object me kyo nai laga pata reason
// const obj={
//     name:"aman",
//     roll:10,
// }
// for(let value of obj){
//     console.log(value)
// }
//    // console.log(value)//*TypeError: obj is not iterable
//    //* kyoki object iterable nai hota yani line by line jaise aaray me pata rehta hai o ke baad 1 jana hai phir 2 waise obj me nai hota

// }

// agar jyada zide hai to 
// for(let value of Object.keys(obj)){
// console.log(obj[value])//aman 10
// }
// you can also use Object.entries

//*Call back function-function ke under as an arguement  me ek dusre function  ko bhejna
// function greet(fun){
//     console.log("hello")
// fun();//hello by
// }
// function meet(){
//     console.log("byy")
// }

// greet(meet)

//*ekk aur tarika 
// function greet(fun){
//     console.log("hello")
// fun()
// }
// greet(function meet(){
//     console.log("byy")
// })

//*another example
// const calculate=(a,b,newfunction)=>{
// return newfunction(a,b)
// }
// //*Method 1
// const addition=calculate(3,4,function(num1,num2){
//     return num1+num2;
// })
// console.log(addition)//7
// //*Method 2
// const substracrt=(a,b)=>a-b
// const result=calculate(8,4,substracrt)
// console.log(result); // Output: 4
//*Use case of call back function

// function fetchdata(){
//     console.log("i am fetching data")
// }
// setInterval(fetchdata,2000)//setInterval(callbackFunction, delayInMilliseconds);

//aur in ek line me aise karte hai
// setInterval(()=>{console.log(3+4)}
// ,1000)


//*For each syntax array.forEach((value, index, array) => {});
 
// let arr=[10,20,30,40]
// arr.forEach((num)=>{
//     console.log(num)//10,20,30,40,50
// })
// ✅ Example 2: With index
// let arr=[10,20,30,40]
// arr.forEach((num,index)=>{
//     console.log(`${index}=${num}`)//0=10 1-20 2=30 3=40


// })

//✅ Example 2: With  value index array
// let arr=[10,20,30,40]
// arr.forEach((num,index,arr)=>{
// arr[index]=num*2


// })
// console.log(arr)//20 40 60 80

// *❌ Important: forEach() does not return anything!
// const result = [1, 2, 3].forEach(num => num * 2);
// console.log(result); // ❌ undefined


//*Filter
//* 🔹 What is filter()?

//* filter() is a method in JavaScript used to filter elements from an array based on a condition (true/false).
// 🔧 Syntax:array.filter((element, index, array) => {
//   return condition;
// });
//*🔥 Example 1: Filter even numbers
// let arr=[10,23,20,39]
//  let evenNumbers =arr.filter((num)=>{
//     return num%2===0
// })
// console.log(evenNumbers)//[ 10, 20 ]

//* 💼 Example 2: Students with marks > 60
// let students = [
//   { name: "Aman", marks: 85 },
//   { name: "Rohit", marks: 55 },
//   { name: "Riya", marks: 90 },
// ];
//  let passedStudents =students.filter((student)=>student.marks>60)

// console.log(passedStudents)
// ✅ Output:
// [
//   { name: "Aman", marks: 85 },
//   { name: "Riya", marks: 90 }
// ]

// *🔁 Bonus: With Index & Full Array
// let arr = [10, 20, 30, 40];
// let result = arr.filter((num, index, fullArray) => {
//   console.log("Index:", index, "Num:", num);
//   return num > 25;
// });
// console.log(result); // [30, 40]

//* 🔄 map() in JavaScript

// *📌 Definition:

// *map() is a method in JavaScript that creates a new array by applying a function (callback) to each element of the original array.

// *✅ Original array remains unchanged
//* ✅ It always returns a new array with the transformed values.
 // *📦 Syntax:
// array.map((value, index, array) => {
  // return new value
// })
//*✅ Example 1: Multiply each element by 2
// let arr = [1, 2, 3, 4];

// let doubled = arr.map((num) => {
//   return num * 2;
// });

// console.log(doubled); // [2, 4, 6, 8]
// console.log(arr);     // [1, 2, 3, 4] (original remains same)

//*FILTER SIRF TRUE FALSE KE HISAB SE VALUE CHECK KARTA HAI BUT MAP MODIFY KARTA HAI
// *JAISE IS EX ME EVEN NUMBER NIKALO AND USKO DO GUNA KAR DO FILTER AND MAP DOBO USE HOGA

// const arr=[1,2,3,4,5,6]
// const result=arr.filter((num)=>num%2==0).map((num)=>num*num)
// console.log(result)//[ 4, 16, 36 ]