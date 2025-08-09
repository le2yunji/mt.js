/**
 * 10. 점수를 받아서 등급을 반환하는 함수를 만들어보세요.
 * 90점 이상: "A"
 * 80점 이상: "B"
 * 70점 이상: "C"
 * 60점 이상: "D"
 * 60점 미만: "F"}
 */

function getGrade(score) {
  switch (true) {
    case score >= 90:
      return "A";
    case score >= 80 && score < 90:
      return "B";
    case score >= 70 && score < 80:
      return "C";
    case score >= 60 && score < 70:
      return "D";
    default:
      return "F";
  }
}

console.log(getGrade(85)); // "B"가 출력되어야 함
console.log(getGrade(95)); // "A"가 출력되어야 함
