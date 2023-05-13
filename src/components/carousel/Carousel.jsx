import React from 'react'

const Carousel = () => {
    let image1 = "https://m.media-amazon.com/images/I/61MXV7EV6dL._SX3000_.jpg";
    let image2 = "https://m.media-amazon.com/images/I/61sUQIK1GWL._SX3000_.jpg";
    let image3 = "https://m.media-amazon.com/images/I/7103Uxf0QaL._SX3000_.jpg";
    let image4 = "https://m.media-amazon.com/images/I/61lcj+uyAkL._SX3000_.jpg";
return (
    <div>

<div id="carouselExample" class="carousel slide">
<div class="carousel-inner">
    <div class="carousel-item active">
    <img src={image1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <img src={image2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <img src={image3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <img src={image4} class="d-block w-100" alt="..."/>
    </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
</button>
</div>
    

</div>
)
}

export default Carousel