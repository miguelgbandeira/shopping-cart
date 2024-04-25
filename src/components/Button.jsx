import { css } from "@emotion/css";
function Button({ text, handleClick }) {
  return (
    <button className={button} onClick={handleClick}>
      {text}
    </button>
  );
}

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

  &:active {
    background: var(--main-purple);
  }
`;
export default Button;
