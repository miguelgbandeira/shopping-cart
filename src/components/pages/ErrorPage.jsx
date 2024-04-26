import errorImage from "../../assets/error-6482984_960_720.png";
import { css } from "@emotion/css";

function ErrorPage() {
  return (
    <div className={container}>
      <img className={image} src={errorImage} />
      <h1 className={title}>Something went wrong</h1>
    </div>
  );
}

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;

const title = css`
  color: var(--light-purple);
  font-size: 3rem;
`;

const image = css`
  max-width: 500px;
`;

export default ErrorPage;
