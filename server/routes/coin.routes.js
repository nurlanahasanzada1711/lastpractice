const express = require('express');
const coin_router = express.Router()
const coinController = require('../controllers/coin.controller');


// get all moneys
coin_router.get('/', coinController.getAll)


// get icon by id
coin_router.get('/:id', coinController.getById)

// delete icon
coin_router.delete('/:id', coinController.delete)

// post coin
coin_router.post('/', coinController.post)

// edit coin
coin_router.put('/:id', coinController.edit)


module.exports = coin_router