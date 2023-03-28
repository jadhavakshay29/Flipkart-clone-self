import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Search.css';

const Search = ()=>{
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