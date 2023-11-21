import CurrentWeather from "./components/CurrentWeather";
import Search from "./components/Search";

const App = () => {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
};

export default App;
