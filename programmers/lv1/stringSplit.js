const s = "abracadabra";

function solution(s) {
  let answer = 0;
  let firstString = "";
  let notEqualFirstString = "";

  s.split("").forEach((string) => {
    if (firstString.length < 1 || firstString[0] === string) {
      firstString += string;
      return;
    }

    notEqualFirstString += string;

    if (firstString.length === notEqualFirstString.length) {
      answer += 1;
      firstString = "";
      notEqualFirstString = "";
    }
  });

  if (firstString.length >= 1 || notEqualFirstString.length >= 1) {
    answer += 1;
  }

  return answer;
}

console.log(solution(s));
