import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div 
      className='navbar' 
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor:"#6EC1E4",
        height:"80px",
        // justifyContent: "center",
        paddingTop:"50px",
        justifyContent:"left",
        alignContent:"center",
      }}
    >
      <div className='left' style={{marginLeft:"100px", marginRight:"500px"}}>
        <NavLink to='/'>
          <button className='home-btn' style={{
            backgroundColor:"transparent", 
            border:"none", 
            fontSize:"18px", 
            marginRight:"30px", 
            fontWeight:"bold",
            cursor:"pointer",
            color:"white"
          }}>Home</button>
        </NavLink>
        <NavLink to='/everything'>
          <button className='everything-btn'
            style={{
              backgroundColor:"transparent", 
              border:"none", 
              fontSize:"18px", 
              marginRight:"30px", 
              fontWeight:"bold",
              cursor:"pointer",
              color:"white"
            }}
          >Everything</button>
        </NavLink>
        <NavLink to='/womens'>
          <button className='womens btn'
          style={{
            backgroundColor:"transparent", 
            border:"none", 
            fontSize:"18px", 
            marginRight:"30px",
            color:"white", 
            fontWeight:"bold",
            cursor:"pointer"
          }}>Womens</button>
        </NavLink>
        <NavLink to='men'>
          <button className='men btn'
            style={{
              backgroundColor:"transparent", 
              border:"none", 
              fontSize:"18px", 
              marginRight:"30px",
              color:"white", 
              fontWeight:"bold",
              cursor:"pointer"
            }}>Mens</button>
        </NavLink>
        <NavLink to='accessories'>
          <button className='accessories btn'
            style={{
              backgroundColor:"transparent", 
              border:"none", 
              fontSize:"18px", 
              marginRight:"30px",
              color:"white", 
              fontWeight:"bold",
              cursor:"pointer"
            }}>Acessories</button>
        </NavLink>
      </div>

      <div className='right'>
        <NavLink to='/about'>
          <button className='about btn'
            style={{
              backgroundColor:"transparent", 
              border:"none", 
              fontSize:"18px", 
              marginRight:"30px",
              color:"white", 
              fontWeight:"bold",
              cursor:'pointer'
            }}>About</button>
        </NavLink>
        <NavLink to='contact'>
          <button className='contact btn'
            style={{
              backgroundColor:"transparent", 
              border:"none", 
              fontSize:"18px", 
              marginRight:"30px",
              color:"white", 
              fontWeight:"bold",
              cursor:"pointer"
            }}
          >Contact Us</button>
        </NavLink>
      </div>
      
    </div>
  )
}
