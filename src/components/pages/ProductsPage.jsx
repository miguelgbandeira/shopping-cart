import { css } from "@emotion/css";
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../ProductCard";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", {
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
      <div className={grid}>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

const grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

export default ProductsPage;
