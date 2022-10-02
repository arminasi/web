import React from "react";
import styled from "styled-components";

const Nav = styled.div({
  height: "60px",
  background: "tomato",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  color: "white"
});

function Navigation(props) {
  return (
    <>
      <Nav>{props.children}</Nav>
    </>
  );
}

export default Navigation;
