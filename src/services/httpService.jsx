import axios from "axios";

export default function HttpService(isLogged = false) {
    return isLogged === true ? axios.create({
        baseURL: 'http://10.42.0.1:8000',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('auth')}`
        }
    }) : axios.create({
        baseURL: 'http://10.42.0.1:8000'
    })
}
