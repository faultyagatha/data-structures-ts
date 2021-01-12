/** ALGORITHM:
 * split the array in halves
 * resursively call mergeSort on halves until 
 * there is 1 elem that is sorted by default;
 * merge back elems in the sorted array using merge helper
 * - time complexity: O(n log(n)) */

const merge = (leftArr: any[], rightArr: any[]) => {
  let result: any[] = [];
  let i = 0;
  let j = 0;
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      result.push(leftArr[i]);
      i++;
    } else {
      result.push(rightArr[j]);
      j++;
    }
  }
  while (i < leftArr.length) {
    result.push(leftArr[i]);
    i++;
  }
  while (j < rightArr.length) {
    result.push(rightArr[j]);
    j++;
  }
  console.log(result);
  return result;
}

export const mergeSort = (arr: any[]): any[] => {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length * 0.5);
  const left: any[] = mergeSort(arr.slice(0, middle));
  const right: any[] = mergeSort(arr.slice(middle));
  return merge(left, right);
}