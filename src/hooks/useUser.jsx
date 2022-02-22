import {useCallback, useContext} from "react";
import {useHistory} from "react-router-dom";
import {useIonToast} from "@ionic/react";
import LoginService from "../services/loginService";
import RegisterService from "../services/registerService";
import {storeToken} from "../services/authService"
import Context from "../context/UserContext";


export default function useUser(callback, deps) {
    const history = useHistory()
    const [present] = useIonToast()
    const {auth, setAuth} = useContext(Context)



    const login = useCallback((data) => {
        LoginService(data)
            .then((response) => {
                if (response === undefined) {
                    present('Sorry, Username/password is wrong', 1500)
                } else {
                    storeToken(response)
                    setAuth(response.access)
                    history.push('/dashboard')
                    window.location.reload()
                    present('Welcome Back!', 1500)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, [present, setAuth])

    const register = useCallback( (data) => {
        RegisterService(data)
            .then((response) => {
                if (response === undefined) {
                    present('We ran into an issue, please try it again', 1500)
                }else {
                    present('User registered correctly!', 1500)
                    history.push('/login')
                }
            })
    }, [present, history])


    return {
        login,
        register
    }
}
