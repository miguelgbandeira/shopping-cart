import { css } from "@emotion/css";
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../ProductCard";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics", {
      mode: "cors",
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server error");
        }
        return response.json();
      })
      .then((response) => setProducts(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div>Products</div>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </>
  );
}

export default ProductsPage;
