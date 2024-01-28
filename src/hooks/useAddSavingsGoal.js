import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { useGetUserData } from './useGetUserData';

export const useAddSavingsGoal = () => {
    const goalCollectionRef = collection(db, "goals");
    const { userID } = useGetUserData();

    const addGoal = async({
        goalName,
        goalAmount,
        goalDeadline
    }) => {
        await addDoc(goalCollectionRef, {
            userID,
            goalName,
            goalAmount,
            goalAmountSaved: 0.00,
            goalDeadline
        });
    }
    return { addGoal };

}