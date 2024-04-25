import { css } from "@emotion/css";
import heroImage from "../../assets/winter-woman-shopping-illustration-by-Vexels.png";
function HeroPage() {
  return (
    <div className={container}>
      <div>
        <h1 className={heroTitle}>FreshFinds</h1>
        <h3 className={subtitle}>Shop Smarter, Not Harder</h3>
        <button className={button}>Shop now</button>
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
`;

const button = css`
  background: var(--light-purple);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.5em 1.5em;
  font: inherit;
  font-weight: bolder;
  cursor: pointer;
  outline: inherit;
`;

const image = css`
  width: 500px;
`;

export default HeroPage;
