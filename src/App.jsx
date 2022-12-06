
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import { getPokemon, getPokemonDetails } from './api';
import pokedux from './assets/pokedux.svg';
import PokeminList from './components/PokemonList/PokeminList';
import Searcher from './components/Searcher/Searcher';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemons } from './actions';


function App() {

  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  async function fetchPokemons() {
    const pokemonsResponse = await getPokemon();
    const pokemonsDetails = await Promise.all(
      pokemonsResponse.map((pokemon) => getPokemonDetails(pokemon)));
    dispatch(setPokemons(pokemonsDetails));
  }

  useEffect(() => {
    fetchPokemons();
  }, [])


  return (
    <Grid sx={{ p: 5, backgroundColor: "#f5f5f5", }}>
      <Box sx={{ width: '20em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={pokedux} />
      </Box>

      <Box sx={{ my: 3 }}>
        <Searcher />
      </Box>
      <PokeminList pokemons={pokemons} />
    </Grid>




  )
}

export default App;
