import axios from 'axios';
import { pokemonsApiDetailedAdapter } from './adapter/PokemonAdapter';

export const getPokemon = () => {
  return axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
};

export const getPokemonDetails = (pokemon) => {
  return axios
    .get(pokemon.url)
    .then((res) => pokemonsApiDetailedAdapter(res.data))
    .catch((err) => console.log(err));
};