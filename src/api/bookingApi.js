import { handleResponse, handleError } from "./apiUtils";
const baseUrl = 'http://localhost:8089/api/v1' + "/booking/";

export function getBookings() {
    return fetch(baseUrl)
        .then((response) => {
            console.log("response")
            console.log(response);
            return response;
        })
        .catch(handleError);
}
