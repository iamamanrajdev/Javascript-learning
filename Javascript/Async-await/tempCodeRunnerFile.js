
function test1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First promise is resolved");
    }, 5000);
  });
}

function test2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Second promise is resolved");
    }, 5000);
  });
}

async function greet() {
 console.log("hello i greet u")
  const data1 = await test1(); // starts timer NOW
  console.log(data1);

  const data2 = await test2(); // starts timer AFTER first finishes
  console.log(data2);
}
greet();
console.log("kaise ho aap sab log")
console.log("hello aman")