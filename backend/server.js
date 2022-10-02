import express from "express";
import cors from "cors";
import { createNewUser, getUser } from "./dbHandlers.js";

const app = express();
const port = 9000;
//const BASE_URL = "http://127.0.0.1";

app.use(express.json());
app.use(cors());

app.route("/api").get(() => {});

app
  .route("/api/login")
  .get()
  .post(async (req, res) => {
    const loginUser = {
      userName: req.body.userName,
      password: req.body.password
    };
    const user = await getUser(loginUser);
    if (user) {
      res.send(user);
    } else {
      res.send(JSON.stringify(0));
    }
  });

app
  .route("/api/signUp")
  .get((req, res) => {
    res.send("Sign Up");
  })
  .post(async (req) => {
    const newUserInfo = {
      userName: req.body.userName,
      password: req.body.password
    };
    await createNewUser(newUserInfo);
  });

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
