import WebSocketService from "../services/websocketService"

export default function useWebsocket() {

    const ws = WebSocketService()
    const sortSocketData = (data, setFunction) => {
        let json_data = JSON.parse(data.data)
        json_data.data.movements = json_data.data.movements.sort((a, b) => {
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
        ws.send(user)
    }
    const updateUserFromSocket = () => {
        ws.send(JSON.stringify({'message': 'hello'}))

    }
    const listenFromSocket = (setFunction) => {
        ws.onmessage = ev => {
            sortSocketData(ev, setFunction)
        }
    }

    const ehloToSocket = () => {
        ws.onopen = () => {
            ws.send(JSON.stringify({'message': 'hello'}))
        }
    }
    const closeSocketConnection = () => {
        ws.close()
    }

    return {
        updateUserFromSocket,
        updateMultipleUserFromSocket,
        listenFromSocket,
        ehloToSocket,
        closeSocketConnection
    }
}
