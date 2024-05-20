"use client";
import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useOrders = (email) => {
    const [ordersData, setOrdersData] = useState([]);

    useEffect(() => {
        if (email) {
            axiosClient.get(`orders?filters[user][$in]=${email}&populate[tovaries][populate][0]=image&populate[tovaries][populate][1]=category`)
                .then(resp => {
                    setOrdersData(resp.data.data);
                    console.log(resp.data.data);
                })
                .catch(error => {
                    console.log("Ошибка получения данных", error);
                });
        }
    }, [email]);

    return ordersData;
};

export default useOrders;
