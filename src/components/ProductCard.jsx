import { css } from "@emotion/css";
import PropTypes from "prop-types";
import useQuantity from "./hooks/useQuantity";
import QuantityInput from "./QuantityInput";

function ProductCard({ product, handleAddToCart }) {
  const {
    quantity,
    setQuantity,
    handleIncrement,
    handleDecrement,
    handleChange,
  } = useQuantity(1, 1);

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
        <QuantityInput
          quantity={quantity}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onChange={handleChange}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            handleAddToCart(product, quantity);
            setQuantity(1);
          }}
        >
          Add to cart
        </button>
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

ProductCard.propTypes = {
  product: PropTypes.object,
  handleAddToCart: PropTypes.func,
};

export default ProductCard;
