import './DetailView.css';
import { Grid } from '@mui/material';

//components
import ImgSection from './ImgSection';
import ProductDetails from './ProductDetails';


const DetailView = ()=>{
  

        // //to check if id matches the id from routing and storing it in a variable
        // const { id } = useParams();
        // const productToView = product.find(p => p.id === parseInt(id));
        // // console.log(productToView);
        // // console.log(id); 
      
        // if (!products) {
        //   return <div>Product not found</div>;
        // }
       

        return (
          <Grid className='main-container' container>
            <Grid className='parent-grid' container>
                <Grid className='left-container' item lg={4} md={4} sm={4} xs={4}>
                    <ImgSection />
                </Grid>
                <ProductDetails/>
            </Grid>
          </Grid> 
        );
      }
    

export default DetailView;