//ellipsis is, when a sentense is too long we see only half sentense and then ... dots 

export const addEllipsis =(text)=>{
    if(text.length > 50){
        return text.substring(0,50) + '...';
    }
    return text;
}