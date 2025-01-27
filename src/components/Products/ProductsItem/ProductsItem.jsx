import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Eye, Plus } from 'lucide-react';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { axiosClient } from '@/utils/GlobalApi';

const ProductsItem = ({ data }) => {
  const { user } = useKindeBrowserClient();
  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleAddToCart = async (itemId) => {
    try {
      const response = await axiosClient.post('/orders', {
        data: {
          user: user.email,
          tovaries: [itemId], // Убедитесь, что ID товара передается как массив
          price: data.find(item => item.id === itemId).attributes.price,
        },
      });
      alert('Товар добавлен в корзину');
    } catch (error) {
      console.error('Ошибка при добавлении товара в корзину:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <ul className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 "}>
      {data.map((item, index) => {
        return (
          <li key={index} className="w-full h-full">
            <div className="w-full h-full bg-white border border-gray-100">
              <div className="w-full px-4 py-2">
                <span className="text-gray-400 text-sm">{item.attributes.category?.data?.attributes?.name}</span>
                <h3 className="text-gray-950 text-lg font-semibold">{item.attributes.name}</h3>
              </div>
              <div className="relative w-full h-72 bg-gray-200">
                <Image fill src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item.attributes?.image?.data.attributes?.url ?? '')} alt={'Изображение товара'} className="w-full h-full object-contain object-center" />
              </div>
              <div className="w-full px-4 py-2 flex items-center justify-between">
                <h4 className="text-gray-950 font-semibold">
                  <span className="text-gray-400 font-normal">Цена</span>
                  <br />{item.attributes.price} руб.
                </h4>
                <ul className="flex items-center gap-1">
                  <li className="inline-flex">
                    <Link href={'/products/detail/' + item.attributes.slug} className="w-10 h-10 rounded-sm bg-gray-950 flex items-center justify-center text-white transition-colors duration-300 hover:bg-gray-300 hover:text-gray-950">
                      <Eye size={18} />
                    </Link>
                  </li>
                  {user &&
                    <li className="inline-flex">
                      <button onClick={() => handleAddToCart(item.id)} className="w-10 h-10 rounded-sm bg-gray-950 flex items-center justify-center text-white transition-colors duration-300 hover:bg-gray-300 hover:text-gray-950">
                        <Plus size={18} />
                      </button>
                    </li>
                  }
                </ul>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsItem;
