import React, { useEffect, useState } from 'react'
// import {useGetProducts} from '../hooks/useGetProducts'
// import { doc, getDoc } from "firebase/firestore";
import { NavLink } from 'react-router-dom';
import {db} from '../config/firebase'
import { collection, query, where, getDocs, docs, getDoc } from "firebase/firestore";
import Everything from './Everything';

export default function Product({id}) {
  const newID = id;
  console.log(newID)
  const q = query(collection(db, "store-products"), where("id", "==", id));
  const [products, setProducts] = useState([]);
  let newProduct = Everything();
 
  console.log(newProduct)

  const getProduct = async () => {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      
    });

    await getDocs(q)
      .then((querySnapshot)=>{               
          const newData = querySnapshot.docs
            .map((doc) => ({...doc.data(), id:doc.id }));
              setProducts(newData);                
              console.log(products, newData);
      })
    
  }

  useEffect(() => {
    getProduct();
  }, [])


  return (
    <div>
      this is the product page
      {products.length >0 && products?.map((product) => {
          return (
            <NavLink 
              style={{marginLeft:"50px"}} 
              to='/product'
              
            >
              <button style={{border:"none", backgroundColor:"transparent", textAlign:"left", cursor:"pointer"}}>
                <img src={product.src} alt="" style={{width:"300px", height:"300px"}}/>
                <div style={{fontSize:"20px", fontWeight:"bold", marginBottom:"0"}}>{product.title}</div>
                <p style={{color:"gray", marginTop:"5px", marginBottom:"10px"}}>{product.category}</p>
                <div style={{fontSize:"18px", fontWeight:"500", marginBottom:"10px"}}>${product.price}.00</div>
              </button>
              
              
            </NavLink>
            
          
          )
        })}
     
    </div>
  )
}
