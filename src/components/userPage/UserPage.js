import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation.js";

export default function UserPage() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("user-info");
    navigate("/login");
  }

  return (
    <div>
      <Navigation>
        <div>Hipotato</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "400px",
            height: "26px"
          }}
        >
          <input type="text" placeholder="search" />
          <button>Pinned</button>
          <button onClick={logout}>Logout</button>
        </div>
      </Navigation>
    </div>
  );
}
