const express = require("express");
const router = require("express").Router();
const path = require("path");
const multer = require("multer");
const Video = require("../models/video");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    //This part defines where the files need to be saved

    var rootDir = path.dirname(process.argv[1]);
    var dirPath = path.join(rootDir, "/upload/onvideo");
    console.log(dirPath);
    cb(null, dirPath);
  },
  filename: (req, file, cb) => {
    //This part sets the file name of the file
    console.log(JSON.stringify(file));
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

// Then we will set the storage
const upload = multer({ storage: storage });

router.post("/", upload.single("photo"), async (req, res) => {
  console.log("Received body are " + JSON.stringify(req.body));
  console.log("Receive file is " + req.file);
  const data = JSON.parse(req.body.data);
  const { id, name, link, category } = data;
  const currDt = new Date(new Date().toUTCString());
  const video = new Video({
    id: id,
    name: name,
    category: category,
    link: link,
    path: "/upload/onvideo",
    filename: req.file.filename,
    status: "A",
    createdat: currDt,
    modifiedat: currDt,
    createdby: "F",
    modifiedby: "F ",
  });
  video
    .save()
    .then(() => {
      console.log("Video Link uploaded");
      //generate mail content
      //send mail
      res.status(201).send({
        status: "201",
        message: "created-video",
      });
      res.end();
    })
    .catch((err) => {
      console.log("Video creation failure");
      console.log(err);
      res.status(500).send({
        status: "500",
        message: "Video creation failure",
      });
    });
});

router.get("/", async (req, res) => {
  Video.find()
    .then((data) => {
      console.log("Existing videos in SDFB " + JSON.stringify(data));
      res.status(200).send({
        status: "200",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/:videoid", upload.single("photo"), async (req, res) => {
  console.log("receive params are " + JSON.stringify(req.params));
  console.log("Received body are " + JSON.stringify(req.body));
  console.log("Receive file is " + req.file);
  const videoid = req.params["videoid"];
  const data = JSON.parse(req.body.data);
  const { name, link, category } = data;
  const currDt = new Date(new Date().toUTCString());
  const filter = { id: videoid };
  const update = {
    name: name,
    link: link,
    category: category,
    filename: req.file.filename,
    modifiedat: currDt,
  };

  const doc = Video.findOneAndUpdate(filter, update, { upsert: true });
  if (doc) {
    console.log("Updated Video with " + JSON.stringify(data));
    return res.status(200).send({
      status: "200",
      message: "Updated",
      data: data,
    });
  }
  return res.status(405).send({
    status: "405",
    message: "No video to update",
    data: data,
  });
});

router.delete("/:videoid", async (req, res) => {
  console.log("receive params are " + JSON.stringify(req.params));
  console.log("Received body are " + JSON.stringify(req.body));
  console.log("Receive file is " + req.file);
  const videoid = req.params["videoid"];

  const currDt = new Date(new Date().toUTCString());
  const filter = { id: videoid };

  const doc = await Video.deleteOne(filter);
  console.log("Deleted count is " + doc.deletedCount);
  if (doc && doc.deletedCount > 0) {
    return res.status(200).send({
      status: "200",
      message: "Updated",
      data: doc,
    });
  } else {
    return res.status(405).send({
      status: "405",
      message: "No video to delete",
      data: data,
    });
  }
});

module.exports = router;
