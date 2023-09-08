import "./Footer.css";
import WorkIcon from '@mui/icons-material/Work';
import StarsIcon from '@mui/icons-material/Stars';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpIcon from '@mui/icons-material/Help';

const Footer = () => {
  return (
    <div className="footer-container">
    <div className="footer-1">
      <div className="about each-footer-list">
        <ul>
          <li>ABOUT</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Flipkart Stories</li>
          <li>Press</li>
          <li>Flipkart Wholesale</li>
          <li>Cleartrip</li>
          <li>Corporate Information</li>
        </ul>
      </div>
      <div className="help each-footer-list">
        <ul>
          <li>HELP</li>
          <li>Payments</li>
          <li>Shipping</li>
          <li>Cancellations & Returns</li>
          <li>FAQ</li>
          <li>Report Infringement</li>
        </ul>
      </div>
      <div className="consumer-policy each-footer-list">
        <ul>
          <li>CONSUMER POLICY</li>
          <li>Cancellations & Returns</li>
          <li>Terms Of Use</li>
          <li>Security</li>
          <li>Privacy</li>
          <li>Sitemap</li>
          <li>Grievance Redressal</li>
          <li>EPR Compliance</li>
        </ul>
      </div>
      <div className="socials each-footer-list">
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>YouTube</li>
        </ul>
      </div>
      <div className="mail-us each-footer-list">
        <ul>
          <li>Mail Us:</li>
        </ul>
        <p>
          Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove
          Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
          Bengaluru, 560103, Karnataka, India
        </p>
      </div>
      <div className="address each-footer-list">
        <ul>
          <li>Registered Office Address:</li>
        </ul>
        <p>
          Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove
          Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
          Bengaluru, 560103, Karnataka, India CIN : U51109KA2012PTC066107
          Telephone: <span style={{color:"#2874F0"}}>044-45614700</span>
        </p>
      </div>
    </div>
    <div className="footer-2">
         <div>
            <span><WorkIcon/></span>
            <span>Become a Seller</span>
         </div>
         <div>
            <span><StarsIcon/></span>
            <span>Advertise</span>
         </div>
         <div>
            <span><CardGiftcardIcon/></span>
            <span>Gift Cards</span>
         </div>
         <div>
            <span><HelpIcon/></span>
            <span>Help Center</span>
         </div>
         <div>
            <span 
            style={{color:"white", marginLeft:"80px"}}>©2022-2023 Flipkart-Clone</span>
         </div>
    </div>
    </div>
    
  );
};

export default Footer;
