import { css } from "@emotion/css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Header({ cartCount }) {
  return (
    <div className={header}>
      <h1 className={navTitle}>FreshFinds</h1>
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
  padding: 0.5em;
`;

const navTitle = css`
  color: var(--main-purple);
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

Header.propTypes = {
  cartCount: PropTypes.number,
};

export default Header;
