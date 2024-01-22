import React from 'react'
import { NavLink } from 'react-router-dom'

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
      <div className='left' style={{marginLeft:"100px", marginRight:"700px"}}>
        <NavLink to='/everything'>
          <button 
            style={{
              backgroundColor:"transparent", 
              border:"none", 
              fontSize:"18px", 
              marginRight:"30px", 
              color:"white", 
              fontWeight:"bold"
            }}
          >Everything</button>
        </NavLink>
        <NavLink to='/womens'>
          <button style={{
            backgroundColor:"transparent", 
            border:"none", 
            fontSize:"18px", 
            marginRight:"30px",
            color:"white", 
            fontWeight:"bold"
          }}>Womens</button>
        </NavLink>
        <NavLink to='men'>
          <button 
            style={{
              backgroundColor:"transparent", 
              border:"none", 
              fontSize:"18px", 
              marginRight:"30px",
              color:"white", 
              fontWeight:"bold"
            }}>Mens</button>
        </NavLink>
        <NavLink to='accessories'>
          <button 
            style={{
              backgroundColor:"transparent", 
              border:"none", 
              fontSize:"18px", 
              marginRight:"30px",
              color:"white", 
              fontWeight:"bold"
            }}>Acessories</button>
        </NavLink>
      </div>

      <div className='right'>
        <NavLink to='/about'>
          <button 
            style={{
              backgroundColor:"transparent", 
              border:"none", 
              fontSize:"18px", 
              marginRight:"30px",
              color:"white", 
              fontWeight:"bold"
            }}>About</button>
        </NavLink>
        <NavLink to='contact'>
          <button 
            style={{
              backgroundColor:"transparent", 
              border:"none", 
              fontSize:"18px", 
              marginRight:"30px",
              color:"white", 
              fontWeight:"bold"
            }}
          >Contact Us</button>
        </NavLink>
      </div>
      
    </div>
  )
}
