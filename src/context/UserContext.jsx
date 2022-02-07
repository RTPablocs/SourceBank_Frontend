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
                .then(data => setUser(data))
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
