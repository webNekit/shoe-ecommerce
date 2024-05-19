import Container from '@/layout/Container/Container'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Orders = () => {
    return (
        <section className="w-full py-10">
            <Container>
                <h2 className="text-gray-950 text-xl md:text-3xl font-semibold">Заказы</h2>
                <div className="w-full grid grid-cols-12 gap-5 pt-7">
                    <div className="col-span-12 order-2 md:order-1 md:col-span-7 border border-gray-200 p-5">
                        <ul className="flex flex-col gap-2">
                            {[1, 2, 3].map((item, index) => {
                                return (
                                    <li key={index} className="inline-flex">
                                        <div className="w-full flex items-center justify-between">
                                            <div className="flex items-center gap-5">
                                                <Image loading='lazy' src="/assets/img/banner/img-1.png" alt='Изображение товара' width={56} height={56} className="w-16 h-16 object-contain object-center" />
                                                <div className="flex flex-col items-start">
                                                    <span className="text-gray-400 text-sm">Кроссовки</span>
                                                    <Link href={'/products/detail/' + 1} className='group'>
                                                        <h3 className='text-gray-950 font-semibold text-lg group-hover:text-gray-950/50'>Lorem ipsum dolor sit amet.</h3>
                                                    </Link>
                                                </div>
                                                <span className="text-gray-800">3000 руб.</span>
                                            </div>
                                            <button className='px-5 py-3 bg-gray-950 text-white'>Удалить</button>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="col-span-12 order-1 md:order-2 md:col-span-5 border border-gray-200 p-5">
                        <div className="w-full pb-4 border-b border-gray-200">
                            <h3 className="text-gray-950 text-lg font-semibold text-center">Данные пользователя</h3>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Orders