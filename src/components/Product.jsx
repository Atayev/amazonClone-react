import React from 'react'

function Product({id,title,image,price,rating}) {
  return (
    <div className="product">
    <div className="productInfo">
      <p>{title}</p>
      <p className="productPrice">
        <small>$</small>
        <strong>{price}</strong>
      </p>
        <div className="productRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
             <p>*</p>
          ))}
        
      </div>
    </div>

    <img src={image} alt="" />

    <button>Add to Basket</button>
  </div>)
}

export default Product