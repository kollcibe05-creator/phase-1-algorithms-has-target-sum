//method 1
function sumTargertMatch (array, target) {
for (let i = 0; i<array.length; i++){
  let complement = target - array[i]
for(let j = i + 1  ; j<array.length; j++)
  if (array[j] === complement) return true
}
return false
}



//method 2 most optimized
function hasTargetSum(array, target) {
  let seenNumbers = {};
  for (let i = 0; i<array.length; i++) {
   const  complement = target - array[i];
  
  if (seenNumbers[complement]) return true;
  seenNumbers[array[i]] = true
}
return false;
}

//more optimization
function hasTargettSum(array, target) {
  let seenNumbers = {};
  for (const number in array) {
   const  complement = target - number;
  
  if (complement in seenNumbers) return true;
  seenNumbers[array[i]] = true
}
return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  takes in an array and target
  iterates through it at both ends 
  sums the last iteration to the first 
  returns true if any of the sums is equal to the target
*/



/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
