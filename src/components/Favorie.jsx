import Title from "components/ui/Title";
import Products from "api/product.json";
import { useEffect, useState } from "react";
import Product from "./ui/Product";

export default function Favorie() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);
  return (
    <div>
      <Title>Favoriler</Title>
      <div className="grid grid-cols-8 gap-0.1 rounded-lg overflow-hidden">
        {products.length &&
          products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
      </div>
    </div>
  );
}
