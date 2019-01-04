export class SelectionSort {
  constructor(numbers) {
    console.log(`Using Selection Sort: ${this.selectionSorter(numbers)}`);
  }

  selectionSorter = numbers => {
    let smallestNumber = 0;
    let temp = 0;

    for (let i = 0; i < numbers.length - 1; i++) {
      smallestNumber = i;

      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[j] < numbers[smallestNumber]) {
          smallestNumber = j;
        }
      }

      if (smallestNumber != i) {
        temp = numbers[i];
        numbers[i] = numbers[smallestNumber];
        numbers[smallestNumber] = temp;
      }
    }

    return numbers;
  };
}
