import { useEffect, useState } from "react";
import "../App.css";
import Header from "../components/Header";
import Body from "../components/Body";
import CountriesSelector from "../components/CountriesSelector";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../components/useLocalStorage";
const countriesList = [
  "Doha, Qatar",
  "Minsk, Belarus",
  "Amman, Jordan",
  "New York, USA",
];
export default function Main({ showSettings, setShowSettings }) {
  const navigate = useNavigate();
  if (!localStorage?.getItem("user")) {
    navigate("login");
  }
  const [selectedCountries, setSelectedCountries] = useLocalStorage([]);
  const [showCountriesSelector, setShowCountriesSelector] = useState(false);

  return (
    <div className="App">
      {showCountriesSelector && (
        <CountriesSelector
          showCountriesSelector={showCountriesSelector}
          setShowCountriesSelector={setShowCountriesSelector}
          countriesList={countriesList}
          selectedCountries={selectedCountries}
          setSelectedCountries={setSelectedCountries}
        />
      )}
      <Header showSettings={showSettings} setShowSettings={setShowSettings} />
      <Body
        selectedCountries={selectedCountries}
        setSelectedCountries={setSelectedCountries}
        setShowCountriesSelector={setShowCountriesSelector}
      />
    </div>
  );
}
