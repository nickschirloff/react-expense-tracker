import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

export const useDeleteSavingsGoal = () => {

    const deleteSavingsGoal = async(savingsGoalID) => {
        await deleteDoc(doc(db, "goals", savingsGoalID));
    };

    return { deleteSavingsGoal };
};

