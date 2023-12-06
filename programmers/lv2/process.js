const priorities = [1, 1, 9, 1, 1, 1];
const _location = 0;

function solution(priorities, location) {
  let answer = 1;

  while (priorities.length > 0) {
    const maxPriorities = Math.max(...priorities);
    const maxPrioritiesIdx = priorities.indexOf(maxPriorities);
    if (location === maxPrioritiesIdx) {
      return answer;
    }
    const popPriorities = priorities.splice(0, maxPrioritiesIdx + 1);
    if (popPriorities.length > location) {
      location = priorities.length + location;
    } else {
      location -= popPriorities.length;
    }
    popPriorities.pop();
    priorities.push(...popPriorities);

    answer++;
  }

  return answer;
}

console.log(solution(priorities, _location));
