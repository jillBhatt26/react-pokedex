import { useState } from 'react';
import useAppContext from '../hooks/useAppContext';
import { fetchPokemon } from '../services/pokemon';

const Search = () => {
    // hooks
    const { setPokemon } = useAppContext();

    // component states
    const [query, setQuery] = useState('');

    // event handlers
    const handleFormSubmit = async event => {
        event.preventDefault();

        if (!query || !query.length) {
            return alert("Please enter a pokemon's name!");
        }

        try {
            const pokemonData = await fetchPokemon(query);

            if (pokemonData.success === false) {
                return alert(pokemonData.message);
            }

            setPokemon(pokemonData);
            setQuery('');
        } catch (error) {
            alert(error.message);
        }
    };

    const handleClear = () => {
        setQuery('');
        setPokemon(null);
    };

    return (
        <div className="bg-white rounded max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-3xl mx-auto text-center my-10 shadow-md">
            <form
                noValidate
                autoComplete="off"
                onSubmit={handleFormSubmit}
                className="px-3"
            >
                <input
                    type="text"
                    value={query}
                    placeholder="Search Pokemon"
                    onChange={e => setQuery(e.target.value)}
                    className="inline-block w-full text-xl outline-none rounded my-4 pl-3 pt-1 pb-2 bg-gray-100"
                />

                <button
                    type="submit"
                    className="bg-bgFormBtnSubmit text-white px-3 py-2 rounded mb-4"
                >
                    Search
                </button>

                <button
                    type="reset"
                    className="bg-bgFormBtnClear text-white px-3 py-2 ml-4 rounded mb-4"
                    onClick={handleClear}
                >
                    Clear
                </button>
            </form>
        </div>
    );
};

export default Search;
