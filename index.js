const express = require("express");
const app = express();
const cors = require("cors");

const graphData2 = require("./data.json");

const PORT = 3001;

// import graphData from "./data.js";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("/ endpoint", req);
  res.json(graphData2);
});

app.get("/:graphId", (req, res) => {
  console.log("GET /:graphid endpoint");
});

app.delete("/remove/:graphId", (req, res) => {
  console.log("delete /remove/:graphid request");
});

app.post("/add/graph", (req, res) => {
  console.log("POST /add/graph request");
});

app.listen(PORT, () => {
  console.info(`App is running on port ${PORT}`);
});
