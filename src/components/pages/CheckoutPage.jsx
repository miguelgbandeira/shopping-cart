import { useOutletContext } from "react-router-dom";
import CheckoutCard from "../CheckoutCard";

function CheckoutPage() {
  const { cartList } = useOutletContext();

  return (
    <div>
      <div>
        {cartList.map((item) => {
          return <CheckoutCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default CheckoutPage;
