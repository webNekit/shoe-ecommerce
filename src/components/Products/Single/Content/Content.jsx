import Container from '@/layout/Container/Container'
import React from 'react'

const Content = () => {
  return (
    <section className="w-full py-10">
        <Container>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                <div className="w-full flex flex-col gap-5">
                    <div className="w-full flex flex-col items-start gap-2">
                        <h2 className="text-gray-950 text-xl md:text-2xl font-medium">Lorem ipsum dolor sit amet.</h2>
                        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis nobis corporis illum vel perspiciatis fugit recusandae soluta delectus ullam?</p>
                    </div>
                    <button className="bg-gray-950 text-center text-white text-lg font-medium px-4 py-4">Добавить в корзину</button>
                </div>
                <div className="w-full flex flex-col items-start gap-5">
                    <h3 className="text-gray-700 text-xl">Размеры</h3>
                    <ul className="flex flex-wrap gap-1">
                        {[1,2,3,4,5,6,7,8,9,10,11,12,13].map((item, index) => {
                            return (
                                <li key={index} className="inline-flex">
                                    <button className="w-14 h-14 border border-gray-300">3.5</button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="w-full flex flex-col items-start gap-5">
                    <h3 className="text-gray-700 text-xl">Характеристики</h3>
                    <ul className="w-full flex flex-col gap-2">
                        {[1,2,3,4].map((item, index) => {
                            return (
                            <li key={index} className="w-full inline-flex items-start gap-3">
                                <span className="text-gray-500 ">Бренд:</span>
                                <span className="text-gray-950 ">Nike</span>
                            </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Content