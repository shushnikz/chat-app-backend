const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PW}@ac-1zsaov0-shard-00-00.4ismyhv.mongodb.net:27017,ac-1zsaov0-shard-00-01.4ismyhv.mongodb.net:27017,ac-1zsaov0-shard-00-02.4ismyhv.mongodb.net:27017/?ssl=true&replicaSet=atlas-w1rvdu-shard-0&authSource=admin&retryWrites=true&w=majority`, () => {
    console.log("DB connected")
})
