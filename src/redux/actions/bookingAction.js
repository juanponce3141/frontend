import * as types from "./actionTypes";
import * as bookingApi from "../../api/bookingApi"


export function createBooking(booking) {
    return { type: types.CREATE_BOOKING, booking };
}

export function loadBookingsSuccess(bookings){
    return { type: types.LOAD_BOOKING_SUCCESS, bookings };
}

export function loadBookings() {
    return function(dispatch) {
        return bookingApi
            .getBookings()
            .then(bookings => {
                console.log(bookings);
                dispatch(loadBookingsSuccess(bookings));
            })
            .catch(error => {
                throw error;
            });
    };
}