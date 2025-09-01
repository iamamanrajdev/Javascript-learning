
// setInterval(()=>{
//     const now=new Date();
//     const indian=now.toLocaleTimeString();
//   const clock=document.getElementById("inner")
//   clock.innerText=indian;
// },1000);




//***Another Method */
let showColon=true;
setInterval(() => {
    const now=new Date();
const h = now.getHours().toString().padStart(2, '0'); //* padstart se 2 digit no banta hai like 5 =05
const m = now.getMinutes().toString().padStart(2, '0');
const s = now.getSeconds().toString().padStart(2, '0');
    const sep=showColon? ":" : " ";
    const time=`${h}${sep}${m}${sep}${s}`; //*template literals hai to gethours().tostring aise nai lagana pad rha ye change kar dete hai automatic string me
    const clock=document.getElementById("inner")
    clock.innerText=time;
    showColon=!showColon
}, 1000);

const clock=document.getElementById("inner")
clock.style.fontFamily="Arial"

