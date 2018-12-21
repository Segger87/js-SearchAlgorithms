export class MergeSort {
  constructor(numbers) {
    this.mergeSorter(numbers, 0, numbers.length - 1);
  }

  mergeSorter = (numbers, left, right) => {
    if (left < right) {
      let middle = left + Math.floor((right - left) / 2);

      setImmediate(() => this.mergeSorter(numbers, left, middle));
      setImmediate(() => this.mergeSorter(numbers, middle + 1, right));
      setImmediate(() => this.merge(numbers, left, middle, right));
    }
  };

  merge = (numbers, left, middle, right) => {
    let helperArray = [];
    for (let i = left; i <= right; i++) {
      helperArray[i] = numbers[i];
    }

    let i = left;
    let j = middle + 1;
    let k = left;

    while (i <= middle && j <= right) {
      if (helperArray[i] <= helperArray[j]) {
        numbers[k] = helperArray[i];
        i++;
      } else {
        numbers[k] = helperArray[j];
        j++;
      }
      k++;
    }

    while (i <= middle) {
      numbers[k] = helperArray[i];
      k++;
      i++;
    }
    console.log("Using Merge sort " + numbers);
    return numbers;
  };
}
