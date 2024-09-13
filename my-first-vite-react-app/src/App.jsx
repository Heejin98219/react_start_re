const App = () => {
  const title = "은동그라미";
  return (
    <div>
      <h1>추출 테스트</h1>
      {/* title을 내려준다고 가정*/}
      <Todo title={title} />
    </div>
  );
};

export default App;

{
  /* 자식컴포넌트 */
}
const Todo = (p) => {
  console.log("props 값은? >" + p);
  return (
    <div>
      <h3>{p.title}</h3>Todo입니당
    </div>
  );
};
