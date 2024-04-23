import { useState } from "react";

function useQuantity(initialQuantity = 1, min = 1, max = 100) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, max));
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, min));
  };

  const handleChange = (value) => {
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue) && parsedValue >= min && parsedValue <= max) {
      setQuantity(parsedValue);
    }
  };

  return {
    quantity,
    setQuantity,
    handleIncrement,
    handleDecrement,
    handleChange,
  };
}

export default useQuantity;
