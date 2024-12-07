import React, { createContext, useContext } from 'react'

    // step 1
    export const BioContext = createContext();
    // step 2 
    export const BioProvider = ({children}) => {
       const name = "Pathan";
       const age = 24;
       console.log(children)
       return <BioContext.Provider value={{name:name, age:age}}>
            {children}
            </BioContext.Provider>
    }



    // Custom Hook

    export const useBioContext = () => {
        const context = useContext(BioContext)
        if (context === undefined) {
            throw new Error("Hello You Can't Put the Component Outside the BioProvider");
        }
        return context;
    }