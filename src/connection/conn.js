const mongoose = require('mongoose');

const conect = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.UsrMongo}:${process.env.PassMongo}@testebackend.tm0cy.mongodb.net/?retryWrites=true&w=majority&appName=testeBackEnd`);
}

module.exports = conect;
