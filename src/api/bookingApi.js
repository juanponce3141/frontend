import { handleResponse, handleError } from "./apiUtils";
<<<<<<< HEAD
// const baseUrl = 'http://localhost:8089/api/v1' + "/booking/";
const baseUrl = "https://jsonplaceholder.typicode.com/todos/1";

export function getBookings() {
    return fetch(baseUrl)
        .then(handleResponse)
=======
const baseUrl = 'http://localhost:8089/api/v1' + "/booking/";

export function getBookings() {
    return fetch(baseUrl)
        .then((response) => {
            console.log("response")
            console.log(response);
            return response;
        })
>>>>>>> origin/master
        .catch(handleError);
}
