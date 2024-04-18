import { css } from "@emotion/css";
import { Link } from "react-router-dom";

function Header() {
  const linkStyle = css`
    margin: 1em;
    text-decoration: none;
    color: black;
  `;

  return (
    <>
      <h1>Hello Word!</h1>
      <Link className={linkStyle} to="/">
        home
      </Link>
      <Link className={linkStyle} to="products">
        products
      </Link>
      <Link className={linkStyle} to="checkout">
        cart
      </Link>
    </>
  );
}

export default Header;
