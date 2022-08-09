import { createContext, useState, useMemo } from 'react';

// context creation and export
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [pokemon, setPokemon] = useState(null);

    const value = useMemo(() => {
        return {
            pokemon,
            setPokemon
        };
    }, [pokemon, setPokemon]);

    return useMemo(
        () => (
            <AppContext.Provider value={value}>{children}</AppContext.Provider>
        ),
        [value, children]
    );
};

export default AppContextProvider;
