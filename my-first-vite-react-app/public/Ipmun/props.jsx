function App() {
  return <GrandFather />;
}

function GrandFather() {
  const name = "르탄이";
  return <Mother name={name} />;
}

function Mother(props) {
  const name = props.name;
  return <Child name={name} />;
}

function Child(props) {
  const name = props.name;
  return <div>{name}</div>;
}

export default App;
