import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login.js";
import SignUp from "./components/login/SignUp.js";
import UserPage from "./components/userPage/UserPage.js";

function App() {
  if (localStorage.getItem("user-info")) {
    var { userName } = JSON.parse(localStorage.getItem("user-info"));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/web" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          exact
          path={`/user/${userName ? userName : ""}`}
          element={<UserPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
