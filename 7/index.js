// 7. 상품 정보가 담긴 배열에서 총 가격을 계산하는 함수를 만들어보세요
const cart = [
  { name: "티셔츠", price: 25000 },
  { name: "청바지", price: 45000 },
  { name: "운동화", price: 80000 },
];

function getTotalPrice(cartArray) {
  let totalPrice = 0 
  for (let i=0; i < cartArray.length; i++) {
    totalPrice += cartArray[i].price;
  }
  return totalPrice;
}

console.log(getTotalPrice(cart)); // 150000이 출력되어야 함
