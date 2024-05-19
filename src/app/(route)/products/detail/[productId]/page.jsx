"use client";
import Banner from '@/components/Products/Single/Banner/Banner'
import Content from '@/components/Products/Single/Content/Content'
import useDetailProduct from '@/hooks/Products/useDetailProduct'
import React from 'react'

export default function SingleProductPage({ params }) {
  const productData = useDetailProduct(params.productId);
  return (
    <>
        <Banner src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (productData.attributes?.image?.data.attributes?.url ?? '')} />
        <Content data={productData} />
    </>
  )
}
