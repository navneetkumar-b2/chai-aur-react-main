import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}  {/*means hamari puri application iske under wrapped hai  */}
        </UserContext.Provider>
    )
}

export default UserContextProvider

// in `<UserContext.Provider value={{user, setUser}}>` in this code "user","setUser" is provided as the global variable and we can change "setUser" anywhere just by 
// 'const {setUser} = useContext(UserContext)'
//  setUser({username, password})

// https://g.co/gemini/share/a2d3684afa0d -example of using this method differently
// 
