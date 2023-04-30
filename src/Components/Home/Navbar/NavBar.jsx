import './NavBar.css';
import { navData } from '../../../constants/Data';

const NavBar = ()=>{
    return(
        <div className='nav-catagory'>
            {
                navData.map((data, index)=>(
                    <div key={index} className='catagory-container'>
                        <img src={data.url} alt="nav" className='catagory-img'/>
                        <p className='catagory-caption'>{data.text}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default NavBar;