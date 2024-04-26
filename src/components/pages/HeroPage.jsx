import { css } from "@emotion/css";
import heroImage from "../../assets/winter-woman-shopping-illustration-by-Vexels.png";
import Button from "../Button";
import { Link } from "react-router-dom";
function HeroPage() {
  return (
    <div className={container}>
      <div>
        <h1 className={heroTitle}>FreshFinds</h1>
        <h3 className={subtitle}>Shop Smarter, Not Harder</h3>
        <Link to="/products">
          <Button handleClick={() => null} text={"Shop now"} />
        </Link>
      </div>
      <div>
        <img className={image} src={heroImage} />
      </div>
    </div>
  );
}

const container = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1em;
`;

const heroTitle = css`
  font-size: 4em;
  margin-bottom: 0;
  color: var(--main-purple);
  font-weight: bolder;
`;

const subtitle = css`
  font-size: 2em;
  margin-top: 0.5em;
  color: var(--light-blue);
  margin-bottom: 0.5em;
`;

const image = css`
  max-width: 500px;
`;

export default HeroPage;
