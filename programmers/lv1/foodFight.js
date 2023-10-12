const food = [1, 3, 4, 6];

function solution(food) {
  var answer = "";

  for (let i = 1; i < food.length; i++) {
    if (food[i] <= 1) continue;

    for (let j = 0; j < Math.floor(food[i] / 2); j++) {
      answer += i;
    }
  }
  const reverseAnswer = answer.split("").reverse().join("");

  answer += "0";
  answer += reverseAnswer;

  return answer;
}

console.log(solution(food));
