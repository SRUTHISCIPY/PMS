const mongoose = require("mongoose");
const TankDistributionSchema = new mongoose.Schema( 
    {
        Tank: {
            type: String,
            required: true,
        },
        Quantity: {
            type: String,
            required: true,
        },
    });
const DipStockSchema = new mongoose.Schema( 
    {
        Date: {
            type: Date,
            required: true,
        },
        InvoiceNumber: {
            type: String,
            required: true,
        },
        VehicleNumber: {
            type: String,
            required: true,
        },
        AgentName: {
            type: String,
            required: true,
        },
        Product: {
            type: String,
            required: true,
        },
        Quantity: {
            type: String,
            required: true,
        },
        Price: {
            type: String,
            required: true,
        },
        Note: {
            type: String,
            required: true,
        },
        TotalQuantityFilled: {
            type: String,
            required: true,
        },
        RemainingQuantity: {
            type: String,
            required: true,
        },
        PhoneNumber: {
            type: String,
            required: true,
        },
        LFRAmount: {
            type: String,
            required: true,
        },
        Rate: {
            type: Date,
            required: true,
        },
        VAT: {
            type:Number,
            required: true,
        },
        Cess: {
            type: Number,
            required: true,
        },
        TankDistribution:[TankDistributionSchema],
    },
    { timestamps: true }
);

module.exports = mongoose.model("dipStock", DipStockSchema);