import React from "react";
import { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../fetchings/fetchFromBackend.js";
import { Button, Form, Input, CenterFrame } from "../../styled/loginsignup.js";

function reducer(state, action) {
  if (action.type === "userName") {
    state.userName = action.payload;
    return state;
  } else if (action.type === "password") {
    state.password = action.payload;
    return state;
  } else return state;
}

export default function Login() {
  const [form, dispatch] = useReducer(reducer, {});
  const navigate = useNavigate();

  return (
    <CenterFrame>
      <h2 style={{ fontFamily: "monospace" }}>Hipotato</h2>
      <h4 style={{ fontFamily: "monospace" }}>get answer / post question</h4>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          if (form.userName && form.password) {
            const info = await loginUser(form);
            const res = await info.json();
            if (res === 0) {
              alert("No user match");
            }
            const { id, userName } = res;
            localStorage.setItem("user-info", JSON.stringify({ id, userName }));
            if (res.userName) {
              navigate(`/user/${res.userName}`);
              window.location.reload();
            } else {
              navigate("/login");
            }
          }
        }}
      >
        <Input
          onChange={(e) => {
            dispatch({ type: "userName", payload: e.target.value });
          }}
          type="text"
          placeholder="username"
        />
        <Input
          onChange={(e) =>
            dispatch({ type: "password", payload: e.target.value })
          }
          type="password"
          placeholder="password"
        />
        <Button>Login</Button>
        <Link
          to={"/signup"}
          style={{ margin: "14px", textDecorationLine: "none", color: "blue" }}
        >
          Sign Up
        </Link>
      </Form>
    </CenterFrame>
  );
}
