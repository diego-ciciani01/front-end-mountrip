import React from "react";
import '../App.css'
import img1 from 'img/img1.jpg'
import img2 from 'img/img2.jpg'
import img3 from 'img/img3.jpg'

function Index(){
    return(
        <div className='slider-container'>
        <span id="slider-image-1"></span>
        <span id="slider-image-2"></span>
        <span id="slider-image-3"></span>
        <div className='image-container'>
          <img src={img1} className='slider-image' />
          <img src={img2} className='slider-image' />
          <img src={img3} className='slider-image'/>
        </div>
        <div className="button-container">
          <a href="#slider-image-1" className="slider-change"></a>
          <a href="#slider-image-2" className="slider-change"></a>
          <a href="#slider-image-3" className="slider-change"></a>
        </div>
      </div>
    );


}

export default Index;