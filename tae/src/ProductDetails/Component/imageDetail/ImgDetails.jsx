import React from 'react'

export default function ImgDetails() {
  return (
   <div className='main-container'>

<div className='cart-image'>
       <div className="Nav">
              <span><a href="/">Home</a> <MoreArrow/></span>
              <span><a href="/">Tea&Coffee</a><MoreArrow/></span>
              <span><a href="/">Vietnamese Cold Coffee</a><MoreArrow/></span>
          </div>

      <div className="imageDetail">
      <div className="itemimage1">
         {images.map((img, i) => (

                    <div
                      onClick={() => {
                        setCurrentIndex(i);
                      }}
                      key={i}
                        className={`item ${
                        currentIndex === i ? "selectedItem" : ""
                      }`} >
        <img src={img} alt="slide"  />
       </div>

         ))}
         </div>
       
      
      <div className="itemimage2">
        <div  className='Image-container'>

       <img src={images[currentIndex]} alt="slide"/>


       <div  className='Image-btn'>
      <button onClick={prevSlide}>⟨</button>
      <button onClick={nextSlide}>⟩</button></div>
      </div>

      </div>
      
</div>

</div>
       <div className='cart-btn'> <button className="AddtoCart">Add To Cart</button></div>
    </div>
    
  );
};