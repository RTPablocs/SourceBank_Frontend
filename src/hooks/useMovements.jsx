import {useCallback} from "react"
import {useIonToast} from "@ionic/react"
import {sendTransaction} from "../services/transactionService";

export default function useMovements(callback, deps) {
    const [present] = useIonToast()

    const submit = useCallback((data) => {
        sendTransaction(data)
            .then((response) => {
                response.status === 404 ? present('User not found', 1500) : response.status === 200 ? present('Money send correctly', 1500) : present('Something went wrong, please try again', 1500)
            })
    }, [])
    return {
        submit
    }
}
