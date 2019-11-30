import React from 'react';
import Weather from './Weather';

const Country = ({ country }) =>  {
    const listLanguages = (country) => {
        const languages = country.languages.map(language => {
            console.log(language);
            return (<li key={language.iso639_1}>{language.name}</li>);
        });
        return languages;
    }
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

export default Country;