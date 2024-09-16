import { useState, useEffect } from 'react';
import formotexApi from '../api/formotexApi.js';

export const useShowProducts = async() => {
    
    const [products, setProducts] = useState([]);

    try {
        
        const { data } = await formotexApi.get('/product/getProducts');
        console.log(data);
        
        setProducts(data);

    } catch (error) {
        
    }

    return products;
}