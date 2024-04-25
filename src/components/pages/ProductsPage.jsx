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
    <div className={content}>
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
    </div>
  );
}

const content = css`
  margin: 2.5em auto; /* Center the container and give vertical space */
  padding: 0;
`;

const grid = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5em;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 460px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

const linkReset = css`
  text-decoration: none;
  color: inherit;
`;

export default ProductsPage;
