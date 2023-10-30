const s = "3people unFollowed me";

function solution(s) {    
  return s.split(" ").map((_s) => {
      const copyStrArr = [..._s];
      const convertedCopyStrArr = copyStrArr.map((str, idx) => {
        if (idx === 0) return str.toUpperCase();

        return str.toLowerCase();
      })
      return convertedCopyStrArr.join("");
  }).join(" ")
}

console.log(solution(s));