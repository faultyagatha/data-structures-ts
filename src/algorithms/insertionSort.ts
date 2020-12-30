import { swap } from './helpers';

/** ALGORITHM:
 * begin the sorted array with the first element,
 * inspect the next element and swap it backwards into the sorted array 
 * until it is in sorted position. Continue swapping new items backwards 
 * into the sorted portion until the end of the array.
 * - time complexity: O(n^2) */

export const insertionSort = (arr: any[]) => {
  //start from the second elem
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    //work backwards 
    let j = i - 1;
    while (j > 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    //swap
    arr[j + 1] = current;
  }
  return arr;
}