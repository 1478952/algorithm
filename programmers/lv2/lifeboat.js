// 구명보트 16 ~ 22 실패
// 효율성 테스트 시간초과 while in for 로 인한 오류같음

const people = [10, 20, 30, 50, 60];
const limit = 100;

// [50, 50, 70, 80] 0,2
// [50, 70, 80]
// [10, 20, 30, 50, 60]
// [40,50,150,160] limit 200 > 2

// [100,500,500,900,950] limit 1000 > 3

function solution(people, limit) {
  let answer = 0;
  const _people = [...people].sort((a, b) => a - b);
  let boat = [];

  while (_people.length > 0) {
    const member = _people[_people.length - 1];
    boat.push(member);
    _people.pop();

    for (let i = 0; i < _people.length; i++) {
      if (boat.length < 2 && limit - boat >= _people[i]) {
        boat.push(_people[i]);
        _people.splice(i, 1);
      }
    }

    answer += 1;
    boat = [];
  }

  return answer;
}

console.log(solution(people, limit));

// 시간초과 실패 ㅠ

function realSolution(people, limit) {
  let answer = 0;
  const sortedPeople = [...people].sort((a, b) => a - b);

  let left = 0;
  let right = sortedPeople.length - 1;

  while (left <= right) {
    if (sortedPeople[left] + sortedPeople[right] <= limit) {
      left++;
    }
    right--;
    answer++;
  }

  return answer;
}
