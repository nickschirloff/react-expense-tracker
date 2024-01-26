import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

export const useDeleteTransaction = () => {

    const deleteTransaction = async(transactionID) => {
        await deleteDoc(doc(db, "transactions", transactionID));
    };

    return { deleteTransaction };
}