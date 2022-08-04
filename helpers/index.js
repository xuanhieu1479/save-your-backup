/* eslint-disable import/prefer-default-export */
import { Stylesheet } from "@fluentui/react";

export const applyFluentUIStyles = () => {
  const stylesheet = Stylesheet.getInstance();
  const styleTags = stylesheet.getRules(true);
  const style = document.createElement("style");
  style.textContent = styleTags;
  document.head.appendChild(style);
};
