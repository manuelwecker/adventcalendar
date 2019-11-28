import React from "react";
import { Global, css } from "@emotion/core";
import themes from "../utils/themes";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          background: ${themes.defaultTheme.colors.background};
          color: ${themes.defaultTheme.colors.text};
          font-size: 16px;
          font-family: "Love Ya Like A Sister", cursive;
          margin: 0px;
          padding: 0px;
          height: 100vh;
          width: 100%;
          align-items: center;
          text-align: center;
        }
      `}
    />
  );
}
