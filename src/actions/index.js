import { SET_POKEMON } from "./types";

export const setPokemons = (pokemons) => {
  return {
    type: SET_POKEMON,
    pokemons,
  };
}