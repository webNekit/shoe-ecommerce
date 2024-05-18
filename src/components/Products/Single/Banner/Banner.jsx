import Container from '@/layout/Container/Container'
import Image from 'next/image'
import React from 'react'

const Banner = ({ className = null, src = null }) => {
  return (
    <section className="w-full py-6">
        <Container>
            <div className="relative w-full h-[390px] bg-gray-200">
                <Image fill src={src} alt={'Изображение товара'} className="w-full h-full object-contain object-center" />
            </div>
        </Container>
    </section>
  )
}

export default Banner