const express=require("express");
const router=express.Router()

const Pumpcontroller=require('../controllers/PumpController')

router.post('/createpump',Pumpcontroller.createPump)
router.put('/createTank/:id',Pumpcontroller.createTank)
router.put('/createFuel/:id',Pumpcontroller.createFuel)
router.put('/createNozzle/:id',Pumpcontroller.createNozzle)
router.get('/getpump',Pumpcontroller.getPump)
router.get('/getpumpbyid/:id',Pumpcontroller.getPumpById)
router.put('/updatepump/:id',Pumpcontroller.updatePump)
router.delete('/deletepump/:id',Pumpcontroller.deletePump)
module.exports = router;                                                