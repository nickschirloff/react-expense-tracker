import { useEffect, useState } from 'react';
import { query, collection, where, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { useGetUserData } from './useGetUserData';

export const useGetTransactions = () => {
    const [transactions, setTransactions] = useState([]);

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

                snapshot.forEach((doc) => {
                    const data = doc.data();
                    const id = doc.id;

                    docs.push({ ...data, id });
                });
                setTransactions(docs);

            });
        } catch(err) {
            console.error(err);
        }
        return () => unsubscribe();
    };

    useEffect(() => {
        getTransactions();
    }, []);

    return { transactions };
}