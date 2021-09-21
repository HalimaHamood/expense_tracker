import React, {createContext, useReducer} from "react";
import AddReducer from './AddReducer'


const initialState = {
    transactions: [] 
}

// create context
export const GlobalContext = createContext(initialState)

// provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AddReducer, initialState)


    // Actions
     function deleteTransaction(id){
       dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction){
        dispatch({
             type: 'ADD_TRANSACTION',
             payload: transaction
         })
     }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}

