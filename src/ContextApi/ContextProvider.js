
import React, { createContext } from 'react';
import useFirebase from '../Hoocks/useFirebase';


 export const Mycontext=createContext();
const ContextProvider = ({children}) => {

    const AllContext=useFirebase();
    
    return (
        <Mycontext.Provider value={AllContext}>
            {children}
        </Mycontext.Provider>
    );
};

export default ContextProvider;