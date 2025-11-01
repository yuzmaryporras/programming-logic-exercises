function getMaxSubArraySum(values: number[]): number {
    if(values.length === 0) return 0;

    let maxCurrentSum: number = values[0];
    let maxGlobalSum: number = values[0];

    for(let index = 1; index <values.length; index++){
        const currentValue: number = values[index];

        maxCurrentSum = Math.max(currentValue, currentValue + maxCurrentSum);
        maxGlobalSum = Math.max(maxCurrentSum, maxGlobalSum);
    }
    return maxGlobalSum;
}

console.log(getMaxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));