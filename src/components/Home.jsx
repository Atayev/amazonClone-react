import React,{useState,useEffect} from 'react'
import Product from './Product';
import Slider from './Slider';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { db } from '../firebase'
import { getDocs, collection} from 'firebase/firestore'

function Home() {
   const navigate = useNavigate()
   const state = useSelector(state => state.basket)
   const [products, setProducts] = useState([])
   useEffect(() => {
      const fetchProducts = async (id) => {
         const productRef = collection(db, 'products')
         const productSnap =await getDocs(productRef)
         const prodc = []
         productSnap.forEach((product) => prodc.push(product.data()))
         setProducts(prodc)
      }
      fetchProducts()
   }, [navigate])

    return (
       
      <div className='home'>
          <div className="homeContainer">
              <Slider />
             <div className='homeRow'>
                {products.map((product,key) => { if(product.category==='book'){
                     return ( <Product
                   category={product.category}
                   id={product.userRef}
                   title={product.name}
                   image={product.imgUrls}
                   price={product.price}
                    rating={5}
                   key={key} 
                   />)
                  } else return null
                }
                 )}
              </div>
              <div className='homeRow'>
              {products.map((product,key) => { if(product.category==='electronics' || product.category==='other'){
                     return ( <Product
                   category={product.category}
                   id={product.userRef}
                   title={product.name}
                   image={product.imgUrls}
                   price={product.price}
                  rating={5}
                   key={key} 
                   />)
                  } else return null
                }
                 )}
             </div>
              <div className='homeRow'>
              {products.map((product,key) => { if(product.category==='bigelectronics'){
                     return ( <Product
                   category={product.category}
                   id={product.userRef}
                   title={product.name}
                   image={product.imgUrls}
                   price={product.price}
                    rating={5}
                   key={key} 
                   />)
                  } else return null
                }
                 )}
             </div>
             { !state.user ? '' : <button onClick={()=>navigate('/product-sell')}>Sell your Product</button> }
             
          </div>
          
            </div>
          
    );
};

export default Home;
