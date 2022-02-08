import HttpService from "./httpService";

export const sendTransaction = (data) => {
    const http = HttpService(true)
    return http.post('movements/transaction/', data)
        .then((data) => {return data})
        .catch((error) => {return error.response})
}
