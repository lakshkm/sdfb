const express = require("express");
const router = require("express").Router();
const DataSet = require("../models/dataset");
const Data = require("../models/dataset");

router.post("/", async (req, res) => {
  console.log("Received body are " + JSON.stringify(req.body));
  //extract email from request
  const { datasets } = req.body;
  console.log("Received Datasets are " + JSON.stringify(datasets));
  DataSet.insertMany(req.body)
    .then((data) => {
      console.log(data);
      res.status(200).send({
        status: "200",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/", async (req, res) => {
  DataSet.find()
    .then((data) => {
      console.log("Existing Dataset in SDFB " + JSON.stringify(data));
      res.status(200).send({
        status: "200",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/", async (req, res) => {
  console.log("Received body are " + JSON.stringify(req.body));
  //Delete all
  Data.deleteMany({})
    .then((data) => {
      //Insert all
      DataSet.insertMany(req.body)
        .then((data) => {
          console.log(data);
          res.status(200).send({
            status: "200",
            data: data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/", async (req, res) => {
  DataSet.deleteMany({})
    .then((data) => {
      console.log("Deleted data " + JSON.stringify(data));
      res.status(200).send({
        status: "200",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
