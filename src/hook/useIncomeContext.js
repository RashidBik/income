import { useContext } from 'react'
import { IncomeContxtProvider } from '../context/IncomeContex'

export const useIncomeContext = () => {
    const context = useContext(IncomeContxtProvider);
    if (!context) {
        throw Error('useContext must be inside a contextProvider')
    }
    
    return context;
}
