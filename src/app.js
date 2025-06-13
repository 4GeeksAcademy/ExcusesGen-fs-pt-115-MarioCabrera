import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird','my mom','my friend'];
  let action = ['ate', 'peed', 'crushed', 'broke','ruined','lost'];
  let what = ['my homework', 'my phone', 'the car','my computer','my keys'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying','while i was petting my cat','while i was cleaning'];
  let excuse = [];
  excuse[0] = who[Math.floor(Math.random()*who.length)]
  excuse[1] = action[Math.floor(Math.random()*action.length)]
  excuse[2] = what[Math.floor(Math.random()*what.length)]
  excuse[3] = when[Math.floor(Math.random()*when.length)]
  document.getElementById("Excuses").innerHTML = excuse.join(` `);
};
