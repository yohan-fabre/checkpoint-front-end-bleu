import { useMutation, gql } from '@apollo/client';
import { useState } from 'react';
import './AddCountryForm.css';

const ADD_COUNTRY = gql`
  mutation AddCountry($name: String!, $code: String!, $emoji: String!) {
    addCountry(name: $name, code: $code, emoji: $emoji) {
      name
    }
  }
`;

function AddCountryForm() {
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [emoji, setEmoji] = useState('');
    const [addCountry, { data, loading, error }] = useMutation(ADD_COUNTRY);

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    const handleSubmit = (e) => {
        e.preventDefault();
        addCountry({
            variables: { name, code, emoji }
        });
        setName('');
        setCode('');
        setEmoji('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Name"
                type="text"
            />
            <input
                value={code}
                onChange={e => setCode(e.target.value)}
                placeholder="Code"
                type="text"
            />
            <input
                value={emoji}
                onChange={e => setEmoji(e.target.value)}
                placeholder="Emoji"
                type="text"
            />
            <button type="submit">Add Country</button>
        </form>
    );
}

export default AddCountryForm;
