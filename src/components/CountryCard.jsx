import { useEffect, useState } from "react";
import CardLoader from "./CardLoader";
const API_KEY = "a8a33ec79eaa1b91cc0678875cb2b1c7";
export default function CountryCard({ country }) {
  const city = country.split(", ")[0];
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  console.log("city: ", city);
  useEffect(
    function () {
      setLoading(true);
      fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .then((res) => {
          let geoLocation = res[0];
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${geoLocation?.lat}&lon=${geoLocation?.lon}&appid=${API_KEY}&units=metric`
          )
            .then((res) => res.json())
            .then((res) => {
              setLoading(false);
              console.log(res);
              setData((data) => res);
            });
        });
    },
    [city]
  );

  if (loading) return <CardLoader />;
  return (
    <div className="country-card">
      <p className="country-name">{country}</p>
      <img
        className="weather-status-img"
        src={
          "https://openweathermap.org/img/wn/" +
          data.weather.at(0).icon +
          ".png"
        }
        alt={data?.weather?.id}
      />
      <p className="weather-data">{data.main.temp} C</p>
      <p className="weather-data">{data.main.humidity}% Humidity</p>
    </div>
  );
}
