import React, { useState } from 'react'
import {useGetProducts} from '../hooks/useGetProducts'
import { NavLink } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { GiShoppingBag } from "react-icons/gi";
import './Everything.css'
import {db} from '../config/firebase'

export default function Everything() {
  const {products} = useGetProducts();
  const [specProduct, setSpecProduct] = useState("");
  console.log({products})

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [src, setSrc] = useState("");

  const Push = () => {
    // console.log("push")
    // db.ref("shopping-cart").set({
    //   title:title,
    //   price:price,
    //   src:src
    // }).catch(alert);
  }


  return (
    <div 
      style={{
        backgroundColor:"#FAF9F6",
        display:"flex",
        flexDirection:"row"
      }}
    >
      <div className='side-bar' 
        style={{
          width:"1400px", 
          backgroundColor:"lightgray", 
          display:"flex",
          flexDirection:"column",
          paddingLeft:"50px"
        }}
      >
        
        <div style={{display:"flex", flexDirection:"row"}}>
          <input type="text" placeholder='Search for products...' style={{width:"250px", height:"40px", marginTop:"100px", border:"none"}}/>
          <button style={{backgroundColor:"black", width:"42px", height:'42px', border:"none", marginTop:"100px"}}><IoIosArrowForward color='white' style={{width:"30px", height:"30px"}}/></button>
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
      <div 
        style={{
          display:"flex",
          flexWrap: "wrap",
          marginLeft:"0px",
          marginTop:"100px"
        }}
      >
        {products.length >0 && products?.map((product) => {
          console.log(product.title)
          console.log(product.id)
          // setTitle(product.title);
          // setPrice(product.price);
          // setSrc(product.src);
          return (
            <NavLink 
              style={{marginLeft:"50px"}} 
              to='/product'
              className='product-name'
              id={product.id}
            >
              <button style={{border:"none", backgroundColor:"transparent", textAlign:"left", cursor:"pointer"}}>
                <img src={product.src} alt="" style={{width:"300px", height:"300px"}}/>
                <button className='product-bag'
                  style={{
                    position:"absolute", 
                    backgroundColor:"white", 
                    width:"50px", 
                    height:"50px", 
                    borderRadius:"50%", 
                    justifyContent:"center", 
                    alignItems:"center",
                    marginTop:"-290px",
                    marginLeft:"230px",
                  }}
                >
                  <GiShoppingBag style={{width:"30px", height:"30px"}} onClick={Push}/>
                </button>
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
