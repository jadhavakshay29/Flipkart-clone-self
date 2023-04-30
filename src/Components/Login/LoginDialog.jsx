import { Button, Dialog, TextField } from "@mui/material";
import { useState } from "react";
import "./LoginDialog.css";
import { useEffect } from "react";

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
          email:'',
          password:''
      }

      const [loginValues, setLoginValues] = useState({
        email:'',
        password:''
      })

    //states 
    let [account, toggleAccount] = useState(accountInitialValues.login);
    let [signup,setSignup] = useState(SignupinitialValues);
    const [signupData, setSignupData] = useState([]);

    // const [signupDataArray, setSignupDataArray] = useState([]);
    const [signupDataArray, setSignupDataArray] = useState(() => {
      const storedData = localStorage.getItem('signupDataArray');
      return storedData ? JSON.parse(storedData) : [];
    });
    


  //to close the login tab
  const handleClose = () => {
    props.setOpen(false);
    toggleAccount(accountInitialValues.login); //so that after closing signup on clicking again login should open

  };


  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const onInputChange = (e)=>{
    if (e.target) {
      setSignup({
          ...signup,
          [ e.target.name]: e.target.value,
      });
  }
    setSignupData({
        ...signupData,
        [e.target.name]: e.target.value,
    });
}

const signupUser = (e) => {
  e.preventDefault();
  setSignupDataArray([...signupDataArray, signupData]); // add the signupData array to signupDataArray
  console.log(signupDataArray);
  setSignupData([]); // clear the signupData after storing it in an array

  // store the signupDataArray in local storage
  localStorage.setItem('signupDataArray', JSON.stringify(signupDataArray));
}

useEffect(() => {
  console.log(signupDataArray);
}, [signupDataArray]);

const onLoginChange = (e)=>{
   setLoginValues({
    ...loginValues,
    [e.target.name] : e.target.value
   })
   console.log("loginvalues",loginValues);
}

const loginUser = () => {

  if (loginValues.email === signup.email && loginValues.password === signup.password) {
    // allow user to log in
    // const userName = loginValues.email.split('@')[0];
    // props.onUserNameChange(userName);
    console.log("User is logged in");
  } else {
    // show "Sign up first" message
    console.log("Sign up first");
  }
};

const toggleLogin =()=>{
  toggleAccount(accountInitialValues.login);
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
            <TextField type="email" name="email" variant="standard" onChange={(e)=>onLoginChange(e)} label="Enter Email/ Mobile number" />
            <TextField variant="standard" name="password" type="password" onChange={(e)=>onLoginChange(e)} label="Enter Password" />
            <p className="policy">
              By continuing, you agree to Flipkart's<span>Terms of Use</span>{" "}
              and <span>Privacy Policy.</span>
            </p>

            <Button className="login-btn" onClick={loginUser}>Login</Button>
            <span style={{ textAlign: "center" }}>OR</span>
            <Button className="otp-request-btn">Request OTP</Button>
            <p onClick={() => toggleSignup()} className="create-acc">
              New to Flipkart? Create an account
            </p>
          </div>
        ) : (
          <div className="right-dialog">
              <div style={{display:'flex', marginTop:'2px'}}> 
                  <TextField variant="standard" type="email" name='email' onChange={(e)=>onInputChange(e)} label="Enter email" />
                  <span style={{color:'#2874f0', margin:'40px 0 0 15px'}}>Change?</span>
              </div>
              <div style={{display:'flex', marginTop:'5px'}}>
                 <span style={{marginTop:'50px'}}>OTP is sent to Email</span>
                 <span style={{color:'#2874f0', margin:'50px 0 0 60px'}} >Resend?</span>
              </div>
            
            <TextField variant="standard" name='password' type="password" onChange={(e)=>onInputChange(e)} label="Enter password" />
            <Button className="login-btn" 
            style={{ marginTop: "20px" }}
            onClick={(e)=>signupUser(e)}>
              Continue
            </Button>
            <Button className="otp-request-btn" 
            style={{ marginTop: "20px" }} onClick={toggleLogin}>
              Existing User? Log in 
            </Button>
          </div>
        )}
      </div>
    </Dialog>
  );
};

export default LoginDialog;