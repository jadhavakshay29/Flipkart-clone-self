import './ImgSection.css';
import {Button} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/productActions';


const ImgSection = ()=>{
     
    const [product, setProduct] = useState({});
    const { id } = useParams();

    //navigate to the cart
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
      const fetchProductDetail = async () => {
        try {
          const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
          setProduct(response.data);
        } catch (error) {
          console.log(error);
        }
      };
    
      fetchProductDetail();
    }, [id, dispatch]);

 let quantity =1;
 //const [quantity, setQuantity] = useState(1);

    const addItemToCart = async () => {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
      dispatch(addToCart(data, quantity));
      navigate("/cart");
    };
    
    const buyNow =()=>{
       navigate("/payment")
    }
    
    return(
        <div className='main-container'>
             <div style={{ padding: '15px 20px', border: '1px solid #f0f0f0'}}>
                    <img src={product.image} alt='product img'/>
             </div>
             
             <Button 
             variant='contained' 
             style={{marginRight:'10px', background:'#FF9F00'}}
             onClick={()=> addItemToCart()}>
                <ShoppingCartIcon style={{fontSize:'18px', marginRight:'5px'}}/>Add to Cart
            </Button>
             <Button variant='contained' style={{background:'#FB641B'}}
             onClick={()=>buyNow()}>
                <FlashOnIcon style={{fontSize:'18px',marginRight:'5px'}}/>Buy Now
            </Button>
        </div>
    )
}

export default ImgSection;