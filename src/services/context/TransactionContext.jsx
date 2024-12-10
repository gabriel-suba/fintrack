import { createContext, useState } from 'react';
import { txs } from '../data/mockData';

const TransactionContext = createContext(null);

const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState(txs);

    return (
        <TransactionContext.Provider value={{ transactions, setTransactions }}>
            {children}
        </TransactionContext.Provider>
    )
}

export { TransactionContext, TransactionProvider }