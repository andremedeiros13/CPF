const mongoose = require("mongoose");
const cpfModel = require("../models/cpfModel");
const { findAll, findOne, create, remove } = require("../services/services")

// mongoose.set('useFindAndModify', false);

module.exports = {
    
    async findAllCPFs(req, res) {

        try {
            const result = await findAll();
            console.log(result);
            return res.status(200).json(result);
        } catch (error) {
            res.status(500).send(error);
        }
    },    
    async checkCPF(req, res) {
        try {                  
            const result = await findOne(req.params.cpf);            
            console.log(result);
            return res.status(200).json(result);            

        } catch (error) {            
            return res.status(500).json(error.message);
        }

    },

    async addCPF(req, res) {
        try {
            const newResult = await create(req.body)            
            return res.status(200).json(newResult);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
    
    async removeCPF(req, res) {
        try {

            const result = await remove(req.params.cpf)                        
            return res.status(200).json(result);

        } catch (error) {
            return res.status(500).send(error.message);
        }

    }
}
