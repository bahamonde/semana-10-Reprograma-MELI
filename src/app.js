//Chama bibliotecas usadas no projeto
const express = require("express")
const mongoose = require("mongoose") 
const bodyParser = require("body-parser") 


const app = express()

// Essa configuracao linka o projeto com o banco
mongoose.connect("mongodb://localhost:27017/reprograma", {useNewUrlParser: true});

//faz coneccao e fica escutando para verificar erros
let db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function(){
  console.log("Conexão feita com sucesso.")
  
})



//rotas
const index = require("./routes/index")
const alunas = require("./routes/alunasRoute")
const professoras = require("./routes/professorasRoute")

// app.use(express.json());  //PQ TA USANDO O BODY PARSER

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use(bodyParser.json());

app.use("/", index)
app.use("/alunas", alunas)
app.use("/professoras", professoras)

module.exports = app
