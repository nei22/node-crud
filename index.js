const express = require('express')
const app = express()
const port = 3000
const hbs = require('express-handlebars')

app.get('/', (req, res)=>{
    res.send('<h1>Ola mundo!</h1>')

})
app.listen(port, ()=>{
    console.log('Servidor rodando em http://localhost:3000');
})