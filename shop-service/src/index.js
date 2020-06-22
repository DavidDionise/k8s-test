const express = require("express");
const axios = require("axios");

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/items", getItems);

app.listen(PORT, () => console.log(">> Shop service listening on port ", PORT));

/*************************/
/*************************/
/*************************/

async function getItems(req, res) {
  try {
    await authenticate(req.headers.authorization);
    const response = await axios.get("http://book-service/books");
    res.json(response.data);
  } catch (ex) {
    console.error(ex);
    res.status(500).json({ error: ex });
  }
}

async function authenticate(token) {
  await axios.post("http://user-service:3004/auth", { token });
}
