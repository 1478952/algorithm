const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion = ["josipa", "filipa", "marina", "nikola"];

function solution(participant, completion) {
  const _participant = [...participant];

  completion.forEach((member) => {
    const findMember = _participant.indexOf(member);
    _participant[findMember] = "";
  });

  return _participant.join("");
}

console.log(solution(participant, completion));

// 시간초과 추가로 수정해보기
