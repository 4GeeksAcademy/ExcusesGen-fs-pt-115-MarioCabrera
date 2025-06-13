import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  let excuse = [];
  for (let i = 0; i < 4; i++) {
    switch (i) {
      case 0:
        excuse[i] = who[Math.floor(Math.random()*4)]
        console.log(excuse);
        
        break;
      case 1:
        excuse[i] = action[Math.floor(Math.random()*4)]
        console.log(excuse);
        break;
      case 2:
        excuse[i] = what[Math.floor(Math.random()*3)]
        console.log(excuse);
        break;
      case 3:
        excuse[i] = when[Math.floor(Math.random()*4)]
        console.log(excuse);
        break;
    
      default:
        break;
    }
    
  }
  document.getElementById("Excuses").innerHTML = excuse.join(` `);
};
