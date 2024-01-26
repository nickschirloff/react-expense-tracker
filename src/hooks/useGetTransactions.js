import { useEffect, useState } from 'react';
import { query, collection, where, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { useGetUserData } from './useGetUserData';

export const useGetTransactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [transactionsTotal, setTransactionsTotal] = useState("");

    const transactionCollection = collection(db, "transactions");
    const { userID } = useGetUserData();

    const getTransactions = async() => {
        let unsubscribe;
        try {
            const queryTransactions = query(transactionCollection, 
                where("userID", "==", userID),
                orderBy("timestamp"));
            
            unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
                let docs = [];
                let totalIncome = 0.00;

                snapshot.forEach((doc) => {
                    const data = doc.data();
                    const id = doc.id;

                    docs.push({ ...data, id });

                    if(data.type === "credit") {
                        totalIncome -= parseFloat(data.amount).toFixed(2);
                    } else {
                        totalIncome += +parseFloat(data.amount).toFixed(2);
                    }
                });
                setTransactions(docs);
                setTransactionsTotal(parseFloat(totalIncome).toFixed(2));
            });
        } catch(err) {
            console.error(err);
        }
        return () => unsubscribe();
    };

    useEffect(() => {
        getTransactions();
    }, []);

    return { transactions, transactionsTotal };
}