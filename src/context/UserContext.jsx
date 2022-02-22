import React, {useEffect, useState} from 'react';
import {getUserData} from "../services/userService";
import useWebsocket from "../hooks/useWebsocket";

const Context = React.createContext({});



export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    const [auth, setAuth] = useState(null)
    const {listenFromSocket, ehloToSocket} = useWebsocket()


    useEffect(() => {
        setAuth(prevState => localStorage.getItem('auth'))
        if (auth !== null) {
            ehloToSocket()
        } else {
            setUser(null)
        }

            },[auth, setAuth]
)
    listenFromSocket(setUser)

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
