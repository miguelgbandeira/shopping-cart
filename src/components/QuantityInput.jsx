function QuantityInput({
  quantity,
  onIncrement,
  onDecrement,
  onChange,
  min = 1,
  max = 100,
  inputStyle = {},
  buttonStyle = {},
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
      <button onClick={handleDecrement} style={buttonStyle}>
        -
      </button>
      <input
        type="number"
        min={min}
        max={max}
        value={quantity}
        onChange={(e) => onChange(e.target.value)}
        style={inputStyle}
        onClick={(e) => e.preventDefault()}
      />
      <button onClick={handleIncrement} style={buttonStyle}>
        +
      </button>
    </div>
  );
}

export default QuantityInput;
