import React from 'react';
import { useQuery, gql } from '@apollo/client';
import './CountryList.css';

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      name
      emoji
      code
    }
  }
`;

function CountryList() {
    const { data, loading, error } = useQuery(GET_COUNTRIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div className="country-list">
            {data.countries.map(country => (
                <div key={country.code} className="country-item">
                    <span className="country-emoji">{country.emoji}</span>
                    <span className="country-name">{country.name}</span>
                </div>
            ))}
        </div>
    );
}

export default CountryList;
