import { useParams } from "react-router-dom";
import useData from "../hooks/useData";
import useQuantity from "../hooks/useQuantity";
import { useOutletContext } from "react-router-dom";
import QuantityInput from "../QuantityInput";
import { css } from "@emotion/css";
import Button from "../Button";

function ProductDetailsPage() {
  const { id } = useParams();
  const { data, loading, error } = useData(`/products/${id}`);
  const { handleAddToCart } = useOutletContext();
  const {
    quantity,
    setQuantity,
    handleIncrement,
    handleDecrement,
    handleChange,
  } = useQuantity(1, 1);

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div className={flexContainer}>
      <div>
        <img className={image} src={data.image} alt={data.title} />
      </div>
      <div className={infoContainer}>
        <h1>{data.title}</h1>
        <h2>${parseFloat(data.price).toFixed(2)}</h2>
        <h4>{data.description}</h4>
        <div className={buttonsContainer}>
          <QuantityInput
            quantity={quantity}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onChange={handleChange}
          />
          <Button
            handleClick={() => {
              handleAddToCart(data, quantity);
              setQuantity(1);
            }}
            text={"Add to cart"}
          />
        </div>
      </div>
    </div>
  );
}

const flexContainer = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const image = css`
  max-width: 300px;
`;

const infoContainer = css`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const buttonsContainer = css`
  display: flex;
  gap: 1em;
  align-items: center;
`;

export default ProductDetailsPage;
