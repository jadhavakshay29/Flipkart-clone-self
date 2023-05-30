import Carousel from 'react-multi-carousel';
import './Slides.css';
import { Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setProducts} from '../../../redux/actions/productActions';

const Slides =(props)=>{

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5  // we only want to show 1 item regardless of device
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const products = useSelector((state)=> state.allProducts.products);
      const dispatch = useDispatch();

    
    const fetchProducts = useCallback(async () => {
        const response = await axios
          .get('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products')
          .catch((error) => {
            console.log('error', error);
          });
        // console.log(response.data);
        dispatch(setProducts(response.data));
      }, [dispatch]);

      useEffect(()=>{
        fetchProducts();
      },[fetchProducts]);

      // console.log("products", products);

    return(
        <div className='slide-container'>
            <div className='view-btn-bar'>
                <p>{props.catagory}</p>
                <Button variant="contained">VIEW ALL</Button>
            </div>
            <Divider/>
            <div className='carasoul-container'>

                <Carousel 
                responsive={responsive} 
                swipeable={true}
                draggable={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                centerMode={true}
                className='carasoul'>
                
                    {
                        products.map((item, index)=>(
                            <Link to={`product/${item.id}`} style={{textDecoration:'none'}}>  {/*wrapping inside Link cause on clicking this div we need tp activate routing 
                                            'to should match with path used in Routes */}
                                <div
                                key={index} 
                                className='product-container'container>
                                    <img  src={item.image} alt='products' className='products-imgs'></img>
                                    {/* {console.log(item.image)} */}
                                    <div 
                                    className='titles product-container'>
                                        <span>From Rs {item.price}</span>
                                        <span>{item.title}</span>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default Slides;