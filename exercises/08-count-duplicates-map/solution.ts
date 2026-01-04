function getNumberFrequencies(numbers: number[]): Map<number, number> {

    const frequencyByNumber = new Map<number, number>();

    for(let index = 0; index<numbers.length; index++){
        const currentValue = numbers[index];

        const currentCount = frequencyByNumber.get(currentValue) ?? 0;
        frequencyByNumber.set(currentValue, currentCount + 1);
    }

    return frequencyByNumber;
}

//console.log(getNumberFrequencies([1, 2, 2, 3, 3, 3]));
console.log(Object.fromEntries(getNumberFrequencies([1, 2, 2, 3, 3, 3])));


