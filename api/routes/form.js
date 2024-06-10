const express = require("express");
const router = require("express").Router();
const Form = require("../models/form");

router.post("/", async (req, res) => {
  console.log("Received body are " + JSON.stringify(req.body));

  Form.insertMany(req.body)
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
  Form.find()
    .then((data) => {
      console.log("Existing Forms in SDFB " + JSON.stringify(data));
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
  Form.deleteMany({})
    .then((data) => {
      //Insert all
      Form.insertMany(req.body)
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
  Form.deleteMany({})
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
