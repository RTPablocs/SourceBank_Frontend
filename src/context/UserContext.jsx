import React, {useEffect, useState} from 'react';
import {getUserData} from "../services/userService";

const Context = React.createContext({});

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    const [auth, setAuth] = useState(() => {
        localStorage.getItem('auth')
    })

    useEffect(() => {
        setAuth(localStorage.getItem('auth'))
        if (auth !== undefined) {
            getUserData()
                .then(data => {
                    data.movements = data.movements.sort((a,b)=> {
                        return new Date(b.date) - new Date(a.date)
                    })
                    data.balance = data.balance.toFixed(2)
                    data.movements.forEach(movement => {
                        if (movement.sender_id === data.id){
                            movement.amount = -movement.amount
                        }
                    })
                    setUser(data)
                })
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
