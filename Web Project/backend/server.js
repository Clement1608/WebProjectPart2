const express = require("express");
const cors = require("cors");
const path = require("path");
const players = require("./data/players");

const app = express();
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "data/images")));

let currentIndex = 0;

function sendResponse(res) {
  res.json({
    index: currentIndex,
    item: players[currentIndex],
    total: players.length,
  });
}

app.get("/item", (req, res) => {
  sendResponse(res);
});

app.get("/item/next", (req, res) => {
  currentIndex = (currentIndex + 1) % players.length;
  sendResponse(res);
});

app.get("/item/prev", (req, res) => {
  currentIndex = (currentIndex - 1 + players.length) % players.length;
  sendResponse(res);
});

app.get("/item/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id) || id < 0 || id >= players.length) {
    return res.status(400).json({ error: "Invalid ID" });
  }
  currentIndex = id;
  sendResponse(res);
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Backend running on http://localhost:${PORT}`)
);
