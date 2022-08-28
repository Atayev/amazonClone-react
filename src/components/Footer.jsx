import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
function Footer() {
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
      };
  return (
      <div className='footer'>
          <div className='footerBack'>
              <span onClick={scrollTop}>Back to top</span>
          </div>
          <div className='footerNav'>
              <div className='footerNavS'>
                  <h4>Get to Know Us</h4>
                  <ul>
                      <li>Careers</li>
                      <li>Blog</li>
                      <li>About Amazon</li>
                      <li>Investor Relations</li>
                      <li>Amazon Devices</li>
                      <li>Amazon Science</li>
                  </ul>
              </div>
              <div className='footerNavS'>
                  <h4>Make Money with Us</h4>
                  <ul>
                      <li>Sell products on Amazon</li>
                      <li>Sell on Amazon Business</li>
                      <li>Sell apps on Amazon</li>
                      <li>Become an Affiliate</li>
                      <li>Advertise Your Products</li>
                      <li>Self-Publish with Us</li>
                      <li>Host an Amazon Hub</li>
                      <li>› See More Make Money with Us</li>
                  </ul>
              </div>
              <div className='footerNavS'>
                  <h4>Amazon Payment Products</h4>
                  <ul>
                      <li>Amazon Business Card</li>
                      <li>Shop with Points</li>
                      <li>Reload Your Balance</li>
                      <li>Amazon Currency Converter</li>
                  </ul>
              </div>
              <div className='footerNavS'>
                  <h4>Let Us Help You</h4>
                  <ul>
                      <li>Amazon and COVID-19</li>
                      <li>Your Account</li>
                      <li>Your Orders</li>
                      <li>Shipping Rates & Policies</li>
                      <li>Returns & Replacements</li>
                      <li>Manage Your Content and Devices</li>
                      <li>Amazon Assistant</li>
                      <li>Help</li>
                  </ul>
              </div>
              
          </div>
          <hr />
              <div className="fSecondNav">
                <div className='footerOptions'>
                <img 
                        className="header-logo"
                      src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="" />
                  <div className='dollarSign'>$ USD- U.S.Dollar</div>
                  <div className='country'>🇺🇸 United States</div>
                </div>
          </div>
          <div className='footerNavBig'>
              <table className='nav'>
                  <tr>
                      <td className='navTableItem'>
                          <a href="">
                              Amazon Music
                              <br />
                              <span>Stream millions</span>
                          </a>
                      </td>
                      <td className='navTableItem'>
                          <a href="">
                                Sell on Amazon
                              <br />
                              <span>Start a Selling Account</span>
                          </a>
                      </td>
                      <td className='navTableItem'>
                          <a href="">
                            Amazon Advertising
                              <br />
                              <span>Find, attract, and engage customers</span>
                          </a>
                      </td>
                      <td className='navTableItem'>
                          <a href="">
                            6pm
                              <br />
                                <span>Score dealson fashion brands</span>
                          </a>
                      </td>
                      <td className='navTableItem'>
                          <a href="">
                                AbeBooks
                              <br />
                              <span>Books, art & collectibles</span>
                          </a>
                      </td>
                  </tr>
                  <tr>
                      <td className='navTableItem'>
                          <a href="">
                                Amazon Business
                              <br />
                                <span>Everything For Your Business</span>
                          </a>
                      </td>
                      <td className='navTableItem'>
                          <a href="">
                            AmazonGlobal
                              <br />
                              <span>Ship Orders Internationally</span>
                          </a>
                      </td>
                      <td className='navTableItem'>
                          <a href="">
                          Amazon Ignite
                              <br />
                              <span>Sell your original Digital Educational Resources	</span>
                          </a>
                      </td>
                      <td className='navTableItem'>
                          <a href="">
                              Amazon Music
                              <br />
                              <span>Stream millions</span>
                          </a>
                      </td>
                      <td className='navTableItem'>
                          <a href="">
                            Fabric
                              <br />
                              <span>Sewing, Quilting & Knitting</span>
                          </a>
                      </td>
                  </tr>
                  <tr>
                      <td className='navTableItem'>
                          <a href="">
                            Woot!
                              <br />
                              <span>Deals and Shenanigans</span>
                          </a>
                      </td>
                      <td className='navTableItem'>
                          <a href="">
                            eero WiFi
                              <br />
                              <span>Stream 4K Video in Every Room</span>
                          </a>
                      </td>
                      <td className='navTableItem'>
                          <a href="">
                              Blink
                              <br />
                              <span>Smart Security for Every Home
                                 </span>
                          </a>
                      </td>
                      <td className='navTableItem'>
                          <a href="">
                             Neighbors App
                              <br />
                              <span>Real-Time Crime & Safety Alerts</span>
                          </a>
                      </td>
                      <td className='navTableItem'>
                          <a href="">
                                Amazon Subscription Boxes	 
                              <br />
                              <span>Top subscription boxes – right to your door	PillPack Pharmacy Simplified	</span>
                          </a>
                      </td>
                  </tr>
                  <tr>
                      <td className='navTableItem'>
                          <a href="">
                             Ring
                              <br />
                              <span>Smart Home Security Systems</span>
                          </a>
                      </td>
                      <td className='navTableItem'>
                          <a href="">
                            IMDb
                              <br />
                              <span>Movies, TV & Celebrities</span>
                          </a>
                      </td>
                      <td className='navTableItem'>
                          <a href="">
                                 Prime Video Direct
                              <br />
                              <span>Video Distribution Made Easy</span>
                          </a>
                      </td>
                      <td className='navTableItem'>
                          <a href="">
                            ComiXology
                              <br />
                              <span>Thousands of Digital Comics</span>
                          </a>
                      </td>
                      <td className='navTableItem'>
                          <a href="">
                             Goodreads
                              <br />
                              <span>Book reviews & recommendations</span>
                          </a>
                      </td>
                      <td className='navTableItem'>
                          <a href="">
                            Fabric
                              <br />
                              <span>Sewing, Quilting & Knitting</span>
                          </a>
                      </td>
                      
                  </tr>
              </table>
              <div className='endFoot'>
                  <span>Condition of Use</span>
                  <span>Privacy Notice</span>
                  <span>Interest-Based Ads</span>
                  <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
              </div>
          </div>

    </div>
  )
}

export default Footer