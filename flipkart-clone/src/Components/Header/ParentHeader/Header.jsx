import './Header.css';
import {AppBar, Toolbar} from '@mui/material';

//components
import Search from '../Search/Search';
import CustomButtons from '../CustomButtons/CustomButtons';

const Header = ()=>{

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';  
    const subLogoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
       <AppBar className="app-bar">
           <Toolbar>
              <div>
                 <img src={logoURL} alt="logo" className='brand-logo'></img>
                    <div className='explore-logo'>
                       <p>Explore<span style={{color:"yellow"}}> Plus</span></p>
                       <img src={subLogoURL} className="plus-img" alt="sub-logo"></img>
                    </div>
              </div>
              <Search/>
              <div>
                  <CustomButtons/>
              </div>
           </Toolbar>
       </AppBar>
    )
}

export default Header;