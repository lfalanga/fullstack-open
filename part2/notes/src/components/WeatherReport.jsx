import axios from "axios";
import { useEffect, useState } from "react";
import Toast from "../components/Toast";

const WeatherReport = (props) => {
  // console.log(`[WeatherReport.jsx]: props:`, props);
  const { country } = props;
  // console.log(`[WeatherReport.jsx]: country:`, country);
  // console.log(`[WeatherReport.jsx]: import.meta:`, import.meta);
  // console.log(`[WeatherReport.jsx]: import.meta.env:`, import.meta.env);
  // const someKey = import.meta.env.VITE_SOME_KEY;
  // console.log(`[WeatherReport.jsx]: someKey:`, someKey);
  const apiKey = import.meta.env.VITE_API_OPENWEATHERMAP_KEY;
  // console.log(`[WeatherReport.jsx]: apiKey:`, apiKey);
  // const apiURL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}`;
  const apiByCityURL = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${apiKey}`;
  // console.log(`[WeatherReport.jsx]: apiURL:`, apiURL);
  // console.log(`[WeatherReport.jsx]: apiByCityURL:`, apiByCityURL);
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState(null);
  const [toast, setToast] = useState({
    type: "info",
    message: `Fetching data from '${apiByCityURL}', please wait...`,
  });

  useEffect(() => {
    if (isLoading) {
      axios
        .get(apiByCityURL)
        .then((response) => {
          setWeather(response.data);
          // console.log(`[WeatherReport.jsx]: response:`, response.data);
          // handleToast(
          //   "success",
          //   `Response received, weather ${JSON.stringify(
          //     response.data,
          //     null,
          //     2
          //   )}.`
          // );
          handleToast(
            "success",
            `OpenWeatherMap info for '${country.capital}'.`
          );
        })
        .catch((error) => {
          const message = `Error while fetching data from '${apiByCityURL}', description: '${error}'.`;
          console.log(message);
          handleToast("error", message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const handleToast = (type, message) => {
    const newToast = {
      type: type,
      message: message,
    };
    setToast(newToast);
  };

  return (
    <div>
      <h5>Weather report</h5>
      <Toast type={toast.type} message={toast.message} />
      {isLoading ? (
        <h6>Loading...</h6>
      ) : (
        <div>
          <div
            id="weather-container"
            style={{
              backgroundImage: `url(http://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png)`,
            }}
          >
            <ul>
              {/* <li>
                <img
                  src={`http://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`}
                  alt={weather?.weather?.[0]?.description}
                />
              </li> */}
              <li><strong>Weather:</strong> {weather?.weather?.[0]?.description}</li>
              <li><strong>Temperature:</strong> {weather?.main?.temp}°C</li>
              <li><strong>Min temperature:</strong> {weather?.main?.temp_min}°C</li>
              <li><strong>Max temperature:</strong> {weather?.main?.temp_max}°C</li>
              <li><strong>Feels like:</strong> {weather?.main?.feels_like}°C</li>
              <li><strong>Humidity:</strong> {weather?.main?.humidity}%</li>
              <li><strong>Wind speed:</strong> {weather?.wind?.speed} m/s</li>
            </ul>
          </div>
        </div>
      )}
      {/* <ol>
        <li>{JSON.stringify(weather, null, 2)}</li>
        <li>{JSON.stringify(apiKey, null, 2)}</li>
        <li>
          <a href={apiURL} target="_blank" rel="noopener noreferrer">
            OpenWeatherMap apiURL
          </a>
        </li>
        <li>
          <a href={apiByCityURL} target="_blank" rel="noopener noreferrer">
            OpenWeatherMap apiByCityURL
          </a>
        </li>
      </ol> */}
    </div>
  );
};

export default WeatherReport;
