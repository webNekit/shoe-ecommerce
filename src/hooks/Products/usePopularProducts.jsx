"use client";
import React, { useEffect, useState } from 'react';
import { axiosClient } from '@/utils/GlobalApi';

const usePopularProducts = () => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        getPopularProduct();
    }, []);

    const getPopularProduct = () => {
        axiosClient.get('/products?filters[isPopular][$in]=true&populate=*').then(resp => {
            setProductData(resp.data.data);
        }).catch(error => {
            console.log("Ошибка получения данных", error);
        })
    }
    return productData;
}

export default usePopularProducts
