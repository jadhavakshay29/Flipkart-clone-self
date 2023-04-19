import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// import { useState } from 'react';
import './Search.css';

const Search = ()=>{
     
    // const [searchResults, setSearchResults] = useState([]);
    
    

    return(
        <div className='search-container'>
            <InputBase className='search-place-holder'
                placeholder='Search for products, brands and more'/>
            <div className='search-icon'>
                <SearchIcon/>
            </div>

        </div>
    )
}

export default Search;