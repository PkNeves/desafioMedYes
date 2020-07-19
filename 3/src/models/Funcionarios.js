const Sequelize = require('sequelize')
const sequelize = require('../../conn')
// importa model Area para usar como chave estrangeira em funcionários
const Areas = require('./Areas')

// define tabela funcionarios no banco de dados
const Funcionarios = sequelize.define('funcionarios', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    salario: {
        type: Sequelize.FLOAT(10,2)
    },
    area: {
        type: Sequelize.STRING(2),
        references: {
            model: Areas,
            key: 'codigo'
        }
    }
},
{
    timestamps: false
})

// cria tabela no banco de dados
Funcionarios.sync()

module.exports = Funcionarios

