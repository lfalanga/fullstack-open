import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>fullstackopen.com</h1>
      <Link to="/">Notes</Link>{" : "}
      <a href="/skeleton.html">Static</a>{" : "}
      <Link to="/courses">Courses</Link>{" : "}
      <Link to="/phonebook">PhoneBook</Link>{" : "}
      <Link to="/exchange">ExchangeRate</Link>{" : "}
      <Link to="/countries">InfoCountries</Link>{" : "}
      <Link to="/foo">Foo</Link>
      <hr />
    </div>
  );
};

export default Header;
