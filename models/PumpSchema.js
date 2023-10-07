const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
},
{ timestamps: true }
);

module.exports = mongoose.model("pump", PumpSchema);