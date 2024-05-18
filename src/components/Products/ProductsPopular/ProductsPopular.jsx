import Container from '@/layout/Container/Container'
import React from 'react'
import ProductsItem from '../ProductsItem/ProductsItem'

const ProductsPopular = ({ className = null, data = null }) => {
  return (  
    <section className={"w-full py-5 md:py-10 " + className}>
        <Container>
            <div className="w-full flex flex-col gap-5">
                <h2 className="text-3xl text-gray-950 font-semibold">Популярные товары</h2>
                <ProductsItem data={''} />
            </div>
        </Container>
    </section>
  )
}

export default ProductsPopular