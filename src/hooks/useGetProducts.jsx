import { useEffect, useState } from "react"
import {db} from '../config/firebase'
import {collection, getDocs} from 'firebase/firestore'

export const useGetProducts = () => {
    const [products, setProducts] = useState([]);
 
    const fetchPost = async () => {
       
        await getDocs(collection(db, "store-products"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setProducts(newData);                
                console.log(products, newData);
            })
       
    }
   
    useEffect(()=>{
        fetchPost();
    }, [])

    return {products}

}