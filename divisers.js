function getDivisers(a, b){
  //Find starting number, init variables
	let gcdArr = [];
	let theGCD;
	if (a > b){theGCD = a;} else {theGCD = b;}
	// Start Loop
  //Test to see if diviser works for both numbers
	do{
    let qA = a / theGCD;
    let qB = b / theGCD;

    if(Number.isInteger(qA) && Number.isInteger(qB)){
    	//if the diviser works push to array
      gcdArr.push(theGCD)
    }
    //increment diviser down by 1
    theGCD = theGCD - 1;
    //keep looping until diviser reaches 1
	} while(theGCD > 0);
  // return array
  return gcdArr;
}

let result = getDivisers(144,96)
console.log(result);