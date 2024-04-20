import { css } from "@emotion/css";
import PropTypes from "prop-types";

function ProductCard({ product }) {
  console.log(product);
  return (
    <>
      <img style={{ width: "100px" }} src={product.image} />
      <h3>{product.title}</h3>
      <p>
        {product.rating.rate}({product.rating.count})
      </p>
      <p>${product.price}</p>
      <button>Add to cart</button>
    </>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
