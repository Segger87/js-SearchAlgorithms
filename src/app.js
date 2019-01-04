import { SelectionSort } from "./selectionSort.js";
import { InsertionSort } from "./InsertionSort.js";
import { MergeSort } from "./mergeSort.js";
import { QuickSorter } from "./quickSort.js";

let selection = new SelectionSort([4, 7, 3, 9, 1]);
let insertion = new InsertionSort([7, 3, 2, 1, 9000]);
let merge = new MergeSort([4, 3, 8, 77, 1, 6]);
let quick = new QuickSorter([3, 56, 8, 4, 2, 999, 543, 22]);
