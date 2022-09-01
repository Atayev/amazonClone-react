import React from 'react'
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';
import { getBasketTotal } from "./reducer";
function Order({ order }) {
  return (
      <div className='order'>
          <h2>Order</h2>
          <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
          <p className="orderId">
              <small>{ order.id }</small>
          </p>
          {order.data.basket?.map((item,key) => {
              return <CheckoutProduct
              id= {item.id}
              title={item.title}
              image={item.image}
              price={Number(item.price)}
              rating={Number(item.rating)}
              key={key}
              hideButton  
            />
          })}
          <p className="orderTotal">
              Order Total :   {getBasketTotal(order.data.basket)}$
          </p>
    </div>
  )
}

export default Order