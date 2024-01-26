import React from 'react'
import { NavLink } from 'react-router-dom'
import { GrFacebookOption } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoGoogle } from "react-icons/io";

export default function Footer() {
  return (
    <div>
      <hr style={{marginTop:"0px", color:"black"}}/>
      <div style={{fontSize:"30px", fontWeight:"bold", height:"50px", paddingTop:"20px", marginLeft:"10px"}}>SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</div>
      <hr />

      <div style={{display:"flex", flexDirection:"row", height:"300px", paddingTop:"20px", paddingLeft:"20px"}}>
        <div style={{width:"200px", marginLeft:"150px", marginRight:"100px"}}>
          <div style={{fontSize:"30px", fontWeight:"bold"}}>DNK</div>
          <div>The best look anytime, anywhere</div>
          
        </div>
        <div style={{display:"flex", flexDirection:"column", marginRight:"200px"}}>
          <div style={{fontSize:"30px", fontWeight:"400", marginBottom:"20px"}}>FOR HER</div>
          <NavLink to='/womens'>
            <button style={{backgroundColor:"transparent", border:"none", fontSize:"20px", marginBottom:"10px", marginLeft:"-5px", cursor:"pointer"}}>Womens Jeans</button>
          </NavLink>
          <NavLink to='/womens'>
            <button style={{backgroundColor:"transparent", border:"none", fontSize:"20px", marginBottom:"10px", marginLeft:"-5px", cursor:"pointer"}}>Tops and Shirts</button>
          </NavLink>
          <NavLink to='/womens'>
            <button style={{backgroundColor:"transparent", border:"none", fontSize:"20px", marginBottom:"10px", marginLeft:"-5px", cursor:"pointer"}}>Womens Jackets</button>
          </NavLink>
          <NavLink to='/womens'>
            <button style={{backgroundColor:"transparent", border:"none", fontSize:"20px", marginBottom:"10px", marginLeft:"-5px", cursor:"pointer"}}>Heels and Flats</button>
          </NavLink>
          <NavLink to='/womens'>
            <button style={{backgroundColor:"transparent", border:"none", fontSize:"20px", marginBottom:"10px", marginLeft:"-5px", cursor:"pointer"}}>Womens Accessories</button>
          </NavLink>
        </div>
        <div style={{display:"flex", flexDirection:"column", marginRight:"150px", fontSize:"30px", marginBottom:"20px"}}>
          FOR HIM
          <NavLink to='/men'>
            <button style={{backgroundColor:"transparent", border:"none", fontSize:"20px", marginBottom:"10px", marginLeft:"-5px", cursor:"pointer"}}>Mens Jeans</button>
          </NavLink>
          <NavLink to='/men'>
            <button style={{backgroundColor:"transparent", border:"none", fontSize:"20px", marginBottom:"10px", marginLeft:"-5px", cursor:"pointer"}}>Mens Shirts</button>
          </NavLink>
          <NavLink to='/men'>
            <button style={{backgroundColor:"transparent", border:"none", fontSize:"20px", marginBottom:"10px", marginLeft:"-5px", cursor:"pointer"}}>Mens Jackets</button>
          </NavLink>
          <NavLink to='/men'>
            <button style={{backgroundColor:"transparent", border:"none", fontSize:"20px", marginBottom:"10px", marginLeft:"-5px", cursor:"pointer"}}>Mens Shoes</button>
          </NavLink>
          <NavLink to='/men'>
            <button style={{backgroundColor:"transparent", border:"none", fontSize:"20px", marginBottom:"10px", marginLeft:"-5px", cursor:"pointer"}}>Mens Accessories</button>
          </NavLink>
        </div>
        <div style={{display:"flex", flexDirection:"column"}}>
          <div style={{fontSize:"30px", marginBottom:"20px"}}>Subscribe</div>
          <div style={{display:"flex", flexDirection:"column"}}>
          <input type="text" placeholder='Enter your email address...' style={{width:"200px", height:"40px", marginTop:"00px", border:"1px solid lightgray"}}/>
          <button style={{backgroundColor:"#0084d6", width:"110px", height:'50px', border:"none", marginTop:"20px", color:"white", fontSize:"18px", cursor:"pointer"}}>Subscribe</button>
        </div>
        </div>
      </div>
      <hr />
      <div style={{display:"flex", flexDirection:"row", height:"50px", paddingLeft:"20px", justifyContent:"space-between", paddingRight:"20px"}}>
        <div style={{marginTop:"10px"}}>
          Copyright © 2024 Bartholomew.
        </div>
        <div className='icons' style={{display:"flex", flexDirection:"row", marginTop:"-10px", justifyContent:"center", alignItems:"center"}}>
          <a href="www.facebook.com" style={{color:"black"}}>
            <GrFacebookOption style={{width:"25px", height:"25px", margin:"10px"}}/>
          </a>
          <a href="youtube.com" style={{color:"black"}}>
            <FaYoutube style={{width:"25px", height:"25px", margin:"10px"}}/>
          </a>
          <a href="twitter.com" style={{color:"black"}}>
            <FaTwitter style={{width:"25px", height:"25px", margin:"10px"}}/>
          </a>
          <a href="" style={{color:"black"}}>
            <IoLogoInstagram style={{width:"25px", height:"25px", margin:"10px"}}/>
          </a>
          <a href="goggle.com" style={{color:"black"}}>
            <IoLogoGoogle style={{width:"25px", height:"25px", margin:"10px"}}/>
          </a>
          
        </div>
      </div>

    </div>
  )
}
