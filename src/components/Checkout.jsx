import React from 'react'
import Subtotal from './Subtotal'
import { useSelector } from 'react-redux';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {

    const basketItem= useSelector(state=>state.basket)
  return (
      <div className='checkout'>
          <div className="checkoutLeft">
              <img src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/firetv_inline__mebeforeyou._TTW_.jpg" className='checkoutAd' alt="" />
              <div>
                  <h2 className='checkoutTitle'>Your Shopping Basket</h2>
                  {basketItem.map(item => {
                      return <CheckoutProduct
                        id= {item.id}
                        title={item.title}
                        image={item.image}
                        price={Number(item.price)}
                        rating={Number(item.rating)}
                      
                      />
                  })}
              </div>
          </div>
          <div className="checkoutRight">
              <h2>The subtotal will go here</h2>
              <Subtotal />

          </div>
    </div>
  )
}

export default Checkout