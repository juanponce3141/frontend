import * as types from "./actionTypes";


export function createOrder(order) {
    return { type: types.CREATE_ORDER, order };
}