import React from 'react'
import {useGetProducts} from '../hooks/useGetProducts'
import { NavLink } from 'react-router-dom';

export default function Everything() {
  const {products} = useGetProducts();
  console.log({products})

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
          width:"1300px", 
          backgroundColor:"lightgray", 
          display:"flex",
          flexDirection:"column"
        }}
      >
        <div>Categories</div>
        <input type="text" placeholder='Search products...'/>
        <button value=">" style={{width:"50px", height:"20px"}}>Go</button>
        <NavLink to='/accessories'>
          <button>Accessories</button>
        </NavLink>
        <NavLink to='/men'>
          <button>Men</button>
        </NavLink>
        <NavLink to='/womens'>
          <button>Women</button>
        </NavLink>
      </div>
      <div 
        style={{
          display:"flex",
          flexWrap: "wrap",
          marginLeft:"50px",
          marginTop:"100px"
        }}
      >
        {products.length >0 && products?.map((product) => {
          return (
            <NavLink 
              style={{marginLeft:"50px"}} 
              to='/product'
              title={product.title}
              src={product.src}
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
    </div>
  )
}
