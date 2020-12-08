function add(str) {
  strs = str.split('+');
  let sum = 0;
  for (i = 0; i < strs.length; i++) {
  	sum += parseInt(strs[i]);
  }
return sum;
}

let result = add('100+60+200+40');
console.log(result);
