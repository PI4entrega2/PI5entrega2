import { createContext, useState } from "react";


export const AuthContext = createContext({})


export function AuthProvider({children}){


    const [itens, setItens] = useState([]);
    const [quants, setQuants] = useState([]);
    const [unids, setUnids] = useState([]);

    


    return(
        <AuthContext.Provider value={{itens, setItens, quants, setQuants, unids, setUnids}}>
            {children}
        </AuthContext.Provider>
    )
}