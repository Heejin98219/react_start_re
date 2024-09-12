const User = (props) => {
  return <div>유저님 {props.children}</div>;
};

const App = () => {
  return <User abc="123">안녕하세요!!!</User>;
};
export default App;
