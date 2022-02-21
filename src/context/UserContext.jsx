import React, {useEffect, useState} from 'react';
import {getUserData} from "../services/userService";

const Context = React.createContext({});



export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    const [auth, setAuth] = useState(null)

    useEffect(() => {
        setAuth(prevState => localStorage.getItem('auth'))
        if (auth !== null) {
            const ws = new WebSocket(`ws://localhost:8000/user/me/?token=${auth}`)
            ws.onopen = ev => {
                ws.send(JSON.stringify({'type':'user_data', 'data': {'m': 'c'} }))
            }
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
                setUser(json_data.data)
                console.log(json_data)
                ws.close()
            }
        } else {
            setUser(null)
        }
            },[auth, setAuth, setUser]
)


    return <Context.Provider value={{
        user,
        setUser,
        auth,
        setAuth
    }}>
        {children}
    </Context.Provider>
}

export default Context
