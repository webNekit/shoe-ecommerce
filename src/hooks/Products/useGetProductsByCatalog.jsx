"use client";
import { axiosClient } from '@/utils/GlobalApi';
import { useEffect, useState } from 'react';

const useGetProductsByCatalog = (genderId, filters) => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const getProductByCatalog = async () => {
            try {
                let url = `products?filters[gender][slug][$in][0]=${genderId}`;
                if (filters.category) url += `&filters[category][id][$in][1]=${filters.category}`;
                if (filters.brand) url += `&filters[brend][id][$in][2]=${filters.brand}`;
                if (filters.sort) url += `&sort[0]=price:${filters.sort}`;
                url += '&populate=*';

                const response = await axiosClient.get(url);
                setProductData(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error("Ошибка получения данных", error);
            }
        };

        getProductByCatalog();
    }, [genderId, filters]);

    return productData;
};

export default useGetProductsByCatalog;
