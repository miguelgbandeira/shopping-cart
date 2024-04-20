import { css } from "@emotion/css";
import { Link } from "react-router-dom";

function Header({ cartCount }) {
  return (
    <div className={header}>
      <h1>Dollar $tore</h1>
      <div className={nav}>
        <Link className={linkStyle} to="/">
          home
        </Link>
        <Link className={linkStyle} to="products">
          products
        </Link>
        <Link className={linkStyle} to="checkout">
          cart {cartCount > 0 ? "(" + cartCount + ")" : ""}
        </Link>
      </div>
    </div>
  );
}

const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2em;
`;

const nav = css`
  display: flex;
  justify-content: space-around;
`;

const linkStyle = css`
  margin: 1em;
  text-decoration: none;
  color: black;
`;

export default Header;
