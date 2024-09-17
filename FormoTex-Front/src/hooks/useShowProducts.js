import { useState, useEffect } from 'react';
import formotexApi from '../api/formotexApi.js';

export const useShowProducts = () => {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await formotexApi.get('/product/getProducts');
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, []); // El array vacío asegura que el efecto solo se ejecute una vez.

    return { products };
};
