const express = require("express");
const { Likes } = require("../models/likes.model");

const getLikes = async (likeId)=> await Likes.findById(likeId);
console.log("running")

module.exports = {getLikes}