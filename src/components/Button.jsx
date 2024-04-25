import { css } from "@emotion/css";
function Button({ text, handleClick, disabled = false }) {
  return (
    <button className={button} onClick={handleClick} disabled={disabled}>
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

  &:focus {
    border: 2px solid var(--main-purple);
  }
  &:hover {
    border: 1px solid var(--main-purple);
  }
`;
export default Button;
