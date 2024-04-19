import { css } from "@emotion/css";
function HeroPage() {
  return (
    <div className={hero}>
      <h1 className={heroTitle}>$1 Deals</h1>
      <h3 className={subtitle}>Hard to Believe, Easy to Buy!</h3>
    </div>
  );
}

const hero = css`
  text-align: center;
  flex: auto;
  overflow: auto;
`;

const heroTitle = css`
  font-size: 3em;
  margin-bottom: 0;
`;

const subtitle = css`
  font-size: 2.5em;
  opacity: 0.6;
  margin-top: 0.5em;
`;

export default HeroPage;
