const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('connected to the DB');
    } catch (err) {
        console.log('did not connect to the DB');

        console.error(err);
    }
};


module.exports = connectDB