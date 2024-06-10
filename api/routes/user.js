const express = require("express");
const router = require("express").Router();
const nodecache = require("node-cache");
const cache = new nodecache();
const axios = require("axios");

const User = require("../models/user");
const path = require("path");
const saltlen = process.env.AUTH_PWD_SALTLEN | 64;

router.post("/exist", async (req, res) => {
  const { email, provider, sub } = req.body;
  const filter = {
    fedSubject: sub,
    fedProvider: provider,
    status: "A",
  };
  let doc = await User.findOne(filter);
  if (doc != null) {
    if (doc.fedSubject != null)
      res.status(200).send({
        status: "200",
        success: true,
        message: "User Exist",
        user: {
          email: doc.email,
          name: doc.name,
        },
      });
    else
      res.status(200).send({
        status: "404",
        message: "User Not Found",
      });
  } else
    res.status(200).send({
      status: "404",
      message: "User Not Found",
    });
});

router.post("/reg", async (req, res) => {
  const { email, provider, sub, name, version } = req.body;
  const currDt = new Date(new Date().toUTCString());
  var updateUser = {
    name: name,
    email: email,
    fedProvider: "AzureAD",
    fedSubject: sub,
    version: version,
    isFederated: true,
    status: "A",
    modifiedat: currDt,
    createdby: "F",
    modifiedby: "F ",
  };
  if (version == 1) {
    updateUser.createdat = currDt;
  }
  const filter = {
    email: email,
    fedProvider: "AzureAD",
    fedSubject: sub,
    status: "A",
  };
  var doc = await User.findOneAndUpdate(filter, updateUser, {
    upsert: true,
    new: true,
  });
  if (doc) {
    cache.set("Usr_Reg_" + sub, req.body);
    var authHeader = "Bearer " + process.env.SF_Header_Authz;
    let config = {
      headers: {
        Authorization: authHeader,
      },
    };
    axios
      .post(process.env.SF_URL, req.body, config)
      .then((res) => {
        console.log("salesforce: respons statue -" + res);
      })
      .catch((err) => console.log("Salesforce error response: " + err));
    console.log("Updated User with " + JSON.stringify(doc));
    res.status(201).send({
      status: "201",
      message: "created-user",
      success: true,
    });
  } else {
    res.status(500).send({
      status: "500",
      message: "User Registration failed",
      success: false,
    });
  }
});

router.get("/:subject", async (req, res) => {
  const user = cache.get("Usr_Reg_" + req.params["subject"]);
  if (user) {
    console.log("Got user ", user);
    res.status(200).send({
      status: 200,
      success: true,
      data: user,
      msg: "User found",
    });
    res.end();
  } else
    res.status(404).send({
      status: 404,
      success: true,
      data: null,
      msg: "User not found",
    });
});

router.get("/cache/:keyid?*", async (req, res) => {
  if (req.params["keyid"]) {
    const val = cache.get(req.params["keyid"] + req.params[0]);
    if (val) {
      res.status(200).send({
        status: 200,
        key: req.params["keyid"],
        value: val,
      });
      res.end();
    } else {
      res.status(404).send({
        status: 404,
        message: "Cache Key not found",
      });
    }
  } else {
    var keys = cache.keys();
    var resArray = [];
    if (keys.length > 0) {
      keys.forEach((element) => {
        resArray.push({ key: element, value: cache.get(element) });
      });
      res.status(200).send(resArray);
    } else {
      res.status(404).send({
        status: 404,
        message: "Nothing in Cache",
      });
    }
  }
});

module.exports = router;
