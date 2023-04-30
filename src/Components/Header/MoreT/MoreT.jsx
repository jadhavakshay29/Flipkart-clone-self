import './MoreT.css';

//icons
import NotificationsIcon from '@mui/icons-material/Notifications';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import MovingIcon from '@mui/icons-material/Moving';
import DownloadIcon from '@mui/icons-material/Download';

const MoreT = ()=>{
    return(
        <div className="icon-container">
        <div>
            <NotificationsIcon style={{margin:'10px 0 15px 10px', color:'#2874f0'}} />
            <span>Notification Preferances</span>
        </div> 
        <div>
            <LiveHelpIcon style={{margin:'10px 0 15px 10px', color:'#2874f0'}} />
            <span>Flipkart Plus Zone</span>
        </div>
        <div>
            <MovingIcon style={{margin:'10px 0 15px 10px', color:'#2874f0'}}/>
            <span>Wishlist</span>
        </div>
        <div>
            <DownloadIcon style={{margin:'10px 0 15px 10px', color:'#2874f0'}}/>
            <span>Gift Cards</span>
        </div>
        </div>
    )
}

export default MoreT;