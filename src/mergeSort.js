export class MergeSort {
  constructor(numbers) {
    console.log("Using Merge Sort: " + this.mergeSorter(numbers));
  }

  mergeSorter = (numbers) => {
    if (numbers.length <= 1) {
      return numbers;
    }

    let middle = Math.floor((numbers.length) / 2);

    let sortedLeft = this.mergeSorter(numbers.slice(0, middle));
    let sortedRight = this.mergeSorter(numbers.slice(middle));
    return this.merge(sortedLeft, sortedRight);
  };

  merge = (leftNumbers, rightNumbers) => {
    let mergedOutput = [];
    while(leftNumbers.length && rightNumbers.length) {
      if (leftNumbers[0] < rightNumbers[0]) {
        mergedOutput.push(leftNumbers[0]);
        leftNumbers = leftNumbers.slice(1);
      } else {
        mergedOutput.push(rightNumbers[0]);
        rightNumbers = rightNumbers.slice(1);
      }
    }
    mergedOutput = mergedOutput.concat(leftNumbers);
    mergedOutput = mergedOutput.concat(rightNumbers);
    return mergedOutput;
  };
}
