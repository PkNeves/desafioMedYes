const express = require('express')
const app = express()
const fs = require('fs')

// Config
    app.use(express.json())
    // Tabelas 
    const Areas = require('./src/models/Areas');
    const Funcionarios = require('./src/models/Funcionarios');

app.get('/funcionarios', (req, res) => {
    Funcionarios.findAll({
        attributes: ['id','nome', 'sobrenome']
    }).then((funcionarios) => {
        res.send(funcionarios)
    }).catch(() => {
       res.sendStatus(404)
    })
})

app.get('/funcionarios/:id', (req, res) => {
    Funcionarios.findOne({
        attributes: ['nome', 'sobrenome'],
        where: {
            id: req.params.id
        }
    }).then((funcionarios) => {
        if (funcionarios.length == 0)
            res.sendStatus(404)
        else 
            res.send(funcionarios)
    }).catch(() => {
       res.sendStatus(404)
    })
})

app.post('/funcionarios', (req, res) => {
    Funcionarios.create(req.body).then((funcionario) => {
        return res.json(funcionario.id)
    }).catch((erro) => {
        res.send('O seguinte erro ocorreu ao tentar criar um novo usuário: ', erro)
    })
})

app.get('/criar', (req, res) => {

    const caminho = __dirname + '/funcionarios.json'
    const conteudo = JSON.parse(fs.readFileSync(caminho, 'utf-8'))

    const areas = conteudo.areas
    const funcionarios = conteudo.funcionarios

    // salva as areas no banco de dados
    areas.forEach((nome) => {
        Areas.create(nome)
    })

    // salva os funcionarios no banco de dados
    funcionarios.forEach((nome) => {
        Funcionarios.create(nome)
    })

    res.send('Tabelas povoadas com sucesso')
})

app.listen(3030)