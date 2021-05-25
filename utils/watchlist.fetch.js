const express = require("express");
const { Watchlist } = require("../models/watchlist.model");

const getWatchlist = async (wishlistId)=> await Watchlist.findById(wishlistId);
console.log("running");

module.exports = {getWatchlist}