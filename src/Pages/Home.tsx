import { NavLink } from "react-router-dom"

export default function Home() {
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
          <NavLink to='/products'>
            <button style={{backgroundColor:"transparent", border:"none", color:"white"}}>Shop Now</button>
          </NavLink>
          <NavLink to='/products'>
            <button style={{backgroundColor:"transparent", border:"none", color:"white"}}>Find More</button>
          </NavLink>
        </div>
        
      </div>
    </div>
  )
}
