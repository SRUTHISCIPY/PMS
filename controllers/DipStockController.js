const DipStock = require("../models/DipStockSchema");
const PumpSchema = require("../models/PumpSchema");
// const Tank = require("../models/TankSchema");

async function AddQuantity(pumpID, UpdateTank) {

  try {
    const pump = await PumpSchema.findById(pumpID)
    if (!pump) {
      console.log("No Pump Found")
    } else {
      const Tank = pump.Tank.find(
        tank => tank._id == UpdateTank.Tank
      )
      if (!Tank) {
        console.log("Tank Not found")
      }
      else{
        const TankClone = Tank
        TankClone.Quantity = parseInt(UpdateTank.Quantity)+parseInt(TankClone.Quantity)
        Object.assign(Tank,TankClone);
        await pump.save()
        console.log("May be Updated")
      }
    }
  }
  catch (err) {
    console.log(err)
  }

  // const pump = await PumpSchema.findById(pumpID)
  // if (pump) {
  //   const tanks = pump.Tank
  //   tanks.map((item, index) => {
  //     if (Tank.Tank == item._id) {
  //       console.log(Tank.Quantity, "+", item.Quantity, "=", parseInt(Tank.Quantity) + parseInt(item.Quantity))
  //       try {
  //        PumpSchema.findByIdAndUpdate(pumpID, {
  //           Tank:{

  //           }
  //         })
  //       }
  //       catch(error){
  //         console.log(error)
  //       }

  //     } else {
  //       console.log("No")
  //     }
  //   })
  // }
}
module.exports = {
  createDipStock: async (req, res) => {
    const {
      Date,
      InvoiceNumber,
      VehicleNumber,
      AgentName,
      Product,
      Quantity,
      Price,
      Note,
      TotalQuantityFilled,
      RemainingQuantity,
      PhoneNumber,
      LFRAmount,
      Rate,
      VAT,
      Cess,
      TankDistribution,
      PumpId,
    } = req.body;
    try {
      const result = await DipStock.create({
        Date,
        InvoiceNumber,
        VehicleNumber,
        AgentName,
        Product,
        Quantity,
        Price,
        Note,
        TotalQuantityFilled,
        RemainingQuantity,
        PhoneNumber,
        LFRAmount,
        Rate,
        VAT,
        Cess,
        TankDistribution,
      });
      res.status(200).json({ result });
      const tanks = result.TankDistribution;
      tanks.map((tank) => {
        AddQuantity(PumpId, tank);
      });
    } catch (err) {
      res.status(400).json({ err });
    }
  },

  getDipStock: async (req, res) => {
    // const id=req.params.id
    try {
      const result1 = await DipStock.find();
      res.status(200).json({ result1 });
    } catch (err) {
      res.status(400).json({ err });
    }
  },
  getDipStockById: async (req, res) => {
    const id = req.params.id;
    try {
      const result2 = await DipStock.findById(id);
      res.status(200).json({ result2 });
    } catch (err) {
      res.status(400).json({ err });
    }
  },
  updateDipStock: async (req, res) => {
    const id = req.params.id;
    try {
      await DipStock.findByIdAndUpdate(id, {
        Date: req.body.Date,
        InvoiceNumber: req.body.InvoiceNumber,
        VehicleNumber: req.body.VehicleNumber,
        AgentName: req.body.AgentName,
        Product: req.body.Product,
        Quantity: req.body.Quantity,
        Price: req.body.Price,
        Note: req.body.Note,
        TotalQuantityFilled: req.body.TotalQuantityFilled,
        RemainingQuantity: req.body.RemainingQuantity,
        PhoneNumber: req.body.PhoneNumber,
        LFRAmount: req.body.LFRAmount,
        Rate: req.body.Rate,
        VAT: req.body.VAT,
        Cess: req.body.Cess,
        TankDistribution: req.body.TankDistribution,
      });
      res.status(200).json("success");
    } catch (err) {
      res.status(400).json({ err });
    }
  },
  deleteDipStock: async (req, res) => {
    const id = req.params.id;
    try {
      await DipStock.findByIdAndDelete(id);
      res.status(200).json("success");
    } catch (err) {
      res.status(400).json({ err });
    }
  },
};
