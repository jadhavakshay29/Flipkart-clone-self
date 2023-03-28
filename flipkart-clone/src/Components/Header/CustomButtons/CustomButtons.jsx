import './CustomButtons.css';
import {Button} from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';

const CustomButtons = ()=>{
   return(
      <div className='button-container'>
          <Button variant="contained">Login</Button>
          <p>Become a Seller</p>
          <p>More</p>
          <div className='cart'>
             <ShoppingCart/>
             <span>&nbsp;</span>
             <span>Cart</span>
          </div>
      </div>
   )
}

export default CustomButtons;
