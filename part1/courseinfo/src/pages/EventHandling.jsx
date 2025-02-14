import { useState } from "react";

// Created using GitHub Copilot.
const Foo = () => {
  return <div className="foo">Foo Component</div>;
};

// Created using GitHub Copilot.
const InlineFoo = () => {
  return <div className="inline-foo">Inline Foo Component</div>;
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const EventHandling = () => {
  const [value, setValue] = useState(10);

  const handleClick = () => {
    console.log("clicked the button");
    setValue(0);
  };

  const hello = (who) => () => {
    console.log("hello", who);
  };

  const setToValue = (newValue) => () => {
    console.log("value now", newValue);
    setValue(newValue);
  };

  // DO NOT DEFINE COMPONENTS INSIDE ANOTHER COMPONENT.
  const Display = (props) => <div>{props.value}</div>;

  return (
    <div>
      <h3>EventHandling</h3>
      <Foo />
      <InlineFoo />
      <Display value={value} />
      <p>{value}</p>
      <button onClick={handleClick}>button</button>
      <br />
      <button onClick={hello("world")}>world</button>
      <button onClick={hello("react")}>react</button>
      <button onClick={hello("function")}>function</button>
      <br />
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
      <br />
      {/* Passing Event Handler to Child components. */}
      <Button onClick={setToValue(1000)} text="thousand++" />
      <Button onClick={setToValue(0)} text="reset++" />
      <Button onClick={setToValue(value + 1)} text="increment++" />
      <br />
      {/* Created using GitHub Copilot. */}
      <Button onClick={setToValue(0)} text="reset state" />
    </div>
  );
};

export default EventHandling;
