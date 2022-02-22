import {useCallback} from "react"
import {useIonToast} from "@ionic/react"
import {sendTransaction, retrieveTransactions, sendVaultTransaction} from "../services/transactionService";
import useWebsocket from "./useWebsocket";


export default function useMovements(callback, deps) {
    const [present] = useIonToast()
    const {updateMultipleUserFromSocket, updateUserFromSocket} = useWebsocket()


    const submit = useCallback((data) => {
        sendTransaction(data)
            .then((response) => {
                response.status === 404 ? present('User not found', 1500) : response.status === 200 ? present('Money send correctly', 1500) : present('Something went wrong, please try again', 1500)
                updateMultipleUserFromSocket(JSON.stringify({'username': data.username}))
            })
    }, [])

    const vaultSubmit = useCallback((data) => {
        sendVaultTransaction(data)
            .then((response) => {
                response.status === 404 ? present('User not found', 1500) : response.status === 200 ? present('Money send correctly', 1500) : present('Something went wrong, please try again', 1500)
                updateUserFromSocket()
            })
    }, [])

    const retrieve = useCallback((id) => {
        return retrieveTransactions(id)
    }, [])
    return {
        submit,
        retrieve,
        vaultSubmit
    }
}
