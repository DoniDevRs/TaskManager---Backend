const mongoose = require("mongoose");

const connectToDatabase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@taskmanager.nggk0hi.mongodb.net/?appName=TaskManager`);
    console.log("Connected to MongoDB");
}

module.exports = connectToDatabase;