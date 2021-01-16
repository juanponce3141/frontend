import * as types from "./actionTypes";
import * as bookingApi from "../../api/bookingApi"


export function createBooking(booking) {
    return { type: types.CREATE_BOOKING, booking };
}

export function loadBookingsSuccess(booking) {
    return { type: types.LOAD_BOOKING_SUCCESS, booking };
}

export function loadBookings() {
    return function(dispatch) {
        return bookingApi
            .getBookings()
            .then(booking => {
                dispatch(loadBookingsSuccess(booking));
            })
            .catch(error => {
                throw error;
            });
    };
}