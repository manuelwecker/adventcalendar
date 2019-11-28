import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const NavBtn = styled.button`
  margin: 8px 0 0 0;
  width: 33.33%;
  text-decoration: none;
  border: 1 px solid #b6c7b7;
  background-color: #b6c8b5;
  height: 48px;
  font-family: sans-serif;
  a {
    text-decoration: none;
    color: #4a4c3d;
    font-size: 1.2em;
    font-weight: bold;
  }
`;

const NavigationBar = styled.div`
  display: flex;
`;

export default function Footer() {
  return (
    <>
      <NavigationBar>
        <NavBtn>
          <Link to="/prev">PREV</Link>
        </NavBtn>
        <NavBtn>
          <Link to="/home">UNLOCK</Link>
        </NavBtn>
        <NavBtn>
          <Link to="/next">NEXT</Link>
        </NavBtn>
      </NavigationBar>
    </>
  );
}
