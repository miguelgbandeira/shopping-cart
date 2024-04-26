import { css } from "@emotion/css";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

function Header({ cartCount }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <div className={header}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className={navTitle}>FreshFinds</h1>
      </Link>
      <div className={nav}>
        <Link
          className={isActive("/") ? `${linkStyle} ${activeStyle}` : linkStyle}
          to="/"
        >
          home
        </Link>
        <Link
          className={
            isActive("/products") ? `${linkStyle} ${activeStyle}` : linkStyle
          }
          to="/products"
        >
          products
        </Link>
        <Link
          className={
            isActive("/checkout") ? `${linkStyle} ${activeStyle}` : linkStyle
          }
          to="/checkout"
        >
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

const activeStyle = css`
  text-decoration: underline;
  text-decoration-color: var(--light-purple);
  text-decoration-thickness: 5px;
`;

Header.propTypes = {
  cartCount: PropTypes.number,
};

export default Header;
