import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import ShimmerCard from "./ShimmerCard"; // Import shimmer card

const CountriesList = ({ query }) => {
  const [CountriesData, setCountriesData] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch(() => setLoading(false)); // Handle errors
  }, []);

  return (
    <div className="countries-container">
      {loading
        ? <ShimmerCard/> // Show shimmer cards
        : CountriesData.filter((country) =>
            country.name.common.toLowerCase().includes(query)||country.region.toLowerCase().includes(query)
          ).map((country, index) => (
            <CountryCard
              key={index}
              image={country.flags.svg}
              alt={country.flags.alt}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}
              data={country}
            />
          ))}
    </div>
  );
};

export default CountriesList;

