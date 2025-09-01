const original_answer = [
  "C++",               // 1st question answer
  "Dehradun",          // 2nd question answer
  "Practice and Consistency",  // 3rd question answer
  "CoderArmy",         // 4th question answer
  "9th June"           // 5th question answer
];

const form=document.querySelector('form')
form.addEventListener('submit',(event)=>{
   event.preventDefault();
   const data=new FormData(form);
   const userAnswers = [];
    for(let [key,value] of data.entries()){
        userAnswers.push(value);
       }
let result=0;
for(let i=0;i<original_answer.length;i++){
   if(userAnswers[i]===original_answer[i]){
      result++;
   }
}



const out=document.getElementById('out');
out.innerHTML=`${result} out of 5 is correct`
 form.reset();
})