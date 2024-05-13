import { useMutation, gql } from '@apollo/client';

const ADD_COUNTRY = gql`
  mutation AddCountry($name: String!, $code: String!, $emoji: String!) {
    addCountry(name: $name, code: $code, emoji: $emoji) {
      name
    }
  }
`;

function AddCountryForm() {
    let inputName, inputCode, inputEmoji;
    const [addCountry, { data, loading, error }] = useMutation(ADD_COUNTRY);

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    return (
        <form onSubmit={e => {
            e.preventDefault();
            addCountry({
                variables: {
                    name: inputName.value,
                    code: inputCode.value,
                    emoji: inputEmoji.value
                }
            });
            inputName.value = '';
            inputCode.value = '';
            inputEmoji.value = '';
        }}>
            <input ref={node => { inputName = node; }} placeholder="Name" />
            <input ref={node => { inputCode = node; }} placeholder="Code" />
            <input ref={node => { inputEmoji = node; }} placeholder="Emoji" />
            <button type="submit">Add Country</button>
        </form>
    );
}

export default AddCountryForm;
