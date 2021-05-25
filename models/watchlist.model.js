const mongoose = require("mongoose");
const { Video } = require("./videos.model");
const { Schema } = mongoose;

const WatchlistSchema = new Schema({
  videos: [{ _id: String, name:String,category: String }]
})


const Watchlist = mongoose.model("Watchlist", WatchlistSchema);
module.exports = { Watchlist }