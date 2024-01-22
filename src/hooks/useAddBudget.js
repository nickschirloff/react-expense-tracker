import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { useGetUserData } from './useGetUserData';

export const useAddBudget = () => {
    const budgetCollectionRef = collection(db, "budgets");
    const { userID } = useGetUserData();

    const addBudget = async({
        budgetName,
        budgetAmount,
        budgetDeadline
    }) => {
        await addDoc(budgetCollectionRef, {
            userID,
            budgetName,
            budgetAmount,
            budgetDeadline
        });
    }
    return { addBudget };

}