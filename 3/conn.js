const Sequelize = require('sequelize')

// conecta com o banco de dados
const sequelize = new Sequelize('desafiomedyes', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

// testa conexao
sequelize.authenticate().then(() => {
    console.log("Conectado")
}).catch((erro) => {
    console.log("Falha ao tentar conectar: " + erro)
})

module.exports = sequelize
