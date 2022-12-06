import { SET_POKEMON } from "../actions/types";

const initialState = {
    pokemons: [],
};

export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMON:
            return {
                ...state, // Shallow copy!!!!!
                pokemons: action.pokemons,
            };
        default:
            return state;
    }
};