import './ProductDetails.css';
import StarIcon from '@mui/icons-material/Star';
import { Grid, Table,TableBody, TableCell, TableRow } from '@mui/material';
import LocalOfferIcon   from '@mui/icons-material/LocalOffer';

const ProductDetails = ({productToView})=>{
    
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const date = new Date(new Date().getTime()+(5*24*60*60*1000));

     //to calculte discount on product
     const discount = ()=>{
        let percentDiscount = ((productToView.OriginalPrice-productToView.price)*100)/productToView.OriginalPrice;
       //  console.log(percentDiscount);
        return percentDiscount.toFixed();
   }

    return(
        <div className='detail-container'>
              <Grid >
                  <div className='ratings'>
                      <p style={{fontSize:'20px'}}>{productToView.title}</p>
                      <span> {productToView.rating.rate}
                            <StarIcon style={{margin:'2px 0 0 2px', fontSize:'14px'}}/>
                      </span>
                      <span> 4,167 Ratings & 293 Reviews</span>
                      <span><img src={fassured} alt='flipkart assured logo'/></span>
                  </div>   
                    <div style={{marginTop:'10px'}}>
                        <span style={{fontSize:28, fontWeight:600}}>₹{productToView.price}</span>
                        <span style={{color:'#878787', marginLeft:'10px',textDecorationLine: 'line-through'}}>₹{productToView.OriginalPrice}</span>
                        <span style={{color:'#388E3C', marginLeft:'10px', fontWeight:500}}>{discount()}% off</span>
                    </div>
                    <p>Available offers</p>
                    <div>
                         <p><LocalOfferIcon className='badge-icon' /> Bank Offer10% off on ICICI Bank Credit Cards, up to ₹1,250, on orders of ₹5,000 and aboveT&C</p>
                         <p><LocalOfferIcon className='badge-icon'/> Bank Offer10% off on ICICI Bank Credit Card EMI Transactions, up to ₹2,000, on orders of ₹5,000 and aboveT&C</p>
                         <p><LocalOfferIcon className='badge-icon'/> Bank Offer10% off on ICICI Bank Debit Card EMI Transactions, up to ₹2,000, on orders of ₹5,000 and aboveT&C</p>
                         <p><LocalOfferIcon className='badge-icon'/> Special PriceGet extra 9% off (price inclusive of cashback/coupon)T&C</p>
                    </div>
                    <Table className='table-container'>
                        <TableBody>
                            <TableRow className='table-rows'>
                                <TableCell style={{color:'#878787',fontWeight:600}}>Delivery</TableCell>
                                <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                            </TableRow>
                            <TableRow className='table-rows'>
                                <TableCell style={{color:'#878787',fontWeight:600}}>Warranty</TableCell>
                                <TableCell>No Warranty</TableCell>
                            </TableRow>
                            <TableRow className='table-rows'>
                                <TableCell style={{color:'#878787',fontWeight:600}}>Seller</TableCell>
                                <TableCell >
                                    <span style={{color:'#2874f0', fontWeight:600}}>SAVADIKAFASHION</span>
                                    <p>10 Days Return Policy ?</p>
                                    <p style={{color:'#2874f0', fontWeight:600}}>View more sellers starting from {productToView.price}</p>
                                </TableCell>
                            </TableRow>
                            <TableRow  className='table-rows'>
                                <TableCell colSpan={2}>
                                    <img src={adURL} style={{width:390}} alt='ad'/>
                                </TableCell>
                            </TableRow>
                            <TableRow  className='table-rows'>
                                <TableCell style={{color:'#878787',fontWeight:600}}>Description</TableCell>
                                <TableCell className='description-container '>{productToView.description}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid>
        </div>
    )
}

export default ProductDetails;