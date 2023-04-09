import './ImgSection.css';
import {Button} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const ImgSection = ({productToView})=>{
    return(
        <div className='main-container'>
             <div style={{ padding: '15px 20px', border: '1px solid #f0f0f0'}}>
                    <img src={productToView.image} alt='product img'/>
             </div>
             
             <Button variant='contained' style={{marginRight:'10px', background:'#FF9F00'}}>
                <ShoppingCartIcon style={{fontSize:'18px', marginRight:'5px'}}/>Add to Cart
            </Button>
             <Button variant='contained' style={{background:'#FB641B'}}>
                <FlashOnIcon style={{fontSize:'18px',marginRight:'5px'}}/>Buy Now
            </Button>
        </div>
    )
}

export default ImgSection;