// push()
// 배열.push()
// 배열에 요소 추가
const fruits = ["Apple", "Banana"];
console.log(fruits.push("orange"));
// pop
// 배열.pop()
// 배열의 마지막 요소 출력
console.log(fruits.pop());
// orange
// map
// 배열.map(콜백함수())
// 원본 배열에서 각 요소를 가공한 새로운 배열을 리턴하는 함수
// 1) 배열 내의 모든 요소 각각에 대해
// 2) 주어진 함수를 호출한 결과를 모아
// 3) 새로운 배열을 반환
const numbers = [1, 2, 3, 4, 5];
const sqared = numbers.map(function (num) {
  return num * num;
});
// [1, 4, 9, 16, 25];
console.log(sqared);
// filter
// 배열.filter(콜백함수())
// 변수를 선언해서 사용해야 함
const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log(evenNumbers);
// [2, 4]
console.clear();
// reduce
// reduce(콤백함수(누적된 값, 일반 값))
// 배열의 각 요소에 대한 함수를 실행하고 결과를 누적해서 반환
// 숫자던 배열이던 객체던 하나의 값으로 줄여 return하는 함수
// 예) 숫자들이 모여 있는 배열에서 모든 숫자를 더하기
// 예) 가장 큰 숫자 찾기
// (누적기)
numbers.reduce(function (누적값, 일반값) {
  console.log("------");
  console.log(누적값);
  console.log(일반값);
});
// ------
// 1 → 최초 누적된 값
// 2 → 두번째 요소
// ------
// undefined
// 3
// ------
// undefined
// 4
// ------
// undefined
// 5
// 처음 reduce를 할 때는
// 첫번째 요소가 누적된 값,
// 두번째 요소가 일반값에 담김
// 여기서 주목할 것 두가지!!
// map() 이나 filter()의 경우,
// 요소의 갯수만큼 도니까 5번 돌았겠지만
// reduce는
// 첫번째 '------'부터 두번째 '------'까지 한 번,
// 2부터 세번째 '------'까지 두번,
// 3부터 네번째 '------'까지 세번,
// 네번째 '------'부터 5까지 네 번 돌았다.
// 왜냐하면,
// const numbers = [1, 2, 3, 4, 5]; 에서
// 1부터 2까지 한 번, 3, 4, 5까지 한 번씩 해서
// 총 네 번이기 때문이다.
// 첫번째 요소 1은 누적된 값,
// 두번째 요소 2는 일반 값,
// 세번째, 네번째, 다섯번째의 3, 4, 5도
// 일반값에 잘 들어갔다.
// 하지만 누적된 값은 두번째 순회할 때부터
// undefined가 나오기 시작한다.
// 그래서 로직을
const result = numbers.reduce(function (누적값, 일반값) {
  console.log("------");
  console.log(누적값);
  console.log(일반값);
  return 누적값 + 일반값;
});
// 이렇게 바꾼다면
// ------
// 1 (첫번째 값)
// 2
// ------
// 3 (첫번째 값)
// 3
// ------
// 6 (첫번째 값)
// 4
// ------
// 10 (첫번째 값)
// 5
// return에서 말하고 있는 값은
// 첫번째 요소들에 해당되는 누적된 값
// return문에서 말한 그 값이
// 다음에 순회할 때
// 바로 누적된 값을 들어오는 것이다.
// 그래서 '누적기' 라고도 함

// sort
// 오름차순 정렬
// 배열.sort(function(a,b){return b-a})
// 내림차순 정렬
// 배열.sort(function(a,b){return a-b})
// 배열 순서를 변경
// sort()내 아무 숫자를 넣지 않으면 문자열로 인식함
console.log(fruits);
// ['Banana', 'Orange', 'Apple', 'Mango]
console.log(fruits.sort());
// ['Apple', 'Banana','Mango, 'Orange']
numbers.sort();
console.log(numbers);
// [1, 100, 25, 40, 5];
