const express = require("express");
const bodyParser = require("body-parser");
const userRepository = require("./user-repository");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = process.env.PORT || 3004;

app.use(bodyParser.json());

app.post("/signup", signup);
app.post("/login", login);
app.post("/auth", authenticate);

app.listen(PORT, () => console.log(">> User service listening on port ", PORT));

/*************************/
/*************************/
/*************************/

function signup(req, res) {
  const user = req.body;
  const newId = Math.max(...userRepository.map((u) => u.id)) + 1;
  const newUser = {
    ...user,
    id: newId,
    token: uuidv4(),
  };
  userRepository.push(newUser);
  res.json(newUser);
}

function login(req, res) {
  const { email } = req.body;
  const userIdx = userRepository.findIndex((u) => u.email == email);
  if (userIdx == -1) {
    res
      .status(400)
      .json({ message: `No user in the system with the email ${email}` });
  } else {
    const user = {
      ...userRepository[userIdx],
      token: uuidv4(),
    };
    userRepository[userIdx] = user;
    res.json(user);
  }
}

function authenticate(req, res) {
  const { token } = req.body;
  const user = userRepository.find((u) => u.token == token);
  if (user) {
    res.json(user);
  } else {
    res.status(401).json({ message: "Invalid token" });
  }
}
