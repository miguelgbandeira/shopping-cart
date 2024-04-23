import { useParams } from "react-router-dom";
import useData from "../hooks/useData";

function ProductDetailsPage() {
  const { id } = useParams();
  const { data, loading, error } = useData(`/products/${id}`);

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <img style={{ width: "200px" }} src={data.image} alt={data.title} />
      <h1>{data.title}</h1>
      <h2>${data.price}</h2>
      <h4>{data.description}</h4>
      <button>Add to cart</button>
    </div>
  );
}

export default ProductDetailsPage;
