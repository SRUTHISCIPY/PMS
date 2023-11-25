const DipStock = require("../models/DipStockSchema")
module.exports={
  createDipStock:async(req,res)=>{
    const {Date,InvoiceNumber,VehicleNumber,AgentName,Product,Quantity,
        Amount,Note,TotalQuantityFilled,RemainingQuantity,PhoneNumber,
        LFRAmount,Rate,VAT,Cess,TankDistribution}=req.body;
    try{
        const result=await DipStock.create({
            Date,
            InvoiceNumber, 
            VehicleNumber,
            AgentName,
            Product,
            Quantity,
            Amount,
            Note,
            TotalQuantityFilled,
            RemainingQuantity,
            PhoneNumber,
            LFRAmount,
            Rate,
            VAT,
            Cess,
            TankDistribution
        });
        res.status(200).json({result});
    }
        catch(err){
        res.status(400).json({err});
        }
    },
   
getDipStock:async(req,res)=>{
    // const id=req.params.id
    try {
         const result1=await DipStock.find()
         res.status(200).json({result1});
    }
    catch(err) {
        res.status(400).json({err});
        } 
},
getDipStockById:async(req,res)=>{
    const id=req.params.id
    try {
         const result2=await DipStock.findById(id)
         res.status(200).json({result2});
    }
    catch(err) {
        res.status(400).json({err});
        }

    
},
updateDipStock:async(req,res)=>{
    const id=req.params.id
    try {
         await DipStock.findByIdAndUpdate(id,{
            Date:req.body.Date,
            InvoiceNumber:req.body.InvoiceNumber,
            VehicleNumber:req.body.VehicleNumber,
            AgentName:req.body.AgentName,
            Product:req.body.Product,
            Quantity:req.body.Quantity,
            Amount:req.body.Amount,
            Note:req.body.Note,
            TotalQuantityFilled:req.body.TotalQuantityFilled,
            RemainingQuantity:req.body.RemainingQuantity,
            PhoneNumber:req.body.PhoneNumber,
            LFRAmount:req.body.LFRAmount,
            Rate:req.body.Rate,
            VAT:req.body.VAT,
            Cess:req.body.Cess,
            TankDistribution:req.body.TankDistribution
         });
         res.status(200).json("success");
    }
    catch(err) {
        res.status(400).json({err});
        }

    },
deleteDipStock:async(req,res)=>{
        const id=req.params.id
        try {
             await DipStock.findByIdAndDelete(id)
             res.status(200).json("success");
        }
        catch(err) {
            res.status(400).json({err});
            }
    
        }}
    