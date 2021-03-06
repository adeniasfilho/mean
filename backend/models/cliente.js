// importar o pacote mongoose
// importar o pacote mongoose
import { Schema, model } from "mongoose";

//definir o modelo = "schema" (parece um modelo relacional)
const clienteSchema = Schema({
  nome: { type: String, required: true },
  fone: { type: String, required: false, default: "00000000" },
  email: { type: String, required: true }, imagemURL: {type: String, required: true}
});

//exportar o modelo para torná-lo acessível aos outros módulos da aplicação
//Cliente é o nome associado a esse schema
export default model("Cliente", clienteSchema);
