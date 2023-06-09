import './Header.css';
import {AppBar, Toolbar} from '@mui/material';
import { Link } from 'react-router-dom';

//components
import Search from '../Search/Search';
import CustomButtons from '../CustomButtons/CustomButtons';

const Header = ({productToView})=>{

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';  
    const subLogoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
       <AppBar className="app-bar">
           <Toolbar>
              <Link to={'/'} style={{textDecoration:'none', color:'white'}}> {/*this will bring us back to home page */}
                  <div>
                     <img src={logoURL} alt="logo" className='brand-logo'></img>
                        <div className='explore-logo'>
                           <p>Explore<span style={{color:"yellow"}}> Plus </span></p>
                           <img src={subLogoURL} className="plus-img" alt="sub-logo"></img>
                        </div>
                  </div>
              </Link>
              
              <Search productToView={productToView} />
              <div>
                  <CustomButtons/>
              </div>
           </Toolbar>
       </AppBar>
    )
}

export default Header;