import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './Weather';

function Countries(props) {
    const { filter } = props;
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        console.log("get https://restcountries.eu/rest/v2/all")
        axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(response => {
            console.log("response:", response.data);
            setCountries(response.data);
          });
      }, []);

    const filterCountries = () => {
        const filteredCountryList = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()));
        console.log("filtered countries", filteredCountryList);
        return filteredCountryList;
    }

    const displayCountryDetail = (country) =>  {
        const flagAlt = `Flag of ${country.name}`;
        return (
            <div>
                <h1 key={country.alpha2Code}>{country.name}</h1>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>
                <h2>Languages</h2>
                <ul>{listLanguages(country)}</ul>
                <img src={country.flag} alt={flagAlt} width="200"></img>
                <Weather city={country.capital} />
            </div>
        );
    }

    const listLanguages = (country) => {
        const languages = country.languages.map(language => {
            console.log(language);
            return (<li key={language.iso639_1}>{language.name}</li>);
        });
        return languages;
    }

    const listCountries = (countriesList) => {
        let list = countriesList.map(country => {
            return (
            <li key={country.alpha3Code}>
                {country.name}
                <button onClick={showCountry(country)}>Show</button>
            </li>
            )}
        );
        return <ul>{list}</ul>
    }

    const searchResult = (filteredCountryList) => {
        let searchResult;
        if (filteredCountryList.length > 10) {
            searchResult = "Too many matches, please be more specific.";
        } else if (filteredCountryList.length > 1) {
            searchResult = listCountries(filteredCountryList);
        } else if (filteredCountryList.length === 1) {
            searchResult = displayCountryDetail(filteredCountryList[0]);
        }
        console.log("searchResult:", searchResult);
        return searchResult;
    }

    const showCountry = (country) => () => {
        props.changeFilter(country.name);
    }

    return (
        <div>{searchResult(filterCountries())}</div>
    );
}

export default Countries;
