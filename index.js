function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
      } else if (i % 3 === 0) {
        console.log('Fizz');
      } else if (i % 5 === 0) {
        console.log('Buzz');
      } else {
        console.log(i);
      }
    }
  }
  
  fizzBuzz();

  function findMissingNumber(arr) {
    const n = arr.length + 1; 
    const expectedSum = (n * (n + 1)) / 2; 
    const actualSum = arr.reduce((acc, num) => acc + num, 0); 
    const missingNumber = expectedSum - actualSum; 
  
    return missingNumber;
  }
  

  const inputArray = [1,2,4];
  const missingNumber = findMissingNumber(inputArray);
  console.log("Cifra lipsă:", missingNumber);