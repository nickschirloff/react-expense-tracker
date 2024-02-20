import { db } from '../config/firebaseConfig';
import { doc, setDoc, updateDoc, getDoc } from 'firebase/firestore';
import { useGetUserData } from './useGetUserData';

export const useSetBudget = () => {
    const { userID } = useGetUserData();
    const docRef = doc(db, "budgets", userID);

    const setBudget = async(newBudget) => {
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()) {
            await updateDoc(docRef, {
                "amount": newBudget
            });
        } else {
            console.log("DB: " + typeof(db));
            console.log("DB: " + typeof("budgets"));
            console.log("DB: " + typeof(userID));
            await setDoc(doc(db, "budgets", userID), {
                "amount": newBudget
            })
        };
        window.location.reload(false);
    };

    return { setBudget };
};