const express = require("express");
const app = express();
const cors = require("cors");

const graphData = require("./data.json");

const port = process.env.port || 3001;

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

app.get("/graphs", (req, res) => {
  console.log("/ endpoint", req);
  res.json(graphData);
});

app.get("/graphs/:graphId", (req, res) => {
  console.log("GET /:graphid endpoint", req.params);

  const { graphId } = req.params;

  for (let i = 0; i < graphData.length + 1; i++) {
    if (graphData[i].id === graphId) {
      return res.status(200).json(graphData[i]);
    }
  }
});

app.delete("/remove/:graphId", (req, res) => {
  console.log("delete /remove/:graphid request");
  res.send("DELETE /remove/:graphId endpoint");
});

app.post("/add/graph", (req, res) => {
  console.log("POST /add/graph request");
  res.send("POST /graphs/:graphId endpoint");
});

app.listen(port, "0.0.0.0", () => {
  console.info(`App is running on port ${port}`);
});
