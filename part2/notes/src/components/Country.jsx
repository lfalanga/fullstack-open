import WeatherReport from "./WeatherReport";

const Country = ({ country }) => {
  return (
    <div id="country-container">
      <h5>Country</h5>
      {country ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Name</strong>
                </td>
                <td>{country.name.common}</td>
              </tr>
              <tr>
                <td>
                  <strong>Capital</strong>
                </td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>
                  <strong>Population</strong>
                </td>
                <td>{country.population}</td>
              </tr>
              <tr>
                <td>
                  <strong>Area</strong>
                </td>
                <td>{country.area}</td>
              </tr>
              <tr>
                <td>
                  <strong>Languages</strong>
                </td>
                <td>{Object.values(country.languages).join(", ")}</td>
              </tr>
              <tr>
                <td>
                  <strong>Flag</strong>
                </td>
                <td>
                  <img
                    src={country.flags.png}
                    alt={`flag of ${country.name.common}`}
                    title={`flag of ${country.name.common}`}
                    onClick={() => window.open(country.flags.svg, "_blank")}
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <WeatherReport country={country} />
        </>
      ) : (
        <h6>Nothing yet...</h6>
      )}
    </div>
  );
};

export default Country;
