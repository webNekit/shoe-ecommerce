import Banner from '@/components/Products/Single/Banner/Banner'
import Content from '@/components/Products/Single/Content/Content'
import React from 'react'

export default function singleProductPage({ params }) {
  return (
    <>
        <Banner src={'/assets/img/banner/img-1.png'} />
        <Content />
    </>
  )
}
