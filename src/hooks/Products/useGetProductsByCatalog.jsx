"use client";
import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useGetProductsByCatalog = (param) => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        getProductByCatalog();
    }, [param])

    const getProductByCatalog = () => {
        axiosClient.get('products?filters[gender][slug][$in]=' + param + '&populate=*').then(resp => {
            setProductData(resp.data.data);
            console.log(resp.data.data);
        }).catch(error => {
            console.log("Ошибка получения данных", error);
        })
    }
    return productData;
    // products?filters[gender][slug][$in]=men&populate=*
}

export default useGetProductsByCatalog
