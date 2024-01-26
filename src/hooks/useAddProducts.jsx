import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import {db} from '../config/firebase-config'

export const useAddTransaction = () => {
    const productCollectionRef = collection(db, "store-products");
    
    const addTransaction = async ({description, transactionAmount, productID}) => {
        await addDoc(productCollectionRef, {
            description,
            transactionAmount,
            productID,
            createdAt: serverTimestamp(),
        });
    }
    
    return {addTransaction};
}