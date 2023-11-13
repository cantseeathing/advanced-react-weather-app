import { useEffect } from "react";

export default function CountriesSelector({
  showCountriesSelector,
  setShowCountriesSelector,
  countriesList,
  selectedCountries,
  setSelectedCountries,
}) {
  var x_end;
  var y_end;
  function handleCountrySelection(country) {
    if (selectedCountries?.includes(country)) {
      setSelectedCountries((countries) =>
        countries.filter((x) => x !== country)
      );
    } else {
      setSelectedCountries((countries) => [...countries, country]);
    }
  }
  useEffect(
    function () {
      localStorage.setItem("selected", JSON.stringify([...selectedCountries]));
    },
    [selectedCountries]
  );
  function controlSettingsWindowMouseDown(e) {
    document.addEventListener("mousemove", moveSettingsWindow);
  }
  function controlSettingsWindowMouseUp(e) {
    x_end = e.clientX;
    y_end = e.clientY;
    const settingsWindow = document.querySelector(".countries-selection");
    settingsWindow.style.left = x_end + "px";
    settingsWindow.style.top = y_end + "px";
    document.removeEventListener("mousemove", moveSettingsWindow);
    settingsWindow.style.cursor = "default";
  }
  function moveSettingsWindow(e) {
    const settingsWindow = document.querySelector(".countries-selection");
    settingsWindow.style.cursor = "grabbing";
    settingsWindow.style.left = e.clientX + "px";
    settingsWindow.style.top = e.clientY + "px";
  }
  return (
    <div className="countries-selection-overlay">
      <div className="countries-selection">
        <div
          //   onMouseDown={(e) => controlSettingsWindowMouseDown(e)}
          //   onMouseUp={(e) => controlSettingsWindowMouseUp(e)}
          className="countries-selection-header"
          draggable="true"
        >
          <p>Countries List</p>
          <button onClick={() => setShowCountriesSelector(false)}>
            &times;
          </button>
        </div>
        <div className="countries-selection-body">
          {countriesList.map((row) => (
            <p
              onClick={() => handleCountrySelection(row)}
              className={
                selectedCountries.includes(row)
                  ? "selected-country"
                  : "countries-list"
              }
            >
              {row}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
