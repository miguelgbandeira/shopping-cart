import { css } from "@emotion/css";
import { IonIcon } from "@ionic/react";
import { logoGithub } from "ionicons/icons";

function Footer() {
  return (
    <div className={footer}>
      Copyright © 2024 miguelgbandeira
      <a
        href="https://github.com/miguelgbandeira/cv-builder-react"
        target="_blank"
      >
        <IonIcon className={githubIcon} icon={logoGithub} id="github-icon" />
      </a>
    </div>
  );
}

const footer = css`
  background-color: var(--main-purple);
  color: white;
  text-align: center;
  padding: 1em;
  margin-top: 2em;
`;

const githubIcon = css`
  color: white;
  margin-left: 0.5em;
`;

export default Footer;
