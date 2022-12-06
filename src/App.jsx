
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import { Box, CircularProgress, LinearProgress } from '@mui/material';
import { getPokemon, getPokemonDetails } from './api';
import pokedux from './assets/pokedux.svg';
import PokeminList from './components/PokemonList/PokeminList';
import Searcher from './components/Searcher/Searcher';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getPokemonWithDetails, setLoading, setPokemons } from './actions';


function App() {

  const pokemons = useSelector(state => state.getIn(["data", "pokemons"], shallowEqual)).toJS();
  const loading = useSelector(state => state.getIn(["data", "loading"]));
  const dispatch = useDispatch();

  async function fetchPokemons() {
    dispatch(setLoading(true));
    const pokemonsResponse = await getPokemon();
    dispatch(getPokemonWithDetails(pokemonsResponse));
    dispatch(setLoading(false));
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
      {loading ? (<LinearProgress />) :
        (<PokeminList pokemons={pokemons} />)}
    </Grid>




  )
}

export default App;
