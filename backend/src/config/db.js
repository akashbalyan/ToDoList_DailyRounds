
const mongoose = require('mongoose')

const connectDb = async () => {

    try {
        const connection = await mongoose.connect(
            process.env.MONGO_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        console.log(`MongoDB Atlas Connected: ${connection.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

module.exports = connectDb;