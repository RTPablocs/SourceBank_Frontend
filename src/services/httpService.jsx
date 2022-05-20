import axios from "axios";

export default function HttpService(isLogged = false) {
    return isLogged === true ? axios.create({
        baseURL: `http://${process.env.REACT_APP_BASE_URL}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('auth')}`
        }
    }) : axios.create({
        baseURL: `http://${process.env.REACT_APP_BASE_URL}`
    })
}
