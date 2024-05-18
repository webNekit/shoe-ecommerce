import Container from '@/layout/Container/Container'
import Image from 'next/image'
import React from 'react'

const Banner = ({ className = null, data = null }) => {
  return (
    <div className={className + " w-full py-5"}>
        <Container>
            <div className="w-full bg-gray-200 py-5 flex flex-col gap-2 items-center">
                <h1 className="text-center text-xl md:text-5xl font-semibold text-gray-950">Спортивная обувь<br />для большой семьи</h1>
                <Image src={'/assets/img/banner/img-1.png'} alt={'Изображение кроссовка'} width={1020} height={450} className="w-full h-[340px] object-contain" />
            </div>
        </Container>
    </div>
  )
}

export default Banner