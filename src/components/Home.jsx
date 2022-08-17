import React from 'react'
import Product from './Product';
function Home() {
  return (
      <div className='home'>
          <div className="homeContainer">
              <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                  alt=""
                  className='homeImage'
              />
              <div className='homeRow'>
                  <Product
                      title={'The Leand startup'}
                      image={'https://images-na.ssl-images-amazon.com/images/I/41g9RfNVZBL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'}
                      price={29.99}
                      rating={5}
                  />
                  <Product />
                 
              </div>
              <div className='homeRow'>
               
              </div>
      </div>
    </div>
    );
};

export default Home;
