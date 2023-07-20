import './Profile.css';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Profile =()=>{
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
                            <p>akshay jadhav</p>
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
                         <h4>Personal Information</h4>
                         <div>
                            <input type="text" />
                            <input type="text"/><br/>
                            <label htmlFor='gender'>Your Gender</label>
                            <input type='radio' id='male' name='gender' value='Male' />
                            <label htmlFor='male'>Male</label>
                            <input type='radio' id='female' name='gender' value='Female' />
                            <label htmlFor='female'>Female</label>
                         </div>
                    </div>
                    <div className="email-section">
                            <h4>Personal Information</h4>
                            <input type='email' placeholder='enter your email'/>
                    </div>
                    <div className="mobile-num-section">
                            <h4>Personal Information</h4>
                            <input type='tel' placeholder='your mobile number'/>
                    </div>
                    <div>
                        <h4>FAQs</h4>
                        <p></p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Profile;