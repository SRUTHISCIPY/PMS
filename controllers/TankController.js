const Tank = require("../models/TankSchema")
module.exports={
  createTank:async(req,res)=>{
    const {TankNumber,Volume,Product,ProductCode,Quantity,note}=req.body;
    try{
        const result=await Tank.create({
            TankNumber,
            Volume, 
            Product,
            ProductCode,
            Quantity,
            note
        });
        res.status(200).json({result});
    }
        catch(err){
        res.status(400).json({err});
        }
    },
   
getTank:async(req,res)=>{
    const id=req.params.id
    try {
         const result1=await Tank.find()
         res.status(200).json({result1});
    }
    catch(err) {
        res.status(400).json({err});
        } 
},
getTankById:async(req,res)=>{
    const id=req.params.id
    try {
         const result2=await Tank.findById(id)
         res.status(200).json({result2});
    }
    catch(err) {
        res.status(400).json({err});
        }

    
},
updateTank:async(req,res)=>{
    const id=req.params.id
    try {
         await Tank.findByIdAndUpdate(id,{
            TankNumber:req.body.TankNumber,
            Volume:req.body.Volume,
            Product:req.body.Product,
            ProductCode:req.body.ProductCode,
            Quantity:req.body.Quantity,
            note:req.body.note
         });
         res.status(200).json("success");
    }
    catch(err) {
        res.status(400).json({err});
        }

    },
deleteTank:async(req,res)=>{
        const id=req.params.id
        try {
             await Tank.findByIdAndDelete(id)
             res.status(200).json("success");
        }
        catch(err) {
            res.status(400).json({err});
            }
    
        }}
    