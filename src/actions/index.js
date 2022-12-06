import { getPokemonDetails } from "../api";
import { SET_FAVORITE, SET_LOADING, SET_POKEMON } from "./types";


export const setLoading = (loading) => ({
  type: SET_LOADING,
  loading,
});


export const setFavorite = (pokemonId) => ({
  type: SET_FAVORITE,
  pokemonId,
});

export const setPokemons = (pokemons) => ({
  type: SET_POKEMON,
  pokemons,
});


export const getPokemonWithDetails =
  (pokemons = []) => async (dispatch) => {
    const pokemonDetailed = await Promise.all(
      pokemons.map(async (pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonDetailed));
  }