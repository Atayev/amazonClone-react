import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function Header() {
  return (
    <div className="header">
        <img 
            className="header-logo"
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="" />
            <div className="header-search">
                <input type="text" className="header-searchIn" />
                <SearchIcon className='header-searchIcon'/>
            </div>
            <div className="header-nav">
                <div className="header-option">
                    <span className="header-fline">Hello Guest</span>
                    <span className="header-sline">Sign IN</span>
                    </div>
                <div className="header-option">
                    <span className="header-fline">Returns</span>
                        <span className="header-sline">Orders</span>
                    </div>
                <div className="header-option">
                <span className="header-fline">Yourt</span>
                    <span className="header-sline">Prime</span>
                    </div>
            </div>
          <div className="header-basket">
              <ShoppingBasketIcon />
              <span className='header-sline header-basketC'>0</span>
            </div>
    </div>
  )
}

export default Header