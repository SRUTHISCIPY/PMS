const Employee = require("../models/EmployeeSchema")
module.exports={
  createEmployee:async(req,res)=>{
    const {UserId}=req.body;
    try{
        const result=await Employee.create({
            UserId
        });
        res.status(200).json({result});
    }
        catch(err){
        res.status(400).json({err});
        }
    },
   
getEmployee:async(req,res)=>{
    const id=req.params.id
    try {
         const result1=await Employee.find()
         res.status(200).json({result1});
    }
    catch(err) {
        res.status(400).json({err});
        } 
},
getEmployeeById:async(req,res)=>{
    const id=req.params.id
    try {
         const result2=await Employee.findById(id)
         res.status(200).json({result2});
    }
    catch(err) {
        res.status(400).json({err});
        }

    
},
updateEmployee:async(req,res)=>{
    const id=req.params.id
    try {
         await Employee.findByIdAndUpdate(id,{
            UserId:req.body.UserId
         });
         res.status(200).json("success");
    }
    catch(err) {
        res.status(400).json({err});
        }

    },
deleteEmployee:async(req,res)=>{
        const id=req.params.id
        try {
             await Employee.findByIdAndDelete(id)
             res.status(200).json("success");
        }
        catch(err) {
            res.status(400).json({err});
            }
    
        }}
    