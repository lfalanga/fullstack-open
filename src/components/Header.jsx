import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>fullstackopen.com</h1>
      <Link to="/">Home</Link>{" : "}
      <Link to="/foo">Foo</Link>{" : "}
      <a href="/static.html">Static</a>
      <hr />
    </div>
  );
};

export default Header;
