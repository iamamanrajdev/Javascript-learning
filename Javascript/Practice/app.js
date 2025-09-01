const quotes = [
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
   "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
   "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
   "Push yourself, because no one else is going to do it for you.",
 "Great things never come from comfort zones.",
   "Dream it. Wish it. Do it.",
 "Don’t stop when you’re tired. Stop when you’re done.",
   "Wake up with determination. Go to bed with satisfaction.",
   "Little things make big days.",
   "It’s going to be hard, but hard does not mean impossible.",
   "Don’t wait for opportunity. Create it.",
   "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
   "The harder you work for something, the greater you’ll feel when you achieve it.",
   "Dream bigger. Do bigger.",
   "Doubt kills more dreams than failure ever will. – Suzy Kassem",
   "Discipline is doing what needs to be done, even if you don’t want to do it.",
   "Make your life a masterpiece; imagine no limitations on what you can be, have or do. – Brian Tracy",
   "Be stronger than your excuses.",
   "The future depends on what you do today. – Mahatma Gandhi",
   "Radhe Radhe! Consistency always beats talent when talent doesn’t work hard. 💪"
]

function generate(){
const parent=document.getElementById("quotes")
const randomIndex=Math.floor(Math.random()*quotes.length) //random pick karo

parent.textContent=quotes[randomIndex]
}
setInterval(generate,1000)

const colors = {
  1: "#0D1B2A", // Dark navy
  2: "#1B263B", // Space gray
  3: "#2E3A59", // Charcoal blue
  4: "#212121", // Almost black
  5: "#2C2C54", // Deep purple-blue
  6: "#1C1C1C", // Solid dark gray
  7: "#3B3B98", // Strong dark blue
  8: "#2F3640", // Gunmetal
  9: "#191919", // Jet black
  10: "#0F3460" // Midnight blue
};

function color(){
const main=document.querySelector('body')
const kee=Object.keys(colors);
const randoomIndex=Math.floor(Math.random()*kee.length)
const randomkee=kee[randoomIndex]
main.style.backgroundColor=colors[randomkee];
}

setInterval(color,1000)