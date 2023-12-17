import React from 'react'

const CarouselItem = ({item,width}) => {
  return (
    <div className='carousel-item' style={{width:width}}> 
    <img className='carousel-img' src='{}'/>
    <div className='carousel-item-text'>{item.description}</div>
      
    </div>
  )
}

export default CarouselItem
