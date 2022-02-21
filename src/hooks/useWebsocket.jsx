import Context from "../context/UserContext";
import {useContext} from "react";

export default function useWebsocket() {
    const {auth, user, setUser} = useContext(Context)
    const ws = new WebSocket(`ws://localhost:8000/user/me/?token=${auth}`)

    const updateUserFromSocket = (user) => {
        console.log(user)
        ws.send(user)
        ws.onmessage = ev =>{
            let json_data = JSON.parse(ev.data)
            console.log(json_data.data)
            json_data.data.movements = json_data.data.movements.sort((a,b)=> {
                return new Date(b.date) - new Date(a.date)
            })
            json_data.data.balance = json_data.data.balance.toFixed(2)
            json_data.data.movements.forEach(movement => {
                if (movement.sender_id === json_data.data.id){
                    movement.amount = -movement.amount
                }
            })

            setUser(json_data.data)
        }
    }
    const listenFromSocket = () => {
        ws.onmessage = ev => {
            let json_data = JSON.parse(ev.data)
            json_data.data.movements = json_data.data.movements.sort((a,b)=> {
                return new Date(b.date) - new Date(a.date)
            })
            json_data.data.balance = json_data.data.balance.toFixed(2)
            json_data.data.movements.forEach(movement => {
                if (movement.sender_id === json_data.data.id){
                    movement.amount = -movement.amount
                }
            })
         return json_data
        }
    }

    return {
        updateUserFromSocket,
        listenFromSocket
    }
}
