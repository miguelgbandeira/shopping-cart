import PropTypes from "prop-types";
import { css } from "@emotion/css";

function QuantityInput({
  quantity,
  onIncrement,
  onDecrement,
  onChange,
  min = 1,
  max = 100,
}) {
  const handleIncrement = (e) => {
    e.preventDefault();
    onIncrement();
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    onDecrement();
  };

  return (
    <div className={container}>
      <button className={btn} onClick={handleDecrement}>
        -
      </button>
      <input
        className={input}
        type="number"
        min={min}
        max={max}
        value={quantity}
        onChange={(e) => onChange(e.target.value)}
        onClick={(e) => e.preventDefault()}
      />
      <button className={btn} onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

const container = css`
  display: flex;
  gap: 0.2em;
`;

const btn = css`
  background: var(--light-purple);
  color: white;
  border: none;
  border-radius: 30px;
  width: 1.5em;
  height: 1.5em;
  font: inherit;
  font-weight: bolder;
  cursor: pointer;
  outline: inherit;
  text-align: center;

  &:active {
    background: var(--main-purple);
  }

  &:focus {
    border: 2px solid var(--main-purple);
  }

  &:hover {
    border: 1px solid var(--main-purple);
  }
`;

const input = css`
  border: 1px solid var(--cadet-grey);
  text-align: center;
  border-radius: 10px;
  padding: 0.2em;

  &:active {
    background: var(--main-purple);
  }
`;

QuantityInput.propTypes = {
  quantity: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default QuantityInput;
