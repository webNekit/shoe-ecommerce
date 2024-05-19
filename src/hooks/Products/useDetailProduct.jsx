"use client";
import React, { useEffect, useState } from 'react';
import { axiosClient } from '@/utils/GlobalApi';

const useDetailProduct = (slug) => {
    const [productData, setProductData] = useState([]);
    useEffect(() => {
        detailProduct();
    }, [slug]);

    const detailProduct = () => {
        axiosClient.get('/products?filters[slug][$eqi]=' + slug + '&populate=*').then(resp => {
            setProductData(resp.data.data[0]);
            console.log(resp.data.data[0]);
        }).catch(error => {
            console.log("Ошибка получения данных", error);
        })
    }
    return productData;
}

export default useDetailProduct
