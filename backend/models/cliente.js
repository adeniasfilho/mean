// importar o pacote mongoose
const { formatNumber } = require("@angular/common");
const mongoose = require("mongoose");

//definir o modelo = "Schema" (parece um modelo relacional)
const clienteSchema = mongoose.Schema({
    nome:{type: String, required: true},
    fone :{type:String, required: false, default: "00000000"},
    email:{type:String, required: true}
})

// exportar o modelo para torná-lo acessível a outros módulos da aplicação
//Cliente é o nome associado a ese schema
module.exports = mongoose.module("Cliente", clienteSchema);
