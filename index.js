const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')

//CONFIG HANDLE-BARS
app.engine('hbs', hbs.engine({
    extname:'hbs',
    defaultLayout:'main'
})); app.set('view engine', 'hbs');

// midleware
app.use(express.static('public')) 
app.use(bodyParser.urlencoded({extended:false}))

// route home
app.get('/', (req, res)=>{  
    res.render('index', {NavActiveCadastro:true})

})
app.post('/cad',(req, res)=>{
    req.body
    //validar os dados recebidos 
    //tratar os dados recebidos
    //colocar os dados em um banco de dados
})

// route Users
app.get('/users', (req, res)=>{
    res.render('users', {NavActiveUsuario:true})

})

// route Users
app.get('/edit', (req, res)=>{
    res.render('edit')

})
// startador de porta
app.listen(port, ()=>{
    console.log('Servidor rodando em http://localhost:'+port);
})