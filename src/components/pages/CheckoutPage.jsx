import { useOutletContext } from "react-router-dom";
import { css } from "@emotion/css";
import CheckoutCard from "../CheckoutCard";

function CheckoutPage() {
  const { cartList, setCartList } = useOutletContext();

  function handleCheckout() {
    alert(`
    Thank you for your order!
    We hope to see you soon!`);
    setCartList([]);
  }

  let totalValue = 0;

  return (
    <div className={style}>
      <div>
        <h2>Your items:</h2>
        <div>
          {cartList.map((item) => {
            let itemTotal = item.price * item.quantity;

            totalValue += itemTotal;

            return <CheckoutCard item={item} key={item.id} />;
          })}
        </div>
      </div>
      <div>
        <h2>Summary</h2>
        <div className={price}>
          <p>Total:</p>
          <p>${parseFloat(totalValue.toFixed(2))}</p>
        </div>
        <button onClick={() => handleCheckout()} disabled={!cartList.length}>
          Checkout
        </button>
      </div>
    </div>
  );
}

const style = css`
  display: flex;
  gap: 100px;
  justify-content: space-around;
`;

const price = css`
  display: flex;
  justify-content: space-between;
`;

export default CheckoutPage;
