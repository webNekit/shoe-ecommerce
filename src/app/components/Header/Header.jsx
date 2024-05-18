import Container from '@/app/layout/Container/Container'
import Link from 'next/link'
import React from 'react'
import { ShoppingBag, Heart, Search } from 'lucide-react';

export const genders = [
    { label: "Мужчинам", href: "men" },
    { label: "Женщинам", href: "women" },
    { label: "Детям", href: "children" }
];

const Header = () => {
    return (
        <header className="w-full bg-white py-3 border-b border-gray-200" id="header">
            <Container>
                <div className="w-full grid grid-cols-3 items-center">
                    <div className="inline-flex gap-1">
                        <input type="search" placeholder="Поиск..." className="bg-transparent p-2 border border-gray-200 rounded-md" />
                        <button className="h-[42px] rounded-md text-white border-none aspect-square flex items-center justify-center bg-gray-900">
                            <Search size={18} />
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <Link href={''} className="text-gray-900 text-3xl font-semibold">Kirani</Link>
                    </div>
                    <ul className="flex items-center justify-end gap-5">
                        <li className="inline-flex">
                            <Link href={'/orders'} className="text-gray-500">
                                <Heart size={18} />
                            </Link>
                        </li>
                        <li className="inline-flex">
                            <Link href={'/orders'} className="text-gray-500">
                                <ShoppingBag size={18} />
                            </Link>
                        </li>
                    </ul>
                </div>
                <ul className="pt-5 w-full flex items-center justify-center gap-5">
                    {genders.map((item, index) => {
                        return (
                            <li key={index} className="inline-flex">
                                <Link href={"/genders/" + item.href} className="p-2 text-gray-600 hover:text-gray-600/50">{item.label}</Link>
                            </li>
                        );
                    })}
                </ul>
            </Container>
        </header>
    )
}

export default Header