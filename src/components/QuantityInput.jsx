import PropTypes from "prop-types";

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
    <div>
      <button onClick={handleDecrement}>-</button>
      <input
        type="number"
        min={min}
        max={max}
        value={quantity}
        onChange={(e) => onChange(e.target.value)}
        onClick={(e) => e.preventDefault()}
      />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

QuantityInput.propTypes = {
  quantity: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default QuantityInput;
