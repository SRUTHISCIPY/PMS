const Pump = require("../models/PumpSchema")
module.exports = {
    createPump: async (req, res) => {
        const { PumpName, PhoneNumber, Address, email } = req.body;
        try {
            const result = await Pump.create({
                PumpName,
                PhoneNumber,
                Address,
                email,
                Tank: []
            });
            res.status(200).json({ result });
        }
        catch (err) {
            res.status(400).json({ err });
        }
    },

    getPump: async (req, res) => {
        const id = req.params.id
        try {
            const result1 = await Pump.find()
            res.status(200).json({ result1 });
        }
        catch (err) {
            res.status(400).json({ err });
        }
    },
    getPumpById: async (req, res) => {
        const id = req.params.id
        try {
            const result2 = await Pump.findById(id)
            res.status(200).json({ result2 });
        }
        catch (err) {
            res.status(400).json({ err });
        }


    },
    createTank: async (req, res) => {
        const id = req.params.id
        try {
            await Pump.findByIdAndUpdate(id, {
                $push: {
                    Tank: req.body.Tank
                }
            });
            res.status(200).json("success");
        }
        catch (err) {
            res.status(400).json({ err });
        }

    },

    updatePump: async (req, res) => {
        const id = req.params.id
        try {
            await Pump.findByIdAndUpdate(id, {
                PumpName: req.body.PumpName,
                PhoneNumber: req.body.PhoneNumber,
                Address: req.body.Address,
                email: req.body.email,
            });
            res.status(200).json("success");
        }
        catch (err) {
            res.status(400).json({ err });
        }

    },
    deletePump: async (req, res) => {
        const id = req.params.id
        try {
            await Pump.findByIdAndDelete(id)
            res.status(200).json("success");
        }
        catch (err) {
            res.status(400).json({ err });
        }

    }
}
