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
const EmployeeSchema = new mongoose.Schema(
  {
    EmployeeName: {
      type: String,

    },
    EmployeeId: {
      type: String,

    },
  });
  const FuelSchema = new mongoose.Schema(
    {
      FuelName: {
        type: String,
  
      },
      FuelPricePerLitre: {
        type: String,
  
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
    Tank:[TankSchema],
    Employee:[EmployeeSchema],
    Fuel:[FuelSchema]
},
{ timestamps: true }
);

module.exports = mongoose.model("pump", PumpSchema);