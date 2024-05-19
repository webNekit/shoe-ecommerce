"use client";
import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const Brand = () => {
    const [brandData, setBrandData] = useState([]);

    useEffect(() => {
        getAllBrands();
    }, [])
    
    const getAllBrands = () => {
        axiosClient.get('/brands?populate=*').then(resp => {
            setBrandData(resp.data.data);
            console.log(resp.data.data);
        }).catch(error => {
            console.log("Ошибка получения данных", error);
        });
    }
    return brandData;
}

export default Brand
