const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.4ismyhv.mongodb.net/chat-app`, () => {
    console.log("DB connected")
})
