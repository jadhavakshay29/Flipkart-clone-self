import Carousel from 'react-multi-carousel';
import './Slides.css';
import { product } from '../../../constants/Products';
import { Button, Divider } from '@mui/material';

const Slides =(props)=>{

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5  // we only want to show 1 item regardless of device
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <div className='slide-container'>
            <div className='view-btn-bar'>
                <p>{props.catagory}</p>
                <Button variant="contained">VIEW ALL</Button>
            </div>
            <Divider/>
            <div className='carasoul-container'>

                <Carousel 
                responsive={responsive} 
                swipeable={true}
                draggable={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                centerMode={true}
                className='carasoul'>
                
                    {
                        product.map((item, index)=>(
                            <div key={index} className='product-container'>
                                <img  src={item.image} alt='products' className='products-imgs'></img>
                                {/* {console.log(item.image)} */}
                                <div className='titles product-container'>
                                    <span>{item.shortTitle}</span>
                                    <span>{item.price}</span>
                                    <span>{item.title}</span>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default Slides;