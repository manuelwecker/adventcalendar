import React from "react";
import styled from "@emotion/styled";
// import { ThemeProvider } from "emotion-theming";
// import themes from "./utils/themes";

const HeadBar = styled.header(`
  background-color: #4a4c3d;
  
`);

export default function Header() {
  return (
    <>
      <HeadBar>
        <h3>Dein digitaler Adventskalender</h3>
      </HeadBar>
    </>
  );
}
