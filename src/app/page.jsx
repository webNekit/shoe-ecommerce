"use client";
import useAllProducts from "@/hooks/Products/useAllProducts";
import Banner from "../components/Banner/Banner";
import ProductsAll from "../components/Products/ProductsAll/ProductsAll";
import ProductsPopular from "../components/Products/ProductsPopular/ProductsPopular";
import usePopularProducts from "@/hooks/Products/usePopularProducts";


export default function Home() {
  const productsData = useAllProducts();
  const popularProductsData = usePopularProducts();
  return (
    <>
      <Banner />
      <ProductsPopular data={popularProductsData} />
      <ProductsAll data={productsData} />
    </>
  );
}
