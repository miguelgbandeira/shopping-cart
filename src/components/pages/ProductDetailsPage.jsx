import { useParams } from "react-router-dom";
import useData from "../hooks/useData";
import useQuantity from "../hooks/useQuantity";
import { useOutletContext } from "react-router-dom";
import QuantityInput from "../QuantityInput";

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
    <div>
      <img style={{ width: "200px" }} src={data.image} alt={data.title} />
      <h1>{data.title}</h1>
      <h2>${data.price}</h2>
      <h4>{data.description}</h4>
      <QuantityInput
        quantity={quantity}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          handleAddToCart(data, quantity);
          setQuantity(1);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductDetailsPage;
