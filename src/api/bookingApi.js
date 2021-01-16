import { handleResponse, handleError } from "./apiUtils";
// const baseUrl = 'http://localhost:8089/api/v1' + "/booking/";
const baseUrl = "https://jsonplaceholder.typicode.com/todos/1";

export function getBookings() {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}
