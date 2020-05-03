// Import packages
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const uuid = require("uuid");

const fs = require("fs");

// App
const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());

// Create
app.post("/dogs", (req, res) => {
  const dogsList = readJSONFile();
  dogsList.push({
    id: uuid.v4(),  // uuidv1()
    name: req.body.name,
    img: req.body.img
  });
  writeJSONFile(dogsList);
  res.send("Added");
});

// Read One
app.get("/dogs/:id", (req, res) => {
  const dogsList = readJSONFile();
  res.json(dogsList.filter(elem => elem.id == req.params.id));
});

// Read All
app.get("/dogs", (req, res) => {
  const dogsList = readJSONFile();
  res.json(dogsList);   // res.send(dogsList);
});

// Update
app.put("/dogs/:id", (req, res) => {
  const dogsList = readJSONFile();
  for (let i = 0; i < dogsList.length; i++) {
    if (dogsList[i].id == req.params.id) {
        dogsList[i].name = req.body.name;
        dogsList[i].img = req.body.img;
    }
  }
  writeJSONFile(dogsList);
  res.send("Edited");
});

// Delete
app.delete("/dogs/:id", (req, res) => {
  const dogsList = readJSONFile();
  writeJSONFile(dogsList.filter(elem => elem.id != req.params.id));
  res.send("Deleted");
});

// Functia de citire din fisierul db.json
function readJSONFile() {
  return JSON.parse(fs.readFileSync("db.json"))["dogs"];
}

// Functia de scriere in fisierul db.json
function writeJSONFile(content) {
  fs.writeFileSync(
    "db.json",
    JSON.stringify({ dogs: content }),
    "utf8",
    err => {
      if (err) {
        console.log(err);
      }
    }
  );
}

app.listen("3000", () =>
  console.log("Server started at: http://localhost:3000")
);