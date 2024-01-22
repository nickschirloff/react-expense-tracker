import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { useGetUserData } from './useGetUserData';
export const useAddTransaction = () => {
    const transactionCollectionRef = collection(db, "transactions");
    const { userID } = useGetUserData();

    const addTransaction = async({
        description,
        amount,
        type
    }) => {
        await addDoc(transactionCollectionRef, {
            userID,
            description,
            amount,
            type,
            timestamp: new Date().toLocaleDateString()
        });
    }
    return { addTransaction };
}