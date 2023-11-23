const citations = [3, 4];

function solution(citations) {
  let answer = 0;
  const sortCitations = citations.sort((a, b) => b - a);
  for (let i = 0; i < sortCitations.length; i++) {
    if (answer >= sortCitations[i]) {
      return answer;
    } else {
      answer++;
    }
  }
  return answer;
}

console.log(solution(citations));