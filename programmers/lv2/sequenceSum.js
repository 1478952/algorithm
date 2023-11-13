const elements = [7, 9, 1, 1, 4];

function solution(elements) {
  const n = elements.length;
  let uniqueSums = new Set();

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      sum += elements[(i + j) % n];
      uniqueSums.add(sum);
    }
  }

  return uniqueSums.size;
}

console.log(solution(elements));
