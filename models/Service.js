const mongoose = require("mongoose");
const schema = mongoose.Schema;
const ServiceSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pictures: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  datedebut: {
    type: Date,
    required: false,
  },
  datefin: {
    type: Date,
    required: false,
  },
  adress: {
    type: String,
    isAdmin: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Service", ServiceSchema);
