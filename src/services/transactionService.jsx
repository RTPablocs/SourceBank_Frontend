import HttpService from "./httpService";

export const sendTransaction = (data) => {
    const http = HttpService(true)
    return http.post('movements/transaction/', data)
        .then((data) => {
            return data
        })
        .catch((error) => {
            return error.response
        })
}

export const retrieveTransactions = (id) => {
    const http = HttpService(true)
    return http.get(`movements/vault/${id}`)
        .then((data) => {
            return data
        })
        .catch((error) => {
            return error.response
        })
}

export const sendVaultTransaction = (data) => {
    const http = HttpService(true)
    return http.post('movements/vault/', data)
        .then((data) => {
            return data
        })
        .catch((error) => {
            return error.response
        })
}
