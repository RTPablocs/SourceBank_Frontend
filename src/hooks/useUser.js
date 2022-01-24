import {useCallback} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {useIonToast} from "@ionic/react";

export default function useUser(callback, deps) {
    const history = useHistory()
    const [present] = useIonToast()


    const login = useCallback(async (data) => {
        console.log(data)
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


    return {
        login
    }
}