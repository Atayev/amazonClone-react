import React, { useEffect,useState } from 'react'
import { db,auth } from '../firebase'
import { useSelector } from 'react-redux'
import Order from './Order'
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
                console.log(snapshot.docs)
                setOrders(snapshot.docs.map(doc=>({
                    id: doc.id,
                    data:doc.data()
                })))
            })
        }
        else setOrders([])
        // eslint-disable-next-line
    }, [])
    if (!auth.currentUser) {
        return (
            <div className='orders'>
                <h1>Your Orders</h1>
                <p>You need to sign in to see your orders</p>
            </div>
         
        )
      }
  return (
      <div className='orders'>
          <h1>Your Orders</h1>
          <div className="ordersItem">
              {console.log(orders)}
              {orders?.map((order,key) => <Order key={key} order={order}/>)}
          </div>
    </div>
  )
}

export default Orders