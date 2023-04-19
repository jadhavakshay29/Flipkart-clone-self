import './ImgSection.css';
import {Button} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useSelector } from 'react-redux';


const ImgSection = ()=>{

    //using this we can access product in any component
        const products = useSelector((state)=>state.allProducts.products);
        // console.log(products);
    const renderList = products.map((product, index)=>{
         return(
        <div className='main-container' key={index}>
             <div style={{ padding: '15px 20px', border: '1px solid #f0f0f0'}}>
                    <img src={product.image} alt='product img'/>
             </div>
             
             <Button variant='contained' style={{marginRight:'10px', background:'#FF9F00'}}>
                <ShoppingCartIcon style={{fontSize:'18px', marginRight:'5px'}}/>Add to Cart
            </Button>
             <Button variant='contained' style={{background:'#FB641B'}}>
                <FlashOnIcon style={{fontSize:'18px',marginRight:'5px'}}/>Buy Now
            </Button>
        </div>
    )
    })
   return <>{renderList}</>
}

export default ImgSection;