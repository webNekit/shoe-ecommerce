"use client";
import Container from '@/layout/Container/Container';
import ProductsItem from '../ProductsItem/ProductsItem';
import React from 'react'

const ProductsAll = ({ data }) => {
    return (
        <section className={"w-full py-5 md:py-10 "}>
            <Container>
                <div className="w-full flex flex-col gap-5">
                    <h2 className="text-3xl text-gray-950 font-semibold">Все товары</h2>
                    <ProductsItem data={data} />
                </div>
            </Container>
        </section>
    )
}

export default ProductsAll