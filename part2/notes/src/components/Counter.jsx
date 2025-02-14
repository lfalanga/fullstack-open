const Counter = ({ counter, incrementCounter, resetCounter }) => {
  return (
    <div>
      <h5>Counter</h5>
      <pre>
        <code>counter = {counter}</code>
      </pre>
      <p>
        <button onClick={incrementCounter}>Increment</button>{" "}
        <button onClick={resetCounter}>Reset</button>
      </p>
    </div>
  );
};

export default Counter;
