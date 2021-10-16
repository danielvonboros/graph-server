const express = require("express");
const app = express();
const cors = require("cors");

const graphData = require("./data.json");

const PORT = 3001;

app.use(express.json());

let allowedOrigins = [
  "http://localhost:3000",
  "https://localhost:3000",
  "http://graph-server-mtg.heroku.com",
  "https://graph-server-mtg.heroku.com",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        let message =
          "The CORS policy for this application does not allow access from origin " +
          origin;
        return callback(new Error(message), false);
      }
      return callback(null, true);
    },
  })
);

app.get("/", (req, res) => {
  console.log("/ endpoint", req);
  res.json(graphData);
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
