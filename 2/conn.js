const Sequelize = require('sequelize')

const sequelize = new Sequelize('desafiomedyes', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
sequelize.authenticate().then(() => {
    console.log("Conectado")
}).catch((erro) => {
    console.log("Falha ao tentar conectar: " + erro)
})

module.exports = sequelize