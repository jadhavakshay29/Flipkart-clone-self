import './CustomButtons.css';
import {Button} from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';

//components
import LoginDialog from '../../Login/LoginDialog';

import LoginMore from '../LoginMore/LoginMore';
import MoreT from '../MoreT/MoreT';


const CustomButtons = ()=>{
   
   let [open, setOpen] = useState(false);

   const openDialog= ()=>{
      setOpen(true);
   }

   const {cartItems} = useSelector(state=> state.cart);

   return(
      <div className='button-container'>
         <Tippy content={<LoginMore/>} interactive={true}>
            <Button onClick={()=>openDialog()} variant="contained">Login</Button>
         </Tippy>
          
          <p>Become a Seller</p>
          <Tippy content={<MoreT/>} interactive={true}>
             <p style={{cursor:'pointer'}}>More</p>
         </Tippy>
          <Link className='cart' to='/cart' >
            <Badge badgeContent={cartItems?.length} color="secondary">
               <ShoppingCart/>
            </Badge>
             <span> Cart</span>
          </Link>
          <LoginDialog open={open} setOpen={setOpen}/>
      </div>
   )
}

export default CustomButtons;