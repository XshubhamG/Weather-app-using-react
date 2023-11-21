const CurrentWeather = ({ data }) => {
  const {
    city = data.city,
    description = data.weather[0].description,
    icon = data.weather[0].icon,
    temperature = data.main.temp,
    feels_like = data.main.feels_like,
    humidity = data.main.humidity,
    pressure = data.main.pressure,
  } = data;

  return (
    <div className="weather">
      <section className="top">
        <div>
          <p className="city">{city}</p>
          <p className="weather-description">{description}</p>
        </div>
        <img src={`icons/${icon}.png`} className="weather-icon" alt="weather" />
      </section>

      <section className="bottom">
        <p className="temperature">{Math.round(temperature)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feel like </span>
            <span className="parameter-value">{Math.round(feels_like)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{pressure} hpa</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurrentWeather;
