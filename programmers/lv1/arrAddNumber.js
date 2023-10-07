const arr1 = [
  [1, 2],
  [2, 3],
];
const arr2 = [
  [3, 4],
  [5, 6],
];

function solution(arr1, arr2) {
  return arr1.map((v, i) => {
    return v.map((v2, i2) => {
      return v2 + arr2[i][i2];
    });
  });
}

console.log(solution(arr1, arr2));
