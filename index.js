const express = require('express')
const app = express()
const port = 3000
const hbs = require('express-handlebars')

//CONFIG HANDLE-BARS
app.engine('hbs', hbs.engine({
    extname:'hbs',
    defaultLayout:'main'
})); app.set('view engine', 'hbs');


app.get('/', (req, res)=>{
    res.render('index', {name:"Ednei"})

})
app.listen(port, ()=>{
    console.log('Servidor rodando em http://localhost:'+port);
})