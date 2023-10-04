const arr = [1, 2, 3, 4];

function solution(arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer / arr.length;
}

console.log(solution(arr));

function realSolution(array) {
  return array.reduce((a, b) => a + b) / array.length;
}
