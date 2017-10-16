import { convertDateToTimeStamp, creatHash} from '../utils/apiUtils';

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
assert('convertDateToTimeStamp(new Date(1992,2,22)) should return 701218800000 ', convertDateToTimeStamp(new Date(1992,2,22)) === "701218800000");
assert('creatHash(1506243058) should return dffbed6aa472114a069d43b4b838bd03 ', creatHash(1506243058) === "dffbed6aa472114a069d43b4b838bd03");
