import { css } from "@emotion/css";
import PropTypes from "prop-types";
import useQuantity from "./hooks/useQuantity";
import QuantityInput from "./QuantityInput";
import Button from "./Button";

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
        <img className={productImage} src={product.image} alt={product.title} />
      </div>
      <h3 className={title}>{product.title}</h3>
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
        <Button
          handleClick={(e) => {
            e.preventDefault();
            handleAddToCart(product, quantity);
            setQuantity(1);
          }}
          text={"Add to cart"}
        />
      </div>
    </div>
  );
}

const card = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 400px;
  padding: 1em;
  border: 1px solid var(--cadet-grey);
  border-radius: 10px;
  overflow: hidden;
`;

const imageContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
`;

const productImage = css`
  width: 100px;
  height: auto;
`;

const title = css`
  font-size: 1em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const buttonContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
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
