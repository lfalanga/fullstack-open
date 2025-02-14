import axios from "axios";
import { useEffect, useState } from "react";

const ExchangeRate = () => {
  const [value, setValue] = useState("");
  const [rates, setRates] = useState({});
  const [currency, setCurrency] = useState(null);

  useEffect(() => {
    console.log("effect run, currency is now", currency);

    // skip if currency is not defined
    if (currency) {
      console.log("fetching exchange rates...");
      axios
        .get(`https://open.er-api.com/v6/latest/${currency}`)
        .then((response) => {
          if (response.data.result === "success")
            setRates(response.data.rates);
          else
            setRates(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [currency]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (event) => {
    event.preventDefault();
    setCurrency(value);
  };

  return (
    <div>
      <h3>exchangerate-api.com</h3>
      <form onSubmit={onSearch}>
        <label htmlFor="currency">Currency:</label>
        <input
          type="text"
          id="currency"
          name="currency"
          placeholder="e.g.: usd, eur, aud..."
          value={value}
          onChange={handleChange}
        />
        <br />
        <button type="submit">exchange rate</button>
      </form>
      <pre><code>{JSON.stringify(rates, null, 2)}</code></pre>
    </div>
  );
};

export default ExchangeRate;
