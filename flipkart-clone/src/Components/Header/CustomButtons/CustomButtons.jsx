import './CustomButtons.css';
import {Button} from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';
import Tippy from '@tippyjs/react';

//components
import LoginDialog from '../../Login/LoginDialog';
import { useState } from 'react';
import LoginMore from '../LoginMore/LoginMore';
import MoreT from '../MoreT/MoreT';

const CustomButtons = ()=>{
   
   let [open, setOpen] = useState(false);

   const openDialog= ()=>{
      setOpen(true);
   }

   return(
      <div className='button-container'>
         <Tippy content={<LoginMore/>} interactive={true}>
            <Button onClick={()=>openDialog()} variant="contained">Login</Button>
         </Tippy>
          
          <p>Become a Seller</p>
          <Tippy content={<MoreT/>} interactive={true}>
             <p style={{cursor:'pointer'}}>More</p>
         </Tippy>
          <div className='cart'>
             <ShoppingCart/>
             <span>&nbsp;</span>
             <span>Cart</span>
          </div>
          <LoginDialog open={open} setOpen={setOpen}/>
      </div>
   )
}

export default CustomButtons;
