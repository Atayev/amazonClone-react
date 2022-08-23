import React from 'react'
import Subtotal from './Subtotal'
import { useSelector } from 'react-redux';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {   

    const basketItem = useSelector(state => state.basket)
    console.log(basketItem)
  return (
      <div className='checkout'>
          
          <div className="checkoutLeft">
          <img src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/firetv_inline__mebeforeyou._TTW_.jpg" className='checkoutAd' alt="" />
              <div>
                  <h2 className='checkoutTitle'>Shopping Cart</h2>
                 
                  {basketItem.basket.map((item, key) => {
                      return <CheckoutProduct
                        id= {item.id}
                        title={item.title}
                        image={item.image}
                        price={Number(item.price)}
                        rating={Number(item.rating)}
                        key={key}
                      />
                  })}
               
              </div>
          </div>
          <div className="checkoutRight">
              <Subtotal />  
          </div>
         
    </div>
  )
}

export default Checkout