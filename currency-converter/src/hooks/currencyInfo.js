import {useState, useEffect} from 'react';

function currencyInfo(currency){

    const [data,setData] = useState({});
    useEffect(() =>{
    fetch(`https://v6.exchangerate-api.com/v6/f1a4927457a18b2c9f1921eb/latest/${currency}`)
    .then((res) => res.json()) 
    .then((data) => setData(data.conversion_rates));

    },[currency])
    
    console.log(data);
    return data;
}
export default currencyInfo;
