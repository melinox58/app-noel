require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');

const dbMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = dbMongo;
