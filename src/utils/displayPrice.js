export const displayPrice = (str,currency) =>{
    return  (`${currency}${(+str).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`);
}
