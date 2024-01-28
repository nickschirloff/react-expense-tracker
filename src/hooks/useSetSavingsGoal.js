import { db } from '../config/firebaseConfig';
import { doc, updateDoc, getDoc } from 'firebase/firestore';

export const useSetSavingsGoal = () => {
    // const docRef = doc(db, "goals", userID);

    const setGoal = async({goalID, goalAddition}) => {
        const docRef = doc(db, "goals", goalID);
        const docSnap = await getDoc(docRef);


        try {
            const data = docSnap.data();
            const newAmount = data.goalAmountSaved + goalAddition;
            await updateDoc(docRef, {
                goalAmount: data.goalAmount,
                goalAmountSaved: newAmount,
                goalDeadline: data.goalDeadline,
                goalName: data.goalName,
                userID: data.userID
            });
        } catch(err) {
            console.error(err);
        }
    };

    return { setGoal };
};