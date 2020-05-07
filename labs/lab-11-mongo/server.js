// Import packages
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const uuid = require("uuid");

const fs = require("fs");

const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId

// App
const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());


const dbConnectionString = 'mongodb://localhost:27017'

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('db connected')
        const db = client.db('test');
        const dogCollection = db.collection('test')

        // Create
        app.post("/dogs", (req, res) => {
            const newDog = req.body;
            dogCollection.insertOne(newDog).then(result => {
                console.log(result);
                res.json(result.ops[0]);
            }).catch((error) => {
            })
        });

        // Read One
        app.get("/dogs/:id", (req, res) => {
            const id = req.params.id;
            dogCollection.findOne({
                _id: new ObjectId(id)
            })
            .then(result => {
                console.log(result);
                res.json(result);
            }).catch((error) => {
            })
        });

        // Read All
        app.get("/dogs", (req, res) => {
            dogCollection.find().toArray()
                .then(result => {
                    res.json(result)
                }).catch((error) => {
                })
        });

        // Update
        app.put("/dogs/:id", (req, res) => {
            const id = req.params.id;
            const newDog = req.body;

            var myquery = {
                _id: new ObjectId(id),
            }
            var newvalues = { $set: newDog };

            dogCollection.updateOne(myquery, newvalues)
            .then(result => {
                console.log(result);
                res.json({...newDog, id: id});
            }).catch((error) => {
            })

        });

        // Delete
        app.delete("/dogs/:id", (req, res) => {
            const id = req.params.id;
            dogCollection.remove({
                _id: new ObjectId(id)
            })
            .then(result => {
                console.log(result);
                res.send('ok');
            }).catch((error) => {
            })
        });


    }).catch((error) => {
        console.log('db not connected')
    })

// Start the server
app.listen("3000", () =>
    console.log("Server started at: http://localhost:3000")
);