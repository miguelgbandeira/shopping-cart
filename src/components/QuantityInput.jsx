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
  return (
    <div>
      <button onClick={onDecrement} style={buttonStyle}>
        -
      </button>
      <input
        type="number"
        min={min}
        max={max}
        value={quantity}
        onChange={onChange}
        style={inputStyle}
      />
      <button onClick={onIncrement} style={buttonStyle}>
        +
      </button>
    </div>
  );
}

export default QuantityInput;
