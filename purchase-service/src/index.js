const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());

app.post("/purchase", purchaseItem);

app.listen(PORT, () =>
  console.log(">> Purchase service listening on port ", PORT)
);

/*************************/
/*************************/
/*************************/

async function purchaseItem(req, res) {
  try {
    await authenticate(req.headers.authorization);

    const { itemId } = req.body;
    const response = await axios.get(`http://book-service/books/${itemId}`);

    res.json({ message: "Success", item: response.data });
  } catch (ex) {
    res.status(500).json({ error: ex });
  }
}

async function authenticate(token) {
  await axios.post("http://user-service:3004/auth", { token });
}
