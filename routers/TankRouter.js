const express=require("express");
const router=express.Router()

const TankController=require('../controllers/TankController')

router.post('/createTank',TankController.createTank)
// module.exports = router;
router.get('/getTank',TankController.getTank)
router.get('/getTankById/:id',TankController.getTankById)
router.put('/updateTank/:id',TankController.updateTank)
router.delete('/deleteTank/:id',TankController.deleteTank)

module.exports = router;                                                