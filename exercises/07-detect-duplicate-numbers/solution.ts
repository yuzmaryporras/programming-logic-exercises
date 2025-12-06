function hasDuplicates(numberList: number[]): boolean {
    const numberRegistry = new Set<number>();

    for(let i = 0; i < numberList.length; i++ ){
        const currentValue = numberList[i];

        if(numberRegistry.has(currentValue)) return true;

        numberRegistry.add(currentValue);
    }
    return false;
}

console.log(hasDuplicates([1, 3, 5, 6]));
