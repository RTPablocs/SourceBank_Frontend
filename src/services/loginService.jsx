import HttpService from "./httpService";


export default function LoginService(data){
    const http  = HttpService(false)

    return http.post('/user/token/', data)
        .then((response) => {
            console.log(response)
            return response.data
        })
        .catch(error => {
            console.log(error)
            return error.data
        })
}
