import {useCallback, useContext} from "react"
import {useIonToast} from "@ionic/react"
import {sendTransaction, retrieveTransactions} from "../services/transactionService";
import useWebsocket from "./useWebsocket";


export default function useMovements(callback, deps) {
    const [present] = useIonToast()
    const {updateUserFromSocket} = useWebsocket()


    const submit = useCallback((data) => {
        sendTransaction(data)
            .then((response) => {
                response.status === 404 ? present('User not found', 1500) : response.status === 200 ? present('Money send correctly', 1500) : present('Something went wrong, please try again', 1500)
                updateUserFromSocket(JSON.stringify({'username': data.username}))
            })
    }, [])

    const retrieve = useCallback((id) => {
        return retrieveTransactions(id)
    }, [])
    return {
        submit,
        retrieve
    }
}
