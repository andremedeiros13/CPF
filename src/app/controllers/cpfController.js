const mongoose = require("mongoose");
const cpfModel = require("../models/cpfModel");
const { isValidCPF } = require("../services/services")

// mongoose.set('useFindAndModify', false);

module.exports = {
    
    async findAllCPFs(req, res) {

        try {
            
            const cpfs = await cpfModel.find({});
            const result = cpfs.map((res)=>{                
                const newRes = [];
                newRes.push(res.cpf);
                newRes.push(res.created_at);
                console.log(newRes);
                return newRes;
            })            
            return res.json(result);


        } catch (error) {
            res.status(500).send(error);
        }
    },
    
    async checkCPF(req, res) {
        try {
            const { cpf } = req.params;

            //Verifica se o CPF digitado é valido        
            if (!isValidCPF(cpf)) {
                return res.status(404).json({ type: "InvalidCpfException", message: "CPF is not valid." });
            }
            //Verifica se existe o CPF na base de dados
            const findCPF = await cpfModel.findOne({ cpf: cpf });
            console.log(findCPF);
            if (!findCPF) {
                return res.status(404).json({ type: "NotFoundCpfException", message: "CPF not found." });
            }
            const {created_at} = findCPF;
            return res.json({cpf, created_at});

        } catch (error) {
            return res.status(500).send(error);
        }

    },

    async addCPF(req, res) {
        try {
            const newCpf = new cpfModel(req.body);
            const { cpf } = newCpf;

            //Verificando se o CPF já está cadastrado na base
            const existsCPF = await cpfModel.findOne({ cpf: cpf });
            if (existsCPF != null) {
                return res.status(404).json({ type: "ExistsCpfException", message: "CPF already registered." });
            }

            //Verifica se o CPF informado é valido!
            if (!isValidCPF(cpf)) {
                return res.status(404).json({ type: "InvalidCpfException", message: "CPF is not valid." });
            }

            await newCpf.save();
            return res.json(newCpf);


        } catch (error) {
            return res.status(500).json(error);
        }
    },
    
    async removeCPF(req, res) {
        try {
            //Verifica se o CPF digitado é valido  
            const { cpf } = req.params;
            if (!isValidCPF(cpf)) {
                return res.status(404).json({ type: "InvalidCpfException", message: "CPF is not valid." });
            }
            const findCPF = await cpfModel.findOneAndDelete({ cpf: req.params.cpf });
            //Verifica se o CPF existe na base.
            if (!findCPF) {
                return res.status(404).json({ type: "NotFoundCpfException", message: "CPF not found." });
            }

            return res.status(200).json({message: "CPF successfully removed."});

        } catch (error) {
            return res.status(500).send(error);
        }

    }
}
