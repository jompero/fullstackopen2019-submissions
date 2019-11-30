import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './Country'

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
        const filteredCountryList = countries.filter(country => {
            return country.name.toLowerCase().includes(filter.toLowerCase())
        });
        console.log("filtered countries", filteredCountryList);
        return filteredCountryList;
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
        if (filteredCountryList.length > 10) {
            return "Too many matches, please be more specific.";
        } else if (filteredCountryList.length > 1) {
            return listCountries(filteredCountryList);
        } else if (filteredCountryList.length === 1) {
            return <Country country={filteredCountryList[0]} />
        }
        return "No countries found with given name.";
    }

    const showCountry = (country) => () => {
        props.changeFilter(country.name);
    }

    return (
        <div>{searchResult(filterCountries())}</div>
    );
}

export default Countries;
