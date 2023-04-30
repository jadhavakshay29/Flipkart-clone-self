import { InputBase, ListItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// import { useState } from 'react';
import './Search.css';
import { useState } from 'react';
import { useSelector  } from 'react-redux';
import {List} from '@mui/material';
import { Link } from 'react-router-dom';

const Search = ()=>{
     
    // const [searchResults, setSearchResults] = useState([]);
    const [text, setText] = useState('');

    const products = useSelector((state)=>state.allProducts.products);
    // console.log(products)

    const getText = (text)=>{
        setText(text);
        console.log(text);
    }
    

    return(
        <div className='search-container'>
            <InputBase 
                className='search-place-holder'
                placeholder='Search for products, brands and more'
                onChange={(e)=>getText(e.target.value)}
                value={text}/> {/*value so that on going to the description page it should not dipslay searched text in search bar */}
            <div className='search-icon'>
                <SearchIcon/>
            </div>
            <div className='search-list'>

                    {
                        text &&
                        <List >
                            {
                                products.filter(products=>products.title.toLowerCase().includes(text.toLowerCase()))
                                .map(products=>{
                                    return(
                                    <ListItem key={products.id} className='search-list-item'>
                                        <Link to={`/product/${products.id}`}
                                            onClick={()=>setText('')}
                                            style={{textDecoration:'none', color:'inherit'}}>
                                            {products.title}
                                            
                                        </Link>
                                    </ListItem>
                                    )
                                    
                                })
                            }
                        </List>
                    }
            </div>

        </div>
    )
}

export default Search;