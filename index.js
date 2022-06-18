const express = require('express')
const app = express()
const port = 3000
const hbs = require('express-handlebars')

//CONFIG HANDLE-BARS
app.engine('hbs', hbs.engine({
    extname:'hbs',
    defaultLayout:'main'
})); app.set('view engine', 'hbs');

// midleware
app.use(express.static('public'))

// route home
app.get('/', (req, res)=>{
    res.render('index', {NavActiveCadastro:true})

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