const n = 5;
const lost = [2, 4];
const reserve = [1, 3, 5];

function solution(n, lost, reserve) {
  const students = new Array(n).fill(1);

  for (let i = 0; i < lost.length; i++) {
    students[lost[i] - 1] = students[lost[i] - 1] - 1;
  }

  for (let i = 0; i < reserve.length; i++) {
    students[reserve[i] - 1] = students[reserve[i] - 1] + 1;
  }

  for (let i = 0; i < students.length; i++) {
    if (students[i] === 0) {
      if (students[i - 1] === 2) {
        students[i - 1] = 1;
        students[i] = 1;
      } else if (students[i + 1] === 2) {
        students[i + 1] = 1;
        students[i] = 1;
      }
    }
  }

  return students.filter((student) => student >= 1).length;
}

console.log(solution(n, lost, reserve));
