import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { createUser } from "../../fetchings/fetchFromBackend.js";
import { Button, CenterFrame, Form, Input } from "../../styled/loginsignup.js";

function reducer(state, action) {
  if (action.type === "userName") {
    state.userName = action.payload;
    return state;
  } else if (action.type === "password") {
    state.password = action.payload;
    return state;
  } else return state;
}

export default function SignUp() {
  const [form, dispatch] = useReducer(reducer, {});

  return (
    <CenterFrame>
      <h2 style={{ fontFamily: "monospace" }}>Hipotato</h2>
      <h4 style={{ fontFamily: "monospace" }}>get answer / post question</h4>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await createUser(form);
          } catch (err) {
            console.log(err);
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
        <Button>SignUp</Button>
        <Link
          to={"/login"}
          style={{ margin: "14px", textDecorationLine: "none", color: "blue" }}
        >
          Login
        </Link>
      </Form>
    </CenterFrame>
  );
}
