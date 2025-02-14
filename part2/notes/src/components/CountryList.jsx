import { Link } from "react-router-dom";

const CountriesList = ({ countries, setCountry }) => {
  return (
    <div>
      <h5>CountriesList</h5>
      <ol>
        {countries.map((c) => (
          <li key={c.cca3}>
            <Link onClick={() => setCountry(c)}>{c.name.common}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default CountriesList;
