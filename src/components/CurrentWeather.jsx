const CurrentWeather = () => {
  return (
    <div className="weather">
      <section className="top">
        <div>
          <p className="city">Delhi</p>
          <p className="weather-description">Sunny</p>
        </div>
        <img src="icons/01d.png" className="weather-icon" alt="weather" />
      </section>

      <section className="bottom">
        <p className="temperature">18°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feel like </span>
            <span className="parameter-value">22°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">2m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">15%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">15 hpa</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurrentWeather;
