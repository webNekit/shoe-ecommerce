"use client";
import React, { useState } from 'react';
import Container from '@/layout/Container/Container';
import ProductsItem from '@/components/Products/ProductsItem/ProductsItem';
import useGetProductsByCatalog from '@/hooks/Products/useGetProductsByCatalog';
import Brand from '@/hooks/Brand/Brand';
import useCategory from '@/hooks/Category/useCategory';

export default function GendersPage({ params }) {
    const [filters, setFilters] = useState({ category: '', sort: '', brand: '' });
    const productData = useGetProductsByCatalog(params.genderId, filters);
    const brandData = Brand();
    const categoryData = useCategory();

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    return (
        <>
            <section className="w-full py-5 md:py-5">
                <Container>
                    <h2 className="text-3xl text-gray-950 font-semibold">{productData[0]?.attributes?.gender?.data?.attributes.name}</h2>
                    <div className="w-full flex gap-2 flex-col md:flex-row md:gap-5 pt-4">
                        <div className="flex items-start md:items-center gap-2 flex-col md:flex-row">
                            <span className="text-gray-700 font-medium">Сортировать</span>
                            <select name="sort" onChange={handleFilterChange} className="bg-gray-950 text-white p-3 w-full">
                                <option value="">Нет</option>
                                <option value="asc">По возрастанию цены</option>
                                <option value="desc">По убыванию цены</option>
                            </select>
                        </div>
                        <div className="flex items-start md:items-center gap-2 flex-col md:flex-row">
                            <span className="text-gray-700 font-medium">Категория</span>
                            <select name="category" onChange={handleFilterChange} className="bg-gray-950 text-white p-3 w-full">
                                <option value="">Все</option>
                                {categoryData.map((item, index) => (
                                    <option key={index} value={item.id}>{item.attributes?.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex items-start md:items-center gap-2 flex-col md:flex-row">
                            <span className="text-gray-700 font-medium">Бренд</span>
                            <select name="brand" onChange={handleFilterChange} className="bg-gray-950 text-white p-3 w-full">
                                <option value="">Все</option>
                                {brandData.map((item, index) => (
                                    <option key={index} value={item.id}>{item.attributes?.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <ProductsItem data={productData} className={'pt-5'} />
                </Container>
            </section>
        </>
    );
}
