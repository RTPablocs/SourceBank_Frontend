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
    localStorage.setItem('auth', data.token)
    localStorage.setItem('auth_refresh', data.refresh)
}

export const exterminateToken = () => {
    const refresh_token = localStorage.getItem('auth_refresh')
    const http = HttpService()
    http.post('user/refresh/', {'refresh':refresh_token})
        .then(() => {
            localStorage.removeItem('auth')
            localStorage.removeItem('auth_refresh')
    })
}

