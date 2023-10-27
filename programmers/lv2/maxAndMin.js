const s = "1 2 3 4";

function solution(s) {
  const splitStr = s.split(" ");

  return `${Math.min(...splitStr)} ${Math.max(...splitStr)}`;
}

console.log(solution(s));
