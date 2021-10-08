function printPairs(arr, n) {
  let v = [];
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++)
      if (Math.abs(arr[i]) == Math.abs(arr[j])) v.push(Math.abs(arr[i]));

  if (v.length == 0) return;

  // Sort the vector
  v.sort(function (a, b) {
    return a - b;
  });

  // Print the pair with negative positive
  // value.
  for (let i = 0; i < v.length; i++) {
    console.log([-v[i] + " " + v[i]]);
  }
}

let arr1 = [-9, 4, -10, 15, 19, -8, -2, 3, 3, 9, -15, 10, -20];
let n1 = arr1.length;
printPairs(arr1, n1);
