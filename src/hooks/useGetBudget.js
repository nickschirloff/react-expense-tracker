import { db } from '../config/firebaseConfig';
import { useGetUserData } from './useGetUserData';
import { doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';

export const useGetBudget = () => {
    const [budgetAmount, setBudgetAmount] = useState("");
    const { userID } = useGetUserData();
    const docRef = doc(db, "budgets", userID);
    
    const getBudget = async() => {
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) {
            const amount = docSnap.data().amount;
            setBudgetAmount(amount);
            return amount;
        } else {
            console.error("Error: Cannot get user budget.");
            return "0.00";
        }
    };

    useEffect(() => {
        getBudget();
    },[]);

    return { budgetAmount };
};