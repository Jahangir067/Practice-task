import React, { useEffect, useState } from 'react';
import PriceCart from '../PriceCart/PriceCart';

const PriceList = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch('price.json')
           .then(res => res.json())
           .then(data => setPrices(data))
           .catch(error => console.error('Error fetching price data:', error));
     }, []);
     
    return (
        <div>
            <h2 className='text-3xl bg-purple-300 font-bold p-4 text-center'>Awesome Affordable Prices</h2>
            {
                prices.map(price => <PriceCart key={price.id} price={price}></PriceCart>)
            }
        </div>
    );
};

export default PriceList;