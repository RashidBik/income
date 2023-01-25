import { createContext, useReducer } from "react";

export const IncomeContxtProvider = createContext();

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_':
            return {
                income: action.payload
            }
        case 'CREATE_':
            return {
                income: [action.payload, ...state.income]
            }
        default:
            return state;
    }
}
export const IncomeContex = ({children}) => {
   const [state, dispatch] = useReducer(reducer, { income: null});

  return (
    <IncomeContxtProvider.Provider value={{...state, dispatch}}>
        {children}
    </IncomeContxtProvider.Provider>
  )
}
