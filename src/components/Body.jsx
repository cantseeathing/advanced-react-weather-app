import CountryCard from "./CountryCard";

export default function Body({
  selectedCountries,
  setSelectedCountries,
  setShowCountriesSelector,
}) {
  return (
    <div className="app-body">
      <img
        className={
          selectedCountries.length === 0 ? "add-image big" : "add-image"
        }
        src="./icons/add.svg"
        alt="Add"
        onClick={() => setShowCountriesSelector((state) => !state)}
      />
      {selectedCountries.length !== 0 && (
        <div className="countries-cards">
          {selectedCountries.map((elm) => (
            <CountryCard country={elm} />
          ))}
        </div>
      )}
    </div>
  );
}
