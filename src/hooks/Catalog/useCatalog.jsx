"use client";
import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useCatalog = () => {

    const [ catalogData, setCatalogData ] = useState([]);

    useEffect(() => {
        getAllCatalog();
    }, [])

    const getAllCatalog = () => {
        axiosClient.get('/catalogs?populate=*').then(resp => {
            setCatalogData(resp.data.data);
            console.log(resp.data.data)
        }).catch(error => {
            console.log("Ошибка получения данных", error);
          });
    };
    return catalogData;
}

export default useCatalog
