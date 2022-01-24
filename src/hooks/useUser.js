import {useCallback} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {useIonToast} from "@ionic/react";

export default function useUser(callback, deps) {
    const history = useHistory()
    const [present] = useIonToast()


    const login = useCallback(async (data) => {
        await axios.post('http://localhost:8000/user/token/', data)
            .then((response) => {
                present('Welcome Back!', 1500)
                history.push('/dashboard')
                localStorage.setItem('auth', response.data.access)
            }).catch(error => {
                    present('Username/password is wrong, please check it', 1500)
                }
            )
    }, [history, present])

    const register = useCallback(async (data) => {
        await axios.post('http://localhost:8080/user/register')
            .then(() => {
                present('User registered correctly!', 1500)
                history.push('/login')
            })
            .catch(() => {
                present('We ran into an issue, please try it again', 1500)
            })

    }, [present, history])

    return {
        login,
        register
    }
}
