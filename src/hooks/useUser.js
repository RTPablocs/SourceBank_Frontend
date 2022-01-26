import {useCallback, useContext} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {useIonToast} from "@ionic/react";
import Context from "../context/UserContext";

export default function useUser() {
    const history = useHistory()
    const [present] = useIonToast()
    const {user, setUser} = useContext(Context)


    const login = useCallback(async (data) => {
        await axios.post('http://localhost:8000/user/token/', data)
            .then(async (response) => {
                await present('Welcome Back!', 1500)
                history.push('/dashboard')
                localStorage.setItem('auth', response.data.access)
                await axios.get('http://localhost:8000/user/me/', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('auth')}`
                    }
                })
                    .then((response) => {
                        console.log(response.data)
                    })
            }).catch(error => {
                    present('Username/password is wrong, please check it', 1500)
                }
            )
    }, [history, present, setUser])

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

    const logout = useCallback(() => {
        localStorage.removeItem('auth')
        history.push('/login')
    }, [history])

    return {
        login,
        register,
        logout,
        user
    }
}
