import React from 'react'
import styled from 'styled-components'

const Card = () => {
let headsets = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg';
let keyboards = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg';
let computermice = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg';
let chairs = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg';
let topdeals = 'https://m.media-amazon.com/images/I/61Xo1aLNzNL._AC_SY230_.jpg';
let dining = 'https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg';
let home = 'https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg';
let kitchen = 'https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg';
let health = 'https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg';
let ship = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg';

return (
<Container className='carddetails'>

<div className='d-flex m-2 w-100 cardmedia'>

<div className='w-100 bg-light'>
<h4 className='m-2'>Gaming Accessories</h4>
<div className="row row-cols-1 row-cols-md-2 g-2 w-100">
  <div className="col">
  
    <div className="card">
      <img src={headsets} className="card-img-top" alt="headsets"/>
      <div className="card-body">
        <p className="card-text"><a href="#">Headsets</a></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={keyboards} className="card-img-top" alt="keyboard"/>
      <div className="card-body">
        
        <p className="card-text"><a href="#">Keyboards</a></p>
      </div>
    </div>
    
  </div>
  <div className="col">
    <div className="card">
      <img src={computermice} className="card-img-top" alt="computermice"/>
      <div className="card-body">
        <p className="card-text"><a href="#">Computer mice</a></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={chairs} className="card-img-top" alt="chair"/>
      <div className="card-body">
        <p className="card-text"><a href="#">Chairs</a></p>
      </div>
    </div>
  </div>
  <a href="#">See more</a>
</div>

</div>


<div className="row row-cols-1 row-cols-md-2 g-4 topDeal w-100 bg-light">
    
<div className='w-100'>
    <h4 className='m-2'>Top Deal</h4>
  <div className="col">
    <div className="card">
      <img src={topdeals} className="card-img-top" alt="..."/>
      <div className="card-body">
        <div className='d-flex align-items-center'>
            <div><button className='btn btn-danger'>Up to 36% off</button></div>
            <div><p className='danger'>Top deal</p></div>
        </div>
        <p className="card-text ">Powerlix camping sleeping pad and pillow</p>
      </div>
    </div>
    <a href="#">See all deals</a>
  </div>
  
  
  
</div>
</div>



<div className='w-100 bg-light '>
    <h4 className='m-2'>Refresh your space</h4>
    <div className="row row-cols-1 row-cols-md-2 g-4 w-100">

  <div className="col">
    <div className="card">
      <img src={dining} className="card-img-top" alt="dining"/>
      <div className="card-body">
        
        <p className="card-text"><a href="#">Dining</a></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={home} className="card-img-top" alt="home"/>
      <div className="card-body">
        
        <p className="card-text"> <a href="#">Home</a></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={kitchen} className="card-img-top" alt="kitchen"/>
      <div className="card-body">
        
        <p className="card-text"><a href="#">Kitchen</a></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={health} className="card-img-top" alt="health"/>
      <div className="card-body">
        
        <p className="card-text"><a href="#">Health and Beauty</a></p>
      </div>
    </div>
  </div>
  </div>
  <a href="#">See more</a>
</div>


<div className="row row-cols-1 row-cols-md-2 g-4 shipping w-100 bg-light">
  <div className="col w-100">
    <div className="card">
      <h3>Sign in for the best experience</h3>
      <div className="card-body">
        <button className='btn btn-warning w-100'>Sign in securely</button>
        
      </div>
    </div>
  </div>
  
  
  <div className="col w-100">
    <div className="card">
      <img src={ship} className="card-img-top" alt="..."/>

      
    </div>
  </div>
</div>






</div>

</Container>
)
}



export default Card


const Container = styled.div`
.carddetails{
    a{
       text-decoration: none; 
    }
    

}
.card{
    
border  : none;
a{
    text-decoration: none;
    color: black;
}

}

.topDeal{
    display: flex;
    flex-direction: column;
    img{
        width: 350px;
    }
    
}
a{
    text-decoration: none;
    color: #3e3eb4;
}
.shipping{
    display: flex;
    flex-direction: column;
}

.cardmedia{
    @media(max-width:576px){
        flex-direction: column;
    }
  
    gap: 15px
}



`