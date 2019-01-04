export class InsertionSort {
  constructor(numbers) {
    console.log(`Using Insertion Sort: ${this.insertionSorter(numbers)}`);
  }

  insertionSorter = numbers => {
    let temp = 0;

    for (let i = 0; i < numbers.length - 1; i++) {
      temp = numbers[i];
      let j = i - 1;

      while (j >= 0 && numbers[j] > temp) {
        numbers[j + 1] = numbers[j];
        j--;
      }

      numbers[j + 1] = temp;
    }

    return numbers;
  };
}
