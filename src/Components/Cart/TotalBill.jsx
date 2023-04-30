import { useEffect, useState } from 'react';
import './TotalBill.css';

const TotalBill = ({cartItems})=>{

    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    useEffect(()=>{
        totalAmount();
    },[cartItems])

    const totalAmount =()=>{
        let price = 0, discount=0;
        cartItems.map(item=>{
            let ProductDiscount = Math.floor((Math.random() * 60) + 10);
            let Oprice = (item.price) / (1-(ProductDiscount/100));
            price+= item.price;
            discount+=( Oprice-item.price );
        })
      setPrice(price);
      setDiscount(discount);
    }
  
    return (
       <div>
            <div className='heading-container'>
                <p className='heading'>PRICE DETAILS</p>
            </div>
            <div className='bill-container'>
                <p>Price ({cartItems.length}
                    {cartItems.length>1 ? ' items' : ' item'})
                    <span>₹{price}</span>
                 </p>
                <p>Discount
                    <span className='green'>-₹{discount.toFixed(2)}</span>
                 </p>
                <p>Delivery Charges
                    <span className='green'>₹40</span>
                 </p>
                <p  style={{fontSize:'20px'}}>Total Amount
                    <span>₹{(price-discount+40).toFixed(2)}</span>
                 </p>
                 <p className='green-txt'>You will save {(discount-40).toFixed(2)} on this order</p>
            </div>
       </div>
    )
}

export default TotalBill;