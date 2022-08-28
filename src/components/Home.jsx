import React from 'react'
import Product from './Product';
import Slider from './Slider';
function Home() {
    return (
       
      <div className='home'>
          <div className="homeContainer">
              <Slider />
              <div className='homeRow'>
                  <Product
                      id='453453453'
                      title={'The Leand startup'}
                      image={'https://images-na.ssl-images-amazon.com/images/I/41g9RfNVZBL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'}
                      price={29.99}
                      rating={5}
                  />
                  <Product
                     id='32232323'
                     title={'It Ends with Us: A Novel'}
                     image={'https://images-na.ssl-images-amazon.com/images/I/51qX2RGyhhL._SX320_BO1,204,203,200_.jpg'}
                     price={9.99}
                     rating={5}
                  />
                  <Product
                     id='43214312'
                     title={'Archers Voice'}
                     image={'https://images-na.ssl-images-amazon.com/images/I/41-IFCUt+sL._SY344_BO1,204,203,200_.jpg'}
                     price={11.49}
                     rating={5}
                  />
                  <Product
                     id='546546456'
                     title={'Wait for Me'}
                     image={'https://images-na.ssl-images-amazon.com/images/I/41cAsGhR2pL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'}
                     price={11.94}
                     rating={5}
                  />
              </div>
              <div className='homeRow'>
                  <Product
                     id='23424234'
                     title={'Instant Vortex Plus 6-Quart Air Fryer Oven, From the Makers of Instant Pot with ClearCook Cooking Window'}
                     image={'https://m.media-amazon.com/images/I/71VgHp7sgEL._AC_SX679_.jpg'}
                     price={85}
                     rating={5}
                  />
                  <Product
                     id='32525235' 
                     title={'Seagate Portable 2TB External Hard Drive '}
                     image={'https://m.media-amazon.com/images/I/81tjLksKixL._AC_SX679_.jpg'}
                     price={29.99}
                     rating={5}
                  />
                  <Product
                     id='32143241' 
                     title={'Matein Travel Laptop Backpack Grey'}
                     image={'https://m.media-amazon.com/images/I/81OFxhFWmML._AC_SY450_.jpg'}
                     price={56.99}
                     rating={5}
                  />
              </div>
              <div className='homeRow'>
                  <Product
                     id='1251235'
                     title={'LG 49WL95C-W Ultrawide Dual QHD Monitor 49" 32: 9 (5120 x1440) Curved IPS Display, HDR10, USB Type-C, HDR 10, Ambient Light Sensor, 2 x 10W Stereo Speaker'}
                     image={'https://m.media-amazon.com/images/I/71EP7F-yPKL._AC_SX679_.jpg'}
                     price={1387}
                     rating={5}
                  />
              </div>
          </div>
          
            </div>
          
    );
};

export default Home;
