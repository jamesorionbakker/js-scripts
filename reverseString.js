function reverse(str) {
  if (str.length === 0){
    return '';
  }
  let n = str.slice(0,1);
  str = str.substr(1);
  return reverse(str) + n;
}


let result = reverse('live');
console.log(result);