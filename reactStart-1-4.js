// template Literals
// 변수와 표현식을 문자열 안에 쉽게 삽입할 수 있게 해줌
// 백틱(`) 사용
// 문자열을 여러 줄로 작성하는 목적으로도 사용됨
const customer = {
  name: "은진",
};
const item = {
  name: "아메리카노",
  price: 4000,
};
console.log("감사합니다! " + customer.name + "님!");
// 감사합니다! 은진님!
console.log(
  "감사합니다! " +
    customer.name +
    "님! " +
    item.name +
    "를 " +
    item.price +
    "원에 구매하셨습니다!"
);
// 감사합니다! 은진님! 아메리카노를 4000원에 구매하셨습니다!
console.log(`안녕하세요. ${customer.name}님!
      ${item.name}는 ${item.price}원 입니다.`);
// 안녕하세요. 은진님!
// 아메리카노는 4000원 입니다.
const orderDetails =
  "고객 : " +
  customer.name +
  "\n" +
  "상품 : " +
  item.name +
  "\n" +
  "가격 : " +
  item.price;
console.log(orderDetails);
// 고객 : 은진
// 상품 : 아메리카노
// 가격 : 4000
const orderDetails2 = `고객 : ${customer.name}
  상품: ${item.name}
  가격 : ${item.price}
  `;
// 고객 : 은진
// 상품 : 아메리카노
// 가격 : 4000

// destructuring
// 객체에서는 키가 중요함
// 배열에서는 인덱스가 중요함
// 배열에서는 위치만 맞으면
// 구조분해할당이 됨
//const name = item.name;
//const price = item.price;
// 얘네가 몇 백, 몇 천개 있으면
// 일일이 써줘야 하는데
// 이 일을 한 번에 해주는 것이
// destructuring임
// 구조를 객체 형태로 가지고 있는데,
// name과 price를 각각 변수화를
// 시켜준다는 것이 기본 개념임
const { name, price } = item;
console.log("name은 > " + name);
// name은 > 아메리카노
console.log("price는 > " + price);
// price는 4000
function greet(name, age) {
  console.log(`안녕하세요. 제 이름은 ${name}입니다. 나이는 ${age}에요`);
}
const person = {
  name: "은동이",
  age: 6,
};
greet(person);
// 안녕하세요. 제 이름은 은동이입니다. 나이는 6에요
const colors = ["red", "green", "blue"];
//const [firstcolor, secondcolor, thirdcolor] = colors;
//console.log(firstcolor);
// red
//console.log(secondcolor);
// green
//console.log(thirdcolor);
// blue
const [, , thirdColor] = colors;
console.log(thirdColor);
// blue
