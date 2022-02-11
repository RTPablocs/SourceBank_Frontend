import {useCallback, useContext} from "react"
import {useIonToast} from "@ionic/react"
import {sendTransaction} from "../services/transactionService";
import Context from "../context/UserContext";

export default function useMovements(callback, deps) {
    const [present] = useIonToast()
    const {user, setUser} = useContext(Context)


    const submit = useCallback((data) => {
        const contextUser = user
        contextUser.movements.push(data)
        console.log(contextUser)
        setUser(contextUser)
        sendTransaction(data)
            .then((response) => {
                response.status === 404 ? present('User not found', 1500) : response.status === 200 ? present('Money send correctly', 1500) : present('Something went wrong, please try again', 1500)
            })
    }, [])
    return {
        submit
    }
}
