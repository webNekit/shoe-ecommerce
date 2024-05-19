"use client";
import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useAllProducts = () => {
  const [ productsData, setProductsData ] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);
  const getAllProducts = () => {
    axiosClient.get('/products?populate=*').then(resp => {
      setProductsData(resp.data.data);
      console.log(resp.data.data);
    }).catch(error => {
      console.log("Ошибка получения данных", error);
    });
  };
  return productsData;
}
export default useAllProducts;