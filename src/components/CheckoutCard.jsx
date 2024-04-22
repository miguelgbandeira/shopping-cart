import { css } from "@emotion/css";

function CheckoutCard({ item }) {
  console.log(item);
  return (
    <>
      <div key={item.id} className={style}>
        <div>
          <img style={{ width: "100px" }} src={item.image} alt={item.title} />
        </div>
        <div>
          <b>{item.title}</b>
          <div>${item.price}</div>
          <div>Quantity: {item.quantity}</div>
        </div>
      </div>
    </>
  );
}

const style = css`
  display: flex;
  gap: 1em;
`;

export default CheckoutCard;
