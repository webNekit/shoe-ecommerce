"use client";
import React from 'react';
import Container from '@/layout/Container/Container';
import ProductsItem from '@/components/Products/ProductsItem/ProductsItem';
import useGetProductsByCatalog from '@/hooks/Products/useGetProductsByCatalog';

export default function gendersPage({ params }) {
  const productData = useGetProductsByCatalog(params.genderId)
  return (
    <>
      <section className="w-full py-5 md:py-5">
        <Container>
            <h2 className="text-3xl text-gray-950 font-semibold">{productData[0]?.attributes?.gender?.data?.attributes.name}</h2>
            <div className="w-full flex gap-2 flex-col md:flex-row md:gap-5 pt-4">
            <div className="flex items-start md:items-center gap-2 flex-col md:flex-row">
                    <span className="text-gray-700 font-medium">Категория</span>
                    <select className="bg-gray-950 text-white p-3 w-full">
                        <option>Кроссовки</option>
                        <option>Кеды</option>
                        <option>Ботинки</option>
                    </select>
                </div>
                <div className="flex items-start md:items-center gap-2 flex-col md:flex-row">
                    <span className="text-gray-700 font-medium">Сортировать</span>
                    <select className="bg-gray-950 text-white p-3 w-full">
                        <option>По возрастанию цены</option>
                        <option>По убыванию цены</option>
                        <option>Новинки</option>
                    </select>
                </div>
                <div className="flex items-start md:items-center gap-2 flex-col md:flex-row">
                    <span className="text-gray-700 font-medium">Бренд</span>
                    <select className="bg-gray-950 text-white p-3 w-full">
                        <option>Nike</option>
                        <option>Adidas</option>
                        <option>Новинки</option>
                    </select>
                </div>
            </div>
            <ProductsItem data={productData} className={'pt-5'} />
        </Container>
    </section>
    </>
  )
}
