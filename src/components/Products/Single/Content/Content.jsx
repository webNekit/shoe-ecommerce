"use client";
import Container from '@/layout/Container/Container'
import React, { useEffect } from 'react'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { axiosClient } from '@/utils/GlobalApi';


const Content = ({ data }) => {
    const { user } = useKindeBrowserClient();
    useEffect(() => {
        console.log(user);
    }, [user]);
    const handleAddToCart = async () => {
        try {
            const response = await axiosClient.post('/orders', {
                data: {
                    user: user.email,
                    tovaries: [data.id], // Убедитесь, что ID товара передается как массив
                    price: data.attributes.price,
                },
            });
            alert('Товар добавлен в корзину');
        } catch (error) {
            console.error('Ошибка при добавлении товара в корзину:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <section className="w-full py-10">
            <Container>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    <div className="w-full flex flex-col gap-5">
                        <div className="w-full flex flex-col items-start gap-2">
                            <span className="text-lg text-gray-500">{data.attributes?.price} руб.</span>
                            <h2 className="text-gray-950 text-xl md:text-2xl font-medium">{data.attributes?.name}</h2>
                            <p className="text-lg">{data.attributes?.description}</p>
                        </div>
                        {user ?
                            <>
                                <button onClick={handleAddToCart} className="bg-gray-950 text-center text-white text-lg font-medium px-4 py-4">Добавить в корзину</button>
                            </>
                            : <>
                            </>}
                    </div>
                    <div className="w-full flex flex-col items-start gap-5">
                        <h3 className="text-gray-700 text-xl">Размеры</h3>
                        <ul className="flex flex-wrap gap-1">
                            {data.attributes?.sizes?.data.map((item, index) => {
                                return (
                                    <li key={index} className="inline-flex">
                                        <button className="w-14 h-14 border border-gray-300">{item?.attributes.name}</button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="w-full flex flex-col items-start gap-5">
                        <h3 className="text-gray-700 text-xl">Характеристики</h3>
                        <ul className="w-full flex flex-col gap-2">
                            <li className="w-full inline-flex items-start gap-3">
                                <span className="text-gray-500 ">Бренд:</span>
                                <span className="text-gray-950 ">{data.attributes?.brend?.data?.attributes.name}</span>
                            </li>
                            <li className="w-full inline-flex items-start gap-3">
                                <span className="text-gray-500 ">Цвет:</span>
                                <span className="text-gray-950 ">{data.attributes?.color}</span>
                            </li>
                            <li className="w-full inline-flex items-start gap-3">
                                <span className="text-gray-500 ">Каталог:</span>
                                <span className="text-gray-950 ">{data.attributes?.gender?.data?.attributes.name}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Content