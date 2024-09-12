// destructuring
// 파일을 기능별로 분류하는 것이 나음
// 파일을 기능별로 분류하고
// 변수명을 나눠서 분류하는 것은
// 그저 선호도 차이임
// 문제 1
const person = {
  name: "르탄이",
  age: 25,
  job: "개발자",
};

const { name, age } = person;
console.log(`${name}는 이름, ${age}는 나이`);
// 르탄이는 이름, 25는 나이

// 문제 2
const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  release: {
    year: 2010,
    month: "July",
  },
};

const {
  title,
  release: { year },
} = movie;
console.log(`${title}은 영화 제목, ${year}은 연도`);
// Inception은 영화 제목, 2010년은 연도

// 문제 3
const numbers = [10, 20, 30, 40, 50];
//const [first, second, third, fourth, fifth] = numbers;
//console.log(first, third);
// 10 30

// 문제 4
function confirmReservation(user) {
  // 여기에 user 객체를 구조 분해 할당 하세요.

  const { name, roomType, date: firstDate } = user;

  return `${name} 고객님의 ${roomType}룸 입실날짜는 ${firstDate} 입니다.`;
}

const userInfo = {
  name: "James",
  roomType: "Deluxe",
  date: "2023-05-30",
};
//const result = confirmReservation(userInfo);
//console.log(result);
// James 고객님의 Deluxe룸 입실날짜는 2023-08-30 입니다.

// spread Operator
// ...객체명
// ... 변수명
// 객체나 배열을 복사할 때 사용됨
// 객체나 배열을 합칠 때 사용됨
const originalUser = {
  name: "주희",
  age: 24,
};
//const updatedUser = originalUser;
//updatedUser.name = "서영이";
//console.log("원본 > ", originalUser);
// {name: '서영이', age: 24}
//console.log("복사본 > ", updatedUser);
// {name: '서영이', age: 24}
// → 불변성이 깨지는 현상
// const updatedUser = originalUser; 처럼
// 복사한 것은 참조하는 위치를 복사한 것임
// A라는 객체. 그리고 새로 만든 B라는 객체가
// 주소값을 복사했기 때문에 그 주소값은
// 바라보고 있는 게 똑같다는 것
// 즉, B를 수정했지만
// 원본 객체인 A까지 변경되는 것처럼 보이는 것
// 그래서, js에서 객체나 배열을 복사할 때
// 불변성을 지켜야 한다면 위처럼 복사하는 것이 아닌
// 밑의 방법을 사용한다.
const updatedUser = { ...originalUser };
updatedUser.name = "승원이";
console.log("원본 >", originalUser);
// { name: '주희', age: 24}
console.log("복사본 >", updatedUser);
// {name: '승원이', age: 24}
const first = [1, 2, 3];
const second = [4, 5, 6];
const combinedArray = [...first, ...second];
console.log(combinedArray);
// [1, 2, 3, 4, 5, 6]

// 문제 1
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];
console.log(array3);
// [1, 2, 3, 4, 5, 6]

// 문제 2
const obj1 = { name: "르탄이", age: 25 };
const obj2 = { name: "르순이", email: "rsoony@sparta.com" };
const mergedObject = { ...obj1, ...obj2 };
console.log("mergedObject > ", mergedObject);
mergedObject.name = "원장님";
console.log(obj1);
// {name: '르탄이', age: 25}
console.log(obj2);
// {name: '르순이', email: 'rsoony@sparta.com'}

// rest Operator
// ...변수명
// (1) 함수의 매개변수
// (2) 객체 분해 할당 시, 여러 값을 그룹핑
function sum(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur);
}

const result = sum([1, 2, 3, 4, 5]);
console.log(result);
// 15
