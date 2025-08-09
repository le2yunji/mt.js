// 6. 이름이 5글자 이상인지 확인하는 함수를 만들어보세요.
function isLongName(name) {
  return name.length >= 5;
}

console.log(isLongName("김철수")); // false
console.log(isLongName("김철수바보")); // true
