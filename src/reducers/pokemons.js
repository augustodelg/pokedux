import { fromJS } from "immutable";
import { SET_FAVORITE, SET_POKEMON } from "../actions/types";

const initialState = fromJS({
    pokemons: [],

});

export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMON:
            return state.setIn(["pokemons"], fromJS(action.pokemons));
        case SET_FAVORITE:
            const pokemonIndex = state.get('pokemons').findIndex(
                (pokemon) => pokemon.get("id") === action.pokemonId
            );
            if (pokemonIndex < 0) {
                return state;
            }
            const isFavorite = state.getIn(["pokemons", pokemonIndex, "isFavorite"]);
            return state.setIn(["pokemons", pokemonIndex, "isFavorite"], !isFavorite);
        default:
            return state;
    }
};