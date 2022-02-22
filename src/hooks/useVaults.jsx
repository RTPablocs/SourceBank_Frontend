import {useCallback} from "react"
import {useIonToast} from "@ionic/react"
import {createVault, deleteVault, updateVault} from "../services/vaultService";
import useWebsocket from "./useWebsocket";


export default function useVaults(callback, deps) {
    const [present] = useIonToast()
    const {updateUserFromSocket} = useWebsocket()


    const submit = useCallback((data) => {
        createVault(data)
            .then((response) => {
                response.status === 200 ? present('Vault Created', 1500) : present('Something went wrong, please try again', 1500)
                updateUserFromSocket()
            })
    }, [present, updateUserFromSocket])

    const del = useCallback((id) => {
        deleteVault(id)
            .then((response) => {
                response.status === 200 ? present('Vault deleted', 1500) : present(response.data.detail, 1500)
                updateUserFromSocket()
            })
    }, [present, updateUserFromSocket])

    const update = useCallback((data) => {
        updateVault(data)
            .then((response) => {
                response.status === 200 ? present('Vault Created', 1500) : present('Something went wrong, please try again', 1500)
                updateUserFromSocket()
            })
    }, [present, updateUserFromSocket])


    return {
        submit,
        del,
        update
    }
}
