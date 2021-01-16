import { combineReducers } from "redux";
import orders from "./orderReducer";
import booking from "./bookingReducer";

const rootReducer = combineReducers({
    orders,
    booking
});

export default rootReducer;
