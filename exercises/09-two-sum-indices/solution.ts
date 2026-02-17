function getTwoSumIndices(numbers: number[], target: number): [number, number] | null {
    const indexByNumber = new Map<number, number>();

    for(let currentIndex = 0; currentIndex < numbers.length; currentIndex++ ){
        const currentNumber = numbers[currentIndex];

        const requiredNumber = target - currentNumber;
        if(indexByNumber.has(requiredNumber)){
            const matchedIndex = indexByNumber.get(requiredNumber)!;
            return [currentIndex, matchedIndex];
        }
        indexByNumber.set(currentNumber, currentIndex);
    }

    return null;
}

console.log(getTwoSumIndices([2, 7, 11, 15], 3));