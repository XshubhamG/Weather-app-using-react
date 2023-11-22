import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  return (
    <>
      <label htmlFor="title" className="title">
        Daily
      </label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, index) => {
          const {
            icon = item.weather[0].icon,
            description = item.weather[0].description,
            min_temp = item.main.temp_min,
            max_temp = item.main.temp_max,
            pressure = item.main.pressure,
            humidity = item.main.humidity,
            cloud = item.clouds.all,
            sea_level = item.main.sea_level,
            feels_like = item.main.feels_like,
          } = item;

          return (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img
                      src={`icons/${icon}.png`}
                      alt="weather"
                      className="icon-small"
                    />
                    <label className="day">{forecastDays[index]}</label>
                    <label className="description">{description}</label>
                    <label className="min-max">
                      {Math.round(min_temp)}°C / {Math.round(max_temp)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>

              <AccordionItemPanel>
                <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <p>Pressure</p>
                    <p>{pressure}hPa</p>
                  </div>
                  <div className="daily-details-grid-item">
                    <p>Humidity</p>
                    <p>{humidity}%</p>
                  </div>
                  <div className="daily-details-grid-item">
                    <p>Cloud</p>
                    <p>{cloud}%</p>
                  </div>
                  <div className="daily-details-grid-item">
                    <p>Sea Level</p>
                    <p>{sea_level}m</p>
                  </div>
                  <div className="daily-details-grid-item">
                    <p>Feels like</p>
                    <p>{Math.round(feels_like)}°C</p>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};

export default Forecast;
