const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TankSchema = new mongoose.Schema(
  {
    TankNumber: {
      type: String,

    },
    Volume :{
      type : String,

    },
    Product: {
        type: String,

      },
    ProductCode: {
      type: String,

    },
    Quantity: {
        type: String,
        required: true,
      },
    note: {
        type: String,
      },
    Active: {
        type: Boolean,
      },

});

const PumpSchema = new Schema(
  {
    PumpName: {
      type: String,

    },
    PhoneNumber :{
      type : String,

    },
    Address: {
        type: String,

      },
    email: {
      type: String,
      unique: true,
    },
    Tank:[TankSchema]
},
{ timestamps: true }
);

module.exports = mongoose.model("pump", PumpSchema);