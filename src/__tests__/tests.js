//import {} from '../utils/apiUtils';

function assert(message, expr){
 if(!expr){
  output(false, message);
  throw new Error(message);
 }
 output(true, message);
}
 
function output(result, message){
 var p = document.createElement('p');
 message += result ? ' = VALIDE' : ' = ERREUR';
 p.style.color = result ? '#0c0' : '#c00';
 p.innerHTML = message;
 document.body.appendChild(p);
}
