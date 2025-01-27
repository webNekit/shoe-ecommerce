"use client";
import Container from '@/layout/Container/Container'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { ShoppingBag, Heart, Search } from 'lucide-react';
import useCatalog from '@/hooks/Catalog/useCatalog';
// kinde
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

const Header = ({ data = null }) => {
    const catalogs = useCatalog();
    const { user } = useKindeBrowserClient();
    useEffect(() => {
        console.log(user);
    }, [user])
    return (
        <header className="w-full bg-white py-3 border-b border-gray-200" id="header">
            <Container>
                <div className="w-full grid grid-cols-2 md:grid-cols-3 items-center gap-2">
                    <div className="order-2 md:order-1 col-span-1 md:col-span-1 inline-flex gap-1">
                        <input type="search" placeholder="Поиск..." className="bg-transparent p-2 border border-gray-200 rounded-md" />
                        <button className="h-[42px] min-w-[42px] rounded-md text-white border-none aspect-square flex items-center justify-center bg-gray-900">
                            <Search size={18} />
                        </button>
                    </div>
                    <div className="order-1 md:order-2 col-span-2 md:col-span-1  flex justify-center">
                        <Link href={'/'} className="text-gray-900 text-3xl font-semibold">Kirani</Link>
                    </div>
                    <ul className="order-3 md:order-3 col-span-1 md:col-span-1 flex items-center justify-end gap-5">
                        {user ?
                            <li className="inline-flex">
                                <LogoutLink>Выйти</LogoutLink>
                            </li>
                            :
                            <>
                                <li className="inline-flex">
                                    <LoginLink>Войти</LoginLink>
                                </li>
                                <li className="inline-flex">
                                    <RegisterLink>Зарегистрироваться</RegisterLink>
                                </li>
                            </>
                        }
                        <li className="inline-flex">
                            <Link href={'/orders'} className="text-gray-500">
                                <ShoppingBag size={18} />
                            </Link>
                        </li>
                    </ul>
                </div>
                <ul className="pt-5 w-full flex items-center justify-center gap-5">
                    {catalogs.map((item, index) => {
                        return (
                            <li key={index} className="inline-flex">
                                <Link href={"/products/" + item.attributes.slug} className="p-2 text-gray-600 hover:text-gray-600/50">{item.attributes.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </Container>
        </header>
    )
}

export default Header