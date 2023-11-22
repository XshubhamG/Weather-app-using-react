import CurrentWeather from "./components/CurrentWeather";
import Search from "./components/Search";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import { useState } from "react";
import Forecast from "./components/Forecast";

const App = () => {
  // State
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  // handleOnSearchChange
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (res) => {
        const weatherRes = await res[0].json();
        const forecastRes = await res[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherRes });
        setForecast({ city: searchData.label, ...forecastRes });
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <h1>Daily City Weather</h1>
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </div>
    </main>
  );
};

export default App;
