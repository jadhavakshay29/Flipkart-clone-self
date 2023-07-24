import './Profile.css';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useState } from 'react';

const Profile =()=>{

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [isSaved, setIsSaved] = useState(false);

   const onSaveBtn=(e)=>{
      e.preventDefault();
      setIsSaved(true);
      
   }

   const onClickEdit=()=>{
       setIsSaved(!isSaved)
   }
    return (
        <div>
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
            <div className='profile-container'>
                <div className="left-profile">
                    <div className='user-name'>
                        <div className="profile-logo">
                            <img src='https://cdn-icons-png.flaticon.com/512/5987/5987424.png' alt='profile logo'/>
                        </div>
                        <div className='name-text'>
                            <p>Hello,</p>
                            <p>{fname} {lname}</p>
                        </div>
                    </div>
                    <div className='orders'>
                        <div className="my-orders title">
                            <span><InventoryIcon/></span>
                            <span>MY ORDERS</span>
                        </div>
                        <div className='account-setting'>
                            <div className='title'>
                                 <span><PersonIcon/></span>
                                 <span>ACCOUNT SETTING</span>
                            </div>
                            <div>
                                <ul className='feature-list'>
                                    <li>Profile Information</li>
                                    <li>Manage Addresses</li>
                                    <li>PAN Card Information</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className='profile-payments'>
                            <div className='title'>
                                <span><AccountBalanceWalletIcon/></span>
                                <span>PAYMENTS</span>
                            </div>
                            <div>
                                <ul className='feature-list'>
                                    <li>Gift Cards <span>Rs.0</span></li>
                                    <li>Saved UPI</li>
                                    <li>Saved Cards</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className='my-stuff'>
                            <div className='title'>
                                <span><FolderSharedIcon/></span>
                                <span>MY STUFF</span>
                            </div>
                            <div>
                                <ul className='feature-list'>
                                    <li>My Coupons</li>
                                    <li>My Reviews & Ratings</li>
                                    <li>All Notifications</li>
                                    <li>My Wishlist</li>
                                </ul>
                            </div>
                        </div>

                        <div className="logout-btn title">
                            <span><PowerSettingsNewIcon/></span>
                            <span>Logout</span>
                        </div>
                       
                    </div>
                </div>
                <div className='right-profile'>
                    <div className="personal-info-section">
                         <h3>Personal Information</h3>
                         <div>
                            <input type="text" 
                            className={isSaved ?'input-feild' : 'on-edit-click'} 
                            placeholder='first name' 
                            value={fname} onChange={(e)=>setFname(e.target.value)} disabled={isSaved}/>
                            <input type="text" 
                            className={isSaved ?'input-feild' : 'on-edit-click'}  
                            placeholder='last name' 
                            value={lname} onChange={(e)=>setLname(e.target.value)} disabled={isSaved}/>
                            <span className='edit-span' onClick={onClickEdit}>{isSaved ? 'Edit' : 'Save'}</span><br/>
                            <label htmlFor='gender'>Your Gender</label><br/>
                            <div className='gender-section'>
                                <input type='radio' id='male' name='gender' value='Male' />
                                <label htmlFor='male'>Male</label>
                                <input type='radio' id='female' name='gender' value='Female' />
                                <label htmlFor='female'>Female</label>
                            </div>
                           
                         </div>
                    </div>
                    <div className="email-section">
                            <h3>Email Address</h3>
                            <input type='email' placeholder='enter your email' className='input-feild'/>
                    </div>
                    <div className="mobile-num-section">
                            <h3>Mobile Number</h3>
                            <input type='tel' placeholder='your mobile number' className='input-feild'/>
                    </div>
                    <button className='save-btn' onClick={onSaveBtn} type='submit'>SAVE</button>
                    <div>
                        <h3>FAQs</h3>
                        <div>
                            <h4>What happens when I update my email address (or mobile number)?</h4>
                            <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
                            <h4>When will my Flipkart account be updated with the new email address (or mobile number)?</h4>
                            <p>It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>
                            <h4>What happens to my existing Flipkart account when I update my email address (or mobile number)?</h4>
                            <p>Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</p>
                            <h4>Does my Seller account get affected when I update my email address?</h4>
                            <p>Flipkart has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Profile;