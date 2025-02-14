import Debugging from "../components/Debugging";

// eslint-disable-next-line no-unused-vars
const Foo = (params) => {
  const number = 42;
  const string = "Hello, world!";
  const boolean = true;
  const array = [1, 2, 3, 4, 5];
  const object = { key1: "value1", key2: "value2", key3: "value3" };

  const jsonObject = {
    number: 42,
    string: "Hello, world!",
    boolean: true,
    array: [1, 2, 3, 4, 5],
    object: { key1: "value1", key2: "value2", key3: "value3" },

    greet: function (name) {
      return `Hello, ${name}!`;
    },
    add: function (a, b) {
      return a + b;
    },
    multiply: function (a, b) {
      return a * b;
    },
  };

  return (
    <div>
      <h3>Foo</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Debugging
        number={number}
        string={string}
        boolean={boolean}
        array={array}
        object={object}
        jsonObject={jsonObject}
      />
    </div>
  );
};

export default Foo;
