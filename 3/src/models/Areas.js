const Sequelize = require('sequelize')
const sequelize = require('../../conn')

// define tabela areas no banco de dados
const Areas = sequelize.define('areas', {
    codigo: {
        type: Sequelize.STRING(2),
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING
    }
},
{
    timestamps: false
})

// cria tabela no banco de dados
Areas.sync()

module.exports = Areas