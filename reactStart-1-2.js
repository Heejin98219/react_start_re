// 객체와 배열
// 객체: key - value
// JSON(JavaScript Object Notation)
// const 객체 = {
//   속성 : "값"
//   속성 : "값"
//   속성 : "값"
// }
const user = {
  name: "은동이",
  age: 5,
  cute: true,
  lovely: true,
  printHello: () => console.log("hello"),
};
// 객체 접근 방법
// 1. 점 표기법(.)
// 속성. 객체명
console.log(user.cute);
console.log(user.lovely);
user.printHello();
// 2. 괄호 표기법
// 속성[속성명을 담은 변수]
const attribute = "name";
console.log(user[attribute]);
// 은동이
user.email = "dmsehd0830@naver.com";
user.age = 6;
console.log(user);
// 객체 추가
// 속성.추가할 객체명 = "값"
user.email = "eundong0830@gmail.com";
// 객체 수정
// 속성.수정할 객체명 = "원하는 값";
user.age = 6;
console.log(user);
// {
// name: '은동이,
// age: 6
// lovely: true,
// printHello: [Function: printHello],
// email: eundong0830@gmail.com'
// }
// 속성 삭제
// delete 객체명.속성;
delete user.printHello;
console.log(user);
// {
// name: '은동이,
// age: 6
// lovely: true,
// email: eundong0830@gmail.com'
// }
// (1) Object.keys()
const cosmetics = {
  foundation: "hera",
  shadow: "clio",
  eyeline: "lilybyred",
  mascara: "holicaholica",
  lip: "random",
};
const iUse = Object.keys(cosmetics);
console.log(iUse);
//[ 'foundation', 'shadow', 'eyeline', 'mascara', 'lip]
// (2) Object.values()
// 객체의 value 출력
const 하고싶어 = {
  하나: "자기",
  둘: "눕기",
  셋: "스타하기",
  넷: "무한도전 보기",
  다섯: "유튜브 보기",
};
const findKeys = Object.keys(하고싶어);
console.log(findKeys);
// [ '하나', '둘', '셋', '넷', '다섯']
const findValues = Object.values(하고싶어);
console.log(findValues);
// ['자기', '눕기', '스타하기', '무한도전 보기', '유튜브 보기']
// (3) entries
// Object.entries(객체명)
// 객체의 key와 value를 쌍으로 반환하는 객체
const thisIsEntries = Object.entries(하고싶어);
console.log(thisIsEntries);
// ['하나', '자기'],
// ['둘', '눕기'],
// ['셋', '스타하기'],
// ['넷', '무한도전 보기'],
// ['다섯', '유튜브 보기'],
// (4) assign
// Object.assign(원본 객체명, 대상객체명)
// 원본 객체에 속성을 복사하는 메소드
const 하고싶어Detail = {
  occupation: "개발자",
};
Object.assign(하고싶어, 하고싶어Detail);
console.log(하고싶어);
// {
//  '하나': '자기',
//  '둘': '눕기',
//  '셋': '스타하기',
//  '넷': '무한도전 보기',
//  '다섯': '유튜브 보기',
//  occupation: '개발자'
//}

// 배열
// 순차 데이터를 저장하는 방법
// 숫자의 배열, 문자의 배열
// 대괄호 사용
const numbers = [1, 2, 3];
console.log(numbers);
// [1, 2, 3]
console.log(numbers[1]);
// 2
numbers[1] = 10;
console.log(numbers[1]);
// 10
