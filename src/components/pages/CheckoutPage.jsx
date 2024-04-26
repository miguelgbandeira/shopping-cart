import { useOutletContext } from "react-router-dom";
import { css } from "@emotion/css";
import CheckoutCard from "../CheckoutCard";
import Button from "../Button";

function CheckoutPage() {
  const { cartList, setCartList } = useOutletContext();

  function removeItem(item) {
    setCartList(cartList.filter((cartItem) => cartItem !== item));
  }

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

            return (
              <CheckoutCard
                item={item}
                key={item.id}
                handleRemoveItem={removeItem}
              />
            );
          })}
        </div>
      </div>
      <div className={summaryContainer}>
        <h2>Summary</h2>
        <div className={price}>
          <p>Total:</p>
          <p>${parseFloat(totalValue.toFixed(2))}</p>
        </div>
        <Button
          handleClick={handleCheckout}
          text={"Checkout"}
          disabled={!cartList.length}
        />
      </div>
    </div>
  );
}

const style = css`
  display: flex;
  gap: 100px;
  justify-content: space-around;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

const summaryContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const price = css`
  display: flex;
  justify-content: space-between;
`;

export default CheckoutPage;
