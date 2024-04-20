import { Outlet } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { css } from "@emotion/css";

function App() {
  const [cartCount, setCountCart] = useState(0);

  function handleAddToCart() {
    console.log("hey");
    setCountCart(() => cartCount + 1);
  }

  return (
    <div className={flex}>
      <Header cartCount={cartCount} />
      <Outlet context={handleAddToCart} />
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
