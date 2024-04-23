import { css } from "@emotion/css";
import ProductCard from "../ProductCard";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import useData from "../hooks/useData";

function ProductsPage() {
  const { data, error, loading } = useData("/products");
  const { handleAddToCart } = useOutletContext();

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className={grid}>
        {data.map((product) => {
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
