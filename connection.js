const mongoose = require("mongoose")
dbConnect()
async function dbConnect() {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect('mongodb+srv://Chat-app-user:Shush129@cluster0.4ismyhv.mongodb.net/chat-app', { useNewUrlParser: true })
        console.log("Mongodb connected successfully")
    } catch (error) {
        console.log("Mongodb connection fail")
    }
}

module.exports = mongoose