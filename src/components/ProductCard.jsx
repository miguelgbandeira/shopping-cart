import { css } from "@emotion/css";

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
    </>
  );
}

export default ProductCard;
