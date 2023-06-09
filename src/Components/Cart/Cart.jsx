import { useSelector } from 'react-redux';
import './Cart.css';
import { Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


//components
import CartItem from './CartItem';
import TotalBill from './TotalBill';
import EmptyCart from './EmptyCart';


const Cart = ()=>{

    const {cartItems} = useSelector(state=> state.cart);
    const navigate = useNavigate();

    return (
        <div>
           {
               cartItems.length ?
                    <Grid container className='cart-container'>
                        <Grid item lg={9} md={9} sm={12} xs={12} style={{paddingRight:'15px'}}>
                            <div className='my-cart'>
                                <span>My Cart ({cartItems.length})</span>
                            </div>
                            {
                                cartItems.map(item=>
                                    <CartItem item={item}/>
                                )
                            }
                            <div className='place-order-btn-container'>
                                <Button onClick={()=>navigate("/payment")}
                                 style={{display:'flex', marginLeft:'auto', backgroundColor:'#fb641b',
                                                 color:'white',width:'250px', height:'51px', borderRadius:'2px'}}>Place Order</Button>
                            </div>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalBill cartItems={cartItems}/>
                        </Grid>
                        
                    </Grid>
                : <div><EmptyCart/></div>
           }
           
        </div>
    )
}

export default Cart;