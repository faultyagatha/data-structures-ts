import { swap } from './helpers';

/** ALGORITHM:
 * iterate over an array, select the minimum value 
 * and swap it with the first value. Move on to the next
 * position and repeat until sorted.
 * - time complexity: O(n^2) */

export const selectionSort = (arr: any[]) => {
  for (let i = 0; i < arr.length; i++) {
    //keep the track of indices to swap later
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        swap(arr, j, min);
      }
    }
  }
  console.log(arr);
  return arr;
}

