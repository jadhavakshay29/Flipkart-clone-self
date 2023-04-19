import './ProductDetails.css';
import StarIcon from '@mui/icons-material/Star';
import { Grid, Table,TableBody, TableCell, TableRow } from '@mui/material';
import LocalOfferIcon   from '@mui/icons-material/LocalOffer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedProducts } from '../../redux/actions/productActions';
import axios from 'axios';
import { useEffect } from 'react';

const ProductDetails = ()=>{
    const products = useSelector((state)=>state.allProducts.products);

    console.log(products)
    //we'll get product id using useParam as we are routing based on id 
    const {id} = useParams();
    const dispatch = useDispatch();
   

    const fetchProductDetail =async ()=>{
        const response = await axios
            .get(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${id}`)
            .catch((error)=>{
                console.log("error", error);
            })
            // console.log(response.data);
            dispatch(selectedProducts(response.data));
    }

     useEffect(()=>{
        if(id && id!== ""){
             fetchProductDetail();
        }
     },[id]);
    
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const date = new Date(new Date().getTime()+(5*24*60*60*1000)); 

    let discount = Math.floor((Math.random() * 60) + 10);

           //to calculte OriginalPrice on product
     const OriginalPrice = ()=>{
            let Oprice = (product.price) / (1-(discount/100));
            console.log(Oprice);
            return Oprice.toFixed();
   }

    return(
        <div className='detail-container'>
              <Grid >
                  <div className='ratings'>
                      <p style={{fontSize:'20px'}}>{product.title}</p>
                      <span> {product.rating}
                            <StarIcon style={{margin:'2px 0 0 2px', fontSize:'14px'}}/>
                      </span>
                      <span> 4,167 Ratings & 293 Reviews</span>
                      <span><img src={fassured} alt='flipkart assured logo'/></span>
                  </div>   
                    <div style={{marginTop:'10px'}}>
                        <span style={{fontSize:28, fontWeight:600}}>₹{product.price}</span>
                        <span style={{color:'#878787', marginLeft:'10px',textDecorationLine: 'line-through'}}>₹{OriginalPrice()}</span>
                        <span style={{color:'#388E3C', marginLeft:'10px', fontWeight:500}}>{discount}% off</span>
                    </div>
                    <p>Available offers</p>
                    <div>
                         <p><LocalOfferIcon className='badge-icon' /> Bank Offer10% off on ICICI Bank Credit Cards, up to ₹1,250, on orders of ₹5,000 and aboveT&C</p>
                         <p><LocalOfferIcon className='badge-icon'/> Bank Offer10% off on ICICI Bank Credit Card EMI Transactions, up to ₹2,000, on orders of ₹5,000 and aboveT&C</p>
                         <p><LocalOfferIcon className='badge-icon'/> Bank Offer10% off on ICICI Bank Debit Card EMI Transactions, up to ₹2,000, on orders of ₹5,000 and aboveT&C</p>
                         <p><LocalOfferIcon className='badge-icon'/> Special PriceGet extra 9% off (price inclusive of cashback/coupon)T&C</p>
                    </div>
                    <Table>
                        <TableBody>
                            <TableRow className='table-row'>
                                <TableCell style={{color:'#878787',fontWeight:600}}>Delivery</TableCell>
                                <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{color:'#878787',fontWeight:600}}>Warranty</TableCell>
                                <TableCell>No Warranty</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{color:'#878787',fontWeight:600}}>Seller</TableCell>
                                <TableCell >
                                    <span style={{color:'#2874f0'}}>SAVADIKAFASHION</span>
                                    <p>10 Days Return Policy ?</p>
                                    <p>View more sellers starting from {product.price}</p>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}>
                                    <img src={adURL} style={{width:390}} alt='ad'/>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{color:'#878787',fontWeight:600}}>Description</TableCell>
                                <TableCell className='description-container '>{product.description}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid>
        </div>
    )

}

export default ProductDetails;