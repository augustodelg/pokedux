import { fromJS } from "immutable";
import { SET_LOADING } from "../actions/types";

const initialState = fromJS({
    loading: true,
});

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return state.setIn(["loading"], action.loading);
        default:
            return state;
    }
};