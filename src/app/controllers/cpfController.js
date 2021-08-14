const mongoose = require("mongoose");
const cpfModel = require("../models/cpfModel");
const { findAll, findOne, create, remove } = require("../services/services")

module.exports = {
    
    async findAllCPFs(req, res) {

        try {
            const result = await findAll();            
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).send(error);
        }
    },    
    async checkCPF(req, res) {
        try {                  
            const result = await findOne(req.params.cpf);                        
            return res.status(200).json(result);            

        } catch (error) {            
            return res.status(500).json(error);
        }

    },

    async addCPF(req, res) {
        try {
            const newResult = await create(req.body)            
            return res.status(200).json(newResult);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    
    async removeCPF(req, res) {
        try {

            const result = await remove(req.params.cpf)                        
            return res.status(200).json(result);

        } catch (error) {
            return res.status(500).json(error);
        }

    }
}
