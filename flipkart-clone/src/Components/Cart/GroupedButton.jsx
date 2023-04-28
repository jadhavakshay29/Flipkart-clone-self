import './GroupedButton.css';
import { Button, ButtonGroup } from '@mui/material';

const GroupedButton = ()=>{
    return(
        <ButtonGroup className='btn-container'>
            <Button>-</Button>
            <Button disabled>1</Button>
            <Button >+</Button>
        </ButtonGroup>
    )
}

export default GroupedButton;