const express = require("express");
const cpfController = require('../controllers/cpfController');

const router = express.Router();



router.get("/cpf", cpfController.findAllCPFs);
router.post("/cpf", cpfController.addCPF);
router.get("/cpf/:cpf", cpfController.checkCPF);
router.delete("/cpf/:cpf", cpfController.removeCPF);


module.exports = router;

