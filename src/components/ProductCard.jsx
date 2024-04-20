import { css } from "@emotion/css";
import PropTypes from "prop-types";

function ProductCard({ product }) {
  console.log(product);
  return (
    <div className={card}>
      <div className={imageContainer}>
        <img
          style={{ width: "100px" }}
          src={product.image}
          alt={product.title}
        />
      </div>
      <h3>{product.title}</h3>
      <p className={rating}>
        {product.rating.rate}⭐️ ({product.rating.count})
      </p>
      <p className={price}>${product.price}</p>
      <div className={buttonContainer}>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

const card = css`
  width: 300px;
  padding: 1em;
  border: 1px solid black;
  border-radius: 10px;
`;

const imageContainer = css`
  display: flex;
  justify-content: center;
`;

const buttonContainer = css`
  display: flex;
  justify-content: center;
`;

const rating = css`
  font-size: 1em;
  opacity: 0.7;
`;

const price = css`
  font-size: 1.3em;
  font-weight: bold;
`;

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
