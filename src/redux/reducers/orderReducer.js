import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function orderReducer(state = initialState.orders, action) {
    switch(action.type) {
        case types.CREATE_ORDER:
            return [...state, {...action.order}];
        default:
            return state;
    }
}
