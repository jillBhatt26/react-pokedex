import useAppContext from '../hooks/useAppContext';

const RenderPokemon = () => {
    // hooks
    const { pokemon } = useAppContext();

    return (
        <>
            {pokemon && (
                <div className="bg-white rounded max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-3xl mx-auto text-center my-10 shadow-md p-4">
                    <h1 className="text-2xl border-b pb-4">
                        {pokemon.name.toUpperCase()}
                    </h1>

                    <div className="text-xl mt-4">
                        <img
                            src={
                                pokemon.sprites.other.dream_world.front_default
                            }
                            className="max-w-full inline-block"
                            alt="Pokemon"
                        />
                    </div>

                    <div className="text-xl mt-4 flex justify-center space-x-5">
                        <p className="text-2xl">Height: {pokemon.height}</p>
                        <p className="text-2xl">Weight: {pokemon.weight}</p>
                    </div>

                    <div className="text-xl mt-4 flex flex-col">
                        <p className="text-2xl">Abilities</p>
                        <div className="flex justify-center space-x-10">
                            {pokemon.abilities.length > 0 &&
                                pokemon.abilities.map((abilityObj, idx) => {
                                    const {
                                        ability: { name }
                                    } = abilityObj;

                                    return (
                                        <p
                                            className="text-lg flex justify-between space-x-5 max-w-sm"
                                            key={idx}
                                        >
                                            {name.toUpperCase()}
                                        </p>
                                    );
                                })}
                        </div>
                    </div>

                    <div className="text-xl mt-4 flex flex-col">
                        <p className="text-2xl">Types</p>
                        <div className="flex justify-center space-x-10">
                            {pokemon.types.length > 0 &&
                                pokemon.types.map((typeObj, idx) => {
                                    const {
                                        type: { name }
                                    } = typeObj;

                                    return (
                                        <p
                                            className="text-lg flex justify-between space-x-5 max-w-sm"
                                            key={idx}
                                        >
                                            {name.toUpperCase()}
                                        </p>
                                    );
                                })}
                        </div>
                    </div>

                    <div className="text-xl mt-4 flex flex-col">
                        <p className="text-2xl">Stats</p>
                        {pokemon.stats.length > 0 &&
                            pokemon.stats.map((statObject, idx) => {
                                const { base_stat, stat } = statObject;

                                return (
                                    <div className="w-3/6 mx-auto">
                                        <p
                                            className="text-lg flex justify-between space-x-1 md:space-x-5 max-w-sm"
                                            key={idx}
                                        >
                                            <span>
                                                {stat.name.toUpperCase()}:
                                            </span>
                                            <span>{base_stat}</span>
                                        </p>
                                    </div>
                                );
                            })}
                    </div>

                    <div className="text-xl mt-4 max-w-full">
                        <p className="text-2xl mb-4">Moves</p>

                        <div className="inline-block clear">
                            {pokemon.moves.length > 0 &&
                                pokemon.moves.map((movesObj, idx) => (
                                    <p
                                        className="text-lg float-left text-left mx-5"
                                        key={idx}
                                    >
                                        {movesObj.move.name}
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default RenderPokemon;
