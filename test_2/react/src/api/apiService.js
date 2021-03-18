import axios from "axios";

// change url
const URL_SERVER = "https://localhost:5001/api";

export function callApi(endpoint, method = "GET", body) {
  return axios({
    method,
    url: `${URL_SERVER}/${endpoint}`,
    data: body,
  }).catch((e) => console.log(e));
}

// get all customers
export function getCustomers(endpoint) {
  return callApi(endpoint, "GET");
}
