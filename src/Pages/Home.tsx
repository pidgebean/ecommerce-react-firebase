import { NavLink } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from '../config/firebase'

export default function Home() {
  const [products, setProducts] = useState([]);

  const q = query(collection(db, "store-products"), where("featured", "==", true));

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
    <div style={{backgroundColor:"#6EC1E4"}}>
      <div 
        style={{
          backgroundColor:"#6EC1E4",
          marginTop:"-20px",
          height: "60vh",
          width:"50vw",
          display:"flex",
          flexDirection:"column",
          
          justifyContent:"left",
          alignItems:"left",
          textAlign:"left",
          marginLeft:"200px",
          paddingTop:"100px"
        }}>

        <h2 
          style={{
            fontSize: "60px",
            color:"white",
            marginBottom:"0px"
          }}>
            Raining Offers for Hot Summer
        </h2>
        <h4 
          style={{fontSize:"30px", color:"white"}}>25% Off On All Products</h4>
        <div style={{display:'flex', flexDirection:"row"}}>
          <NavLink to='/everything'>
            <button style={{backgroundColor:"white", border:"2px solid white", color:"#6EC1E4", width:"110px", height:"40px", marginRight:"20px", cursor:"pointer"}}>Shop Now</button>
          </NavLink>
          <NavLink to='/everything'>
            <button style={{backgroundColor:"transparent", border:"2px solid white", color:"white", width:"110px", height:"40px", cursor:"pointer"}}>Find More</button>
          </NavLink>
        </div>

        
      </div>


      <div className="featured-products" style={{backgroundColor:"white", paddingTop:"100px", paddingLeft:"100px"}}>
        <div style={{marginLeft:"500px", fontSize:"50px", fontWeight:"bold", marginBottom:"50px"}}>Featured Products</div>
        <div className="products-loop">
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

      <div className="limited-offer" style={{backgroundColor:"white", width:"100vw", height:"60vh", paddingTop:"100px"}}>
        <div 
          style={{
            backgroundColor:"#6EC1E4", 
            width:"70vw", 
            marginLeft:"200px", 
            height:"40vh", 
            padding:"60px", 
            display:"flex", 
            flexDirection:"row",
          }}>
          <div className="left" style={{display:"flex", flexDirection:"column"}}>
            <div style={{color:"white", fontSize:"30px", fontWeight:"bold"}}>Limited Time Offer</div>
            <div style={{color:"white", fontSize:"60px", fontWeight:"bold"}}>Special Edition</div>
            <p style={{width:"450px", color:"white", fontSize:"20px"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, 
              pulvinar dapibus leo.</p>
            <div style={{fontSize:"25px", color:"white", width:"450px", lineHeight:"1.4", marginBottom:"20px"}}>Buy This T-shirt At 20% Discount, Use Code OFF20</div>
            <NavLink to='/everything'>
              <button style={{backgroundColor:"white", color:"black", width:"150px", height:"50px", border:"none", cursor:"pointer", fontSize:"18px"}}>SHOP NOW</button>
            </NavLink>
          </div>
          <div className="right" style={{marginLeft:"200px", fontSize:"50px", color:"white", fontWeight:"bold", marginTop:"100px"}}>Code: OFF20</div>
          
        </div>
        
      </div>
      
    
      <div className='icons' style={{display:"flex", flexDirection:"row", textAlign:"center", paddingLeft:"300px", paddingTop:"100px", paddingBottom:"100px", backgroundColor:"white"}}>
        <div style={{width:"250px", marginRight:"15px"}}>
          <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/globe-free-img.png" alt="" style={{width:"50px", height:"50px", marginBottom:"10px"}}/>
          <div style={{fontSize:"20px", fontWeight:"bold", marginBottom:"10px"}}>Worldwide Shipping</div>
          <div style={{lineHeight:"1.5"}}>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
        </div>
        <div style={{width:"250px", marginRight:"15px"}}>
          <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/quality-free-img.png" alt="" style={{width:"50px", height:"50px" , marginBottom:"10px"}}/>
          <div style={{fontSize:"20px", fontWeight:"bold", marginBottom:"10px"}}>Best Quality</div>
          <div style={{lineHeight:"1.5"}}>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
        </div>
        <div style={{width:"250px", marginRight:"15px"}}>
          <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/tag-free-img.png" alt="" style={{width:"50px", height:"50px", marginBottom:"10px"}}/>
          <div style={{fontSize:"20px", fontWeight:"bold", marginBottom:"10px"}}>Best Offers</div>
          <div style={{lineHeight:"1.5"}}>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
        </div>
        <div style={{width:"250px", marginRight:"15px"}}>
          <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/lock-free-img.png" alt="" style={{width:"50px", height:"50px", marginBottom:"10px"}}/>
          <div style={{fontSize:"20px", fontWeight:"bold", marginBottom:"10px"}}>Secure Payments</div>
          <div style={{lineHeight:"1.5"}}>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
        </div>
      </div>
    
    </div>
  )
}
