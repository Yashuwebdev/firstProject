import { createContext, useEffect, useState } from "react"

export let authContext = createContext()


function AuthContextProvider({ children }) {
    let [islogin, setIslogin] = useState(false)

    useEffect(() => {
        let userID = localStorage.getItem("userId")
        if (userID) {
            setIslogin(true)
        } else {
            setIslogin(false)
        }

    }, [islogin])


    return (
        <>

            <authContext.Provider value={{ islogin, setIslogin }}>
                {children}
            </authContext.Provider>

        </>
    )
}
export default AuthContextProvider