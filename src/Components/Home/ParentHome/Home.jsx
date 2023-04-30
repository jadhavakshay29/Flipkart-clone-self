import './Home.css';

//components
import NavBar from '../Navbar/NavBar';
import Banner from '../Banner/Banner';
import Slides from '../Slides/Slides';

const Home = ()=>{
    return(
        <>
           <NavBar/>
           <div className='under-nav-container'>
               <Banner/>
               <Slides catagory='Best of Electronics'/>
               <Slides catagory='Beauty, Food, Toys & more'/>
               <Slides catagory='Shop for a Cool Summer'/>
               <Slides catagory='Shop Monthly Essentials'/>
               <Slides catagory='Sports, Healthcare & more'/>
               <Slides catagory='Home & Kitchen Essentials'/>
               <Slides catagory='Grooming, Books, Auto & more'/>
           </div>
           
        </>
    )
}

export default Home;