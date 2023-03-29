import './Banner.css';
import Carousal from 'react-multi-carousel';
import { bannerData } from '../../../constants/Data';
import 'react-multi-carousel/lib/styles.css';  //applies that sliding css to images

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1  // we only want to show 1 item regardless of device
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Banner =()=>{
    return(
       <Carousal responsive={responsive} 
                 swipeable={false}
                 draggable={false}
                 infinite={true}
                 autoPlay={true}
                 autoPlaySpeed={2000}
                 keyBoardControl={true}>
           {
            bannerData.map((data,index)=>(
                <img src={data.url} key={index} alt='banner-images' className='banner-img'/>
            ))
           }
       </Carousal>
    )
}

export default Banner;