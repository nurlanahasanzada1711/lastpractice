const CoinModel = require("../models/icon.model");


const coinController = {
    getAll: async (req, res) => {
        const { name } = req.query;
        const coins = await CoinModel.find();
        if (name === undefined) {
          res.status(200).send({
            data: coins,
            message: "data get success!",
          });
        } else {
          res.status(200).send({
            data: coins.filter((x) =>
              x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
            ),
            message: "data get success!",
          });
        }
      },

    getById: async (req, res) => {
        const id = req.params.id;
        const coin = await CoinModel.findById(id);
        console.log("Coin found", coin);
        if (!coin) {
            res.status(204).send("Coin not found");
        } else {
            res.status(200).send({
                data: coin,
                message: "Data get success!",
            });
        }
    },

    delete: async (req, res) => {
        const id = req.params.id;
        const coin = await CoinModel.findByIdAndDelete(id);
        if (coin == undefined) {
            res.status(404).send("Coin not found");
        } else {
            res.status(203).send({
                data: coin,
                message: "Data deleted successfully!",
            });
        }
    },

    post: async (req, res) => {
        const {
            name,
            desc,
            imageURL
        } = req.body;
        const newCoin = new CoinModel({
            name: name,
            desc: desc,
            imageURL: imageURL,
        });
        await newCoin.save();
        res.status(201).send("Created");
    },

    edit: async (req, res) => {
        const id = req.params.id;
        const {
            name,
            desc,
            imageURL
        } = req.body;
        console.log("name:", name);
        const existedCoin = await CoinModel.findByIdAndUpdate(id, {
            name: name,
            desc: desc,
            imageURL: imageURL,
        });
        if (existedCoin == undefined) {
            res.status(404).send("Coin not found!");
        } else {
            res.status(200).send(`${name} updated successfully!`);
        }
    }
};

module.exports = coinController