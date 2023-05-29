const mongoose = require("mongoose");


// COIN MODEL

const CoinModel = mongoose.model("Coins", new mongoose.Schema({
    name:String,
    desc:String,
    imageURL: String,
}));

module.exports = CoinModel