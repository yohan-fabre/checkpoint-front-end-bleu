import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

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
    let { code } = useParams();
    const { data, loading, error } = useQuery(GET_COUNTRY_DETAILS, {
        variables: { code },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            <h1>{data.country.name} {data.country.emoji}</h1>
            <p>Code: {data.country.code}</p>
            <p>Continent: {data.country.continent.name}</p>
        </div>
    );
}

export default CountryDetails;
