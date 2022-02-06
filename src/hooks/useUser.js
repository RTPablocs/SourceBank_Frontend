import {useCallback, useContext} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {useIonToast} from "@ionic/react";
import Context from "../context/UserContext";
import LoginService from "../services/loginService";
import {storeToken, exterminateToken} from "../services/authService"
import {getUserData} from "../services/userService";

export default function useUser(callback, deps) {
    const history = useHistory()
    const [present] = useIonToast()
    const {user, setUser} = useContext(Context)


    const login = useCallback((data) => {
        console.log(data)
        LoginService(data)
            .then((response) => {
                storeToken(response)
                history.push('/dashboard')
                present('Welcome Back!', 1500)
                getUserData()
                    .then((data) => {
                        console.log(data)
                    })
                })
            .catch((error) => {
                present('Sorry, Username/password is wrong', 1500)
            })
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

    const logout = useCallback(() => {
        exterminateToken()
    }, deps)

    return {
        login,
        register,
        logout,
        user
    }
}
