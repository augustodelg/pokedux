import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemon, getPokemonDetails } from '../api';
import { setLoading } from './uiSlice';

const initialState = {
  pokemons: [],
  filterPokemons: [],
  favoritesPokemons: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemonsRes = await getPokemon();
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });

      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].isFavorite;
        state.pokemons[currentPokemonIndex].isFavorite = !isFavorite;

        if (isFavorite) {
          state.favoritesPokemons = state.favoritesPokemons.filter(
            (pokemon) => pokemon.id !== action.payload.pokemonId
          );
        } else {
          state.favoritesPokemons.push(state.pokemons[currentPokemonIndex]);
        }
      }
    },
    filterPokemons: (state, action) => {
      const filter = action.payload;
      const filterByTypeAndName = (pokemon) => {
        return (
          pokemon.name.includes(filter) ||
          pokemon.types.some((type) => type.type.name === filter)
        );
      };
      state.filterPokemons = state.pokemons.filter((pokemon) => filterByTypeAndName(pokemon));
    }
  },
});

export const { setFavorite, setPokemons, filterPokemons } = dataSlice.actions;

export default dataSlice.reducer;