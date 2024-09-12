const express = require('express');
const app = express();
const path = require('path');

const connection = require('./db_connection/conection');
const ArticuloModel = require('./models/articulo.model');

const session = require('express-session');
const passport = require('passport');
const bot = require('../src/bot/bot');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

passport
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/crearArticulo.routes'));
app.use(require('./routes/listaArticulos.routes'));
app.use(require('./routes/articulo.routes'));

app.post('/articuloCreado',async (req,res)=>{
    
    try {
        await connection();
        let titulo = req.body.nombre;
        titulo = titulo.split(' ').join('-');
        
        let articulo = new ArticuloModel({
            titulo,
            contenido: req.body.contenido,
            nombre: req.body.nombre
        });

        articulo.save().then(doc=>{
            console.log('Articulo creado');
            bot.articuloCreado('http://localhost:3000/articulos/'+doc.titulo);
            res.send(doc);
        }).catch(err=>{
            console.log(err);
            res.status(500).send('Error al crear el articulo');
        });

    } catch (err) {
        console.log(err);
        res.status(500).send('Error al crear el articulo');
    }
});

app.use(require('./routes/server.routes'));
app.use(require('./routes/login.routes'));
app.use(require('./routes/perfil.routes'));

app.listen(3000,function(req,res){
    console.log('Servidor encendido');
});

