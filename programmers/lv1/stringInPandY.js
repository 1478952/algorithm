const str = "pPoooyY";

function solution(str) {
  const pLength = str.split("").filter((v) => v.toLowerCase() === "p").length;
  const yLength = str.split("").filter((v) => v.toLowerCase() === "y").length;

  return pLength === yLength;
}

console.log(solution(str));
