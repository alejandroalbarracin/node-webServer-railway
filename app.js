require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;




//handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido estatico 

app.use(express.static('public'));




app.get('/',  (req, res) => {
    res.render('home', {
      nombre: 'Alejandro Albarracin',
      titulo: 'curso node'
    })
  })

  app.get('/elements',  (req, res) => {
    res.render('elements',{
      nombre: 'Alejandro Albarracin',
      titulo: 'elements'
    } )
  })

  app.get('/generic',  (req, res) => {
    res.render('generic', {
      titulo: 'generic'
    } )
  })

app.listen(port, () => {
    console.log(`Estoy corriendo en el puerto ${port}`);
})