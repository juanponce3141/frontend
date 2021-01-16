import * as types from "./actionTypes";


export function createBooking(booking) {
    return { type: types.CREATE_BOOKING, booking };
}