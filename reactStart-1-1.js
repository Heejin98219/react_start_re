// 변수
// var 키워드는 사용을 지양
// 데이터 저장
// 관리의 필요성
// 사용자로부터 받은 입력을 처리
// 계산 결과를 재사용해야 할 때
// 프로그램의 복잡성 관리
let numberOfUsers = 50;
numberOfUsers = numberOfUsers + 5;
console.log("Total users: " + numberOfUsers);
// Total users: 55
// 변수가 없다면 모든 값을 기입해야 하므로
// 코드가 복잡해지고 오류 가능성이 높아져서
// 프로그램의 확장성과 유지보수성이 떨어지는데
// 변수를 사용하면 코드의 가독성이 높아지고
// 수정이 필요할 때 적은 변경으로 원하는 결과를
// 얻을 수 있다.
// var, let
// 재할당 가능
// const
// 재할당 불가능
// 상수 선언할 때 사용
// 값이 변경되지 않는 변수를 명확하게 표현
// 값 변경으로 인한 버그 예방 가능
// let과 const를 고를 때에는 먼저 const
// 하지만, 재할당이 필요한 경우에는 let
function testFunction() {
  var test = "any words";
  if (true) {
    var test = "changed value";
  }
  console.log(test);
}
testFunction();
// changed value
// 호이스팅
// let, const는 초기값을 undefined로
// 호이스팅할 때 할당하지 않기 때문임
console.log(testValue);
var testValue = "hello world";
// var키워드는 사용하면 안 되는 이유
// 범위 관리의 어려움
// 예상치 못한 범위에서 사용될 수 있어
// 버그를 초래할 가능성이 있음
// 가독성 문제
// 호이스팅
// 논리적인 흐름에서 벗어남

// 스코프: 유효 범위
// 주요 스코프 유형
// 1. 글로벌 스코프 (어디서든 사용할 수 있는),
// 2. 블록 스코프 (중괄호 영역에서 사용할 수 있는),
// 3. 함수 스코프 (function 키워드로 감싸진 영역 )
// code ( Block ( Function ( Global
// 글로벌 변수는 전체 코드에서 접근할 수 있음
// 블록 스코프 변수 (let, const)는
// 선언된 블록 내에서만 접근할 수 있음
// 함수 스코프 변수(var)는 선언된 함수 내에서만 유효
let blockScopeVariable = "Available only in this block";
if (true) {
  var blockScope = "Visible inside this block";
  console.log(blockScope);
}
console.log(blockScope);
// Visible inside this block"
console.log(blockScopeVariable);
// Available only in this block
