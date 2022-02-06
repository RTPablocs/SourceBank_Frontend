import HttpService from "./httpService";

export const getUserData = () => {
    const http = HttpService(true)

    return http.get('user/me')
        .then((data) => {return data.data})
        .catch((error) => {return error})
 }
