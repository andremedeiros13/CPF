const cpfModel = require("../models/cpfModel");
function isValidCPF(cpf) {
    if (typeof cpf !== "string") return false
    cpf = cpf.replace(/[\s.-]*/igm, '')
    if (
        !cpf ||
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999" 
    ) {
        return false
    }
    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(9, 10)) ) return false
    soma = 0
    for (var i = 1; i <= 10; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(10, 11) ) ) return false
    return true

    //fonte:Função para validar CPF
    //https://gist.github.com/joaohcrangel/8bd48bcc40b9db63bef7201143303937
}

function cpfException(type, message) {
    this.type = type;
    this.message = message;
 }

async function findCPF(cpf){
    const result = await cpfModel.findOne({cpf: cpf });          
    return result;
 }

module.exports = {     
    async findAll() {
        try {
            
            const cpfs = await cpfModel.find({});                        
            const resultCPF = cpfs.map((res)=>{                
                const newRes = [];
                newRes.push(res.cpf);
                newRes.push(res.created_at);                
                return newRes;
            
        })       
        
            return  resultCPF;


        } catch (error) {
            res.status(500).send(error);
        }
    },
    async findOne(cpf) {                    

        if (!isValidCPF(cpf)) {                
                throw new cpfException("InvalidCpfException","CPF is not valid.");    
            }
            
            const existsCPF = await findCPF(cpf);
            if (existsCPF == null) {                
                throw new cpfException("NotFoundCpfException","CPF not found.");
            }
        
            const {created_at} = await findCPF(cpf);
            const resultCPF = [{
                cpf: cpf,
                created_at: created_at
            }];                        
            return resultCPF;

    },
    async create(body) {        
            const newCpf = new cpfModel(body);        
            const { cpf } = newCpf;                    
            
            const existsCPF = await findCPF(cpf);
            if (existsCPF != null) {                
                throw new cpfException("ExistsCpfException","CPF already registered.");                          
            }
            
            if (!isValidCPF(cpf)) {                
                throw new cpfException("InvalidCpfException","CPF is not valid.");                 
            }
            
            await newCpf.save();
            return newCpf;        
    },

    async remove(cpf) {                    
            if (!isValidCPF(cpf)) {                
                throw new cpfException("InvalidCpfException","CPF is not valid.");                    
            }
            
            const existsCPF = await findCPF(cpf); 
            if (existsCPF == null) {                
                throw new cpfException("NotFoundCpfException","CPF not found.");                
            }

            const message = "CPF successfully removed.";
            return message;       

    }
    
}
