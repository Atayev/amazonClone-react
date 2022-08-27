import React, { useEffect,useState } from 'react'
import { db } from '../firebase'
import { useSelector } from 'react-redux'
import Order from './Order'
import { getBasketTotal } from "./reducer";
function Orders() {
    const [orders, setOrders] = useState([])
    const state = useSelector(state => state.basket)
    useEffect(() => {
        if (state.user) {
            db
            .collection('users')
            .doc(state.user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => {
                setOrders(snapshot.docs.map(doc=>({
                    id: doc.id,
                    data:doc.data()
                })))
            })
        }
        else setOrders([])
    },[])
  return (
      <div className='orders'>
          <h1>Your Orders</h1>
          <div className="ordersItem">
              {orders?.map(order => <Order order={order}/>)}
          </div>
    </div>
  )
}

export default Orders