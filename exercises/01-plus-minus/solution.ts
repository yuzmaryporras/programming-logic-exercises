function printSignDistribution(numbers: number[]): void {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for(const number of numbers) {
    if(number > 0) positiveCount++;
    else if( number < 0) negativeCount++;
    else zeroCount++
  }

  const total = numbers.length;
  printDecimalProportion(positiveCount, total);
  printDecimalProportion(negativeCount, total);
  printDecimalProportion(zeroCount, total);
}

function printDecimalProportion(count: number, total: number): void {
 console.log((count / total).toFixed(6));
}

printSignDistribution([-4, 3, -9, 0, 4, 1]);


