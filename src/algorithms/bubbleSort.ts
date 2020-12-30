import { swap } from './helpers';

/** ALGORITHM: 
 * iterate over an array and place the larger
 * values into a sorted position ('bubble it')
 * - time complexity: O(n^2) */

export const bubbleSort = (arr: any[]) => {
  //keep the track of swaps and break earlier 
  //if our data is nearly sorted
  let noSwaps = false;
  //a small optimisation
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      //swap
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  console.log(arr);
  return arr;
}