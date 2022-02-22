import WebSocketService from "../services/websocketService"
import {useEffect, useRef} from "react";

export default function useWebsocket() {
    const ws = useRef(null)

    useEffect(() => {

        ws.current = WebSocketService()
        ws.current.onopen = () => {
            ws.current.send(JSON.stringify({'message': 'hello'}))
            console.log('Socket Open')
        }
        ws.current.onclose = () => {
            console.log('Socket Close')
        }
        const wsCurrent = ws.current
        return () => {
            wsCurrent.close()
        }
    }, [])


    const sortSocketData = (data, setFunction) => {
        let json_data = JSON.parse(data.data)
        json_data.data.movements = json_data.data.movements.sort((a, b) => {
            return new Date(b.date) - new Date(a.date)
        })
        json_data.data.notifications = json_data.data.notifications.sort((a, b) => {
            return new Date(b.date) - new Date(a.date)
        })
        json_data.data.balance = json_data.data.balance.toFixed(2)
        json_data.data.movements.forEach(movement => {
            if (movement.sender_id === json_data.data.id) {
                movement.amount = -movement.amount
            }
        })
        setFunction(json_data.data)
    }

    const updateMultipleUserFromSocket = (user) => {
        ws.current.send(user)
    }
    const updateUserFromSocket = () => {
        ws.current.send(JSON.stringify({'message': 'hello'}))

    }
    const listenFromSocket = (setFunction) => {
        ws.current.onmessage = ev => {
            sortSocketData(ev, setFunction)
        }
    }


    return {
        updateUserFromSocket,
        updateMultipleUserFromSocket,
        listenFromSocket,
    }
}
