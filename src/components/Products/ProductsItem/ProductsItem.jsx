import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Eye, Heart, Plus } from 'lucide-react'

const ProductsItem = ({ className = null, data = null }) => {
  return (
    <ul className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 " + className}>
      {[1, 2, 3, 4].map((item, index) => {
        return (
          <li key={index} className="w-full h-full">
            <div className="w-full h-full bg-white border border-gray-100">
              <div className="w-full px-4 py-2">
                <span className="text-gray-400 text-sm">Кроссовки</span>
                <h3 className="text-gray-950 text-lg font-semibold">Under Armour UA U Infinite Pro Fire</h3>
              </div>
              <div className="relative w-full h-72 bg-gray-200">
                <Image fill src={'/assets/img/banner/img-1.png'} alt={'Изображение товара'} className="w-full h-full object-contain object-center" />
              </div>
              <div className="w-full px-4 py-2 flex items-center justify-between">
                <h4 className="text-gray-950 font-semibold">
                  <span className="text-gray-400 font-normal">Цена</span>
                  <br />3000 руб.
                </h4>
                <ul className="flex items-center gap-1">
                  <li className="inline-flex">
                    <Link href={'/products/detail/' + 1} className="w-10 h-10 rounded-sm bg-gray-950 flex items-center justify-center text-white transition-colors duration-300 hover:bg-gray-300 hover:text-gray-950">
                      <Eye size={18} />
                    </Link>
                  </li>
                  <li className="inline-flex">
                    <button href={'/product'} className="w-10 h-10 rounded-sm bg-gray-950 flex items-center justify-center text-white transition-colors duration-300 hover:bg-gray-300 hover:text-gray-950">
                      <Heart size={18} />
                    </button>
                  </li>
                  <li className="inline-flex">
                    <button href={'/product'} className="w-10 h-10 rounded-sm bg-gray-950 flex items-center justify-center text-white transition-colors duration-300 hover:bg-gray-300 hover:text-gray-950">
                      <Plus size={18} />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  )
}

export default ProductsItem