import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);


    const handleVisted = () => {
        setVisited(!visited)
    }

    // console.log(handleVisitedFlags)
    // const passWithParams = () => handleVisitedCountry(country); 

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h4 style={{color: visited ? 'blue': 'black'}}>Name: {name?.common} </h4>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark as visit</button>
            <br />
            <button onClick={() =>handleVisitedFlags(country.flags.png)}>Add a flag</button>
            <br />
            <button onClick={handleVisted}>{visited ? 'visited' : 'Going'}</button>
            {visited ? ' I have visited this country.' : ' I want to visit'}
            <hr />
            <CountryDetail
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryDetail>
        </div>
    );
};

export default Country;