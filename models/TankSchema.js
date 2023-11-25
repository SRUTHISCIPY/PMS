const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TankSchema = new Schema(
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
},
{ timestamps: true }
);

module.exports = mongoose.model("tank", TankSchema);