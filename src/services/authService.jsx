import HttpService from "./httpService";

export const validateToken = () => {
    let isValidToken = false
    const http = HttpService()
    http.post('/user/check/', localStorage.getItem('auth'))
        .then(() => {
            isValidToken = true
        })
        .catch(() => {
            isValidToken = false
        })
    return isValidToken
}

export const storeToken = (data) => {
    localStorage.setItem('auth', data.access)
    localStorage.setItem('auth_refresh', data.refresh)
}

export const exterminateToken = () => {
    localStorage.removeItem('auth')
    localStorage.removeItem('auth_refresh')
}

