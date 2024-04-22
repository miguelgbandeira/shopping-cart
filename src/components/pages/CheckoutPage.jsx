import { useOutletContext } from "react-router-dom";
import CheckoutCard from "../CheckoutCard";

function CheckoutPage() {
  const { cartList } = useOutletContext();

  return (
    <div>
      <h2>Your items:</h2>
      <div>
        {cartList.map((item) => {
          return <CheckoutCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default CheckoutPage;
