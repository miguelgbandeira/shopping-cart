import { css } from "@emotion/css";
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../ProductCard";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { handleAddToCart } = useOutletContext();

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
      <div className={grid}>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Link className={linkReset} to={`/products/${product.id}`}>
                <ProductCard
                  product={product}
                  handleAddToCart={handleAddToCart}
                />
              </Link>
            </div>
          );
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

const linkReset = css`
  text-decoration: none;
  color: inherit;
`;

export default ProductsPage;
