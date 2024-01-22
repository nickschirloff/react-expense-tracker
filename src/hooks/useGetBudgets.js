import { useEffect, useState } from 'react';
import { query, collection, where, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { useGetUserData } from './useGetUserData';

export const useGetBudgets = () => {
    const [budgets, setBudgets] = useState([]);

    const budgetCollection = collection(db, "budgets");
    const { userID } = useGetUserData();

    const getBudgets = async() => {
        let unsubscribe;
        try {
            const queryBudgets = query(budgetCollection,
                where("userID", "==", userID),
                orderBy("budgetDeadline"));
            
            unsubscribe.onSnapshot(queryBudgets, (snapshot) => {
                let docs = [];

                snapshot.forEach((doc) => {
                    const data = doc.data();
                    const id = doc.id;

                    docs.push({...data, id});
                });
                setBudgets(docs);
            })
        } catch(err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getBudgets();
    }, []);
    
    return { budgets };
}