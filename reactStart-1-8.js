// promise
// 비동기 작업의 최종 완료 또는 실패를 나타내는 객체
// 비동기 작업이 수행될 때 결과값을 받기위한 약속
// Promise 상태
// pending (대기중)
// 초기상태
// 성공 또는 실패가 결정되지 않은 상태
// fulfilled (이행됨)
// 프로미스가 결과 값을 반환한 상태
// rejected (거부됨)
//연산이 실패하거나 오류가 발생한 상태
// .then(), .catch()나 finally() 메소드로
// 결과를 처리할 수 있음
async function fetchData() {
  const data = await fetch("https//jsonplaceholder.typicode.com/posts");
  const json = await data.json();
  console.log(json);
}
fetchData();
// 15번째 줄에서 await을 빼면
// 콘솔에 Promise {<pending>}라고 뜨는
// 에러가 생김
// data.json();을 요청한 직후의 값을
// 기다리지 못했기 때문이다.
// 그러기 위해서 await을 써줘야만 한다.
