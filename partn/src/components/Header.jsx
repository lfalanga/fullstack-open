import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>fullstackopen.com</h1>
      <Link to="/">PartN</Link>{" : "}
      <Link to="/foo">Foo</Link>
      <hr />
    </div>
  );
};

export default Header;
