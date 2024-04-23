import { useParams } from "react-router-dom";
import useData from "../hooks/useData";
import { useOutletContext } from "react-router-dom";

function ProductDetailsPage() {
  const { id } = useParams();
  const { data, loading, error } = useData(`/products/${id}`);
  const { handleAddToCart } = useOutletContext();

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <img style={{ width: "200px" }} src={data.image} alt={data.title} />
      <h1>{data.title}</h1>
      <h2>${data.price}</h2>
      <h4>{data.description}</h4>
      <button onClick={() => handleAddToCart(data)}>Add to cart</button>
    </div>
  );
}

export default ProductDetailsPage;
