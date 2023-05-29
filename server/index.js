const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const coin_router = require('./routes/coin.routes');
const mongoose = require('mongoose');


dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());


// MONGO DATABASE CONNECTION
DB_CONNECTION = process.env.DB_CONNECTION
DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD))
.then(()=> console.log("Mongo DB Connected!"))


// Coins
app.use("/api/coins/", coin_router)


PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`NODE APP listening on port ${PORT}`);
})