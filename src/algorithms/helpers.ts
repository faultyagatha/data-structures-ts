export const swap = (arr: any[], idx1: number, idx2: number) => {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}