import axios from 'axios';

const baseURL = `https://pokeapi.co/api/v2/pokemon`;

const fetchPokemon = async query => {
    try {
        const fetchRes = await axios({
            url: `${baseURL}/${query.toLowerCase()}`
        });

        return fetchRes.data;
    } catch (error) {
        if (
            error.response.data &&
            error.response.data.toLowerCase() === 'not found' &&
            error.response.status === 404
        ) {
            return {
                success: false,
                message: `No pokemon found with query ${query}`
            };
        }

        return {
            success: false,
            message: error.response.data.error || error.message
        };
    }
};

export { fetchPokemon };
