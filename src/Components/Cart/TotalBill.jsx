import { useEffect, useState,useCallback } from 'react';
import './TotalBill.css';

const TotalBill = ({cartItems, count, discount})=>{

    const [price, setPrice] = useState(0);
    const [discount1, setdiscount1] = useState(0);

    let OriginalPrice = price/ (1-discount/100);

    const totalAmount = useCallback(()=>{
        let price = 0;
        cartItems.forEach(item=>{
            price+= item.price;
        })
        setPrice(price);
        console.log(discount)
        setdiscount1((discount*OriginalPrice)/100);
    }, [cartItems, discount,OriginalPrice])

    useEffect(()=>{
        totalAmount();
    },[cartItems, totalAmount])

  
    
    return (
       <div>
            <div className='heading-container'>
                <p className='heading'>PRICE DETAILS</p>
            </div>
            <div className='bill-container'>
                <p>Price ({cartItems.length}
                    {cartItems.length>1 ? ' items' : ' item'})
                    <span>₹{(OriginalPrice*count).toFixed()}</span>
                 </p>
                <p>Discount
                    <span className='green'>-₹{(OriginalPrice-price).toFixed()}</span>
                 </p>
                <p>Delivery Charges
                    <span className='green'>₹40</span>
                 </p>
                <p  style={{fontSize:'20px'}}>Total Amount
                    <span>₹{((OriginalPrice*count)-discount1+40).toFixed()}</span>
                 </p>
                 <p className='green-txt'>You will save {(OriginalPrice-price).toFixed()} on this order</p>
            </div>
       </div>
    )
}

export default TotalBill;