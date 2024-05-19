"use client";
import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useCategory = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    getAllCategory();
  }, [])

  const getAllCategory = () => {
    axiosClient.get('/categories?populate=*').then(resp => {
        setCategoryData(resp.data.data);
        console.log(resp.data.data);
    }).catch(error => {
        console.log("Ошибка получения данных", error);
    });
  }
  return categoryData;
}

export default useCategory
