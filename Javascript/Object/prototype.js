//
let obj={
    name:"aman",
    amount:420,
    greet:function(){
        return 10;
    }
}
//console.log(obj.name)//aman
//    *********but**********

console.log(obj.toString())//[object Object]
//* ye to string to maine banaya nai 
//* aise hi to push pop arry me ye aa kha se rha hain

//*console me jao 
//const a=[3,4,5,6,7]
//a.__proto__ //*sara method dikh jayega

// const obj={name:"aman",roll:1,}
// obj__proto__ //*sara method dikhega


//*Inheritence in js

// let user1={
//     name:"aman",
//     city:"patna"
// }

// let user2={
//     amount:20,
//     money:50,
// }
//user2.__proto__=user1;
//user2.name="chaman";
//*kyoki yaha user1 ka property user2 ko inherit kar diya
//console.log(user2.name) //chaman


//*Prototype chaining
//Array.__proto__ //array ka protoype
//Array.__proto__.__proto__//object se inherit karta hau output obj 
//Array.__proto__.__proto__.__proto__//null bcoz obj boss hai uske uper null hain

//*Simple example
let arr=[10,20,30,40];
console.log(arr.__proto__==Array.prototype)//true
console.log(arr.__proto__.__proto__==Object.prototype)//TRUE
console.log(arr.__proto__.__proto__.__proto__==Object.null)//true


//*Per prototype chaining karne ka sahi aur modern tarika 
//*👉 Object.create() method se inheritance banana
const father = {
  car: "BMW",
  money: 100000,
};

const son = Object.create(father); // ✅ Set father as prototype of son

son.cycle = "Hero";

console.log(son.cycle);  // Hero → son's own property
console.log(son.car);    // BMW → inherited from father (prototype)