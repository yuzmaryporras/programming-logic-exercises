function staircase(stepsNumber: number): void {
  for(let level = 1; level <= stepsNumber; level++) {
    const step = '#'.repeat(level);
    const paddedStep = step.padStart(stepsNumber);
    console.log(paddedStep);
  }
}

staircase(6);