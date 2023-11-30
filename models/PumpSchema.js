const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TankSchema = new mongoose.Schema(
  {
    TankNumber: {
      type: String,
      required: true,
    },
    Volume :{
      type : String,
      required : true,
    },
    Product: {
        type: String,
        required: true,
      },
    ProductCode: {
      type: String,
      required: true,
    },
    Quantity: {
        type: String,
        required: true,
      },
    note: {
        type: String,
        required: true,
      },
    Active: {
        type: Boolean,
        required: true,
      },

});

const PumpSchema = new Schema(
  {
    PumpName: {
      type: String,
      required: true,
    },
    PhoneNumber :{
      type : String,
      required : true,
    },
    Address: {
        type: String,
        required: true,
      },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    Tank:[TankSchema]
},
{ timestamps: true }
);

module.exports = mongoose.model("pump", PumpSchema);