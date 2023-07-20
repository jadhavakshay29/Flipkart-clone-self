import "./LoginMore.css";
import { useNavigate } from "react-router-dom";

//incons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import Inventory2Icon from "@mui/icons-material/Inventory2";

const LoginMore = () => {
  const flipkartPlusLogo =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

    const navigate = useNavigate();

  return (
    <div className="icon-container">
      <div onClick={()=>navigate('./profile')}>
        <AccountCircleIcon style={{margin:'10px 0 15px 10px', color:'#2874f0'}} />
        <span>My Profile</span>
      </div> 
      <div>
        <img src={flipkartPlusLogo} style={{margin:'10px 0 15px 10px'}} alt="logo"/>
        <span>Flipkart Plus Zone</span>
      </div>
      <div>
        <FavoriteIcon style={{margin:'10px 0 15px 10px', color:'#2874f0'}}/>
        <span>Wishlist</span>
      </div>
      <div>
        <AccountBalanceWalletIcon style={{margin:'10px 0 15px 10px', color:'#2874f0'}}/>
        <span>Gift Cards</span>
      </div>
      <div>
        <LocalActivityIcon style={{margin:'10px 0 15px 10px', color:'#2874f0'}}/>
        <span>Rewards</span>
      </div>
      <div>
        <Inventory2Icon style={{margin:'10px 0 15px 10px', color:'#2874f0'}}/>
        <span>Orders</span>
      </div>
    </div>
  );
};

export default LoginMore;
