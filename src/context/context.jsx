import React, { createContext, useContext, useState } from 'react'

export const UserContext = createContext({})

export const Context = (props) => {
    const [userPomodoro, setUserPomodoro] = useState(25)
    const [userBreak, setUserBreak] = useState(5)

    return (
        <UserContext.Provider
            value={{ userPomodoro, setUserPomodoro, userBreak, setUserBreak }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export const useAuth = () => useContext(UserContext)
