const n = 3;
const words = [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
];

function solution(n, words) {
  const answer = [0, 0];
  const askedWords = [];
  let lastCha;

  for (let i = 0; i < words.length; i++) {
    if (i % n === 0) {
      answer[1] = answer[1] + 1;
    }

    if (
      askedWords.indexOf(words[i]) !== -1 ||
      (lastCha && lastCha !== words[i][0]) ||
      words[i].length < 2
    ) {
      answer[0] = (i % n) + 1;
      return answer;
    }

    lastCha = words[i][words[i].length - 1];
    askedWords.push(words[i]);
  }

  if (answer[0] === 0) {
    answer[1] = 0;
  }

  return answer;
}

console.log(solution(n, words));
