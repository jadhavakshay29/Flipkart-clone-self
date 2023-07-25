import './ViewAll.css';
import StarIcon from '@mui/icons-material/Star';
import { Slider } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import axios from 'axios';
import {setProducts} from '../../../redux/actions/productActions';
import { Link } from 'react-router-dom';

const ViewAll =()=>{
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
            //  console.log("products", products)
      },[fetchProducts]);

      let discount = Math.floor((Math.random() * 60) + 10);  // 0 to 69

    return(
        <> 
            <div className="profile-catagory">
                <ul>
                    <li>Electronics</li>
                    <li>TVs & Appliances</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Baby & Kids</li>
                    <li>Home & Furniture</li>
                    <li>Sports, Books & More</li>
                    <li>Flights</li>
                    <li>Offer Zone</li>
                </ul>
            </div>
            <div className="viewall-container">
                <div className='left-viewall-section'>
                   <div className='filter-text'>
                      <span>Filters</span> 
                   </div>
                   <div className='catagories'>
                      <span>CATAGORIES</span>
                      <ul>
                        <li><span><input type='checkbox'/></span><span>men's clothing</span></li>
                        <li><span><input type='checkbox'/></span><span>women's clothing</span></li>
                        <li><span><input type='checkbox'/></span><span>jewelery</span></li>
                        <li><span><input type='checkbox'/></span><span>electronics</span></li>
                      </ul>
                   </div>
                   <div className='catagpries-price catagories'>
                      <span>PRICE</span>
                      <div>
                        <Slider
                            aria-label="Small steps"
                            defaultValue={0}
                            // getAriaValueText={valuetext}
                            step={50}
                            marks
                            min={50}
                            max={500}
                            valueLabelDisplay="auto"
                            style={{paddingBottom:"10px", margin:"0 10px 15px 10px", width:"80%"}}
                            />
                      </div>
                   </div>
                   <div className='catagories-ratings catagories'>
                      <span>CUSTOMER RATINGS</span>
                      <ul>
                        <li><span><input type='checkbox'/></span><span>3 <StarIcon style={{fontSize:"16px"}}/> & above</span></li>
                        <li><span><input type='checkbox'/></span><span>4 <StarIcon style={{fontSize:"16px"}}/> & above</span></li>
                      </ul>
                   </div>
                </div>
                <div className='right-viewall-section'>
                    {   
                     
                         products.map((item, index)=>(
                            <Link key={index} to={`/product/${item.id}`} style={{textDecoration:'none'}}>  
                                <div className='products-cards'>
                                    <img src={item.image} alt='products'/>
                                    <div className='cards-content'>
                                        <span>{item.title.substring(0,66)}</span>
                                        <p>
                                            <span style={{fontSize:"16px",fontWeight:"600"}}>₹{item.price}</span>
                                            <span style={{color:"#878787", textDecoration:"line-through", margin:"0 10px"}}>₹{((item.price) / (1-(discount/100))).toFixed()}</span>
                                            <span style={{color:"green",fontWeight:"600"}}>{discount.toFixed()}% off</span> 
                                        </p>
                                        <span style={{color:"green", fontWeight:"600"}}>save extra ₹{((item.price) / (1-(discount/100))).toFixed() - item.price.toFixed()}</span>
                                    </div>  
                                </div>
                            </Link>
                            ))
                    }
                    
                </div>
            </div>

        </>
    )
}

export default ViewAll;