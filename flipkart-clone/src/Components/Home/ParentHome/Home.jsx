import './Home.css';

//components
import NavBar from '../Navbar/NavBar';
import Banner from '../Banner/Banner';

const Home = ()=>{
    return(
        <>
           <NavBar/>
           <div className='under-nav-container'>
               <Banner/>
           </div>
          
        </>
    )
}

export default Home;