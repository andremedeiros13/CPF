const mongoose = require("mongoose");

const cpfSchema = mongoose.Schema({

  cpf: {
    type: String,
    required: true

  }
},
  { timestamps: { createdAt: 'created_at' } });

const cpfModel = mongoose.model('people', cpfSchema, 'people');

module.exports = cpfModel
