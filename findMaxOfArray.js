//using for loop


function max(){
 let answer = arguments[0];
 for(i=0; i<arguments.length; i++){
  if(arguments[i] > answer){
   answer = arguments[i];
  };

 }
 return answer;
}

//using spread operator

function maxSpread(){
 return Math.max(...arguments);
}