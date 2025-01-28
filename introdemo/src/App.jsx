function Hello(props) {
  console.log("<Hello />", props);
  return (
    <div>
      <p>
        Hello {props.name}, your age is: {props.age}
      </p>
    </div>
  );
}

function Footer() {
  console.log("Hello from Footer!");
  return (
    <div>
      <p>
        <strong>introdemo</strong> app created by{" "}
        <a href="https://lfalanga.github.io" target="_blank">
          lfalanga.github.io
        </a>
      </p>
    </div>
  );
}

function App() {
  const beatles = [
    { name: "John", age: 25 },
    { name: "Paul", age: 28 },
    { name: "George", age: 22 },
    { name: "Ringo", age: 27 },
  ];
  const producers = [ "Brian Epstein", "George Martin" ];
  const now = new Date();
  const a = 10;
  const b = 20;
  const age = 25;
  console.log(now, a + b);
  console.log("Hello from App!");
  return (
    <>
      <div>
        <h1>introdemo</h1>
        <Hello name={beatles[0].name} age={age} />
        <Hello name={beatles[1].name} age={beatles[1].age} />
        <Hello name={beatles[2].name} age={beatles[2].age} />
        <Hello name={beatles[3].name} age={beatles[3].age} />
        <p>{producers}</p>
        <p>
          {a} plus {b} is {a + b}
        </p>
        <Footer />
      </div>
    </>
  );
}

export default App;
