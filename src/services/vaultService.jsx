import HttpService from "./httpService";

export const createVault = (data) => {
    const http = HttpService(true)
    return http.post('vaults/new/', data)
        .then((data) => {return data})
        .catch((error) => {return error.response})
}

export const deleteVault = (vault_id) => {
    const http = HttpService(true)
    return http.delete(`vaults/delete/${vault_id}/`)
        .then((data) => {return data})
        .catch((error) => {return error.response})
}

export const updateVault = (data) => {
    const http = HttpService(true)
    return http.post('vaults/update/', data)
        .then((data) => {return data})
        .catch((error) => {return error.response})
}