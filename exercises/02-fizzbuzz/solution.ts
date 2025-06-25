function fizzBuzz(): void {
  for (let currentValue = 1; currentValue <= 100; currentValue++) {
    const divisibleByThree: boolean = currentValue % 3 === 0;
    const divisibleByFive: boolean = currentValue % 5 === 0;

    if (divisibleByThree && divisibleByFive) {
      console.log('FizzBuzz');
    } else if (divisibleByThree) {
      console.log('Fizz');
    } else if (divisibleByFive) {
      console.log('Buzz');
    } else {
      console.log(currentValue);
    }
  }
}

fizzBuzz();