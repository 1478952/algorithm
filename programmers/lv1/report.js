const td_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const k = 2;

function solution(id_list, report, k) {
  const answer = [];

  const tdObj = {};

  id_list.forEach((td) => {
    tdObj[td] = [];
  });

  const _report = new Set(report);

  for (const entrie of _report.values()) {
    tdObj[entrie.split(" ")[0]].push(entrie.split(" ")[1]);
  }

  const valueCounts = {};

  for (const key in tdObj) {
    for (const value of tdObj[key]) {
      valueCounts[value] = (valueCounts[value] || 0) + 1;
    }
  }

  for (const key in tdObj) {
    const filteredArr = tdObj[key].filter((_key) => valueCounts[_key] > k - 1);
    answer.push(filteredArr.length);
  }
  return answer;
}

console.log(solution(td_list, report, k));
