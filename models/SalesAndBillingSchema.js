const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema( 
    {    
      OpeningReading: {
        type: String,
        required: true,
      },
      ClosingReading: {
        type: String,
        required: true,
      },
      Quantity: {
        type: String,
        required: true,
      },
      NozzleId: {
        type: String,
        required: true,
      },
      NozzleName: {
        type: String,
        required: true,
      },
      Amount: {
        type: String,
        required: true,
      },
    });
    const DenominationSchema = new mongoose.Schema(
        {
      2000: {
        type: Number,
        required: true,
      },
      500: {
        type: Number,
        required: true,
      },
      200: {
        type: Number,
        required: true,
      },
      100: {
        type: Number,
        required: true,
      },
      50: {
        type: Number,
        required: true,
      },
      20: {
        type: Number,
        required: true,
      },
      10: {
        type: Number,
        required: true,
      },
      5: {
        type: Number,
        required: true,
      },
      2: {
        type: Number,
        required: true,
      },
      1: {
        type: Number,
        required: true,
      },

    });
    const PaymentMethodSchema = new mongoose.Schema(
        {
      Method: {
        type: String,
        required: true,
      },
      Amount: {
        type: String,
        required: true,
      },

    },
   
    );
const SalesAndBillingSchema = new mongoose.Schema(
    {
      Name: {
        type: String,
        required: true,
      },
      Shift: {
        type: String,
        required: true,
      },
      TotalAmount: {
        type: String,
        required: true,
      },
      ExcessAmount: {
        type: String,
        required: true,
      },
      Date: {
        type: String,
        required: true,
      },
      Dinomination:[DenominationSchema],
      Product:[ProductSchema],
      Paymentmethod:[PaymentMethodSchema],
    }, 
    { timestamps: true });
    
    module.exports = mongoose.model("SalesAndBilling", SalesAndBillingSchema);