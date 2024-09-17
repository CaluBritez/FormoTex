import { useState, useEffect } from 'react';
import formotexApi from '../api/formotexApi.js';
import { useDispatch } from 'react-redux';
import {showProducts} from '../store/product/productSlice.js';

export const useShowProducts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            try {

                const { data } = await formotexApi.get('/product/getProducts');
                dispatch(showProducts(data));

            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, []);

};
