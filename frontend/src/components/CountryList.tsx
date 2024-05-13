import { useQuery, gql } from '@apollo/client';

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      name
      emoji
    }
  }
`;

function CountryList() {
    const { data, loading, error } = useQuery(GET_COUNTRIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            {data.countries.map(({ name, emoji }) => (
                <div key={name}>
                    {emoji} {name}
                </div>
            ))}
        </div>
    );
}

export default CountryList;
