import { css } from "@emotion/css";
import PropTypes from "prop-types";

function CheckoutCard({ item, handleRemoveItem }) {
  return (
    <>
      <div key={item.id} className={itemCard}>
        <div>
          <img style={{ width: "100px" }} src={item.image} alt={item.title} />
        </div>
        <div className={cardInformation}>
          <div className={cardInformationHeader}>
            <b>{item.title}</b>
            <div>${item.price}</div>
          </div>
          <div>
            <div>Quantity: {item.quantity}</div>
            <button onClick={() => handleRemoveItem(item)}>Remove</button>
          </div>
        </div>
      </div>
    </>
  );
}

const itemCard = css`
  display: flex;
  gap: 1em;
  margin-bottom: 1em;
  border-top: 1px solid black;
  padding: 1em;

  &:first-of-type {
    border-top: none; /* Remove border for the first item */
  }
`;

const cardInformation = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const cardInformationHeader = css`
  display: flex;
  flex-direction: column;
  gap: 0.7em;
`;

CheckoutCard.propTypes = {
  item: PropTypes.object,
  handleRemoveItem: PropTypes.func,
};

export default CheckoutCard;
