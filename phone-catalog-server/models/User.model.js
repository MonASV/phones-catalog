const { Schema, model } = require("mongoose");

const phoneSchema = new Schema(
  {
    name: String,
    manufacturer: String,
    description: String, 
    color: String,
    price: Number,
    imageFileName: String,
    screen: String,
    proccessor: String,
    ram: Number
  },
  {
    timestamps: true
  }
);

const Phone = model("Phone", phoneSchema);

module.exports = Phone;
