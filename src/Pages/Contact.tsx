
export default function Contact() {
  return (
    <div style={{backgroundColor:"#f5f7f9"}}>
      <div className="blue-box" 
        style={{
          width:"100vw", 
          height:"30vh", 
          backgroundColor:"#6EC1E4", 
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}
      >
        <div style={{fontSize:"60px", fontWeight:"bold", color:"white"}}>Contact Us</div>
      </div>
      <div className="phone-nums" style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"50px"}}>
        <div style={{fontSize:"20px", fontWeight:"bold"}}>Have any queries?</div>
        <div style={{fontSize:"50px", fontWeight:"bold", marginTop:'20px', marginBottom:"50px"}}>We're here to help</div>
        <div className="numbers-list" style={{display:"flex", flexDirection:"row"}}>
          <div className="sales" 
            style={{
              width:"250px", 
              height:"250px", 
              textAlign:"center", 
              backgroundColor:"#ffffff",
              marginRight:"50px",
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"center"
              }}
            >
            <div style={{fontSize:"30px", fontWeight:"bold"}}>Sales</div>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
            <div style={{fontSize:"20px", color:"blue", fontWeight:"bold"}}>1800 123 4567</div>
          </div>
          <div className="complaints" 
            style={{
              width:"250px", 
              height:"250px", 
              textAlign:"center", 
              backgroundColor:"#ffffff",
              marginRight:"50px",
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"center"
            }}
          >
            <div style={{fontSize:"30px", fontWeight:"bold"}}>Complaints</div>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
            <div style={{fontSize:"20px", color:"blue", fontWeight:"bold"}}>1800 123 4567</div>
          </div>
          <div className="returns" 
            style={{
              width:"250px", 
              height:"250px", 
              textAlign:"center", 
              backgroundColor:"#ffffff",
              marginRight:"50px",
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"center"
            }}
          >
            <div style={{fontSize:"30px", fontWeight:"bold"}}>Returns</div>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
            <div style={{fontSize:"20px", color:"blue", fontWeight:"bold"}}>1800 123 4567</div>
          </div>
          <div className="marketing" 
            style={{
              width:"250px", 
              height:"250px", 
              textAlign:"center", 
              backgroundColor:"#ffffff",
              marginRight:"50px",
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"center"
            }}
          >
            <div style={{fontSize:"30px", fontWeight:"bold"}}>Marketing</div>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
            <div style={{fontSize:"20px", color:"blue", fontWeight:"bold"}}>1800 123 4567</div>
          </div>
        </div>
      </div>

      <div className="contact-form" style={{display:"flex", flexDirection:"row", marginTop:"100px", paddingBottom:"100px"}}>
        <div className="left" style={{width:"500px", display:"flex", textAlign:"left", flexDirection:"column", marginLeft:"160px"}}>
          <div style={{fontSize:"20px", fontWeight:"bold", marginBottom:"10px"}}>Don't be a stranger!</div>
          <div style={{fontSize:"50px", fontWeight:"bold"}}>You tell us. We listen</div>
          <p style={{lineHeight:"1.6", fontSize:"20px"}}>
            Cras elementum finibus lacus nec lacinia. Quisque non convallis nisl, eu condimentum sem. 
            Proin dignissim libero lacus, ut eleifend magna vehicula et. Nam mattis est sed tellus.
          </p>
        </div>
        <div className="right" style={{display:"flex", flexDirection:'column', backgroundColor:"white", padding:"50px", marginLeft:"100px"}}>
          <form action="" style={{display:"flex", flexDirection:"column", width:"500px"}}>
            <input type="text" placeholder="Name" style={{height:"50px", marginBottom:"20px"}}/>
            <input type="text" placeholder="Subject" style={{height:"50px", marginBottom:"20px"}}/>
            <input type="text" placeholder="Email" style={{height:"50px", marginBottom:"20px"}}/>
            <textarea name="" id="" cols="30" rows="10" placeholder="message" ></textarea>
            <button style={{marginTop:"20px", width:"250px", height:"80px", backgroundColor:"#0084d6", color:"white", border:"none", fontSize:"20px"}}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}
