import "./Payment.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,Button } from '@mui/material';
import { useNavigate } from "react-router-dom";


const Payment = () => {
  
// const MasterCardLogo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNojE81lgFIFiCPsb-uDHwpEIpbgyTYEnAI3TxF4M2ntJmn8rTXlrP9ibUwWEnqiaZtV0&usqp=CAU'

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [open, setOpen] = useState(false);

  //on click of pay now which is submit button greet pops up
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process payment logic here
    console.log("Payment submitted successfully");
    setOpen(true);
  };

  //for routing 
  const navigate = useNavigate();
 
  //on click of close button
  const handleClose = () => {
    setOpen(false);
    navigate('/');  //on click of close we are redirecting to the home page
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryChange = (event) => {
    setExpiry(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const {cartItems} = useSelector(state=> state.cart);

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
    <div className="payment-container">
      <h1>Payment Gateway</h1>
      <form onSubmit={handleSubmit}>
            {/* <span><img src={MasterCardLogo} alt="logo" className="logo-img"/></span> */}
            <label>   
          Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            required
          />
        </label>
        <br />
        <label>
          Expiry Date:
          <input type="text" maxlength="7" value={expiry} onChange={handleExpiryChange} required />
        </label>
        <br />
        <label>
          CVV:
          <input type="text" maxlength="3" value={cvv} onChange={handleCvvChange} required/>
        </label>
        <br />
        <label>
          Total Amount:
          <input type="text" value={`₹ ${(price - discount + 40).toFixed(2)}`} disabled />
        </label>
        <br />
        <button type="submit">Pay Now</button>
      </form>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Thank You</DialogTitle>
        <DialogContent>
          <DialogContentText>Your payment has been submitted successfully.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Payment;
