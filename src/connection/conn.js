const mongoose = require('mongoose');
require('dotenv').config();

const conn = async () => {
    await mongoose.connect();
    console.log('Mongo Conectado!');
}
