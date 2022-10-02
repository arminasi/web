import styled from "styled-components";

export const CenterFrame = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: window.screen.height / 1.8
});

export const Button = styled.button({
  alignItems: "center",
  width: "100px",
  height: "30px",
  margin: "4px",
  padding: "4px",
  cursor: "pointer",
  border: "none",
  backgroundColor: "tomato",
  color: "white"
});

export const Input = styled.input({
  margin: "6px",
  padding: "4px"
});

export const Form = styled.form({
  display: "flex",
  flexDirection: "column",
  width: "320px",
  alignItems: "center",
  padding: "30px",
  boxShadow: "0 0px 0.7px 0"
});
