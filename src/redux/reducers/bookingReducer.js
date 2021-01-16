import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function bookingReducer(state = initialState.bookings, action) {
    switch(action.type) {
        case types.CREATE_BOOKING:
            return {...state, ...action.booking};
        default:
            return state;
    }
}
