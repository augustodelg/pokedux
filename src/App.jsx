
import { Box, LinearProgress, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import pokedux from './assets/pokedux.svg';

import PokemonList from './components/PokemonList/PokemonList';
import PokemonModal from './components/PokemonModal/PokemonModal';
import Searcher from './components/Searcher/Searcher';
import { fetchPokemonsWithDetails } from './slices/dataSlice';


function App() {

  const pokemons = useSelector(state => state.data.pokemons, shallowEqual);
  const filteredPokemons = useSelector(state => state.data.filterPokemons, shallowEqual);
  const favoritesPokemons = useSelector(state => state.data.favoritesPokemons, shallowEqual);
  const loading = useSelector(state => state.ui.loading);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
  }, [])


  return (
    <Grid sx={{ p: 5, backgroundColor: "#f5f5f5", }}>
      <Grid item sx={{ width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={pokedux} />
        <PokemonModal textButton="Favorites">
          <Typography gutterBottom variant="h3" sx={{ fontWeight: 'bold', }}>Favorites Pokemons:</Typography>
          {favoritesPokemons.length !== 0 && <PokemonList pokemons={favoritesPokemons} />}
        </PokemonModal>
      </Grid>

      <Grid item sx={{ my: 3 }}>
        <Searcher />
      </Grid>
      <Grid item>

        {loading ? (<LinearProgress />) :
          (<PokemonList pokemons={filteredPokemons.length > 0 ? filteredPokemons : pokemons} />)}

      </Grid>
    </Grid>




  )
}

export default App;
