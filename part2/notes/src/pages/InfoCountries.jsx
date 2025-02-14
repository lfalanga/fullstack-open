import axios from "axios";
import { useEffect, useState } from "react";
import Toast from "../components/Toast";
import Debugging from "../components/Debugging";
import "../assets/css/countries.css";
import CountriesList from "../components/CountryList";
import Country from "../components/Country";
import SearchCountry from "../components/SearchCountry";

const InfoCountries = () => {
  const allCountriesURL = `https://studies.cs.helsinki.fi/restcountries/api/all`;
  const [isLoading, setIsLoading] = useState(true);
  const [all, setAll] = useState(null);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(null);
  const [country, setCountry] = useState(null);
  const [toast, setToast] = useState({
    type: "info",
    message: `Fetching data from '${allCountriesURL}', please wait...`,
  });
  const [output, setOutput] = useState({
    type: "output",
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit...`,
  });

  // const fooObject = {
  //   name: "John Doe",
  //   greetingFunction: "myFunction.toString()", // Add the function as a string
  // };
  // const myFunction = () => {
  //   console.log("Hello from myFunction!");
  // };

  const fooObject = { function: { arguments: "a,b,c", body: "return a*b+c;" } };

  useEffect(() => {
    if (isLoading) {
      axios
        .get(allCountriesURL)
        .then((response) => {
          // console.log("response received:", response);
          // console.log(
          //   `response received, total ${response.data.length} countries.`
          // );
          // console.log("response received, setting all countries.");
          setAll(response.data);
          handleToast(
            "success",
            `Response received, total ${response.data.length} countries founded.`
          );
        })
        .catch((error) => {
          const message = `Error while fetching data from '${allCountriesURL}', description: '${error}'.`;
          console.log(message);
          handleToast("error", message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    if (all && search) {
      // const results = all.filter((country) =>
      //   country.name.common.toLowerCase().includes(search.toLowerCase())
      // );
      const results = filterCountries(all, search);
      // console.log(`searching for ${search}, subtotal ${results.length} countries.`);
      setFiltered(results);
      handleToast(
        results.length <= 10 ? "success" : "info",
        `Searching for '${search}', subtotal ${results.length} countries.`
      );
    } else {
      // console.log(`effect [all, search] run, total ${all?.length} countries.`);
      setFiltered(null);
      if (all) {
        handleToast(
          "info",
          `Initialized filtered array, total ${all?.length} countries.`
        );
        handleOutput(
          "output",
          `Type in the search text, total ${all?.length} countries.`
        );
      }
    }
  }, [all, search]);

  useEffect(() => {
    if (filtered) {
      let message = `Filtering, subtotal ${filtered.length} countries.`;
      // console.log(`filtering, subtotal ${filtered.length} countries.`);
      const subtotal = Number(filtered.length);

      switch (true) {
        case subtotal === 1:
          message = `Matching country, '${filtered[0].name.common}'.`;
          handleToast("success", message);
          // console.log(`filtering 1 country, '${filtered[0].name.common}'.`);
          setCountry(filtered[0]);
          handleOutput("output", message);
          break;
        case subtotal <= 10:
          message = `Founded ${subtotal} matching countries: '${getAllCountryNames(
            filtered
          )?.join(", ")}'.`;
          // console.log(message);
          handleOutput("output", message);
          setCountry(null);
          break;
        case subtotal < 250:
          message = `Too many matches, founded ${subtotal} countries.`;
          handleOutput("output", message);
          setCountry(null);
          break;
        default:
          message = `We have new countries on Earth! Founded ${subtotal} countries.`;
          handleOutput("output", message);
          setCountry(null);
      }
    }
  }, [filtered]);

  const filterCountries = (countries, searchString) => {
    if (!searchString) {
      return countries; // Return all countries if search string is empty
    }

    const lowerCaseSearch = searchString.toLowerCase();
    const exactMatch = countries.find(
      (country) => country.name.common.toLowerCase() === lowerCaseSearch
    );

    if (exactMatch) {
      return [exactMatch]; // Return only the exact match if found
    } else {
      return countries.filter((country) =>
        country.name.common.toLowerCase().includes(lowerCaseSearch)
      ); // Otherwise, return partial matches
    }
  };

  const handleToast = (type, message) => {
    const newToast = {
      type: type,
      message: message,
    };
    setToast(newToast);
  };

  const handleOutput = (type, message) => {
    const newOutput = {
      type: type,
      message: message,
    };
    setOutput(newOutput);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const onSearch = (event) => {
    event.preventDefault();
  };

  // eslint-disable-next-line no-unused-vars
  const onReset = (event) => {
    setSearch("");
    setFiltered(null);
    setCountry(null);
    document.getElementById("country").focus();
  };

  const getAllCountryNames = (countries) => {
    return countries?.map((country) => country.name.common);
  };

  return (
    <div id="countries-container">
      <h3>studies.cs.helsinki.fi/restcountries</h3>
      <Toast type={toast.type} message={toast.message} />
      {isLoading && <h6>Loading...</h6>}
      {!isLoading && (
        <div>
          <SearchCountry
            onSearch={onSearch}
            onReset={onReset}
            handleChange={handleChange}
            search={search}
            all={all}
            filtered={filtered}
            getAllCountryNames={getAllCountryNames}
          />
          <Toast type={output.type} message={output.message} />
          {filtered && filtered.length > 1 && filtered.length <= 10 && (
            <CountriesList countries={filtered} setCountry={setCountry} />
          )}
          <Country country={country} />
        </div>
      )}
      <Debugging
        loading={isLoading}
        search={search}
        very-long-foo-variable-name="Lorem ipsum dolor sit amet. Test case to fix."
        fooObject={fooObject}
        country={country}
      />
    </div>
  );
};

export default InfoCountries;
