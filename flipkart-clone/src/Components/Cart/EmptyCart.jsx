import './EmptyCart.css';
import { Button } from '@mui/material';

const EmptyCart = ()=>{

    const EmptyCartimg = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

    return (
        <div className='empty-cart-container'>
            <div className='content'>
                <img src={EmptyCartimg} alt='Empty cart' style={{width:'15%'}}/>
                <p style={{fontSize:'20px'}}>Your cart is empty!</p>
                <p style={{fontSize:'14px'}}>Add items to it now.</p>
                <Button style={{width:'250px', height:'45px', borderRadius:'2px',
                backgroundColor:'#2874f0',color:'white', fontWeight:'500', marginTop:'10px'}}>Shop Now</Button>
            </div>
        </div>
    )
}

export default EmptyCart;