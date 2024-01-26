import React, { useEffect, useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from '../config/firebase'
import { NavLink } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

export default function Men() {
  const [products, setProducts] = useState([]);

  let q = query(collection(db, "store-products"), where("category", "==", "mens"));
 
  
  const searchBarInput = () =>{
    const input = document.getElementsByClassName('search-products-box');
    q = query(collection(db, "store-products"), where("title", "==", input))
    getProduct();
  }
  

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
    <div style={{paddingTop:"0px", display:"flex", flexDirection:"row"}}>
       <div style={{display:"flex", flexDirection:"column", width:"500px", paddingLeft:"50px", backgroundColor:"lightgray"}}>
        <div style={{display:"flex", flexDirection:"row"}}>
          <input type="text" name="text-box" id="" placeholder='search for items...' style={{height:"40px",width:"200px", marginTop:"100px", border:"none"}}/>
          <button 
            style={{
              backgroundColor:"black", 
              width:"42px", 
              height:'42px', 
              border:"none", 
              marginTop:"100px"
            }}
            onClick={searchBarInput}
          >
            <IoIosArrowForward color='white' style={{width:"30px", height:"30px"}}/>
          </button>
        </div>
        
        <div style={{paddingTop:"30px", fontSize:"40px", marginBottom:"20px"}}>Categories</div>
        <NavLink to='/men'>
          <button style={{backgroundColor:"transparent", border:"none", fontSize:"20px", marginBottom:"15px", cursor:"pointer"}}>Men</button>
        </NavLink>
        <NavLink to='/womens'>
          <button style={{backgroundColor:"transparent", border:"none", fontSize:"20px", marginBottom:"15px", cursor:"pointer"}}>Women</button>
        </NavLink>
        <NavLink to='/accessories'>
          <button style={{backgroundColor:"transparent", border:"none", fontSize:"20px", marginBottom:"15px", cursor:"pointer"}}>Acessories</button>
        </NavLink>
       </div>
    
   
      <div style={{marginLeft:'100px', marginTop:"100px"}}>
        <div style={{color:"gray", marginBottom:"10px"}}>Home/Men</div>
        <div style={{fontSize:"50px", marginLeft:"0px"}}>Mens</div>
        <p style={{display:"flex", flexWrap:"wrap", width:"700px", marginBottom:"20px"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquid, officia dolor aspernatur vel assumenda 
          officiis iste voluptas! Similique ipsa, unde quas ad tempore eos suscipit sapiente autem quo nam. Lorem ipsum dolor 
          sit amet, consectetur adipisicing elit. In deleniti a atque totam tenetur dolorum vel fugiat qui neque assumenda.
        </p>
        {products.length >0 && products?.map((product) => {
            return (
              <NavLink 
                style={{marginLeft:"0px", marginRight:"30px"}} 
                to='/product'
                
              >
                <button style={{border:"none", backgroundColor:"transparent", textAlign:"left", cursor:"pointer"}}>
                  <img src={product.src} alt="" style={{width:"300px", height:"300px"}}/>
                  <div style={{fontSize:"20px", fontWeight:"bold", marginBottom:"0", width:"300px"}}>{product.title}</div>
                  <p style={{color:"gray", marginTop:"5px", marginBottom:"10px"}}>{product.category}</p>
                  <div style={{fontSize:"18px", fontWeight:"500", marginBottom:"10px"}}>${product.price}.00</div>
                </button>
                
                
              </NavLink>
              
            
            )
          })}
      </div>
    </div>
  )
}
