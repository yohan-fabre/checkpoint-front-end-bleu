import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import './CountryDetails.css';

const GET_COUNTRY_DETAILS = gql`
  query GetCountryDetails($code: ID!) {
    country(code: $code) {
      name
      emoji
      code
      continent {
        name
      }
    }
  }
`;

function CountryDetails() {
    const { code } = useParams();
    const { data, loading, error } = useQuery(GET_COUNTRY_DETAILS, {
        variables: { code },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div className="country-detail-container">
            <img src={`https://flagcdn.com/w320/${data.country.code.toLowerCase()}.png`} alt={`Flag of ${data.country.name}`} className="country-flag" />
            <div className="country-info">
                <p>Name: {data.country.name} ({data.country.code})</p>
                <p>Continent: {data.country.continent.name}</p>
            </div>
        </div>
    );
}

export default CountryDetails;
