import HttpService from "./httpService";

export default function RegisterService(data) {
    console.log(data)
    const http = HttpService(false)
    return http.post('user/register/', data)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error)
            return error.data
        })
}