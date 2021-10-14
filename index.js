const express = require("express");

const app = express();

app
  .get("/", (req, res) => {
    res.send("Get all items");
  })
  .catch((err) => {
    console.error(err);
  });

app
  .get("/:graphId", (req, res) => {
    res.send("Get a graph by graphId");
  })
  .catch((err) => {
    console.error(err);
  });

app
  .delete("/remove/:graphId", (req, res) => {
    res.send("Graph successfully deleted");
  })
  .catch((err) => {
    console.error(err);
  });

app
  .post("/add/graph", (req, res) => {
    res.send("Graph successfully created");
  })
  .catch((err) => {
    console.error(err);
  });
