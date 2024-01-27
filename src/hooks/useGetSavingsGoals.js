import { useEffect, useState } from 'react';
import { query, collection, where, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { useGetUserData } from './useGetUserData';

export const useGetSavingsGoals = () => {
    const [goals, setGoals] = useState([]);

    const goalCollection = collection(db, "goals");
    const { userID } = useGetUserData();

    const getGoals = async() => {
        let unsubscribe;
        try {
            const queryGoals = query(goalCollection,
                where("userID", "==", userID),
                orderBy("goalDeadline"));
            
            unsubscribe = onSnapshot(queryGoals, (snapshot) => {
                let docs = [];

                snapshot.forEach((doc) => {
                    const data = doc.data();
                    const id = doc.id;
                    docs.push({...data, id});
                });
                setGoals(docs);
            })
        } catch(err) {
            console.error(err);
        }
        return () => unsubscribe();
    };

    useEffect(() => {
        getGoals();
    }, []);
    
    return { goals };
}