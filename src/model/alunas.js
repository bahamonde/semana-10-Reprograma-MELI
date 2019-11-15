const mongoose = require('mongoose')

//INSTANCIANDO UM NOVO SCHEMA(MODELO) caracteristicas q o objeto vai possuir
const AlunasSchema = new mongoose.Schema({
    nome: {type: String},
    dateOfBirth: {type: String},
    livros:[{
        titulo: {type: String},
        leu: {type: String}
    }]
}, 
{
    versionKey: false  ///TIRA O V QUANDO CRIA UM NOVO REGISTRO
})


// ESTA DIZENDO QUE ESSE MODEL TEM ESSAS CARACTERISTICAS,EXPORTA AQUI
const Alunas = mongoose.model('Alunas', AlunasSchema);

module.exports = Alunas;