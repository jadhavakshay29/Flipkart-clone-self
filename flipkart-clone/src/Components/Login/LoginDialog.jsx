import { Button, Dialog, TextField } from "@mui/material";
import { useState } from "react";
import "./LoginDialog.css";

const LoginDialog = (props) => {

    const accountInitialValues = {
        login: {
          view: "login",
          heading: "Login",
          subHeading: "Get access to your Orders, Wishlist and Recommendations",
        },
        signup: {
          view: "signup",
          heading: "Looks like you are new here! ",
          subHeading: "Sign up with your mobile number to get started",
        },
      };
    
      const SignupinitialValues = {
          phone:''
      }

    //states 
    let [account, toggleAccount] = useState(accountInitialValues.login);
    let [signup,setSignup] = useState(SignupinitialValues);

  //to close the login tab
  const handleClose = () => {
    props.setOpen(false);
    toggleAccount(accountInitialValues.login); //so that after closing signup on clicking again login should open
  };


  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const onInputChange = (e)=>{
      //e.target.value 
      setSignup({
          ...signup,
         [ e.target.name]: e.target.value,
      });
      // console.log(signup);
  }

  const signupUser = (e)=>{
     e.preventDefault();
  }

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      {/* {console.log(props.open)} */}
      <div className="login-box-container">
        <div className="left-dailog">
          <h1 style={{ color: "white" }}>{account.heading}</h1>
          <p style={{ color: "white", marginTop: "20px", fontSize: "18px" }}>
            {account.subHeading}
          </p>
        </div>

        {account.view === "login" ? (
          <div className="right-dialog">
            <TextField variant="standard" label="Enter Email/ Mobile number" />
            <TextField variant="standard" label="Enter Password" />
            <p className="policy">
              By continuing, you agree to Flipkart's<span>Terms of Use</span>{" "}
              and <span>Privacy Policy.</span>
            </p>
            <Button className="login-btn">Login</Button>
            <span style={{ textAlign: "center" }}>OR</span>
            <Button className="otp-request-btn">Request OTP</Button>
            <p onClick={() => toggleSignup()} className="create-acc">
              New to Flipkart? Create an account
            </p>
          </div>
        ) : (
          <div className="right-dialog">
              <div style={{display:'flex', marginTop:'2px'}}> 
                  <TextField variant="standard" name='phone' onChange={(e)=>onInputChange()} label="Mobile Number" />
                  <span style={{color:'#2874f0', margin:'40px 0 0 15px'}}>Change?</span>
              </div>
              <div style={{display:'flex', marginTop:'5px'}}>
                 <span style={{marginTop:'50px'}}>OTP is sent to Mobile</span>
                 <span style={{color:'#2874f0', margin:'50px 0 0 60px'}} >Resend?</span>
              </div>
            
            <TextField variant="standard" name='phone' onChange={(e)=>onInputChange()} label="Enter OTP" />
            <Button className="login-btn" 
            style={{ marginTop: "20px" }}
            onClick={signupUser}>
              Continue
            </Button>
            <Button className="otp-request-btn" 
            style={{ marginTop: "20px" }} >
              Existing User? Log in 
            </Button>
          </div>
        )}
      </div>
    </Dialog>
  );
};

export default LoginDialog;
