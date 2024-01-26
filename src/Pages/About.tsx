import React from 'react'

export default function About() {
  return (
    <div style={{}}>
      <div className='blue-box' 
        style={{
          width:"100vw", 
          height:"60vh", 
          backgroundColor:"#6EC1E4",
          display: "flex",
          justifyContent:"center",
          alignItems:"center"
        }}
      >
        <div 
          style={{
            fontSize:"60px",
            color:"white",
            fontWeight:"bold"
        }}>
          About Us
          </div>
      </div>
      <div style={{display:"flex", flexDirection:"row", marginTop:"50px", padding:"20px", backgroundColor:"white"}}>
        <div className="left" style={{width:"700px", marginLeft:"50px"}}>
          <div style={{fontSize:"60px"}}>Who We Are</div>
          <p style={{width:"500px", lineHeight:"1.6", fontSize:"18px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam nam vel error 
            reprehenderit? Perferendis quae sequi praesentium cum, velit nobis eos molestias. Iste, 
            illo eaque atque quas blanditiis animi tempora?
          </p>
        </div>
        <div className="right">
          <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/slide-image-free-img-1024x576.jpg" 
            alt="" 
            style={{
              width:"614px",
              height:"345.6px"
            }}
          />
        </div>
      </div>

      <div className='our-team' style={{marginLeft:"50px", textAlign:"center", marginTop:"100px"}}>
        <div style={{fontSize:"20px", fontWeight:"bold"}}>A Few Words About</div>
        <div style={{fontSize:"50px", fontWeight:"bold"}}>Our Team</div>
        <p style={{textAlign:"center", width:"1000px", marginLeft:"250px", lineHeight:"1.5"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, minus! Aperiam repellendus odio maiores in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quis voluptatibus quam! Dolorem sapiente dolorum quidem voluptas fugiat ea eos commodi earum hic nisi, impedit cum est aliquam, officia magnam.</p>
        <div className='leaders' style={{backgroundColor:'white', display:"grid", gridTemplateColumns:"150px 150px 150px", columnGap:"100px", justifyContent:"center"}}>
          <div className='spector' style={{width:"200px", height:"200px", backgroundColor:"#f5f7f9", margin:"20px",}}>
            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team2-free-img.png" 
              alt="" 
              style={{width:"100px", height:"100px", marginTop:"20px"}}/>
            <div>Harvey Spector</div>
            <div>CEO</div>
          </div>
          <div className='pearson' style={{width:"200px", height:"200px", backgroundColor:"#f5f7f9", margin:"20px"}}>
            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team1-free-img.png" 
              alt="" 
              style={{width:"100px", height:"100px", marginTop:"20px"}}/>
            <div>Jessica Pearson</div>
            <div>COO</div>
          </div>
          <div className='zain' style={{width:"200px", height:"200px", backgroundColor:"#f5f7f9", margin:"20px"}}>
            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team3-free-img.png" 
              alt="" 
              style={{width:"100px", height:"100px", marginTop:"20px"}}/>
            <div>Rachel Zain</div>
            <div>Marketing Head</div>
          </div>
          <div className='litt' style={{width:"200px", height:"200px", backgroundColor:"#f5f7f9", margin:"20px"}}>
            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team4free-img.png" 
              alt="" 
              style={{width:"100px", height:"100px", marginTop:"20px"}}/>
            <div>Luise Litt</div>
            <div>Lead Developer</div>
          </div>
          <div className='bennet' style={{width:"200px", height:"200px", backgroundColor:"#f5f7f9", margin:"20px"}}>    
            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team5-free-img.png" 
            alt="" 
            style={{width:"100px", height:"100px", marginTop:"20px"}}/>
            <div>Katrina Bennet</div>
            <div>Intern Designer</div>
          </div>
          <div className='Ross' style={{width:"200px", height:"200px", backgroundColor:"#f5f7f9", margin:"20px"}}>
            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team6-free-img.png" 
              alt="" 
              style={{width:"100px", height:"100px", marginTop:"20px"}}/>
            <div>Mike Ross</div>
            <div>Intern Designer</div>
          </div>
        </div>
      </div>

      <div className='icons' style={{display:"flex", flexDirection:"row", textAlign:"center", marginLeft:"300px", marginTop:"100px", marginBottom:"100px"}}>
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
