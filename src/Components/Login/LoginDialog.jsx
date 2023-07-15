import { Button, Dialog, TextField } from "@mui/material";
import { useState } from "react";
import "./LoginDialog.css";
import { useEffect } from "react";
import { validateForm } from "../../Utils/Validation";

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
    const [errors, setErrors] = useState({});


    // to stored signed up user data into local storage 
    const [signupDataArray, setSignupDataArray] = useState(() => {
      const storedData = localStorage.getItem('signupDataArray');  //to get stored data under key signupDataArray
      return storedData ? JSON.parse(storedData) : [];
    });
    
  //to close the login tab
  const handleClose = () => {
    props.setOpen(false);
    toggleAccount(accountInitialValues.login); //so that after closing signup on clicking again login should open
    setErrors({}); // Reset the errors state
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
  
  const isSignupValid = validateInput(signupData); // Validate the sign-up input fields

  if (isSignupValid) {
    setSignupDataArray([...signupDataArray, signupData]); // add the signupData array to signupDataArray
    console.log(signupDataArray);
    setSignupData(SignupinitialValues); // clear the signupData after storing it in an array

    // store the signupDataArray in local storage
    localStorage.setItem('signupDataArray', JSON.stringify(signupDataArray));

    alert("User signed up"); // Display the success message
  } else {
    alert("Please enter a valid email and password"); // Display the error message
  }
}

useEffect(() => {
  console.log(signupDataArray);
}, [signupDataArray]);

const onLoginChange = (e)=>{
   setLoginValues({
    ...loginValues,
    [e.target.name] : e.target.value
   })
  //  console.log("loginvalues",loginValues);
}

const loginUser = () => {
  
  const isValid = validateInput(loginValues); // Validate the login input fields

  const userExists = signupDataArray.some((user) => {
    return user.email &&
     user.password &&
      user.email === loginValues.email &&
       user.password === loginValues.password;
  });

  if (isValid && userExists) {
    // User exists, allow login
    props.setIsLoggedIn(true);
    props.setUserName(loginValues.email);
    alert("User is logged in");
  } else if(!isValid){
   
    alert("Please type valid email and password");
  } else {
    // User does not exist, show "Sign up first" message
    alert("Sign up first");
  }
};

const validateInput = (formObject) => {
  const error = validateForm(formObject); // Use the validateForm function to validate the form
  setErrors(error); // Set the errors state based on the validation result
  return Object.keys(error).length === 0; // Return true if there are no errors
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
            <TextField 
                type="email" 
                name="email" 
                variant="standard" 
                onChange={(e)=>onLoginChange(e)} 
                label="Enter Email/ Mobile number"
                error={errors.email ? true : false} // Set the error prop based on whether there is an error for the email field
                 helperText={errors.email} // Display the error message for the email field 
            />
            <TextField 
                variant="standard" 
                name="password" 
                type="password" 
                onChange={(e)=>onLoginChange(e)} 
                label="Enter Password" 
                error={errors.password ? true : false} // Set the error prop based on whether there is an error for the password field
               helperText={errors.password} // Display the error message for the password field
            />
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
                  <TextField 
                      variant="standard" 
                      type="email" name='email' 
                      onChange={(e)=>onInputChange(e)} 
                      label="Enter email" 
                      error={errors.email ? true : false} // Set the error prop based on whether there is an error for the email field
                       helperText={errors.email} // Display the error message for the email field 
                  />
                  <span style={{color:'#2874f0', margin:'40px 0 0 15px'}}>Change?</span>
              </div>
              <div style={{display:'flex', marginTop:'5px'}}>
                 <span style={{marginTop:'50px'}}>OTP is sent to Email</span>
                 <span style={{color:'#2874f0', margin:'50px 0 0 60px'}} >Resend?</span>
              </div>
            
            <TextField
                  variant="standard" 
                  name='password' 
                  type="password" 
                  onChange={(e)=>onInputChange(e)} 
                  label="Enter password" 
                  error={errors.password ? true : false} // Set the error prop based on whether there is an error for the password field
                  helperText={errors.password} // Display the error message for the password field
             />
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