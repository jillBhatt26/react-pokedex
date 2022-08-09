import Nav from './components/Nav';
import RenderPokemon from './components/RenderPokemon';
import Search from './components/Search';
import useAppContext from './hooks/useAppContext';

const App = () => {
    const { pokemon } = useAppContext();

    return (
        <div className="h-screen bg-bgBody overflow-auto">
            <Nav />
            <Search />
            {pokemon && <RenderPokemon />}
        </div>
    );
};

export default App;
