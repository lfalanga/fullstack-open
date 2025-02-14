function Hello(props) {
  return (
    <div>
      <p>Hello world {props.name}</p>
    </div>
  );
}

function App() {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);
  console.log("Hello from component!");
  return (
    <>
      <div>
        <h1>Greetings</h1>
        <Hello name="John" />
        <Hello name="George" />
        <Hello name="Ringo" />
        <p>
          {a} plus {b} is {a + b}
        </p>
      </div>
    </>
  );
}

export default App;
