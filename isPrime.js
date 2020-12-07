function isPrime(x){
  if(x <= 1){return false;}
	for(i=2; i < x; i++){
   if(x % i == 0){return false;}
  }
 return true;
}

let result = isPrime(6)
console.log(result);
