import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {alert("dark")},
    lightTheme: () => {alert("light")},  
})


export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}


//why object is written within `createContext` -it serves as a default value - https://g.co/gemini/share/3d45bd54a7cb
