const express = require('express');
const router = express.Router();
const { Video } = require("../models/videos.model");
const { data } = require("../data/data");

router.route("/")
  .get(async (req, res) => {
    try {
      const data = await Video.find({});
      res.status(200).json({ success: true, videodata: data });
    } catch (error) {
      res.status(404).json({ success: false, message: "The server can not find the requested resource.", error: error.message })
    }
  })
  .post( async (req,res) => {
    try {
      const { _id,name,category } = req.body;
      // console.log(data);
      
      const videoInDb = await Video.findOne({_id});
      // console.log(videoInDb)
      if(videoInDb) {
         return res.json({success: false,message: "Data Exists"})
      } else {
        const newVideo = new Video({_id,name,category});
      newVideo.save();
       return res.json(newVideo);
      }
      
    } catch(e) {
      // console.log("error",e);
      res.json({success:false,message:"Unable to add data"});
    } 
  })

router.route("/:videoId")
  .get(async (req, res) => {
    try {
      const { videoId } = req.params;
      const data = await Video.findById(videoId);
      res.status(200).json({ success: true, videodata: data });
    } catch (error) {
      res.status(404).json({ success: false, message: "The server can not find the requested resource.", error: error.message })
    }
  })

module.exports = router;

