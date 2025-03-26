import { Link, useLocation, useParams } from "react-router-dom";
import "./CountryDetail.css";
import { useEffect, useState } from "react";
import ShimmerLoader from "./ShimmerLoader";

import { useTheme } from "./hooks/useTheme";

const CountryDetail = () => {
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState(false);
  const { state } = useLocation();
  const { country } = useParams();
  // const isDark = useOutletContext(); // first method
  const [isDark] = useTheme();

  function updateCountryData(data) {
    setCountryData({
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName || {})[0]?.common,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      image: data.flags.svg,
      tld: data.tld,
      languages: Object.values(data.languages || {}).join(", "),
      currencies: Object.values(data.currencies || {})
        .map((currency) => currency.name)
        .join(", "),
      borders: [],
    });

    if (!data.borders) {
      data.borders = [];
    }

    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common);
      })
    ).then((borders) => {
      setTimeout(() =>
        setCountryData((prevState) => ({ ...prevState, borders }))
      );
    });
  }

  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data);
      })
      .catch((err) => {
        setError(true);
      });
  }, [country]);

  if (error) {
    return <CountryNotFound />;
  }

  return (
    <main className={`${isDark && "dark"}`}>
      <div className="country-details-container">
        <Link to="/">
          <span className="back-button">
            <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
          </span>
        </Link>
        {countryData === null ? (
          <ShimmerLoader />
        ) : (
          <div className="country-details">
            <img src={countryData.image} alt={countryData.alt} />
            <div className="details-text-container">
              <h1>{countryData.name}</h1>
              <div className="details-text">
                <p>
                  <b>Native Name: </b>
                  <span className="native-name">
                    {countryData.nativeName || countryData.name}
                  </span>
                </p>
                <p>
                  <b>Population: </b>
                  <span className="population">{countryData.population}</span>
                </p>
                <p>
                  <b>Region: </b>
                  <span className="region">{countryData.region}</span>
                </p>
                <p>
                  <b>Sub Region: </b>
                  <span className="sub-region">{countryData.subregion}</span>
                </p>
                <p>
                  <b>Capital: </b>
                  <span className="capital">{countryData.capital}</span>
                </p>
                <p>
                  <b>Top Level Domain: </b>
                  <span className="top-level-domain">
                    {countryData.topLevelDomain}
                  </span>
                </p>
                <p>
                  <b>Currencies: </b>
                  <span className="currencies">{countryData.currencies}</span>
                </p>
                <p>
                  <b>Languages: </b>
                  <span className="languages">{countryData.languages}</span>
                </p>
              </div>
              <div className="border-countries">
                <b>Border Countries: </b>&nbsp;
                {countryData.borders.length > 0 ? (
                  countryData.borders.map((border) => (
                    <Link
                      key={border}
                      to={`/${border}`}
                      className="border-link"
                    >
                      {border}
                    </Link>
                  ))
                ) : (
                  <span>N/A</span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default CountryDetail;
