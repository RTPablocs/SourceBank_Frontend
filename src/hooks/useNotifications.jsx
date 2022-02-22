import {useCallback} from "react"
import {useIonToast} from "@ionic/react"
import readNotification from "../services/notificationService";
import useWebsocket from "./useWebsocket";


export default function useNotifications(callback, deps) {
    const [present] = useIonToast()
    const {updateUserFromSocket} = useWebsocket()


    const read = useCallback((id) => {
        readNotification(id)
            .then((response) => {
                response.status === 200 ? present('Notification read', 1500) : present('Something went wrong, please try again', 1500)
                updateUserFromSocket()
            })
    }, [])

    return {
        read
    }
}
