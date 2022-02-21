import HttpService from "./httpService";


export default function LoginService(data){
    const http  = HttpService(false)

    return http.post('/user/token/', data)
        .then((response) => {
            return response.data
        })
        .catch(error => {
            return error.data
        })
}
