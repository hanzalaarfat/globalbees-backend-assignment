function findNumber(arr, n) {
  if (n == 1) return 0;

  let res = Number.MAX_VALUE;
  for (let i = n - 2; i >= 0; i--) {
    if (i + arr[i] >= n - 1) {
      let sub_res = findNumber(arr, i + 1);
      if (sub_res != Number.MAX_VALUE) res = Math.min(res, sub_res + 1);
    }
  }

  return res;
}

let arr = [6, 7, 8, 9, 10];
let n = arr.length;
let max = findNumber(arr, n);
console.log(max);
// Time complexity: O(n^n)
