const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const path = require('path')
const fs = require('fs')

// Config
    app.use(express.json())
    // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    // Public 
    app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    const caminho = __dirname + '/funcionarios.json'
    const conteudo = JSON.parse(fs.readFileSync(caminho, 'utf-8'))

    const areas = conteudo.areas
    const funcionarios = conteudo.funcionarios
    const areas2 = []

    areas.forEach(a => {
        areas2[a.codigo] = a.nome
    })
    funcionarios.forEach(f => {
        f.nomeArea = areas2[f.area]
    })
    
    res.render('tabelaFuncionarios', {funcionarios: funcionarios})
})


app.listen(3030)