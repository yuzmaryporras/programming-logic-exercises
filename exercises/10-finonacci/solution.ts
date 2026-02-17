function printFibonacci(count: number): number[]{
    if(count <= 0) return [];

    if( count === 1) return [0];

    const result = [0, 1];

    for(let index = 2; index < count; index++){
        const nextFibonacci = result[index - 1] + result[ index - 2];
        result.push(nextFibonacci);
    }
    return result;
}

const resultFibonacci = printFibonacci(10);
console.log(resultFibonacci.join(', '));