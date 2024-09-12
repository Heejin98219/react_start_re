// 화살표 함수
//function add() {
// 로직
//}
const minus = function () {
  // 로직
};
// 자바스크립트에서 참조형 변수들은
// 부모 타입이라고 할 수 있는 상위 타입이
// Object(객체) 타입이라고 할 수 있다.
// 그래서 function() 역시도 그냥
// 값으로 취급한다면 이런 표현도 가능하다.
//const add = function (a, b) {
//return a + b;
//};
//const result = add(3 + 5);
// function 키워드를 없애고
// =>의 화살표를 사용한다.
// 또, return이 한 줄인 경우에는
// 중괄호와 return을 삭제할 수 있다.
const add = (a, b) => a + b;
console.log(add(1, 3));
// 4

// 조건 연산자 = 삼항 연산자
const score = 85;
let grade = score >= 80 ? "A" : "B";
//if (score >= 80) {
//grade = "A";
//} else {
//grade = "B";
//}
console.log(grade);
// A

// 단축 평가
// 논리 연산자를 활용함 (||, &&, ?., ??)
// (1) 논리합(||) 연산자
// truthy, falsy
// falsy:
// false, 0, "", null, undefined, NaN
const getUserName = (user) => user.name || "신원미상";
const person = {
  name: "은동이",
  age: 6,
};
console.log(getUserName(person));
// 은동이
// (2) 논리곱(&&) 연산자
const loggedIn = true;
const userName = "은진아";
loggedIn && console.log(`발닦고자라 ${userName}`);
// 발닦고자라 은진아
// Optional Chaining (?.)
const user = {
  profile2: {
    name: "나",
    details: {
      age: 98,
      location: "청담동",
      printHello: () => console.log("Hello?"),
    },
  },
};
console.log(user.profile?.details.age);
// 98
user.profile2.details.printHello();
// Hello?
// Null 병합 연산자 (??)
let userLocation = "서울";
console.log(userLocation ?? "없는위치");
// 서울
const displayPreferences = (preference) => {
  const textLength = preference.textLength || 50;
  console.log("1 >", textLength);
  const itemsPerPage = preference.itemsPerPage ?? 10;
  console.log("2 >", itemsPerPage);
};
const userPreference = {
  textLength: 0,
  itemsPerPage: null,
};
displayPreferences(userPreference);
// 1 > 50
// 2 > 10
