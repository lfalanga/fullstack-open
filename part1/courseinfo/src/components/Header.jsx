import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>fullstackopen.com</h1>
      <p>Learning routes in Vite project</p>
      <Link to="/">Home</Link>{" : "}
      <a href="/skeleton.html">Static</a>{" : "}
      <Link to="/state">useState</Link>{" : "}
      <Link to="/complex">StateComplex</Link>{" : "}
      <Link to="/event">EventHandling</Link>{" : "}
      <Link to="/copilot">Copilot</Link>{" : "}
      <Link to="/unicafe">Unicafe</Link>{" : "}
      <Link to="/anecdotes">Anecdotes</Link>{" : "}
      <Link to="/foo">Foo</Link>
    </div>
  );
};

export default Header;
