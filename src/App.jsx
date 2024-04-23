import { Outlet } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { css } from "@emotion/css";

function App() {
  const [cartList, setCartList] = useState([]);

  function handleAddToCart(item, quantityToAdd = 1) {
    const existingItem = cartList.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCartList = cartList.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantityToAdd }
          : cartItem
      );
      setCartList(updatedCartList);
    } else {
      setCartList((prevCartList) => [
        ...prevCartList,
        { ...item, quantity: quantityToAdd },
      ]);
    }
  }

  return (
    <div className={flex}>
      <Header cartCount={cartList.length} />
      <Outlet context={{ handleAddToCart, cartList }} />
      <Footer />
    </div>
  );
}

const flex = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;

export default App;
