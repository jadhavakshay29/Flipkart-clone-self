import "./Payment.css";
import { useState } from "react";
// import { useSelector } from "react-redux";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,Button } from '@mui/material';
import { useNavigate } from "react-router-dom";


const Payment = () => {


  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [price, setPrice] = useState("");
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
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

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
          <input type="text" maxlength="8" value={expiry} onChange={handleExpiryChange} required />
        </label>
        <br />
        <label>
          CVV:
          <input type="text" maxlength="3" value={cvv} onChange={handleCvvChange} required/>
        </label>
        <br />
        <label>
          Total Amount:
          <input type="text" value={price} onChange={handlePriceChange} required />  {/**`₹ ${(price - discount + 40).toFixed(2)}` */}
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
