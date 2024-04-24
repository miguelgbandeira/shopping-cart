import { css } from "@emotion/css";
import heroImage from "../../assets/winter-woman-shopping-illustration-by-Vexels.png";
function HeroPage() {
  return (
    <div className={container}>
      <div>
        <h1 className={heroTitle}>FreshFinds</h1>
        <h3 className={subtitle}>Shop Smarter, Not Harder</h3>
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
// const hero = css`
//   text-align: center;
//   flex: auto;
//   overflow: auto;
// `;

const heroTitle = css`
  font-size: 4em;
  margin-bottom: 0;
  color: #786dff;
  font-weight: bolder;
`;

const subtitle = css`
  font-size: 2em;
  margin-top: 0.5em;
  color: #3fcbf3;
`;

const image = css`
  width: 500px;
`;

export default HeroPage;
