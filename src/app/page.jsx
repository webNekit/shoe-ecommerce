import Banner from "../components/Banner/Banner";
import ProductsAll from "../components/Products/ProductsAll/ProductsAll";
import ProductsPopular from "../components/Products/ProductsPopular/ProductsPopular";

export default function Home() {
  return (
    <>
      <Banner />
      <ProductsPopular />
      <ProductsAll />
    </>
  );
}
