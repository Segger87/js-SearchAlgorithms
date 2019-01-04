export class QuickSorter {
  constructor(numbers) {
    console.log(`Using Quick Sort: ${this.quickSort(numbers)}`);
  }

  quickSort = numbers => {
    if (numbers.length <= 1) {
      return numbers;
    }
    let left = [];
    let right = [];
    let pivot = numbers.pop();
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] <= pivot) {
        left.push(numbers[i]);
      } else {
        right.push(numbers[i]);
      }
    }
    return result.concat(this.quickSort(left), pivot, this.quickSort(right));
  };
}
