// 객체
const myIdol = {
  name: "인피니트",
  debut: "20100609",
  debutSong: "다시돌아와",
  age: 14,
  firstPrizeSong: "내꺼하자",
  fanclubName: "인스피릿",
};

console.clear();

// 객체 추가
myIdol.second = "season2";
console.log(myIdol);
// {
//     name: '인피니트',
//     debut: '20100609',
//     debutSong: '다시돌아와',
//     age: 14,
//     firstPrizeSong: '내꺼하자',
//     fanclubName: '인스피릿',
//     second: 'season2'
//   };

console.clear();

// 객체 수정
myIdol.second = "Last Romeo";
console.log(myIdol);
// {
//     name: '인피니트',
//     debut: '20100609',
//     debutSong: "다시돌아와',
//     age: 14,
//     firstPrizeSong: '내꺼하자',
//     fanclubName: '인스피릿',
//     second: 'Last Romeo'
//   };

console.clear();

// 객체 삭제
delete myIdol.second;
console.log(myIdol);
// {
//     name: '인피니트",
//     debut: '20100609',
//     debutSong: '다시돌아와',
//     age: 14,
//     firstPrizeSong: '내꺼하자',
//     fanclubName: '인스피릿',
//   };

console.clear();

// 배열
const arr = ["봄", "여름", "가을", "겨울"];

console.clear();

// push
arr.push("이제 없어 없다고");
console.log(arr);
// ['봄', '여름', '가을', '겨울', '이제 없어 없다고'];

console.clear();

// pop
arr.pop();
console.log(arr);
// ['봄', '여름', '가을', '겨울']

console.clear();

// 배열 수정
arr[0] = "spring";
console.log(arr);

console.clear();

// Object.keys()
const myKeys = Object.keys(myIdol);
console.log(myKeys);
// [
//  'name',
//  'debut',
//  'debutsong',
//  'age',
//  'fristPrizeSong',
//  'fanclubName',
//]

console.clear();

// Object.values
const myValues = Object.values(myIdol);
console.log(myValues);
// ['인피니트', '20100609', '다시돌아와', 14, '내꺼하자', '인스피릿']

console.clear();

// Object.entries
const myEntries = Object.entries(myIdol);
console.log(myEntries);
// {
//     name: '인피니트",
//     debut: '20100609',
//     debutSong: '다시돌아와',
//     age: 14,
//     firstPrizeSong: '내꺼하자',
//     fanclubName: '인스피릿',
//   };

console.clear();

// Object.assign()
const thirdAlbum = {
  topSeed: "Tell ME",
};

const myAssign = Object.assign(thirdAlbum, myIdol);
console.log(myAssign);
// {
//     topSeed: 'Tell Me'
//     name: '인피니트",
//     debut: '20100609',
//     debutSong: '다시돌아와',
//     age: 14,
//     firstPrizeSong: '내꺼하자',
//     fanclubName: '인스피릿',
//   };

console.clear();

// map
arr.map(function (seasons) {
  console.log(seasons);
});
// spring
// 여름
// 가을
// 겨울

console.clear();

arrNumb = [1, 2, 3, 4, 5, 6];
arrNumb.filter(function (numbs) {
  if (numbs % 2 === 0) {
    return console.log(numbs);
  }
});
// 2, 4, 6

console.clear();

// reduce
//numbers = [1, 2, 3, 4, 5];
//const sum = numbers.reduce((acc, num) => acc + num, 0);
//console.log(sum);
// 15

console.clear();

// sort
const numbs = [1998, 2, 19, 148, 55, 220];
const mysort = numbs.sort();
console.log(mysort);
// [148, 19, 1998, 2, 220, 55]

const mysort2 = numbs.sort((a, b) => a - b);
console.log("오름차순 > ", mysort2);
// 오름차순 > [2, 19, 55, 148, 220, 1998]

const mysort3 = numbs.sort((a, b) => b - a);
console.log("내림차순 >", mysort3);
// 내림차순 > [1998, 220, 148, 55, 19, 2]

console.clear();

const friends = ["박서영", "변승원", "천주희", "조희진"];
// const mysort4 = friends.sort();
// console.log(mysort4);
// // ['박서영', '변승원', '조희진', '천주희']

// const mysort5 = friends.sort((a, b) => a - b);
// console.log(mysort5);
// // ['박서영', '변승원', '조희진', '천주희']

// const mysort6 = friends.sort((a, b) => b - a);
// console.log(mysort6);
// // ['박서영', '변승원', '조희진', '천주희']

friends.sort((a, b) => a.localeCompare(b));
console.log(friends);
// ['박서영', '변승원', '조희진'. '천주희']

friends.sort((a, b) => b.localeCompare(a));
console.log(friends);
// ['천주희', '조희진', '변승원', '박서영']

console.clear();

const dogs = ["말티즈", "진돗개", "제주개", "삽살개", "풍산개"];
dogs.sort((a, b) => a.localeCompare(b));
console.log(dogs);
// ['말티즈', '삽살개', '제주개', '진돗개', '풍산개']

dogs.sort((a, b) => b.localeCompare(a));
console.log(dogs);
// ['풍산개', '진돗개', '제주개', '삽살개', '말티즈']

console.clear();

// Template Literals
let customer = { name: "은동" };
let shoppingList = {
  list1: "고구마 간식",
  list2: "오리 목뼈",
  list3: "우유",
  list4: "북어국",
  list5: "장난감",
};
let price = {
  spend: 10000,
};
// console.log(`
//   ${customer.name}님의 구매목록:
//   ${shoppingList.list1},
//   ${shoppingList.list2},
//   ${shoppingList.list3},
//   ${shoppingList.list4},
//   ${shoppingList.list5},
//   이렇게 총 5개 해서
//   ${price.spend}원 입니당!
//   근데 귀여우니 그냥 드릴게욤><
//   `);
// 은동님의 구매목록:
// 고구마 간식,
// 오리 목뼈,
// 우유,
// 북어국,
// 장난감,
// 10000원 입니당!
// 근데 귀여우니 그냥 드릴게욤><

console.clear();

// Destructing
const kakao = {
  pink: "어피치",
  blue: "네오",
  green: "콘",
  yellow: "무지",
  brown: "프로도",
};

const { pink, blue, green, yellow, brown } = kakao;
console.log("어피치는 > " + pink);
// 어피치는 > 어피치
console.log("네오는 > " + blue);
// 네오는 > 네오
console.log("콘은 > " + green);
// 콘은 > 콘
console.log("무지는 > " + yellow);
// 무지는 > 무지
console.log("프로도는 > " + brown);
// 프로도는 > 프로도

console.clear();

// 배열 Destructing
// 문제 1
//const person = {
//name: "르탄이",
//age: 25,
//job: "개발자",
//};
//console.log("name은 > " + person.name);
// name은 > 르탄이
//console.log("age는 > " + person.age);
// age는 25

console.clear();

// 문제 2
const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  release: {
    year: 2010,
    month: "July",
  },
};
console.log("제목은 > " + movie.title);
// 제목은 > Inception
console.log("년도는 > " + movie.release.year);
// 년도는 > 2010

console.clear();

// 문제 3
const numbers = [10, 20, 30, 40, 50];
const [first, , third] = numbers;
console.log(first);
// 10
console.log(third);
// 30
// 파일을 (기능별로) 분리하는게 더 나음

console.clear();

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
const result = confirmReservation(userInfo);
console.log(result);

// Spread Operator
//문제 1
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
combinedArray.push(100);
console.log(combinedArray);
// [1, 2, 3, 4, 5, 6]
const cloneArr = [...combinedArray];
console.log(cloneArr);
// [1, 2, 3, 4, 5, 6]

console.clear();

cloneArr.push(100);
console.log(cloneArr);
// [1, 2, 3, 4, 5, 6, 100]

// 문제 2
const obj1 = { name: "르탄이", age: 25 };
const obj2 = { name: "르순이", email: "rsoony@sparta.com" };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);
// {name: '르순이', age: 25, email: 'rsoony@sparta.com'}

// rest operator
// 문제 1
const person = { name: "Young", age: 35, job: "developer", password: "1234" };
// 여기에 코드를 작성합니다.
const { name, age, job } = person;
console.log(age);
console.log(name);
console.log(job);
const sampleObj = { name, age, job };
console.log(sampleObj);
//console.log(sampleObj); // => { name: 'Young', age: 35, job: "developer" }

// 단축 평가 (||)
// 유저 정보가 제공되지 않았을 때 기본 이름 제공
function getUsername(user) {
  return user.name || "신원미상";
}
console.log(getUsername({ name: "르탄이" })); //르탄이
console.log(getUsername({})); //신원미상

// 단축 평가 (??)
// 사용자가 로그인 상태이면 환영 메시지를 출력
let loggedIn = true;
let username = "르탄이";
loggedIn && console.log("환영합니다! " + username); //환영합니다! 르탄이

loggedIn = false;
loggedIn && console.log("환영합니다! " + username); //아무것도 출력되지 않음

// 단축평가 (||)
// 사용자가 로그인 상태이면 환영 메시지를 출력
loggedIn && console.log("환영합니다! " + username); //환영합니다! 르탄이

loggedIn = false;
loggedIn && console.log("환영합니다! " + username); //아무것도 출력되지 않음

// ?.
const user = {
  profile: {
    name: "르탄이",
    details: {
      age: 30,
      location: "서울시 강남구",
    },
  },
};

// 여기서 사용자의 나이를 접근하려면
console.log(user.profile?.details?.age);
// 30
console.log(user.profile.details.age);
// 30

// ??
// 사용자의 위치 설정이 없으면 기본 위치를 제공
let userLocation = null;
console.log(userLocation ?? "Unknown location"); // 출력: Unknown location

userLocation = "Seoul";
console.log(userLocation ?? "Unknown location"); // 출력: Seoul

// 사용자 입력이 0인 경우에도 0을 유효한 값으로 취급
const temperature = 0;
console.log(temperature ?? 25); // 출력: 0
