import React from 'react';
import CountrySpac from '../CountrySpac/CountrySpac';

const CountryDetail = (country, handleVisitedCountry, handleVisitedFlags) => {
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            <CountrySpac
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags = {handleVisitedFlags}
            ></CountrySpac>
        </div>
    );
};

export default CountryDetail;